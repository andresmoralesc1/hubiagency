"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, X, Send, Loader2 } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function ChatAIButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("https://n8n.neuralflow.space/webhook/6ea3f8cc-e3c3-4392-b92f-7e5c4d1be01d/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      })

      const data = await response.json()
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || data.message || "¡Hola! ¿En qué puedo ayudarte hoy?"
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Lo siento, estoy teniendo problemas para conectar. ¿Podrías intentarlo de nuevo?"
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 p-4 bg-cyan-500 hover:bg-cyan-400 rounded-xl shadow-[0_0_30px_rgba(0,212,255,0.6)] hover:shadow-[0_0_50px_rgba(0,212,255,0.8)] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Abrir chat con IA"
      >
        <Bot className="w-7 h-7 text-black" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-start pl-8 pb-8">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Panel */}
          <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden flex flex-col max-h-[600px]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-cyan-500/20 to-transparent border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Asistente IA</h3>
                  <p className="text-xs text-zinc-400">hubIAgency</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">¡Hola! 👋</h4>
                  <p className="text-zinc-400 text-sm">
                    Soy el asistente de hubIAgency. Puedo ayudarte con información sobre nuestros servicios de automatización, chatbots, y más.
                  </p>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-cyan-500 text-black rounded-br-md"
                        : "bg-zinc-800 text-white rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">Escribiendo...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800">
              <div className="flex items-center gap-2 bg-zinc-800 rounded-xl px-4 py-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-transparent text-white placeholder:text-zinc-500 focus:outline-none text-sm py-2"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 text-cyan-400 hover:text-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}