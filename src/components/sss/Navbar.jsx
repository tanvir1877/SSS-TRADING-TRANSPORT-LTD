import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Why Partner", href: "#why-partner" },
  { label: "Fleet", href: "#fleet" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="https://media.base44.com/images/public/6a930e7ff525c0b2361abbc9/f14d41878_Make_logo_background_transparent_202608291849.jpeg"
            alt="SSS Trading Transport Ltd logo"
            className="h-12 w-auto"
          />
          <div className="hidden sm:block leading-none border-l border-border pl-3">
            <div className="font-display font-bold text-foreground text-sm tracking-tight">SSS TRADING TRANSPORT</div>
            <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">LTD · UK</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-[0.15em] bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary/90 transition-colors min-h-[48px] flex items-center"
          >
            Initiate Partnership
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-mono text-sm uppercase tracking-[0.15em] bg-primary text-primary-foreground px-5 py-3 text-center"
            >
              Initiate Partnership
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}