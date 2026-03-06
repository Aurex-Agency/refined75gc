import { useEffect } from "react";
import heroImage400 from "@/assets/hero-image-400w.webp";
import heroImage800 from "@/assets/hero-image-800w.webp";
import heroImage1200 from "@/assets/hero-image-1200w.webp";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  useEffect(() => {
    // Defer GHL script to after page is interactive
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://link.alphacrm.io/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    };
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(loadScript);
    } else {
      setTimeout(loadScript, 2000);
    }
  }, []);

  return (
    <section id="claim-form" className="grid lg:grid-cols-2 min-h-[600px]">
      {/* Left Column - Image */}
      <div className="relative h-[300px] lg:h-auto overflow-hidden">
        <img
          src={heroImage}
          alt="Refined Aesthetics comfortable and private suite"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={800}
          height={600}
          decoding="async"
        />
        <ScrollReveal variant="fade-up" delay={600}>
          <div className="absolute bottom-6 left-6 right-6 bg-primary/85 backdrop-blur-sm rounded-lg px-6 py-4 border border-gold/30">
            <p className="text-primary-foreground font-heading text-lg md:text-xl text-center tracking-wide">
              ✦ <span className="text-gold italic">Comfortable</span> and{" "}
              <span className="text-gold italic">Private</span> Suites! ✦
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Right Column - GHL Form */}
      <div className="bg-primary brand-pattern overflow-hidden p-4 md:p-12 lg:p-16 flex flex-col justify-center">
        <ScrollReveal variant="fade-up" delay={200}>
          <h1 className="text-2xl md:text-4xl lg:text-[2.6rem] leading-tight text-primary-foreground mb-4 md:mb-6">
            Botox Isn't the Decision Anymore. Choosing the Right Provider Is.
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={350}>
          <p className="text-primary-foreground/80 font-body text-sm md:text-lg mb-4 md:mb-8 leading-relaxed font-light">
            Experience a more thoughtful approach to aesthetics. For a limited time,
            new patients are invited to begin their journey with a{" "}
            <span className="text-gold font-semibold">$75 Gift Certificate</span>{" "}
            toward their first treatment.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={500}>
          <div className="min-h-[600px]">
            <iframe
              src="https://link.alphacrm.io/widget/form/uH6PlwY1z91nfhmaCfjN"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
              className="min-h-[700px] md:min-h-[600px]"
              id="inline-uH6PlwY1z91nfhmaCfjN"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="$75 OFF New LP 75gc"
              data-height="600"
              data-layout-iframe-id="inline-uH6PlwY1z91nfhmaCfjN"
              data-form-id="uH6PlwY1z91nfhmaCfjN"
              title="$75 OFF New LP 75gc"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
