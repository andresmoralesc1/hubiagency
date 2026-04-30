"use client"

interface LoaderProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Loader({ size = "md", className = "" }: LoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8 border-2",
    md: "w-12 h-12 border-2",
    lg: "w-16 h-16 border-3"
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full border-cyan-400/30 border-t-cyan-400 animate-spin`} style={{ boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }} />
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <Loader size="lg" />
    </div>
  )
}

export function InlineLoader({ size = "sm", className = "" }: LoaderProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Loader size={size} />
    </div>
  )
}