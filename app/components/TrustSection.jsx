export default function TrustSection({ trust }) {
  const renderStars = (rating = 5) => "\u2605".repeat(Math.max(0, Math.min(5, rating)));

  return (
    <section className="section tone-soft" id="trust">
      <div className="shell trust-wrap">
        <div className="section-header trust-header">
          <div className="section-heading trust-heading">
            <h2>{trust.title}</h2>
            {trust.subtitle ? <p className="section-subtitle">{trust.subtitle}</p> : null}
          </div>
        </div>

        {trust.reviewsTitle ? <h3 className="reviews-title">{trust.reviewsTitle}</h3> : null}
        {trust.ratingSummary ? <p className="reviews-summary">{trust.ratingSummary}</p> : null}

        <div className="trust-grid">
          {trust.quotes.map((quote) => (
            <blockquote key={quote.author} className="trust-quote-card">
              <span className="quote-mark" aria-hidden="true">
                "
              </span>
              <p className="review-stars" aria-label={`${quote.rating || 5} out of 5 stars`}>
                {renderStars(quote.rating)}
              </p>
              <p className="quote-text">"{quote.text}"</p>
              <hr className="quote-divider" />
              <cite>
                <span className="quote-author">{quote.author}</span>
                {quote.company ? <span className="quote-role">{quote.company}</span> : null}
                {quote.location ? <span className="quote-location">{quote.location}</span> : null}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
