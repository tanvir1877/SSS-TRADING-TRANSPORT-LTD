import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6a930e7ff525c0b2361abbc9/b064f3204_Truck_on_UK_motorway_4K_202608291817.jpeg";

const TICKER_ITEMS = [
  "STATUS: OPERATIONAL",
  "COVERAGE: UK-WIDE",
  "COMPLIANCE: DVSA TIER 1",
  "RATING: 5.0 ★ GOOGLE",
  "EST: 2020",
  "FLEET: EURO 6 COMPLIANT",
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMG}
          alt="SSS Trading Transport HGV on UK motorway at dusk"
          className="w-full h-full"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-primary" />
          UK Logistics & Subcontracting
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-foreground text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tighter max-w-5xl"
        >
          The Artery of British Commerce.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-muted-foreground text-lg lg:text-xl max-w-2xl leading-relaxed"
        >
          SSS Trading Transport Ltd engineers seamless, compliant, and scalable
          subcontracting flows for the UK's primary freight networks — overflow,
          dedicated contracts, and spot-hire, delivered with zero margin for error.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="group bg-primary text-primary-foreground font-mono text-sm uppercase tracking-[0.15em] px-8 py-4 min-h-[48px] flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors"
          >
            Discuss Subcontracting Opportunities
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#fleet"
            className="border border-muted-foreground/40 text-foreground font-mono text-sm uppercase tracking-[0.15em] px-8 py-4 min-h-[48px] flex items-center justify-center gap-3 hover:border-primary hover:text-primary transition-colors"
          >
            View Our Fleet
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-border bg-background/80 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap py-3">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground px-8 flex items-center gap-8"
            >
              {item}
              <span className="text-primary">/</span>
            </span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <ChevronDown size={24} className="text-muted-foreground animate-bounce" />
      </motion.div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}