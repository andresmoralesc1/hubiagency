"use client"

interface LoaderProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Loader({ size = "md", className = "" }: LoaderProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32"
  }

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5"
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * 360
          const x = 50 + 40 * Math.sin((angle * Math.PI) / 180)
          const y = 50 + 40 * Math.cos((angle * Math.PI) / 180)
          return (
            <div
              key={i}
              className={`absolute ${dotSizes[size]} bg-cyan-400 rounded-full animate-pulse-glow`}
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -50%)",
                animationDelay: `${i * 0.15}s`,
                boxShadow: "0 0 15px rgba(0, 212, 255, 0.8)"
              }}
            />
          )
        })}
      </div>
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