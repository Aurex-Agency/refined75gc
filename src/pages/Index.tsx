import TopBar from "@/components/TopBar";
import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import AuthoritySection from "@/components/AuthoritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import FinalCTA from "@/components/FinalCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <TopBar />
      <StickyNav />
      <HeroSection />
      <EmpathySection />
      <AuthoritySection />
      <TestimonialsSection />
      <ProcessSection />
      <FinalCTA />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
