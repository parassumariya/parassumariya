// Pre-configured branding profiles for different software roles
export const PRESETS = {
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
