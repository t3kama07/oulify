export default function CareersSection({ careers }) {
  return (
    <section className="section tone-plain about-page">
      <div className="shell">
        <div className="about-copy">
          <header className="about-intro">
            <h1>{careers.title}</h1>
            <p>
              {careers.messageBefore}
              <a href={`mailto:${careers.email}`}>{careers.email}</a>
              {careers.messageAfter}
            </p>
          </header>
        </div>
      </div>
    </section>
  );
}
