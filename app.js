import { TECH_CATEGORIES, TECH_DATABASE } from "./icons.js";
import { PRESETS } from "./presets.js";

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
export function generateMarkdown(data) {
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
