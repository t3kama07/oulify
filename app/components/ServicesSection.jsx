export default function ServicesSection({ groups = [], title, ariaLabel }) {
  return (
    <section className="section tone-soft" id="services">
      <div className="shell">
        <div className="section-header services-header">
          <div className="section-heading">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="service-groups" aria-label={ariaLabel}>
          {groups.map((group) => (
            <article key={group.title} className="flow-item service-group-item">
              <h3>{group.title}</h3>
              {group.description ? <p className="service-group-description">{group.description}</p> : null}
              <ul className="service-group-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
