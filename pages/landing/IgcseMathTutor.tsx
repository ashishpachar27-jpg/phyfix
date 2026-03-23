import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Calculator, BookOpen, ArrowRight, MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

const benefits = [
  "Full coverage of Cambridge IGCSE 0580 Core and Extended",
  "Personalised gap analysis in the first session",
  "Exam technique training — how to show working and earn method marks",
  "Topic-by-topic practice with past paper questions",
  "Graph work, data interpretation, and geometry coaching",
  "Weekly homework assignments and progress tests",
  "Flexible online sessions — any timezone, any device",
  "Free first demo — no risk, no commitment",
];

const topics = [
  "Number & Algebra", "Sequences & Series", "Indices & Standard Form",
  "Functions & Graphs", "Coordinate Geometry", "Mensuration (Area, Volume)",
  "Trigonometry & Bearings", "Statistics & Probability", "Vectors & Transformations",
  "Matrices (Extended)", "Sets & Venn Diagrams", "Quadratics & Inequalities",
  "Simultaneous Equations", "Circle Theorems", "Past Paper Practice",
];

const faqs = [
  { q: "Do you cover IGCSE Maths Core and Extended?", a: "Yes. We teach both tiers. For Core students, we focus on consolidating key concepts and improving exam technique. For Extended students, we cover all content including the harder algebra, functions, and probability topics." },
  { q: "How is IGCSE Maths 0580 structured?", a: "Cambridge IGCSE Mathematics 0580 has four papers: Paper 1 (Core, 1 hour), Paper 2 (Core, 1.5 hours), Paper 3 (Extended, 2 hours), and Paper 4 (Extended, 2.5 hours). We prepare you for whichever combination your school enters you for." },
  { q: "My child is struggling with algebra — can you help?", a: "Algebra is the foundation of IGCSE Maths, and it is one of the most common areas of difficulty. Our tutors identify specific algebra misconceptions early and use a structured approach — from factorisation and equations to quadratics and functions — to rebuild confidence and fluency." },
  { q: "When should we start IGCSE Maths tutoring?", a: "Year 10 is ideal for students who want comprehensive support. For students in Year 11 approaching exams, we offer intensive revision programmes targeting high-mark topics and exam technique." },
];

export default function IgcseMathTutor() {
  useSeo({
    title: "IGCSE Math Tutor Online | Cambridge 0580 Expert | PhyFix",
    description: "Expert 1-on-1 IGCSE Mathematics tutoring for Cambridge 0580 Core and Extended. Full topic coverage, exam technique, past papers. Book a free demo with PhyFix today.",
    keywords: "IGCSE Math tutor, IGCSE Mathematics tutor online, Cambridge 0580 tutor, IGCSE maths help",
    canonical: "https://phyfix.com/igcse-math-tutor",
    ogTitle: "IGCSE Math Tutor Online | Cambridge Expert | PhyFix",
    ogDescription: "Personalised 1-on-1 IGCSE Mathematics tutoring. Full 0580 coverage, exam technique, and past paper coaching. Free demo session.",
  });

  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50/60 via-background to-background dark:from-emerald-950/20">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="flex-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">IGCSE Mathematics Tutoring</span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">
                Expert <span className="text-primary">IGCSE Maths</span> Tutor Online
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Personalised 1-on-1 IGCSE Mathematics coaching for Cambridge 0580. We identify your weak topics, build your exam technique, and get you to A or A* — starting with a free demo.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Core & Extended", "Cambridge 0580", "Exam Technique", "Free Demo"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20IGCSE%20Maths%20demo" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 gap-2 w-full sm:w-auto" data-testid="button-igcse-math-wa">
                    <MessageCircle className="w-4 h-4" />
                    Book Free Demo on WhatsApp
                  </Button>
                </a>
                <Link href="/teachers">
                  <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 w-full sm:w-auto">Browse Math Tutors <ArrowRight className="w-4 h-4" /></Button>
                </Link>
              </div>
            </motion.div>
            <motion.div className="shrink-0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="w-64 h-64 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center text-9xl shadow-xl">📐</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-muted/30 border-y border-border/40">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ value: "A* to E", label: "Extended Grades" }, { value: "Core & Ext.", label: "Both Tiers" }, { value: "4.9/5", label: "Tutor Rating" }, { value: "Free", label: "First Session" }].map(s => (
              <div key={s.label}><p className="text-3xl font-bold text-primary mb-1">{s.value}</p><p className="text-sm text-muted-foreground">{s.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 className="font-display font-bold text-3xl text-center mb-10">What PhyFix IGCSE Maths Tutoring Includes</h2>
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
          <h2 className="font-display font-bold text-3xl text-center mb-10">IGCSE Maths Topics We Cover</h2>
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

      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-emerald-50/30 dark:to-emerald-950/10">
        <div className="container px-4 mx-auto max-w-2xl text-center">
          <h2 className="font-display font-bold text-3xl mb-4">Book Your Free IGCSE Maths Demo</h2>
          <p className="text-muted-foreground mb-8">No payment. No commitment. Just a focused 45-minute session to identify your goals and create a plan.</p>
          <a href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20IGCSE%20Maths%20demo" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-10 text-base">Book Free IGCSE Maths Demo</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
