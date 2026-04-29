"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://web.whatsapp.com/send?phone=573245425387&text=Hi!%20Feel%20free%20to%20message%20me%20here%2C%20or%20book%20a%20quick%20call%20at%3A%0Ahttps%3A%2F%2Fcalendly.com%2Fandresmortal1%2F30min"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 hover:bg-green-400 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:shadow-[0_0_50px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}