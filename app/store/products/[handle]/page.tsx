"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { storeProducts, type StoreProduct } from "@/lib/store-products";
import { useCart, formatPrice } from "@/lib/cart-context";

export default function ProductDetailPage() {
  const params = useParams();
  const handle = params.handle as string;
  const { addItem } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const product = storeProducts.find((p) => p.id === handle);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-32 text-center">
          <div className="text-red-400 text-xl">Product not found</div>
          <Link href="/store/products" className="text-cyan-400 mt-4 inline-block">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Initialize selected variant
  if (!selectedVariantId && product.features) {
    setSelectedVariantId("default");
  }

  const handleAddToCart = () => {
    setAdding(true);
    addItem(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setAdding(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/store/products"
            className="text-zinc-400 hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            <div>
              {product.image ? (
                <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square bg-zinc-900 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🧠</span>
                </div>
              )}
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

              <div className="text-3xl text-cyan-400 font-bold mb-6">
                {formatPrice(product.price)}
              </div>

              <div className="prose prose-invert mb-8">
                <p className="text-zinc-300 leading-relaxed">{product.description}</p>
              </div>

              {product.deliveryTime && (
                <div className="mb-6 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                  <span className="text-zinc-400">Delivery: </span>
                  <span className="text-white">{product.deliveryTime}</span>
                </div>
              )}

              {product.features && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Features</label>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-zinc-300">
                        <span className="text-cyan-400">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={handleAddToCart}
                disabled={adding}
                className={`w-full py-4 px-8 rounded-lg font-semibold transition-colors ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-cyan-500 hover:bg-cyan-400 text-black"
                } disabled:opacity-50`}
              >
                {adding ? "Adding..." : added ? "Added to Cart!" : "Add to Cart"}
              </button>

              <Link
                href="/store/cart"
                className="block w-full py-4 px-8 rounded-lg font-semibold text-center mt-4 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}