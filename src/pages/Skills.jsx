import { skills } from "../data/resumeData.js";
import "./Skills.css";

export default function Skills() {
  const entries = Object.entries(skills);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">SYS.04 // Skills</span>
          <h2>Technical skills</h2>
          <p>Organized by category — the tools and languages I use to go from schema to shipped UI.</p>
        </div>

        <div className="grid-3">
          {entries.map(([group, list], i) => (
            <div className="brkt-card" key={group}>
              <span className="pin-tag">CAT.0{i + 1}</span>
              <h3 style={{ marginTop: 10, marginBottom: 16 }}>{group}</h3>
              <div className="skill-list">
                {list.map((s) => (
                  <div className="skill-list__item" key={s}>
                    <span className="skill-dot" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
