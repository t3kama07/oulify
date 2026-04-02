"server-only";

import nodemailer from "nodemailer";

class ContactValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ContactValidationError";
  }
}

const DEFAULT_SUBJECT = {
  en: "New project inquiry from website",
  fi: "Uusi projektitiedustelu verkkosivustolta",
};

const FIELD_LIMITS = {
  name: 120,
  email: 320,
  business: 160,
  message: 4000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let cachedTransporter;

function normalizeValue(value) {
  return String(value || "").trim();
}

function getRequiredEnv(name) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getSmtpPort() {
  const rawPort = getRequiredEnv("SMTP_PORT");
  const port = Number.parseInt(rawPort, 10);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("SMTP_PORT must be a positive integer");
  }

  return port;
}

function getSmtpSecure(port) {
  const rawValue = process.env.SMTP_SECURE?.trim().toLowerCase();

  if (!rawValue) {
    return port === 465;
  }

  return rawValue === "true";
}

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const port = getSmtpPort();

  cachedTransporter = nodemailer.createTransport({
    host: getRequiredEnv("SMTP_HOST"),
    port,
    secure: getSmtpSecure(port),
    auth: {
      user: getRequiredEnv("SMTP_USER"),
      pass: getRequiredEnv("SMTP_PASS"),
    },
  });

  return cachedTransporter;
}

function validateLength(fieldName, value) {
  if (value.length > FIELD_LIMITS[fieldName]) {
    throw new ContactValidationError(`${fieldName} is too long.`);
  }
}

function formatAddress(name, email) {
  const safeName = normalizeValue(name).replace(/"/g, "");
  return safeName ? `"${safeName}" <${email}>` : email;
}

function buildMessageText({ locale, name, email, business, message }) {
  const labels =
    locale === "fi"
      ? {
          name: "Nimi",
          email: "Sahkoposti",
          business: "Aihe",
          message: "Viesti",
          submitted: "Lahetetty",
        }
      : {
          name: "Name",
          email: "Email",
          business: "Subject",
          message: "Message",
          submitted: "Submitted",
        };

  return [
    `${labels.name}: ${name}`,
    `${labels.email}: ${email}`,
    `${labels.business}: ${business || "-"}`,
    `${labels.submitted}: ${new Date().toISOString()}`,
    "",
    `${labels.message}:`,
    message,
  ].join("\n");
}

export function parseContactSubmission(payload) {
  const locale = payload?.locale === "fi" ? "fi" : "en";
  const name = normalizeValue(payload?.name);
  const email = normalizeValue(payload?.email).toLowerCase();
  const business = normalizeValue(payload?.business);
  const message = normalizeValue(payload?.message);

  if (!name) {
    throw new ContactValidationError("Name is required.");
  }

  if (!email) {
    throw new ContactValidationError("Email is required.");
  }

  if (!EMAIL_PATTERN.test(email)) {
    throw new ContactValidationError("Email address is invalid.");
  }

  if (!message) {
    throw new ContactValidationError("Message is required.");
  }

  validateLength("name", name);
  validateLength("email", email);
  validateLength("business", business);
  validateLength("message", message);

  return {
    locale,
    name,
    email,
    business,
    message,
  };
}

export async function sendContactEmail(submission) {
  const smtpUser = getRequiredEnv("SMTP_USER");
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || smtpUser;
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || smtpUser;
  const fromName = process.env.CONTACT_FROM_NAME?.trim() || "Oulify Website";
  const subject = submission.business || DEFAULT_SUBJECT[submission.locale];

  await getTransporter().sendMail({
    to: toEmail,
    from: formatAddress(fromName, fromEmail),
    replyTo: submission.email,
    subject,
    text: buildMessageText(submission),
  });
}

export { ContactValidationError };
