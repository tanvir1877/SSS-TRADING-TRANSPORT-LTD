import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

const GOOGLE_LINK = "https://share.google/zXo3IOpPXH7YDR69l";

export default function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://media.base44.com/images/public/6a930e7ff525c0b2361abbc9/f14d41878_Make_logo_background_transparent_202608291849.jpeg"
              alt="SSS Trading Transport Ltd logo"
              className="h-16 w-auto mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Family-owned UK logistics and subcontracting partner. Engineering
              seamless, compliant, and scalable transport flows since 2020.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-5">Contact</div>
            <ul className="space-y-4">
              <li>
                <a href="tel:+447974752465" className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <Phone size={16} className="mt-0.5 text-primary shrink-0" />
                  <span className="text-sm">+44 7974 752465</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm">Bagnall St, West Bromwich<br />Birmingham, United Kingdom</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock size={16} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm">24 / 7 Operations</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-5">Navigate</div>
            <ul className="space-y-3">
              <li><a href="#why-partner" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why Partner With Us</a></li>
              <li><a href="#fleet" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Fleet</a></li>
              <li><a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Partnership Inquiry</a></li>
              <li>
                <a href={GOOGLE_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Google Business Profile
                  <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-5">Registration</div>
            <div className="space-y-2 font-mono text-xs text-muted-foreground leading-relaxed">
              <div>SSS TRADING TRANSPORT LTD</div>
              <div>Registered in England & Wales</div>
              <div>Companies House Registered</div>
              <div>Operating Centre: West Bromwich</div>
              <div>DVSA Compliant Fleet</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            © {new Date().getFullYear()} SSS Trading Transport Ltd · All Rights Reserved
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            UK-Wide · 24/7 · 5.0 ★
          </div>
        </div>
      </div>
    </footer>
  );
}