import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { MicroInteractions } from "@/components/micro-interactions";
import { LoadingProvider } from "@/components/ui/loading-provider";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ChatAIButton } from "@/components/ui/chat-ai-button";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://hubiagency.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "hubIAgency - Automatización Inteligente para Negocios Modernos",
    template: "%s | hubIAgency",
  },
  description: "Agencia de consultoría B2B especializada en automatización de flujos de trabajo, chatbots con IA y desarrollo de IA personalizado. Automatiza. Innova. Eleva.",
  keywords: ["automatización IA", "automatización de flujos", "chatbot IA", "inteligencia artificial", "n8n", "LangChain", "desarrollo IA", "consultoría IA Colombia"],
  authors: [{ name: "hubIAgency", url: BASE_URL }],
  creator: "hubIAgency",
  publisher: "hubIAgency",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: BASE_URL,
    siteName: "hubIAgency",
    title: "hubIAgency - Automatización Inteligente para Negocios Modernos",
    description: "Agencia de consultoría B2B especializada en automatización de flujos de trabajo, chatbots con IA y desarrollo de IA personalizado.",
    images: [{
      url: `${BASE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "hubIAgency - Automatización Inteligente"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "hubIAgency - Automatización Inteligente",
    description: "Transforma tu negocio con soluciones de automatización y IA.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@andresmoralesc1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "es-CO": `${BASE_URL}`,
      "en-US": `${BASE_URL}/en`,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06b6d4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingProvider>
          <CartProvider>
            <WhatsAppButton />
            <ChatAIButton />
            <MicroInteractions />
            {children}
            <Footer />
          </CartProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
