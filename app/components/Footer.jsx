import Image from "next/image";
import { getLocalizedPath } from "@/lib/i18n";
import { LOGO_HEIGHT, LOGO_WIDTH } from "@/lib/logo-dimensions";
import { getLogoSrc } from "@/lib/logo";

export default function Footer({ locale, footer }) {
  const year = new Date().getFullYear();
  const brandLogoSrc = getLogoSrc("/assets/logo.png");
  const rightsReserved = footer.rightsReserved || (locale === "fi" ? "Kaikki oikeudet pidätetään." : "All rights reserved.");
  const socialLabel = locale === "fi" ? "Sosiaalinen media" : "Social media";
  const legalLinks = [
    {
      href: getLocalizedPath(locale, "/privacy-policy"),
      label: footer.privacyLabel,
    },
    {
      href: getLocalizedPath(locale, "/terms-and-conditions"),
      label: footer.termsLabel,
    },
    {
      href: getLocalizedPath(locale, "/refund-policy"),
      label: footer.refundLabel,
    },
  ].filter((link) => link.label);
  const hasLegalLinks = legalLinks.length > 0;

  return (
    <div className="footer-panel">
      <div className="footer-grid">
        <div className="footer-col">
          <h3 className="footer-brand">
            <Image
              className="footer-brand-logo"
              src={brandLogoSrc}
              alt={footer.name}
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
            />
          </h3>
          {footer.role ? <p>{footer.role}</p> : null}
          {footer.serviceArea ? <p>{footer.serviceArea}</p> : null}
          <p className="footer-copyright">&copy; {year} {footer.name}. {rightsReserved}</p>
          {footer.facebookUrl ? (
            <div className="footer-socials" aria-label={socialLabel}>
              <a
                className="footer-social-link"
                href={footer.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={footer.facebook}
                title={footer.facebook}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 21v-7h2.35l.35-2.75H13.5V9.5c0-.8.22-1.35 1.37-1.35H16.3V5.7c-.25-.03-1.1-.1-2.1-.1-2.07 0-3.5 1.26-3.5 3.58v2.02H8.35V14h2.35v7h2.8Z" />
                </svg>
              </a>
            </div>
          ) : null}
        </div>

        <div className="footer-col">
          <h4>{footer.companyHeading}</h4>
          <a href={getLocalizedPath(locale, "/about")}>{footer.about}</a>
          <a href={getLocalizedPath(locale, "/careers")}>{footer.careers}</a>
          <a href={getLocalizedPath(locale, "/#projects")}>{footer.projects}</a>
        </div>

        <div className="footer-col">
          <h4>{footer.getStartedHeading}</h4>
          <a href={getLocalizedPath(locale, "/#top")}>{footer.home}</a>
          <a href={getLocalizedPath(locale, "/#services")}>{footer.services}</a>
          <a href={getLocalizedPath(locale, "/#contact")}>{footer.contact}</a>
          <a href={getLocalizedPath(locale, "/#contact")}>{footer.requestCv}</a>
        </div>

        <div className="footer-col footer-col-contact">
          <h4>{footer.contactHeading}</h4>
          <div className="footer-contact-content">
            <div className="footer-contact-links">
              <a href="mailto:hello@oulify.com">hello@oulify.com</a>
              <p>{footer.location}</p>
              {footer.linkedinUrl ? (
                <a href={footer.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  {footer.linkedin}
                </a>
              ) : null}
            </div>
            {hasLegalLinks ? (
              <div className="footer-legal footer-contact-legal">
                {legalLinks.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
