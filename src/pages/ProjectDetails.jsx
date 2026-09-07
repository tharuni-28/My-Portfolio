import { useParams, Link, Navigate } from "react-router-dom";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { projects } from "../data/resumeData.js";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <section className="section">
      <div className="container">
        <Link to="/projects" className="back-link">
          <FiArrowLeft /> All Projects
        </Link>

        <div className="pd-head">
          <span className="eyebrow">{project.year} // Project Detail</span>
          <h1>{project.name}</h1>
          <p className="pd-tagline">{project.tagline}</p>

          <div className="tag-row">
            {project.stack.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 28 }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <FiGithub /> View Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="pd-image">
          {/* Replace with a real screenshot: /public/assets/projects/{project.id}.png */}
          <img
            src={`/assets/projects/${project.id}.png`}
            alt={`${project.name} screenshot`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <div className="pd-image__placeholder">
            <span className="pin-tag">// Add screenshot at /public/assets/projects/{project.id}.png</span>
          </div>
        </div>

        <div className="brkt-card pd-body">
          <span className="pin-tag">// WHAT I BUILT</span>
          <ul className="pd-points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
