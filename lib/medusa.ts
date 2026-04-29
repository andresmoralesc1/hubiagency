const MEDUSA_API_URL = process.env.NEXT_PUBLIC_MEDUSA_URL || "http://localhost:9000";

interface ProductVariant {
  id: string;
  title: string;
  prices: { currency_code: string; amount: number }[];
  inventory_quantity: number;
}

interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  status: string;
  thumbnail?: string;
  variants: ProductVariant[];
  metadata?: Record<string, string>;
}

interface CartItem {
  variant_id: string;
  quantity: number;
  title?: string;
  unit_price?: {
    amount: number;
  };
}

interface Cart {
  id: string;
  items: CartItem[];
  total: number;
}

class MedusaClient {
  private apiUrl: string;

  constructor(apiUrl: string = MEDUSA_API_URL) {
    this.apiUrl = apiUrl;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.apiUrl}/store${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Medusa API error: ${response.status}`);
    }

    return response.json();
  }

  async getProducts(): Promise<Product[]> {
    const data = await this.request<{ products: Product[] }>("/products");
    return data.products || [];
  }

  async getProductByHandle(handle: string): Promise<Product | null> {
    try {
      const data = await this.request<{ product: Product }>(
        `/products/${handle}?handle=${handle}`
      );
      return data.product;
    } catch {
      return null;
    }
  }

  async createCart(items: CartItem[]): Promise<Cart> {
    const data = await this.request<{ cart: Cart }>("/carts", {
      method: "POST",
      body: JSON.stringify({ items }),
    });
    return data.cart;
  }

  async addToCart(cartId: string, items: CartItem[]): Promise<Cart> {
    const data = await this.request<{ cart: Cart }>(`/carts/${cartId}/line-items`, {
      method: "POST",
      body: JSON.stringify({ items }),
    });
    return data.cart;
  }

  async getCart(cartId: string): Promise<Cart | null> {
    try {
      const data = await this.request<{ cart: Cart }>(`/carts/${cartId}`);
      return data.cart;
    } catch {
      return null;
    }
  }
}

export const medusa = new MedusaClient();
export type { Product, ProductVariant, Cart, CartItem };
