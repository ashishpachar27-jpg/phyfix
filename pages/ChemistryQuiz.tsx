import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react";
import { Link } from "wouter";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "What is the atomic number of Carbon?",
    options: ["4", "6", "8", "12"],
    correct: 1,
    explanation: "Carbon has 6 protons in its nucleus, giving it an atomic number of 6.",
  },
  {
    question: "Which of the following is a noble gas?",
    options: ["Nitrogen", "Oxygen", "Neon", "Chlorine"],
    correct: 2,
    explanation: "Neon is a noble gas found in Group 18 of the periodic table with a full outer electron shell.",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["H2O2", "HO", "H2O", "OH2"],
    correct: 2,
    explanation: "Water consists of two hydrogen atoms covalently bonded to one oxygen atom: H2O.",
  },
  {
    question: "What type of bond is formed when electrons are shared between atoms?",
    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    correct: 1,
    explanation: "Covalent bonds form when atoms share electron pairs to achieve stable electron configurations.",
  },
  {
    question: "Which element is the most abundant in the Earth's crust?",
    options: ["Iron", "Silicon", "Oxygen", "Aluminum"],
    correct: 2,
    explanation: "Oxygen makes up about 46% of the Earth's crust by mass, primarily in oxide and silicate minerals.",
  },
  {
    question: "What is the pH of a neutral solution at 25°C?",
    options: ["0", "7", "14", "1"],
    correct: 1,
    explanation: "A neutral solution has equal concentrations of H+ and OH- ions, giving a pH of 7 at 25°C.",
  },
  {
    question: "Which subatomic particle has no electric charge?",
    options: ["Proton", "Electron", "Neutron", "Positron"],
    correct: 2,
    explanation: "Neutrons are electrically neutral subatomic particles found in the nucleus of an atom.",
  },
  {
    question: "What is Avogadro's number approximately equal to?",
    options: ["6.02 × 10²³", "3.14 × 10²³", "6.02 × 10²²", "1.60 × 10⁻¹⁹"],
    correct: 0,
    explanation: "Avogadro's number (6.022 × 10²³) represents the number of particles in one mole of a substance.",
  },
  {
    question: "Which gas is produced when an acid reacts with a metal?",
    options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    correct: 2,
    explanation: "When acids react with reactive metals, hydrogen gas is produced along with a salt.",
  },
  {
    question: "What is the electron configuration of Sodium (Na)?",
    options: ["2,8,2", "2,8,1", "2,7,2", "2,8,3"],
    correct: 1,
    explanation: "Sodium has 11 electrons arranged as 2 in the first shell, 8 in the second, and 1 in the third.",
  },
  {
    question: "Which of the following is an exothermic reaction?",
    options: ["Photosynthesis", "Melting ice", "Combustion", "Evaporation"],
    correct: 2,
    explanation: "Combustion releases heat energy to the surroundings, making it an exothermic reaction.",
  },
  {
    question: "What is the molar mass of CO2?",
    options: ["28 g/mol", "32 g/mol", "44 g/mol", "40 g/mol"],
    correct: 2,
    explanation: "CO2 has a molar mass of 12 (C) + 2×16 (O) = 44 g/mol.",
  },
  {
    question: "Which law states that mass is neither created nor destroyed in a chemical reaction?",
    options: ["Law of Definite Proportions", "Law of Conservation of Mass", "Avogadro's Law", "Dalton's Law"],
    correct: 1,
    explanation: "The Law of Conservation of Mass states that the total mass of reactants equals the total mass of products.",
  },
  {
    question: "What type of reaction is: 2H2 + O2 → 2H2O?",
    options: ["Decomposition", "Single displacement", "Synthesis/Combination", "Double displacement"],
    correct: 2,
    explanation: "This is a synthesis (combination) reaction where two or more substances combine to form a single product.",
  },
  {
    question: "Which element has the highest electronegativity?",
    options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
    correct: 2,
    explanation: "Fluorine has the highest electronegativity (3.98) of all elements on the Pauling scale.",
  },
  {
    question: "What is the common name for NaCl?",
    options: ["Baking soda", "Table salt", "Washing soda", "Limestone"],
    correct: 1,
    explanation: "NaCl (sodium chloride) is commonly known as table salt.",
  },
  {
    question: "In which state of matter do particles have the most kinetic energy?",
    options: ["Solid", "Liquid", "Gas", "All equal"],
    correct: 2,
    explanation: "Gas particles have the most kinetic energy as they move freely and rapidly in all directions.",
  },
  {
    question: "What is the oxidation state of oxygen in most compounds?",
    options: ["+2", "-1", "-2", "0"],
    correct: 2,
    explanation: "Oxygen typically has an oxidation state of -2 in most compounds, except in peroxides (-1) and OF2 (+2).",
  },
  {
    question: "Which acid is found in vinegar?",
    options: ["Hydrochloric acid", "Sulfuric acid", "Acetic acid", "Citric acid"],
    correct: 2,
    explanation: "Vinegar contains acetic acid (CH3COOH), typically at a concentration of 4-8%.",
  },
  {
    question: "What is the shape of a methane (CH4) molecule?",
    options: ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
    correct: 2,
    explanation: "Methane has a tetrahedral shape with bond angles of 109.5° due to four bonding pairs around carbon.",
  },
  {
    question: "Which indicator turns pink in a basic solution?",
    options: ["Litmus", "Methyl orange", "Phenolphthalein", "Universal indicator"],
    correct: 2,
    explanation: "Phenolphthalein is colorless in acidic solutions and turns pink/magenta in basic solutions (pH > 8.2).",
  },
  {
    question: "What is the process of a solid turning directly into a gas called?",
    options: ["Evaporation", "Condensation", "Sublimation", "Deposition"],
    correct: 2,
    explanation: "Sublimation is the phase transition from solid directly to gas without passing through the liquid state.",
  },
  {
    question: "How many valence electrons does a Group 17 element have?",
    options: ["1", "5", "7", "8"],
    correct: 2,
    explanation: "Group 17 elements (halogens) have 7 valence electrons, making them highly reactive nonmetals.",
  },
  {
    question: "What catalyst is used in the Haber process?",
    options: ["Platinum", "Iron", "Nickel", "Vanadium pentoxide"],
    correct: 1,
    explanation: "The Haber process uses an iron catalyst to synthesize ammonia from nitrogen and hydrogen gases.",
  },
  {
    question: "Which of these is a strong acid?",
    options: ["Acetic acid", "Carbonic acid", "Hydrochloric acid", "Citric acid"],
    correct: 2,
    explanation: "Hydrochloric acid (HCl) is a strong acid that completely dissociates in water.",
  },
  {
    question: "What is the unit of concentration in molarity?",
    options: ["g/L", "mol/L", "mol/kg", "g/mL"],
    correct: 1,
    explanation: "Molarity (M) is defined as the number of moles of solute per liter of solution (mol/L).",
  },
  {
    question: "Which type of reaction involves the transfer of electrons?",
    options: ["Acid-base", "Precipitation", "Redox", "Hydrolysis"],
    correct: 2,
    explanation: "Redox (reduction-oxidation) reactions involve the transfer of electrons between species.",
  },
  {
    question: "What is the molecular geometry of water (H2O)?",
    options: ["Linear", "Bent", "Trigonal planar", "Tetrahedral"],
    correct: 1,
    explanation: "Water has a bent shape with a bond angle of about 104.5° due to two lone pairs on oxygen.",
  },
  {
    question: "Which allotrope of carbon is the hardest natural substance?",
    options: ["Graphite", "Diamond", "Fullerene", "Graphene"],
    correct: 1,
    explanation: "Diamond is the hardest natural substance due to its strong 3D network of covalent bonds.",
  },
  {
    question: "What does the term 'isotope' refer to?",
    options: ["Same protons, different electrons", "Same protons, different neutrons", "Same neutrons, different protons", "Same electrons, different protons"],
    correct: 1,
    explanation: "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",
  },
];

