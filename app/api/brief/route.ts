import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, company, pain, tools, connection, goal, urgency, budget } = data;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const webhookUrl = process.env.N8N_BRIEF_WEBHOOK_URL || process.env.N8N_CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      const payload = {
        type: "brief",
        name,
        email,
        company: company || "",
        painPoints: pain || [],
        currentTools: tools || [],
        desiredConnection: connection || "",
        goal,
        urgency,
        budget,
        source: "hubiagency-website",
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("[Brief API] Webhook failed:", response.status);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Recibido! Expect your diagnosis in 5 minutes.",
    });
  } catch (error) {
    console.error("[Brief API] Error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}