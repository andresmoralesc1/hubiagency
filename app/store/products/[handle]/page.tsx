"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { medusa, type Product } from "@/lib/medusa";

export default function ProductDetailPage() {
  const params = useParams();
  const handle = params.handle as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await medusa.getProductByHandle(handle);
        if (data) {
          setProduct(data);
          if (data.variants?.length > 0) {
            setSelectedVariantId(data.variants[0].id);
          }
        } else {
          setError("Producto no encontrado");
        }
      } catch (err) {
        setError("Failed to load product");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [handle]);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "usd",
    }).format(amount / 100);
  };

  const handleAddToCart = async () => {
    if (!selectedVariantId) return;
    setAdding(true);

    try {
      let cartId = localStorage.getItem("medusa_cart_id");
      if (!cartId) {
        const cart = await medusa.createCart([]);
        cartId = cart.id;
        localStorage.setItem("medusa_cart_id", cartId);
      }
      await medusa.addToCart(cartId, [{ variant_id: selectedVariantId, quantity: 1 }]);
      setAdded(true);
      setTimeout(() => setAdded(false), 3000);
    } catch (err) {
      console.error("Failed to add to cart:", err);
    } finally {
      setAdding(false);
    }
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

  if (error || !product) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-32 text-center">
          <div className="text-red-400 text-xl">{error || "Producto no encontrado"}</div>
          <Link href="/store/products" className="text-cyan-400 mt-4 inline-block">
            ← Volver a Servicios
          </Link>
        </div>
      </div>
    );
  }

  const selectedVariant = product.variants?.find((v) => v.id === selectedVariantId);
  const price = selectedVariant?.prices[0]?.amount || 0;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/store/products"
            className="text-zinc-400 hover:text-white transition-colors mb-8 inline-block"
          >
            ← Volver a Servicios
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            {/* Product Image */}
            <div>
              {product.thumbnail ? (
                <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden">
                  <img
                    src={product.thumbnail}
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

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

              <div className="text-3xl text-cyan-400 font-bold mb-6">
                {formatPrice(price)}
              </div>

              <div className="prose prose-invert mb-8">
                <p className="text-zinc-300 leading-relaxed">{product.description}</p>
              </div>

              {product.metadata?.delivery_time && (
                <div className="mb-6 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                  <span className="text-zinc-400">Envío: </span>
                  <span className="text-white">{product.metadata.delivery_time}</span>
                </div>
              )}

              {/* Variant Selection */}
              {product.variants && product.variants.length > 1 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Seleccionar Plan</label>
                  <div className="space-y-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariantId(variant.id)}
                        className={`w-full p-4 rounded-lg border text-left transition-colors ${
                          selectedVariantId === variant.id
                            ? "border-cyan-500 bg-cyan-500/10"
                            : "border-zinc-800 bg-zinc-950/50 hover:border-zinc-700"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{variant.title}</span>
                          <span className="text-cyan-400">
                            {formatPrice(variant.prices[0]?.amount || 0)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={adding || !selectedVariantId}
                className={`w-full py-4 px-8 rounded-lg font-semibold transition-colors ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-cyan-500 hover:bg-cyan-400 text-black"
                } disabled:opacity-50`}
              >
                {adding ? "Añadiendo..." : added ? "¡Añadido al Carrito!" : "Añadir al Carrito"}
              </button>

              <Link
                href="/store/cart"
                className="block w-full py-4 px-8 rounded-lg font-semibold text-center mt-4 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                Ver Carrito
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
