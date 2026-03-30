import Image from "next/image";
export default function ProjectCard({ project }) {

  return (
    <article className="glass-card project-card">
      {project.thumbnailSrc ? (
        <Image
          className="project-thumb"
          src={project.thumbnailSrc}
          alt={project.thumbnailAlt || `${project.title} thumbnail`}
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 33vw"
          style={project.thumbnailPosition ? { objectPosition: project.thumbnailPosition } : undefined}
        />
      ) : (
        <div className={`project-thumb ${project.thumbnailClass || ""}`} aria-hidden="true" />
      )}

      <h3>{project.title}</h3>
      <p className="tech">{project.stack}</p>
      <p className="project-description">{project.description}</p>
    </article>
  );
}
