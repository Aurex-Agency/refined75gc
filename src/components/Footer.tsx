import { Phone, MapPin, Clock } from "lucide-react";
import raIcon from "@/assets/ra-icon-transparent.png";

const Footer = () => (
  <footer className="bg-primary py-14 px-4 overflow-hidden">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-10 text-primary-foreground/80 text-sm">
        {/* Brand */}
        <div>
          <img
            src={raIcon}
            alt="Refined Aesthetics"
            className="h-20 w-auto mb-4 drop-shadow-[0_2px_16px_rgba(201,169,110,0.5)]"
            loading="lazy"
            decoding="async"
            width={80}
            height={80}
          />
          <p className="leading-relaxed">
            A more thoughtful approach to medical aesthetics in Leesburg, Virginia.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
            <p>108 Church St., Suite B, SE<br />Leesburg, VA 20175</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gold flex-shrink-0" />
            <a href="tel:7037945689" className="hover:text-gold transition-colors">
              (703) 794-5689
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
            <div>
              <p>Mon–Fri: 9:00 AM – 5:00 PM</p>
              <p>Sat–Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-2">
          <a href="#" className="block hover:text-gold transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="block hover:text-gold transition-colors">
            Terms of Service
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/50 text-xs">
        © 2024 Refined Aesthetics. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
