import { getServicePath } from "@/lib/services";

export default function ServicePageSection({ locale, service, labels, relatedServices = [] }) {
  return (
    <section className="section tone-plain about-page">
      <div className="shell">
        <div className="about-copy">
          <header className="about-intro">
            <h1>{service.title}</h1>
            <p className="section-subtitle">{service.pageDescription}</p>
          </header>

          <article className="about-block">
            <h2>{labels.overviewHeading}</h2>
            {service.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          {service.items?.length ? (
            <article className="about-block">
              <h2>{labels.includesHeading}</h2>
              <ul className="about-list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ) : null}

          {relatedServices.length ? (
            <article className="about-block">
              <h2>{labels.relatedHeading}</h2>
              <p>{labels.relatedIntro}</p>
              <ul className="about-list">
                {relatedServices.map((relatedService) => (
                  <li key={relatedService.id}>
                    <a href={getServicePath(locale, relatedService)}>{relatedService.title}</a>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}

          <article className="about-block">
            <h2>{labels.contactHeading}</h2>
            <p>{labels.contactDescription}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={`/${locale}/#contact`}>
                {labels.contactLabel}
              </a>
              <a className="btn btn-secondary" href={`/${locale}/services`}>
                {labels.backToServicesLabel}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
