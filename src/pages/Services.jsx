import { FiLayers, FiServer, FiCode, FiFigma, FiDatabase } from "react-icons/fi";
import { services } from "../data/resumeData.js";
import { Link } from "react-router-dom";
import "./Services.css";

const ICONS = {
  layers: FiLayers,
  server: FiServer,
  code: FiCode,
  figma: FiFigma,
  database: FiDatabase,
};

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">SYS.05 // Services</span>
          <h2>What I can build for you</h2>
          <p>Based on the stack I actually work in — no services outside what I can back up with a project.</p>
        </div>

        <div className="grid-3">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] || FiCode;
            return (
              <div className="brkt-card service-card" key={s.title}>
                <div className="service-card__icon">
                  <Icon size={20} />
                </div>
                <span className="pin-tag">SVC.0{i + 1}</span>
                <h3 style={{ marginTop: 8, marginBottom: 8 }}>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            );
          })}
        </div>

        <div className="services-cta">
          <p>Have a project in mind?</p>
          <Link to="/contact" className="btn btn-primary">
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
