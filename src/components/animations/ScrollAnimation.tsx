"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "reveal";
  delay?: number;
  duration?: number;
  scrub?: boolean | number;
  start?: string;
  end?: string;
  markers?: boolean;
}

export default function ScrollAnimation({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  scrub = false,
  start = "top 85%",
  end = "bottom 20%",
  markers = false,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animations: Record<string, gsap.TweenVars> = {
      fadeUp: { opacity: 0, y: 60 },
      fadeIn: { opacity: 0 },
      slideLeft: { opacity: 0, x: -60 },
      slideRight: { opacity: 0, x: 60 },
      scale: { opacity: 0, scale: 0.8 },
      reveal: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    };

    const fromVars = animations[animation];

    const tween = gsap.fromTo(
      el,
      fromVars,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        clipPath: "inset(0% 0 0 0)",
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub,
          markers,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [animation, delay, duration, scrub, start, end, markers]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Text reveal animation component
export function TextReveal({
  children,
  className = "",
  type = "words",
  stagger = 0.05,
}: {
  children: string;
  className?: string;
  type?: "words" | "chars" | "lines";
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const splitText = () => {
      if (type === "words") {
        return children.split(" ").map((word, i) => (
          `<span class="inline-block overflow-hidden">
            <span class="inline-block word-${i}">${word}</span>
          </span>`
        )).join(" ");
      }
      return children;
    };

    el.innerHTML = splitText();

    const words = el.querySelectorAll('[class*="word-"]');
    
    gsap.fromTo(
      words,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [children, type, stagger]);

  return <div ref={ref} className={className} />;
}

// Parallax wrapper
export function Parallax({
  children,
  className = "",
  speed = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      y: () => window.innerHeight * speed * 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [speed]);

  return <div ref={ref} className={className}>{children}</div>;
}
