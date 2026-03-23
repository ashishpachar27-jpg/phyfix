import { useSeo } from "@/hooks/use-seo";
import { interactiveGames, type SubjectGames } from "@/data/games";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Atom, Calculator, FlaskConical, Leaf, Gamepad2, BookOpen, Sparkles, PlayCircle } from "lucide-react";
import { Link } from "wouter";

const subjectIcons: Record<string, typeof Atom> = {
  physics: Atom,
  math: Calculator,
  chemistry: FlaskConical,
  biology: Leaf,
  english: BookOpen,
};

const subjectColors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-200 dark:border-blue-800",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-200 dark:border-purple-800",
    badge: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-950/30",
    text: "text-green-700 dark:text-green-300",
    border: "border-green-200 dark:border-green-800",
    badge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  orange: {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    text: "text-orange-700 dark:text-orange-300",
    border: "border-orange-200 dark:border-orange-800",
    badge: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  },
  pink: {
    bg: "bg-pink-50 dark:bg-pink-950/30",
    text: "text-pink-700 dark:text-pink-300",
    border: "border-pink-200 dark:border-pink-800",
    badge: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  },
};

function SubjectSection({ subject }: { subject: SubjectGames }) {
  const Icon = subjectIcons[subject.icon] || Atom;
  const colors = subjectColors[subject.color] || subjectColors.blue;
  const animations = subject.games.filter((g) => g.type === "animation");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`rounded-md border ${colors.border} ${colors.bg} p-6`}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2.5 rounded-md ${colors.badge}`}>
            <Icon className="w-6 h-6" />
          </div>
          <h2 className={`font-display text-2xl font-bold ${colors.text}`} data-testid={`text-subject-${subject.subject.toLowerCase()}`}>
            {subject.subject}
          </h2>
          <Badge variant="secondary" className="ml-auto" data-testid={`badge-count-${subject.subject.toLowerCase()}`}>
            {subject.games.length} {subject.games.length === 1 ? "activity" : "activities"}
          </Badge>
        </div>

        {/* Animation Index — shown when there are animations */}
        {animations.length > 0 && (
          <div className="mb-5 p-3 rounded-md bg-white/60 dark:bg-white/5 border border-current/10">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Animations in this section
            </p>
            <div className="flex flex-wrap gap-2" data-testid="list-animation-index">
              {animations.map((anim, i) => (
                <a
                  key={i}
                  href={anim.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`chip-animation-${i}`}
                >
                  <Badge
                    variant="outline"
                    className={`cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 gap-1.5 text-xs py-1 px-2.5 ${colors.text} border-current/30`}
                  >
                    <PlayCircle className="w-3 h-3" />
                    {anim.title}
                  </Badge>
                </a>
              ))}
            </div>
          </div>
        )}

        {subject.games.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subject.games.map((game, idx) => {
              const isAnimation = game.type === "animation";
              return (
                <Card key={idx} className="p-4" data-testid={`card-game-${subject.subject.toLowerCase()}-${idx}`}>
                  <div className="flex flex-col gap-3 h-full">
                    <div className="flex items-start gap-3">
                      <div className={`p-1.5 rounded-md ${colors.badge} shrink-0`}>
                        {isAnimation ? <Sparkles className="w-4 h-4" /> : <Gamepad2 className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-foreground leading-tight" data-testid={`text-game-title-${idx}`}>
                            {game.title}
                          </h3>
                          {isAnimation && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                              Animation
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5" data-testid={`text-game-topic-${idx}`}>
                          Topic: {game.topic}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {game.description}
                    </p>
                    {game.url.startsWith("/") ? (
                      <Button asChild size="sm" className="w-full mt-auto">
                        <Link
                          href={game.url}
                          data-testid={`link-game-${subject.subject.toLowerCase()}-${idx}`}
                        >
                          {isAnimation ? <PlayCircle className="w-4 h-4 mr-2" /> : <Gamepad2 className="w-4 h-4 mr-2" />}
                          {isAnimation ? "View Animation" : "Play Quiz"}
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild size="sm" className="w-full mt-auto">
                        <a
                          href={game.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-game-${subject.subject.toLowerCase()}-${idx}`}
                        >
                          {isAnimation ? <PlayCircle className="w-4 h-4 mr-2" /> : <Gamepad2 className="w-4 h-4 mr-2" />}
                          {isAnimation ? "View Animation" : "Play Quiz"}
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <Gamepad2 className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm font-medium">Coming Soon</p>
            <p className="text-xs mt-1">Interactive quizzes for {subject.subject} are being prepared.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Practice() {
  useSeo({
    title: "Physics & Maths Practice Games | Interactive Quizzes | PhyFix",
    description: "Practice Physics and Maths with interactive games and quizzes for IB, IGCSE, A-Level, AP, CBSE students. Free Gemini-powered animations and exercises.",
    keywords: "physics practice games, maths quiz online, IB physics revision, IGCSE maths practice, AP physics quiz",
    ogTitle: "Interactive Physics & Maths Practice — Games & Quizzes | PhyFix",
    canonical: "https://phyfix.com/practice",
  });
  const totalGames = interactiveGames.reduce((sum, s) => sum + s.games.length, 0);

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4" data-testid="badge-interactive-learning">
              <Gamepad2 className="w-3 h-3 mr-1" />
              Interactive Learning
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-practice-heading">
              Practice & Play
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharpen your skills with fun, interactive quizzes organized by subject and topic.
              Click on any quiz to start playing!
            </p>
            {totalGames > 0 && (
              <p className="text-sm text-muted-foreground mt-2" data-testid="text-total-quizzes">
                {totalGames} interactive {totalGames === 1 ? "quiz" : "quizzes"} available
              </p>
            )}
          </motion.div>

          <div className="space-y-8">
            {interactiveGames.map((subject) => (
              <SubjectSection key={subject.subject} subject={subject} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
