import { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description: "Términos de Servicio de hubIAgency - Condiciones que rigen el uso de nuestros servicios.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 pb-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Términos de Servicio</h1>

          <div className="prose prose-invert prose-zinc max-w-none space-y-6">
            <p className="text-zinc-400">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-zinc-300">
              Al acceder y usar el sitio web y servicios de hubIAgency, aceptas y aceptas estar bound
              por los términos y disposiciones de este acuerdo.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Descripción de los Servicios</h2>
            <p className="text-zinc-300">
              hubIAgency proporciona servicios de consultoría B2B enfocados en automatización de flujos de trabajo,
              chatbots de IA y desarrollo de IA personalizado. Los detalles específicos de los servicios se proporcionan
              en propuestas y contratos.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Términos de Pago</h2>
            <p className="text-zinc-300">
              Los términos de pago se especifican en acuerdos de servicio individuales. Generalmente, se requiere
              un depósito del 50% antes del inicio del proyecto, con el saldo pendiente al Completion.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Propiedad Intelectual</h2>
            <p className="text-zinc-300">
              Con el pago completo, los clientes reciben propiedad de las soluciones desarrolladas personalizadas.
              Bibliotecas, herramientas y frameworks preexistentes permanecen como propiedad de sus respectivos dueños.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Confidencialidad</h2>
            <p className="text-zinc-300">
              Ambas partes acuerdan mantener la confidencialidad de la información propietaria compartida
              durante el compromiso. Esta obligación sobrevive a la terminación del acuerdo.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-zinc-300">
              hubIAgency&apos;s liability is limited to the amount paid for the specific service in question.
              We are not liable for indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
            <p className="text-zinc-300">
              Either party may terminate an engagement with 30 days written notice. Upon termination,
              payment is due for all work completed up to the termination date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
            <p className="text-zinc-300">
              These terms are governed by and construed in accordance with applicable laws.
              Any disputes shall be resolved through binding arbitration.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
            <p className="text-zinc-300">
              Questions about these Terms? Contact us at:
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
