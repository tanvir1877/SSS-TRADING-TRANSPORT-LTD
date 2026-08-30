import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
    freight_volume: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.company_name || !form.phone || !form.freight_volume) {
      setError("Please fill in all required fields.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      await base44.functions.invoke("submitInquiry", form);
      setStatus("success");
      setForm({ name: "", company_name: "", email: "", phone: "", freight_volume: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  const FIELDS = [
    { name: "name", label: "Contact Name", type: "text", required: true, placeholder: "John Smith" },
    { name: "company_name", label: "Company Name", type: "text", required: true, placeholder: "Acme Freight Ltd" },
    { name: "email", label: "Email Address", type: "email", required: false, placeholder: "john@acme.co.uk" },
    { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "+44 7xxx xxxxxx" },
  ];

  return (
    <section id="contact" className="bg-card border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
          {/* Left — vertical typography */}
          <div className="bg-card p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Conversion Terminal
              </div>
              <h2 className="font-display font-bold text-foreground text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter">
                Partnership Inquiry.
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
                Tell us about your freight requirements. Whether you need spot-hire
                surge capacity or a dedicated long-term subcontracting partner, our
                team will respond within one business day.
              </p>
            </div>

            <div className="mt-12 space-y-px bg-border border border-border">
              <div className="bg-card p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Direct Line
                </div>
                <a href="tel:+447974752465" className="font-display font-bold text-foreground text-lg hover:text-primary transition-colors">
                  +44 7974 752465
                </a>
              </div>
              <div className="bg-card p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Operating Centre
                </div>
                <div className="font-display font-bold text-foreground text-lg">
                  West Bromwich · Birmingham, UK
                </div>
              </div>
              <div className="bg-card p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Hours
                </div>
                <div className="font-display font-bold text-foreground text-lg">
                  24 / 7 Operations
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-background p-8 lg:p-12">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <CheckCircle2 size={64} className="text-primary mb-6" />
                <h3 className="font-display font-bold text-foreground text-2xl mb-3 tracking-tight">
                  Inquiry Received.
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Your partnership request has been logged. Our team will contact you
                  within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-primary hover:underline"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {FIELDS.map((field) => (
                    <div key={field.name} className="flex flex-col">
                      <label
                        htmlFor={field.name}
                        className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2"
                      >
                        {field.label}
                        {field.required && <span className="text-primary">*</span>}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors min-h-[48px]"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="freight_volume"
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2"
                  >
                    Freight Volume / Requirements<span className="text-primary">*</span>
                  </label>
                  <input
                    id="freight_volume"
                    name="freight_volume"
                    type="text"
                    required
                    value={form.freight_volume}
                    onChange={handleChange}
                    placeholder="e.g. 5 loads/week, palletised, UK-wide"
                    className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors min-h-[48px]"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Routes, contract type, timelines..."
                    className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-destructive">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-primary-foreground font-mono text-sm uppercase tracking-[0.15em] px-8 py-4 min-h-[48px] flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}