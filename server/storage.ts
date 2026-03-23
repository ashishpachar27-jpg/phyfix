import { db } from "./db";
import { 
  teachers, 
  type Teacher, 
  type InsertTeacher, 
  type UpdateTeacherRequest 
} from "@shared/schema";
import { eq, ilike, or, and, arrayContains } from "drizzle-orm";

export interface IStorage {
  // Teacher operations
  getTeacher(id: number): Promise<Teacher | undefined>;
  getTeacherByUserId(userId: string): Promise<Teacher | undefined>;
  getTeachers(filters?: {
    search?: string;
    subject?: string;
    board?: string;
    isActive?: boolean;
  }): Promise<Teacher[]>;
  createTeacher(teacher: InsertTeacher): Promise<Teacher>;
  updateTeacher(id: number, updates: UpdateTeacherRequest): Promise<Teacher>;
  setTeacherActive(id: number, isActive: boolean): Promise<Teacher>;
  deleteTeacher(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getTeacher(id: number): Promise<Teacher | undefined> {
    const [teacher] = await db.select().from(teachers).where(eq(teachers.id, id));
    return teacher;
  }

  async getTeacherByUserId(userId: string): Promise<Teacher | undefined> {
    const [teacher] = await db.select().from(teachers).where(eq(teachers.userId, userId));
    return teacher;
  }

  async getTeachers(filters?: {
    search?: string;
    subject?: string;
    board?: string;
    isActive?: boolean;
  }): Promise<Teacher[]> {
    const conditions = [];

    if (filters?.isActive !== undefined) {
      conditions.push(eq(teachers.isActive, filters.isActive));
    } else {
      // Default to only showing active teachers if not specified, 
      // unless we want to list all (e.g. for admin).
      // But typically we'll specify filters.
    }

    if (filters?.search) {
      const search = `%${filters.search}%`;
      conditions.push(
        or(
          ilike(teachers.name, search),
          ilike(teachers.bio, search)
        )
      );
    }

    if (filters?.subject) {
      // Postgres array query: subject = ANY(subjects)
      // Drizzle arrayContains
      conditions.push(arrayContains(teachers.subjects, [filters.subject]));
    }

    if (filters?.board) {
      conditions.push(arrayContains(teachers.boards, [filters.board]));
    }

    return await db.select()
      .from(teachers)
      .where(and(...conditions));
  }

  async createTeacher(insertTeacher: any): Promise<Teacher> {
    const [teacher] = await db
      .insert(teachers)
      .values(insertTeacher)
      .returning();
    return teacher;
  }

  async updateTeacher(id: number, updates: UpdateTeacherRequest): Promise<Teacher> {
    const [teacher] = await db
      .update(teachers)
      .set(updates)
      .where(eq(teachers.id, id))
      .returning();
    return teacher;
  }

  async setTeacherActive(id: number, isActive: boolean): Promise<Teacher> {
    const [teacher] = await db
      .update(teachers)
      .set({ isActive })
      .where(eq(teachers.id, id))
      .returning();
    return teacher;
  }

  async deleteTeacher(id: number): Promise<void> {
    await db.delete(teachers).where(eq(teachers.id, id));
  }
}

export const storage = new DatabaseStorage();
