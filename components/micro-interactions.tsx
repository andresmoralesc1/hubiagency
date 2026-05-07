"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export function MicroInteractions() {
  const pathname = usePathname();
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isPageEntering, setIsPageEntering] = useState(false);
  const followerRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const previousPathname = useRef(pathname);

  // Page transition: trigger enter animation on mount
  useEffect(() => {
    setIsPageEntering(true);
    const timer = setTimeout(() => setIsPageEntering(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Cursor logic
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  // Smooth follower with RAF
  useEffect(() => {
    if (prefersReducedMotion) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      followerRef.current.x = lerp(followerRef.current.x, cursorPos.x, 0.12);
      followerRef.current.y = lerp(followerRef.current.y, cursorPos.y, 0.12);
      setFollowerPos({ ...followerRef.current });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [cursorPos.x, cursorPos.y, prefersReducedMotion]);

  // Detect clickable elements
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      setIsHoveringClickable(!!isClickable);

      // Add magnetic effect
      const magnetic = target.closest('[data-magnetic]');
      if (magnetic) {
        const rect = (magnetic as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        (magnetic as HTMLElement).style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const magnetic = target.closest('[data-magnetic]');
      if (magnetic) {
        (magnetic as HTMLElement).style.transform = "";
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [prefersReducedMotion]);

  // Hide cursor on mobile/touch
  useEffect(() => {
    const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice()) return;
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <>
      {/* Page transition - OUT (old page slides out) */}
      {previousPathname.current !== pathname && (
        <div className="fixed inset-0 bg-cyan-500 z-[9998] animate-page-out pointer-events-none" />
      )}
      {/* Page transition - IN (new page slides in) */}
      {isPageEntering && (
        <div className="fixed inset-0 bg-cyan-500 z-[9998] animate-page-in pointer-events-none" />
      )}

      {/* Cursor follower - outer ring */}
      <div
        className={`fixed z-[10000] pointer-events-none transition-all duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: followerPos.x,
          top: followerPos.y,
          transform: `translate(-50%, -50%) scale(${isHoveringClickable ? 1.8 : 1})`,
        }}
      >
        <div className={`relative transition-all duration-200 ${isHoveringClickable ? "w-12 h-12" : "w-8 h-8"}`}>
          <div className={`absolute inset-0 border-2 rounded-full transition-all duration-200 ${isHoveringClickable ? "border-cyan-400/60" : "border-cyan-400/30"}`} />
          <div className="absolute -inset-3 bg-cyan-400/5 rounded-full" />
        </div>
      </div>

      {/* Cursor dot - center */}
      <div
        className={`fixed z-[10001] pointer-events-none transition-all duration-100 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className={`bg-cyan-400 rounded-full transition-all duration-200 ${isHoveringClickable ? "w-2 h-2" : "w-2.5 h-2.5"}`} />
      </div>

          </>
  );
}

// Hook for scroll-triggered animations
export function useScrollReveal(options?: { threshold?: number; rootMargin?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: options?.threshold ?? 0.1, rootMargin: options?.rootMargin ?? "0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return { ref, isVisible };
}

// Magnetic button wrapper
export function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div data-magnetic className={`inline-block ${className}`}>
      {children}
    </div>
  );
}

// Ripple effect hook
export function useRipple(color = "rgba(0, 212, 255, 0.3)") {
  const createRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: ${color};
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
      width: 100px;
      height: 100px;
      left: ${x - 50}px;
      top: ${y - 50}px;
    `;

    button.style.position = "relative";
    button.style.overflow = "hidden";
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }, [color]);

  return createRipple;
}