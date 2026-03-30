export default function FAQSection({ faq }) {
  if (!faq?.items?.length) {
    return null;
  }

  return (
    <section className="section tone-plain" id="faq">
      <div className="shell">
        <div className="section-header faq-header">
          <div className="section-heading faq-heading">
            <h2>{faq.title}</h2>
            {faq.subtitle ? <p className="section-subtitle">{faq.subtitle}</p> : null}
          </div>
        </div>

        <div className="faq-list" aria-label={faq.aria || faq.title}>
          {faq.items.map((item, index) => (
            <details key={item.question} className="faq-item" open={index === 0}>
              <summary className="faq-question">{item.question}</summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
