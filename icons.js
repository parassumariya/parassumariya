// Technology badges database with categories, icons, and official brand colors
export const TECH_CATEGORIES = {
  languages: "Programming Languages",
  frontend: "Frontend & UI",
  backend: "Backend & APIs",
  database: "Databases & Storage",
  devops: "Cloud, DevOps & CI/CD",
  aiml: "AI, ML & Data Science",
  tools: "Tools, Design & Testing"
};

export const TECH_DATABASE = [
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
