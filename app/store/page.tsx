"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { storeProducts, type StoreProduct } from "@/lib/store-products";
import { ShinyButton } from "@/components/ui/shiny-button";

const paymentMethods = [
  { id: "paypal", name: "PayPal", icon: "P", color: "bg-blue-600 hover:bg-blue-700" },
  { id: "wompi", name: "Wompi", icon: "W", color: "bg-cyan-600 hover:bg-cyan-700" },
  { id: "mercadopago", name: "Mercado Pago", icon: "M", color: "bg-yellow-500 hover:bg-yellow-600 text-black" },
] as const;

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(price);
}

export default function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<StoreProduct | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleBuyClick = (product: StoreProduct) => {
    setSelectedProduct(product);
    setShowPaymentModal(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-zinc-400 bg-clip-text text-transparent">
            Tienda de Servicios IA
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Soluciones inteligentes para transformar tu negocio
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-zinc-900/50 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-cyan-400/60 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-cyan-100 transition-colors">
                  {product.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">
                    {formatPrice(product.price, product.currency)}
                  </span>
                  <button
                    onClick={() => handleBuyClick(product)}
                    className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg text-sm font-medium transition-all"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-md w-full">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
            <p className="text-3xl font-bold text-cyan-400 mb-8">
              {formatPrice(selectedProduct.price, selectedProduct.currency)}
            </p>

            <p className="text-zinc-400 mb-6 text-center">Selecciona tu método de pago:</p>

            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <a
                  key={method.id}
                  href={selectedProduct.paymentLinks[method.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl ${method.color} text-white font-medium transition-all hover:scale-[1.02]`}
                >
                  <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                    {method.icon}
                  </span>
                  <span className="text-lg">Pagar con {method.name}</span>
                </a>
              ))}
            </div>

            <p className="text-zinc-500 text-xs text-center mt-6">
              Serás redirigido a la pasarela de pago seleccionada
            </p>
          </div>
        </div>
      )}
    </div>
  );
}