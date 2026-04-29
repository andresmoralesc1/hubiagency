"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { medusa, type Cart } from "@/lib/medusa";

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cartId = localStorage.getItem("medusa_cart_id");
    if (cartId) {
      medusa.getCart(cartId).then((c) => {
        setCart(c);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "usd",
    }).format(amount / 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-32 text-center">
          <div className="text-cyan-400 text-xl">Cargando...</div>
        </div>
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <section className="pt-32 pb-16 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Tu Carrito</h1>
            <p className="text-zinc-400 mb-8">Tu carrito está vacío</p>
            <Link
              href="/store/products"
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

      <section className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Tu Carrito</h1>

          <div className="space-y-4 mb-8">
            {cart.items.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-zinc-800 rounded-lg bg-zinc-950/50"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Servicio</h3>
                    <p className="text-zinc-400 text-sm">Cantidad: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-950/50 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400">Subtotal</span>
              <span>{formatPrice(cart.total || 0)}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400">Impuesto</span>
              <span className="text-zinc-400">Calculado al finalizar</span>
            </div>
            <div className="border-t border-zinc-800 pt-4 flex justify-between items-center">
              <span className="text-xl font-semibold">Total</span>
              <span className="text-2xl font-bold text-cyan-400">
                {formatPrice(cart.total || 0)}
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href="/store/products"
              className="flex-1 py-4 px-8 rounded-lg font-semibold text-center border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              Continuar Comprando
            </Link>
            <Link
              href="/store/checkout"
              className="flex-1 py-4 px-8 rounded-lg font-semibold text-center bg-cyan-500 hover:bg-cyan-400 text-black transition-colors"
            >
              Proceder al Pago
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
