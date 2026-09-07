import { useRef,useState } from "react";
import emailjs from "@emailjs/browser" ;
import { FiMail, FiPhone, FiMessageCircle, FiLinkedin, FiGithub } from "react-icons/fi";
import { profile } from "../data/resumeData.js";
import "./Contact.css";

const CONTACT_METHODS = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    primary: true,
  },
  {
    icon: FiPhone,
    label: "Call",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
  },
  {
    icon: FiMessageCircle,
    label: "WhatsApp",
    value: "Message me",
    href: profile.whatsapp,
    external: true,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Connect",
    href: profile.linkedin,
    external: true,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "View work",
    href: profile.github,
    external: true,
  },
];

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sent"

  const handleChange =  (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    await emailjs.send(
      "service_8ayydwj",
      "template_ggaqhcs",
      {
        name:form.name,
        email:form.email,
        subject:form.subject,
        message:form.message
      },
      "MpwV86gGNZKXL6coG"

    );

    // ------------------------------------------------------------------
    // TODO: Connect this form to EmailJS (or your own backend) here.
    //
    // Example with EmailJS (npm install @emailjs/browser):
    //
    //   import emailjs from "@emailjs/browser";
    //   emailjs.send("SERVICE_ID", "TEMPLATE_ID", form, "PUBLIC_KEY");
    //
    // You'll need your own EmailJS service ID, template ID, and public
    // key — this form is wired and ready, it just needs those credentials.
    // ------------------------------------------------------------------
     setStatus("sent");
   // console.log("Form submitted (not yet connected to an email service):", form);
   
    setForm({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    console.error("EmailJS Error :",error);
    setStatus("error");
  }
};

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">SYS.10 // Contact</span>
          <h2>Let's talk</h2>
          <p>Have a project, internship, or role in mind? Reach out — email is the fastest way to reach me.</p>
        </div>

        <div className="contact-grid">
          <form ref={formRef}
          className="brkt-card contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
              />
            </div>
            <div className="form-row">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the opportunity or project..."
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Send Message
            </button>

            {status === "sent" && (
              <p className="form-status">
               Message sent successfully! I'll get back to you as soon I can.
              </p>
            )}
          </form>

          <div className="contact-methods">
            {CONTACT_METHODS.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noreferrer" : undefined}
                className={`contact-method ${m.primary ? "contact-method--primary" : ""}`}
              >
                <m.icon size={18} />
                <div>
                  <span className="contact-method__label">{m.label}</span>
                  <span className="contact-method__value">{m.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
