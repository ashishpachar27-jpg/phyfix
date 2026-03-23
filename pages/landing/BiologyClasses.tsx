import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Star, Users, Clock, BookOpen, Award, Dna, Leaf } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WA = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20biology%20class";

const topics = [
  { board: "IB Biology SL/HL", items: [
    { label: "Cell Biology & Biochemistry" },
    { label: "Genetics & Evolution" },
    { label: "Ecology & Human Physiology" },
    { label: "Plant Biology & Animal Physiology (HL)" },
    { label: "Neurobiology & Immunology (HL)" },
    { label: "Internal Assessment (IA) Support" },
  ]},
  { board: "IGCSE Biology (0610)", items: [
    { label: "Cell Structure & Organisation" },
    { label: "Biological Molecules & Enzymes" },
    { label: "Photosynthesis & Respiration" },
    { label: "Human Body Systems" },
    { label: "Genetics & Inheritance" },
    { label: "Ecology & the Environment" },
  ]},
  { board: "A-Level Biology (AQA/Edexcel/OCR)", items: [
    { label: "Biological Molecules & Cell Structure" },
    { label: "Exchange & Transport Systems" },
    { label: "Genetics, Populations & Evolution" },
    { label: "Energy Transfer (Photosynthesis, Respiration)" },
    { label: "Nervous System & Hormones" },
    { label: "A2 Synoptic & Required Practicals" },
  ]},
  { board: "AP Biology", items: [
    { label: "Chemistry of Life & Cell Structure" },
    { label: "Cellular Energetics (Metabolism)" },
    { label: "Cell Communication & Division" },
    { label: "Heredity & Gene Expression" },
    { label: "Natural Selection & Ecology" },
    { label: "Free Response & AP Exam Strategy" },
  ]},
  { board: "CBSE / NEET Biology", items: [
    { label: "Class 11 — Cell Biology, Plant Physiology" },
    { label: "Class 12 — Reproduction, Genetics, Ecology" },
    { label: "NEET Biology MCQ Strategies" },
    { label: "Botany (Anatomy, Physiology, Plant Kingdom)" },
    { label: "Zoology (Human Systems, Animal Kingdom)" },
    { label: "Previous Year NEET Biology Paper Analysis" },
  ]},
  { board: "ICSE / ISC Biology", items: [
    { label: "Cell Structure & Cell Division" },
    { label: "Genetics & Heredity" },
    { label: "Human Physiology (All Systems)" },
    { label: "Plant Physiology" },
    { label: "ISC Practical Experiments" },
    { label: "Environmental Science" },
  ]},
];

const whyItems = [
  { icon: Dna, title: "Specialist Biology Tutors", desc: "Our biology tutors include medical doctors, NEET toppers, and IB examiners with proven results across all major boards and curricula." },
  { icon: BookOpen, title: "Diagram-Rich Teaching", desc: "Biology is visual. Our tutors use annotated diagrams, flowcharts, and concept maps to make complex processes like mitosis, protein synthesis, and immune responses unforgettable." },
  { icon: Clock, title: "Flexible Recorded Sessions", desc: "All 1-on-1 sessions are via Zoom, fully recorded, and accompanied by topic summaries so you can revise before exams." },
  { icon: Users, title: "NEET & Medical Focus", desc: "PhyFix biology tutors specialise in NEET preparation — covering all Botany and Zoology topics with MCQ practice, previous year paper analysis, and speed strategies." },
  { icon: Star, title: "Free Demo Class", desc: "Book a full 1-hour free demo with a biology specialist. No credit card, no commitment — just a genuinely useful session." },
  { icon: Award, title: "All Boards & Levels", desc: "IB Biology, IGCSE Biology, A-Level Biology, AP Biology, CBSE/NEET/JEE Biology, and ICSE/ISC Biology are all covered by our verified tutors." },
];

