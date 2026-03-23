import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Star, Users, Clock, BookOpen, Award, FlaskConical, Beaker } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WA = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20chemistry%20class";

const topics = [
  { board: "IB Chemistry SL/HL", items: [
    { label: "Stoichiometry & Mole Concept" },
    { label: "Atomic Structure & Periodicity" },
    { label: "Chemical Bonding & Structure" },
    { label: "Energetics & Thermochemistry" },
    { label: "Kinetics & Equilibrium" },
    { label: "Organic Chemistry (HL Mechanisms)" },
  ]},
  { board: "IGCSE Chemistry (0620)", items: [
    { label: "Particulate Nature of Matter" },
    { label: "Acids, Bases & Salts" },
    { label: "Stoichiometry & Equations" },
    { label: "Electrochemistry & Redox" },
    { label: "Organic Chemistry" },
    { label: "Experimental Techniques" },
  ]},
  { board: "A-Level Chemistry (AQA/Edexcel)", items: [
    { label: "Physical Chemistry (Thermodynamics, Kinetics)" },
    { label: "Organic Chemistry (Mechanisms, Spectroscopy)" },
    { label: "Inorganic Chemistry (Transition Metals)" },
    { label: "Analytical Techniques (NMR, IR, MS)" },
    { label: "Periodicity & Bonding" },
    { label: "A2 Synoptic Topics" },
  ]},
  { board: "AP Chemistry", items: [
    { label: "Atomic Structure & Properties" },
    { label: "Molecular & Ionic Bonding" },
    { label: "Chemical Reactions & Stoichiometry" },
    { label: "Kinetics & Equilibrium" },
    { label: "Electrochemistry" },
    { label: "Free Response Question (FRQ) Practice" },
  ]},
  { board: "CBSE / NEET Chemistry", items: [
    { label: "Class 11 — States of Matter, Thermodynamics" },
    { label: "Class 12 — Electrochemistry, Surface Chemistry" },
    { label: "Organic Chemistry (Mechanisms, Reactions)" },
    { label: "NEET Chemistry MCQ Strategy" },
    { label: "Inorganic Chemistry (p, d, f-block)" },
    { label: "JEE Advanced Organic Synthesis" },
  ]},
  { board: "ICSE / ISC Chemistry", items: [
    { label: "Chemical Bonding & Structure" },
    { label: "Mole Concept & Stoichiometry" },
    { label: "Acids, Bases & Salts" },
    { label: "Organic Chemistry Basics" },
    { label: "ISC Practical Chemistry" },
    { label: "Analytical Chemistry" },
  ]},
];

const whyItems = [
  { icon: Users, title: "Specialist Chemistry Tutors", desc: "All PhyFix chemistry tutors hold advanced degrees (Ph.D, M.Sc) and have 5–15+ years of specialist teaching experience across IB, IGCSE, A-Level, AP, and NEET." },
  { icon: FlaskConical, title: "Concept-First Teaching", desc: "We build deep molecular intuition before drilling reactions — students who understand the 'why' behind chemistry master it permanently." },
  { icon: Clock, title: "Flexible & Recorded Sessions", desc: "All classes are 1-on-1 via Zoom, scheduled at your convenience, fully recorded, and accompanied by topic notes." },
  { icon: BookOpen, title: "Past Paper Focus", desc: "Every board's exam technique is different. We teach the exact language and approach each examiner expects, backed by extensive past-paper practice." },
  { icon: Star, title: "Free Demo Class", desc: "Try a full 1-hour demo session with a chemistry specialist before committing to regular classes. No credit card required." },
  { icon: Award, title: "Proven Results", desc: "PhyFix chemistry students consistently achieve A*, 7s (IB), and 5s (AP). Our NEET students regularly clear chemistry with 90th-percentile scores." },
];

