import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Star, Users, Clock, BookOpen, Award, Target, TrendingUp, Trophy } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WA = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20test%20prep%20class";

const tests = [
  { name: "SAT Preparation", badge: "College Admissions", color: "border-violet-100 dark:border-violet-900/40", headingColor: "text-violet-700 dark:text-violet-300", checkColor: "text-violet-500", items: [
    "SAT Math — Algebra, Advanced Math, Problem Solving",
    "SAT Reading & Writing — Evidence-Based Reading",
    "SAT Grammar & Expression of Ideas",
    "Full-Length Practice Test Analysis",
    "Score 1500+ Strategy & Time Management",
    "SAT Math No-Calculator Section",
  ]},
  { name: "ACT Preparation", badge: "US College Admissions", color: "border-blue-100 dark:border-blue-900/40", headingColor: "text-blue-700 dark:text-blue-300", checkColor: "text-blue-500", items: [
    "ACT Math — Pre-Algebra through Trigonometry",
    "ACT Science — Data Interpretation & Research",
    "ACT English — Grammar & Rhetorical Skills",
    "ACT Reading — Passage Comprehension Strategies",
    "ACT Writing (Essay) — Argument Frameworks",
    "ACT 35+ Score Strategy & Full Mock Tests",
  ]},
  { name: "IELTS Academic Preparation", badge: "Global University Admissions", color: "border-green-100 dark:border-green-900/40", headingColor: "text-green-700 dark:text-green-300", checkColor: "text-green-500", items: [
    "IELTS Reading — Skimming, Scanning, True/False/NG",
    "IELTS Academic Writing Task 1 (Data Description)",
    "IELTS Academic Writing Task 2 (Essay — Band 8 Templates)",
    "IELTS Speaking — Part 1, 2, 3 Fluency Strategies",
    "IELTS Listening — Form, Map, Multiple Choice",
    "Mock Tests with Detailed Band-Score Feedback",
  ]},
  { name: "TOEFL iBT Preparation", badge: "US/Canada University Admissions", color: "border-amber-100 dark:border-amber-900/40", headingColor: "text-amber-700 dark:text-amber-300", checkColor: "text-amber-500", items: [
    "TOEFL Reading — Academic Passage Strategies",
    "TOEFL Listening — Lecture & Conversation Skills",
    "TOEFL Speaking — Integrated & Independent Tasks",
    "TOEFL Writing — Integrated & Academic Essay",
    "Score 110+ Strategies & Mock Tests",
    "TOEFL vs IELTS — Which Is Right for You?",
  ]},
  { name: "GRE Preparation", badge: "Graduate School Admissions", color: "border-rose-100 dark:border-rose-900/40", headingColor: "text-rose-700 dark:text-rose-300", checkColor: "text-rose-500", items: [
    "GRE Quantitative Reasoning (Q165+ Strategy)",
    "GRE Verbal Reasoning — Critical Reading & Vocabulary",
    "GRE Analytical Writing — Issue & Argument Tasks",
    "Advanced Math — Statistics, Algebra, Geometry",
    "GRE Vocabulary (High-Frequency Word Lists)",
    "Full-Length Mock Tests with Adaptive Scoring",
  ]},
  { name: "GMAT / NEET / JEE Prep", badge: "Business & Medical School", color: "border-indigo-100 dark:border-indigo-900/40", headingColor: "text-indigo-700 dark:text-indigo-300", checkColor: "text-indigo-500", items: [
    "GMAT Focus Quant — Data Insights, Algebra, Geometry",
    "GMAT Verbal — Critical Reasoning & Reading Comprehension",
    "NEET Physics, Chemistry & Biology Strategy",
    "JEE Main & Advanced — All Three Papers",
    "UCAT / BMAT (Medical School Admissions UK/AU)",
    "Mock Test Analysis & Target-Score Planning",
  ]},
];

const stats = [
  { value: "1500+", label: "Average SAT Score Achieved", icon: Trophy },
  { value: "8.0", label: "Average IELTS Band Achieved", icon: Star },
    { value: "320+", label: "Average GRE Score Achieved", icon: Target },
  { value: "100%", label: "Demo Sessions → Regular Students", icon: TrendingUp },
];

const whyItems = [
  { icon: Target, title: "Score-Focused Tutoring", desc: "Every session has a defined score target and measurable outcome. We don't teach general English or maths — we teach the specific skills each exam tests." },
  { icon: Clock, title: "Efficient Use of Time", desc: "Test prep is time-sensitive. Our tutors identify your weakest sections first and allocate study time proportionally to maximise score improvement per hour." },
  { icon: BookOpen, title: "Full Mock Test Analysis", desc: "Every PhyFix test prep programme includes full-length mock tests with detailed section-by-section feedback and error pattern analysis." },
  { icon: Users, title: "Expert Tutors per Exam", desc: "We match you with a tutor who specialises in your specific exam — not a generalist. SAT tutors know SAT; IELTS examiners teach IELTS." },
  { icon: TrendingUp, title: "Proven Score Improvements", desc: "Our students average +200 SAT points, +1.0 IELTS band, and +15 GRE points within structured 12–20 session programmes." },
  { icon: Award, title: "Free Demo Session", desc: "Your free demo includes a diagnostic mock test, score analysis, and a personalised study plan with session-by-session targets." },
];

