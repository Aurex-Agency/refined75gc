import { Award, Clock, Heart } from "lucide-react";
import teamImage from "@/assets/injection-team.webp";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const credentials = [
  {
    icon: Award,
    title: "Industry Leaders & Educators",
    description:
      "Our team spends years mastering advanced aesthetic procedures and intricate facial anatomy. We are respected leaders in the industry who train, consult, and mentor other providers — all so you receive outstanding care.",
  },
  {
    icon: Clock,
    title: "Decades of Combined Experience",
    description:
      "Founded by Sarah Safa, MS, PAC — a national instructor with over 20 years in plastic and reconstructive surgery. Her extensive knowledge of facial anatomy and expertise in restoring harmony, symmetry, and balance is unmatched.",
  },
  {
    icon: Heart,
    title: "A Commitment to Natural Results",
    description:
      "Our philosophy is to enhance, not alter. We specialize in precision and artistry for results that are beautifully and authentically you.",
  },
];

const AuthoritySection = () => (
  <section className="bg-background py-20 px-4">
    <div className="container mx-auto">
      <ScrollReveal variant="fade-up">
        <h2 className="text-3xl md:text-4xl text-primary text-center mb-4">
          Your Face Deserves an Artist, Not Just an Injector.
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-14" />
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <ScrollReveal variant="fade-left" delay={100}>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={teamImage}
                alt="Our professional injection team at Refined Aesthetics"
                className="rounded shadow-xl w-full max-w-sm object-cover"
                loading="lazy"
                decoding="async"
                width={400}
                height={500}
              />
              <div className="mt-4 text-center">
                <p className="font-heading text-lg text-primary font-semibold">
                  Our Professional Injection Team
                </p>
                <p className="text-muted-foreground text-sm">Expert Care, Beautiful Results</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {credentials.map((cred, i) => (
            <ScrollReveal key={cred.title} variant="fade-right" delay={150 + i * 150}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <cred.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-primary font-semibold mb-1">
                    {cred.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
