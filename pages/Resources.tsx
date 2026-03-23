import { useState, useMemo } from "react";
import { useSeo } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FileText, BookOpen, FlaskConical, Atom, Calculator, Dna, Monitor, TrendingUp,
  ExternalLink, Search, X, Filter, GraduationCap, Download, Star, Globe
} from "lucide-react";
import {
  resources, ALL_BOARDS, ALL_SUBJECTS, ALL_TYPES,
  type Resource, type ResourceType
} from "@/data/resources";

const typeConfig: Record<ResourceType, { label: string; color: string; icon: typeof FileText }> = {
  "official":       { label: "Official",       color: "bg-blue-500/10 text-blue-700 dark:text-blue-400",   icon: Globe },
  "past-papers":    { label: "Past Papers",    color: "bg-red-500/10 text-red-700 dark:text-red-400",      icon: FileText },
  "syllabus":       { label: "Syllabus",       color: "bg-purple-500/10 text-purple-700 dark:text-purple-400", icon: BookOpen },
  "study-notes":    { label: "Study Notes",    color: "bg-green-500/10 text-green-700 dark:text-green-400", icon: GraduationCap },
  "formula-sheet":  { label: "Formula Sheet",  color: "bg-amber-500/10 text-amber-700 dark:text-amber-400", icon: Calculator },
  "practice":       { label: "Practice",       color: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",    icon: Star },
};

const subjectIcons: Record<string, typeof Atom> = {
  Physics: Atom,
  Mathematics: Calculator,
  Chemistry: FlaskConical,
  Biology: Dna,
  "Computer Science": Monitor,
  Commerce: TrendingUp,
  English: BookOpen,
  All: GraduationCap,
};

const boardColors: Record<string, string> = {
  IB: "bg-blue-900/10 text-blue-800 dark:text-blue-300",
  IGCSE: "bg-red-900/10 text-red-800 dark:text-red-300",
  "A-Level": "bg-purple-900/10 text-purple-800 dark:text-purple-300",
  AP: "bg-indigo-900/10 text-indigo-800 dark:text-indigo-300",
  CBSE: "bg-teal-900/10 text-teal-800 dark:text-teal-300",
  "ICSE / ISC": "bg-orange-900/10 text-orange-800 dark:text-orange-300",
  Edexcel: "bg-violet-900/10 text-violet-800 dark:text-violet-300",
  GCSE: "bg-sky-900/10 text-sky-800 dark:text-sky-300",
  SAT: "bg-slate-900/10 text-slate-800 dark:text-slate-300",
  All: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

const quickFilters = [
  { label: "Past Papers", type: "past-papers" as ResourceType, icon: FileText },
  { label: "Syllabus", type: "syllabus" as ResourceType, icon: BookOpen },
  { label: "Study Notes", type: "study-notes" as ResourceType, icon: GraduationCap },
  { label: "Formula Sheets", type: "formula-sheet" as ResourceType, icon: Calculator },
  { label: "Official Sites", type: "official" as ResourceType, icon: Globe },
  { label: "Practice Q's", type: "practice" as ResourceType, icon: Star },
];

function ResourceCard({ resource }: { resource: Resource }) {
  const cfg = typeConfig[resource.type];
  const TypeIcon = cfg.icon;
  const SubjectIcon = subjectIcons[resource.subject] || GraduationCap;

  return (
    <Card
      className="p-5 flex flex-col gap-3 hover-elevate transition-all duration-300 h-full"
      data-testid={`card-resource-${resource.id}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${cfg.color}`}>
            <TypeIcon className="w-3 h-3" />
            {cfg.label}
          </span>
          {resource.isOfficial && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
              ✓ Official
            </span>
          )}
          {resource.isFree && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-700 dark:text-green-400">
              Free
            </span>
          )}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground text-sm leading-snug mb-1">{resource.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{resource.description}</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap mt-auto pt-2">
        {resource.board !== "All" && (
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${boardColors[resource.board] || boardColors.All}`}>
            {resource.board}
          </span>
        )}
        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
          <SubjectIcon className="w-3 h-3" />
          {resource.subject}
        </span>
      </div>

      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`link-resource-${resource.id}`}
      >
        <Button size="sm" variant="outline" className="w-full gap-2 mt-1 text-xs">
          <ExternalLink className="w-3 h-3" />
          {resource.type === "past-papers" ? "Access Papers" :
           resource.type === "formula-sheet" ? "View / Download" :
           resource.type === "syllabus" ? "View Syllabus" :
           resource.type === "official" ? "Visit Official Site" :
           "Open Resource"}
        </Button>
      </a>
    </Card>
  );
}

export default function Resources() {
  useSeo({
    title: "Free Physics & Maths Resources | Past Papers, Notes | PhyFix",
    description: "60+ free resources for IB, IGCSE, A-Level, AP, CBSE students. Past papers, syllabuses, formula sheets, practice questions, study notes. All subjects.",
    keywords: "free physics past papers, IGCSE maths resources, IB physics notes, AP calculus practice, CBSE revision materials",
    ogTitle: "Free Physics & Maths Study Resources | PhyFix",
    canonical: "https://phyfix.com/resources",
  });
  const [search, setSearch] = useState("");
  const [selectedBoard, setSelectedBoard] = useState<string>("All");
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<ResourceType | "All">("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchBoard = selectedBoard === "All" || r.board === selectedBoard || r.board === "All";
      const matchSubject = selectedSubject === "All" || r.subject === selectedSubject || r.subject === "All";
      const matchType = selectedType === "All" || r.type === selectedType;
      const matchSearch = !search.trim() ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.board.toLowerCase().includes(search.toLowerCase()) ||
        r.subject.toLowerCase().includes(search.toLowerCase());
      return matchBoard && matchSubject && matchType && matchSearch;
    });
  }, [search, selectedBoard, selectedSubject, selectedType]);

  const activeFiltersCount = [
    selectedBoard !== "All",
    selectedSubject !== "All",
    selectedType !== "All",
  ].filter(Boolean).length;

  function clearFilters() {
    setSelectedBoard("All");
    setSelectedSubject("All");
    setSelectedType("All");
    setSearch("");
  }

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container px-4 mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-10 h-10 text-primary" />
              <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
                Free <span className="text-primary">Resources</span> for Students
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Past papers, syllabuses, formula sheets, and study notes — all in one place.
              Organised by board and subject. 100% free to access.
            </p>
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                className="pl-12 pr-4 h-14 text-base rounded-full border-2 shadow-md"
                placeholder="Search by board, subject, or resource type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                data-testid="input-resource-search"
              />
              {search && (
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearch("")}
                  data-testid="button-clear-search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Filter Chips */}
      <section className="py-6 bg-muted/30 border-y border-border/40">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-sm text-muted-foreground font-medium hidden sm:block">Quick filters:</span>
            {quickFilters.map((qf) => {
              const isActive = selectedType === qf.type;
              return (
                <button
                  key={qf.type}
                  onClick={() => setSelectedType(isActive ? "All" : qf.type)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                  data-testid={`chip-type-${qf.type}`}
                >
                  <qf.icon className="w-3.5 h-3.5" />
                  {qf.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-background">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Filter Sidebar */}
            <div className="lg:w-60 shrink-0">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                        {activeFiltersCount}
                      </span>
                    )}
                  </h2>
                  {activeFiltersCount > 0 && (
                    <button
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      onClick={clearFilters}
                      data-testid="button-clear-filters"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Board Filter */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Board</p>
                  <div className="space-y-1">
                    {["All", ...ALL_BOARDS].map((b) => (
                      <button
                        key={b}
                        onClick={() => setSelectedBoard(b)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                          selectedBoard === b
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                        data-testid={`filter-board-${b.toLowerCase().replace(/[/ ]+/g, "-")}`}
                      >
                        {b === "All" ? "All Boards" : b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject Filter */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Subject</p>
                  <div className="space-y-1">
                    {["All", ...ALL_SUBJECTS].map((s) => {
                      const Icon = subjectIcons[s] || GraduationCap;
                      return (
                        <button
                          key={s}
                          onClick={() => setSelectedSubject(s)}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                            selectedSubject === s
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                          data-testid={`filter-subject-${s.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <Icon className="w-3.5 h-3.5 shrink-0" />
                          {s === "All" ? "All Subjects" : s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Resource Type</p>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedType("All")}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedType === "All"
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      data-testid="filter-type-all"
                    >
                      All Types
                    </button>
                    {ALL_TYPES.map((t) => {
                      const Icon = typeConfig[t.value].icon;
                      return (
                        <button
                          key={t.value}
                          onClick={() => setSelectedType(t.value)}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                            selectedType === t.value
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                          data-testid={`filter-type-${t.value}`}
                        >
                          <Icon className="w-3.5 h-3.5 shrink-0" />
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground" data-testid="text-results-count">
                  Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {resources.length} resources
                  {(selectedBoard !== "All" || selectedSubject !== "All" || selectedType !== "All" || search) && (
                    <button
                      className="ml-3 text-primary hover:underline"
                      onClick={clearFilters}
                    >
                      Reset filters
                    </button>
                  )}
                </p>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p className="text-lg font-medium mb-2">No resources found</p>
                  <p className="text-sm">Try adjusting your filters or search terms.</p>
                  <Button variant="outline" className="mt-4" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map((resource, i) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.4) }}
                    >
                      <ResourceCard resource={resource} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container px-4 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Need help with any of these topics?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our verified tutors cover all these boards and subjects in personalized 1-on-1 sessions.
            </p>
            <a
              href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-resources-cta-whatsapp"
            >
              <Button size="lg" className="gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
                Book a Free Demo Session
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
