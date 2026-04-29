"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { medusa, type Cart } from "@/lib/medusa";

export default function CheckoutPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    address_1: "",
    city: "",
    postal_code: "",
    country_code: "us",
  });
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const cartId = localStorage.getItem("medusa_cart_id");
    if (cartId) {
      medusa.getCart(cartId).then((c) => {
        if (c) setCart(c);
      });
    }
  }, []);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "usd",
    }).format(amount / 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    setLoading(true);

    try {
      const cartId = localStorage.getItem("medusa_cart_id");
      if (!cartId) {
        alert("Carrito no encontrado");
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_URL || "http://localhost:9000"}/store/carts/${cartId}/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        setOrderId(data.id || "ORD-" + Date.now());
        setOrderPlaced(true);
        localStorage.removeItem("medusa_cart_id");
      } else {
        alert("Error al realizar el pedido");
      }
    } catch (error) {
      console.error(error);
      alert("Error al realizar el pedido");
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <section className="pt-24 md:pt-32 pb-16 px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">¡Pedido Confirmado!</h1>
            <p className="text-zinc-400 mb-6">
              Gracias por tu pedido. Nos pondremos en contacto dentro de 24 horas para discutir los siguientes pasos.
            </p>
            <p className="text-cyan-400 font-mono mb-8">ID del Pedido: {orderId}</p>
            <Link
              href="/store/products"
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
            >
              Continuar Navegando
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 md:pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/store/cart"
            className="text-zinc-400 hover:text-white transition-colors mb-8 inline-block"
          >
            ← Volver al Carrito
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Finalizar Compra</h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Información de Contacto</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium mb-2">Nombre *</label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium mb-2">Apellido *</label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Teléfono (opcional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Dirección de Facturación</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address_1" className="block text-sm font-medium mb-2">Dirección (opcional)</label>
                    <input
                      type="text"
                      id="address_1"
                      name="address_1"
                      value={formData.address_1}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Calle 123 #45-67"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-2">Ciudad (opcional)</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="postal_code" className="block text-sm font-medium mb-2">Código Postal (opcional)</label>
                      <input
                        type="text"
                        id="postal_code"
                        name="postal_code"
                        value={formData.postal_code}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="country_code" className="block text-sm font-medium mb-2">País</label>
                    <select
                      id="country_code"
                      name="country_code"
                      value={formData.country_code}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="us">United States</option>
                      <option value="co">Colombia</option>
                      <option value="mx">Mexico</option>
                      <option value="es">Spain</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading || !formData.email || !formData.first_name || !formData.last_name}
                className="w-full py-4 px-8 rounded-lg font-semibold bg-cyan-500 hover:bg-cyan-400 text-black transition-colors disabled:opacity-50"
              >
                {loading ? "Procesando..." : "Realizar Pedido"}
              </button>
            </div>

            {/* Order Summary */}
            <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-950/50 h-fit">
              <h2 className="text-xl font-semibold mb-6">Resumen del Pedido</h2>

              {cart && cart.items.length > 0 ? (
                <div className="space-y-4 mb-6">
                  {cart.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-zinc-800 pb-3">
                      <div>
                        <p className="font-medium">{item.title || "Servicio"}</p>
                        <p className="text-sm text-zinc-400">Cantidad: {item.quantity}</p>
                      </div>
                      <span className="text-cyan-400">
                        {formatPrice(item.unit_price?.amount || 0)}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-xl font-bold text-cyan-400">
                      {formatPrice(cart.total || 0)}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-zinc-400 text-sm mb-6">
                  No hay productos en el carrito.
                </p>
              )}

              <p className="text-zinc-500 text-xs border-t border-zinc-800 pt-4">
                Este es un checkout de demostración. Para pagos reales, se requeriría integración con Stripe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
