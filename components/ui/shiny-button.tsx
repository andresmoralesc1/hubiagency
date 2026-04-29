"use client"

import type React from "react"
import Link from "next/link"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  variant?: "default" | "outline"
}

export function ShinyButton({ children, onClick, href, className = "", variant = "default" }: ShinyButtonProps) {
  const baseClasses = variant === "outline"
    ? "border border-cyan-500/50 text-cyan-400 bg-black/50 hover:bg-cyan-500/10 hover:border-cyan-400"
    : "bg-cyan-500 text-black hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.8)] active:bg-cyan-400"

  const classes = `inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${baseClasses} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}