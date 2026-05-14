import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BriefForm } from "@/components/brief-form";

export const metadata: Metadata = {
  title: "Brief de Proyecto - hubIAgency",
  description: "Completa nuestro formulario de brief y recibe un diagnóstico inicial de arquitectura de automatización en 5 minutos.",
  keywords: ["brief proyecto", "diagnóstico IA", "automatización", "consultoría"],
  openGraph: {
    title: "Brief de Proyecto - hubIAgency",
    description: "Completa nuestro formulario y recibe un diagnóstico inicial de arquitectura de automatización.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function BriefPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-24 pb-16 px-8">
        <div className="max-w-2xl mx-auto">
          <BriefForm />
        </div>
      </main>
      <Footer />
    </>
  );
}