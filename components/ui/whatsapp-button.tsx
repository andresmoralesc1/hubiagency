"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Expanded menu */}
      {isOpen && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-xl animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm font-medium">¿Necesitas ayuda?</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm mb-3">
            Chatea con nosotros sobre cualquier duda de nuestros servicios.
          </p>
          <a
            href="https://web.whatsapp.com/send?phone=573245425387&text=Hola!%20Quiero%20más%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 rounded-lg text-white text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Iniciar chat
          </a>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-xl shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? "bg-zinc-800 hover:bg-zinc-700 rotate-90" : "bg-green-500 hover:bg-green-400"
        }`}
        aria-label="Contact on WhatsApp"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  )
}