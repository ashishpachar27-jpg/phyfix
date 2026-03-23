import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Star, Users, Clock, BookOpen, Award, Monitor, Code2, BrainCircuit } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WA = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20computer%20science%20class";

const topics = [
  { board: "IB Computer Science SL/HL", items: [
    { label: "System Fundamentals & Architecture" },
    { label: "Object-Oriented Programming (OOP)" },
    { label: "Computational Thinking & Problem Solving" },
    { label: "Data Structures (Arrays, Linked Lists, Stacks)" },
    { label: "Algorithms (Searching, Sorting, Recursion)" },
    { label: "HL Option — OOP, Databases, Web Science" },
  ]},
  { board: "IGCSE Computer Science (0478)", items: [
    { label: "Algorithm Design & Pseudocode" },
    { label: "Programming (Python / Visual Basic)" },
    { label: "Data Representation (Binary, Hex)" },
    { label: "Computer Systems & Hardware" },
    { label: "Databases & Networking" },
    { label: "Programming Project (Coursework)" },
  ]},
  { board: "AP Computer Science A & Principles", items: [
    { label: "AP CS A — Java Programming (OOP)" },
    { label: "AP CS Principles — Internet, Data, Algorithms" },
    { label: "Data Structures in Java" },
    { label: "Inheritance & Polymorphism" },
    { label: "Recursion & Algorithm Analysis" },
    { label: "AP Exam FRQ Practice" },
  ]},
  { board: "Python Programming (All Levels)", items: [
    { label: "Python Basics — Variables, Loops, Functions" },
    { label: "Object-Oriented Python (Classes)" },
    { label: "File Handling & Exceptions" },
    { label: "Data Manipulation with Pandas" },
    { label: "Web Scraping with BeautifulSoup" },
    { label: "Project-Based Learning" },
  ]},
  { board: "Data Structures & Algorithms", items: [
    { label: "Arrays, Linked Lists, Trees, Graphs" },
    { label: "Sorting & Searching (Merge, Quick, Binary)" },
    { label: "Dynamic Programming & Greedy Algorithms" },
    { label: "Time & Space Complexity (Big O)" },
    { label: "LeetCode / HackerRank Problem Solving" },
    { label: "Technical Interview Preparation" },
  ]},
  { board: "Data Science & AI Fundamentals", items: [
    { label: "Python for Data Analysis (Pandas, NumPy)" },
    { label: "Data Visualisation (Matplotlib, Seaborn)" },
    { label: "Machine Learning Basics (Scikit-Learn)" },
    { label: "Statistics for Data Science" },
    { label: "Introduction to Deep Learning (TensorFlow)" },
    { label: "Data Science Projects for University Applications" },
  ]},
];

const whyItems = [
  { icon: Code2, title: "Industry-Experienced Tutors", desc: "PhyFix CS tutors are software engineers, data scientists, and certified teachers with real-world coding experience alongside academic teaching expertise." },
  { icon: BrainCircuit, title: "Project-Based Learning", desc: "We go beyond syntax — students build real projects (web apps, data tools, algorithms) that they can showcase in university applications and portfolios." },
  { icon: Clock, title: "Flexible 1-on-1 Sessions", desc: "All sessions are personalised and scheduled at your convenience. Learn at your own pace — from Python basics to advanced ML." },
  { icon: Monitor, title: "IB & IGCSE CS Specialists", desc: "Our tutors know exactly what IB CS and IGCSE CS examiners want — and teach pseudocode, OOP, and algorithm design with exam-technique precision." },
  { icon: Star, title: "Interview Prep", desc: "For students heading to university or the tech industry, we provide Data Structures & Algorithms coaching and mock technical interviews." },
  { icon: Award, title: "Free Demo Class", desc: "Book a free 1-hour demo session with a CS specialist. Includes a skills assessment and personalised learning roadmap." },
];

