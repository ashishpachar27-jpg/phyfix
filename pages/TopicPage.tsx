import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { getTopicBySlug, getRelatedTopics } from "@/data/topics";
import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CheckCircle, Lightbulb, BookOpen, Users, ArrowRight,
  Atom, Calculator, FlaskConical, Leaf, ChevronRight,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import NotFound from "@/pages/not-found";

const WA_BASE = "https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class%20for%20";

const subjectIcons: Record<string, typeof Atom> = {
  Physics: Atom,
  Mathematics: Calculator,
  Chemistry: FlaskConical,
  Biology: Leaf,
};

const subjectColors: Record<string, { bg: string; badge: string; text: string; border: string }> = {
  Physics: { bg: "from-blue-50 via-white to-indigo-50 dark:from-blue-950/30 dark:via-background dark:to-indigo-950/20", badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200", text: "text-blue-700 dark:text-blue-300", border: "border-blue-100 dark:border-blue-900/40" },
  Mathematics: { bg: "from-purple-50 via-white to-violet-50 dark:from-purple-950/30 dark:via-background dark:to-violet-950/20", badge: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200", text: "text-purple-700 dark:text-purple-300", border: "border-purple-100 dark:border-purple-900/40" },
  Chemistry: { bg: "from-green-50 via-white to-emerald-50 dark:from-green-950/30 dark:via-background dark:to-emerald-950/20", badge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", text: "text-green-700 dark:text-green-300", border: "border-green-100 dark:border-green-900/40" },
  Biology: { bg: "from-orange-50 via-white to-amber-50 dark:from-orange-950/30 dark:via-background dark:to-amber-950/20", badge: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200", text: "text-orange-700 dark:text-orange-300", border: "border-orange-100 dark:border-orange-900/40" },
};

function injectSchema(json: object) {
  const id = "topic-schema";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
}

export default function TopicPage() {
  const params = useParams<{ slug: string }>();
  const topic = getTopicBySlug(params.slug);
  const related = getRelatedTopics(params.slug);

  useSeo(
    topic
      ? {
          title: topic.metaTitle,
          description: topic.metaDescription,
          keywords: topic.keywords,
          canonical: `https://phyfix.com/topics/${topic.slug}`,
          ogTitle: topic.metaTitle,
          ogDescription: topic.metaDescription,
        }
      : { title: "Topic Not Found | PhyFix" }
  );

  useEffect(() => {
    if (!topic) return;
    injectSchema({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://phyfix.com/" },
            { "@type": "ListItem", "position": 2, "name": topic.subject === "Mathematics" ? "Maths Classes" : "Physics Classes", "item": `https://phyfix.com/${topic.subject === "Mathematics" ? "maths-classes" : "physics-classes"}` },
            { "@type": "ListItem", "position": 3, "name": topic.h1, "item": `https://phyfix.com/topics/${topic.slug}` },
          ],
        },
        {
          "@type": "Course",
          "name": topic.h1,
          "description": topic.metaDescription,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "PhyFix",
            "url": "https://phyfix.com",
          },
          "educationalLevel": topic.boardShort,
          "about": topic.topic,
          "keywords": topic.keywords,
          "url": `https://phyfix.com/topics/${topic.slug}`,
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR",
            "description": "Free demo class available",
          },
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `How do I get help with ${topic.topic} for ${topic.boardShort}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `PhyFix offers expert 1-on-1 online tutoring for ${topic.topic} at the ${topic.boardShort} level. Book a free demo class via WhatsApp at +91 8684901516 to get started.`,
              },
            },
            {
              "@type": "Question",
              "name": `What topics are covered in ${topic.boardShort} ${topic.topic}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": topic.subtopics.join(", "),
              },
            },
          ],
        },
      ],
    });

    return () => {
      const el = document.getElementById("topic-schema");
      if (el) el.remove();
    };
  }, [topic]);

  if (!topic) return <NotFound />;

  const colors = subjectColors[topic.subject] || subjectColors.Physics;
  const Icon = subjectIcons[topic.subject] || Atom;
  const waLink = `${WA_BASE}${encodeURIComponent(topic.topic + " " + topic.boardShort)}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className={`py-20 md:py-24 bg-gradient-to-br ${colors.bg}`}>
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={topic.subject === "Mathematics" ? "/maths-classes" : "/physics-classes"} className="hover:text-foreground transition-colors">
                {topic.subject === "Mathematics" ? "Maths Classes" : "Physics Classes"}
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{topic.topic}</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-5">
              <Badge className={colors.badge}>
                <Icon className="w-3 h-3 mr-1" /> {topic.subject}
              </Badge>
              <Badge variant="outline">{topic.boardShort}</Badge>
              <Badge variant="outline">{topic.topic}</Badge>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              {topic.h1}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-3 leading-relaxed">
              {topic.intro}
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Board: <strong>{topic.board}</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full px-8 bg-green-500 hover:bg-green-600 text-white">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo Class
                </Button>
              </a>
              <Link href="/teachers">
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                  <Users className="w-4 h-4" /> Browse Tutors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subtopics */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* What we cover */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Topics Covered
              </h2>
              <ul className="space-y-2.5">
                {topic.subtopics.map((sub, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {sub}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Exam tips */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" /> Exam Tips
              </h2>
              <ul className="space-y-3">
                {topic.examTips.map((tip, i) => (
                  <li key={i} className={`p-3.5 rounded-md border text-sm leading-relaxed ${colors.border} bg-muted/20`}>
                    <span className={`font-semibold ${colors.text} mr-1`}>Tip {i + 1}:</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-10 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="p-8 text-center border-primary/20 bg-primary/5">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                Struggling with {topic.topic}?
              </h2>
              <p className="text-muted-foreground mb-6">
                Book a free 1-hour demo session with a PhyFix expert. No commitment, no credit card — just great teaching.
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full px-8 bg-green-500 hover:bg-green-600 text-white">
                  <SiWhatsapp className="w-5 h-5" /> Book Free Demo on WhatsApp
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Topics */}
      {related.length > 0 && (
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Related Topics</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/topics/${rel.slug}`}>
                    <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer group h-full">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">{rel.boardShort}</Badge>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm leading-snug">{rel.topic}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{rel.subject}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom SEO Text */}
      <section className="py-10 bg-muted/10 border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              PhyFix provides expert online {topic.subject} tutoring for {topic.board} students worldwide.
              Our verified tutors specialise in {topic.topic} and deliver 1-on-1 personalised sessions via Zoom.
              All sessions are recorded and notes are shared after class.{" "}
              <Link href="/free-demo" className="text-primary hover:underline font-medium">Book your free demo class</Link>{" "}
              or{" "}
              <Link href="/teachers" className="text-primary hover:underline font-medium">browse our tutors</Link>{" "}
              to find the right match.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
