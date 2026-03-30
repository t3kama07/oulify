export default function WhatsAppButton({ locale = "en" }) {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const phoneNumber = rawNumber.replace(/\D/g, "");

  if (!phoneNumber) return null;

  const isFinnish = locale === "fi";
  const label = isFinnish ? "Ota yhteys WhatsAppissa" : "Contact on WhatsApp";
  const message = isFinnish
    ? "Hei Oulify, haluan keskustella projektista."
    : "Hi Oulify, I'd like to discuss a project.";
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M19.11 17.02c-.27-.14-1.6-.79-1.85-.88s-.43-.13-.61.14-.7.88-.85 1.06-.31.2-.58.07c-.27-.14-1.13-.42-2.15-1.35-.8-.71-1.33-1.58-1.49-1.84-.16-.27-.02-.41.12-.55.12-.12.27-.31.41-.46.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34s-.95.93-.95 2.26.97 2.63 1.11 2.81c.14.18 1.9 2.89 4.61 4.05.65.28 1.16.45 1.56.57.66.21 1.25.18 1.73.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.18.16-1.28-.07-.09-.24-.14-.5-.27Z" />
        <path d="M16.03 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.23.58 4.4 1.68 6.32L3.1 28.8l6.66-1.74a12.76 12.76 0 0 0 6.27 1.64h.01c7.07 0 12.8-5.73 12.8-12.8 0-3.43-1.34-6.65-3.77-9.07A12.72 12.72 0 0 0 16.03 3.2Zm.01 23.35h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.95 1.03 1.06-3.84-.25-.4a10.59 10.59 0 0 1 1.65-13.06 10.53 10.53 0 0 1 7.48-3.12c5.83 0 10.57 4.75 10.57 10.58 0 5.83-4.75 10.57-10.58 10.57Z" />
      </svg>
    </a>
  );
}
