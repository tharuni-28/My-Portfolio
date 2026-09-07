import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiMessageCircle } from "react-icons/fi";
import { profile } from "../data/resumeData.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <div className="navbar__brand-name" style={{ marginBottom: 10 }}>
            {profile.name}
          </div>
          <p className="footer__desc">{profile.tagline}</p>
        </div>

        <div className="footer__col">
          <span className="pin-tag">// NAVIGATE</span>
          <div className="footer__links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer__col">
          <span className="pin-tag">// CONNECT</span>
          <div className="footer__icons">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FiMessageCircle />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {year} {profile.name}. Built with React &amp; Vite.
        </div>
      </div>
    </footer>
  );
}
