import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Users, Clock, MessageCircle, Shield, Zap, Award, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20PhyFix%20tutoring%20pricing";

const pricingTiers = [
  {
    name: "School Students",
    price: "$10",
    inr: "₹800",
    unit: "/hr",
    description: "Grade 10 and below students who are not preparing for advanced courses. For example, Grades 10, 9, 8, 7, etc.",
    features: [
      "Personalized 1-on-1 sessions",
      "Direct WhatsApp contact with tutor",
      "Free demo session",
      "Flexible scheduling",
      "Math, Physics, Chemistry, Biology",
    ],
    highlight: false,
  },
  {
    name: "College Aspirant",
    price: "$15",
    inr: "₹1,000",
    unit: "/hr",
    description: "Grade 11 and Grade 12 students or those preparing for board exams and college admission tests. For example, IB, IGCSE, AP, A-Level, CBSE.",
    features: [
      "All School Student features",
      "Board-specific exam preparation",
      "Past paper practice & analysis",
      "Study materials included",
      "IB, IGCSE, AP, A-Level, CBSE support",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "College Student",
    price: "$20",
    inr: "₹1,500",
    unit: "/hr",
    description: "Already studying in a college or university. For example, undergraduate students doing B.Sc, B.Tech, or equivalent programs.",
    features: [
      "All College Aspirant features",
      "University-level curriculum support",
      "Advanced problem solving",
      "Project & assignment guidance",
      "Exam-focused preparation",
    ],
    highlight: false,
  },
  {
    name: "Beyond College",
    price: "$25",
    inr: "₹2,000",
    unit: "/hr",
    description: "Students doing advanced courses after finishing college. For example, M.Sc, M.Tech, competitive exam prep (JEE, NEET).",
    features: [
      "All College Student features",
      "Expert-level tutors (PhD/IIT qualified)",
      "Competition prep (JEE, NEET, SAT)",
      "Research & thesis guidance",
      "Priority scheduling",
    ],
    highlight: false,
  },
];

const competitors = [
  { name: "Wyzant", range: "$50 - $80", avgForBar: 65, hue: 0 },
  { name: "Varsity Tutors", range: "$40 - $80", avgForBar: 60, hue: 25 },
  { name: "Tutor.com", range: "$35 - $65", avgForBar: 50, hue: 45 },
  { name: "Chegg Tutors", range: "$30 - $65", avgForBar: 48, hue: 35 },
  { name: "MEB", range: "$15 - $35", avgForBar: 25, hue: 210 },
  { name: "PhyFix", range: "$10 - $25", avgForBar: 17, hue: 142, isUs: true },
];

const comparisonFeatures = [
  { feature: "Zero Commission", phyfix: true, wyzant: false, varsity: false, chegg: false },
  { feature: "Direct Tutor Contact (WhatsApp)", phyfix: true, wyzant: false, varsity: false, chegg: false },
  { feature: "Free Demo Session", phyfix: true, wyzant: false, varsity: true, chegg: false },
  { feature: "Pay Tutor Directly", phyfix: true, wyzant: false, varsity: false, chegg: false },
  { feature: "No Platform Fees", phyfix: true, wyzant: false, varsity: false, chegg: false },
  { feature: "International Board Support (IB, IGCSE, AP)", phyfix: true, wyzant: true, varsity: true, chegg: false },
  { feature: "100% Human Tutoring", phyfix: true, wyzant: true, varsity: true, chegg: false },
  { feature: "Personalized 1-on-1 Sessions", phyfix: true, wyzant: true, varsity: true, chegg: true },
];

const advantages = [
  { icon: Shield, title: "Zero Commission", desc: "Unlike other platforms that take 20-40% commission, PhyFix charges zero commission. Every rupee you pay goes directly to your tutor." },
  { icon: MessageCircle, title: "Direct WhatsApp Contact", desc: "Get your tutor's WhatsApp number directly. No messaging through platforms, no delays. Talk to your tutor anytime." },
  { icon: Clock, title: "Free Demo Session", desc: "Try before you pay. Book a free demo session with any tutor to ensure they're the right fit before committing." },
  { icon: Users, title: "Pay Tutor Directly", desc: "No middleman. No hidden charges. Negotiate rates directly with your tutor and pay them without any platform interference." },
  { icon: Award, title: "Verified Tutors", desc: "Every tutor on PhyFix is verified by our admin team. We check qualifications, experience, and teaching ability." },
  { icon: Zap, title: "All Major Boards", desc: "IB, IGCSE, A-Level, AP, CBSE, ICSE, Edexcel, GCSE, MYP, SAT - we cover all international and Indian examination boards." },
];

function AnimatedBar({ width, delay, hue, isUs }: { width: number; delay: number; hue: number; isUs?: boolean }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => { observer.unobserve(el); observer.disconnect(); };
  }, []);

  return (
    <div ref={ref} className="relative h-10 bg-muted rounded-md">
      <div
        className={`h-full rounded-md transition-all duration-1000 ease-out ${isUs ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}
        style={{
          width: animated ? `${width}%` : "0%",
          transitionDelay: `${delay}ms`,
          backgroundColor: `hsl(${hue}, 65%, 50%)`,
        }}
      />
    </div>
  );
}

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing - PhyFix | Affordable Tutoring Starting $10/hr | Zero Commission";
  }, []);

  const maxPrice = Math.max(...competitors.map(c => c.avgForBar));

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary/5 py-16 md:py-20">
        <div className="container px-4 mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-4" data-testid="badge-pricing">Transparent Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display" data-testid="heading-pricing">
            Affordable Tutoring, <span className="text-primary">Zero Commission</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Pay your tutor directly. No middleman, no hidden fees. The most affordable 1-on-1 tutoring for Math, Physics, Chemistry & Biology across IB, IGCSE, AP, A-Level, CBSE and more.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2" data-testid="button-whatsapp-pricing-hero">
              <SiWhatsapp className="w-5 h-5" />
              WhatsApp for Free Demo
            </Button>
          </a>
        </div>
      </div>

      <div className="container px-4 mx-auto max-w-6xl">
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-2 font-display">Tutoring Pricing Tiers</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Choose your tier based on your academic level. All prices are starting rates per hour.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative ${tier.highlight ? "border-primary shadow-lg shadow-primary/10" : ""}`}
                data-testid={`card-pricing-${tier.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="shadow-md">{tier.badge}</Badge>
                  </div>
                )}
                <CardContent className="pt-8 pb-6 px-5">
                  <h3 className="font-semibold text-lg mb-1">{tier.name}</h3>
                  <div className="mb-1">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">{tier.unit}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">Starts {tier.inr}/hr (INR)</p>
                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{tier.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full gap-2" variant={tier.highlight ? "default" : "outline"}>
                      <SiWhatsapp className="w-4 h-4" /> Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-6 text-center max-w-3xl mx-auto leading-relaxed">
            *All prices are in USD (United States Dollar). INR rates are approximate. These prices are indicative and applicable in 80% of cases. The fee is decided by the tutors themselves. We try to keep it as close as possible to the starting prices, but in some cases, it may vary based on tutor experience and subject complexity.
          </p>
        </div>

        <div className="py-16 border-t">
          <h2 className="text-3xl font-bold text-center mb-2 font-display">PhyFix vs Competitors</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            See how our rate ranges compare with other tutoring platforms worldwide.
          </p>

          <div className="max-w-3xl mx-auto space-y-5">
            {competitors.map((comp, i) => (
              <div key={comp.name} className="flex items-center gap-4" data-testid={`bar-competitor-${comp.name.toLowerCase().replace(/[.\s]/g, "-")}`}>
                <div className={`w-32 shrink-0 text-right text-sm font-medium ${comp.isUs ? "text-primary font-bold" : "text-muted-foreground"}`}>
                  {comp.name}
                </div>
                <div className="flex-1">
                  <AnimatedBar
                    width={(comp.avgForBar / maxPrice) * 100}
                    delay={i * 150}
                    hue={comp.hue}
                    isUs={comp.isUs}
                  />
                </div>
                <div className={`w-24 text-sm font-semibold ${comp.isUs ? "text-primary" : "text-muted-foreground"}`}>
                  {comp.range}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-6 text-center">
            *Approximate hourly rate ranges based on publicly available pricing data. Actual rates may vary.
          </p>
        </div>

        <div className="py-16 border-t">
          <h2 className="text-3xl font-bold text-center mb-2 font-display">Feature Comparison</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            See what makes PhyFix different from other tutoring platforms.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto" data-testid="table-feature-comparison">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-3 text-sm font-semibold">Feature</th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-primary">PhyFix</th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-muted-foreground">Wyzant</th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-muted-foreground">Varsity Tutors</th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-muted-foreground">Chegg</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b">
                    <td className="py-3.5 px-3 text-sm">{row.feature}</td>
                    <td className="py-3.5 px-3 text-center">
                      {row.phyfix ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      {row.wyzant ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      {row.varsity ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      {row.chegg ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="py-16 border-t">
          <h2 className="text-3xl font-bold text-center mb-2 font-display">Why Choose PhyFix?</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Here's what sets us apart from every other tutoring platform out there.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <Card key={adv.title}>
                <CardContent className="pt-6 pb-5 px-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <adv.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="py-16 border-t">
          <h2 className="text-3xl font-bold text-center mb-2 font-display">Sample Tutor Rates by Subject</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Approximate rates for popular subjects and boards. Actual rates depend on tutor experience.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto" data-testid="table-sample-rates">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 text-sm font-semibold">Subject</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold">Board / Level</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold">Rate (USD)</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold">Rate (INR)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground text-sm">
                <tr className="border-b"><td className="py-3.5 px-4">Physics</td><td className="py-3.5 px-4">IGCSE / GCSE</td><td className="py-3.5 px-4">$10 - $20/hr</td><td className="py-3.5 px-4">₹800 - ₹1,500/hr</td></tr>
                <tr className="border-b"><td className="py-3.5 px-4">Physics</td><td className="py-3.5 px-4">IB / A-Level / AP</td><td className="py-3.5 px-4">$15 - $30/hr</td><td className="py-3.5 px-4">₹1,000 - ₹2,500/hr</td></tr>
                <tr className="border-b"><td className="py-3.5 px-4">Mathematics</td><td className="py-3.5 px-4">IGCSE / GCSE / CBSE</td><td className="py-3.5 px-4">$10 - $20/hr</td><td className="py-3.5 px-4">₹800 - ₹1,500/hr</td></tr>
                <tr className="border-b"><td className="py-3.5 px-4">Mathematics</td><td className="py-3.5 px-4">IB / A-Level / AP</td><td className="py-3.5 px-4">$15 - $30/hr</td><td className="py-3.5 px-4">₹1,000 - ₹2,500/hr</td></tr>
                <tr className="border-b"><td className="py-3.5 px-4">Chemistry</td><td className="py-3.5 px-4">All Boards</td><td className="py-3.5 px-4">$10 - $25/hr</td><td className="py-3.5 px-4">₹800 - ₹2,000/hr</td></tr>
                <tr className="border-b"><td className="py-3.5 px-4">Biology</td><td className="py-3.5 px-4">All Boards</td><td className="py-3.5 px-4">$10 - $25/hr</td><td className="py-3.5 px-4">₹800 - ₹2,000/hr</td></tr>
                <tr className="border-b"><td className="py-3.5 px-4">JEE / NEET Prep</td><td className="py-3.5 px-4">Competition Level</td><td className="py-3.5 px-4">$20 - $35/hr</td><td className="py-3.5 px-4">₹1,500 - ₹3,000/hr</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            * Rates vary by tutor experience, qualifications, and demand. Visit individual tutor profiles for exact pricing.
          </p>
        </div>

        <div className="py-16 border-t">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 font-display">Getting Started is Fast & Easy</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto my-10">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">1</div>
                <h3 className="font-semibold mb-1">Browse Tutors</h3>
                <p className="text-sm text-muted-foreground">Find your perfect tutor on our platform or WhatsApp us</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">2</div>
                <h3 className="font-semibold mb-1">Book Free Demo</h3>
                <p className="text-sm text-muted-foreground">Try a free demo session to ensure the tutor is right for you</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">3</div>
                <h3 className="font-semibold mb-1">Start Learning</h3>
                <p className="text-sm text-muted-foreground">Pay your tutor directly & start personalized 1-on-1 sessions</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2" data-testid="button-whatsapp-pricing-cta">
                  <SiWhatsapp className="w-5 h-5" /> WhatsApp Us Now
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-browse-tutors-pricing-cta">
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
