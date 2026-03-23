import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Star, Users, Clock, BookOpen, Award, Calculator } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WA = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20maths%20class";

const topics = [
  { board: "IB Mathematics", items: [
    { label: "IB Maths AA SL", slug: "ib-maths-aa-sl-tutor" },
    { label: "IB Maths AA HL — Calculus", slug: "ib-maths-aa-hl-calculus-tutor" },
    { label: "IB Maths AA HL — Algebra", slug: "ib-maths-aa-hl-algebra-tutor" },
    { label: "IB Maths AI SL", slug: "ib-maths-ai-sl-tutor" },
    { label: "Statistics & Probability", slug: null },
    { label: "Internal Assessment", slug: null },
  ]},
  { board: "IGCSE Mathematics", items: [
    { label: "Algebra", slug: "igcse-maths-algebra-tutor" },
    { label: "Geometry & Trigonometry", slug: "igcse-maths-geometry-tutor" },
    { label: "Statistics & Probability", slug: "igcse-maths-statistics-tutor" },
    { label: "Number & Arithmetic", slug: "igcse-maths-number-tutor" },
    { label: "Cambridge 0580 Core", slug: null },
    { label: "Cambridge 0580 Extended", slug: null },
  ]},
  { board: "A-Level Mathematics", items: [
    { label: "Pure Mathematics", slug: null },
    { label: "Statistics", slug: null },
    { label: "Mechanics", slug: null },
    { label: "A-Level Further Maths", slug: null },
    { label: "Edexcel / AQA / OCR", slug: null },
    { label: "AS-Level Maths", slug: null },
  ]},
  { board: "AP Mathematics", items: [
    { label: "AP Calculus AB", slug: "ap-calculus-ab-tutor" },
    { label: "AP Calculus BC", slug: "ap-calculus-bc-tutor" },
    { label: "AP Statistics", slug: null },
    { label: "AP Pre-Calculus", slug: null },
    { label: "Differential Equations", slug: null },
    { label: "Limits & Continuity", slug: null },
  ]},
  { board: "CBSE / ICSE Mathematics", items: [
    { label: "Class 11 Mathematics", slug: "cbse-maths-class-11-tutor" },
    { label: "Class 12 Mathematics", slug: "cbse-maths-class-12-tutor" },
    { label: "JEE Maths", slug: null },
    { label: "SAT Math", slug: null },
    { label: "Real Analysis", slug: null },
    { label: "Linear Algebra", slug: null },
  ]},
  { board: "SAT & Competitive", items: [
    { label: "SAT Math", slug: null },
    { label: "AMC 8 / 10 / 12", slug: null },
    { label: "GMAT Quant", slug: null },
    { label: "GRE Math", slug: null },
    { label: "Olympiad Preparation", slug: null },
    { label: "Mental Maths", slug: null },
  ]},
];

const whyItems = [
  { icon: Users, title: "1-on-1 Sessions", desc: "Fully personalised classes focused on your syllabus, pace, and exam targets." },
  { icon: Clock, title: "Any Timezone", desc: "Flexible scheduling to fit your timetable — mornings, evenings, weekends." },
  { icon: BookOpen, title: "Notes & Recordings", desc: "Every class is recorded. Detailed notes and practice sets shared after each session." },
  { icon: Award, title: "Expert Tutors", desc: "All tutors are vetted IIT, PhD, or master's-qualified mathematics specialists." },
  { icon: Star, title: "Free Demo Class", desc: "Your first session is completely free — no credit card, no commitment." },
  { icon: CheckCircle, title: "Direct Payment", desc: "Zero commission — pay your tutor directly and keep every rupee in your pocket." },
];

const faqs = [
  { q: "Which maths boards do you cover?", a: "We cover IB Maths AA & AI, Cambridge IGCSE (0580), A-Level, AS-Level, AP Calculus AB/BC, AP Statistics, CBSE Classes 9–12, ICSE, Edexcel, GCSE, SAT Math, JEE Maths, and more." },
  { q: "How are online maths classes conducted?", a: "Classes are conducted live on Zoom with cameras on. Our tutors use a digital whiteboard (Pentab) for clear working. Every session is recorded for later revision." },
  { q: "How much do maths classes cost?", a: "Fees vary by tutor and level — typically ₹500–₹2,000/hr. Students pay tutors directly with no platform commission." },
  { q: "Can you help with exam preparation?", a: "Absolutely. Our tutors are experienced in IB May/Nov sessions, IGCSE papers, A-Level, and AP exam strategies including past-paper walkthroughs." },
  { q: "My child is weak in maths — can you help?", a: "Yes. We start with a gap analysis and build a structured remedial plan. Most students see improvement within 4–6 sessions." },
];

export default function MathsClasses() {
  useSeo({
    title: "Online Maths Classes | IB, IGCSE, A-Level, AP, CBSE | PhyFix",
    description: "Expert 1-on-1 online maths classes for IB, IGCSE, A-Level, AP, CBSE, SAT & more. Verified tutors, free demo, zero commission. Book your maths class today!",
    keywords: "online maths classes, maths tutor, math tutor online, IB maths tutor, IGCSE maths tutor, A-Level maths tutor, AP calculus tutor, CBSE maths tutor, mathematics tutoring online",
    canonical: "https://phyfix.com/maths-classes",
    ogTitle: "Online Maths Classes — IB, IGCSE, A-Level, AP, CBSE | PhyFix",
    ogDescription: "Master Mathematics with verified 1-on-1 tutors. Free demo class. Zero commission. All international boards covered.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-purple-950/30 dark:via-background dark:to-violet-950/20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4 text-purple-700 dark:text-purple-300">
              <Calculator className="w-3 h-3 mr-1" /> Maths Classes Online
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Online <span className="text-primary">Maths Classes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Personalised 1-on-1 mathematics tutoring for IB, IGCSE, A-Level, AP, CBSE, SAT, JEE & more. Build real understanding, not just exam tricks.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              ✓ Free Demo Class &nbsp;·&nbsp; ✓ Zero Commission &nbsp;·&nbsp; ✓ Recorded Sessions &nbsp;·&nbsp; ✓ Digital Whiteboard
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full px-8 bg-green-500 hover:bg-green-600 text-white">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo Class
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                  <Users className="w-4 h-4" /> Browse Maths Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Maths Topics We Cover</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Complete syllabus coverage across every major international and national mathematics board.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full border-purple-100 dark:border-purple-900/40 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                    <Calculator className="w-4 h-4" /> {t.board}
                  </h3>
                  <ul className="space-y-1.5">
                    {t.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {item.slug ? (
                          <Link href={`/topics/${item.slug}`} className="hover:text-purple-700 dark:hover:text-purple-300 hover:underline transition-colors">
                            {item.label}
                          </Link>
                        ) : item.label}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PhyFix */}
      <section className="py-16 bg-purple-50/50 dark:bg-purple-950/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose PhyFix for Maths?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Built to make expert mathematics tutoring personal, flexible, and effective.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
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

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about online maths classes at PhyFix.</p>
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
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Master Mathematics?</h2>
            <p className="text-white/80 mb-8 text-lg">Start with a free 1-hour demo class — no credit card, no commitment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo on WhatsApp
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-primary">
                  Browse Maths Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
