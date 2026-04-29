import CryptoJS from "crypto-js";
import {
  OrderService,
  EventBusService,
} from "@medusajs/medusa";
import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa";

export default async function orderNotifier({
  container,
  event: { name, data },
}: SubscriberArgs<{ id: string }>) {
  const orderService: OrderService = container.resolve("orderService");
  const eventBusService: EventBusService = container.resolve("eventBusService");

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  const signatureSecret = process.env.HUBI_SIGNATURE_SECRET || "";

  if (!webhookUrl) {
    console.warn("[OrderNotifier] N8N_WEBHOOK_URL not configured, skipping");
    return;
  }

  const generateSignature = (payload: string): string => {
    return CryptoJS.HmacSHA256(payload, signatureSecret).toString(
      CryptoJS.enc.Hex
    );
  };

  const extractOrderData = (order: any) => {
    return {
      id: order.id,
      order_number: order.display_id,
      status: order.status,
      email: order.email,
      customer: {
        id: order.customer_id,
        first_name: order.first_name,
        last_name: order.last_name,
        phone: order.phone,
      },
      shipping_address: order.shipping_address
        ? {
            address_1: order.shipping_address.address_1,
            city: order.shipping_address.city,
            province: order.shipping_address.province,
            postal_code: order.shipping_address.postal_code,
            country_code: order.shipping_address.country_code,
          }
        : null,
      items: order.items?.map((item: any) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        unit_price: item.unit_price,
        total: item.total,
      })) || [],
      subtotal: order.subtotal,
      shipping_total: order.shipping_total,
      tax_total: order.tax_total,
      total: order.total,
      currency_code: order.currency_code,
      created_at: order.created_at,
    };
  };

  const sendWebhook = async (payload: any) => {
    const jsonPayload = JSON.stringify(payload);
    const signature = generateSignature(jsonPayload);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-HUBI-SIGNATURE": signature,
          "X-HUBI-TIMESTAMP": Date.now().toString(),
        },
        body: jsonPayload,
      });

      if (!response.ok) {
        console.error(
          `[OrderNotifier] Webhook failed: ${response.status} ${response.statusText}`
        );
      } else {
        console.info(
          `[OrderNotifier] Order ${payload.order_number} sent to n8n`
        );
      }
    } catch (error) {
      console.error("[OrderNotifier] Webhook error:", error);
    }
  };

  try {
    const orderId = data.id;
    if (!orderId) {
      console.warn("[OrderNotifier] No order ID in event data");
      return;
    }

    const order = await orderService.retrieveOrder(orderId, {
      relations: ["customer", "shipping_address", "items"],
    });

    const cleanPayload = extractOrderData(order);

    if (name === "order.placed") {
      await sendWebhook(cleanPayload);
    } else if (name === "order.completed") {
      await sendWebhook({
        ...cleanPayload,
        completed_at: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error(`[OrderNotifier] Error processing ${name}:`, error);
  }
}

export const config: SubscriberConfig = {
  event: ["order.placed", "order.completed"],
};
