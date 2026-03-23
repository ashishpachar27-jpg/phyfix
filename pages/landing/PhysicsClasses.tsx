import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Star, MessageCircle, BookOpen, Atom, Users, Clock, Award } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WA = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20physics%20class";

const topics = [
  { board: "IB Physics", items: [
    { label: "Mechanics", slug: "ib-physics-mechanics-tutor" },
    { label: "Thermal Physics", slug: "ib-physics-thermal-tutor" },
    { label: "Waves & SHM", slug: "ib-physics-waves-tutor" },
    { label: "Electricity & Magnetism", slug: "ib-physics-electricity-tutor" },
    { label: "Fields (HL)", slug: "ib-physics-fields-tutor" },
    { label: "Atomic & Nuclear Physics", slug: "ib-physics-atomic-tutor" },
  ]},
  { board: "IGCSE Physics", items: [
    { label: "Forces & Motion", slug: "igcse-physics-forces-motion-tutor" },
    { label: "Energy", slug: "igcse-physics-energy-tutor" },
    { label: "Waves & Optics", slug: "igcse-physics-waves-tutor" },
    { label: "Electricity & Magnetism", slug: "igcse-physics-electricity-tutor" },
    { label: "Atomic Physics", slug: null },
    { label: "Space Physics", slug: null },
  ]},
  { board: "A-Level Physics", items: [
    { label: "Mechanics", slug: "a-level-physics-mechanics-tutor" },
    { label: "Electricity & Electromagnetism", slug: "a-level-physics-electricity-tutor" },
    { label: "Waves & Quantum", slug: "a-level-physics-waves-tutor" },
    { label: "Fields", slug: "a-level-physics-fields-tutor" },
    { label: "Materials", slug: null },
    { label: "Medical Physics", slug: null },
  ]},
  { board: "AP Physics", items: [
    { label: "Kinematics (AP Physics 1)", slug: "ap-physics-1-kinematics-tutor" },
    { label: "Dynamics & Forces", slug: "ap-physics-1-dynamics-tutor" },
    { label: "Energy & Momentum", slug: "ap-physics-1-energy-tutor" },
    { label: "Waves & Sound", slug: "ap-physics-1-waves-tutor" },
    { label: "AP Physics 2 (Fluids, EM)", slug: null },
    { label: "AP Physics C: E&M", slug: null },
  ]},
  { board: "CBSE / ICSE Physics", items: [
    { label: "Class 11 Physics", slug: "cbse-physics-class-11-tutor" },
    { label: "Class 12 Physics", slug: "cbse-physics-class-12-tutor" },
    { label: "JEE Physics", slug: null },
    { label: "NEET Physics", slug: null },
    { label: "Optics", slug: null },
    { label: "Modern Physics", slug: null },
  ]},
];

const whyItems = [
  { icon: Users, title: "1-on-1 Classes", desc: "Every session is fully personalised to your pace and gaps — no group distractions." },
  { icon: Clock, title: "Flexible Timing", desc: "Classes scheduled around your timetable, any timezone, weekdays or weekends." },
  { icon: BookOpen, title: "Recorded Sessions", desc: "Every lecture is recorded so you can revise at any time before exams." },
  { icon: Award, title: "Verified Tutors", desc: "All PhyFix physics tutors are vetted with proven track records across IB, IGCSE, AP, and more." },
  { icon: Star, title: "Free Demo Class", desc: "Try before you commit — book a free 1-hour demo session with no obligations." },
  { icon: CheckCircle, title: "Zero Commission", desc: "Pay your tutor directly. PhyFix charges no platform commission — you keep more money." },
];

const faqs = [
  { q: "Which physics boards do your tutors cover?", a: "Our tutors cover IB (SL & HL), Cambridge IGCSE & A-Level, AP Physics 1, 2 & C, CBSE Classes 9–12, ICSE, Edexcel, GCSE, MYP, and JEE/NEET Physics." },
  { q: "How much does a physics class cost?", a: "Rates vary by tutor and level — typically ₹500–₹2,000/hr. Students pay tutors directly with zero platform commission." },
  { q: "Can I get a free trial class?", a: "Yes! Every student gets a free 1-hour demo class before committing to regular sessions." },
  { q: "Are classes conducted online or offline?", a: "All classes are conducted online via Zoom with cameras enabled. Sessions are recorded and notes are shared after each class." },
  { q: "What if I am struggling with a specific topic?", a: "Our tutors start with a diagnostic session to identify exact weak areas and build a customised plan targeting those topics first." },
];

export default function PhysicsClasses() {
  useSeo({
    title: "Online Physics Classes | IB, IGCSE, A-Level, AP, CBSE | PhyFix",
    description: "Expert 1-on-1 online physics classes for IB, IGCSE, A-Level, AP, CBSE & more. Verified tutors, free demo, zero commission. Book your physics class today!",
    keywords: "online physics classes, physics tutor, IB physics tutor, IGCSE physics tutor, A-Level physics tutor, AP physics tutor, CBSE physics tutor, physics classes online, physics tutoring",
    canonical: "https://phyfix.com/physics-classes",
    ogTitle: "Online Physics Classes — IB, IGCSE, A-Level, AP, CBSE | PhyFix",
    ogDescription: "Master Physics with verified 1-on-1 tutors. Free demo class. Zero commission. All international boards covered.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/30 dark:via-background dark:to-indigo-950/20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4 text-blue-700 dark:text-blue-300">
              <Atom className="w-3 h-3 mr-1" /> Physics Classes Online
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Online <span className="text-primary">Physics Classes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Personalised 1-on-1 physics tutoring for IB, IGCSE, A-Level, AP, CBSE, JEE & NEET. Learn from verified expert tutors, at your own pace, from anywhere in the world.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              ✓ Free Demo Class &nbsp;·&nbsp; ✓ Zero Commission &nbsp;·&nbsp; ✓ Recorded Sessions &nbsp;·&nbsp; ✓ All Boards Covered
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full px-8 bg-green-500 hover:bg-green-600 text-white">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo Class
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                  <Users className="w-4 h-4" /> Browse Physics Tutors
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Physics Topics We Cover</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Full syllabus coverage for every major international and national physics board.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full border-blue-100 dark:border-blue-900/40 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                    <Atom className="w-4 h-4" /> {t.board}
                  </h3>
                  <ul className="space-y-1.5">
                    {t.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {item.slug ? (
                          <Link href={`/topics/${item.slug}`} className="hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors">
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
      <section className="py-16 bg-blue-50/50 dark:bg-blue-950/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose PhyFix for Physics?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We built PhyFix to make expert physics tutoring accessible, affordable and results-driven.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
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
            <p className="text-muted-foreground">Everything you need to know about physics classes at PhyFix.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Start Your Physics Journey Today</h2>
            <p className="text-white/80 mb-8 text-lg">Book a free 1-hour demo class — no credit card, no commitment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo on WhatsApp
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-primary">
                  Browse Physics Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
