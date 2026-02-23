import { useState, useEffect } from "react";

const StickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`bg-background py-4 px-4 transition-shadow duration-300 z-50 ${
        isSticky ? "fixed top-0 left-0 right-0 shadow-md" : "relative"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-heading text-xl md:text-2xl font-semibold text-primary tracking-wide">
          Refined <span className="text-gold italic">Aesthetics</span>
        </div>
        <button
          onClick={scrollToForm}
          className="bg-gold hover:bg-gold-hover text-accent-foreground font-semibold text-sm md:text-base px-5 py-2.5 rounded transition-colors tracking-wide"
        >
          Claim Your $75 Gift Certificate
        </button>
      </div>
    </nav>
  );
};

export default StickyNav;
