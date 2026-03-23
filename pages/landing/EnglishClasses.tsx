import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Star, Users, Clock, BookOpen, Award, PenLine, Globe } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WA = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20English%20class";

const topics = [
  { board: "IB English A & B", items: [
    { label: "Paper 1 — Unseen Text Analysis" },
    { label: "Paper 2 — Comparative Essay Writing" },
    { label: "Individual Oral (IO) Preparation" },
    { label: "Higher Level Essay (HL Essay)" },
    { label: "Literature Works — Close Reading" },
    { label: "IB English B (Language Acquisition)" },
  ]},
  { board: "IGCSE English (0500 / 0522)", items: [
    { label: "First Language English — Reading & Writing" },
    { label: "Second Language English (0510 / 0511)" },
    { label: "Directed Writing & Composition" },
    { label: "Summary Writing Techniques" },
    { label: "Comprehension & Inference" },
    { label: "Coursework & Extended Essay" },
  ]},
  { board: "A-Level / AS-Level English", items: [
    { label: "Language & Literature (AQA / Edexcel)" },
    { label: "Unseen Poetry & Prose Analysis" },
    { label: "Comparative Literature Essays" },
    { label: "Language Investigation" },
    { label: "A-Level Coursework Support" },
    { label: "Critical Reading & Argument" },
  ]},
  { board: "IELTS Preparation", items: [
    { label: "IELTS Academic Reading (Band 8+)" },
    { label: "IELTS Academic Writing Task 1 & 2" },
    { label: "IELTS General Training Reading & Writing" },
    { label: "IELTS Speaking (All Parts)" },
    { label: "IELTS Listening Strategies" },
    { label: "Mock Tests & Band Score Prediction" },
  ]},
  { board: "TOEFL / PTE / Duolingo", items: [
    { label: "TOEFL iBT Reading & Listening" },
    { label: "TOEFL Integrated & Independent Writing" },
    { label: "TOEFL Speaking — Templates & Practice" },
    { label: "PTE Academic — All Sections" },
    { label: "Duolingo English Test Prep" },
    { label: "Full Mock Tests with Feedback" },
  ]},
  { board: "Academic English / ESL", items: [
    { label: "Academic Essay & Report Writing" },
    { label: "Research Paper Structure & Citation" },
    { label: "Email & Business English" },
    { label: "Grammar, Vocabulary & Fluency" },
    { label: "Conversational English (All Levels)" },
    { label: "English for Medical / Legal / STEM Professionals" },
  ]},
];

const whyItems = [
  { icon: PenLine, title: "Academic Writing Specialists", desc: "Our English tutors specialise in the kind of analytical writing that IB, A-Level, and university examiners reward — structured argument, precise evidence, and sophisticated vocabulary." },
  { icon: Globe, title: "Native & Near-Native Tutors", desc: "All PhyFix English tutors are native or near-native speakers with formal training in English teaching, IELTS examining, or academic writing instruction." },
  { icon: Clock, title: "Flexible Recorded Sessions", desc: "All 1-on-1 sessions are via Zoom, recorded, and followed up with annotated feedback on your writing samples." },
  { icon: Star, title: "IELTS Band 8+ Strategy", desc: "We teach targeted strategies for each IELTS/TOEFL section — not just general English improvement. Students regularly achieve their target bands within 6–8 sessions." },
  { icon: BookOpen, title: "Literature Deep Dives", desc: "For IB and A-Level English Literature, we provide close reading sessions, essay frameworks, and oral practice calibrated to IB/A-Level assessment criteria." },
  { icon: Award, title: "Free Demo Class", desc: "Book a free 1-hour demo session. Your first class includes a diagnostic assessment and personalised improvement plan." },
];

