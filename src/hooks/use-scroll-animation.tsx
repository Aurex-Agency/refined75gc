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
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return {
    ref,
    className: `scroll-reveal scroll-reveal--${variant}${isVisible ? " scroll-reveal--visible" : ""}`,
  };
};

/**
 * Wrapper component for scroll animations — uses CSS class toggle for composited animations
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
  const anim = useScrollAnimation({ variant, delay, threshold });

  return (
    <div ref={anim.ref} className={`${anim.className} ${className}`}>
      {children}
    </div>
  );
};
