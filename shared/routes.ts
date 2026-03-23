import { z } from "zod";
import { insertTeacherSchema, teachers, type InsertTeacher } from "./schema";

export const api = {
  teachers: {
    list: {
      method: "GET" as const,
      path: "/api/teachers",
      input: z.object({
        search: z.string().optional(),
        subject: z.string().optional(),
        board: z.string().optional(),
      }).optional(),
      responses: {
        200: z.array(z.custom<typeof teachers.$inferSelect>()),
      },
    },
    get: {
      method: "GET" as const,
      path: "/api/teachers/:id",
      responses: {
        200: z.custom<typeof teachers.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
    create: {
      method: "POST" as const,
      path: "/api/teachers",
      input: insertTeacherSchema,
      responses: {
        201: z.custom<typeof teachers.$inferSelect>(),
        400: z.object({ message: z.string(), field: z.string().optional() }),
        401: z.object({ message: z.string() }),
      },
    },
    update: {
      method: "PATCH" as const, // Using PATCH for partial updates
      path: "/api/teachers/:id",
      input: insertTeacherSchema.partial(),
      responses: {
        200: z.custom<typeof teachers.$inferSelect>(),
        400: z.object({ message: z.string(), field: z.string().optional() }),
        401: z.object({ message: z.string() }),
        403: z.object({ message: z.string() }),
        404: z.object({ message: z.string() }),
      },
    },
    toggleActive: {
      method: "PATCH" as const,
      path: "/api/teachers/:id/active",
      input: z.object({ isActive: z.boolean() }),
      responses: {
        200: z.custom<typeof teachers.$inferSelect>(),
        401: z.object({ message: z.string() }),
        403: z.object({ message: z.string() }), // Admin only
        404: z.object({ message: z.string() }),
      },
    },
    me: {
      method: "GET" as const,
      path: "/api/teachers/me",
      responses: {
        200: z.custom<typeof teachers.$inferSelect>().nullable(), // Returns null if no profile
        401: z.object({ message: z.string() }),
      }
    }
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type { InsertTeacher };
