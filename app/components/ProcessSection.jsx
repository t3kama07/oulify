export default function ProcessSection({ process }) {
  return (
    <section className="section tone-plain" id="skills">
      <div className="shell">
        <div className="section-header process-header">
          <div className="section-heading process-heading">
            <h2>{process.title}</h2>
            {process.subtitle ? <p className="section-subtitle">{process.subtitle}</p> : null}
          </div>
        </div>

        <ol className="process-flow" aria-label={process.aria || process.title}>
          {process.items.map((step, index) => (
            <li key={typeof step === "string" ? step : step.title} className={`process-step ${index % 2 === 0 ? "is-left" : "is-right"}`}>
              <span className="process-node" aria-hidden="true" />
              <article className="process-card">
                <h3>
                  <span className="process-index">{index + 1}</span>
                  <span>{typeof step === "string" ? step : step.title}</span>
                </h3>
                {typeof step === "object" && step.description ? <p>{step.description}</p> : null}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
