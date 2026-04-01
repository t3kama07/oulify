import Link from "next/link";
import { getServicePath } from "@/lib/services";

export default function ServicesSection({
  groups = [],
  title,
  ariaLabel,
  locale = "",
  linkCards = false,
  intro = "",
}) {
  return (
    <section className="section tone-soft" id="services">
      <div className="shell">
        <div className="section-header services-header">
          <div className="section-heading">
            <h2>{title}</h2>
            {intro ? <p className="section-subtitle">{intro}</p> : null}
          </div>
        </div>
        <div className="service-groups" aria-label={ariaLabel}>
          {groups.map((group) => (
            linkCards && locale ? (
              <Link
                key={group.id || group.title}
                className="flow-item service-group-item service-group-card-link"
                href={getServicePath(locale, group)}
              >
                <h3>{group.title}</h3>
                {group.description ? <p className="service-group-description">{group.description}</p> : null}
                <ul className="service-group-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Link>
            ) : (
              <article key={group.id || group.title} className="flow-item service-group-item">
                <h3>{group.title}</h3>
                {group.description ? <p className="service-group-description">{group.description}</p> : null}
                <ul className="service-group-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
