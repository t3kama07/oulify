"use client";

import Image from "next/image";
import ProjectCard from "./ProjectCard";
import useAutoScrollRail from "./useAutoScrollRail";

export default function ProjectsSection({
  projects,
  title = "Our Work",
  subtitle = "Case examples from recent client-focused builds",
  headingLevel = "h2",
  showMarquee = true,
  showGrid = false,
}) {
  const railItems =
    projects.length > 1
      ? [...projects, ...projects, ...projects, ...projects]
      : projects;
  const HeadingTag = headingLevel;
  const { containerRef, trackRef, isDragging, railProps } = useAutoScrollRail({
    itemCount: projects.length,
    speed: 0.028,
    enabled: showMarquee,
  });

  return (
    <section className="section tone-plain" id="projects">
      <div className="shell">
        <div className="section-header projects-header">
          <div className="section-heading projects-heading">
            <HeadingTag>{title}</HeadingTag>
            {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
          </div>
        </div>

        {showMarquee ? (
          <div
            ref={containerRef}
            className={`project-marquee${isDragging ? " is-dragging" : ""}`}
            aria-label={`${title} gallery`}
            {...railProps}
          >
            <div ref={trackRef} className="project-track">
              {railItems.map((project, index) => {
                const imageSrc = project.workImageSrc || "/assets/heroimage.png";

                return (
                  <article
                    key={`${project.id}-${index}`}
                    className="project-image-card"
                    aria-hidden={projects.length > 1 && index >= projects.length ? "true" : undefined}
                  >
                    <Image
                      className="project-image"
                      src={imageSrc}
                      alt={project.thumbnailAlt || `${project.title} preview`}
                      width={1200}
                      height={675}
                      sizes="(max-width: 768px) 85vw, 38vw"
                      draggable={false}
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
