"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function MicroInteractions() {
  const pathname = usePathname();
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <>
      {/* Page transition overlay */}
      <div
        key={pathname}
        className="fixed inset-0 bg-cyan-400 z-[9998] animate-page-out"
      />

      {/* Main cursor dot - follows mouse immediately */}
      <div
        className={`fixed z-[10000] pointer-events-none transition-opacity duration-150 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-cyan-400/20 rounded-full animate-ping" />
          <div className="w-3 h-3 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </>
  );
}