// Technology badges database with categories, icons, and official brand colors
const TECH_CATEGORIES = {
  languages: "Programming Languages",
  frontend: "Frontend & UI",
  backend: "Backend & APIs",
  database: "Databases & Storage",
  devops: "Cloud, DevOps & CI/CD",
  aiml: "AI, ML & Data Science",
  tools: "Tools, Design & Testing"
};

const TECH_DATABASE = [
  // Languages
  { id: "javascript", name: "JavaScript", category: "languages", color: "F7DF1E", logo: "javascript", logoColor: "black" },
  { id: "typescript", name: "TypeScript", category: "languages", color: "3178C6", logo: "typescript", logoColor: "white" },
  { id: "python", name: "Python", category: "languages", color: "3776AB", logo: "python", logoColor: "white" },
  { id: "rust", name: "Rust", category: "languages", color: "000000", logo: "rust", logoColor: "white" },
  { id: "go", name: "Go / Golang", category: "languages", color: "00ADD8", logo: "go", logoColor: "white" },
  { id: "cpp", name: "C++", category: "languages", color: "00599C", logo: "c%2B%2B", logoColor: "white" },
  { id: "csharp", name: "C#", category: "languages", color: "239120", logo: "csharp", logoColor: "white" },
  { id: "java", name: "Java", category: "languages", color: "ED8B00", logo: "openjdk", logoColor: "white" },
  { id: "kotlin", name: "Kotlin", category: "languages", color: "7F52FF", logo: "kotlin", logoColor: "white" },
  { id: "swift", name: "Swift", category: "languages", color: "F05138", logo: "swift", logoColor: "white" },
  { id: "php", name: "PHP", category: "languages", color: "777BB4", logo: "php", logoColor: "white" },
  { id: "ruby", name: "Ruby", category: "languages", color: "CC342D", logo: "ruby", logoColor: "white" },

  // Frontend
  { id: "react", name: "React", category: "frontend", color: "61DAFB", logo: "react", logoColor: "black" },
  { id: "nextjs", name: "Next.js", category: "frontend", color: "000000", logo: "nextdotjs", logoColor: "white" },
  { id: "vuejs", name: "Vue.js", category: "frontend", color: "4FC08D", logo: "vuedotjs", logoColor: "white" },
  { id: "nuxt", name: "Nuxt.js", category: "frontend", color: "00DC82", logo: "nuxtdotjs", logoColor: "white" },
  { id: "svelte", name: "Svelte", category: "frontend", color: "FF3E00", logo: "svelte", logoColor: "white" },
  { id: "angular", name: "Angular", category: "frontend", color: "DD0031", logo: "angular", logoColor: "white" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", color: "06B6D4", logo: "tailwindcss", logoColor: "white" },
  { id: "sass", name: "Sass", category: "frontend", color: "CC6699", logo: "sass", logoColor: "white" },
  { id: "redux", name: "Redux", category: "frontend", color: "764ABC", logo: "redux", logoColor: "white" },
  { id: "vite", name: "Vite", category: "frontend", color: "646CFF", logo: "vite", logoColor: "white" },
  { id: "threejs", name: "Three.js", category: "frontend", color: "000000", logo: "threedotjs", logoColor: "white" },

  // Backend
  { id: "nodejs", name: "Node.js", category: "backend", color: "5FA04E", logo: "nodedotjs", logoColor: "white" },
  { id: "express", name: "Express.js", category: "backend", color: "000000", logo: "express", logoColor: "white" },
  { id: "nestjs", name: "NestJS", category: "backend", color: "E0234E", logo: "nestjs", logoColor: "white" },
  { id: "fastapi", name: "FastAPI", category: "backend", color: "009688", logo: "fastapi", logoColor: "white" },
  { id: "django", name: "Django", category: "backend", color: "092E20", logo: "django", logoColor: "white" },
  { id: "flask", name: "Flask", category: "backend", color: "000000", logo: "flask", logoColor: "white" },
  { id: "spring", name: "Spring Boot", category: "backend", color: "6DB33F", logo: "springboot", logoColor: "white" },
  { id: "graphql", name: "GraphQL", category: "backend", color: "E10098", logo: "graphql", logoColor: "white" },
  { id: "trpc", name: "tRPC", category: "backend", color: "2596BE", logo: "trpc", logoColor: "white" },
  { id: "grpc", name: "gRPC", category: "backend", color: "244C5A", logo: "grpc", logoColor: "white" },

  // Databases
  { id: "postgresql", name: "PostgreSQL", category: "database", color: "4169E1", logo: "postgresql", logoColor: "white" },
  { id: "mongodb", name: "MongoDB", category: "database", color: "47A248", logo: "mongodb", logoColor: "white" },
  { id: "redis", name: "Redis", category: "database", color: "DC382D", logo: "redis", logoColor: "white" },
  { id: "mysql", name: "MySQL", category: "database", color: "4479A1", logo: "mysql", logoColor: "white" },
  { id: "supabase", name: "Supabase", category: "database", color: "3ECF8E", logo: "supabase", logoColor: "white" },
  { id: "prisma", name: "Prisma", category: "database", color: "2D3748", logo: "prisma", logoColor: "white" },
  { id: "elasticsearch", name: "Elasticsearch", category: "database", color: "005571", logo: "elasticsearch", logoColor: "white" },
  { id: "sqlite", name: "SQLite", category: "database", color: "003B57", logo: "sqlite", logoColor: "white" },
  { id: "firebase", name: "Firebase", category: "database", color: "FFCA28", logo: "firebase", logoColor: "black" },

  // DevOps & Cloud
  { id: "docker", name: "Docker", category: "devops", color: "2496ED", logo: "docker", logoColor: "white" },
  { id: "kubernetes", name: "Kubernetes", category: "devops", color: "326CE5", logo: "kubernetes", logoColor: "white" },
  { id: "aws", name: "AWS", category: "devops", color: "232F3E", logo: "amazonwebservices", logoColor: "white" },
  { id: "gcp", name: "Google Cloud", category: "devops", color: "4285F4", logo: "googlecloud", logoColor: "white" },
  { id: "azure", name: "Azure", category: "devops", color: "0078D4", logo: "microsoftazure", logoColor: "white" },
  { id: "terraform", name: "Terraform", category: "devops", color: "7B42BC", logo: "terraform", logoColor: "white" },
  { id: "githubactions", name: "GitHub Actions", category: "devops", color: "2088FF", logo: "githubactions", logoColor: "white" },
  { id: "linux", name: "Linux", category: "devops", color: "FCC624", logo: "linux", logoColor: "black" },
  { id: "nginx", name: "Nginx", category: "devops", color: "009639", logo: "nginx", logoColor: "white" },
  { id: "cloudflare", name: "Cloudflare", category: "devops", color: "F38020", logo: "cloudflare", logoColor: "white" },

  // AI & ML
  { id: "pytorch", name: "PyTorch", category: "aiml", color: "EE4C2C", logo: "pytorch", logoColor: "white" },
  { id: "tensorflow", name: "TensorFlow", category: "aiml", color: "FF6F00", logo: "tensorflow", logoColor: "white" },
  { id: "huggingface", name: "Hugging Face", category: "aiml", color: "FFD21E", logo: "huggingface", logoColor: "black" },
  { id: "openai", name: "OpenAI API", category: "aiml", color: "412991", logo: "openai", logoColor: "white" },
  { id: "langchain", name: "LangChain", category: "aiml", color: "1C3C3C", logo: "langchain", logoColor: "white" },
  { id: "pandas", name: "Pandas", category: "aiml", color: "150458", logo: "pandas", logoColor: "white" },
  { id: "numpy", name: "NumPy", category: "aiml", color: "013243", logo: "numpy", logoColor: "white" },
  { id: "scikitlearn", name: "scikit-learn", category: "aiml", color: "F7931E", logo: "scikitlearn", logoColor: "white" },

  // Tools & Design
  { id: "git", name: "Git", category: "tools", color: "F05032", logo: "git", logoColor: "white" },
  { id: "figma", name: "Figma", category: "tools", color: "F24E1E", logo: "figma", logoColor: "white" },
  { id: "postman", name: "Postman", category: "tools", color: "FF6C37", logo: "postman", logoColor: "white" },
  { id: "vscode", name: "VS Code", category: "tools", color: "007ACC", logo: "visualstudiocode", logoColor: "white" },
  { id: "jest", name: "Jest", category: "tools", color: "C21325", logo: "jest", logoColor: "white" },
  { id: "cypress", name: "Cypress", category: "tools", color: "17202C", logo: "cypress", logoColor: "white" },
  { id: "storybook", name: "Storybook", category: "tools", color: "FF4785", logo: "storybook", logoColor: "white" }
];


// Pre-configured branding profiles for different software roles
const PRESETS = {
  fullstack: {
    id: "fullstack",
    name: "Full-Stack SaaS Architect",
    subtitle: "High-impact portfolio for Senior SWEs & Builders",
    data: {
      username: "paras",
      fullName: "Paras",
      title: "Senior Full-Stack Engineer & Cloud Architect",
      pronouns: "he/him",
      location: "San Francisco, CA / Remote",
      company: "Building Next-Gen Cloud Apps",
      website: "https://paras.dev",
      statusEmoji: "🚀",
      statusText: "Architecting high-scale distributed systems & SaaS products",
      bannerStyle: "capsule", // capsule, wave, minimal, terminal
      bannerColor1: "#6366f1",
      bannerColor2: "#ec4899",
      avatarUrl: "https://avatars.githubusercontent.com/paras",
      showAvatar: true,
      bio: "Passionate software engineer with 6+ years of crafting scalable cloud applications, elegant design systems, and developer tooling. Obsessed with high performance, microservices, and slick developer experiences.",
      typingTexts: [
        "Full-Stack Software Engineer",
        "Cloud & Distributed Systems Architect",
        "Open Source Creator & Mentor",
        "Passionate SaaS Builder"
      ],
      quickFacts: [
        { icon: "🔭", label: "Currently building", value: "A high-performance real-time data streaming platform" },
        { icon: "🌱", label: "Learning & exploring", value: "Rust, WebAssembly, and LLM orchestration" },
        { icon: "💼", label: "Available for", value: "High-impact consulting & architecture advisory" },
        { icon: "💬", label: "Ask me about", value: "React, Next.js, Distributed SQL, System Design & Cloud Infra" },
        { icon: "⚡", label: "Fun fact", value: "I drink cold brew while debugging race conditions at 2 AM" }
      ],
      selectedTechs: [
        "typescript", "javascript", "python", "go",
        "react", "nextjs", "tailwind", "vite",
        "nodejs", "nestjs", "fastapi", "graphql",
        "postgresql", "redis", "mongodb", "supabase",
        "docker", "kubernetes", "aws", "githubactions"
      ],
      badgeStyle: "for-the-badge", // for-the-badge, flat, flat-square
      badgeLayout: "categorized", // unified, categorized
      stats: {
        showStats: true,
        showStreak: true,
        showLangs: true,
        showActivity: true,
        showTrophies: true,
        theme: "tokyonight",
        hideBorder: false,
        rankIcon: "github"
      },
      projects: [
        {
          name: "CloudScale Engine",
          desc: "Distributed event-driven pipeline processing 50k+ events/sec with sub-5ms p99 latency.",
          techs: ["Go", "Kafka", "Docker", "PostgreSQL"],
          demoUrl: "https://cloudscale.dev",
          repoUrl: "https://github.com/paras/cloudscale-engine",
          featured: true
        },
        {
          name: "OmniFlow SaaS",
          desc: "Next-gen workflow automation platform with visual node-based execution canvas.",
          techs: ["TypeScript", "Next.js", "Tailwind", "Supabase"],
          demoUrl: "https://omniflow.app",
          repoUrl: "https://github.com/paras/omniflow-saas",
          featured: true
        },
        {
          name: "DevPulse CLI",
          desc: "Ultra-fast command-line productivity suite for automated branch management and CI insights.",
          techs: ["Rust", "Clap", "GitHub API"],
          demoUrl: "https://crates.io/crates/devpulse",
          repoUrl: "https://github.com/paras/devpulse-cli",
          featured: true
        }
      ],
      socials: [
        { platform: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/paras", color: "0A66C2" },
        { platform: "twitter", label: "X / Twitter", url: "https://x.com/paras_dev", color: "000000" },
        { platform: "portfolio", label: "Personal Website", url: "https://paras.dev", color: "6366F1" },
        { platform: "discord", label: "Discord Community", url: "https://discord.gg/paras", color: "5865F2" }
      ],
      sponsorship: {
        enabled: true,
        buymeacoffee: "paras",
        githubSponsor: "paras"
      },
      extras: {
        showJoke: true,
        showQuote: true,
        showSpotify: false,
        spotifyTrackId: "",
        showVisitorCounter: true
      }
    }
  },

  aiml: {
    id: "aiml",
    name: "AI & Machine Learning Engineer",
    subtitle: "Multimodal AI, LLMs & Deep Learning Architecture",
    data: {
      username: "paras",
      fullName: "Paras",
      title: "AI Engineer & Foundation Model Researcher",
      pronouns: "he/him",
      location: "San Francisco, CA",
      company: "AI Intelligence Labs",
      website: "https://paras-ai.dev",
      statusEmoji: "🧠",
      statusText: "Fine-tuning foundation models & optimizing inference engines",
      bannerStyle: "neon",
      bannerColor1: "#10b981",
      bannerColor2: "#06b6d4",
      avatarUrl: "https://avatars.githubusercontent.com/paras",
      showAvatar: true,
      bio: "Specializing in deep learning, multimodal vision-language architectures, high-throughput GPU inference, and agentic workflows. Passionate about bridging theoretical AI breakthroughs with robust production deployments.",
      typingTexts: [
        "Machine Learning Systems Engineer",
        "LLM & Retrieval-Augmented Generation Specialist",
        "PyTorch & CUDA Performance Optimizer",
        "Open Weights AI Contributor"
      ],
      quickFacts: [
        { icon: "🔬", label: "Researching", value: "Parameter-efficient fine-tuning (LoRA/QLoRA) & KV-cache compression" },
        { icon: "⚡", label: "Working on", value: "Sub-10ms latency streaming inference for 70B parameter models" },
        { icon: "🤝", label: "Collaborating with", value: "Open-source ML researchers and HuggingFace communities" },
        { icon: "📊", label: "Ask me about", value: "PyTorch, CUDA, Vector Databases, vLLM, DeepSpeed & LangChain" },
        { icon: "💡", label: "Philosophy", value: "Compute is the new leverage. Efficiency is king." }
      ],
      selectedTechs: [
        "python", "cpp", "rust",
        "pytorch", "tensorflow", "huggingface", "openai", "langchain", "pandas", "numpy", "scikitlearn",
        "fastapi", "docker", "kubernetes", "aws", "linux"
      ],
      badgeStyle: "for-the-badge",
      badgeLayout: "categorized",
      stats: {
        showStats: true,
        showStreak: true,
        showLangs: true,
        showActivity: true,
        showTrophies: true,
        theme: "dracula",
        hideBorder: false,
        rankIcon: "github"
      },
      projects: [
        {
          name: "HyperAgent Core",
          desc: "Autonomous multi-agent execution framework with self-reflection and tree-of-thought routing.",
          techs: ["Python", "PyTorch", "FastAPI", "ChromaDB"],
          demoUrl: "https://hyperagent.ai",
          repoUrl: "https://github.com/paras/hyperagent-core",
          featured: true
        },
        {
          name: "FlashInference VLLM",
          desc: "Custom CUDA kernels achieving 2.4x throughput speedup on LLaMA-3 tensor parallelism.",
          techs: ["CUDA", "C++", "Python", "Triton"],
          demoUrl: "https://arxiv.org/abs/example",
          repoUrl: "https://github.com/paras/flash-inference",
          featured: true
        }
      ],
      socials: [
        { platform: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/paras", color: "0A66C2" },
        { platform: "twitter", label: "X / Twitter", url: "https://x.com/paras_ai", color: "000000" },
        { platform: "portfolio", label: "Research Blog", url: "https://paras-ai.dev", color: "10B981" }
      ],
      sponsorship: {
        enabled: true,
        buymeacoffee: "paras",
        githubSponsor: "paras"
      },
      extras: {
        showJoke: false,
        showQuote: true,
        showSpotify: false,
        spotifyTrackId: "",
        showVisitorCounter: true
      }
    }
  },

  indie: {
    id: "indie",
    name: "Indie Hacker & SaaS Founder",
    subtitle: "Bootstrapping micro-SaaS products from 0 to 1",
    data: {
      username: "paras",
      fullName: "Paras",
      title: "Indie Hacker, Solopreneur & Full-Stack Builder",
      pronouns: "he/him",
      location: "Worldwide / Nomad",
      company: "Bootstrapping profitable digital products",
      website: "https://shipfast-paras.com",
      statusEmoji: "🛠️",
      statusText: "Shipping fast, talking to users, turning code into cashflow",
      bannerStyle: "wave",
      bannerColor1: "#f59e0b",
      bannerColor2: "#ef4444",
      avatarUrl: "https://avatars.githubusercontent.com/paras",
      showAvatar: true,
      bio: "Solo founder building developer productivity apps and B2B micro-SaaS. Sharing transparent MRR metrics, revenue milestones, and unfiltered coding lessons in public.",
      typingTexts: [
        "Solo SaaS Founder ($10k MRR journey)",
        "Speedrun Shipping from idea to Stripe checkout",
        "Full-Stack Product Designer & Marketer",
        "Open-source advocate & content creator"
      ],
      quickFacts: [
        { icon: "🎯", label: "Current milestone", value: "$12.4k MRR across 3 active micro-SaaS products" },
        { icon: "📦", label: "Shipping", value: "Launching a developer analytics tool this month" },
        { icon: "📣", label: "Building in public", value: "Weekly retrospectives and revenue transparency on X" },
        { icon: "🛠️", label: "Go-to stack", value: "Next.js 15, Supabase, Tailwind, Stripe, Resend" }
      ],
      selectedTechs: [
        "typescript", "javascript", "react", "nextjs", "tailwind",
        "supabase", "postgresql", "redis", "cloudflare", "stripe", "figma"
      ],
      badgeStyle: "for-the-badge",
      badgeLayout: "unified",
      stats: {
        showStats: true,
        showStreak: true,
        showLangs: true,
        showActivity: true,
        showTrophies: false,
        theme: "radical",
        hideBorder: false,
        rankIcon: "github"
      },
      projects: [
        {
          name: "BannerSnap SaaS",
          desc: "Automated social media asset generator used by 4,500+ creators and marketers.",
          techs: ["Next.js", "Tailwind", "Canvas API", "Stripe"],
          demoUrl: "https://bannersnap.io",
          repoUrl: "https://github.com/paras/bannersnap",
          featured: true
        },
        {
          name: "MicroFeedback Hub",
          desc: "Lightweight in-app user feedback widget for indie builders with Slack integration.",
          techs: ["TypeScript", "Supabase", "Cloudflare Workers"],
          demoUrl: "https://microfeedback.dev",
          repoUrl: "https://github.com/paras/microfeedback",
          featured: true
        }
      ],
      socials: [
        { platform: "twitter", label: "X (@paras_builds)", url: "https://x.com/paras_builds", color: "000000" },
        { platform: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/paras", color: "0A66C2" },
        { platform: "youtube", label: "YouTube Channel", url: "https://youtube.com/@paras", color: "FF0000" }
      ],
      sponsorship: {
        enabled: true,
        buymeacoffee: "paras",
        githubSponsor: "paras"
      },
      extras: {
        showJoke: true,
        showQuote: true,
        showSpotify: false,
        spotifyTrackId: "",
        showVisitorCounter: true
      }
    }
  },

  devops: {
    id: "devops",
    name: "DevOps & Cloud SRE",
    subtitle: "Infrastructure-as-Code, Kubernetes & 99.999% Reliability",
    data: {
      username: "paras",
      fullName: "Paras",
      title: "Staff DevOps Engineer & SRE Lead",
      pronouns: "he/him",
      location: "Seattle, WA / Remote",
      company: "Cloud Scale Infrastructure",
      website: "https://infra-paras.dev",
      statusEmoji: "⚡",
      statusText: "Terraforming multi-region clusters & optimizing zero-downtime CI/CD",
      bannerStyle: "terminal",
      bannerColor1: "#0ea5e9",
      bannerColor2: "#3b82f6",
      avatarUrl: "https://avatars.githubusercontent.com/paras",
      showAvatar: true,
      bio: "SRE and Platform Engineer focused on zero-trust cloud infrastructure, GitOps deployment automation, cost governance, and Kubernetes cluster resiliency. If it can be automated, it will be.",
      typingTexts: [
        "Kubernetes & Service Mesh Architect",
        "Terraform & GitOps Automation Specialist",
        "Prometheus & Distributed Tracing Evangelist",
        "Chaos Engineering Practitioner"
      ],
      quickFacts: [
        { icon: "🛡️", label: "Primary focus", value: "Multi-cloud Kubernetes clusters with zero-trust networking" },
        { icon: "⚙️", label: "Infra as Code", value: "100% Declarative Terraform & Helm deployments" },
        { icon: "📈", label: "Reliability score", value: "Maintaining 99.995% uptime across 120+ microservices" },
        { icon: "🐧", label: "Favorite OS", value: "Arch / Alpine / NixOS" }
      ],
      selectedTechs: [
        "go", "python", "docker", "kubernetes", "aws", "gcp",
        "terraform", "githubactions", "linux", "nginx", "cloudflare", "redis", "postgresql"
      ],
      badgeStyle: "for-the-badge",
      badgeLayout: "categorized",
      stats: {
        showStats: true,
        showStreak: true,
        showLangs: true,
        showActivity: true,
        showTrophies: true,
        theme: "highcontrast",
        hideBorder: false,
        rankIcon: "github"
      },
      projects: [
        {
          name: "KubeKops Autoscaler",
          desc: "Intelligent spot-instance node autoscaler lowering AWS compute bill by 42%.",
          techs: ["Go", "Kubernetes Operator", "Prometheus", "Helm"],
          demoUrl: "https://kubekops.io",
          repoUrl: "https://github.com/paras/kubekops-autoscaler",
          featured: true
        }
      ],
      socials: [
        { platform: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/paras", color: "0A66C2" },
        { platform: "twitter", label: "X / Twitter", url: "https://x.com/paras_infra", color: "000000" }
      ],
      sponsorship: {
        enabled: false
      },
      extras: {
        showJoke: true,
        showQuote: false,
        showSpotify: false,
        spotifyTrackId: "",
        showVisitorCounter: true
      }
    }
  },

  minimal: {
    id: "minimal",
    name: "Minimalist Modern",
    subtitle: "Clean typographical executive profile",
    data: {
      username: "paras",
      fullName: "Paras",
      title: "Software Engineer & Designer",
      pronouns: "he/him",
      location: "San Francisco, CA",
      company: "Independent Consultant",
      website: "https://paras.dev",
      statusEmoji: "✦",
      statusText: "Designing thoughtful software & systems",
      bannerStyle: "minimal",
      bannerColor1: "#18181b",
      bannerColor2: "#3f3f46",
      avatarUrl: "https://avatars.githubusercontent.com/paras",
      showAvatar: true,
      bio: "Crafting understated, blisteringly fast software. Focused on typography, interaction design, distributed data, and high-leverage tooling.",
      typingTexts: [
        "Software Engineer & Interface Designer",
        "Systems Thinker & Craft Enthusiast"
      ],
      quickFacts: [
        { icon: "✦", label: "Focus", value: "Simplicity, speed, and elegance" },
        { icon: "✦", label: "Craft", value: "End-to-end product design & engineering" }
      ],
      selectedTechs: [
        "typescript", "rust", "react", "nextjs", "tailwind", "postgresql", "docker"
      ],
      badgeStyle: "flat-square",
      badgeLayout: "unified",
      stats: {
        showStats: true,
        showStreak: true,
        showLangs: true,
        showActivity: false,
        showTrophies: false,
        theme: "onedark",
        hideBorder: true,
        rankIcon: "github"
      },
      projects: [
        {
          name: "TypeCraft Design System",
          desc: "Accessible, typography-driven component primitives for web applications.",
          techs: ["TypeScript", "React", "CSS Variables"],
          demoUrl: "https://typecraft.dev",
          repoUrl: "https://github.com/paras/typecraft",
          featured: true
        }
      ],
      socials: [
        { platform: "portfolio", label: "paras.dev", url: "https://paras.dev", color: "18181B" },
        { platform: "twitter", label: "X (@paras)", url: "https://x.com/paras", color: "18181B" }
      ],
      sponsorship: {
        enabled: false
      },
      extras: {
        showJoke: false,
        showQuote: true,
        showSpotify: false,
        spotifyTrackId: "",
        showVisitorCounter: false
      }
    }
  }
};





// Global State
let currentProfile = JSON.parse(JSON.stringify(PRESETS.fullstack.data));
// Ensure avatar points to the user's uploaded portrait
currentProfile.avatarUrl = "assets/avatar.jpg";

let activeTab = "identity";
let currentView = "split"; // split, preview, code
let githubTheme = "dark"; // dark, light
let techCategoryFilter = "all";
let techSearchQuery = "";

// DOM Elements
const sidebarTabs = document.querySelectorAll(".sidebar-tabs-nav .tab-btn");
const formSections = document.querySelectorAll(".form-section");
const viewButtons = document.querySelectorAll(".view-segmented-control .segmented-btn");
const editorSidebar = document.getElementById("editorSidebar");
const githubMockupFrame = document.getElementById("githubMockupFrame");
const codeViewContainer = document.getElementById("codeViewContainer");
const rawMarkdownCode = document.getElementById("rawMarkdownCode");
const liveMarkdownPreview = document.getElementById("liveMarkdownPreview");
const presetSelect = document.getElementById("presetSelect");
const toggleGithubThemeBtn = document.getElementById("toggleGithubThemeBtn");
const copyReadmeBtn = document.getElementById("copyReadmeBtn");
const downloadReadmeBtn = document.getElementById("downloadReadmeBtn");
const toastContainer = document.getElementById("toastContainer");

// Profile Score Elements
const profileScoreNum = document.getElementById("profileScoreNum");
const profileScoreBar = document.getElementById("profileScoreBar");

// Toolbar Simulation Elements
const toolbarUsername = document.getElementById("toolbarUsername");
const mockupUserAvatar = document.getElementById("mockupUserAvatar");
const mockupFullName = document.getElementById("mockupFullName");
const mockupHandle = document.getElementById("mockupHandle");
const mockupStatusEmoji = document.getElementById("mockupStatusEmoji");
const mockupStatusText = document.getElementById("mockupStatusText");
const readmeCardFilename = document.getElementById("readmeCardFilename");

// Form Inputs
const inputFullName = document.getElementById("inputFullName");
const inputUsername = document.getElementById("inputUsername");
const inputTitle = document.getElementById("inputTitle");
const inputStatusEmoji = document.getElementById("inputStatusEmoji");
const inputStatusText = document.getElementById("inputStatusText");
const inputLocation = document.getElementById("inputLocation");
const inputWebsite = document.getElementById("inputWebsite");
const inputShowAvatar = document.getElementById("inputShowAvatar");
const inputTypingTexts = document.getElementById("inputTypingTexts");
const inputBio = document.getElementById("inputBio");
const selectBadgeStyle = document.getElementById("selectBadgeStyle");
const selectBadgeLayout = document.getElementById("selectBadgeLayout");
const selectStatsTheme = document.getElementById("selectStatsTheme");

// Switches
const toggleShowStats = document.getElementById("toggleShowStats");
const toggleShowStreak = document.getElementById("toggleShowStreak");
const toggleShowLangs = document.getElementById("toggleShowLangs");
const toggleShowActivity = document.getElementById("toggleShowActivity");
const toggleShowTrophies = document.getElementById("toggleShowTrophies");
const toggleVisitorCounter = document.getElementById("toggleVisitorCounter");
const toggleDailyQuote = document.getElementById("toggleDailyQuote");
const toggleJoke = document.getElementById("toggleJoke");
const inputBuyMeCoffee = document.getElementById("inputBuyMeCoffee");
const inputGithubSponsor = document.getElementById("inputGithubSponsor");

// Dynamic Containers
const quickFactsContainer = document.getElementById("quickFactsContainer");
const techGridContainer = document.getElementById("techGridContainer");
const techCategoryPills = document.getElementById("techCategoryPills");
const techSearchInput = document.getElementById("techSearchInput");
const totalTechsCount = document.getElementById("totalTechsCount");
const projectsListContainer = document.getElementById("projectsListContainer");
const socialsListContainer = document.getElementById("socialsListContainer");
const addProjectBtn = document.getElementById("addProjectBtn");

// Initialize Application
function initApp() {
  totalTechsCount.textContent = TECH_DATABASE.length;
  bindEvents();
  populateFormFromState();
  renderTechPills();
  renderTechGrid();
  renderQuickFacts();
  renderProjectsList();
  renderSocialsList();
  updateLiveRender();
  startTypingAnimation();
}

// Bind Global UI Listeners
function bindEvents() {
  // Tab Navigation
  sidebarTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      sidebarTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const targetSec = tab.dataset.tab;
      formSections.forEach(sec => sec.classList.remove("active"));
      document.getElementById(`sec-${targetSec}`).classList.add("active");
    });
  });

  // View Mode Switcher
  viewButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      viewButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      setViewMode(btn.dataset.view);
    });
  });

  // GitHub Dark / Light Simulator
  toggleGithubThemeBtn.addEventListener("click", () => {
    if (githubTheme === "dark") {
      githubTheme = "light";
      document.getElementById("githubMockupFrame").classList.add("theme-gh-light");
      document.getElementById("themeToggleIcon").textContent = "☀️";
      document.getElementById("themeToggleText").textContent = "GitHub Light";
    } else {
      githubTheme = "dark";
      document.getElementById("githubMockupFrame").classList.remove("theme-gh-light");
      document.getElementById("themeToggleIcon").textContent = "🌙";
      document.getElementById("themeToggleText").textContent = "GitHub Dark";
    }
  });

  // Preset Selection
  presetSelect.addEventListener("change", (e) => {
    const selectedPreset = PRESETS[e.target.value];
    if (selectedPreset) {
      currentProfile = JSON.parse(JSON.stringify(selectedPreset.data));
      currentProfile.avatarUrl = "assets/avatar.jpg";
      populateFormFromState();
      renderQuickFacts();
      renderProjectsList();
      renderSocialsList();
      renderTechGrid();
      updateLiveRender();
      showToast(`Loaded preset: ${selectedPreset.name}`, "success");
    }
  });

  // Copy & Download
  copyReadmeBtn.addEventListener("click", copyReadmeToClipboard);
  downloadReadmeBtn.addEventListener("click", downloadReadmeFile);

  // Form Input Bindings
  inputFullName.addEventListener("input", (e) => { currentProfile.fullName = e.target.value; updateLiveRender(); });
  inputUsername.addEventListener("input", (e) => { currentProfile.username = e.target.value; updateLiveRender(); });
  inputTitle.addEventListener("input", (e) => { currentProfile.title = e.target.value; updateLiveRender(); });
  inputStatusEmoji.addEventListener("input", (e) => { currentProfile.statusEmoji = e.target.value; updateLiveRender(); });
  inputStatusText.addEventListener("input", (e) => { currentProfile.statusText = e.target.value; updateLiveRender(); });
  inputLocation.addEventListener("input", (e) => { currentProfile.location = e.target.value; updateLiveRender(); });
  inputWebsite.addEventListener("input", (e) => { currentProfile.website = e.target.value; updateLiveRender(); });
  inputBio.addEventListener("input", (e) => { currentProfile.bio = e.target.value; updateLiveRender(); });
  inputShowAvatar.addEventListener("change", (e) => { currentProfile.showAvatar = e.target.checked; updateLiveRender(); });

  inputTypingTexts.addEventListener("input", (e) => {
    currentProfile.typingTexts = e.target.value.split("\n").filter(t => t.trim().length > 0);
    updateLiveRender();
  });

  selectBadgeStyle.addEventListener("change", (e) => {
    currentProfile.badgeStyle = e.target.value;
    updateLiveRender();
  });

  selectBadgeLayout.addEventListener("change", (e) => {
    currentProfile.badgeLayout = e.target.value;
    updateLiveRender();
  });

  selectStatsTheme.addEventListener("change", (e) => {
    currentProfile.stats.theme = e.target.value;
    updateLiveRender();
  });

  toggleShowStats.addEventListener("change", (e) => { currentProfile.stats.showStats = e.target.checked; updateLiveRender(); });
  toggleShowStreak.addEventListener("change", (e) => { currentProfile.stats.showStreak = e.target.checked; updateLiveRender(); });
  toggleShowLangs.addEventListener("change", (e) => { currentProfile.stats.showLangs = e.target.checked; updateLiveRender(); });
  toggleShowActivity.addEventListener("change", (e) => { currentProfile.stats.showActivity = e.target.checked; updateLiveRender(); });
  toggleShowTrophies.addEventListener("change", (e) => { currentProfile.stats.showTrophies = e.target.checked; updateLiveRender(); });

  toggleVisitorCounter.addEventListener("change", (e) => { currentProfile.extras.showVisitorCounter = e.target.checked; updateLiveRender(); });
  toggleDailyQuote.addEventListener("change", (e) => { currentProfile.extras.showQuote = e.target.checked; updateLiveRender(); });
  toggleJoke.addEventListener("change", (e) => { currentProfile.extras.showJoke = e.target.checked; updateLiveRender(); });

  inputBuyMeCoffee.addEventListener("input", (e) => { currentProfile.sponsorship.buymeacoffee = e.target.value; updateLiveRender(); });
  inputGithubSponsor.addEventListener("input", (e) => { currentProfile.sponsorship.githubSponsor = e.target.value; updateLiveRender(); });

  // Banner Options
  document.querySelectorAll(".banner-option").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".banner-option").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      currentProfile.bannerStyle = card.dataset.banner;
      updateLiveRender();
    });
  });

  // Tech Filter & Search
  techCategoryPills.addEventListener("click", (e) => {
    const pill = e.target.closest(".tech-filter-pill");
    if (!pill) return;
    document.querySelectorAll(".tech-filter-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    techCategoryFilter = pill.dataset.cat;
    renderTechGrid();
  });

  techSearchInput.addEventListener("input", (e) => {
    techSearchQuery = e.target.value.toLowerCase().trim();
    renderTechGrid();
  });

  // Projects Add Button
  addProjectBtn.addEventListener("click", () => {
    currentProfile.projects.push({
      name: "New High-Impact Project",
      desc: "Brief summary of what this project accomplishes and who it serves.",
      techs: ["TypeScript", "Next.js", "Docker"],
      demoUrl: "https://demo.app",
      repoUrl: `https://github.com/${currentProfile.username}/new-project`,
      featured: true
    });
    renderProjectsList();
    updateLiveRender();
    showToast("Added new project card", "success");
  });
}

