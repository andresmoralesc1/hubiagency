"use client"

import { usePathname } from "next/navigation"
import { Loader } from "./loader"
import { useEffect, useState } from "react"

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-300 ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <Loader size="lg" />
      </div>
      {children}
    </>
  )
}