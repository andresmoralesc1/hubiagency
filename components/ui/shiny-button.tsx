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
    ? "border-2 border-cyan-400 text-cyan-400 bg-cyan-500/40 hover:bg-cyan-500 hover:text-black font-bold hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]"
    : "bg-cyan-500 text-black hover:bg-cyan-400 active:bg-cyan-300 active:shadow-[0_0_20px_rgba(0,212,255,0.5)] hover:shadow-[0_0_50px_rgba(0,212,255,1)]"

  const classes = `inline-flex items-center justify-center px-8 py-3 font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 ${baseClasses} ${className}`

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