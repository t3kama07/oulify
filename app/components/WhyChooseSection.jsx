export default function WhyChooseSection({ whyChoose }) {
  return (
    <section className="section tone-soft" id="why-choose">
      <div className="shell">
        <div className="section-header why-header">
          <div className="section-heading why-heading">
            <h2>{whyChoose.title}</h2>
            {whyChoose.subtitle ? <p className="section-subtitle">{whyChoose.subtitle}</p> : null}
          </div>
        </div>

        <ul className="why-list" aria-label={whyChoose.aria || whyChoose.title}>
          {whyChoose.items.map((item) => (
            <li key={item.title} className="why-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