const faqs = [
  { q: "Which chemistry boards do your tutors cover?", a: "IB Chemistry (SL & HL), Cambridge IGCSE Chemistry (0620), A-Level Chemistry (AQA, Edexcel, OCR, Cambridge), AP Chemistry, CBSE Classes 11 & 12, ICSE/ISC, Edexcel GCSE, and NEET/JEE Chemistry." },
  { q: "How much does chemistry tutoring cost?", a: "Rates range from ₹500–₹2,000/hr depending on tutor and level. Students pay tutors directly — PhyFix charges zero platform commission." },
  { q: "My child is struggling with organic chemistry. Can PhyFix help?", a: "Yes — organic chemistry is one of our specialities. Our tutors teach mechanism-based understanding (electron-pushing, arrow-pushing) rather than memorisation, making organic reactions intuitive and permanent." },
  { q: "Can I get NEET Chemistry tutoring?", a: "Absolutely. We have dedicated NEET chemistry specialists who cover the full syllabus — Physical, Organic, and Inorganic — with MCQ practice, previous year paper analysis, and time management strategies." },
  { q: "How many classes per week do you recommend?", a: "For most students, 2–3 sessions per week of 60–90 minutes is optimal. Your tutor will create a personalised schedule based on your exam timeline and current level." },
];

export default function ChemistryClasses() {
  useSeo({
    title: "Online Chemistry Classes | IB, IGCSE, A-Level, AP, NEET | PhyFix",
    description: "Expert 1-on-1 online chemistry tutoring for IB, IGCSE, A-Level, AP, CBSE & NEET. Verified specialist tutors, free demo class, zero commission.",
    keywords: "online chemistry classes, chemistry tutor online, IB chemistry tutor, IGCSE chemistry tutor, A-Level chemistry tutor, AP chemistry tutor, NEET chemistry tutor, chemistry tutoring",
    canonical: "https://phyfix.com/chemistry-classes",
    ogTitle: "Online Chemistry Classes — IB, IGCSE, A-Level, AP, NEET | PhyFix",
    ogDescription: "Expert 1-on-1 chemistry tutoring for all major boards. Specialist tutors, concept-first teaching, free demo class.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/30 dark:via-background dark:to-emerald-950/20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4 text-green-700 dark:text-green-300">
              <FlaskConical className="w-3 h-3 mr-1" /> Chemistry Classes Online
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Online <span className="text-green-600 dark:text-green-400">Chemistry Classes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Personalised 1-on-1 chemistry tutoring for IB, IGCSE, A-Level, AP, CBSE, NEET & JEE. Learn from verified specialist tutors, at your pace, from anywhere in the world.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              ✓ Free Demo Class &nbsp;·&nbsp; ✓ Zero Commission &nbsp;·&nbsp; ✓ Recorded Sessions &nbsp;·&nbsp; ✓ All Boards Covered
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full px-8 bg-green-600 hover:bg-green-700 text-white">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo Class
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                  <Users className="w-4 h-4" /> Browse Chemistry Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Chemistry Topics We Cover</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Full syllabus coverage for every major international and national chemistry curriculum.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full border-green-100 dark:border-green-900/40 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4" /> {t.board}
                  </h3>
                  <ul className="space-y-1.5">
                    {t.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-12 bg-green-50/50 dark:bg-green-950/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold mb-4">Who Is This For?</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "School Students (Grades 9–10)", desc: "IGCSE, GCSE, CBSE, ICSE — building strong foundations before A-Level or IB." },
              { label: "Pre-University (IB, A-Level, AP)", desc: "Targeting A*, 7, or 5 in high-stakes chemistry exams that determine university admissions." },
              { label: "Medical Aspirants (NEET/JEE/MCAT)", desc: "Chemistry is a core NEET and JEE Advanced paper — specialist prep is essential." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="p-5 h-full hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PhyFix */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose PhyFix for Chemistry?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Specialist chemistry tutors, concept-first pedagogy, and results that speak for themselves.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-muted-foreground mb-4 font-medium">Explore related subjects:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Physics Classes", href: "/physics-classes" },
              { label: "Biology Classes", href: "/biology-classes" },
              { label: "Mathematics Classes", href: "/maths-classes" },
              { label: "NEET Test Prep", href: "/test-prep" },
              { label: "All Subjects", href: "/subjects" },
            ].map(link => (
              <Link key={link.href} href={link.href}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors px-3 py-1 text-sm">
                  {link.label}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about chemistry tutoring at PhyFix.</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Card className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Start Your Chemistry Journey Today</h2>
            <p className="text-white/80 mb-8 text-lg">Book a free 1-hour demo class — no credit card, no commitment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo on WhatsApp
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-green-700">
                  Browse Chemistry Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
