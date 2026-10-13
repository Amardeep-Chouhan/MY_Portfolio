import codegecko from "../Assets/Projects/codegecko.webp";
import trovato from "../Assets/Projects/trovato.webp";
import linkup from "../Assets/Projects/linkup.webp";
import codemeet from "../Assets/Projects/codemeet.webp";
import githubAnalyzer from "../Assets/Projects/github-analyzer.webp";
import authEngine from "../Assets/Projects/authengine.webp";
import datalens from "../Assets/Projects/datalens.webp";

// Add `demoLink` only when a real, working live URL exists.
const projects = [
  {
    id: "codegecko",
    title: "CodeGecko",
    subtitle: "AI Code Review Platform",
    image: codegecko,
    description:
      "AI-powered code review platform that analyzes GitHub pull requests and delivers contextual, actionable feedback. Uses Gemini, RAG and event-driven workflows to flag code issues and speed up reviews.",
    tags: ["Next.js", "TypeScript", "Gemini", "RAG", "Prisma", "PostgreSQL"],
    ghLink: "https://github.com/Amardeep-Chouhan/CodeGecko---Code-Review-Platform",
    demoLink: "https://coderabbit-flame.vercel.app/",
  },
  {
    id: "trovato",
    title: "Trovato Commerce",
    subtitle: "Full-stack e-commerce platform",
    image: trovato,
    description:
      "Full-stack e-commerce platform with secure authentication, payments, customer-support chat, video calling, monitoring and a scalable backend architecture.",
    tags: ["React", "TypeScript", "Express.js", "PostgreSQL"],
    ghLink: "https://github.com/Amardeep-Chouhan/Trovato-Commerce",
    demoLink: "https://trovato-commerce.onrender.com/",
  },
  {
    id: "linkup",
    title: "LinkUp",
    subtitle: "Real-time chat application",
    image: linkup,
    description:
      "Real-time chat app with one-to-one and group messaging, typing indicators, live online status, instant notifications and secure authentication.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    ghLink: "https://github.com/Amardeep-Chouhan/Linkup-live-chat-application",
    demoLink: "https://linkup-live-chat-application.onrender.com/",
  },
  {
    id: "codemeet",
    title: "CodeMeet",
    subtitle: "Remote technical interview platform",
    image: codemeet,
    description:
      "Technical interview platform with real-time video interviews, collaborative coding, secure code execution, live chat and automated feedback. Includes authentication, REST APIs and asynchronous background jobs.",
    tags: ["React", "Node.js", "MongoDB", "Clerk", "TanStack Query", "Stream", "Inngest"],
    ghLink: "https://github.com/Amardeep-Chouhan/CodeMeet---Remote-Interview-Platform",
  },
  {
    id: "github-analyzer",
    title: "GitHub Profile Analyzer",
    subtitle: "Backend REST API",
    image: githubAnalyzer,
    description:
      "REST API that fetches public GitHub profiles, analyzes repository and developer activity, and stores the processed insights for fast querying. Secured with Helmet, CORS and rate limiting.",
    tags: ["Node.js", "Express.js", "MySQL", "GitHub REST API"],
    ghLink: "https://github.com/Amardeep-Chouhan/Github-Profile-Analyser-",
    demoLink: "https://github-profile-analyser-jji1.onrender.com/",
  },
  {
    id: "authengine",
    title: "AuthEngine",
    subtitle: "Authentication backend",
    image: authEngine,
    description:
      "Production-style authentication backend with email OTP verification, rate limiting, session management, refresh-token rotation, secure HTTP-only cookies and multi-device logout.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    ghLink: "https://github.com/Amardeep-Chouhan/Auth-Engine",
  },
  {
    id: "datalens",
    title: "DataLens",
    subtitle: "JSON formatter & explorer",
    image: datalens,
    description:
      "JSON formatter and explorer that simplifies debugging with instant validation, an interactive tree view and fully in-browser processing, so your data never leaves your machine.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    ghLink: "https://github.com/Amardeep-Chouhan/DataLens",
  },
];

export const featuredProjects = projects.slice(0, 3);
export default projects;
