import { useEffect, useRef, useState } from "react";

type AnimationVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in";

interface UseScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  variant?: AnimationVariant;
}

export const useScrollAnimation = ({
  threshold = 0.15,
  delay = 0,
  variant = "fade-up",
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  const baseStyles: React.CSSProperties = {
    transition: "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const hiddenStyles: Record<AnimationVariant, React.CSSProperties> = {
    "fade-up": { opacity: 0, transform: "translateY(40px)" },
    "fade-in": { opacity: 0 },
    "fade-left": { opacity: 0, transform: "translateX(-40px)" },
    "fade-right": { opacity: 0, transform: "translateX(40px)" },
    "scale-in": { opacity: 0, transform: "scale(0.95)" },
  };

  const visibleStyles: React.CSSProperties = {
    opacity: 1,
    transform: "translateY(0) translateX(0) scale(1)",
  };

  return {
    ref,
    style: {
      ...baseStyles,
      ...(isVisible ? visibleStyles : hiddenStyles[variant]),
    },
  };
};

/**
 * Wrapper component for scroll animations
 */
export const ScrollReveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  threshold = 0.15,
  className = "",
}: {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  threshold?: number;
  className?: string;
}) => {
  const { ref, style } = useScrollAnimation({ variant, delay, threshold });

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};
