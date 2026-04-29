"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { medusa, type Product } from "@/lib/medusa";

export default function StoreProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await medusa.getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "usd",
    }).format(amount / 100);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Servicios de IA
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Transforma tu negocio con nuestras soluciones de automatización inteligente
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {loading && (
            <div className="text-center py-20">
              <div className="text-cyan-400 text-xl">Cargando productos...</div>
            </div>
          )}

          {error && (
            <div className="text-center py-20 text-red-400">
              {error}
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="text-center py-20 text-zinc-400">
              No hay productos disponibles aún. ¡Vuelve pronto!
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const cheapestVariant = product.variants?.reduce((min, v) =>
                v.prices[0]?.amount < min.prices[0]?.amount ? v : min
              , product.variants[0]);

              return (
                <Link
                  key={product.id}
                  href={`/store/products/${product.handle}`}
                  className="group p-6 border border-zinc-800 rounded-lg bg-zinc-950/50 hover:border-cyan-500/50 transition-all"
                >
                  {product.thumbnail && (
                    <div className="aspect-video bg-zinc-900 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  {cheapestVariant && (
                    <div className="text-cyan-400 font-semibold">
                      Desde {formatPrice(cheapestVariant.prices[0]?.amount || 0)}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
