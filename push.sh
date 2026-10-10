#!/bin/bash
# ================================================================
# PARAS SUMARIA — GitHub Profile Setup Script
# Run this once to push everything to GitHub
# ================================================================

set -e

REPO_URL="https://github.com/parassumaria/parassumaria.git"
BRANCH="main"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Paras Sumaria — GitHub Profile Publisher"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Init git if not already
if [ ! -d ".git" ]; then
  echo "→ Initialising git repository..."
  git init
  git remote add origin "$REPO_URL"
else
  echo "→ Git already initialised."
  # Make sure remote is set
  git remote set-url origin "$REPO_URL" 2>/dev/null || git remote add origin "$REPO_URL"
fi

# Stage all files
echo "→ Staging files..."
git add README.md
git add assets/banner.svg
git add assets/banner.jpg
git add .github/workflows/snake.yml

# Commit
echo "→ Committing..."
git commit -m "feat: animated GitHub profile README with banner, stats & socials" \
  --allow-empty

# Push
echo "→ Pushing to GitHub ($BRANCH)..."
git branch -M "$BRANCH"
git push -u origin "$BRANCH"

echo ""
echo "✅ Done! Visit: https://github.com/parassumaria"
echo ""
echo "⏳ The snake animation will appear automatically"
echo "   after the GitHub Action runs (within ~2 minutes)."
echo "   Trigger it manually: GitHub → Actions → Generate Snake → Run workflow"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
