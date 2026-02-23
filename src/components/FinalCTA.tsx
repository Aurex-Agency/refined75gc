import { ScrollReveal } from "@/hooks/use-scroll-animation";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("claim-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <ScrollReveal variant="fade-up">
          <h2 className="text-3xl md:text-4xl text-primary-foreground mb-4">
            Ready to Experience a More Thoughtful Approach?
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={150}>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed font-light mb-8">
            This exclusive $75 new patient gift certificate is the perfect way to
            start the year feeling like yourself again. Claim yours now before this
            limited-time offer ends.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="scale-in" delay={300}>
          <button
            onClick={scrollToForm}
            className="bg-gold hover:bg-gold-hover text-accent-foreground font-semibold px-10 py-4 rounded transition-colors text-base tracking-wide"
          >
            Claim My $75 Gift Certificate
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
