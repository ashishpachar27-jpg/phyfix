import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Users, BookOpen, Atom, ArrowRight, MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

const benefits = [
  "Personalised 1-on-1 sessions tailored to your learning pace",
  "Expert tutors with IB examiner-level knowledge",
  "Full coverage of SL and HL syllabuses (Core + AHL)",
  "Paper 1, Paper 2, Paper 3 and IA support",
  "Exam technique training matched to IB mark schemes",
  "Session recordings and notes provided after every class",
  "Flexible scheduling — weekdays, weekends, any timezone",
  "Free first demo session — no commitment needed",
];

const faqs = [
  { q: "Do you teach both IB Physics SL and HL?", a: "Yes. Our tutors are experienced in both levels and tailor each session to the SL or HL content you need. HL students get full AHL coverage including electromagnetic induction, engineering physics, and optional topics." },
  { q: "Which IB Physics option topics do you cover?", a: "We cover all four Paper 3 options: Relativity, Engineering Physics, Imaging, and Astrophysics. Your tutor will work through past Paper 3 questions with you and explain the key concepts for your chosen option." },
  { q: "Can you help with the IB Physics IA?", a: "Absolutely. We help students select a strong research question, design the experiment, collect appropriate data, perform uncertainty analysis, and write the full IA report. Students guided by PhyFix tutors consistently achieve 18–24/24 on their IA." },
  { q: "How soon before exams should I start tutoring?", a: "The earlier the better — but students who start even 8–12 weeks before exams typically see significant improvement. We can work intensively in the final weeks to target high-mark topics and exam technique." },
];

export default function IbPhysicsTutor() {
  useSeo({
    title: "IB Physics Tutor Online | SL & HL Expert | PhyFix",
    description: "Expert 1-on-1 IB Physics tutoring for SL and HL. Full syllabus coverage, IA support, past paper coaching, and exam technique. Book a free demo with PhyFix today.",
    keywords: "IB Physics tutor, IB Physics online tutor, IB Physics HL tutor, IB Physics SL tutor, IB Physics IA help",
    canonical: "https://phyfix.com/ib-physics-tutor",
    ogTitle: "IB Physics Tutor Online | Expert SL & HL Coaching | PhyFix",
    ogDescription: "Achieve a 6 or 7 in IB Physics with personalised 1-on-1 tutoring. Expert tutors, full syllabus, IA support. Free demo session.",
  });

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50/60 via-background to-background dark:from-blue-950/20">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="flex-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 mb-4">
                <Atom className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">IB Physics Tutoring</span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">
                Expert <span className="text-primary">IB Physics</span> Tutor — SL & HL
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Personalised 1-on-1 IB Physics sessions that cover the full syllabus, sharpen your exam technique, and help you achieve a 6 or 7. Taught by tutors who know the IB mark scheme inside out.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["IB SL & HL", "Paper 1–3 Prep", "IA Support", "Free Demo"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20IB%20Physics%20demo" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 gap-2 w-full sm:w-auto" data-testid="button-ib-physics-wa">
                    <MessageCircle className="w-4 h-4" />
                    Book Free Demo on WhatsApp
                  </Button>
                </a>
                <Link href="/teachers">
                  <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 w-full sm:w-auto">
                    Browse IB Tutors <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div className="shrink-0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-9xl shadow-xl">⚛️</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-muted/30 border-y border-border/40">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "IB Sessions Delivered" },
              { value: "4.9/5", label: "Average Tutor Rating" },
              { value: "Free", label: "First Demo Session" },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-primary mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl mb-3">What You Get with PhyFix IB Physics Tutoring</h2>
            <p className="text-muted-foreground">Every session is designed around your specific syllabus, level, and goals.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex gap-3 items-start p-4 rounded-xl bg-muted/40 border border-border/40">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-16 bg-muted/20">
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 className="font-display font-bold text-3xl text-center mb-10">IB Physics Topics We Cover</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Mechanics & Kinematics", "Thermal Physics", "Waves & Optics",
              "Electricity & Magnetism", "Circular Motion & Gravitation", "Atomic & Nuclear Physics",
              "Energy Production", "Electromagnetic Induction (HL)", "Engineering Physics (Option)",
              "Relativity (Option)", "Astrophysics (Option)", "Imaging (Option)",
              "Internal Assessment (IA)", "Paper 3 Data Analysis", "Past Paper Technique",
            ].map((topic) => (
              <div key={topic} className="flex gap-2 items-center p-3 rounded-lg bg-background border border-border/60">
                <BookOpen className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-3xl">
          <h2 className="font-display font-bold text-3xl text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-blue-50/30 dark:to-blue-950/10">
        <div className="container px-4 mx-auto max-w-2xl text-center">
          <h2 className="font-display font-bold text-3xl mb-4">Start Your IB Physics Journey Today</h2>
          <p className="text-muted-foreground mb-8">Book a free 45-minute demo session. No payment required. Meet your tutor, identify your gaps, and get a personalised study plan.</p>
          <a href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20IB%20Physics%20demo" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-10 text-base">
              Book Your Free IB Physics Demo
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-4">Also available via <Link href="/teachers"><span className="text-primary hover:underline cursor-pointer">Browse Tutors</span></Link> or email at ashishpachar27@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
