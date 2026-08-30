import Navbar from "@/components/sss/Navbar";
import Hero from "@/components/sss/Hero";
import WhyPartner from "@/components/sss/WhyPartner";
import Fleet from "@/components/sss/Fleet";
import Reviews from "@/components/sss/Reviews";
import ContactSection from "@/components/sss/ContactSection";
import SiteFooter from "@/components/sss/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhyPartner />
        <Fleet />
        <Reviews />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}