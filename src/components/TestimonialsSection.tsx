import { Star } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    quote:
      "Incredibly knowledgeable, professional and skilled. Ability to provide a younger, natural look. The entire office makes for an excellent client experience.",
    author: "Audrey Baker",
  },
  {
    quote:
      "Sarah is wonderful! She is honest and will let you know if something is needed and when it isn't. I always value her honesty. I trust her and continue to be happy year after year!",
    author: "Kelli Holmes",
  },
  {
    quote:
      "Absolutely love Jackie - she is knowledgeable, personable, and always provides a detailed plan of action without overdoing it!",
    author: "Suzanne Malarcher",
  },
];

const TestimonialsSection = () => (
  <section className="bg-light-grey py-20 px-4">
    <div className="container mx-auto">
      <ScrollReveal variant="fade-up">
        <h2 className="text-3xl md:text-4xl text-primary text-center mb-4">
          What Our Patients Are Saying...
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-14" />
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} variant="scale-in" delay={i * 150}>
            <div className="bg-background rounded shadow-sm p-8 flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </blockquote>
              <p className="mt-6 font-heading text-primary font-semibold text-sm">
                — {t.author}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
