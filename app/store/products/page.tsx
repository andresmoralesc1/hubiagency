"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function StoreProductsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to static store
    router.replace("/store");
  }, [router]);

  return null;
}