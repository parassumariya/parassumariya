#!/bin/bash
# ================================================================
# PARAS SUMARIYA — GitHub Profile Setup Script
# Run this once to push everything to GitHub
# ================================================================

set -e

REPO_URL="https://github.com/parassumariya/parassumariya.git"
BRANCH="main"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Paras Sumariya — GitHub Profile Publisher"
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

# Commit
echo "→ Committing..."
git commit -m "feat: refresh GitHub profile README" \
  --allow-empty

# Push
echo "→ Pushing to GitHub ($BRANCH)..."
git branch -M "$BRANCH"
git push -u origin "$BRANCH"

echo ""
echo "✅ Done! Visit: https://github.com/parassumariya"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
