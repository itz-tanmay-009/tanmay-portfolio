export const profile = {
  name: "Tanmay Kumar Mallick",
  shortName: "Tanmay",
  brand: "Tanmay.dev",
  title: "Aspiring Software Developer",
  location: "Odisha, India",
  university: "Centurion University",
  email: "tanmaykumar5147@gmail.com",
  summary:
    "I am a BCA student passionate about software development, backend systems, cybersecurity, ethical hacking, networking, and AI-powered security solutions.",
  intro:
    "I enjoy building scalable applications, REST APIs, backend systems, cybersecurity tools, and modern web experiences that feel fast, secure, and useful.",
  roles: [
    "Aspiring Software Developer",
    "Backend Developer",
    "Cybersecurity Enthusiast",
    "BCA Student",
  ],
  passions: [
    "Software Development",
    "Backend Development",
    "Cybersecurity",
    "Networking",
    "Ethical Hacking",
    "AI Security",
  ],
  stats: [
    { label: "Projects", value: "5+" },
    { label: "Internships", value: "1" },
    { label: "Certifications", value: "5+" },
    { label: "Technologies Learned", value: "20+" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/itz-tanmay-009", kind: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tanmay-ku-mallick-858405334",
      kind: "linkedin",
    },
    { label: "Email", href: "mailto:tanmaykumar5147@gmail.com", kind: "email" },
    { label: "LeetCode", href: "https://leetcode.com/", kind: "leetcode" },
  ],
  resume: "/resume.pdf",
};

export const navigationItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const skillGroups = [
  {
    title: "Programming",
    description: "Core languages for problem solving, tools, and application logic.",
    skills: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    title: "Frontend",
    description: "Responsive, accessible interfaces with modern React tooling.",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "REST APIs, services, authentication flows, and server-side logic.",
    skills: ["Node.js", "Express.js", "FastAPI", "EJS"],
  },
  {
    title: "Database",
    description: "Relational data modeling, queries, and application persistence.",
    skills: ["SQL", "MySQL", "SQLite3", "CSV Storage"],
  },
  {
    title: "Cybersecurity",
    description: "Security fundamentals, recon workflows, and assessment practice.",
    skills: ["Linux", "Kali Linux", "Networking", "Nmap", "OWASP Basics", "Vulnerability Assessment"],
  },
  {
    title: "Tools",
    description: "Daily engineering workflow, testing, version control, and deployment.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "ReportLab"],
  },
];

export const projects = [
  {
    title: "Network Scanner",
    description:
      "Python cybersecurity reconnaissance tool with a modern Tkinter GUI for host discovery, TCP port scanning, service detection, banner grabbing, OS fingerprinting, risk analysis, scan history, and professional TXT, CSV, PDF, and HTML reports.",
    stack: ["Python", "Tkinter", "SQLite3", "Scapy", "ReportLab"],
    image: "/assets/project-network-scanner.svg",
    github: "https://github.com/itz-tanmay-009/Network-Scanner",
    demo: "https://github.com/itz-tanmay-009/Network-Scanner",
    demoLabel: "Details",
  },
  {
    title: "ATS Resume Maker",
    description:
      "Full-stack resume builder for ATS-friendly resumes with live preview, ATS score analysis, job description matching, PDF/DOCX export, analytics, multiple templates, authentication, and resume management.",
    stack: ["JavaScript", "Node.js", "Express.js", "EJS", "MySQL"],
    image: "/assets/project-ats-resume.svg",
    github: "https://github.com/itz-tanmay-009/ATS-Resume-Maker",
    demo: "https://github.com/itz-tanmay-009/ATS-Resume-Maker",
    demoLabel: "Details",
  },
  {
    title: "Restaurant Order Management System",
    description:
      "Console-based C++ restaurant ordering system with menu display, item ID selection, quantity input, multiple item ordering, input validation, automatic billing, and a final bill summary.",
    stack: ["C++", "iostream", "iomanip", "Functions", "Loops"],
    image: "/assets/project-restaurant.svg",
    github: "https://github.com/itz-tanmay-009/PROJECT--RESTAURANT-ORDER-MANAGEMENT-SYSTEM-",
    demo: "https://github.com/itz-tanmay-009/PROJECT--RESTAURANT-ORDER-MANAGEMENT-SYSTEM-",
    demoLabel: "Details",
  },
  {
    title: "Employee Salary Management System",
    description:
      "Java desktop application for employee records, salary designations, allowances, deductions, secure login, monthly pay slip generation, print support, and automatic CSV-based data storage.",
    stack: ["Java", "Desktop UI", "CSV Files", "Pay Slip Logic"],
    image: "/assets/project-employee-salary.svg",
    github: "https://github.com/itz-tanmay-009/Employee-Salary-Management-System",
    demo: "https://github.com/itz-tanmay-009/Employee-Salary-Management-System",
    demoLabel: "Details",
  },
  {
    title: "Python Development",
    description:
      "Python development practice focused on scripting, file and data handling, debugging, automation fundamentals, problem solving, and building practical tools.",
    stack: ["Python", "Automation", "File Handling", "Debugging"],
    image: "/assets/project-python-development.svg",
    github: "https://github.com/itz-tanmay-009",
    demo: "https://github.com/itz-tanmay-009",
    demoLabel: "Profile",
  },
];

export const experiences = [
  {
    role: "Backend Development Internship",
    period: "Internship Experience",
    summary:
      "Completed one backend development internship focused on API design concepts, backend workflows, database interaction, testing, and clean service-layer thinking.",
    highlights: ["REST API structure", "Database-backed features", "Postman testing", "Reusable backend patterns"],
  },
];

export const certifications = [
  {
    title: "Cybersecurity Fundamentals",
    issuer: "Certificate Placeholder",
    focus: "Security basics, threat awareness, and defensive thinking.",
  },
  {
    title: "Python Development",
    issuer: "Certificate Placeholder",
    focus: "Python syntax, scripting, data structures, and practical workflows.",
  },
  {
    title: "Backend Development",
    issuer: "Certificate Placeholder",
    focus: "API concepts, server-side design, routing, and database usage.",
  },
  {
    title: "Networking Essentials",
    issuer: "Certificate Placeholder",
    focus: "TCP/IP, ports, protocols, scanning, and troubleshooting fundamentals.",
  },
  {
    title: "Web Development",
    issuer: "Certificate Placeholder",
    focus: "HTML, CSS, JavaScript, responsive layout, and React foundations.",
  },
];

export const githubHighlights = [
  { label: "Contribution Graph", value: "Consistent learning and project activity" },
  { label: "GitHub Stats", value: "Network Scanner, ATS Resume Maker, C++ and Java projects" },
  { label: "Top Languages", value: "JavaScript, Python, Java, C++" },
];