const faqs = [
  { q: "Which tests does PhyFix cover?", a: "SAT, ACT, IELTS Academic and General, TOEFL iBT, GRE, GMAT, NEET, JEE Main and Advanced, UCAT, and BMAT. We match you with a specialist tutor for each specific test." },
  { q: "How many sessions do I need for IELTS?", a: "Students targeting a 0.5 band improvement typically need 6–8 targeted sessions. For a 1.0 band jump (e.g., 6.0 to 7.0), we recommend a 12–16 session programme covering all four sections with weekly mock tests." },
  { q: "When should I start SAT prep?", a: "Ideally 4–6 months before your target test date. This allows time for 2 sessions per week, full mock tests every 2–3 weeks, and final polishing in the last 3–4 weeks. Last-minute prep (1–2 months) is also possible with an intensive schedule." },
  { q: "Do your tutors provide study plans?", a: "Yes — every student receives a personalised study plan in their first session, including weekly session topics, self-study tasks, and milestone mock test dates to track progress toward their target score." },
  { q: "Can I prepare for multiple tests simultaneously?", a: "We advise focusing on one test at a time for optimal results. However, if you are preparing for IELTS and SAT (common for international students applying to US universities), we can schedule alternating sessions with specialist tutors for each test." },
];

export default function TestPrep() {
  useSeo({
    title: "Online Test Prep | SAT, IELTS, GRE, GMAT, TOEFL, ACT | PhyFix",
    description: "Expert 1-on-1 test prep tutoring for SAT, ACT, IELTS, TOEFL, GRE, GMAT, NEET & JEE. Specialist tutors, proven score improvements, free demo session.",
    keywords: "online test prep, SAT tutor online, IELTS tutor online, GRE tutor, GMAT tutor, TOEFL preparation, ACT tutor, NEET coaching, JEE preparation, test prep tutoring",
    canonical: "https://phyfix.com/test-prep",
    ogTitle: "Online Test Prep — SAT, IELTS, GRE, GMAT, TOEFL | PhyFix",
    ogDescription: "Expert 1-on-1 tutoring for SAT, IELTS, GRE, GMAT, TOEFL, ACT and more. Proven score improvements, free demo session.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-violet-950/30 dark:via-background dark:to-indigo-950/20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4 text-violet-700 dark:text-violet-300">
              <Target className="w-3 h-3 mr-1" /> Test Prep Classes Online
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Online <span className="text-violet-600 dark:text-violet-400">Test Prep</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Score-focused 1-on-1 tutoring for SAT, ACT, IELTS, TOEFL, GRE, GMAT, NEET & JEE. Specialist tutors for each exam. Personalised study plans. Proven score improvements.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              ✓ Free Diagnostic Session &nbsp;·&nbsp; ✓ Personalised Study Plan &nbsp;·&nbsp; ✓ Full Mock Tests &nbsp;·&nbsp; ✓ Score Guarantee Strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full px-8 bg-violet-600 hover:bg-violet-700 text-white">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Diagnostic Session
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                  <Users className="w-4 h-4" /> Browse Test Prep Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-violet-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-3xl font-bold font-display">{s.value}</div>
                <div className="text-violet-200 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tests */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Exams We Cover</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Each exam has a dedicated specialist tutor — not a generalist. We know exactly what each test rewards.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className={`p-5 h-full ${t.color} hover:shadow-md transition-shadow`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`font-semibold ${t.headingColor}`}>{t.name}</h3>
                    <Badge variant="outline" className="text-xs shrink-0 ml-2">{t.badge}</Badge>
                  </div>
                  <ul className="space-y-1.5">
                    {t.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className={`w-3.5 h-3.5 ${t.checkColor} shrink-0 mt-0.5`} />
                        {item}
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
      <section className="py-16 bg-violet-50/50 dark:bg-violet-950/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose PhyFix for Test Prep?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Exam-specialist tutors, score-focused methodology, and personalised study plans.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300">
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

      {/* Related */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-muted-foreground mb-4 font-medium">Explore related subjects:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "English Classes (IELTS/TOEFL)", href: "/english-classes" },
              { label: "Mathematics Classes", href: "/maths-classes" },
              { label: "Physics Classes", href: "/physics-classes" },
              { label: "All Subjects", href: "/subjects" },
            ].map(link => (
              <Link key={link.href} href={link.href}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors px-3 py-1 text-sm">
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
            <p className="text-muted-foreground">Everything you need to know about test prep at PhyFix.</p>
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
      <section className="py-16 bg-violet-700 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Achieve Your Target Score — Free Diagnostic Session</h2>
            <p className="text-white/80 mb-8 text-lg">Book a free 1-hour diagnostic session. We'll analyse your current level and build a personalised score roadmap.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Diagnostic Session
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-violet-700">
                  Browse Test Prep Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