const faqs = [
  { q: "What English programmes does PhyFix cover?", a: "IB English A and B (SL & HL), IGCSE First and Second Language English, A-Level English Language and Literature, IELTS Academic and General, TOEFL iBT, PTE Academic, Duolingo, and general Academic English / ESL." },
  { q: "How quickly can I improve my IELTS band score?", a: "Most students improve by 0.5–1.0 bands within 6–8 targeted sessions. Students starting at band 5.5 and targeting 7.0 typically need a 10–16 session programme covering all four sections systematically." },
  { q: "Can you help with IB English Individual Oral (IO)?", a: "Yes — IO preparation is one of our specialised services. We help students select appropriate extracts, structure their comparative commentary, and practise the 15-minute oral format with feedback calibrated to IB criteria A, B, C, and D." },
  { q: "Do you offer ESL classes for non-native English speakers?", a: "Yes. We provide conversational English classes, academic writing support, grammar and vocabulary building, and business English for adult professionals and students at all levels from beginner to advanced." },
  { q: "Are sessions recorded? Can I review them later?", a: "All sessions are recorded on Zoom and the link is shared with you immediately after class. This is especially valuable for IELTS Speaking practice — watching yourself helps you identify patterns and improve faster." },
];

export default function EnglishClasses() {
  useSeo({
    title: "Online English Classes | IELTS, IB, A-Level, ESL | PhyFix",
    description: "Expert 1-on-1 online English tutoring — IELTS, TOEFL, IB English, A-Level English, academic writing & ESL. Native tutors, free demo, zero commission.",
    keywords: "online English classes, IELTS tutor online, IB English tutor, A-Level English tutor, TOEFL preparation, academic English tutor, ESL classes online, English tutoring",
    canonical: "https://phyfix.com/english-classes",
    ogTitle: "Online English Classes — IELTS, IB English, ESL | PhyFix",
    ogDescription: "Expert 1-on-1 English tutoring for IELTS, TOEFL, IB, A-Level, and academic writing. Native tutors, free demo.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-pink-950/30 dark:via-background dark:to-rose-950/20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4 text-pink-700 dark:text-pink-300">
              <BookOpen className="w-3 h-3 mr-1" /> English Classes Online
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Online <span className="text-pink-600 dark:text-pink-400">English Classes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Personalised 1-on-1 English tutoring for IELTS, TOEFL, IB English, A-Level English, academic writing and ESL. Native tutors, targeted strategies, measurable results.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              ✓ Free Demo Class &nbsp;·&nbsp; ✓ Zero Commission &nbsp;·&nbsp; ✓ Recorded Sessions &nbsp;·&nbsp; ✓ IELTS Band 8+ Strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full px-8 bg-pink-600 hover:bg-pink-700 text-white">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo Class
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                  <Users className="w-4 h-4" /> Browse English Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics by Board */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">English Programmes We Cover</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From IELTS preparation to IB English Literature — full coverage for every English programme.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full border-pink-100 dark:border-pink-900/40 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-pink-700 dark:text-pink-300 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> {t.board}
                  </h3>
                  <ul className="space-y-1.5">
                    {t.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-pink-500 shrink-0" />
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

      {/* Why PhyFix */}
      <section className="py-16 bg-pink-50/50 dark:bg-pink-950/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose PhyFix for English?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Native tutors, targeted strategies, and measurable band-score improvements.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300">
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
              { label: "Test Prep (IELTS/TOEFL/SAT)", href: "/test-prep" },
              { label: "Computer Science Classes", href: "/cs-classes" },
              { label: "Mathematics Classes", href: "/maths-classes" },
              { label: "All Subjects", href: "/subjects" },
            ].map(link => (
              <Link key={link.href} href={link.href}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors px-3 py-1 text-sm">
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
            <p className="text-muted-foreground">Everything you need to know about English classes at PhyFix.</p>
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
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Start Your English Journey Today</h2>
            <p className="text-white/80 mb-8 text-lg">Book a free 1-hour demo class — no credit card, no commitment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo on WhatsApp
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-pink-700">
                  Browse English Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
