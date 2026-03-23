import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { useTeachers } from "@/hooks/use-teachers";
import { TeacherCard } from "@/components/TeacherCard";
import { ArrowRight, CheckCircle2, Mail, ExternalLink, GraduationCap, ChevronDown, TrendingDown, Atom, Calculator, FlaskConical, Dna, BookOpen, Monitor, Star, Youtube, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { boards } from "@/data/boards";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { BoardLogo, BoardLogoLarge } from "@/components/BoardLogo";

const subjects = [
  { name: "Physics", icon: Atom, color: "bg-blue-500/10 text-blue-600", desc: "Mechanics, Waves, Electricity, Fields, Quantum & Modern Physics", href: "/physics-classes" },
  { name: "Mathematics", icon: Calculator, color: "bg-purple-500/10 text-purple-600", desc: "Algebra, Calculus, Statistics, Trigonometry, Linear Algebra", href: "/maths-classes" },
  { name: "Chemistry", icon: FlaskConical, color: "bg-green-500/10 text-green-600", desc: "Organic, Inorganic & Physical Chemistry, Stoichiometry, NEET", href: "/chemistry-classes" },
  { name: "Biology", icon: Dna, color: "bg-orange-500/10 text-orange-600", desc: "Cell Biology, Genetics, Ecology, Human Physiology, NEET", href: "/biology-classes" },
  { name: "English & ESL", icon: BookOpen, color: "bg-pink-500/10 text-pink-600", desc: "IELTS, TOEFL, IB English, A-Level English, Academic Writing", href: "/english-classes" },
  { name: "Computer Science", icon: Monitor, color: "bg-cyan-500/10 text-cyan-600", desc: "IB CS, IGCSE CS, AP CS, Python, Data Science & Algorithms", href: "/cs-classes" },
];

const testimonials = [
  {
    name: "Priya S.",
    country: "🇸🇬 Singapore",
    board: "IB HL Physics",
    text: "My IB Physics grade jumped from a 4 to a 7 after just two months of sessions. The conceptual explanations are incredibly clear and the problem-solving strategies really work.",
    stars: 5,
  },
  {
    name: "James T.",
    country: "🇬🇧 United Kingdom",
    board: "A-Level Mathematics",
    text: "I was really struggling with A-Level calculus but the tutoring sessions made everything click. Passed my exams with an A grade. Highly recommend!",
    stars: 5,
  },
  {
    name: "Aisha K.",
    country: "🇦🇪 UAE",
    board: "IGCSE Chemistry",
    text: "The free demo was what convinced me — the teaching approach is patient, thorough, and very exam-focused. Got an A* in IGCSE Chemistry!",
    stars: 5,
  },
  {
    name: "Rayan M.",
    country: "🇨🇦 Canada",
    board: "AP Physics",
    text: "Scored 5 on my AP Physics exam. The sessions were always well-structured and my questions were answered in detail. Great platform with no hidden fees.",
    stars: 5,
  },
  {
    name: "Divya R.",
    country: "🇮🇳 India",
    board: "CBSE Grade 12 Physics & Math",
    text: "The personalized 1-on-1 attention is something you just can't get in a classroom. My board exam scores improved significantly. Thank you PhyFix!",
    stars: 5,
  },
  {
    name: "Lucas F.",
    country: "🇺🇸 USA",
    board: "SAT Math",
    text: "Went from a 650 to a 780 on the SAT Math section after focused preparation sessions. The problem-solving techniques taught here are excellent.",
    stars: 5,
  },
];

const pricingComparison = [
  { name: "Wyzant", range: "$50 - $80", avgForBar: 65, hue: 0 },
  { name: "Varsity Tutors", range: "$40 - $80", avgForBar: 60, hue: 25 },
  { name: "Tutor.com", range: "$35 - $65", avgForBar: 50, hue: 45 },
  { name: "Chegg Tutors", range: "$30 - $65", avgForBar: 48, hue: 35 },
  { name: "MEB", range: "$15 - $35", avgForBar: 25, hue: 210 },
  { name: "PhyFix", range: "$10 - $25", avgForBar: 17, hue: 142, isUs: true },
];
const maxBarPrice = Math.max(...pricingComparison.map(c => c.avgForBar));

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
    <div ref={ref} className="relative h-9 bg-muted rounded-md">
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

export default function Home() {
  useSeo({
    title: "PhyFix | Expert Online Physics & Maths Tutoring | IB, IGCSE, AP, CBSE",
    description: "PhyFix connects students worldwide with verified expert tutors for Physics, Maths, Chemistry & Biology. IB, IGCSE, A-Level, AP, CBSE. Free demo class, zero commission.",
    keywords: "online physics tutor, online maths tutor, IB tutor, IGCSE tutor, AP tutor, CBSE tutor, 1-on-1 tutoring, PhyFix",
    ogTitle: "PhyFix — Expert 1-on-1 Physics & Maths Tutoring Online",
    canonical: "https://phyfix.com/",
  });
  const { data: teachers, isLoading } = useTeachers();
  const [showMoreBoards, setShowMoreBoards] = useState(false);

  // Filter for top rated or active teachers
  const featuredTeachers = teachers?.filter(t => t.isActive).slice(0, 3) || [];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-24 pb-32">
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        
        <div className="container relative z-10 px-4 mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-2 text-foreground leading-[1.1]">
              Personalized 1-on-1 Tutoring for
            </h1>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-8 text-primary leading-[1.1]">
              IB, IGCSE & More
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto font-medium">
              Math • Physics • Chemistry • Biology
            </p>
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto font-semibold tracking-wide">
              Zero Commission • Pay Teachers Directly • Get Direct Contact
            </p>
            
            {/* Clear Value Proposition */}
            <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8 rounded-3xl border border-primary/20 shadow-xl max-w-3xl mx-auto mb-12">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold text-xl">1</div>
                  <p className="font-bold text-foreground">Book a Free Demo</p>
                  <p className="text-sm text-muted-foreground">Try before you decide</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                  <p className="font-bold text-foreground">Get Direct Contact</p>
                  <p className="text-sm text-muted-foreground">Connect with tutors directly</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-600 font-bold text-xl">3</div>
                  <p className="font-bold text-foreground">Pay Teachers Directly</p>
                  <p className="text-sm text-muted-foreground">No middleman, no commission</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/teachers">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                  Find a Tutor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/become-tutor">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50">
                  Become a Tutor
                </Button>
              </Link>
            </div>
            
            <p className="mt-6 text-lg font-semibold text-primary">
              Book a Demo - What Are You Waiting For?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              15+ Years of Excellence • Verified TeacherOn Profiles
            </p>
            
            {/* Contact Details */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20demo%20class"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-green-600 transition-colors"
                data-testid="link-contact-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5 text-green-500" />
                <span className="font-medium">+91 8684901516</span>
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <a 
                href="mailto:ashishpachar27@gmail.com"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                data-testid="link-contact-email"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-medium">ashishpachar27@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 md:py-20 bg-muted/30" data-testid="section-subjects">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Subjects We <span className="text-primary">Cover</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Expert 1-on-1 tutoring across all core STEM and academic subjects for students worldwide.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {subjects.map((subject, i) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href={subject.href}>
                  <Card className="p-5 md:p-6 hover-elevate transition-all duration-300 cursor-pointer h-full group" data-testid={`card-subject-${subject.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className={`w-12 h-12 rounded-xl ${subject.color} flex items-center justify-center mb-4`}>
                      <subject.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{subject.desc}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/subjects">
              <Button variant="outline" className="gap-2" data-testid="button-all-subjects">
                View All 20+ Subjects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/teachers">
              <Button className="gap-2" data-testid="button-find-tutor-subjects">
                Find a Tutor Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-16 md:py-20 bg-background" data-testid="section-pricing-comparison">
        <div className="container px-4 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingDown className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold font-display" data-testid="heading-pricing-comparison">
                How We Compare on <span className="text-primary">Pricing</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              See how our average hourly rates compare with other tutoring platforms. PhyFix keeps it simple and affordable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card className="p-6 md:p-8">
              <div className="space-y-5">
                {pricingComparison.map((comp, i) => (
                  <div key={comp.name} className="flex items-center gap-3 md:gap-4" data-testid={`bar-home-${comp.name.toLowerCase().replace(/[.\s]/g, "-")}`}>
                    <div className={`w-28 md:w-36 shrink-0 text-right text-sm font-medium ${comp.isUs ? "text-primary font-bold" : "text-muted-foreground"}`}>
                      {comp.name}
                    </div>
                    <div className="flex-1 min-w-0">
                      <AnimatedBar
                        width={(comp.avgForBar / maxBarPrice) * 100}
                        delay={i * 150}
                        hue={comp.hue}
                        isUs={comp.isUs}
                      />
                    </div>
                    <div className={`w-24 md:w-28 shrink-0 text-sm font-semibold ${comp.isUs ? "text-primary" : "text-muted-foreground"}`}>
                      {comp.range}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-6 text-center">
                *Approximate hourly rate ranges based on publicly available pricing data. Actual rates may vary.
              </p>
            </Card>
          </motion.div>

          <div className="text-center mt-8">
            <Link href="/pricing">
              <Button variant="outline" className="gap-2" data-testid="link-view-full-pricing">
                View Full Pricing Details
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Official Boards Section - Floating Logos */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-display">Official Exam Boards</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We support all major international curricula. Click any board to visit their official website.
            </p>
          </motion.div>

          {/* Floating Board Logos - Marquee Animation */}
          <div className="relative mb-16">
            <div className="flex gap-6 animate-marquee">
              {[...boards, ...boards].map((board, index) => (
                <a
                  key={`${board.id}-${index}`}
                  href={board.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                  data-testid={`link-board-logo-${board.id}`}
                >
                  <Card className="px-8 py-6 hover-elevate transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
                    <div className="flex flex-col items-center gap-3">
                      <BoardLogoLarge board={board} />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                        {board.fullName.length > 20 ? board.fullName.substring(0, 20) + '...' : board.fullName}
                      </span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Board Cards Grid with Subject Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Subject-Wise Official Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(showMoreBoards ? boards : boards.slice(0, 6)).map((board) => (
                <Card key={board.id} className="p-6 hover-elevate transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <BoardLogo board={board} size="sm" />
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground">{board.fullName}</h4>
                      <a 
                        href={board.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                        data-testid={`link-board-official-${board.id}`}
                      >
                        Visit Official Site <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {board.subjects.map((subject) => (
                      <a
                        key={subject.name}
                        href={subject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-sm rounded-full flex items-center gap-1 transition-colors"
                        data-testid={`link-subject-${board.id}-${subject.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {subject.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Show More/Less Button */}
            {boards.length > 6 && (
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  onClick={() => setShowMoreBoards(!showMoreBoards)}
                  className="gap-2"
                  data-testid="button-toggle-more-boards"
                >
                  {showMoreBoards ? 'Show Less Boards' : `View ${boards.length - 6} More Boards`}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMoreBoards ? 'rotate-180' : ''}`} />
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* All Tutors Section - Scrollable */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Meet Our Expert Tutors</h2>
              <p className="text-muted-foreground">Scroll down to explore all verified educators ready to help you succeed.</p>
            </div>
            <Link href="/teachers">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-96 bg-muted animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers?.filter(t => t.isActive).map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TeacherCard teacher={teacher} />
                </motion.div>
              ))}
              {(!teachers || teachers.filter(t => t.isActive).length === 0) && (
                <div className="col-span-3 text-center py-12 text-muted-foreground">
                  No active teachers found yet. Be the first to join!
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold font-display">Why Choose PhyFix?</h2>
              <p className="text-lg text-muted-foreground mt-2 mb-6">A platform built for personalized learning with zero middleman</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-green-500/10 p-3 rounded-lg h-fit">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Zero Commission Model</h3>
                    <p className="text-muted-foreground">We don't charge any commission. 100% of your payment goes directly to the teacher. No hidden fees, no platform charges.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg h-fit">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Direct Teacher Contact</h3>
                    <p className="text-muted-foreground">We provide you direct contact with the teacher. No middleman, no intermediaries - communicate and pay directly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg h-fit">
                    <CheckCircle2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Take a Demo, Then Decide</h3>
                    <p className="text-muted-foreground">Book a free demo class first. Experience the teaching style, then decide if it's right for you. No pressure, no commitment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg h-fit">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Personalized 1-on-1 Tutoring</h3>
                    <p className="text-muted-foreground">Every session is one-on-one with your tutor. Personalized attention, customized learning pace, and focused teaching.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Verified Expert Tutors</h3>
                    <p className="text-muted-foreground">All tutors are verified with TeacherOn profiles. 15+ years of experience teaching IB, IGCSE, AP, A-Level, CBSE and more.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" 
                alt="Students studying together online" 
                className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30" data-testid="section-testimonials">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              What Students <span className="text-primary">Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Students from the UK, UAE, Singapore, Canada, USA, and India share their results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="p-6 h-full flex flex-col gap-4 hover-elevate transition-all duration-300" data-testid={`card-testimonial-${i}`}>
                  <Quote className="w-6 h-6 text-primary/40 shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{t.text}"</p>
                  <div>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.country} · {t.board}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-background" data-testid="section-youtube">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Youtube className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                See What We <span className="text-red-600">Teach</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              Watch a sample lesson — free Physics and Math concept videos, exam walkthroughs, and problem-solving sessions on our YouTube channel.
            </p>

            {/* Embedded YouTube Video */}
            <Card className="overflow-hidden border-red-200/50 dark:border-red-800/30 shadow-xl mb-6" data-testid="card-youtube-video">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/pM0M7jHBn9I?rel=0&modestbranding=1&color=red"
                  title="PhyFix — Free Physics & Math Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </Card>

            {/* Channel CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/@phyfix"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-youtube-channel"
              >
                <Button size="lg" className="gap-2 bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                  <Youtube className="w-5 h-5" />
                  Visit @phyfix on YouTube
                </Button>
              </a>
              <a
                href="https://youtu.be/pM0M7jHBn9I"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-youtube-video"
              >
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 border-red-200 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20">
                  <Youtube className="w-5 h-5" />
                  Open Full Video
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container px-4 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to <span className="text-primary">Start Learning?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book a free demo class today. No commitment, no payment — just learning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-cta-whatsapp-bottom"
              >
                <Button size="lg" className="gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-8 h-14 text-lg">
                  <SiWhatsapp className="w-5 h-5" />
                  Book Free Demo on WhatsApp
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg gap-2">
                  Browse All Tutors
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
