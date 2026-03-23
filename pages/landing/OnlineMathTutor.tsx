import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Calculator, ArrowRight, MessageCircle, Globe, Users, Star } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";

const audiences = [
  { emoji: "🎓", title: "IB Students", desc: "AA and AI at SL and HL. From Year 11 through Diploma exam prep." },
  { emoji: "📚", title: "IGCSE Students", desc: "Cambridge 0580 Core and Extended. Years 9–11." },
  { emoji: "🏆", title: "A-Level Students", desc: "Cambridge, AQA, OCR, Edexcel. AS and A2 Mathematics." },
  { emoji: "⭐", title: "AP Students", desc: "AP Calculus AB/BC, AP Statistics. College Board curriculum." },
  { emoji: "🇮🇳", title: "CBSE / ICSE", desc: "Class 9–12 Mathematics. JEE foundation and board exams." },
  { emoji: "📊", title: "SAT / ACT", desc: "Math sections of SAT and ACT. Score improvement coaching." },
];

const benefits = [
  "Tutors qualified in Masters and PhD level Mathematics",
  "All curricula: IB, IGCSE, A-Level, AP, CBSE, ICSE, SAT",
  "Adaptive sessions — we meet you where you are",
  "Interactive digital whiteboard — see working in real time",
  "Session recordings available for review anytime",
  "Structured homework and progress testing between sessions",
  "Zero commission — you pay your tutor directly",
  "Free first demo session — no risk",
];

const faqs = [
  { q: "Do you offer online Math tutoring for all grades?", a: "Yes. We work with students from Grade 8 through university level. Whether your child needs help with IGCSE, a student needs IB Maths AA HL coaching, or you are preparing for AP Calculus — we have tutors who specialise in exactly that level." },
  { q: "Are your sessions live or recorded?", a: "All our sessions are live 1-on-1 with your tutor via Zoom or Google Meet. Sessions are also recorded so you can revisit the explanation whenever you need to." },
  { q: "What if my child's Math level is very weak?", a: "That is exactly who we are designed to help. Our tutors are skilled at identifying foundational gaps — often problems in Grade 10 are rooted in unaddressed gaps from Grade 7 or 8. We go back as far as needed and rebuild from there." },
  { q: "How much do sessions cost?", a: "Our tutors charge between $10 and $25 per hour depending on the level and subject. You book and pay the tutor directly — we take zero commission. Book a free demo to discuss your specific requirements." },
];

export default function OnlineMathTutor() {
  useSeo({
    title: "Online Math Tutor | IB, IGCSE, A-Level, CBSE Expert | PhyFix",
    description: "Expert online Math tutoring for IB, IGCSE, A-Level, AP, CBSE, and SAT students. Personalised 1-on-1 sessions with qualified tutors. Book a free demo with PhyFix.",
    keywords: "online math tutor, online mathematics tutor, IB math tutor, IGCSE math tutor, A-level math tutor, CBSE math tutor",
    canonical: "https://phyfix.com/online-math-tutor",
    ogTitle: "Online Math Tutor | All Curricula | PhyFix",
    ogDescription: "Expert online Mathematics tutoring for IB, IGCSE, A-Level, AP, and CBSE students. Free first demo session.",
  });

  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50/60 via-background to-background dark:from-amber-950/20">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="flex-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Online Math Tutoring</span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">
                Expert <span className="text-primary">Online Math Tutor</span> — All Boards
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Personalised 1-on-1 online Mathematics tutoring for IB, IGCSE, A-Level, AP, CBSE, ICSE, and SAT students worldwide. Our expert tutors bring concepts to life and make Mathematics achievable.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["IB / IGCSE / A-Level", "AP / CBSE / SAT", "All Grade Levels", "Free Demo"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20Math%20tutoring%20demo" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 gap-2 w-full sm:w-auto" data-testid="button-online-math-wa">
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
              <div className="w-64 h-64 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center text-9xl shadow-xl">🧮</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Teach */}
      <section className="py-16 bg-muted/20">
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 className="font-display font-bold text-3xl text-center mb-3">Who We Teach</h2>
          <p className="text-center text-muted-foreground mb-10">We specialise in international curricula across the world.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <Card key={a.title} className="p-5 hover-elevate transition-all">
                <div className="text-3xl mb-3">{a.emoji}</div>
                <h3 className="font-semibold mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 className="font-display font-bold text-3xl text-center mb-10">Why Choose PhyFix for Online Math Tutoring?</h2>
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

      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-amber-50/30 dark:to-amber-950/10">
        <div className="container px-4 mx-auto max-w-2xl text-center">
          <h2 className="font-display font-bold text-3xl mb-4">Start Your Free Online Math Session</h2>
          <p className="text-muted-foreground mb-8">45 minutes, completely free. Meet your tutor, discuss your curriculum and goals, and see the PhyFix approach for yourself.</p>
          <a href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20online%20Math%20tutoring%20demo" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-10 text-base">Book My Free Math Demo</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
