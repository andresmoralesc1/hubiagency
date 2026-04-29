"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";

export default function CheckoutPage() {
  const [step, setStep] = useState<"info" | "payment">("info");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    setLoading(true);

    try {
      const cartId = localStorage.getItem("medusa_cart_id");
      if (!cartId) {
        alert("Cart not found");
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
        alert("Failed to place order");
      }
    } catch (error) {
      console.error(error);
      alert("Error placing order");
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <section className="pt-32 pb-16 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-zinc-400 mb-6">
              Thank you for your order. We&apos;ll be in touch within 24 hours to discuss next steps.
            </p>
            <p className="text-cyan-400 font-mono mb-8">Order ID: {orderId}</p>
            <Link
              href="/store/products"
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
            >
              Continue Browsing
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
          <Link
            href="/store/cart"
            className="text-zinc-400 hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to Cart
          </Link>

          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <input
                      type="text"
                      name="address_1"
                      value={formData.address_1}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Postal Code</label>
                      <input
                        type="text"
                        name="postal_code"
                        value={formData.postal_code}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <select
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
                {loading ? "Processing..." : "Place Order"}
              </button>
            </div>

            {/* Order Summary */}
            <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-950/50 h-fit">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <p className="text-zinc-400 text-sm">
                This is a demo checkout. For actual payments, Stripe integration would be required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
