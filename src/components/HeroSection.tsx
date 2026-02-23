import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you! Your $75 Gift Certificate has been claimed. We'll be in touch shortly.");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section id="claim-form" className="grid lg:grid-cols-2 min-h-[600px]">
      {/* Left Column - Image */}
      <div className="relative h-[300px] lg:h-auto overflow-hidden">
        <img
          src={heroImage}
          alt="Refined Aesthetics comfortable and private suite"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay graphic */}
        <div className="absolute bottom-6 left-6 right-6 bg-primary/85 backdrop-blur-sm rounded-lg px-6 py-4 border border-gold/30">
          <p className="text-primary-foreground font-heading text-lg md:text-xl text-center tracking-wide">
            ✦ <span className="text-gold italic">Comfortable</span> and{" "}
            <span className="text-gold italic">Private</span> Suites! ✦
          </p>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="bg-primary p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] leading-tight text-primary-foreground mb-6">
          Botox Isn't the Decision Anymore. Choosing the Right Provider Is.
        </h1>
        <p className="text-primary-foreground/80 font-body text-base md:text-lg mb-8 leading-relaxed font-light">
          Experience a more thoughtful approach to aesthetics. For a limited time,
          new patients are invited to begin their journey with a{" "}
          <span className="text-gold font-semibold">$75 Gift Certificate</span>{" "}
          toward their first treatment.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name *"
            required
            maxLength={100}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Email Address *"
            required
            maxLength={255}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            required
            maxLength={20}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-hover text-accent-foreground font-semibold py-3.5 rounded transition-colors text-base tracking-wide"
          >
            Claim My $75 Certificate Now
          </button>
          <p className="text-primary-foreground/50 text-xs leading-relaxed">
            By submitting, you agree to receive promotional communications. Your
            first visit is required to redeem your gift certificate.
          </p>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
