import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, MessageCircle, Calendar, GraduationCap, ArrowRight, 
  Monitor, Users, Clock, Shield, Star, Zap, CheckCircle2 
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";
import { useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20session";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Browse & Choose Your Tutor",
    description: "Visit our tutors page and browse through verified tutor profiles. Filter by subject (Physics, Math, Chemistry, Biology), board (IB, IGCSE, AP, A-Level, CBSE), and budget. Or simply WhatsApp us and we'll recommend the best tutor for you.",
    details: [
      "View tutor qualifications, experience & ratings",
      "Filter by subject, board, and price range",
      "Read tutor bios and teaching approach",
      "Get direct contact details (WhatsApp & email)",
    ],
  },
  {
    number: 2,
    icon: Calendar,
    title: "Book a Free Demo Session",
    description: "Contact your chosen tutor directly via WhatsApp or email. Book a free demo session to evaluate their teaching style and ensure compatibility. Discuss your goals, learning needs, and agree on schedule and pricing.",
    details: [
      "Free demo session - no payment required",
      "Talk directly to the tutor on WhatsApp",
      "Discuss your curriculum and exam goals",
      "Agree on session schedule and fees",
    ],
  },
  {
    number: 3,
    icon: GraduationCap,
    title: "Start Learning & Ace Your Exams",
    description: "Pay your tutor directly with zero commission. Join personalized 1-on-1 sessions via Google Meet or Zoom. Get board-specific preparation, past paper practice, and focused guidance to boost your grades.",
    details: [
      "Pay tutor directly - zero commission",
      "1-on-1 sessions via Google Meet / Zoom",
      "Board-specific exam preparation",
      "Flexible scheduling - learn at your pace",
    ],
  },
];

const sessionFeatures = [
  { icon: Monitor, title: "Google Meet / Zoom", desc: "Live 1-on-1 video sessions with screen sharing and digital whiteboard" },
  { icon: Users, title: "Personalized Attention", desc: "One tutor, one student. 100% focus on your learning needs" },
  { icon: Clock, title: "Flexible Scheduling", desc: "Book sessions at your convenience. No rigid time slots" },
  { icon: Shield, title: "Zero Commission", desc: "Every penny you pay goes directly to your tutor" },
  { icon: Star, title: "Verified Tutors", desc: "All tutors are admin-verified for qualifications and experience" },
  { icon: Zap, title: "All Major Boards", desc: "IB, IGCSE, A-Level, AP, CBSE, ICSE, Edexcel, GCSE, MYP, SAT" },
];

const boardsSupported = [
  { name: "IB", url: "https://www.ibo.org", desc: "International Baccalaureate" },
  { name: "IGCSE", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/", desc: "Cambridge IGCSE" },
  { name: "A-Level", url: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-levels/", desc: "Cambridge A-Level" },
  { name: "AP", url: "https://apstudents.collegeboard.org", desc: "Advanced Placement" },
  { name: "CBSE", url: "https://www.cbse.gov.in", desc: "Central Board of Secondary Education" },
  { name: "ICSE", url: "https://www.cisce.org", desc: "Indian Certificate of Secondary Education" },
  { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses.html", desc: "Pearson Edexcel" },
  { name: "GCSE", url: "https://www.aqa.org.uk/subjects", desc: "General Certificate of Secondary Education" },
  { name: "MYP", url: "https://www.ibo.org/programmes/middle-years-programme/", desc: "IB Middle Years Programme" },
  { name: "SAT", url: "https://satsuite.collegeboard.org/sat", desc: "Scholastic Assessment Test" },
];

const faqs = [
  { q: "How much does a session cost?", a: "Prices start from $10/hr (₹800/hr) for school students. Rates vary by tutor experience and subject level. Check our Pricing page for detailed tiers." },
  { q: "Is the demo session really free?", a: "Yes, absolutely free. We encourage every student to book a free demo before committing to paid sessions. This helps you evaluate the tutor's teaching style." },
  { q: "How do I pay the tutor?", a: "You pay the tutor directly via UPI, bank transfer, PayPal, or any method you and the tutor agree upon. PhyFix charges zero commission on any payment." },
  { q: "What boards and exams do you cover?", a: "We cover IB, IGCSE, A-Level, AP, CBSE, ICSE, Edexcel, GCSE, MYP, SAT, JEE, NEET, and more. Our tutors specialize in international and Indian curricula." },
  { q: "Can I change my tutor?", a: "Yes. If you're not satisfied after the demo, you can choose a different tutor. We have multiple tutors for every subject and board." },
  { q: "What subjects are available?", a: "We offer tutoring in Physics, Mathematics, Chemistry, and Biology across all boards and levels." },
];

export default function HowItWorks() {
  useEffect(() => {
    document.title = "How It Works - PhyFix | Book Free Demo | Zero Commission Tutoring";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary/5 py-16 md:py-20">
        <div className="container px-4 mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-4">Simple 3-Step Process</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display" data-testid="heading-how-it-works">
            How PhyFix <span className="text-primary">Works</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Browse Tutors → Book Free Demo → Start Learning
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Get personalized 1-on-1 tutoring in Math, Physics, Chemistry & Biology. Zero commission. Pay your tutor directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2" data-testid="button-whatsapp-how-hero">
                <SiWhatsapp className="w-5 h-5" /> WhatsApp for Free Demo
              </Button>
            </a>
            <Link href="/teachers">
              <Button size="lg" variant="outline" className="gap-2">
                Browse Tutors <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto max-w-5xl">
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">3 Easy Steps to Get Started</h2>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                data-testid={`section-step-${step.number}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-80 shrink-0">
                  <Card>
                    <CardContent className="pt-6 pb-5 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <p className="font-semibold text-lg">Step {step.number}</p>
                      <p className="text-sm text-muted-foreground">{step.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t">
          <h2 className="text-3xl font-bold text-center mb-2 font-display">About Our Tutoring Sessions</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Every session is designed for maximum learning with personalized attention.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessionFeatures.map((f) => (
              <Card key={f.title}>
                <CardContent className="pt-6 pb-5 px-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="py-16 border-t">
          <h2 className="text-3xl font-bold text-center mb-2 font-display">Boards & Exams We Cover</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Our tutors specialize in all major international and Indian examination boards.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {boardsSupported.map((board) => (
              <a
                key={board.name}
                href={board.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid={`link-board-${board.name.toLowerCase()}`}
              >
                <Card className="hover-elevate">
                  <CardContent className="py-5 px-4 text-center">
                    <p className="font-bold text-lg text-primary">{board.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{board.desc}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="py-16 border-t">
          <h2 className="text-3xl font-bold text-center mb-10 font-display">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b pb-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 border-t">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 font-display">Ready to Start Learning?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us on WhatsApp for a free demo session. No registration required. No payment until you're satisfied.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2" data-testid="button-whatsapp-how-cta">
                  <SiWhatsapp className="w-5 h-5" /> WhatsApp for Free Demo
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-browse-how-cta">
                  Browse Tutors <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Email: ashishpachar27@gmail.com | WhatsApp: +91 8684901516
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
