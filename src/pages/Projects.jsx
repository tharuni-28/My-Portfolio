import { projects, hardwareProjects } from "../data/resumeData.js";
import ProjectCard from "../components/ProjectCard.jsx";
import "./ProjectDetails.css"; // reuses .pd-points list styling

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">WORK.00 // Software Projects</span>
          <h2>Software Projects</h2>
          <p>Five personal projects spanning full-stack apps, an automation platform, and UI/UX design.</p>
        </div>

        <div className="grid-3">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.id} />
          ))}
        </div>

        <div className="section-head" style={{ marginTop: 80 }}>
          <span className="eyebrow">WORK.02 // Hardware Projects</span>
          <h2>Hardware Projects</h2>
          <p>
            Circuit and embedded-systems work from my ECE coursework and internships — the other half of
            where I build.
          </p>
        </div>

        <div className="grid-3">
          {hardwareProjects.map((hp, i) => (
            <div className="brkt-card" key={hp.id}>
              <span className="pin-tag">HW.0{i + 1}</span>
              <h3 style={{ marginTop: 10, marginBottom: 12 }}>{hp.name}</h3>
              <ul className="pd-points" style={{ marginTop: 0 }}>
                {hp.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="tag-row">
                {hp.stack.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
