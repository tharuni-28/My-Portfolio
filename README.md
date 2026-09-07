# Tharunika P — Portfolio

A React + Vite personal portfolio built from your resume.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Folder structure

```
src/
  data/resumeData.js     ← ALL your personal info lives here. Edit this file
                            to update anything across the whole site.
  components/             Navbar, Footer, ProjectCard (reused across pages)
  pages/                  One file per route (Home, About, Skills, ...)
public/
  assets/
    profile-photo.jpg     ← put your photo here
    projects/
      workflow-automation.png   ← project screenshots, named by project id
      sla-desk.png
      instagram-clone.png
      weather-app.png
      food-ordering-ui.png
  resume/
    Tharunika_P_Resume.pdf   ← put your resume PDF here (for the Download button)
```

## Things you need to add yourself

1. **Profile photo** — add a photo to `public/assets/profile-photo.jpg`.
   (Currently the hero uses an illustrated circuit diagram instead of a photo —
   if you'd rather show your photo, swap the `<svg>` block in `src/pages/Home.jsx`
   for an `<img src={profile.photo} />`.)
2. **Resume PDF** — add your resume to `public/resume/Tharunika_P_Resume.pdf`
   (or update the path in `src/data/resumeData.js` → `profile.resumeFile`).
3. **Project screenshots** — add images to `public/assets/projects/` named
   after each project's `id` (see `src/data/resumeData.js`), e.g.
   `workflow-automation.png`. If missing, the details page shows a clean
   placeholder instead of a broken image — nothing looks broken either way.
4. **GitHub/live links** — each project in `resumeData.js` has a `github` and
   `demo` field. Fill in `demo` with a live URL if you deploy any of these
   projects (Vercel/Netlify/Render are all free options).
5. **WhatsApp number** — `profile.whatsapp` is currently a placeholder
   `wa.me` link built from your resume phone number. Double check the number
   is correct (should be country code + number, no spaces or `+`).
6. **Contact form → email** — the contact form is fully built and captures
   input, but does **not** send real emails yet (no credentials were
   available). To connect it:
   - Sign up at [emailjs.com](https://www.emailjs.com/) (free tier is fine)
   - `npm install @emailjs/browser`
   - In `src/pages/Contact.jsx`, follow the `TODO` comment inside
     `handleSubmit` — uncomment/adapt the emailjs.send(emailjs.send(
  "service_8ayydwj",
  "template_4c2t2pg",
  {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  },
  "MpwV86gGNZKXL6coG"
);) call with your
     own Service ID, Template ID, and Public Key.

## Adding a new project later

Open `src/data/resumeData.js` and add a new object to the `projects` array:

```js
{
  id: "your-project-slug",
  name: "Project Name",
  year: "2026",
  tagline: "One-line summary.",
  stack: ["Tech", "Tech"],
  points: ["What you built", "Second point", "Third point"],
  github: "https://github.com/...",
  demo: "",
  featured: false, // true = shows on homepage
}
```

It will automatically appear on the Projects page and get its own detail
page at `/projects/your-project-slug`.
