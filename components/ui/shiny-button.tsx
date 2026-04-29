"use client";

import type React from "react";
import Link from "next/link";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "default" | "outline";
}

export function ShinyButton({ children, onClick, href, className = "", variant = "default" }: ShinyButtonProps) {
  const baseStyles = variant === "outline"
    ? "border border-cyan-500/50 text-cyan-400 bg-transparent hover:bg-cyan-500/10 hover:border-cyan-400"
    : "bg-cyan-500 text-black hover:bg-cyan-400 border border-cyan-400";

  const classes = `inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95 ${baseStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}