const faqs = [
  { q: "Which CS programmes does PhyFix cover?", a: "IB Computer Science (SL & HL), Cambridge IGCSE CS (0478), AP Computer Science A and Principles, Python (all levels), Data Structures & Algorithms, Data Science, and technical interview preparation." },
  { q: "Do I need any prior coding experience?", a: "No — we welcome complete beginners. Our Python for Beginners programme starts from scratch and builds systematically. If you already have some coding experience, your tutor will assess your level and start at the right point." },
  { q: "Can PhyFix help with my IB CS Internal Assessment?", a: "Yes. Our tutors guide IB CS students through the entire HL IA process — from product design and solution planning to coding, testing, and the written report. We help students meet all three IB criteria systematically." },
  { q: "Do you offer Data Science or AI tutoring?", a: "Yes — we offer Data Science fundamentals covering Python, Pandas, NumPy, data visualisation, and introductory Machine Learning using Scikit-Learn. This is suited for students wanting to build portfolios for STEM university applications." },
  { q: "How does online CS tutoring work practically?", a: "Sessions are via Zoom with screen sharing. Your tutor shares code live in VS Code, Jupyter Notebook, or whatever environment you use, and you code alongside them. All sessions are recorded." },
];

export default function CsClasses() {
  useSeo({
    title: "Online Computer Science Classes | IB, IGCSE, AP, Python | PhyFix",
    description: "Expert 1-on-1 online Computer Science and coding tutoring. IB CS, IGCSE CS, AP CS, Python, Data Science, and technical interview prep. Free demo class.",
    keywords: "online computer science classes, coding tutor online, IB computer science tutor, IGCSE CS tutor, AP computer science tutor, Python tutor online, data science tutor, CS tutoring",
    canonical: "https://phyfix.com/cs-classes",
    ogTitle: "Online Computer Science & Coding Classes | PhyFix",
    ogDescription: "Expert 1-on-1 CS tutoring — IB CS, IGCSE CS, AP CS, Python, Data Science. Free demo class, zero commission.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-cyan-50 via-white to-sky-50 dark:from-cyan-950/30 dark:via-background dark:to-sky-950/20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4 text-cyan-700 dark:text-cyan-300">
              <Monitor className="w-3 h-3 mr-1" /> Computer Science & Coding
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Online <span className="text-cyan-600 dark:text-cyan-400">Computer Science Classes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Personalised 1-on-1 CS and coding tutoring for IB, IGCSE, AP, Python, Data Science, and technical interviews. Learn from industry-experienced engineers and certified teachers.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              ✓ Free Demo Class &nbsp;·&nbsp; ✓ Zero Commission &nbsp;·&nbsp; ✓ Project-Based Learning &nbsp;·&nbsp; ✓ All Levels Welcome
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full px-8 bg-cyan-600 hover:bg-cyan-700 text-white">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo Class
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                  <Users className="w-4 h-4" /> Browse CS Tutors
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">CS & Coding Topics We Cover</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From IB CS to Python to Data Science — full coverage for every CS programme and skill level.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full border-cyan-100 dark:border-cyan-900/40 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4" /> {t.board}
                  </h3>
                  <ul className="space-y-1.5">
                    {t.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
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
      <section className="py-16 bg-cyan-50/50 dark:bg-cyan-950/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose PhyFix for CS & Coding?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Industry-experienced tutors, project-based learning, and real results for students and professionals.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300">
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
              { label: "Mathematics Classes", href: "/maths-classes" },
              { label: "Physics Classes", href: "/physics-classes" },
              { label: "Test Prep", href: "/test-prep" },
              { label: "All Subjects", href: "/subjects" },
            ].map(link => (
              <Link key={link.href} href={link.href}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors px-3 py-1 text-sm">
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
            <p className="text-muted-foreground">Everything you need to know about CS classes at PhyFix.</p>
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
      <section className="py-16 bg-cyan-700 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Start Coding Today — Free Demo Class</h2>
            <p className="text-white/80 mb-8 text-lg">Book a free 1-hour CS or Python session — no credit card, no commitment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo on WhatsApp
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-cyan-700">
                  Browse CS Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
