import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { Card } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Globe, Heart, Lightbulb, Users, Youtube, Award, Target } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const milestones = [
  { year: "2009", label: "Started Teaching", desc: "Began teaching Physics and Mathematics to local students." },
  { year: "2015", label: "Online Expansion", desc: "Moved to online tutoring to reach students globally." },
  { year: "2019", label: "International Students", desc: "Started tutoring IB, IGCSE, and A-Level students from the UK, UAE, and Singapore." },
  { year: "2024", label: "PhyFix Platform", desc: "Launched PhyFix — a zero-commission tutoring marketplace." },
  { year: "2025", label: "Growing Community", desc: "Expanded to 6 subjects with verified tutors and students from 6+ countries." },
];

const values = [
  { icon: Lightbulb, color: "bg-amber-500/10 text-amber-600", title: "Conceptual Understanding", desc: "We prioritize deep conceptual clarity over rote memorization. Students who understand the 'why' perform better in every exam." },
  { icon: Heart, color: "bg-red-500/10 text-red-600", title: "Personalized Teaching", desc: "Every student learns differently. Sessions are tailored to each learner's pace, strengths, and areas for improvement." },
  { icon: Globe, color: "bg-blue-500/10 text-blue-600", title: "Global Reach", desc: "Students from UK, UAE, Canada, USA, Singapore, and India study with our tutors — online, from anywhere." },
  { icon: Award, color: "bg-purple-500/10 text-purple-600", title: "Verified Expertise", desc: "All tutors hold verified TeacherOn profiles with 15+ years of experience across international curricula." },
  { icon: Target, color: "bg-green-500/10 text-green-600", title: "Exam-Focused Results", desc: "Structured sessions target exam boards directly — IB, IGCSE, AP, A-Level, CBSE — with proven grade improvements." },
  { icon: Users, color: "bg-cyan-500/10 text-cyan-600", title: "Zero Commission Model", desc: "Students pay teachers directly. No platform fees, no commission — keeping tutoring affordable and transparent." },
];

const boards = ["IB", "IGCSE", "A-Level", "AP", "CBSE", "ICSE", "Edexcel", "GCSE", "MYP", "SAT"];

export default function About() {
  useSeo({
    title: "About PhyFix | Ashish Pachar | Expert Physics & Maths Tutor",
    description: "Meet Ashish Pachar, founder of PhyFix. M.Sc Physics, GATE Qualified, 15+ years teaching IB, IGCSE, A-Level, AP and CBSE students worldwide.",
    keywords: "Ashish Pachar, PhyFix founder, expert physics tutor, online maths tutor, IB physics teacher",
    ogTitle: "About PhyFix & Founder Ashish Pachar | Expert Tutor",
    canonical: "https://phyfix.com/about",
  });
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container px-4 mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">
              About <span className="text-primary">PhyFix</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              PhyFix is a personalized 1-on-1 online tutoring platform founded by Ashish Pachar — a Physics and Mathematics educator with over 15 years of teaching experience.
            </p>
            <p className="text-lg text-foreground/80 font-semibold italic">
              "PhyFix — Precision Learning for Science and Mathematics"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&q=80"
                  alt="Ashish Pachar - Founder of PhyFix, Physics and Mathematics Tutor"
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">Ashish Pachar</h2>
                <p className="text-primary font-semibold text-lg">Founder & Lead Tutor — PhyFix</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of hands-on teaching experience, Ashish Pachar has helped hundreds of students across the globe master Physics and Mathematics — from school level all the way to university entrance exams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His teaching philosophy centers on <strong>conceptual understanding</strong> and <strong>problem-solving skills</strong> — not just exam tricks. Students who study with Ashish don't just pass exams; they genuinely understand the subject.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He has worked with students preparing for <strong>IB, IGCSE, A-Level, AP, CBSE, JEE, and NEET</strong> — across the UK, UAE, Canada, Singapore, India, and the USA.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.youtube.com/@phyfix" target="_blank" rel="noopener noreferrer" data-testid="link-about-youtube">
                  <Button variant="outline" className="gap-2 text-red-600 border-red-300 hover:bg-red-50 dark:hover:bg-red-950/30">
                    <SiYoutube className="w-4 h-4" /> YouTube
                  </Button>
                </a>
                <a href="https://www.instagram.com/phyfix1/" target="_blank" rel="noopener noreferrer" data-testid="link-about-instagram">
                  <Button variant="outline" className="gap-2 text-pink-600 border-pink-300 hover:bg-pink-50 dark:hover:bg-pink-950/30">
                    <SiInstagram className="w-4 h-4" /> Instagram
                  </Button>
                </a>
                <a href="https://x.com/Phyfix11" target="_blank" rel="noopener noreferrer" data-testid="link-about-x">
                  <Button variant="outline" className="gap-2">
                    <SiX className="w-4 h-4" /> @Phyfix11
                  </Button>
                </a>
                <a
                  href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-about-whatsapp"
                >
                  <Button className="gap-2 bg-green-500 hover:bg-green-600 text-white">
                    <SiWhatsapp className="w-4 h-4" /> Book a Demo
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              To make <strong>world-class, personalized tutoring accessible</strong> to every student — regardless of geography — with a transparent, zero-commission model where students pay teachers directly.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 text-left">
              <p className="text-lg italic text-foreground/80 mb-3">
                "Come as you are. Become who you want to be."
              </p>
              <cite className="text-sm text-muted-foreground font-medium">— Ashish Pachar, Founder of PhyFix</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide how we teach and how we built PhyFix.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="p-6 h-full hover-elevate transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Journey</h2>
            <p className="text-muted-foreground">From a local classroom to a global tutoring platform.</p>
          </motion.div>
          <div className="relative space-y-8">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 relative"
                data-testid={`milestone-${m.year}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0 z-10 shadow-md">
                  {m.year.slice(2)}
                </div>
                <div className="pt-2 pb-4">
                  <p className="text-xs text-muted-foreground font-medium mb-1">{m.year}</p>
                  <h3 className="font-bold text-foreground mb-1">{m.label}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Boards We Cover */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold font-display mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Curricula We Cover
            </h2>
            <p className="text-muted-foreground mb-8">We are specialists in all major international exam boards.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {boards.map((b) => (
                <span
                  key={b}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm"
                  data-testid={`badge-board-${b.toLowerCase()}`}
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container px-4 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to Experience the PhyFix Difference?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Start with a free demo session — no commitment, no payment required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-about-cta-whatsapp"
              >
                <Button size="lg" className="gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-8 h-14 text-lg">
                  <SiWhatsapp className="w-5 h-5" />
                  Book Free Demo
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg gap-2">
                  Browse Tutors
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
