"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Header } from "@/components/header";
import { FloatingCart } from "@/components/store/floating-cart";
import { storeProducts, type StoreProduct } from "@/lib/store-products";
import { useCart, formatPrice } from "@/lib/cart-context";

const paymentMethods = [
  { id: "paypal", name: "PayPal", icon: "P", color: "bg-blue-600 hover:bg-blue-700" },
  { id: "wompi", name: "Wompi", icon: "W", color: "bg-cyan-600 hover:bg-cyan-700" },
  { id: "mercadopago", name: "Mercado Pago", icon: "M", color: "bg-yellow-500 hover:bg-yellow-600 text-black" },
] as const;

const categories = [
  { id: "all", name: "Todos", icon: "✨" },
  { id: "automatizacion", name: "Automatización", icon: "⚡" },
  { id: "ia", name: "IA", icon: "🤖" },
  { id: "dashboard", name: "Dashboard", icon: "📊" },
  { id: "consultoria", name: "Consultoría", icon: "💼" },
] as const;

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "CEO, TechStart Colombia",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format&fit=crop&w=100&q=80",
    text: "La automatización de leads nos ahorró 20 horas semanales. El ROI fue visible en el primer mes.",
    rating: 5,
    product: "automatizacion-leads"
  },
  {
    id: 2,
    name: "María Elena Gómez",
    role: "Directora de Operaciones, FinanceHub",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=format&fit=crop&w=100&q=80",
    text: "El chatbot maneja el 80% de las consultas sin intervención humana. Nuestros clientes están más felices.",
    rating: 5,
    product: "chatbot-atencion"
  },
  {
    id: 3,
    name: "Andrés Felipe Ruiz",
    role: "CTO, LegalTech Solutions",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=format&fit=crop&w=100&q=80",
    text: "El pipeline RAG revolucionó nuestro análisis de contratos. De horas a minutos.",
    rating: 5,
    product: "pipeline-rag"
  },
];

export default function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<StoreProduct | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);
  const { addItem } = useCart();

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return storeProducts;
    return storeProducts.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const relatedProducts = useMemo(() => {
    if (!selectedProduct) return [];
    return storeProducts.filter(p => p.id !== selectedProduct.id && p.category === selectedProduct.category).slice(0, 2);
  }, [selectedProduct]);

  const handleViewDetails = (product: StoreProduct) => {
    setSelectedProduct(product);
    setShowDetailModal(true);
  };

  const handleAddToCart = (product: StoreProduct) => {
    addItem(product);
  };

  const handleBuyClick = () => {
    setPurchaseSuccess(selectedProduct?.id || null);
    setShowDetailModal(false);
    setShowPaymentModal(true);
  };

  const currentIndex = selectedProduct ? storeProducts.findIndex(p => p.id === selectedProduct.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < storeProducts.length - 1;

  const handlePrevProduct = () => {
    if (hasPrev) setSelectedProduct(storeProducts[currentIndex - 1]);
  };

  const handleNextProduct = () => {
    if (hasNext) setSelectedProduct(storeProducts[currentIndex + 1]);
  };

  useEffect(() => {
    if (purchaseSuccess) {
      const timer = setTimeout(() => setPurchaseSuccess(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [purchaseSuccess]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <FloatingCart />

      {/* Purchase Success Animation */}
      {purchaseSuccess && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-3 px-6 py-4 bg-green-500/90 backdrop-blur-sm rounded-2xl shadow-2xl shadow-green-500/30">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-white">¡Producto añadido!</span>
          </div>
        </div>
      )}

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

      {/* Category Filters */}
      <section className="pb-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-cyan-500 text-black"
                    : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-white border border-zinc-700"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                  {product.popular && (
                    <span className="px-2 py-1 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full text-xs text-yellow-300 uppercase tracking-wider flex items-center gap-1">
                      <span>★</span> Popular
                    </span>
                  )}
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
                {/* Delivery time */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-zinc-300">
                    📦 {product.deliveryTime}
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
                      onClick={() => handleBuyClick()}
                      className="flex-1 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Adquirir
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

      {/* Testimonials */}
      <section className="py-20 px-8 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-cyan-400">★</span>
                  ))}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-8 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm mb-1">Pago Seguro</h4>
              <p className="text-xs text-zinc-500">Encriptación SSL 256-bit</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm mb-1">Garantía 7 días</h4>
              <p className="text-xs text-zinc-500">Devolución sin preguntas</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm mb-1">Soporte 24/7</h4>
              <p className="text-xs text-zinc-500">Chat y WhatsApp</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm mb-1">Entrega Rápida</h4>
              <p className="text-xs text-zinc-500">Máximo 14 días</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {showDetailModal && selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setShowDetailModal(false)}
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            {/* Navigation arrows */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <button
                onClick={handlePrevProduct}
                disabled={!hasPrev}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                  hasPrev ? "bg-zinc-800/80 hover:bg-zinc-700 text-white" : "bg-zinc-800/30 text-zinc-600 cursor-not-allowed"
                }`}
              >
                ←
              </button>
              <button
                onClick={handleNextProduct}
                disabled={!hasNext}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                  hasNext ? "bg-zinc-800/80 hover:bg-zinc-700 text-white" : "bg-zinc-800/30 text-zinc-600 cursor-not-allowed"
                }`}
              >
                →
              </button>
            </div>

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

              {/* Features */}
              <div className="bg-zinc-800/50 rounded-2xl p-6 mb-6">
                <h3 className="font-semibold mb-3 text-cyan-400">¿Qué incluye?</h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery time and price */}
              <div className="flex items-center justify-between mb-6 p-4 bg-zinc-800/30 rounded-xl border border-zinc-800">
                <div>
                  <span className="text-sm text-zinc-500">Precio desde</span>
                  <p className="text-3xl font-bold text-cyan-400">
                    {formatPrice(selectedProduct.price, selectedProduct.currency)}
                  </p>
                  <p className="text-sm text-zinc-500">
                    o {formatPrice(selectedProduct.priceCOP, "COP")}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">
                    📦 Entrega: {selectedProduct.deliveryTime}
                  </span>
                </div>
              </div>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-zinc-400">Productos relacionados</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {relatedProducts.map((related) => (
                      <button
                        key={related.id}
                        onClick={() => {
                          setSelectedProduct(related);
                        }}
                        className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-xl hover:bg-zinc-800 transition-colors text-left"
                      >
                        <div className="w-12 h-12 bg-zinc-700 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={related.image}
                            alt={related.title}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{related.title}</p>
                          <p className="text-cyan-400 text-sm font-semibold">{formatPrice(related.price, related.currency)}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

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
                  onClick={() => handleBuyClick()}
                  className="flex-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Adquirir ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setShowPaymentModal(false)}
        >
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