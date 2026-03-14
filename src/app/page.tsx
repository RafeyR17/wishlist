import { Navbar } from "@/components/Navbar";
import { LampDemo } from "@/components/LampDemo";
import { SocialProofBar } from "@/components/SocialProofBar";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorks } from "@/components/HowItWorks";
import { WidgetPreview } from "@/components/WidgetPreview";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { PricingPreview } from "@/components/PricingPreview";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy selection:bg-brand-accent/30 selection:text-brand-accent">
      <Navbar />
      <LampDemo />
      <SocialProofBar />
      <ProblemSection />
      <HowItWorks />
      <WidgetPreview />
      <FeaturesGrid />
      <PricingPreview />
      <FinalCTA />
      <Footer />
    </main>
  );
}

