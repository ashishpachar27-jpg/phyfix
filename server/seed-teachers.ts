import { db } from "./db";
import { teachers } from "@shared/schema";
import { eq } from "drizzle-orm";

function seedLog(message: string) {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [seed] ${message}`);
}

const seedTeachers = [
  {
    name: "Sanchit Gawri",
    email: "sanchit@example.com",
    bio: "Passionate about nurturing young minds and fostering a love for mathematics, I am a dedicated educator committed to providing quality education and inspiring students to excel in the realm of mathematics. With a Master's degree in Mathematics and certification through the Haryana Teacher Eligibility Test (HTET), I bring a solid foundation of knowledge and expertise to my teaching practice. I have had the privilege of working with diverse groups of students at RPS Public School, whether it's teaching fundamental concepts or preparing students for competitive examinations.",
    photoUrl: "https://userphotos2.teacheron.com/1219411-54351.jpeg",
    subjects: ["Math", "Science", "ICSE Maths", "ISC Mathematics"],
    boards: ["CBSE", "ICSE", "ISC"],
    experienceYears: 5,
    charges: "₹100–1,000/hour",
    qualifications: ["M.Sc Mathematics from Kurukshetra University", "B.Ed. from GJUS&T, Hisar", "HTET Certified Teacher", "Pursuing Ph.D"],
    whatsappNumber: "8684901516",
    teacherOnUrl: "https://www.teacheron.com/tutor/57dV",
    rating: "4.88",
    reviewCount: 2,
    isActive: true,
    isAdmin: false,
  },
  {
    name: "Sakshi Goyal",
    email: "sakshi@example.com",
    bio: "I am a certified Ayurvedic doctor and a two-time NEET and IIT JEE qualifier with five years of experience teaching Biology, Physics, and Chemistry. I turn textbook concepts into clear, exam-ready understanding by connecting every chapter to simple, real-life examples. I specialize in NEET UG Biology, IGCSE, AP, and IB Biology/Chemistry/Physics.",
    photoUrl: "https://userphotos2.teacheron.com/2986021-41092.jpeg",
    subjects: ["Biology", "Science", "NEET Biology", "Chemistry", "Physics", "Ayurveda"],
    boards: ["CBSE", "ICSE", "IGCSE", "IB", "AP", "AQA", "Edexcel", "OCR"],
    experienceYears: 5,
    charges: "₹300–2,000/hour",
    qualifications: ["BAMS from MSM Institute of Ayurveda", "IIT JEE & NEET Qualifier", "5 Years Online/Offline Experience"],
    whatsappNumber: "8684901516",
    teacherOnUrl: "https://www.teacheron.com/tutor/cwND",
    rating: "4.95",
    reviewCount: 2,
    isActive: true,
    isAdmin: false,
  },
  {
    name: "Anoop Nehra",
    email: "anoop@example.com",
    bio: "I am a post graduate with Botany and graduate in biology (medical stream). I have 5 years of experience in teaching biology and science. I ensure all doubts are solved in a simple way and systemic syllabus coverage is provided. I have experience teaching online as well as offline, helping students build a strong foundation in science.",
    photoUrl: "https://userphotos2.teacheron.com/1482509-75863v.jpg",
    subjects: ["Biology", "Zoology", "Science", "Botany"],
    boards: ["CBSE", "RBSC"],
    experienceYears: 5,
    charges: "₹150–500/hour",
    qualifications: ["MSc. Botany from Kurukshetra University (72.95%)", "BSc. Medical from Fatehchand Mahila Mahavidyalay, Hisar (80.86%)", "Preparing for RAS and CSIR NET"],
    whatsappNumber: "8684901516",
    teacherOnUrl: "https://www.teacheron.com/tutor/6dFr",
    rating: "4.78",
    reviewCount: 2,
    isActive: true,
    isAdmin: false,
  },
  {
    name: "Anubhav Sharma",
    email: "anubhav@example.com",
    bio: "I am deeply passionate about teaching physics, nurturing students' understanding from primary to graduate levels. I bring 3 years of invaluable experience from Allen Career Institute and 2 years at my own institute, coupled with impactful online teaching. I specialize in IIT-JEE, NEET, and IB Physics, focusing on fostering creativity and analytical reasoning.",
    photoUrl: "https://userphotos2.teacheron.com/2083242-84120.jpg",
    subjects: ["Physics", "IB Physics", "NEET Physics", "IIT JEE Physics", "IGCSE Physics", "AP Physics", "MCAT Physics"],
    boards: ["IB", "IGCSE", "AP", "Cambridge", "A-Level", "CBSE"],
    experienceYears: 4,
    charges: "₹500–2,000/hour",
    qualifications: ["M.Sc Physics from University of Kota", "3 Years Allen Career Institute Experience", "Expert in Pentab-based Online Teaching"],
    whatsappNumber: "8684901516",
    teacherOnUrl: "https://www.teacheron.com/tutor/8JWG",
    rating: "4.83",
    reviewCount: 0,
    isActive: true,
    isAdmin: false,
  },
  {
    name: "Mahendra Sharma",
    email: "mahendra@example.com",
    bio: "I am an experienced and passionate Chemistry educator specializing in NEET and JEE Chemistry (Organic and Inorganic). My approach is entirely student-focused, simplifying complex concepts while ensuring students gain confidence to solve challenging problems. I use innovative, interactive, and personalized online teaching methods to achieve academic excellence.",
    photoUrl: "https://userphotos2.teacheron.com/2534151-07318.jpeg",
    subjects: ["Chemistry", "Organic Chemistry", "Inorganic Chemistry", "NEET Chemistry", "JEE Chemistry"],
    boards: ["CBSE", "IB", "JEE", "NEET"],
    experienceYears: 8,
    charges: "₹700–1,000/hour",
    qualifications: ["Masters in Organic Chemistry (M.Sc.) from University of Rajasthan (81%)", "CSIR NET JRF AIR 109", "IIT JAM 2018 Qualified", "B.Sc. Chemistry Honors from University Maharaja College"],
    whatsappNumber: "8684901516",
    teacherOnUrl: "https://www.teacheron.com/tutor/aDfp",
    rating: "4.91",
    reviewCount: 1,
    isActive: true,
    isAdmin: false,
  },
  {
    name: "Ankush Boora",
    email: "ankush@example.com",
    bio: "The best way to learn mathematics is to do mathematics. I am a CSIR NET JRF and GATE All India Ranker, currently researching pure mathematics. I specialize in one-to-one live classes, demystifying complex concepts through word-to-word explanations and real-world connections. I empower students to not only understand math but appreciate its relevance in everyday life.",
    subjects: ["Mathematics", "Complex Analysis", "Abstract Algebra", "Linear Algebra", "Calculus", "Pre-Calculus"],
    boards: ["CBSE", "IB", "A-Level", "AS-Level", "American Syllabus"],
    experienceYears: 2,
    charges: "₹500–3,000/hour",
    qualifications: ["M.Sc. Mathematics from Chaudhary Devi Lal University", "CSIR NET JRF AIR 122", "GATE 2024 AIR 552", "Research Scholar in Pure Mathematics"],
    whatsappNumber: "8684901516",
    teacherOnUrl: "https://www.teacheron.com/tutor/8WWO",
    rating: "4.76",
    reviewCount: 0,
    isActive: true,
    isAdmin: false,
  },
  {
    name: "Dr. Sonia Sharma",
    email: "sonia@example.com",
    bio: "I am Dr. Sonia, I have done my Ph.D in Organic Chemistry and NET qualified with 32nd rank all over India. I had published 7 papers in different National and International Journals. I have 13 years of experience in offline as well as online teaching. I believe in giving knowledge and sharing concepts with students in an easy way using short tricks. At present my students are in medical and engineering fields, with many achieving their desired goals in IIT and NEET colleges. I provide homework help and make complex organic chemistry concepts simple and exam-ready.",
    photoUrl: "https://userphotos2.teacheron.com/44233-58984.jpeg",
    subjects: ["Organic Chemistry", "NEET Chemistry", "IIT Chemistry", "Chemistry", "Inorganic Chemistry"],
    boards: ["CBSE", "ICSE", "IB", "IGCSE", "NEET", "JEE", "AP"],
    experienceYears: 13,
    charges: "₹1,000–1,800/hour",
    qualifications: ["Ph.D in Organic Chemistry", "NET Qualified (All India Rank 32)", "7 Research Papers in National & International Journals", "13 Years Teaching Experience (6 Years Online)"],
    whatsappNumber: "8684901516",
    teacherOnUrl: "https://www.teacheron.com/tutor/bvr",
    rating: "4.85",
    reviewCount: 0,
    isActive: true,
    isAdmin: false,
  },
  {
    name: "Himanshu",
    email: "himanshu@example.com",
    bio: "I am a passionate and dedicated educator who believes that true teaching is measured by how well a student learns. My approach is student-centric, focused on understanding each learner's strengths, challenges, and pace. I prioritize building clear concepts, encouraging curiosity, and creating a supportive environment where students feel confident to ask questions. I use interactive and practical methods to ensure learning is engaging and long-lasting. Whether it's simplifying complex topics or offering real-life examples, my goal is always to help students truly understand and apply what they learn.",
    photoUrl: "https://userphotos2.teacheron.com/2732752-10838.jpg",
    subjects: ["Math", "Physics"],
    boards: ["CBSE", "ICSE", "HTET", "CTET"],
    experienceYears: 3,
    charges: "₹500–1,000/hour",
    qualifications: ["NET Asst. Prof. (UGC NET Qualified)", "M.Ed from GJUS&T Hisar", "CTET Level 1 & 2 Qualified", "HTET TGT Science & Maths", "B.Ed from Central University of Haryana", "M.Sc Physics from Guru Nanak Dev University", "B.Sc Non-Medical from Kurukshetra University"],
    whatsappNumber: "8684901516",
    teacherOnUrl: "https://www.teacheron.com/tutor/bsUE",
    rating: "5.0",
    reviewCount: 1,
    isActive: true,
    isAdmin: false,
  },
];

export async function seedTeachersIfNeeded() {
  try {
    const existingTeachers = await db.select().from(teachers);
    const existingUrls = new Set(existingTeachers.map(t => t.teacherOnUrl).filter(Boolean));
    const existingEmails = new Set(existingTeachers.map(t => t.email));

    let added = 0;
    for (const teacher of seedTeachers) {
      if (teacher.teacherOnUrl && existingUrls.has(teacher.teacherOnUrl)) {
        continue;
      }
      if (existingEmails.has(teacher.email)) {
        continue;
      }

      await db.insert(teachers).values(teacher);
      added++;
      seedLog(`Seeded teacher: ${teacher.name}`);
    }

    const rajul = existingTeachers.find(t => t.teacherOnUrl === "https://www.teacheron.com/tutor/bwZd" || t.name?.trim() === "Rajul Anuragi");
    if (rajul && !rajul.isActive) {
      await db.update(teachers).set({
        isActive: true,
        bio: "I have over five years of experience teaching Physics to students from international curricula such as the IB (MYP & DP), AP, Cambridge IGCSE & A-Level, Edexcel, and ICSE/ISC. Over the years, I have successfully guided hundreds of IB and AP students toward academic excellence. Also part of Allen and Motion where I helped students to build a strong foundation in physics and achieve success in competitive exams like NSO, IJSO, NTSE, JEE, NEET, and school boards.",
        photoUrl: "https://userphotos2.teacheron.com/2748411-73410.png",
        subjects: ["Physics", "AP Physics", "IB Physics", "IGCSE Physics", "AS Physics", "ICSE Physics"],
        boards: ["IB", "AP", "IGCSE", "A-Level", "Edexcel", "ICSE", "ISC", "MYP"],
        experienceYears: 5,
        charges: "₹1,200/hour",
        qualifications: ["B.Tech from Rajasthan Technical University", "Allen Career Institute Faculty Training", "Experienced Physics Faculty at Motion Education"],
        teacherOnUrl: "https://www.teacheron.com/tutor/bwZd",
        rating: "4.92",
        reviewCount: 0,
      }).where(eq(teachers.id, rajul.id));
      seedLog(`Activated and updated teacher: Rajul Anuragi`);
      added++;
    }

    if (added > 0) {
      seedLog(`Seeding complete: ${added} teachers added/updated`);
    } else {
      seedLog(`All teachers already exist, no seeding needed`);
    }
  } catch (error) {
    console.error("Error seeding teachers:", error);
  }
}
