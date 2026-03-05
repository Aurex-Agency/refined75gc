import { lazy, Suspense } from "react";
import TopBar from "@/components/TopBar";
import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";

// Lazy-load below-fold sections for faster initial paint
const EmpathySection = lazy(() => import("@/components/EmpathySection"));
const AuthoritySection = lazy(() => import("@/components/AuthoritySection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <main className="min-h-screen">
      <TopBar />
      <StickyNav />
      <HeroSection />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <EmpathySection />
        <AuthoritySection />
        <TestimonialsSection />
        <ProcessSection />
        <FinalCTA />
        <FAQSection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
