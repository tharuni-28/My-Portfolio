import { FiDownload } from "react-icons/fi";
import { profile, about, skills } from "../data/resumeData.js";
import "./Resume.css";

export default function Resume() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--row">
          <div>
            <span className="eyebrow">SYS.09 // Resume</span>
            <h2>Resume</h2>
          </div>
          <a href={profile.resumeFile} download className="btn btn-primary">
            <FiDownload /> Download PDF
          </a>
        </div>

        <div className="resume-preview brkt-card">
          <div className="resume-preview__row">
            <h3>{profile.name}</h3>
            <span className="pin-tag">{profile.title}</span>
          </div>
          <p style={{ marginTop: 6 }}>{profile.email} · {profile.phoneDisplay}</p>

          <div className="resume-block">
            <span className="pin-tag">// EDUCATION</span>
            {about.education.map((e) => (
              <div key={e.degree} className="resume-line">
                <strong>{e.degree}</strong> — {e.institution} ({e.period}, {e.score})
              </div>
            ))}
          </div>

          <div className="resume-block">
            <span className="pin-tag">// SKILLS</span>
            {Object.entries(skills).map(([group, list]) => (
              <div key={group} className="resume-line">
                <strong>{group}:</strong> {list.join(", ")}
              </div>
            ))}
          </div>

          <p className="resume-note">
            This is a quick preview. Download the full PDF for the complete resume, including projects,
            internships, and certifications.
          </p>
        </div>
      </div>
    </section>
  );
}
