import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { IdentitySection } from "@/components/IdentitySection";
import { AboutSection } from "@/components/AboutSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";
import { AgeGate } from "@/components/AgeGate";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AgeGate />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ManifestoSection />
        <IdentitySection />
        <TrustSection />
        <AboutSection />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
