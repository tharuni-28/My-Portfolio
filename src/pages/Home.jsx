import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload } from "react-icons/fi";
import { profile, projects, skills } from "../data/resumeData.js";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Home.css";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const skillGroups = Object.entries(skills);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="eyebrow">SYS.BOOT // Portfolio v1.0</span>
            <h1>
              Building full-stack
              <br />
              systems, end to end.
            </h1>
            <p className="hero__intro">
              I'm <strong>{profile.name}</strong> — a {profile.subtitle.toLowerCase()}. {profile.tagline}
            </p>

            <div className="btn-row" style={{ marginTop: 32 }}>
              <Link to="/projects" className="btn btn-primary">
                View Projects <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Hire Me
              </Link>
            </div>

            <div className="hero__social">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero__photo-wrap">
            <div className="hero__photo-frame">
              <img
                src={profile.photo}
                alt={profile.name}
                className="hero__photo"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              <div className="hero__photo-fallback">
                <span>TP</span>
              </div>
            </div>
            {/* Small schematic accent — kept subtle, ties back to ECE background */}
            <svg viewBox="0 0 200 60" className="hero__trace" aria-hidden="true">
              <g stroke="#d9dfe7" strokeWidth="1.5" fill="none">
                <path d="M0 30 H60 V10 H140" />
              </g>
              <g className="circuit-pulse" stroke="#0b6e8c" strokeWidth="2" fill="none">
                <path d="M0 30 H60 V10 H140" />
              </g>
              <circle cx="140" cy="10" r="4" fill="#f7f8fa" stroke="#0b6e8c" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* ---------------- QUICK SKILLS STRIP ---------------- */}
      <section className="section skills-strip">
        <div className="container">
          <span className="eyebrow">STACK.01 // Core Stack</span>
          <div className="skills-strip__row">
            {skillGroups.map(([group, list]) => (
              <div key={group} className="skills-strip__group">
                <span className="pin-tag">{group}</span>
                <div className="tag-row">
                  {list.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <span className="eyebrow">WORK.01 // Featured Projects</span>
              <h2>Selected work</h2>
            </div>
            <Link to="/projects" className="btn btn-ghost">
              All Projects <FiArrowRight />
            </Link>
          </div>
          <div className="grid-3">
            {featured.map((p) => (
              <ProjectCard project={p} key={p.id} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section cta-section" style={{ border: "none" }}>
        <div className="container cta-inner">
          <h2>Let's build something together.</h2>
          <p>Open to internships and full-time full-stack roles.</p>
          <div className="btn-row" style={{ marginTop: 24, justifyContent: "center" }}>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
            <a href={profile.resumeFile} download className="btn btn-ghost">
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