// Populate Inputs from State
function populateFormFromState() {
  inputFullName.value = currentProfile.fullName || "";
  inputUsername.value = currentProfile.username || "";
  inputTitle.value = currentProfile.title || "";
  inputStatusEmoji.value = currentProfile.statusEmoji || "🚀";
  inputStatusText.value = currentProfile.statusText || "";
  inputLocation.value = currentProfile.location || "";
  inputWebsite.value = currentProfile.website || "";
  inputBio.value = currentProfile.bio || "";
  inputShowAvatar.checked = currentProfile.showAvatar !== false;
  inputTypingTexts.value = (currentProfile.typingTexts || []).join("\n");

  selectBadgeStyle.value = currentProfile.badgeStyle || "for-the-badge";
  selectBadgeLayout.value = currentProfile.badgeLayout || "categorized";
  selectStatsTheme.value = currentProfile.stats.theme || "tokyonight";

  toggleShowStats.checked = !!currentProfile.stats.showStats;
  toggleShowStreak.checked = !!currentProfile.stats.showStreak;
  toggleShowLangs.checked = !!currentProfile.stats.showLangs;
  toggleShowActivity.checked = !!currentProfile.stats.showActivity;
  toggleShowTrophies.checked = !!currentProfile.stats.showTrophies;

  toggleVisitorCounter.checked = !!currentProfile.extras.showVisitorCounter;
  toggleDailyQuote.checked = !!currentProfile.extras.showQuote;
  toggleJoke.checked = !!currentProfile.extras.showJoke;

  inputBuyMeCoffee.value = currentProfile.sponsorship?.buymeacoffee || "";
  inputGithubSponsor.value = currentProfile.sponsorship?.githubSponsor || "";

  // Set active banner option card
  document.querySelectorAll(".banner-option").forEach(card => {
    if (card.dataset.banner === currentProfile.bannerStyle) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

// Set View Mode
function setViewMode(mode) {
  currentView = mode;
  if (mode === "split") {
    editorSidebar.style.display = "flex";
    editorSidebar.style.width = "480px";
    githubMockupFrame.style.display = "flex";
    codeViewContainer.classList.remove("active");
  } else if (mode === "preview") {
    editorSidebar.style.display = "none";
    githubMockupFrame.style.display = "flex";
    codeViewContainer.classList.remove("active");
  } else if (mode === "code") {
    editorSidebar.style.display = "flex";
    editorSidebar.style.width = "400px";
    githubMockupFrame.style.display = "none";
    codeViewContainer.classList.add("active");
  }
}

// Render Tech Stack Matrix
function renderTechGrid() {
  techGridContainer.innerHTML = "";
  const filtered = TECH_DATABASE.filter(tech => {
    const matchesCat = techCategoryFilter === "all" || tech.category === techCategoryFilter;
    const matchesSearch = !techSearchQuery || tech.name.toLowerCase().includes(techSearchQuery);
    return matchesCat && matchesSearch;
  });

  filtered.forEach(tech => {
    const isSelected = currentProfile.selectedTechs.includes(tech.id);
    const card = document.createElement("div");
    card.className = `tech-card ${isSelected ? "selected" : ""}`;
    card.innerHTML = `
      <div class="tech-color-dot" style="background: #${tech.color};"></div>
      <span class="tech-card-name">${tech.name}</span>
    `;

    card.addEventListener("click", () => {
      if (isSelected) {
        currentProfile.selectedTechs = currentProfile.selectedTechs.filter(id => id !== tech.id);
      } else {
        currentProfile.selectedTechs.push(tech.id);
      }
      renderTechGrid();
      updateLiveRender();
    });

    techGridContainer.appendChild(card);
  });
}

// Render Tech Pills
function renderTechPills() {
  // Built in HTML
}

// Render Quick Facts Editor
function renderQuickFacts() {
  quickFactsContainer.innerHTML = "";
  currentProfile.quickFacts.forEach((fact, idx) => {
    const card = document.createElement("div");
    card.className = "dynamic-item-card";
    card.innerHTML = `
      <div class="dynamic-item-header">
        <span style="font-size:12px; font-weight:600; color:#818cf8;">Highlight #${idx + 1}</span>
        <button class="btn-icon-danger" data-idx="${idx}" title="Remove highlight">✕</button>
      </div>
      <div style="display:flex; gap:8px;">
        <input type="text" class="form-input fact-icon-input" style="width:48px; text-align:center;" value="${fact.icon}" data-idx="${idx}">
        <input type="text" class="form-input fact-label-input" placeholder="Label" value="${fact.label}" data-idx="${idx}">
      </div>
      <input type="text" class="form-input fact-val-input" placeholder="Description / Value" value="${fact.value}" data-idx="${idx}">
    `;

    card.querySelector(".btn-icon-danger").addEventListener("click", () => {
      currentProfile.quickFacts.splice(idx, 1);
      renderQuickFacts();
      updateLiveRender();
    });

    card.querySelector(".fact-icon-input").addEventListener("input", (e) => {
      currentProfile.quickFacts[idx].icon = e.target.value;
      updateLiveRender();
    });

    card.querySelector(".fact-label-input").addEventListener("input", (e) => {
      currentProfile.quickFacts[idx].label = e.target.value;
      updateLiveRender();
    });

    card.querySelector(".fact-val-input").addEventListener("input", (e) => {
      currentProfile.quickFacts[idx].value = e.target.value;
      updateLiveRender();
    });

    quickFactsContainer.appendChild(card);
  });
}

// Render Projects List
function renderProjectsList() {
  projectsListContainer.innerHTML = "";
  currentProfile.projects.forEach((proj, idx) => {
    const card = document.createElement("div");
    card.className = "dynamic-item-card";
    card.innerHTML = `
      <div class="dynamic-item-header">
        <span style="font-size:13px; font-weight:700; color:#38bdf8;">📦 ${proj.name || "Project"}</span>
        <button class="btn-icon-danger btn-del-proj" data-idx="${idx}">✕</button>
      </div>
      <input type="text" class="form-input proj-name" placeholder="Project Name" value="${proj.name}">
      <textarea class="form-textarea proj-desc" rows="2" placeholder="Catchy project description">${proj.desc}</textarea>
      <input type="text" class="form-input proj-techs" placeholder="Tech stack (comma-separated, e.g. Go, Kafka, Docker)" value="${proj.techs.join(", ")}">
      <div class="form-group-row">
        <input type="text" class="form-input proj-demo" placeholder="Live Demo URL" value="${proj.demoUrl}">
        <input type="text" class="form-input proj-repo" placeholder="GitHub Repo URL" value="${proj.repoUrl}">
      </div>
    `;

    card.querySelector(".btn-del-proj").addEventListener("click", () => {
      currentProfile.projects.splice(idx, 1);
      renderProjectsList();
      updateLiveRender();
    });

    card.querySelector(".proj-name").addEventListener("input", (e) => {
      currentProfile.projects[idx].name = e.target.value;
      updateLiveRender();
    });
    card.querySelector(".proj-desc").addEventListener("input", (e) => {
      currentProfile.projects[idx].desc = e.target.value;
      updateLiveRender();
    });
    card.querySelector(".proj-techs").addEventListener("input", (e) => {
      currentProfile.projects[idx].techs = e.target.value.split(",").map(t => t.trim()).filter(Boolean);
      updateLiveRender();
    });
    card.querySelector(".proj-demo").addEventListener("input", (e) => {
      currentProfile.projects[idx].demoUrl = e.target.value;
      updateLiveRender();
    });
    card.querySelector(".proj-repo").addEventListener("input", (e) => {
      currentProfile.projects[idx].repoUrl = e.target.value;
      updateLiveRender();
    });

    projectsListContainer.appendChild(card);
  });
}

// Render Socials List
function renderSocialsList() {
  socialsListContainer.innerHTML = "";
  const standardSocials = [
    { platform: "linkedin", label: "LinkedIn", defaultUrl: `https://linkedin.com/in/${currentProfile.username}`, color: "0A66C2" },
    { platform: "twitter", label: "X / Twitter", defaultUrl: `https://x.com/${currentProfile.username}`, color: "000000" },
    { platform: "portfolio", label: "Portfolio Website", defaultUrl: currentProfile.website || "https://paras.dev", color: "6366F1" },
    { platform: "discord", label: "Discord", defaultUrl: "https://discord.gg/invite", color: "5865F2" },
    { platform: "youtube", label: "YouTube", defaultUrl: `https://youtube.com/@${currentProfile.username}`, color: "FF0000" }
  ];

  standardSocials.forEach(s => {
    const existing = currentProfile.socials.find(item => item.platform === s.platform);
    const card = document.createElement("div");
    card.className = "dynamic-item-card";
    card.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <span style="font-size:12px; font-weight:600;">${s.label}</span>
        <label class="switch" style="width:34px; height:18px;">
          <input type="checkbox" class="social-toggle" ${existing ? "checked" : ""}>
          <span class="slider"></span>
        </label>
      </div>
      <input type="text" class="form-input social-url-input" value="${existing ? existing.url : s.defaultUrl}" placeholder="${s.defaultUrl}">
    `;

    const toggle = card.querySelector(".social-toggle");
    const input = card.querySelector(".social-url-input");

    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        if (!currentProfile.socials.some(item => item.platform === s.platform)) {
          currentProfile.socials.push({
            platform: s.platform,
            label: s.label,
            url: input.value,
            color: s.color
          });
        }
      } else {
        currentProfile.socials = currentProfile.socials.filter(item => item.platform !== s.platform);
      }
      updateLiveRender();
    });

    input.addEventListener("input", () => {
      const target = currentProfile.socials.find(item => item.platform === s.platform);
      if (target) {
        target.url = input.value;
        updateLiveRender();
      }
    });

    socialsListContainer.appendChild(card);
  });
}

// Calculate Optimization Score
function calculateScore() {
  let score = 50; // base score
  if (currentProfile.fullName && currentProfile.fullName.length > 2) score += 5;
  if (currentProfile.title && currentProfile.title.length > 5) score += 8;
  if (currentProfile.bio && currentProfile.bio.length > 30) score += 10;
  if (currentProfile.selectedTechs.length >= 8) score += 10;
  if (currentProfile.projects.length >= 2) score += 10;
  if (currentProfile.socials.length >= 2) score += 5;
  if (currentProfile.stats.showStats) score += 2;
  return Math.min(100, score);
}

// Update Top App Toolbar Simulation
function updateToolbarSimulation() {
  toolbarUsername.textContent = currentProfile.username || "paras";
  mockupFullName.textContent = currentProfile.fullName || "Paras";
  mockupHandle.textContent = `@${currentProfile.username || "paras"}`;
  mockupStatusEmoji.textContent = currentProfile.statusEmoji || "🚀";
  mockupStatusText.textContent = currentProfile.statusText || "";
  readmeCardFilename.textContent = `${currentProfile.username || "paras"} / README.md`;

  const score = calculateScore();
  profileScoreNum.textContent = `${score}%`;
  profileScoreBar.style.width = `${score}%`;
}

// Generate Markdown String
function generateMarkdown(data) {
  const username = data.username || "paras";
  const fullName = data.fullName || "Paras";
  const title = data.title || "Full-Stack Engineer & SaaS Architect";
  const bio = data.bio || "";
  const bannerStyle = data.bannerStyle || "capsule";
  const badgeStyle = data.badgeStyle || "for-the-badge";
  const statsTheme = data.stats.theme || "tokyonight";

  let md = "";

  // 1. Header Banner
  if (bannerStyle === "capsule") {
    md += `<div align="center">\n`;
    md += `  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,6,11,20&height=220&section=header&text=${encodeURIComponent(fullName)}&fontSize=60&fontAlignY=38&desc=${encodeURIComponent(title)}&descAlignY=58&descAlign=50" width="100%"/>\n`;
    md += `</div>\n\n`;
  } else if (bannerStyle === "neon") {
    md += `<div align="center">\n`;
    md += `  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:10b981,100:06b6d4&height=180&section=header&text=${encodeURIComponent(fullName)}&fontSize=54&fontAlignY=42&desc=${encodeURIComponent(title)}&descAlignY=62" width="100%"/>\n`;
    md += `</div>\n\n`;
  } else if (bannerStyle === "wave") {
    md += `<div align="center">\n`;
    md += `  <img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=12,24,30&height=200&section=header&text=${encodeURIComponent(fullName)}&fontSize=52&desc=${encodeURIComponent(title)}" width="100%"/>\n`;
    md += `</div>\n\n`;
  } else if (bannerStyle === "terminal") {
    md += `<div align="center">\n`;
    md += `  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=38BDF8&center=true&vCenter=true&width=600&lines=${encodeURIComponent(`$ whoami: ${fullName}`)};${encodeURIComponent(`$ role: ${title}`)}" alt="Typing SVG" />\n`;
    md += `</div>\n\n`;
  }

  // 2. Personal Avatar & Status Section
  md += `<div align="center">\n`;
  if (data.showAvatar) {
    md += `  <img src="assets/avatar.jpg" width="140" height="140" style="border-radius: 50%; border: 3px solid #6366f1;" alt="${fullName}"/>\n  <br/>\n`;
  }
  if (data.statusText) {
    md += `  <p><strong>${data.statusEmoji || "🚀"} ${data.statusText}</strong></p>\n`;
  }

  // Animated Typing Badges
  if (data.typingTexts && data.typingTexts.length > 0) {
    const encodedLines = data.typingTexts.map(t => encodeURIComponent(t)).join(";");
    md += `  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=19&pause=1000&color=6366F1&center=true&vCenter=true&width=550&lines=${encodedLines}" alt="Typing SVG" /></a>\n`;
  }

  // Social Connect Badges
  if (data.socials && data.socials.length > 0) {
    md += `  <br/>\n  <p>\n`;
    data.socials.forEach(s => {
      md += `    <a href="${s.url}" target="_blank"><img src="https://img.shields.io/badge/${encodeURIComponent(s.label)}-${s.color}?style=${badgeStyle}&logo=${s.platform === "twitter" ? "x" : s.platform}&logoColor=white" alt="${s.label}"/></a>\n`;
    });
    md += `  </p>\n`;
  }

  // Visitor Counter
  if (data.extras?.showVisitorCounter) {
    md += `  <p>\n    <img src="https://komarev.com/ghpvc/?username=${username}&label=PROFILE+VIEWS&style=flat-square&color=6366f1" alt="Profile Views" />\n  </p>\n`;
  }
  md += `</div>\n\n`;

  // 3. About Section
  md += `## 🚀 About Me\n\n`;
  if (bio) {
    md += `${bio}\n\n`;
  }

  // Quick Facts List
  if (data.quickFacts && data.quickFacts.length > 0) {
    data.quickFacts.forEach(f => {
      md += `- ${f.icon} **${f.label}:** ${f.value}\n`;
    });
    md += `\n`;
  }

  // 4. Tech Stack Badges
  if (data.selectedTechs && data.selectedTechs.length > 0) {
    md += `## ⚡ Tech Stack & Architecture\n\n`;

    if (data.badgeLayout === "categorized") {
      Object.keys(TECH_CATEGORIES).forEach(catKey => {
        const catTechs = TECH_DATABASE.filter(t => t.category === catKey && data.selectedTechs.includes(t.id));
        if (catTechs.length > 0) {
          md += `### ${TECH_CATEGORIES[catKey]}\n\n`;
          md += `<p align="left">\n`;
          catTechs.forEach(tech => {
            md += `  <img src="https://img.shields.io/badge/${encodeURIComponent(tech.name)}-${tech.color}?style=${badgeStyle}&logo=${tech.logo}&logoColor=${tech.logoColor}" alt="${tech.name}"/>\n`;
          });
          md += `</p>\n\n`;
        }
      });
    } else {
      // Unified cloud
      md += `<p align="left">\n`;
      data.selectedTechs.forEach(techId => {
        const tech = TECH_DATABASE.find(t => t.id === techId);
        if (tech) {
          md += `  <img src="https://img.shields.io/badge/${encodeURIComponent(tech.name)}-${tech.color}?style=${badgeStyle}&logo=${tech.logo}&logoColor=${tech.logoColor}" alt="${tech.name}"/>\n`;
        }
      });
      md += `</p>\n\n`;
    }
  }

  // 5. Featured Projects Showcase
  if (data.projects && data.projects.length > 0) {
    md += `## 🛠️ Featured Showcase\n\n`;
    md += `| Project | Tech Stack | Highlights | Links |\n`;
    md += `| :--- | :--- | :--- | :--- |\n`;
    data.projects.forEach(p => {
      const techBadgeList = p.techs.map(t => `\`${t}\``).join(" ");
      md += `| **${p.name}** | ${techBadgeList} | ${p.desc} | [Live Demo](${p.demoUrl}) &bull; [Source Code](${p.repoUrl}) |\n`;
    });
    md += `\n`;
  }

  // 6. Dynamic GitHub Widgets & Analytics
  if (data.stats.showStats || data.stats.showStreak || data.stats.showLangs || data.stats.showActivity || data.stats.showTrophies) {
    md += `## 📊 GitHub Analytics & Activity\n\n`;

    if (data.stats.showTrophies) {
      md += `<div align="center">\n`;
      md += `  <a href="https://github.com/${username}"><img src="https://github-profile-trophy.vercel.app/?username=${username}&theme=${statsTheme}&no-frame=false&no-bg=false&margin-w=4" alt="GitHub Trophies" /></a>\n`;
      md += `</div>\n\n`;
    }

    md += `<p align="center">\n`;
    if (data.stats.showStats) {
      md += `  <img src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${statsTheme}&hide_border=false&count_private=true" alt="GitHub Stats" height="175"/>\n`;
    }
    if (data.stats.showLangs) {
      md += `  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${statsTheme}&hide_border=false" alt="Top Languages" height="175"/>\n`;
    }
    if (data.stats.showStreak) {
      md += `  <img src="https://streak-stats.demolab.com?user=${username}&theme=${statsTheme}&hide_border=false" alt="GitHub Streak" height="175"/>\n`;
    }
    md += `</p>\n\n`;

    if (data.stats.showActivity) {
      md += `<div align="center">\n`;
      md += `  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${statsTheme}" alt="Activity Graph" width="100%"/>\n`;
      md += `</div>\n\n`;
    }
  }

  // 7. Developer Humor & Quotes
  if (data.extras?.showJoke || data.extras?.showQuote) {
    md += `<div align="center">\n`;
    if (data.extras?.showQuote) {
      md += `  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${statsTheme}" alt="Daily Dev Quote"/>\n  <br/><br/>\n`;
    }
    if (data.extras?.showJoke) {
      md += `  <img src="https://readme-jokes.vercel.app/api?theme=${statsTheme}" alt="Developer Joke" />\n`;
    }
    md += `</div>\n\n`;
  }

  // 8. Sponsorship & Support
  if (data.sponsorship?.enabled && (data.sponsorship.buymeacoffee || data.sponsorship.githubSponsor)) {
    md += `## 💖 Support & Sponsoring\n\n`;
    md += `<p align="center">\n`;
    if (data.sponsorship.buymeacoffee) {
      md += `  <a href="https://buymeacoffee.com/${data.sponsorship.buymeacoffee}"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=${badgeStyle}&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee"/></a>\n`;
    }
    if (data.sponsorship.githubSponsor) {
      md += `  <a href="https://github.com/sponsors/${data.sponsorship.githubSponsor}"><img src="https://img.shields.io/badge/Sponsor_on_GitHub-EA4AAA?style=${badgeStyle}&logo=github-sponsors&logoColor=white" alt="GitHub Sponsor"/></a>\n`;
    }
    md += `</p>\n\n`;
  }

  // Footer Tagline
  md += `<div align="center">\n`;
  md += `  <sub>Crafted with passion using <a href="https://github.com/${username}">GitBrand Studio</a> &bull; Made for software creators.</sub>\n`;
  md += `</div>\n`;

  return md;
}

// Render HTML Preview in the live GitHub card
function renderHtmlPreview(data) {
  const username = data.username || "paras";
  const fullName = data.fullName || "Paras";
  const title = data.title || "Full-Stack Engineer & SaaS Architect";
  const bio = data.bio || "";
  const bannerStyle = data.bannerStyle || "capsule";
  const badgeStyle = data.badgeStyle || "for-the-badge";
  const statsTheme = data.stats.theme || "tokyonight";

  let html = "";

  // 1. Dynamic Banner SVG
  html += `<div class="rendered-banner-container">`;
  if (bannerStyle === "capsule") {
    html += `
      <svg class="rendered-banner-svg" viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4f46e5" />
            <stop offset="50%" stop-color="#7c3aed" />
            <stop offset="100%" stop-color="#ec4899" />
          </linearGradient>
        </defs>
        <rect width="900" height="200" fill="url(#g1)" rx="12"/>
        <path d="M0,130 C200,190 350,90 600,150 C750,190 850,110 900,140 L900,200 L0,200 Z" fill="rgba(255,255,255,0.15)"/>
        <text x="450" y="85" text-anchor="middle" fill="#ffffff" font-size="38" font-weight="800" font-family="system-ui">${fullName}</text>
        <text x="450" y="125" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="500" font-family="system-ui">${title}</text>
      </svg>
    `;
  } else if (bannerStyle === "neon") {
    html += `
      <svg class="rendered-banner-svg" viewBox="0 0 900 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#059669" />
            <stop offset="50%" stop-color="#0284c7" />
            <stop offset="100%" stop-color="#0d9488" />
          </linearGradient>
        </defs>
        <rect width="900" height="180" fill="url(#g2)" rx="12"/>
        <text x="450" y="80" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="800" font-family="system-ui">${fullName}</text>
        <text x="450" y="120" text-anchor="middle" fill="#ccfbf1" font-size="17" font-weight="500" font-family="system-ui">${title}</text>
      </svg>
    `;
  } else if (bannerStyle === "wave") {
    html += `
      <svg class="rendered-banner-svg" viewBox="0 0 900 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#ef4444" />
          </linearGradient>
        </defs>
        <rect width="900" height="180" fill="url(#g3)" rx="12"/>
        <path d="M0,100 Q225,50 450,110 T900,100 L900,180 L0,180 Z" fill="rgba(0,0,0,0.18)"/>
        <text x="450" y="80" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="800" font-family="system-ui">${fullName}</text>
        <text x="450" y="120" text-anchor="middle" fill="#fef08a" font-size="17" font-weight="500" font-family="system-ui">${title}</text>
      </svg>
    `;
  } else {
    // terminal
    html += `
      <div style="background:#090d16; border:1px solid #38bdf8; border-radius:12px; padding:24px 30px; font-family:monospace; color:#38bdf8; margin-bottom:20px;">
        <div style="display:flex; gap:6px; margin-bottom:12px;">
          <span style="width:10px; height:10px; border-radius:50%; background:#ef4444;"></span>
          <span style="width:10px; height:10px; border-radius:50%; background:#f59e0b;"></span>
          <span style="width:10px; height:10px; border-radius:50%; background:#10b981;"></span>
        </div>
        <div style="font-size:18px; font-weight:700;">$ whoami: ${fullName}</div>
        <div style="font-size:14px; color:#94a3b8; margin-top:4px;">$ role: ${title}</div>
      </div>
    `;
  }
  html += `</div>`;

  // 2. Personal Avatar & Status Section
  html += `<div style="text-align:center; margin-bottom:24px;">`;
  if (data.showAvatar) {
    html += `
      <img src="assets/avatar.jpg" alt="${fullName}" style="width:120px; height:120px; border-radius:50%; border:3px solid #6366f1; object-fit:cover; box-shadow:0 6px 20px rgba(0,0,0,0.4); margin-bottom:12px;"/>
    `;
  }
  if (data.statusText) {
    html += `
      <div style="font-size:15px; font-weight:600; margin-bottom:10px; color:#f0f6fc;">
        <span>${data.statusEmoji || "🚀"}</span> ${data.statusText}
      </div>
    `;
  }

  // Rotating subtitle simulation
  if (data.typingTexts && data.typingTexts.length > 0) {
    html += `
      <div class="typing-hero-container">
        <span class="typing-hero-text" id="liveTypingText">${data.typingTexts[0]}</span>
        <span class="typing-cursor"></span>
      </div>
    `;
  }

  // Social Badges Flow
  if (data.socials && data.socials.length > 0) {
    html += `<div class="badge-flow-container" style="justify-content:center; margin-top:10px;">`;
    data.socials.forEach(s => {
      html += `<img src="https://img.shields.io/badge/${encodeURIComponent(s.label)}-${s.color}?style=${badgeStyle}&logo=${s.platform === "twitter" ? "x" : s.platform}&logoColor=white" alt="${s.label}"/>`;
    });
    html += `</div>`;
  }

  // Visitor Counter
  if (data.extras?.showVisitorCounter) {
    html += `
      <div style="margin-top:10px;">
        <img src="https://komarev.com/ghpvc/?username=${username}&label=PROFILE+VIEWS&style=flat-square&color=6366f1" alt="Profile Views" />
      </div>
    `;
  }
  html += `</div>`;

  // 3. About Me Section
  html += `<h2>🚀 About Me</h2>`;
  if (bio) {
    html += `<p style="font-size:15px; line-height:1.7;">${bio}</p>`;
  }

  if (data.quickFacts && data.quickFacts.length > 0) {
    html += `<ul style="list-style:none; padding-left:0;">`;
    data.quickFacts.forEach(f => {
      html += `<li style="margin-bottom:8px; font-size:14px;"><span style="font-size:16px; margin-right:6px;">${f.icon}</span> <strong>${f.label}:</strong> <span style="color:#94a3b8;">${f.value}</span></li>`;
    });
    html += `</ul>`;
  }

  // 4. Tech Stack Badges
  if (data.selectedTechs && data.selectedTechs.length > 0) {
    html += `<h2>⚡ Tech Stack & Architecture</h2>`;

    if (data.badgeLayout === "categorized") {
      Object.keys(TECH_CATEGORIES).forEach(catKey => {
        const catTechs = TECH_DATABASE.filter(t => t.category === catKey && data.selectedTechs.includes(t.id));
        if (catTechs.length > 0) {
          html += `<h3>${TECH_CATEGORIES[catKey]}</h3>`;
          html += `<div class="badge-flow-container">`;
          catTechs.forEach(tech => {
            html += `<img src="https://img.shields.io/badge/${encodeURIComponent(tech.name)}-${tech.color}?style=${badgeStyle}&logo=${tech.logo}&logoColor=${tech.logoColor}" alt="${tech.name}"/>`;
          });
          html += `</div>`;
        }
      });
    } else {
      html += `<div class="badge-flow-container">`;
      data.selectedTechs.forEach(techId => {
        const tech = TECH_DATABASE.find(t => t.id === techId);
        if (tech) {
          html += `<img src="https://img.shields.io/badge/${encodeURIComponent(tech.name)}-${tech.color}?style=${badgeStyle}&logo=${tech.logo}&logoColor=${tech.logoColor}" alt="${tech.name}"/>`;
        }
      });
      html += `</div>`;
    }
  }

  // 5. Featured Projects Showcase Cards
  if (data.projects && data.projects.length > 0) {
    html += `<h2>🛠️ Featured Showcase</h2>`;
    html += `<div class="projects-rendered-grid">`;
    data.projects.forEach(p => {
      html += `
        <div class="project-preview-card">
          <div class="project-card-top">
            <div class="project-card-title">📦 ${p.name}</div>
            <div class="project-card-desc">${p.desc}</div>
            <div class="project-tags-row">
              ${p.techs.map(t => `<span class="project-tag">${t}</span>`).join("")}
            </div>
          </div>
          <div class="project-links-row">
            <a href="${p.demoUrl}" target="_blank" class="project-link-a">↗ Live Demo</a>
            <span style="color:#484f58;">&bull;</span>
            <a href="${p.repoUrl}" target="_blank" class="project-link-a">★ GitHub</a>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  // 6. GitHub Stats Widgets Preview
  if (data.stats.showStats || data.stats.showStreak || data.stats.showLangs || data.stats.showActivity || data.stats.showTrophies) {
    html += `<h2>📊 GitHub Analytics & Activity</h2>`;

    if (data.stats.showTrophies) {
      html += `
        <div style="text-align:center; margin:16px 0;">
          <img class="stats-card-img" src="https://github-profile-trophy.vercel.app/?username=${username}&theme=${statsTheme}&no-frame=false&no-bg=false&margin-w=4" alt="GitHub Trophies"/>
        </div>
      `;
    }

    html += `<div class="stats-cards-grid">`;
    if (data.stats.showStats) {
      html += `<img class="stats-card-img" src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${statsTheme}&hide_border=false&count_private=true" alt="GitHub Stats"/>`;
    }
    if (data.stats.showStreak) {
      html += `<img class="stats-card-img" src="https://streak-stats.demolab.com?user=${username}&theme=${statsTheme}&hide_border=false" alt="Streak Stats"/>`;
    }
    if (data.stats.showLangs) {
      html += `<img class="stats-card-img" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${statsTheme}&hide_border=false" alt="Top Languages"/>`;
    }
    html += `</div>`;

    if (data.stats.showActivity) {
      html += `
        <div style="margin-top:16px;">
          <img class="stats-card-img" src="https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${statsTheme}" alt="Activity Graph"/>
        </div>
      `;
    }
  }

  // 7. Developer Humor & Quotes
  if (data.extras?.showJoke || data.extras?.showQuote) {
    html += `<div style="text-align:center; margin:24px 0; display:flex; flex-direction:column; align-items:center; gap:16px;">`;
    if (data.extras?.showQuote) {
      html += `<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${statsTheme}" alt="Daily Dev Quote" style="max-width:100%; border-radius:8px;"/>`;
    }
    if (data.extras?.showJoke) {
      html += `<img src="https://readme-jokes.vercel.app/api?theme=${statsTheme}" alt="Developer Joke" style="max-width:100%; border-radius:8px;"/>`;
    }
    html += `</div>`;
  }

  // 8. Sponsorship
  if (data.sponsorship?.enabled && (data.sponsorship.buymeacoffee || data.sponsorship.githubSponsor)) {
    html += `<h2>💖 Support & Sponsoring</h2>`;
    html += `<div class="badge-flow-container" style="justify-content:center;">`;
    if (data.sponsorship.buymeacoffee) {
      html += `<a href="https://buymeacoffee.com/${data.sponsorship.buymeacoffee}" target="_blank"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=${badgeStyle}&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee"/></a>`;
    }
    if (data.sponsorship.githubSponsor) {
      html += `<a href="https://github.com/sponsors/${data.sponsorship.githubSponsor}" target="_blank"><img src="https://img.shields.io/badge/Sponsor_on_GitHub-EA4AAA?style=${badgeStyle}&logo=github-sponsors&logoColor=white" alt="GitHub Sponsor"/></a>`;
    }
    html += `</div>`;
  }

  return html;
}

// Update Live Renderings
function updateLiveRender() {
  updateToolbarSimulation();
  const md = generateMarkdown(currentProfile);
  rawMarkdownCode.textContent = md;
  liveMarkdownPreview.innerHTML = renderHtmlPreview(currentProfile);
}

// Typing Rotation Animation
let typingTimer = null;
let typingIndex = 0;
function startTypingAnimation() {
  if (typingTimer) clearInterval(typingTimer);
  typingTimer = setInterval(() => {
    if (!currentProfile.typingTexts || currentProfile.typingTexts.length === 0) return;
    typingIndex = (typingIndex + 1) % currentProfile.typingTexts.length;
    const el = document.getElementById("liveTypingText");
    if (el) {
      el.textContent = currentProfile.typingTexts[typingIndex];
    }
  }, 2600);
}

// Toast Feedback System
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// Copy README
async function copyReadmeToClipboard() {
  const md = generateMarkdown(currentProfile);
  try {
    await navigator.clipboard.writeText(md);
    showToast("README.md copied to clipboard! Ready to paste into GitHub.", "success");
  } catch (err) {
    // Fallback for clipboard
    const textarea = document.createElement("textarea");
    textarea.value = md;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast("README.md copied to clipboard!", "success");
  }
}

// Download README
function downloadReadmeFile() {
  const md = generateMarkdown(currentProfile);
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "README.md";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast("README.md downloaded successfully!", "success");
}

// Boot up
document.addEventListener("DOMContentLoaded", initApp);
