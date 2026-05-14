"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`page-transition-wrapper ${mounted ? "page-in" : ""}`}>
      {children}
    </div>
  );
}
