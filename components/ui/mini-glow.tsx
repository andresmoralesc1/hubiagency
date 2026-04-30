"use client";

import { useEffect, useRef } from "react";

interface MiniGlowProps {
  cellCount?: number;
  color?: string;
  opacityMin?: number;
  opacityMax?: number;
}

export default function MiniGlow({
  cellCount = 15,
  color = "hsl(180, 100%, 60%)",
  opacityMin = 0.1,
  opacityMax = 0.5,
}: MiniGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const cells: HTMLDivElement[] = [];
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement("div");
      cell.style.position = "absolute";
      cell.style.width = "4px";
      cell.style.height = "4px";
      cell.style.borderRadius = "50%";
      cell.style.backgroundColor = color;
      cell.style.opacity = String(opacityMin);

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      cell.style.left = `${x}%`;
      cell.style.top = `${y}%`;
      cell.style.transform = "translate(-50%, -50%)";

      const delay = Math.random() * 4;
      const duration = 2 + Math.random() * 3;
      cell.style.animation = `mini-glow-pulse ${duration}s ease-in-out infinite`;
      cell.style.animationDelay = `${delay}s`;

      cells.push(cell);
      container.appendChild(cell);
    }

    const style = document.createElement("style");
    style.textContent = `
      @keyframes mini-glow-pulse {
        0%, 100% { opacity: ${opacityMin}; box-shadow: 0 0 5px ${color}30; }
        50% { opacity: ${opacityMax}; box-shadow: 0 0 15px ${color}80; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      cells.forEach(cell => cell.remove());
      style.remove();
    };
  }, [cellCount, color, opacityMin, opacityMax]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
}