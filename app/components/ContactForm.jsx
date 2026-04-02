"use client";

import { useState } from "react";

function normalizeValue(value) {
  return String(value || "").trim();
}

const FALLBACK_FORM_COPY = {
  en: {
    sending: "Sending...",
    success: "Thanks, your message has been sent. We will get back to you soon.",
    error: "We could not send your message right now. Please try again or email hello@oulify.com directly.",
  },
  fi: {
    sending: "Lahetetaan...",
    success: "Kiitos, viestisi on lahetetty. Palaamme asiaan pian.",
    error: "Viestin lahetys ei onnistunut juuri nyt. Yrita uudelleen tai laheta sahkopostia osoitteeseen hello@oulify.com.",
  },
};

export default function ContactForm({ locale, formText }) {
  const activeLocale = locale === "fi" ? "fi" : "en";
  const copy = {
    ...FALLBACK_FORM_COPY[activeLocale],
    ...formText,
  };
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function clearFeedback() {
    if (status === "idle" && !feedback) {
      return;
    }

    setStatus("idle");
    setFeedback("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: normalizeValue(formData.get("name")),
      email: normalizeValue(formData.get("email")),
      business: normalizeValue(formData.get("business")),
      message: normalizeValue(formData.get("message")),
    };

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          locale: activeLocale,
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || copy.error);
      }

      form.reset();
      setStatus("success");
      setFeedback(copy.success);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || copy.error);
    }
  }

  const isSending = status === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit} onChange={clearFeedback}>
      <input
        type="text"
        name="name"
        placeholder={formText.name}
        aria-label={formText.name}
        autoComplete="name"
        disabled={isSending}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={formText.email}
        aria-label={formText.email}
        autoComplete="email"
        disabled={isSending}
        required
      />
      <input
        type="text"
        name="business"
        className="contact-input-full"
        placeholder={formText.business}
        aria-label={formText.business}
        autoComplete="organization"
        disabled={isSending}
      />
      <textarea
        name="message"
        placeholder={formText.message}
        aria-label={formText.message}
        rows="4"
        disabled={isSending}
        required
      />
      <button type="submit" className="btn btn-primary" disabled={isSending}>
        {isSending ? copy.sending : formText.send}
      </button>
      {feedback ? (
        <p
          className={`contact-form-status ${
            status === "error" ? "contact-form-status-error" : "contact-form-status-success"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
