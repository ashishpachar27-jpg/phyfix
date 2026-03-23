import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, CalendarCheck, MessageCircle, Clock, Star, Users } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WA = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class%20on%20PhyFix";

const steps = [
  { step: "1", title: "Message Us on WhatsApp", desc: "Click the button below to open WhatsApp. Tell us your subject, board, and grade level." },
  { step: "2", title: "We Match You with a Tutor", desc: "Within a few hours we connect you with the best-matched verified tutor for your needs." },
  { step: "3", title: "Attend Your Free Demo", desc: "Join a 1-hour live Zoom session — no credit card, no commitment, completely free." },
  { step: "4", title: "Continue if You Love It", desc: "Happy with the demo? Book regular sessions and pay your tutor directly at their rate." },
];

const included = [
  "1-hour live Zoom session (camera enabled)",
  "Diagnostic assessment of your current level",
  "Personalised study plan discussion",
  "Topic walkthrough on your choice",
  "Notes & recording shared after session",
  "Zero cost — completely free, no hidden fees",
];

const subjects = [
  "Physics (IB, IGCSE, A-Level, AP, CBSE, JEE, NEET)",
  "Mathematics (IB, IGCSE, A-Level, AP Calculus, CBSE, SAT)",
  "Chemistry (IGCSE, IB, A-Level, NEET, JEE)",
  "Biology (IGCSE, IB, A-Level, NEET)",
  "English (IGCSE, IB, A-Level)",
  "Computer Science (IGCSE, IB, AP)",
];

export default function FreeDemo() {
  useSeo({
    title: "Book a Free Demo Class | Online Tutoring | PhyFix",
    description: "Book a completely free 1-hour demo class with a verified PhyFix tutor. No credit card, no commitment. Physics, Maths, Chemistry, Biology — all boards.",
    keywords: "free demo class, free physics class, free maths class, free online tutoring, book demo tutor, free trial class, PhyFix demo, free tutoring session",
    canonical: "https://phyfix.com/free-demo",
    ogTitle: "Book Your Free Demo Class | PhyFix",
    ogDescription: "Try a free 1-hour live tutoring session — Physics, Maths, Chemistry, Biology. No commitment. All boards covered.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/30 dark:via-background dark:to-emerald-950/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4 text-green-700 dark:text-green-300">
              <Star className="w-3 h-3 mr-1 fill-current" /> 100% Free — No Commitment
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Book Your <span className="text-primary">Free Demo Class</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Try a live 1-on-1 tutoring session absolutely free. Physics, Maths, Chemistry, Biology — any board, any level.
            </p>
            <p className="text-base text-muted-foreground mb-8">No credit card. No commitment. Just great teaching.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 rounded-full px-10 text-base bg-green-500 hover:bg-green-600 text-white shadow-lg">
                <SiWhatsapp className="w-5 h-5" /> Book Free Demo on WhatsApp
              </Button>
            </a>
            <p className="text-xs text-muted-foreground mt-3">Opens WhatsApp · Reply within a few hours</p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What's Included in the Free Demo?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Your free session is a full, real tutoring experience — not a sales call.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {included.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 p-4 rounded-lg border bg-green-50/50 dark:bg-green-950/10 border-green-100 dark:border-green-900/30">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Subjects Available for Demo</h2>
            <p className="text-muted-foreground">Free demo available for all subjects and all boards.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {subjects.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 p-3 rounded-md border bg-background">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From first message to first class in under 24 hours.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="p-5 text-center h-full hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-3">
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <CalendarCheck className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Claim Your Free Demo Class Now</h2>
            <p className="text-white/80 mb-8 text-lg">Spots are limited — book yours today and see the PhyFix difference.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full px-8">
                  <SiWhatsapp className="w-5 h-5" /> Book on WhatsApp
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-primary">
                  <Users className="w-4 h-4 mr-2" /> Browse Tutors First
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