const faqs = [
  { q: "Which biology boards does PhyFix cover?", a: "IB Biology (SL & HL), Cambridge IGCSE Biology (0610), A-Level Biology (AQA, Edexcel, OCR, Cambridge), AP Biology, CBSE Classes 11 & 12, NEET Biology, ISC/ICSE, and Edexcel/GCSE Biology." },
  { q: "Can you help with NEET Biology preparation?", a: "Yes — NEET Biology (Botany + Zoology) is one of our strongest specialisations. We cover the complete NCERT syllabus, past NEET papers, and high-yield MCQ strategies for both paper sections." },
  { q: "My IB Biology IA topic is complex — can tutors help?", a: "Absolutely. PhyFix tutors help students select IA topics with high scoring potential, design experiments with correct variables, analyse data statistically, and write up to IB examiner standards." },
  { q: "How does 1-on-1 biology tutoring work online?", a: "Sessions are conducted on Zoom with cameras enabled. Tutors use shared screens, annotated diagrams, and digital whiteboards. Every session is recorded and notes are shared after class." },
  { q: "How quickly can I see improvement in my biology grades?", a: "Most students see measurable improvement within 4–8 sessions. For a full syllabus overhaul (e.g., IB or A-Level), we recommend a 3–6 month tutoring programme with 2 sessions per week." },
];

export default function BiologyClasses() {
  useSeo({
    title: "Online Biology Classes | IB, IGCSE, A-Level, AP, NEET | PhyFix",
    description: "Expert 1-on-1 online biology tutoring for IB, IGCSE, A-Level, AP, CBSE & NEET. Specialist tutors, free demo class, zero commission. All boards covered.",
    keywords: "online biology classes, biology tutor online, IB biology tutor, IGCSE biology tutor, A-Level biology tutor, AP biology tutor, NEET biology tutor, biology tutoring",
    canonical: "https://phyfix.com/biology-classes",
    ogTitle: "Online Biology Classes — IB, IGCSE, A-Level, AP, NEET | PhyFix",
    ogDescription: "Expert 1-on-1 biology tutoring for all major boards. Specialist tutors, NEET focus, free demo class.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-orange-950/30 dark:via-background dark:to-amber-950/20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4 text-orange-700 dark:text-orange-300">
              <Dna className="w-3 h-3 mr-1" /> Biology Classes Online
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Online <span className="text-orange-600 dark:text-orange-400">Biology Classes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Personalised 1-on-1 biology tutoring for IB, IGCSE, A-Level, AP, CBSE, NEET & JEE. Learn from medical experts and IB-certified tutors, at your pace, from anywhere.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              ✓ Free Demo Class &nbsp;·&nbsp; ✓ Zero Commission &nbsp;·&nbsp; ✓ Recorded Sessions &nbsp;·&nbsp; ✓ NEET Specialists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full px-8 bg-orange-500 hover:bg-orange-600 text-white">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo Class
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                  <Users className="w-4 h-4" /> Browse Biology Tutors
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Biology Topics We Cover</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Complete syllabus coverage for every major international and national biology board.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full border-orange-100 dark:border-orange-900/40 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <Dna className="w-4 h-4" /> {t.board}
                  </h3>
                  <ul className="space-y-1.5">
                    {t.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-orange-500 shrink-0" />
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
      <section className="py-12 bg-orange-50/50 dark:bg-orange-950/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold mb-4">Who Is This For?</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "School Students (Grades 9–10)", desc: "IGCSE, GCSE, CBSE, ICSE — building strong biology foundations for pre-university success." },
              { label: "IB / A-Level / AP Students", desc: "Targeting top grades in essay-based and MCQ biology exams that determine medical school applications." },
              { label: "NEET / MCAT Aspirants", desc: "Biology is the highest-weight paper in NEET. Expert tutoring covers all Botany and Zoology topics with MCQ-first strategies." },
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose PhyFix for Biology?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Expert biology tutors with medical and research backgrounds, proven results across all boards.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300">
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
              { label: "Chemistry Classes", href: "/chemistry-classes" },
              { label: "Physics Classes", href: "/physics-classes" },
              { label: "Test Prep (NEET/MCAT)", href: "/test-prep" },
              { label: "Mathematics Classes", href: "/maths-classes" },
              { label: "All Subjects", href: "/subjects" },
            ].map(link => (
              <Link key={link.href} href={link.href}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors px-3 py-1 text-sm">
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
            <p className="text-muted-foreground">Everything you need to know about biology classes at PhyFix.</p>
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
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Start Your Biology Journey Today</h2>
            <p className="text-white/80 mb-8 text-lg">Book a free 1-hour demo class — no credit card, no commitment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo on WhatsApp
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-orange-700">
                  Browse Biology Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
