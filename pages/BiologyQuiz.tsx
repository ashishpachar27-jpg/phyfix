import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react";
import { Link } from "wouter";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
    correct: 2,
    explanation: "Mitochondria generate most of the cell's ATP through oxidative phosphorylation, earning the title 'powerhouse of the cell'.",
  },
  {
    question: "What is the basic unit of life?",
    options: ["Atom", "Molecule", "Cell", "Tissue"],
    correct: 2,
    explanation: "The cell is the basic structural and functional unit of all living organisms.",
  },
  {
    question: "Which organelle is responsible for photosynthesis?",
    options: ["Mitochondria", "Chloroplast", "Ribosome", "Vacuole"],
    correct: 1,
    explanation: "Chloroplasts contain chlorophyll and are the site of photosynthesis in plant cells.",
  },
  {
    question: "DNA stands for:",
    options: ["Dinitro acid", "Deoxyribonucleic acid", "Dioxyribonucleic acid", "Deoxyribo nucleotide acid"],
    correct: 1,
    explanation: "DNA (Deoxyribonucleic acid) is the molecule that carries genetic instructions for life.",
  },
  {
    question: "Which blood cells are responsible for fighting infections?",
    options: ["Red blood cells", "Platelets", "White blood cells", "Plasma"],
    correct: 2,
    explanation: "White blood cells (leukocytes) are part of the immune system and defend the body against infections.",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Skin", "Lungs"],
    correct: 2,
    explanation: "The skin is the largest organ, covering about 1.5-2 square meters in adults.",
  },
  {
    question: "Which process converts glucose into energy in cells?",
    options: ["Photosynthesis", "Cellular respiration", "Fermentation", "Osmosis"],
    correct: 1,
    explanation: "Cellular respiration breaks down glucose to produce ATP, carbon dioxide, and water.",
  },
  {
    question: "How many chromosomes do humans have?",
    options: ["23", "44", "46", "48"],
    correct: 2,
    explanation: "Humans have 46 chromosomes (23 pairs) in each somatic cell.",
  },
  {
    question: "What is the function of ribosomes?",
    options: ["Energy production", "Protein synthesis", "Cell division", "Waste removal"],
    correct: 1,
    explanation: "Ribosomes are the cellular machinery responsible for translating mRNA into proteins.",
  },
  {
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correct: 3,
    explanation: "Vitamin D is synthesized in the skin upon exposure to ultraviolet B (UVB) radiation from sunlight.",
  },
  {
    question: "What type of cell division produces gametes (sex cells)?",
    options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
    correct: 1,
    explanation: "Meiosis is a special type of cell division that produces haploid gametes (sperm and egg cells).",
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
    correct: 1,
    explanation: "The cerebellum coordinates voluntary movements, balance, and motor learning.",
  },
  {
    question: "What is the correct order of biological organization from smallest to largest?",
    options: ["Cell → Tissue → Organ → Organ system", "Tissue → Cell → Organ → Organ system", "Organ → Tissue → Cell → Organ system", "Cell → Organ → Tissue → Organ system"],
    correct: 0,
    explanation: "The hierarchy of biological organization goes: Cell → Tissue → Organ → Organ System → Organism.",
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    correct: 2,
    explanation: "Plants absorb carbon dioxide (CO2) from the atmosphere and use it with water and light energy to produce glucose.",
  },
  {
    question: "What is the main function of the large intestine?",
    options: ["Protein digestion", "Nutrient absorption", "Water absorption", "Bile production"],
    correct: 2,
    explanation: "The large intestine primarily absorbs water and electrolytes from remaining food matter and forms feces.",
  },
  {
    question: "Which base pairs with Adenine in DNA?",
    options: ["Cytosine", "Guanine", "Thymine", "Uracil"],
    correct: 2,
    explanation: "In DNA, Adenine (A) always pairs with Thymine (T) through two hydrogen bonds.",
  },
  {
    question: "What is the term for organisms that make their own food?",
    options: ["Heterotrophs", "Autotrophs", "Decomposers", "Parasites"],
    correct: 1,
    explanation: "Autotrophs (like plants) produce their own food through photosynthesis or chemosynthesis.",
  },
  {
    question: "Which hormone regulates blood sugar levels?",
    options: ["Adrenaline", "Thyroxine", "Insulin", "Estrogen"],
    correct: 2,
    explanation: "Insulin, produced by the pancreas, regulates blood glucose levels by promoting glucose uptake by cells.",
  },
  {
    question: "What is the process by which water moves across a semipermeable membrane?",
    options: ["Diffusion", "Osmosis", "Active transport", "Endocytosis"],
    correct: 1,
    explanation: "Osmosis is the movement of water molecules from a region of lower solute concentration to higher solute concentration through a semipermeable membrane.",
  },
  {
    question: "Which kingdom includes mushrooms and yeasts?",
    options: ["Plantae", "Animalia", "Fungi", "Protista"],
    correct: 2,
    explanation: "Fungi is the kingdom that includes mushrooms, yeasts, and molds, which are heterotrophic organisms.",
  },
  {
    question: "What is the role of hemoglobin?",
    options: ["Fight infections", "Clot blood", "Transport oxygen", "Produce hormones"],
    correct: 2,
    explanation: "Hemoglobin is a protein in red blood cells that binds to oxygen and transports it throughout the body.",
  },
  {
    question: "Which structure protects the brain?",
    options: ["Ribcage", "Skull (cranium)", "Vertebral column", "Pelvis"],
    correct: 1,
    explanation: "The skull (cranium) is a bony structure that encloses and protects the brain.",
  },
  {
    question: "What is natural selection?",
    options: ["Random genetic changes", "Survival of organisms best adapted to their environment", "Artificial breeding of organisms", "Migration of species"],
    correct: 1,
    explanation: "Natural selection is the process where organisms better adapted to their environment tend to survive and produce more offspring.",
  },
  {
    question: "Which organelle contains digestive enzymes?",
    options: ["Mitochondria", "Lysosome", "Endoplasmic reticulum", "Nucleus"],
    correct: 1,
    explanation: "Lysosomes contain hydrolytic enzymes that break down waste materials and cellular debris.",
  },
  {
    question: "What is the function of the xylem in plants?",
    options: ["Transport sugars", "Transport water and minerals", "Photosynthesis", "Gas exchange"],
    correct: 1,
    explanation: "Xylem tissue transports water and dissolved minerals from the roots to the rest of the plant.",
  },
  {
    question: "Which type of immunity is gained through vaccination?",
    options: ["Natural active immunity", "Artificial active immunity", "Natural passive immunity", "Artificial passive immunity"],
    correct: 1,
    explanation: "Vaccination provides artificial active immunity by stimulating the immune system to produce antibodies.",
  },
  {
    question: "What is the main function of the alveoli in the lungs?",
    options: ["Filter air", "Warm incoming air", "Gas exchange", "Produce mucus"],
    correct: 2,
    explanation: "Alveoli are tiny air sacs in the lungs where the exchange of oxygen and carbon dioxide takes place.",
  },
  {
    question: "What is a genotype?",
    options: ["Physical appearance of an organism", "Genetic makeup of an organism", "Type of gene mutation", "A group of genes"],
    correct: 1,
    explanation: "Genotype refers to the genetic makeup (allele combination) of an organism for a particular trait.",
  },
  {
    question: "Which ecological level includes all living and nonliving things in an area?",
    options: ["Population", "Community", "Ecosystem", "Biome"],
    correct: 2,
    explanation: "An ecosystem includes all living organisms (biotic) and nonliving components (abiotic) in a given area.",
  },
  {
    question: "What is the main difference between prokaryotic and eukaryotic cells?",
    options: ["Size only", "Presence of a membrane-bound nucleus", "Presence of ribosomes", "Cell wall composition"],
    correct: 1,
    explanation: "Eukaryotic cells have a membrane-bound nucleus, while prokaryotic cells lack one and have their DNA in the cytoplasm.",
  },
];

export default function BiologyQuiz() {
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
              <Trophy className="w-16 h-16 mx-auto mb-4 text-orange-500" />
              <h1 className="font-display text-3xl font-bold text-foreground mb-2" data-testid="text-quiz-complete">Quiz Complete!</h1>
              <p className="text-lg text-muted-foreground mb-6">Biology Quiz Results</p>
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
          <div className="p-2 rounded-md bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            <Leaf className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground" data-testid="text-quiz-title">Biology Quiz</h1>
            <p className="text-sm text-muted-foreground">30 Questions</p>
          </div>
          <Badge variant="secondary" className="ml-auto" data-testid="badge-question-number">
            {currentQ + 1}/{questions.length}
          </Badge>
        </div>

        <div className="w-full bg-muted rounded-full h-2 mb-8">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
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
                    optionClass += " border-border hover:border-orange-300 dark:hover:border-orange-700";
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
                <Card className="p-4 mb-6 border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/20">
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
