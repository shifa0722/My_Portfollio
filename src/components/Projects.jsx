
function Projects({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <article className="project-card" key={project.title}>
          <div className="project-card-top">
            <span className="project-index">
              0{index + 1}
            </span>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <span className="github-text">GH ↗</span>
            </a>
          </div>

          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>

          <p className="project-description">
            {project.description}
          </p>

          <div className="tech-list">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <a
            className="project-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            View project ↗
          </a>
        </article>
      ))}
    </div>
  );
}

export default Projects;
