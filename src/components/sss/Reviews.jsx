import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const GOOGLE_LINK = "https://share.google/zXo3IOpPXH7YDR69l";

const REVIEWS = [
  {
    author: "Verified Partner",
    text: "Professional, reliable, and always on time. SSS Trading Transport handled our overflow freight seamlessly across the UK network.",
    role: "Logistics Coordinator",
  },
  {
    author: "Verified Client",
    text: "Excellent service from a dependable fleet. Communication was clear and every delivery arrived as scheduled. Highly recommend for subcontracting.",
    role: "Supply Chain Manager",
  },
  {
    author: "Verified Partner",
    text: "Top-tier transport company. Fully compliant, well-maintained vehicles, and drivers who know the UK roads. A genuine asset to our supply chain.",
    role: "Operations Director",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-background border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Verified Logbook
            </div>
            <h2 className="font-display font-bold text-foreground text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight">
              What Our Partners Say.
            </h2>
          </div>
          <a
            href={GOOGLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-border p-5 hover:border-primary transition-colors group min-h-[48px]"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <div>
              <div className="font-display font-bold text-foreground text-lg leading-none">5.0</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                5 Google Reviews
              </div>
            </div>
            <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 lg:p-10 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-1 text-lg">
                "{review.text}"
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="font-display font-bold text-foreground tracking-tight">
                  {review.author}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                  {review.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground text-center"
        >
          Reviews sync dynamically from our Google Business Profile ·{" "}
          <a
            href={GOOGLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View all reviews
          </a>
        </motion.p>
      </div>
    </section>
  );
}