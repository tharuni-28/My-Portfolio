// ============================================================
// Central data file — edit YOUR info here and it updates
// everywhere across the site.
// ============================================================

export const profile = {
  name: "Tharunika P",
  title: "Full Stack Developer",
  subtitle: "Full Stack Developer · UI/UX Designer",
  tagline:
    "I build full-stack web applications — from REST APIs and databases to the interfaces people actually enjoy using.",
  email: "tharunikaperiyasamy2862005@gmail.com",
  phone: "+919345566040", // used for tel: link — replace if needed
  phoneDisplay: "+91 93455 66040",
  linkedin: "https://www.linkedin.com/in/tharunika-periyasamy-282b08306",
  github: "https://github.com/tharuni-28",
  whatsapp: "https://wa.me/919345566040", // replace number if different
  location: "Pollachi, Tamil Nadu, India",
  resumeFile: "/resume/resumea.pdf", // place your resume PDF here
  photo: "/assets/profile-photo.jpg", // place your photo here (see README)
};

export const about = {
  intro:
    "I'm a final-year Electronics and Communication Engineering student who found my strongest pull toward software — specifically, full-stack web development. Over the past two years I've moved from coursework into building real, working systems: REST APIs, database-backed applications, and interfaces designed in Figma before a single line of code is written.",
  background:
    "My foundation spans Java, JavaScript, Node.js and Spring Boot on the backend, React.js on the frontend, and Figma for interface design — giving me a full-stack view of how a product actually gets built, not just how it looks.",
  goals:
    "I'm looking for opportunities — internships or full-time roles — where I can build backend systems and APIs, ship frontend interfaces, and occasionally sit in on the design decisions too. Open to both software-focused and hardware-adjacent roles given my ECE background.",
  whyWorkWithMe: [
    {
      title: "Full-stack by practice, not just theory",
      description:
        "Every project on this site has a working backend, a real API, and a UI — not isolated tutorials.",
    },
    {
      title: "Design-aware development",
      description:
        "I prototype in Figma before I code, so the interfaces I build are intentional, not an afterthought.",
    },
    {
      title: "Engineering fundamentals",
      description:
        "An ECE background means I think in systems — how components connect, fail, and recover — applied to software architecture.",
    },
    {
      title: "Fast learner, documented process",
      description:
        "Certified in Java (IBM/Coursera) and UI/UX (Google/Coursera), with a habit of picking up new tools quickly and cleanly.",
    },
  ],
  education: [
    {
      degree: "B.E. Electronics and Communication Engineering",
      institution: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
      period: "2023 – 2027 (currently 6th semester)",
      score: "CGPA 8.10",
    },
    {
      degree: "HSC",
      institution: "P.K.D Matriculation Higher Secondary School, Pollachi",
      period: "2023",
      score: "75.6%",
    },
    {
      degree: "SSLC",
      institution: "P.K.D Matriculation Higher Secondary School, Pollachi",
      period: "2023",
      score: "Pass",
    },
  ],
};

export const skills = {
  Programming: ["Java", "JavaScript", "C"],
  Frontend: ["React.js", "HTML", "CSS", "JavaScript"],
  Backend: ["Node.js", "Express.js", "Spring Boot"],
  Databases: ["PostgreSQL", "Firebase (Firestore)"],
  "Core Concepts": ["OOPs", "DBMS", "Data Structures"],
  Tools: ["Figma", "Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"],
};

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications — from database schema and REST APIs to a finished, responsive frontend.",
    icon: "layers",
  },
  {
    title: "Backend & API Development",
    description:
      "REST APIs and server-side logic built with Node.js/Express or Java/Spring Boot, backed by PostgreSQL or Firebase.",
    icon: "server",
  },
  {
    title: "Frontend Development",
    description:
      "Responsive, component-based interfaces built in React.js, translated carefully from design to code.",
    icon: "code",
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "Wireframes and interactive prototypes in Figma, grounded in intuitive navigation and clear user flows.",
    icon: "figma",
  },
  {
    title: "Database Integration",
    description:
      "Schema design and integration with PostgreSQL or Firebase for applications that need reliable, structured data.",
    icon: "database",
  },
];

