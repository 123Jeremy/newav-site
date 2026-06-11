import { PromoBar } from "@/components/landing/PromoBar";
import { Navbar } from "@/components/landing/Navbar";
import { HeroCarousel } from "@/components/landing/HeroCarousel";
import { FeatureCards } from "@/components/landing/FeatureCards";
import { KeyStats } from "@/components/landing/KeyStats";
import { DesignSection } from "@/components/landing/DesignSection";
import { InteriorSection } from "@/components/landing/InteriorSection";
import { SafetySection } from "@/components/landing/SafetySection";
import { LifestyleSection } from "@/components/landing/LifestyleSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-anthracite"
      >
        Aller au contenu principal
      </a>

      <PromoBar />
      <Navbar />

      <main id="contenu-principal">
        <div className="snap-container">
          <HeroCarousel />
          <FeatureCards />
          <KeyStats />
          <DesignSection />
          <InteriorSection />
          <SafetySection />
          <LifestyleSection />
          <CtaSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
