import Image from "next/image";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({
  projects,
  title = "Our Work",
  subtitle = "Case examples from recent client-focused builds",
  headingLevel = "h2",
  showMarquee = true,
  showGrid = false,
}) {
  const railItems = [...projects, ...projects];
  const HeadingTag = headingLevel;

  return (
    <section className="section tone-plain" id="projects">
      <div className="shell">
        <div className="section-header projects-header">
          <div className="section-heading projects-heading">
            <HeadingTag>{title}</HeadingTag>
            <p className="section-subtitle">{subtitle}</p>
          </div>
        </div>

        {showMarquee ? (
          <div className="project-marquee" aria-label={`${title} gallery`}>
            <div className="project-track">
              {railItems.map((project, index) => {
                const imageSrc = project.workImageSrc || "/assets/heroimage.png";

                return (
                  <article key={`${project.id}-${index}`} className="project-image-card">
                    <Image
                      className="project-image"
                      src={imageSrc}
                      alt={project.thumbnailAlt || `${project.title} preview`}
                      width={1200}
                      height={675}
                      sizes="(max-width: 768px) 85vw, 38vw"
                    />
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}

        {showGrid ? (
          <div className="project-grid" aria-label={`${title} projects`}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
