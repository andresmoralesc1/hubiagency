import { NextResponse } from "next/server";

const TWENTY_API_URL = process.env.TWENTY_API_URL || "https://crm.neuralflow.space";
const TWENTY_API_KEY = process.env.TWENTY_API_KEY;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, company, pain, tools, connection, goal, urgency, budget } = data;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Send to Twenty CRM if API key is configured
    if (TWENTY_API_KEY) {
      // Create company and person in Twenty CRM
      try {
        let companyId = null;

        // Create company first if company name is provided
        if (company) {
          const companyRes = await fetch(`${TWENTY_API_URL}/rest/companies`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TWENTY_API_KEY}`,
            },
            body: JSON.stringify({ name: company }),
          });

          if (companyRes.ok) {
            const companyData = await companyRes.json();
            companyId = companyData.data?.createCompany?.id;
            console.log("[Brief API] Company created:", companyId);
          } else {
            const err = await companyRes.text();
            console.error("[Brief API] Twenty company error:", err);
          }
        }

        // Create person
        const personPayload: Record<string, unknown> = {
          name: { firstName: name.split(" ")[0], lastName: name.split(" ").slice(1).join(" ") || "" },
          emails: { primaryEmail: email },
          ...(companyId && { companyId }),
          jobTitle: `Lead from hubiagency - ${goal || ""}`,
        };

        const noteLines = [
          "Brief submitted from hubiagency website.",
          "",
          `Pain Points: ${(pain || []).join(", ")}`,
          `Tools: ${(tools || []).join(", ")}`,
          `Connection: ${connection}`,
          `Goal: ${goal}`,
          `Urgency: ${urgency}`,
          `Budget: ${budget}`,
        ];
        personPayload.note = noteLines.join("\n");

        const twentyRes = await fetch(`${TWENTY_API_URL}/rest/people`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TWENTY_API_KEY}`,
          },
          body: JSON.stringify(personPayload),
        });

        if (twentyRes.ok) {
          const data = await twentyRes.json();
          console.log("[Brief API] Person created:", data.data?.createPerson?.id);
        } else {
          const err = await twentyRes.text();
          console.error("[Brief API] Twenty person error:", err);
        }
      } catch (err) {
        console.error("[Brief API] Failed to create in Twenty:", err);
      }
    }

    // Also send to n8n webhook if configured
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