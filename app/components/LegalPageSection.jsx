export default function LegalPageSection({ page }) {
  return (
    <section className="section tone-plain about-page">
      <div className="shell">
        <div className="about-copy">
          <header className="about-intro">
            <h1>{page.title}</h1>
            <p className="section-subtitle">{page.intro}</p>
          </header>

          <article className="about-block">
            <p>
              <strong>{page.effectiveDateLabel}:</strong> {page.effectiveDate}
            </p>
          </article>

          {page.sections.map((section) => (
            <article key={section.title} className="about-block">
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items?.length ? (
                <ul className="about-list">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
