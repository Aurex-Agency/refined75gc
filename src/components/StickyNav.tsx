import { useState, useEffect } from "react";
import raLogoNav from "@/assets/ra-logo-nav.jpg";

const StickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Spacer to prevent content jump */}
      <div className="h-[72px] md:h-[80px]" />
      <nav
        className={`fixed top-0 left-0 right-0 bg-background py-4 px-4 transition-shadow duration-300 z-50 ${
          isSticky ? "shadow-md" : ""
        }`}
      >
      <div className="container mx-auto flex items-center justify-between">
        <img src={raLogoNav} alt="Refined Aesthetics" className="h-12 md:h-14 w-auto" />
        <button
          onClick={scrollToForm}
          className="bg-gold hover:bg-gold-hover text-accent-foreground font-semibold text-xs md:text-base px-3 md:px-5 py-2 md:py-2.5 rounded transition-colors tracking-wide whitespace-nowrap"
        >
          <span className="hidden md:inline">Claim Your $75 Gift Certificate</span>
          <span className="md:hidden">Claim $75 Gift</span>
        </button>
      </div>
      </nav>
    </>
  );
};

export default StickyNav;
