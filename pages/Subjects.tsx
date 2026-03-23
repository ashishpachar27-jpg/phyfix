import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Atom, Calculator, FlaskConical, Dna, BookOpen, Monitor,
  Target, Globe, TrendingUp, BrainCircuit, BarChart2,
  GraduationCap, DollarSign, Languages, Wrench, Trophy,
  ArrowRight, Sparkles
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WA = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class";

const subjects = [
  {
    name: "Physics",
    icon: Atom,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    border: "border-blue-100 dark:border-blue-900/40",
    href: "/physics-classes",
    boards: ["IB", "IGCSE", "A-Level", "AP", "CBSE", "JEE"],
    desc: "Mechanics, Waves, Electricity, Fields, Quantum & Modern Physics",
    demand: "Very High",
  },
  {
    name: "Mathematics",
    icon: Calculator,
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    border: "border-purple-100 dark:border-purple-900/40",
    href: "/maths-classes",
    boards: ["IB", "IGCSE", "A-Level", "AP", "CBSE", "SAT"],
    desc: "Algebra, Calculus, Statistics, Trigonometry, Linear Algebra",
    demand: "Very High",
  },
  {
    name: "Chemistry",
    icon: FlaskConical,
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    border: "border-green-100 dark:border-green-900/40",
    href: "/chemistry-classes",
    boards: ["IB", "IGCSE", "A-Level", "AP", "CBSE", "NEET"],
    desc: "Organic, Inorganic & Physical Chemistry, Stoichiometry, Mechanisms",
    demand: "High",
  },
  {
    name: "Biology",
    icon: Dna,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    border: "border-orange-100 dark:border-orange-900/40",
    href: "/biology-classes",
    boards: ["IB", "IGCSE", "A-Level", "AP", "CBSE", "NEET"],
    desc: "Cell Biology, Genetics, Ecology, Human Physiology, Evolution",
    demand: "High",
  },
  {
    name: "English",
    icon: BookOpen,
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    border: "border-pink-100 dark:border-pink-900/40",
    href: "/english-classes",
    boards: ["IB", "IGCSE", "A-Level", "IELTS", "TOEFL", "ESL"],
    desc: "Academic Writing, Literature Analysis, IELTS, TOEFL & ESL",
    demand: "Very High",
  },
  {
    name: "Computer Science & Coding",
    icon: Monitor,
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-100 dark:border-cyan-900/40",
    href: "/cs-classes",
    boards: ["IB", "IGCSE", "AP", "Python", "DSA", "Data Science"],
    desc: "Programming, Data Structures, Algorithms, Python, AI Fundamentals",
    demand: "Fastest Growing",
  },
  {
    name: "Test Preparation",
    icon: Target,
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    border: "border-violet-100 dark:border-violet-900/40",
    href: "/test-prep",
    boards: ["SAT", "ACT", "GRE", "GMAT", "IELTS", "TOEFL"],
    desc: "SAT, ACT, GRE, GMAT, IELTS, TOEFL, NEET, JEE — score-focused prep",
    demand: "Very High",
  },
  {
    name: "IB Physics (Specialist)",
    icon: Atom,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    border: "border-blue-100 dark:border-blue-900/40",
    href: "/ib-physics-tutor",
    boards: ["IB SL", "IB HL", "MYP"],
    desc: "Dedicated IB Physics SL & HL tutoring with examiner-calibrated technique",
    demand: "High",
  },
  {
    name: "IGCSE Mathematics (Specialist)",
    icon: Calculator,
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    border: "border-purple-100 dark:border-purple-900/40",
    href: "/igcse-math-tutor",
    boards: ["Cambridge", "Edexcel", "0580", "0607"],
    desc: "IGCSE Maths Core & Extended — grade 8 and 9 strategies",
    demand: "High",
  },
  {
    name: "A-Level Physics (Specialist)",
    icon: Atom,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    border: "border-blue-100 dark:border-blue-900/40",
    href: "/a-level-physics-tutor",
    boards: ["AQA", "Edexcel", "OCR", "Cambridge"],
    desc: "A-Level & AS-Level Physics — all major UK exam boards",
    demand: "High",
  },
  {
    name: "Online Maths Tutoring",
    icon: Calculator,
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    border: "border-purple-100 dark:border-purple-900/40",
    href: "/online-math-tutor",
    boards: ["IB", "IGCSE", "A-Level", "AP", "GCSE", "CBSE"],
    desc: "General online maths tutoring for all ages and levels worldwide",
    demand: "Very High",
  },
  {
    name: "Free Demo Class",
    icon: Sparkles,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    border: "border-amber-100 dark:border-amber-900/40",
    href: "/free-demo",
    boards: ["All Subjects", "All Levels", "All Boards"],
    desc: "Start with a free 1-hour demo class — no commitment, no credit card",
    demand: "Available Now",
  },
];

const boards = [
  { name: "IB (International Baccalaureate)", slugs: ["ib-physics-mechanics-tutor", "ib-maths-aa-hl-calculus-tutor"] },
  { name: "Cambridge IGCSE", slugs: ["igcse-physics-forces-motion-tutor", "igcse-maths-algebra-tutor"] },
  { name: "A-Level (AQA / Edexcel / OCR)", slugs: ["a-level-physics-mechanics-tutor", "a-level-physics-fields-tutor"] },
  { name: "AP (College Board, USA)", slugs: ["ap-physics-1-kinematics-tutor", "ap-calculus-ab-tutor"] },
  { name: "CBSE / JEE / NEET (India)", slugs: ["cbse-physics-class-12-tutor", "cbse-maths-class-12-tutor"] },
];

