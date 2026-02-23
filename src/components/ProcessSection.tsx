import { FileText, CalendarCheck, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: FileText,
    step: "Step 1",
    title: "Claim Your Certificate",
    description:
      "Fill out the form on this page to instantly receive your $75 new patient gift certificate.",
  },
  {
    icon: CalendarCheck,
    step: "Step 2",
    title: "Book Your Consultation",
    description:
      "Our patient care coordinator will contact you to schedule a complimentary, no-pressure consultation.",
  },
  {
    icon: Sparkles,
    step: "Step 3",
    title: "Experience the Artistry",
    description:
      "Meet with one of our expert injectors to discuss your goals and apply your $75 certificate toward your personalized treatment.",
  },
];

const ProcessSection = () => (
  <section className="bg-background py-20 px-4">
    <div className="container mx-auto">
      <ScrollReveal variant="fade-up">
        <h2 className="text-3xl md:text-4xl text-primary text-center mb-4">
          Your Journey to a More Refreshed You in 3 Simple Steps.
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-14" />
      </ScrollReveal>

      <div className="relative max-w-4xl mx-auto">
        <div className="hidden md:block absolute top-8 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-px bg-gold/40 z-0" />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} variant="fade-up" delay={i * 200}>
              <div className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-5 relative z-10">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-1">
                  {s.step}
                </p>
                <h3 className="font-heading text-lg text-primary font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