export default function ChemistryQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [showResult, setShowResult] = useState(false);

  const progress = useMemo(() => Math.round(((currentQ + (selected !== null ? 1 : 0)) / questions.length) * 100), [currentQ, selected]);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[currentQ].correct) {
      setScore((s) => s + 1);
    }
    const newAnswered = [...answered];
    newAnswered[currentQ] = true;
    setAnswered(newAnswered);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setAnswered(new Array(questions.length).fill(false));
    setShowResult(false);
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <Card className="p-8 text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h1 className="font-display text-3xl font-bold text-foreground mb-2" data-testid="text-quiz-complete">Quiz Complete!</h1>
              <p className="text-lg text-muted-foreground mb-6">Chemistry Quiz Results</p>
              <div className="text-5xl font-bold text-foreground mb-2" data-testid="text-quiz-score">{score}/{questions.length}</div>
              <p className="text-muted-foreground mb-6">{percentage}% correct</p>
              <Badge variant={percentage >= 70 ? "default" : "secondary"} className="text-sm mb-8">
                {percentage >= 90 ? "Outstanding!" : percentage >= 70 ? "Great job!" : percentage >= 50 ? "Good effort!" : "Keep practicing!"}
              </Badge>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={handleRestart} data-testid="button-restart-quiz">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/practice" data-testid="link-back-practice">Back to Practice</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-md bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground" data-testid="text-quiz-title">Chemistry Quiz</h1>
            <p className="text-sm text-muted-foreground">30 Questions</p>
          </div>
          <Badge variant="secondary" className="ml-auto" data-testid="badge-question-number">
            {currentQ + 1}/{questions.length}
          </Badge>
        </div>

        <div className="w-full bg-muted rounded-full h-2 mb-8">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            data-testid="progress-bar"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-6" data-testid="text-question">
                {q.question}
              </h2>
              <div className="space-y-3">
                {q.options.map((opt, idx) => {
                  let optionClass = "border rounded-md p-4 cursor-pointer transition-colors text-left w-full flex items-center gap-3";
                  if (selected !== null) {
                    if (idx === q.correct) {
                      optionClass += " border-green-500 bg-green-50 dark:bg-green-950/30";
                    } else if (idx === selected && idx !== q.correct) {
                      optionClass += " border-red-500 bg-red-50 dark:bg-red-950/30";
                    } else {
                      optionClass += " border-border opacity-50";
                    }
                  } else {
                    optionClass += " border-border hover:border-green-300 dark:hover:border-green-700";
                  }
                  return (
                    <button
                      key={idx}
                      className={optionClass}
                      onClick={() => handleSelect(idx)}
                      disabled={selected !== null}
                      data-testid={`button-option-${idx}`}
                    >
                      <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm font-medium shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm">{opt}</span>
                      {selected !== null && idx === q.correct && <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto shrink-0" />}
                      {selected !== null && idx === selected && idx !== q.correct && <XCircle className="w-5 h-5 text-red-500 ml-auto shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </Card>

            {selected !== null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="p-4 mb-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
                  <p className="text-sm text-foreground" data-testid="text-explanation">
                    <span className="font-semibold">Explanation:</span> {q.explanation}
                  </p>
                </Card>
                <Button onClick={handleNext} className="w-full" data-testid="button-next">
                  {currentQ < questions.length - 1 ? (
                    <>Next Question <ArrowRight className="w-4 h-4 ml-2" /></>
                  ) : (
                    "See Results"
                  )}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