export const projects = [
  {
    id: "workflow-automation",
    name: "Workflow Automation System",
    year: "2026",
    tagline: "Event-driven automation platform with a custom rule engine.",
    stack: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    points: [
      "Built an event-driven workflow automation platform with a custom rule engine and executor for automated task triggers.",
      "Designed modular REST APIs across authentication, event logging, and real-time metrics tracking.",
      "Integrated PostgreSQL database triggers to enable automated logging and analytics on workflow execution.",
    ],
    github: "https://github.com/tharuni-28",
    demo: "",
    featured: true,
  },
  {
    id: "sla-desk",
    name: "Customer Support & SLA Desk",
    year: "2026",
    tagline: "Support ticketing platform with SLA tracking and automated workflows.",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    points: [
      "Built a full-stack support ticketing platform with SLA tracking, priority-based routing, and automated escalation.",
      "Designed RESTful APIs with Express and PostgreSQL to manage ticket lifecycle, status updates, and audit logging.",
      "Implemented role-based workflows to streamline ticket assignment and reduce resolution turnaround time.",
    ],
    github: "https://github.com/tharuni-28",
    demo: "",
    featured: true,
  },
  {
    id: "instagram-clone",
    name: "Instagram Clone",
    year: "2025",
    tagline: "Full-stack social app with real-time Firebase data handling.",
    stack: ["React.js", "Firebase Auth", "Firestore"],
    points: [
      "Developed a full-stack Instagram clone with Firebase Authentication and Firestore for real-time data handling.",
      "Built core social features — posts, likes, and user profiles — with a responsive, mobile-first UI.",
      "Implemented real-time database sync for instant updates across posts and interactions.",
    ],
    github: "https://github.com/tharuni-28",
    demo: "",
    featured: true,
  },
  {
    id: "weather-app",
    name: "Weather Application",
    year: "2025",
    tagline: "Full-stack weather app with authentication and live forecasts.",
    stack: ["Node.js", "Express.js", "REST APIs"],
    points: [
      "Built a full-stack weather application with secure user authentication and a database-backed history of searches.",
      "Designed REST APIs integrating third-party weather data for real-time, location-based forecasts.",
      "Structured backend routes and models cleanly (auth, weather, user) for straightforward scaling.",
    ],
    github: "https://github.com/tharuni-28",
    demo: "",
    featured: false,
  },
  {
    id: "food-ordering-ui",
    name: "Food Ordering App — UI/UX",
    year: "2025",
    tagline: "Responsive food-ordering interface designed end-to-end in Figma.",
    stack: ["Figma", "UI/UX Design", "Prototyping"],
    points: [
      "Designed a fully responsive food-ordering interface focused on intuitive navigation and clear visual hierarchy.",
      "Built interactive wireframes and prototypes covering menu browsing, cart, and checkout flows.",
      "Applied user-centered design principles to streamline the end-to-end ordering experience.",
    ],
    github: "",
    demo: "",
    featured: false,
  },
];

export const hardwareProjects = [
  {
    id: "fire-alarm-thermistor",
    name: "Fire Alarm System using Thermistor",
    stack: ["Thermistor", "Analog Circuit Design"],
    points: [
      "Built a temperature-triggered fire alarm circuit using a thermistor as the sensing element to detect abnormal heat rise.",
      "Designed the circuit to sound an alarm automatically once temperature crossed a set threshold, enabling early fire detection.",
    ],
  },
  {
    id: "fastest-finger-timer",
    name: "Fastest Finger First Circuit using Timer IC",
    stack: ["555 Timer IC", "Digital Logic"],
    points: [
      "Designed a fastest-finger-first buzzer circuit using a 555 timer IC to detect and lock in the first player's response.",
      "Added indicator LEDs and a reset mechanism to ensure fair, real-time detection of the winning press among multiple players.",
    ],
  },
  {
    id: "eeg-wheelchair",
    name: "EEG Controlled Wheelchair",
    stack: ["EEG Signal Processing", "Non-Invasive BCI"],
    points: [
      "Developed a non-invasive EEG-based control model that interprets raw brainwave signals to enable wheelchair movement.",
      "Focused on signal extraction and classification to translate neural activity into directional motor commands.",
    ],
  },
];

export const knowledge = [
  {
    area: "Frontend Development",
    detail: "React.js component architecture, responsive layouts, state management.",
  },
  {
    area: "Backend Development",
    detail: "REST API design with Node.js/Express and Java/Spring Boot.",
  },
  {
    area: "Databases",
    detail: "Relational schema design (PostgreSQL), NoSQL with Firestore, core DBMS concepts.",
  },
  {
    area: "UI/UX Design",
    detail: "Wireframing, prototyping, and user-flow design in Figma.",
  },
  {
    area: "Computer Science Fundamentals",
    detail: "OOPs, Data Structures, DBMS theory.",
  },
  {
    area: "Embedded & IoT Systems",
    detail: "Wearable health-monitoring hardware, Arduino, motor control in C — from ECE coursework and internships.",
  },
];

export const experience = [
  {
    role: "Hardware Development Intern",
    company: "AJ Research Lab, Coimbatore",
    period: "Jun 2025 – Jul 2025",
    description: "Worked on wearable health-monitoring devices for ICU patients.",
  },
  {
    role: "Trainee",
    company: "Robo Miracle",
    period: "2024",
    description: "Gained knowledge of IoT-based systems, robotics, Arduino, and motor control using C.",
  },
];

export const certifications = [
  "Java Programming for Beginners — Coursera (IBM), 2025",
  "UI/UX Design — Coursera (Google), 2025",
  "Workshop: Development of Eco-Friendly Lightweight Energy Storage Device, 2024",
];
