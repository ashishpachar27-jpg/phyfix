import type { Express } from "express";
import type { Server } from "http";
import { setupAuth, isAuthenticated, registerAuthRoutes } from "./replit_integrations/auth";
import { registerObjectStorageRoutes } from "./replit_integrations/object_storage";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { teachers } from "@shared/schema";
import { sendNewTeacherNotification, sendApprovalNotification } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Setup Auth first
  await setupAuth(app);
  registerAuthRoutes(app);
  
  // Setup Object Storage
  registerObjectStorageRoutes(app);

  // === Teacher Routes ===

  // List teachers (Public)
  app.get(api.teachers.list.path, async (req, res) => {
    try {
      // Parse query params (optional)
      // Note: req.query values are strings
      const { search, subject, board } = req.query as { search?: string, subject?: string, board?: string };
      
      const teachersList = await storage.getTeachers({
        search,
        subject,
        board,
        isActive: true, // Only public active teachers
      });
      res.json(teachersList);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get current teacher profile (Protected)
  app.get(api.teachers.me.path, isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const teacher = await storage.getTeacherByUserId(userId);
      res.json(teacher || null);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get specific teacher (Public)
  app.get(api.teachers.get.path, async (req, res) => {
    try {
      const idStr = req.params.id as string;
      const id = parseInt(idStr);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const teacher = await storage.getTeacher(id);
      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }
      res.json(teacher);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Create teacher profile (Protected)
  app.post(api.teachers.create.path, isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      // Check if already exists
      const existing = await storage.getTeacherByUserId(userId);
      if (existing) {
        return res.status(400).json({ message: "Profile already exists" });
      }

      const input = api.teachers.create.input.parse({
        ...req.body,
        userId: userId, // Enforce current user
        email: req.user.claims.email || req.body.email, // Prefer auth email
      });
      
      const teacher = await storage.createTeacher(input);
      
      // Send email notification to admin about new teacher registration
      sendNewTeacherNotification({
        name: teacher.name,
        email: teacher.email,
        subjects: teacher.subjects,
        boards: teacher.boards,
        experienceYears: teacher.experienceYears,
        qualifications: teacher.qualifications || [],
      }).catch(err => console.error('Failed to send notification:', err));
      
      res.status(201).json(teacher);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Update teacher profile (Protected - Owner only)
  app.patch(api.teachers.update.path, isAuthenticated, async (req: any, res) => {
    try {
      const id = parseInt(req.params.id);
      const userId = req.user.claims.sub;
      
      const teacher = await storage.getTeacher(id);
      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }

      // Check ownership
      if (teacher.userId !== userId) {
        // Allow admin override later if needed, for now just owner
        return res.status(403).json({ message: "Forbidden" });
      }

      const input = api.teachers.update.input.parse(req.body);
      const updated = await storage.updateTeacher(id, input);
      res.json(updated);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Admin emails that have full access
  const ADMIN_EMAILS = ["ashishpachar27@gmail.com"];

  // Helper function to check if user is admin
  const isAdminUser = (userEmail: string | undefined): boolean => {
    return userEmail ? ADMIN_EMAILS.includes(userEmail.toLowerCase()) : false;
  };

  // Check if current user is admin (Protected)
  app.get("/api/auth/is-admin", isAuthenticated, async (req: any, res) => {
    try {
      const userEmail = req.user.claims.email;
      res.json({ isAdmin: isAdminUser(userEmail) });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Toggle Active (Admin only)
  app.patch(api.teachers.toggleActive.path, isAuthenticated, async (req: any, res) => {
    try {
      const userEmail = req.user.claims.email;
      
      if (!isAdminUser(userEmail)) {
         return res.status(403).json({ message: "Admin access required" });
      }

      const id = parseInt(req.params.id);
      
      // Get teacher before update to check if this is an approval
      const teacherBefore = await storage.getTeacher(id);
      
      // Validate request body
      const input = api.teachers.toggleActive.input.parse(req.body);
      
      const updated = await storage.setTeacherActive(id, input.isActive);
      
      // If teacher is being activated (approved), send approval notification
      if (teacherBefore && !teacherBefore.isActive && input.isActive && updated) {
        sendApprovalNotification(updated.email, updated.name, true)
          .catch(err => console.error('Failed to send approval notification:', err));
      }
      
      res.json(updated);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid request: isActive must be a boolean" });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Delete teacher (Admin only)
  app.delete("/api/teachers/:id", isAuthenticated, async (req: any, res) => {
    try {
      const userEmail = req.user.claims.email;
      
      if (!isAdminUser(userEmail)) {
         return res.status(403).json({ message: "Admin access required" });
      }

      const id = parseInt(req.params.id);
      await storage.deleteTeacher(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all teachers for admin (including inactive)
  app.get("/api/admin/teachers", isAuthenticated, async (req: any, res) => {
    try {
      const userEmail = req.user.claims.email;
      
      if (!isAdminUser(userEmail)) {
         return res.status(403).json({ message: "Admin access required" });
      }

      const teachersList = await storage.getTeachers({});
      res.json(teachersList);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Seed data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingTeachers = await storage.getTeachers({ isActive: true });
  if (existingTeachers.length === 0) {
    // Add Ashish's profile
    await storage.createTeacher({
      name: "ASHISH",
      email: "ashishpachar27@gmail.com",
      bio: "I am deeply passionate about teaching mathematics and physics, nurturing students' understanding from primary to graduate levels. I've spent the last 15 years catering to both national and international students. All lecture are ONE TO ONE. All lectures are recorded, and class notes are provided for further review. After each session, homework and assignments are assigned, followed by a test upon completing a chapter. All classes are conducted via the Zoom application with cameras enabled.",
      photoUrl: "https://userphotos2.teacheron.com/1162021-62481.jpeg",
      subjects: ["Math", "Physics", "Python"],
      boards: ["IB", "IGCSE", "CBSE", "ICSE", "A-Level", "GCSE", "O Level", "AP", "JEE", "NEET", "MYP"],
      experienceYears: 15,
      charges: "₹1,000–2,000/hour",
      qualifications: ["M. Sc physics from KUK, Kurukshetra", "GATE Qualified", "CTET Qualified"],
      whatsappNumber: "8684901516",
      teacherOnUrl: "https://www.teacheron.com/tutor/4Sih",
      rating: "4.97",
      reviewCount: 40,
      isActive: true,
      isAdmin: true
    });
    
    // Add Mansi's profile
    await storage.createTeacher({
      name: "Mansi",
      email: "mansi@example.com",
      bio: "I am Mansi, a Research Scholar in the Department of Mathematics at IIT Roorkee. I have a deep passion for both learning and teaching mathematics, and I enjoy exploring its beauty. With nearly five years of online teaching experience, I have worked with students across the globe, ranging from children aged 12 and above to university-level learners.\n\nMy expertise spans AP Algebra1-2, AP Geometry, AP Pre-Calculus, AP Calculus AB/BC, SAT, Vector Algebra, Linear Algebra, Numerical Analysis, Real Analysis, Group Theory, Probability Theory, and Differential Equations. I conduct classes via Zoom and Google Meet using personalized approaches tailored to each student's learning style.\n\nKnown for my patience and clarity, I mentor several students, guiding them through challenging concepts and helping them build lasting confidence in mathematics. I believe that with the right guidance, anyone can enjoy and excel in math.",
      photoUrl: "https://userphotos2.teacheron.com/792340-27830.jpeg",
      subjects: ["Math", "SAT Math", "AP Calculus", "Linear Algebra", "Real Analysis", "Differential Equations"],
      boards: ["IGCSE", "GCSE", "IB", "AP", "A-Level", "O Level", "CBSE"],
      experienceYears: 5,
      charges: "₹900–2,000/hour",
      qualifications: ["PhD Mathematics from IIT Roorkee", "M.Sc Mathematics from IIT Patna (9.6/10)", "B.Sc(P.C.M.)", "Qualified IIT JAM, GATE, CSIR-UGC NET"],
      whatsappNumber: "8684901516",
      teacherOnUrl: "https://www.teacheron.com/tutor/3k7G",
      rating: "4.85",
      reviewCount: 2,
      isActive: true,
      isAdmin: false
    });
  }
}
