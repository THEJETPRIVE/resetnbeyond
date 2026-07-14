import { NextResponse } from "next/server";

/**
 * /api/enquiry - the conversion endpoint.
 *
 * Delivery is env-configured, in order of preference:
 *  1. RESEND_API_KEY          - emails the enquiry to ENQUIRY_TO (or the
 *                               concierge address) via Resend
 *  2. ENQUIRY_WEBHOOK_URL     - POSTs JSON to any webhook (Zapier, Make,
 *                               Slack, Notion, a CRM endpoint)
 *  3. Neither configured      - logs server-side and reports
 *                               delivered:false so the gap is visible
 *
 * Set one of these in Vercel -> Project -> Settings -> Environment
 * Variables. Until then, enquiries are NOT persisted anywhere.
 */
const TO = process.env.ENQUIRY_TO ?? "concierge@resetnbeyond.com";

interface Enquiry {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  interests?: string;
  budget?: string;
  message?: string;
  /** Set when the enquiry originates from a "Reserve This House" action */
  resort?: string;
}

export async function POST(req: Request) {
  let data: Enquiry;
  try {
    data = (await req.json()) as Enquiry;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const name = (data.name ?? "").toString().slice(0, 200).trim();
  const email = (data.email ?? "").toString().slice(0, 200).trim();
  if (!name || !email || !email.includes("@")) {
    return NextResponse.json({ ok: false, error: "Name and a valid email are required" }, { status: 400 });
  }

  const lines = [
    data.resort && `House: ${data.resort}`,
    `Name: ${name}`,
    `Email: ${email}`,
    data.phone && `Telephone: ${data.phone}`,
    data.location && `Location: ${data.location}`,
    data.interests && `Interests: ${data.interests}`,
    data.budget && `Indicative investment: ${data.budget}`,
    data.message && `\n${data.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  // 1. Resend
  if (process.env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Reset & Beyond <onboarding@resend.dev>",
        to: [TO],
        reply_to: email,
        subject: data.resort ? `Reservation enquiry - ${data.resort} - ${name}` : `Private enquiry - ${name}`,
        text: lines,
      }),
    });
    return NextResponse.json({ ok: true, delivered: res.ok });
  }

  // 2. Generic webhook
  if (process.env.ENQUIRY_WEBHOOK_URL) {
    const res = await fetch(process.env.ENQUIRY_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "resetnbeyond.com", ...data, receivedAt: new Date().toISOString() }),
    });
    return NextResponse.json({ ok: true, delivered: res.ok });
  }

  // 3. Unconfigured - visible in Vercel function logs
  console.warn("[enquiry] No delivery configured. Enquiry received:", lines);
  return NextResponse.json({ ok: true, delivered: false });
}
