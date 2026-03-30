export default function AboutSection({ about }) {
  return (
    <section className="section tone-plain about-page">
      <div className="shell">
        <div className="about-copy">
          <header className="about-intro">
            <h1>{about.title}</h1>
            <p className="section-subtitle">{about.intro}</p>
          </header>

          <article className="about-block">
            <h2>{about.whyStarted.title}</h2>
            {about.whyStarted.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="about-block">
            <h2>{about.howWeWork.title}</h2>
            {about.howWeWork.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="about-block">
            <h2>{about.whatWeCareAbout.title}</h2>
            <ul className="about-list">
              {about.whatWeCareAbout.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="about-block">
            <h2>{about.whatDrivesUs.title}</h2>
            <p>
              <strong>{about.whatDrivesUs.mission.label}:</strong>{" "}
              {about.whatDrivesUs.mission.description}
            </p>
            <p>
              <strong>{about.whatDrivesUs.vision.label}:</strong>{" "}
              {about.whatDrivesUs.vision.description}
            </p>
          </article>

          <article className="about-block">
            <h2>{about.whereWeWork.title}</h2>
            {about.whereWeWork.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
