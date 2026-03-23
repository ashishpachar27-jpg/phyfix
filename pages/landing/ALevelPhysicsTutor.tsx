import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, FlaskConical, BookOpen, ArrowRight, MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

const benefits = [
  "Full Cambridge A-Level Physics 9702 syllabus coverage (AS + A2)",
  "Expert coaching for Papers 1, 2, 3 (Practical), and 4",
  "Practical skills and data analysis for Paper 3",
  "Exam technique training — marks lost vs marks earned",
  "Written definitions and 'explain' question mastery",
  "Regular past paper practice under timed conditions",
  "Session notes and worked examples after every class",
  "Free first demo session — experience the PhyFix difference",
];

const topics = [
  "Kinematics & Dynamics", "Thermal Physics", "Oscillations (SHM)",
  "Waves & Superposition", "Electricity & DC Circuits", "Magnetic Fields",
  "Electromagnetic Induction", "Capacitors", "Nuclear Physics",
  "Quantum Physics", "Practical Skills & Uncertainties", "Data Analysis & Graphs",
  "Paper 3: Experimental Planning", "Paper 4: Extended Responses", "Past Paper Technique",
];

const faqs = [
  { q: "Which exam boards do you cover for A-Level Physics?", a: "We specialise in Cambridge A-Level Physics (9702) and also cover AQA, OCR, and Edexcel A-Level Physics. All our tutors are familiar with the specific syllabus, mark scheme language, and assessment style of each board." },
  { q: "Can you help with Paper 3 (Practical)?", a: "Yes. Paper 3 is often underestimated, and dedicated practical skills coaching makes a significant difference. We practise experimental planning, uncertainty calculations, graph drawing with error bars, and evaluation of experimental methods — all in the format the examiner expects." },
  { q: "My student is struggling with electromagnetism — is that something you cover?", a: "Electromagnetism is one of the most commonly difficult topics at A-Level. Our tutors break it down systematically: magnetic fields, force on charges and conductors, electromagnetic induction (Faraday's and Lenz's laws), and alternating current — all with worked examples and past paper questions." },
  { q: "How many sessions are typically needed to improve from a C to an A?", a: "This varies by student, but we typically see C-to-A improvement over 12–20 focused sessions when combined with regular independent practice between sessions. We create a personalised study plan in the first session." },
];

export default function ALevelPhysicsTutor() {
  useSeo({
    title: "A-Level Physics Tutor Online | Cambridge 9702 Expert | PhyFix",
    description: "Expert 1-on-1 A-Level Physics tutoring for Cambridge 9702, AQA, OCR, and Edexcel. Full syllabus, Paper 3 practical coaching, exam technique. Book a free demo.",
    keywords: "A Level Physics tutor, A-Level Physics online tutor, Cambridge 9702 tutor, A Level Physics help",
    canonical: "https://phyfix.com/a-level-physics-tutor",
    ogTitle: "A-Level Physics Tutor Online | Expert Coaching | PhyFix",
    ogDescription: "Personalised A-Level Physics tutoring. Full Cambridge 9702 syllabus, practical skills coaching, and exam technique. Free first demo.",
  });

  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50/60 via-background to-background dark:from-purple-950/20">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="flex-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <FlaskConical className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">A-Level Physics Tutoring</span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">
                Expert <span className="text-primary">A-Level Physics</span> Tutor Online
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Personalised 1-on-1 A-Level Physics coaching for Cambridge 9702, AQA, OCR, and Edexcel. We cover all four papers, build your exam technique, and help you achieve an A or A*.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Cambridge 9702", "AQA / OCR / Edexcel", "Paper 3 Practical", "Free Demo"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20A-Level%20Physics%20demo" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 gap-2 w-full sm:w-auto" data-testid="button-alevel-physics-wa">
                    <MessageCircle className="w-4 h-4" />
                    Book Free Demo on WhatsApp
                  </Button>
                </a>
                <Link href="/teachers">
                  <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 w-full sm:w-auto">Browse Physics Tutors <ArrowRight className="w-4 h-4" /></Button>
                </Link>
              </div>
            </motion.div>
            <motion.div className="shrink-0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="w-64 h-64 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-9xl shadow-xl">🔬</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-muted/30 border-y border-border/40">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ value: "4 Papers", label: "Full Coverage" }, { value: "A to A*", label: "Target Grades" }, { value: "15+", label: "Years Experience" }, { value: "Free", label: "First Session" }].map(s => (
              <div key={s.label}><p className="text-3xl font-bold text-primary mb-1">{s.value}</p><p className="text-sm text-muted-foreground">{s.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 className="font-display font-bold text-3xl text-center mb-10">What PhyFix A-Level Physics Tutoring Includes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-muted/40 border border-border/40">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 className="font-display font-bold text-3xl text-center mb-10">A-Level Physics Topics We Cover</h2>
          <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-3">
            {topics.map(t => (
              <div key={t} className="flex gap-2 items-center p-3 rounded-lg bg-background border border-border/60">
                <BookOpen className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-xs font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-3xl">
          <h2 className="font-display font-bold text-3xl text-center mb-10">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-6"><h3 className="font-semibold mb-2">{faq.q}</h3><p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-purple-50/30 dark:to-purple-950/10">
        <div className="container px-4 mx-auto max-w-2xl text-center">
          <h2 className="font-display font-bold text-3xl mb-4">Book Your Free A-Level Physics Demo</h2>
          <p className="text-muted-foreground mb-8">Meet your tutor, map your syllabus gaps, and get a personalised study plan — all in one free session.</p>
          <a href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20A-Level%20Physics%20demo" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-10 text-base">Book Free A-Level Physics Demo</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
