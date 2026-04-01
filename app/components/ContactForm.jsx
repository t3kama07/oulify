 "use client";

const CONTACT_EMAIL = "hello@oulify.com";

function normalizeValue(value) {
  return String(value || "").trim();
}

function buildMailtoUrl(locale, values) {
  const subject =
    values.business ||
    (locale === "fi" ? "Uusi projektitiedustelu verkkosivustolta" : "New project inquiry from website");
  const labels =
    locale === "fi"
      ? {
          name: "Nimi",
          email: "Sähköposti",
          business: "Aihe",
          message: "Viesti",
        }
      : {
          name: "Name",
          email: "Email",
          business: "Subject",
          message: "Message",
        };
  const body = [
    `${labels.name}: ${values.name || "-"}`,
    `${labels.email}: ${values.email || "-"}`,
    `${labels.business}: ${values.business || "-"}`,
    "",
    `${labels.message}:`,
    values.message || "-",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm({ locale, formText }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = {
      name: normalizeValue(formData.get("name")),
      email: normalizeValue(formData.get("email")),
      business: normalizeValue(formData.get("business")),
      message: normalizeValue(formData.get("message")),
    };

    window.location.assign(buildMailtoUrl(locale, values));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder={formText.name}
        aria-label={formText.name}
        autoComplete="name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder={formText.email}
        aria-label={formText.email}
        autoComplete="email"
        required
      />
      <input
        type="text"
        name="business"
        className="contact-input-full"
        placeholder={formText.business}
        aria-label={formText.business}
        autoComplete="organization"
      />
      <textarea
        name="message"
        placeholder={formText.message}
        aria-label={formText.message}
        rows="4"
        required
      />
      <button type="submit" className="btn btn-primary">
        {formText.send}
      </button>
    </form>
  );
}
