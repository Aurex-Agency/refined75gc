import { Phone, Instagram, Facebook } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary brand-pattern py-2 px-4 overflow-hidden">
    <div className="container mx-auto flex items-center justify-between text-sm">
      <a
        href="tel:7037945689"
        className="flex items-center gap-2 text-primary-foreground font-medium tracking-wide hover:text-gold transition-colors"
      >
        <Phone className="w-3.5 h-3.5" />
        Call Now: (703) 794-5689
      </a>
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/refinedaestheticsmedspa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground hover:text-gold transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="https://www.facebook.com/refinedaestheticsmedspa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground hover:text-gold transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
