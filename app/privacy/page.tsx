import { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de Privacidad de hubIAgency - Cómo recopilamos, usamos y protegemos tus datos.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 pb-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>

          <div className="prose prose-invert prose-zinc max-w-none space-y-6">
            <p className="text-zinc-400">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Información que Recopilamos</h2>
            <p className="text-zinc-300">
              Recopilamos información que nos proporcionas directamente, como cuando completas un formulario de contacto,
              te suscribes a nuestro boletín o te comunicas con nosotros a través de nuestro sitio web.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cómo Usamos Tu Información</h2>
            <p className="text-zinc-300">
              Usamos la información que recopilamos para responder a tus consultas, proporcionar nuestros servicios,
              enviarte actualizaciones relevantes y mejorar nuestro sitio web y servicios.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Compartir Información</h2>
            <p className="text-zinc-300">
              No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento,
              excepto como se describe en esta política o según sea necesario para proporcionar nuestros servicios.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Seguridad de Datos</h2>
            <p className="text-zinc-300">
              Implementamos medidas técnicas y organizativas apropiadas para proteger tu información personal
              contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Tus Derechos</h2>
            <p className="text-zinc-300">
              Tienes derecho a acceder, corregir o eliminar tu información personal. Contáctanos
              en hello@hubiagency.com para ejercer estos derechos.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
            <p className="text-zinc-300">
              Usamos cookies para mejorar tu experiencia de navegación. Puedes controlar las preferencias de cookies
              a través de la configuración de tu navegador.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contáctanos</h2>
            <p className="text-zinc-300">
              Si tienes preguntas sobre esta Política de Privacidad, por favor contáctanos en:
              <br />
              <a href="mailto:hello@hubiagency.com" className="text-cyan-400 hover:underline">
                hello@hubiagency.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