export default function Subjects() {
  useSeo({
    title: "All Tutoring Subjects | Physics, Maths, Chemistry & More | PhyFix",
    description: "PhyFix offers expert 1-on-1 tutoring in 20+ subjects — Physics, Maths, Chemistry, Biology, English, CS, SAT, IELTS, GRE and more. IB, IGCSE, A-Level, AP, CBSE.",
    keywords: "online tutoring subjects, physics tutor, maths tutor, chemistry tutor, biology tutor, IELTS tutor, SAT prep, IB tutor, IGCSE tutor, PhyFix",
    canonical: "https://phyfix.com/subjects",
    ogTitle: "All Subjects — Expert Online Tutoring | PhyFix",
    ogDescription: "20+ subjects, all major boards. Physics, Maths, Chemistry, Biology, English, CS, Test Prep. Free demo class.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4">
              <GraduationCap className="w-3 h-3 mr-1" /> 20+ Subjects · All Major Boards
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              World-Class Tutoring in <span className="text-primary">20+ Subjects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Personalised 1-on-1 tutoring across Physics, Mathematics, Chemistry, Biology, English, Computer Science, and major international exams — for students in the UK, USA, UAE, India, Singapore, Canada, and worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full px-8 bg-green-500 hover:bg-green-600 text-white">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo Class
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Browse All Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subject Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">All Tutoring Subjects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Click any subject to explore full syllabus coverage, tutors, and board-specific details.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjects.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={s.href}>
                  <Card className={`p-5 h-full border ${s.border} hover:shadow-md transition-all duration-200 cursor-pointer group hover:scale-[1.01]`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${s.color}`}>
                        <s.icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline" className="text-xs">{s.demand}</Badge>
                    </div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{s.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{s.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {s.boards.slice(0, 4).map(b => (
                        <span key={b} className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{b}</span>
                      ))}
                      {s.boards.length > 4 && (
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">+{s.boards.length - 4}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-3 text-primary text-xs font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Boards We Cover */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Curricula & Boards We Cover</h2>
            <p className="text-muted-foreground">Our tutors are specialists in the specific exam boards your child's school uses.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "IB Diploma Programme (DP)", link: "/ib-physics-tutor", subjects: "Physics, Maths AA/AI, Chemistry, Biology, English, Economics, CS" },
              { name: "Cambridge IGCSE", link: "/igcse-math-tutor", subjects: "Physics (0625), Maths (0580), Chemistry (0620), Biology (0610), CS (0478)" },
              { name: "A-Level / AS-Level", link: "/a-level-physics-tutor", subjects: "Physics, Maths, Chemistry, Biology, Economics, English, CS — all exam boards" },
              { name: "AP (College Board)", link: "/physics-classes", subjects: "AP Physics 1/2/C, Calculus AB/BC, Chemistry, Biology, CS A, Economics" },
              { name: "CBSE / ICSE / JEE / NEET", link: "/physics-classes", subjects: "Physics, Maths, Chemistry, Biology — Classes 9–12, JEE, NEET" },
              { name: "SAT / ACT / GRE / GMAT", link: "/test-prep", subjects: "All standardised test subjects — Maths, English, Data, Reasoning" },
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={b.link}>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer h-full group">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{b.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.subjects}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Pages */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Explore Specific Topics</h2>
            <p className="text-muted-foreground">We have dedicated expert pages for 32 specific physics and mathematics topics.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "IB Physics Mechanics", href: "/topics/ib-physics-mechanics-tutor" },
              { label: "IB Physics Electricity", href: "/topics/ib-physics-electricity-tutor" },
              { label: "IB Maths HL Calculus", href: "/topics/ib-maths-aa-hl-calculus-tutor" },
              { label: "IGCSE Physics Forces", href: "/topics/igcse-physics-forces-motion-tutor" },
              { label: "IGCSE Maths Algebra", href: "/topics/igcse-maths-algebra-tutor" },
              { label: "A-Level Physics Fields", href: "/topics/a-level-physics-fields-tutor" },
              { label: "AP Physics Kinematics", href: "/topics/ap-physics-1-kinematics-tutor" },
              { label: "AP Calculus AB", href: "/topics/ap-calculus-ab-tutor" },
              { label: "CBSE Physics Class 12", href: "/topics/cbse-physics-class-12-tutor" },
              { label: "CBSE Maths Class 12", href: "/topics/cbse-maths-class-12-tutor" },
            ].map(t => (
              <Link key={t.href} href={t.href}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors px-3 py-1.5 text-sm">
                  {t.label}
                </Badge>
              </Link>
            ))}
            <Link href="/topics/ib-physics-waves-tutor">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 transition-colors px-3 py-1.5 text-sm">
                + 22 more topics →
              </Badge>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Not Sure Which Subject or Board to Start With?</h2>
            <p className="text-white/80 mb-8 text-lg">Book a free 30-minute consultation. We'll assess your current level, understand your goals, and recommend the right tutor and programme.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8">
                  <SiWhatsapp className="w-5 h-5" /> WhatsApp Free Consultation
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-primary">
                  Browse All Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
