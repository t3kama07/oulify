"use client";

import useAutoScrollRail from "./useAutoScrollRail";

export default function TrustSection({ trust }) {
  const renderStars = (rating = 5) => "\u2605".repeat(Math.max(0, Math.min(5, rating)));
  const quotes = Array.isArray(trust.quotes) ? trust.quotes : [];
  const railQuotes =
    quotes.length > 1
      ? [...quotes, ...quotes, ...quotes, ...quotes]
      : quotes;
  const { containerRef, trackRef, isDragging, railProps } = useAutoScrollRail({
    itemCount: quotes.length,
    speed: 0.024,
  });

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

        <div
          ref={containerRef}
          className={`trust-marquee${isDragging ? " is-dragging" : ""}`}
          aria-label={`${trust.title} reviews`}
          {...railProps}
        >
          <div ref={trackRef} className="trust-track">
            {railQuotes.map((quote, index) => (
              <blockquote
                key={`${quote.author}-${quote.location || "quote"}-${index}`}
                className="trust-quote-card"
                aria-hidden={quotes.length > 1 && index >= quotes.length ? "true" : undefined}
              >
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
      </div>
    </section>
  );
}
