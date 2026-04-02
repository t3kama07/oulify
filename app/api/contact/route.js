import { NextResponse } from "next/server";

import { ContactValidationError, parseContactSubmission, sendContactEmail } from "@/lib/contact-mail";

export const runtime = "nodejs";

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  try {
    const submission = parseContactSubmission(payload);
    await sendContactEmail(submission);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ContactValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("Contact form email failed", error);

    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}
