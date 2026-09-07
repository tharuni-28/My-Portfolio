import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div className="brkt-card project-card">
      <div className="project-card__top">
        <span className="pin-tag">{project.year}</span>
        {project.featured && <span className="tag tag--accent">Full-Stack</span>}
      </div>

      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__tagline">{project.tagline}</p>

      <div className="tag-row">
        {project.stack.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="project-card__actions">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub repo">
            <FiGithub /> Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="icon-link" aria-label="Live demo">
            <FiExternalLink /> Live
          </a>
        )}
        <Link to={`/projects/${project.id}`} className="icon-link icon-link--primary">
          Details <FiArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
