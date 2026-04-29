import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { MicroInteractions } from "@/components/micro-interactions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "hubIAgency - Intelligent Automation for Modern Business",
    template: "%s | hubIAgency",
  },
  description: "B2B consulting agency specializing in workflow automation, AI chatbots, and custom AI development. Automate. Innovate. Elevate.",
  keywords: ["AI automation", "workflow automation", "AI chatbot", "business intelligence", "n8n", "LangChain", "custom AI development"],
  authors: [{ name: "hubIAgency" }],
  creator: "hubIAgency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hubiagency.com",
    siteName: "hubIAgency",
    title: "hubIAgency - Intelligent Automation for Modern Business",
    description: "B2B consulting agency specializing in workflow automation, AI chatbots, and custom AI development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "hubIAgency - Intelligent Automation",
    description: "Transform your business with AI-powered automation solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MicroInteractions />
        {children}
        <Footer />
      </body>
    </html>
  );
}
