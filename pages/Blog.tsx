import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import { blogPosts, ALL_CATEGORIES } from "@/data/blog";
import { useSeo } from "@/hooks/use-seo";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog() {
  useSeo({
    title: "Physics & Math Tutoring Blog | Study Tips & Guides | PhyFix",
    description: "Expert study guides for IB Physics, IGCSE Maths, A-Level, CBSE, and AP students. Tips from experienced tutors to help you score higher.",
    keywords: "IB physics study tips, IGCSE math guide, A-Level physics revision, online tutoring blog",
    canonical: "https://phyfix.com/blog",
  });

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchCat = selectedCategory === "All" || p.category === selectedCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [search, selectedCategory]);

  const featured = blogPosts[0];

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-14 md:py-20 bg-background border-b border-border/40">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">PhyFix Blog</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
              Study Smarter, Score <span className="text-primary">Higher</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert guides, revision strategies, and exam tips for IB, IGCSE, A-Level, AP, and CBSE students — written by our tutors.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                className="pl-11 h-12 rounded-full border-2"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                data-testid="input-blog-search"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
                data-testid={`chip-blog-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {selectedCategory === "All" && !search && (
            <Link href={`/blog/${featured.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 cursor-pointer"
                data-testid={`card-blog-featured`}
              >
                <Card className="p-8 md:p-10 hover-elevate bg-gradient-to-br from-primary/5 to-background border-primary/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="text-6xl shrink-0">{featured.coverEmoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">{featured.category}</span>
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Featured</span>
                      </div>
                      <h2 className="font-display font-bold text-2xl md:text-3xl mb-3 leading-snug">{featured.title}</h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{featured.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(featured.date)}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime} min read</span>
                        <span className="flex items-center gap-1 text-primary font-medium">Read article <ArrowRight className="w-3 h-3" /></span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Link>
          )}

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === "All" && !search ? filtered.slice(1) : filtered).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card
                    className="p-6 h-full flex flex-col hover-elevate cursor-pointer transition-all duration-300"
                    data-testid={`card-blog-${post.id}`}
                  >
                    <div className="text-4xl mb-4">{post.coverEmoji}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">{post.category}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" />{post.readTime} min</span>
                    </div>
                    <h3 className="font-semibold text-base leading-snug mb-2 flex-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
                      <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                      <span className="text-xs text-primary font-medium flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No articles found</p>
              <button className="mt-4 text-primary hover:underline text-sm" onClick={() => { setSearch(""); setSelectedCategory("All"); }}>Clear filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
