export default function Footer({ locale, footer }) {
  const year = new Date().getFullYear();
  const hasLegalLinks = footer.privacyUrl || footer.termsUrl;

  return (
    <div className="footer-panel">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>{footer.name}</h3>
          {footer.role ? <p>{footer.role}</p> : null}
          {footer.serviceArea ? <p>{footer.serviceArea}</p> : null}
          <p className="footer-copyright">&copy; {year} {footer.name}. All rights reserved.</p>
        </div>

        <div className="footer-col">
          <h4>{footer.companyHeading}</h4>
          <a href={`/${locale}/about`}>{footer.about}</a>
          <a href={`/${locale}/careers`}>{footer.careers}</a>
          <a href={`/${locale}/#projects`}>{footer.projects}</a>
        </div>

        <div className="footer-col">
          <h4>{footer.getStartedHeading}</h4>
          <a href={`/${locale}/#top`}>{footer.home}</a>
          <a href={`/${locale}/#services`}>{footer.services}</a>
          <a href={`/${locale}/#contact`}>{footer.contact}</a>
          <a href={`/${locale}/#contact`}>{footer.requestCv}</a>
        </div>

        <div className="footer-col">
          <h4>{footer.contactHeading}</h4>
          <a href="mailto:hello@oulify.com">hello@oulify.com</a>
          <p>{footer.location}</p>
          {footer.linkedinUrl ? (
            <a href={footer.linkedinUrl} target="_blank" rel="noopener noreferrer">
              {footer.linkedin}
            </a>
          ) : null}
        </div>
      </div>

      {hasLegalLinks ? (
        <div className="footer-meta">
          <div className="footer-legal">
            {footer.privacyUrl ? <a href={footer.privacyUrl}>{footer.privacyLabel || "Privacy Policy"}</a> : null}
            {footer.termsUrl ? <a href={footer.termsUrl}>{footer.termsLabel || "Terms of Service"}</a> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
