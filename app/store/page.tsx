"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { FloatingCart } from "@/components/store/floating-cart";
import { storeProducts, type StoreProduct } from "@/lib/store-products";
import { useCart, formatPrice } from "@/lib/cart-context";

const paymentMethods = [
  { id: "paypal", name: "PayPal", icon: "P", color: "bg-blue-600 hover:bg-blue-700" },
  { id: "wompi", name: "Wompi", icon: "W", color: "bg-cyan-600 hover:bg-cyan-700" },
  { id: "mercadopago", name: "Mercado Pago", icon: "M", color: "bg-yellow-500 hover:bg-yellow-600 text-black" },
] as const;

export default function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<StoreProduct | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { addItem } = useCart();

  const handleViewDetails = (product: StoreProduct) => {
    setSelectedProduct(product);
    setShowDetailModal(true);
  };

  const handleAddToCart = (product: StoreProduct) => {
    addItem(product);
  };

  const handleBuyClick = () => {
    setShowDetailModal(false);
    setShowPaymentModal(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <FloatingCart />

      {/* Breadcrumbs */}
      <nav className="pt-24 px-8 max-w-6xl mx-auto">
        <ol className="flex items-center gap-2 text-sm text-zinc-500">
          <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-cyan-400">Tienda</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-12 px-8">
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
      <section className="py-8 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-zinc-900/50 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 flex flex-col hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-xs text-cyan-300 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className={`px-2 py-1 backdrop-blur-sm border rounded-full text-xs uppercase tracking-wider ${
                    product.price > 200
                      ? "bg-green-500/20 border-green-500/30 text-green-300"
                      : "bg-cyan-500/20 border-cyan-500/30 text-cyan-300"
                  }`}>
                    {product.price > 200 ? "pago único" : "/mes"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-100 transition-colors">
                  {product.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2 flex-1">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">
                      {formatPrice(product.price, product.currency)}
                    </span>
                    <span className="text-xs text-zinc-500">
                      AI Services
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group/btn"
                    >
                      <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Agregar
                    </button>
                    <button
                      onClick={() => handleViewDetails(product)}
                      className="px-4 py-2.5 border border-zinc-700 hover:border-cyan-500/50 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl text-sm transition-all flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {showDetailModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setShowDetailModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all z-10"
            >
              ✕
            </button>

            {/* Product Image */}
            <div className="aspect-video bg-zinc-800 relative overflow-hidden rounded-t-3xl">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1.5 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm text-cyan-300 uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <span className={`px-3 py-1.5 backdrop-blur-sm border rounded-full text-sm uppercase tracking-wider ${
                  selectedProduct.price > 200
                    ? "bg-green-500/20 border-green-500/30 text-green-300"
                    : "bg-cyan-500/20 border-cyan-500/30 text-cyan-300"
                }`}>
                  {selectedProduct.price > 200 ? "pago único" : "/mes"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-3">{selectedProduct.title}</h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Full description would go here */}
              <div className="bg-zinc-800/50 rounded-2xl p-6 mb-6">
                <h3 className="font-semibold mb-3 text-cyan-400">¿Qué incluye?</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Implementación completa del servicio
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Soporte técnico incluido
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Documentación y guías
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Entrega en tiempo estimado
                  </li>
                </ul>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between mb-6 p-4 bg-zinc-800/30 rounded-xl border border-zinc-800">
                <div>
                  <span className="text-sm text-zinc-500">Precio</span>
                  <p className="text-3xl font-bold text-cyan-400">
                    {formatPrice(selectedProduct.price, selectedProduct.currency)}
                  </p>
                </div>
                <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">
                  Impuestos incluidos
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="flex-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Agregar al carrito
                </button>
                <button
                  onClick={handleBuyClick}
                  className="px-6 py-3 border border-cyan-500/50 hover:border-cyan-500 rounded-xl transition-all"
                >
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"
            >
              ✕
            </button>

            {/* Product info */}
            <div className="flex gap-4 mb-6 pb-6 border-b border-zinc-800">
              <div className="w-20 h-20 bg-zinc-800 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="font-semibold">{selectedProduct.title}</h2>
                <p className="text-2xl font-bold text-cyan-400 mt-1">
                  {formatPrice(selectedProduct.price, selectedProduct.currency)}
                </p>
              </div>
            </div>

            <p className="text-zinc-400 mb-4 text-center">Selecciona tu método de pago:</p>

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