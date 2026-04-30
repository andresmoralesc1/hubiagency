"use client"

import { Bot } from "lucide-react"

export function ChatAIButton() {
  return (
    <a
      href="https://n8n.neuralflow.space/webhook/6ea3f8cc-e3c3-4392-b92f-7e5c4d1be01d/chat"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 p-4 bg-cyan-500 hover:bg-cyan-400 rounded-xl shadow-[0_0_30px_rgba(0,212,255,0.6)] hover:shadow-[0_0_50px_rgba(0,212,255,0.8)] transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Chat with AI"
    >
      <Bot className="w-7 h-7 text-black" />
    </a>
  )
}