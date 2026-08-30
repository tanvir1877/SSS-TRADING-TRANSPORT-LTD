import { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const FLEET_IMAGES = [
  {
    src: "https://media.base44.com/images/public/6a930e7ff525c0b2361abbc9/b064f3204_Truck_on_UK_motorway_4K_202608291817.jpeg",
    alt: "SSS Trading Transport white Scania HGV on UK motorway at dusk",
    spec: "Scania · 44T · Euro 6 · GPS Tracked",
    label: "Motorway Operations",
  },
  {
    src: "https://media.base44.com/images/public/6a930e7ff525c0b2361abbc9/a8a9ab6bf_image.png",
    alt: "Two white Scania R450 trucks parked at BHX8 distribution terminal",
    spec: "Scania R450 · BHX8 Hub · 24/7 Operations",
    label: "Distribution Terminal · BHX8",
  },
  {
    src: "https://media.base44.com/images/public/6a930e7ff525c0b2361abbc9/a69f7587e_generated_image.png",
    alt: "SSS Trading Transport orange Volvo Globetrotter on UK motorway highway",
    spec: "Volvo Globetrotter · A26 SSS · UK-Wide Coverage",
    label: "Highway Network",
  },
  {
    src: "https://media.base44.com/images/public/6a930e7ff525c0b2361abbc9/25a69a43c_Adjust_picture_angle_4K_202608291844.jpeg",
    alt: "SSS Trading Transport white Scania R450 truck cab at twilight",
    spec: "Scania R450 · B26 SSS · V8 Super",
    label: "Scania R450",
  },
];

export default function Fleet() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section id="fleet" className="bg-card border-t border-border">
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
              The Asset
            </div>
            <h2 className="font-display font-bold text-foreground text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight">
              The Tools of Distribution.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Our fleet is a high-performance extension of your brand. Every mile is
            tracked, every load is secured, and every arrival is guaranteed — across
            the full UK network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {FLEET_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              className="relative aspect-[4/5] overflow-hidden bg-background group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
                  {String(i + 1).padStart(2, "0")} / {String(FLEET_IMAGES.length).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {activeIdx === i ? "● LIVE" : "○"}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-display font-bold text-foreground text-lg tracking-tight mb-1">
                  {img.label}
                </div>
                <div
                  className={`font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground overflow-hidden transition-all duration-500 ${
                    activeIdx === i ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {img.spec}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border"
        >
          {[
            { stat: "44T", label: "Max Load Capacity" },
            { stat: "Euro 6", label: "Emissions Compliant" },
            { stat: "24/7", label: "Operational Window" },
            { stat: "UK-Wide", label: "Coverage Network" },
          ].map((item) => (
            <div key={item.label} className="bg-background p-6 lg:p-8">
              <div className="font-display font-bold text-primary text-3xl lg:text-4xl tracking-tight mb-1">
                {item.stat}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}