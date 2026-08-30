import { motion } from "framer-motion";
import { Clock, ShieldCheck, Layers } from "lucide-react";

const PILLARS = [
  {
    icon: Clock,
    label: "01 / Kinetic Precision",
    title: "Reliability & Punctuality",
    body: "Beyond punctuality. We operate on a zero-margin-for-error schedule, ensuring your overflow becomes our priority. Tight B2B deadlines met, every mile, every time.",
  },
  {
    icon: ShieldCheck,
    label: "02 / Regulatory Rigor",
    title: "Fully Compliant Fleet",
    body: "Fully compliant, DVSA-aligned fleet maintenance. We don't just meet standards — we set the benchmark for subcontracting safety across the UK road network.",
  },
  {
    icon: Layers,
    label: "03 / Elastic Scalability",
    title: "Scalable Subcontracting",
    body: "From spot-hire surges to dedicated long-term contracts, our fleet integrates into your supply chain like a native asset. Scale up or down without friction.",
  },
];

export default function WhyPartner() {
  return (
    <section id="why-partner" className="bg-background border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20"
        >
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            The Engine
          </div>
          <h2 className="font-display font-bold text-foreground text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight max-w-3xl">
            Why Partner With Us?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 border-t border-l border-border">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-r border-b border-border p-8 lg:p-12 group hover:bg-card/50 transition-colors"
            >
              <div className="w-14 h-14 border border-border flex items-center justify-center mb-8 group-hover:border-primary transition-colors">
                <pillar.icon size={26} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
                {pillar.label}
              </div>
              <h3 className="font-display font-bold text-foreground text-2xl mb-4 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}