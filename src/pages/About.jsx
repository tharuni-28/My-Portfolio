import { about, profile } from "../data/resumeData.js";
import "./About.css";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">SYS.02 // About</span>
          <h2>Who I am</h2>
        </div>

        <div className="about-grid">
          <div>
            <p className="about-lead">{about.intro}</p>
            <p style={{ marginTop: 18 }}>{about.background}</p>
            <p style={{ marginTop: 18 }}>{about.goals}</p>
          </div>

          <div className="brkt-card about-edu">
            <span className="pin-tag">// EDUCATION</span>
            <div className="about-edu__list">
              {about.education.map((e) => (
                <div className="about-edu__item" key={e.degree}>
                  <h3 style={{ fontSize: "1rem" }}>{e.degree}</h3>
                  <p className="about-edu__inst">{e.institution}</p>
                  <div className="about-edu__meta">
                    <span>{e.period}</span>
                    <span>{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-head" style={{ marginTop: 72 }}>
          <span className="eyebrow">SYS.03 // Why Work With Me</span>
          <h2>What I bring to a team</h2>
        </div>

        <div className="grid-2">
          {about.whyWorkWithMe.map((item, i) => (
            <div className="brkt-card" key={item.title}>
              <span className="pin-tag">PIN.0{i + 1}</span>
              <h3 style={{ marginTop: 10 }}>{item.title}</h3>
              <p style={{ marginTop: 8 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
