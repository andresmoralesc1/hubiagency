"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { FloatingCart } from "@/components/store/floating-cart";
import { useCart, formatPrice } from "@/lib/cart-context";

const paymentMethods = [
  { id: "paypal", name: "PayPal", icon: "P", color: "bg-blue-600 hover:bg-blue-700" },
  { id: "wompi", name: "Wompi", icon: "W", color: "bg-cyan-600 hover:bg-cyan-700" },
  { id: "mercadopago", name: "Mercado Pago", icon: "M", color: "bg-yellow-500 hover:bg-yellow-600 text-black" },
] as const;

export default function CartPage() {
  const { items, removeItem, clearCart, total, itemCount } = useCart();

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <section className="pt-24 md:pt-32 pb-16 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Tu Carrito</h1>
            <p className="text-zinc-400 mb-8">Tu carrito está vacío</p>
            <Link
              href="/store"
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
            >
              Explorar Servicios
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <FloatingCart />

      {/* Breadcrumbs */}
      <nav className="pt-24 px-8 max-w-4xl mx-auto">
        <ol className="flex items-center gap-2 text-sm text-zinc-500">
          <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
          <li><span className="mx-2">/</span></li>
          <li><Link href="/store" className="hover:text-cyan-400 transition-colors">Tienda</Link></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-cyan-400">Carrito</li>
        </ol>
      </nav>

      <section className="py-8 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Tu Carrito</h1>
            <span className="text-zinc-400">{itemCount} {itemCount === 1 ? "producto" : "productos"}</span>
          </div>

          {/* Cart Items */}
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="p-4 md:p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 hover:border-zinc-700 transition-colors"
              >
                <div className="flex gap-4 md:gap-6">
                  {/* Image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-800 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.title}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">{item.product.title}</h3>
                    <p className="text-zinc-400 text-sm mb-3 line-clamp-1">{item.product.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-cyan-400 font-bold text-xl">
                        {formatPrice(item.product.price, item.product.currency)}
                      </span>
                      {item.quantity > 1 && (
                        <span className="text-zinc-500 text-sm">
                          {item.quantity} × {formatPrice(item.product.price, item.product.currency)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-zinc-500 hover:text-red-400 transition-colors p-2"
                      title="Eliminar"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                    <span className="font-semibold text-cyan-400">
                      {formatPrice(item.product.price * item.quantity, item.product.currency)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400">Subtotal</span>
              <span className="text-xl font-semibold">{formatPrice(total, "USD")}</span>
            </div>
            <div className="flex justify-between items-center mb-4 text-sm text-zinc-500">
              <span>Impuestos</span>
              <span>Calculados por pasarela</span>
            </div>
            <div className="border-t border-zinc-800 pt-4 flex justify-between items-center">
              <span className="text-xl font-semibold">Total</span>
              <span className="text-3xl font-bold text-cyan-400">{formatPrice(total, "USD")}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-8">
            <p className="text-zinc-400 mb-4 text-center">Selecciona tu método de pago:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {paymentMethods.map((method) => (
                <a
                  key={method.id}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={`flex items-center justify-center gap-3 p-4 rounded-xl ${method.color} text-white font-medium transition-all hover:scale-[1.02]`}
                >
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                    {method.icon}
                  </span>
                  <span>{method.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="/store"
              className="flex-1 py-4 px-8 rounded-xl font-semibold text-center border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Continuar Comprando
            </Link>
            <button
              onClick={clearCart}
              className="flex-1 py-4 px-8 rounded-xl font-semibold text-center border border-red-500/30 text-red-400 hover:border-red-500/50 transition-all"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}