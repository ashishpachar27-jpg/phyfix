import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { users as authUsers } from "./models/auth";
import { relations } from "drizzle-orm";

// Export auth models so they are included in migrations
export * from "./models/auth";

export const teachers = pgTable("teachers", {
  id: serial("id").primaryKey(),
  userId: text("user_id").unique(), // Optional link to auth user, can be null initially? Better to link on creation if possible.
  // Actually, for a multi-teacher platform where they manage their own profile, linking to auth user is crucial.
  // We'll make it unique so one user = one teacher profile.
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  bio: text("bio").notNull(),
  photoUrl: text("photo_url"),
  videoUrl: text("video_url"),
  subjects: text("subjects").array().notNull(), // Math, Physics
  boards: text("boards").array().notNull(), // IB, IGCSE, CBSE, etc.
  experienceYears: integer("experience_years").notNull(),
  charges: text("charges").notNull(), // e.g. "₹500/hr"
  qualifications: text("qualifications").array(),
  whatsappNumber: text("whatsapp_number").notNull(),
  teacherOnUrl: text("teacher_on_url"),
  rating: text("rating").default("5.0"),
  reviewCount: integer("review_count").default(0),
  isActive: boolean("is_active").default(false).notNull(), // Admin approval
  isAdmin: boolean("is_admin").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const teachersRelations = relations(teachers, ({ one }) => ({
  user: one(authUsers, {
    fields: [teachers.userId],
    references: [authUsers.id],
  }),
}));

export const insertTeacherSchema = createInsertSchema(teachers).omit({ 
  id: true, 
  createdAt: true, 
  isActive: true, 
  isAdmin: true 
});

export type Teacher = typeof teachers.$inferSelect;
export type InsertTeacher = z.infer<typeof insertTeacherSchema>;

// Request types
export type CreateTeacherRequest = InsertTeacher;
export type UpdateTeacherRequest = Partial<InsertTeacher>;

// Response types
export type TeacherResponse = Teacher;
