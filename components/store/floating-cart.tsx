"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export function FloatingCart() {
  const { itemCount, total } = useCart();

  if (itemCount === 0) return null;

  return (
    <Link
      href="/store/cart"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full shadow-lg shadow-cyan-500/30 transition-all hover:scale-105"
    >
      <span className="relative">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      </span>
      <span>${total}</span>
    </Link>
  );
}