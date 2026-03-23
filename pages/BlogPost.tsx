import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, User, Tag, Share2 } from "lucide-react";
import { blogPosts, type ContentBlock } from "@/data/blog";
import { useSeo } from "@/hooks/use-seo";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="font-display font-bold text-2xl mt-10 mb-4 text-foreground">{block.text}</h2>;
    case "h3":
      return <h3 className="font-semibold text-xl mt-8 mb-3 text-foreground">{block.text}</h3>;
    case "p":
      return <p className="text-muted-foreground leading-relaxed mb-5 text-base">{block.text}</p>;
    case "ul":
      return (
        <ul className="space-y-2 mb-6 pl-2">
          {block.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground text-base leading-relaxed">
              <span className="text-primary mt-1 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-3 mb-6 pl-2">
          {block.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground text-base leading-relaxed">
              <span className="text-primary font-bold shrink-0 w-5">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-primary/5 rounded-r-xl pr-6">
          <p className="text-foreground font-medium italic leading-relaxed mb-2">"{block.text}"</p>
          {block.author && <cite className="text-sm text-muted-foreground not-italic">— {block.author}</cite>}
        </blockquote>
      );
    case "cta":
      return (
        <div className="my-10 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 text-center">
          <p className="font-semibold text-foreground mb-4">{block.text}</p>
          <a href={block.link} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 gap-2">
              {block.buttonText}
            </Button>
          </a>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  useSeo({
    title: post?.metaTitle || "Blog | PhyFix",
    description: post?.metaDescription,
    keywords: post?.tags.join(", "),
    canonical: post ? `https://phyfix.com/blog/${post.slug}` : undefined,
    ogTitle: post?.title,
    ogDescription: post?.excerpt,
  });

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-bold">Article not found</p>
        <Link href="/blog"><Button variant="outline">← Back to Blog</Button></Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(t => post.tags.includes(t)))).slice(0, 3);

  return (
    <div className="bg-background">

      {/* Back */}
      <div className="container px-4 mx-auto max-w-3xl pt-8">
        <Link href="/blog">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6" data-testid="link-back-blog">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </Link>
      </div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container px-4 mx-auto max-w-3xl pb-10 border-b border-border/40"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">{post.category}</span>
        </div>

        <div className="text-5xl mb-6">{post.coverEmoji}</div>

        <h1 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6 text-foreground">
          {post.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>

        <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDate(post.date)}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime} min read</span>
        </div>
      </motion.header>

      {/* Article Body */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="container px-4 mx-auto max-w-3xl py-10"
      >
        {post.content.map((block, i) => (
          <RenderBlock key={i} block={block} />
        ))}
      </motion.article>

      {/* Tags */}
      <div className="container px-4 mx-auto max-w-3xl pb-10">
        <div className="flex flex-wrap gap-2 pt-6 border-t border-border/40">
          <Tag className="w-4 h-4 text-muted-foreground mt-0.5" />
          {post.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">{tag}</span>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-muted/30 border-t border-border/40 py-12">
          <div className="container px-4 mx-auto max-w-5xl">
            <h2 className="font-display font-bold text-2xl mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPosts.map(p => (
                <Link key={p.id} href={`/blog/${p.slug}`}>
                  <div className="bg-background rounded-xl p-5 border border-border hover:border-primary/40 hover:shadow-md transition-all cursor-pointer" data-testid={`card-related-${p.id}`}>
                    <div className="text-3xl mb-3">{p.coverEmoji}</div>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">{p.category}</span>
                    <h3 className="font-semibold text-sm mt-2 leading-snug">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><Clock className="w-3 h-3" />{p.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <div className="py-14 bg-background">
        <div className="container px-4 mx-auto max-w-2xl text-center">
          <p className="text-xl font-semibold mb-2">Ready to take your studies further?</p>
          <p className="text-muted-foreground mb-6">Our expert tutors offer personalized 1-on-1 sessions for every board and subject.</p>
          <a href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-10">
              Book a Free Demo Session
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
