import { knowledge, experience, certifications } from "../data/resumeData.js";
import "./Knowledge.css";

export default function Knowledge() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">SYS.06 // Knowledge</span>
          <h2>Areas of knowledge</h2>
          <p>Technical ground I've covered through coursework, projects, and internships.</p>
        </div>

        <div className="grid-3">
          {knowledge.map((k, i) => (
            <div className="brkt-card" key={k.area}>
              <span className="pin-tag">K.0{i + 1}</span>
              <h3 style={{ marginTop: 8, marginBottom: 6 }}>{k.area}</h3>
              <p>{k.detail}</p>
            </div>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: 72 }}>
          <span className="eyebrow">SYS.07 // Experience</span>
          <h2>Internships</h2>
        </div>

        <div className="exp-list">
          {experience.map((e) => (
            <div className="exp-item" key={e.role}>
              <div className="exp-item__meta">
                <span className="pin-tag">{e.period}</span>
              </div>
              <div>
                <h3 style={{ fontSize: "1.05rem" }}>{e.role}</h3>
                <p className="exp-item__company">{e.company}</p>
                <p style={{ marginTop: 6 }}>{e.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: 72 }}>
          <span className="eyebrow">SYS.08 // Certifications</span>
          <h2>Certifications</h2>
        </div>

        <div className="brkt-card">
          <ul className="cert-list">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
