import { ArrowUpRight, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  {
    title: "Designing Scalable Payout Systems",
    excerpt: "How to architect financial settlement workflows that handle thousands of merchant payouts daily with idempotency and fault tolerance.",
    readTime: "8 min read",
    tag: "System Design",
    date: "Jan 2025",
  },
  {
    title: "Handling Concurrency in Payment Workflows",
    excerpt: "Strategies for managing race conditions, distributed locks, and optimistic concurrency in high-throughput payment processing.",
    readTime: "6 min read",
    tag: "Backend",
    date: "Dec 2024",
  },
  {
    title: "Building Reliable Schedulers with Quartz",
    excerpt: "Implementing retry logic, job recovery, and monitoring for mission-critical batch processing systems.",
    readTime: "5 min read",
    tag: "Infrastructure",
    date: "Nov 2024",
  },
];

const BlogSection = () => (
  <section id="blog" className="section-padding relative">
    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <div className="flex items-baseline gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            From The Desk
          </p>
          <span className="text-xs text-muted-foreground">Thoughts & writings</span>
        </div>
      </ScrollReveal>

      <div className="space-y-0 divide-y divide-border/30">
        {posts.map((post, i) => (
          <ScrollReveal key={post.title} direction="up" delay={i * 0.08}>
            <article className="group py-8 cursor-pointer flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="flex items-center gap-3 md:w-40 shrink-0">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>

              <div className="flex-1">
                <div className="mb-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">
                    {post.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {post.title}
                  <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
