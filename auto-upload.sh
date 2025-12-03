#!/bin/bash

# Auto-upload script for VHT Itinerary Generator
# This script automatically commits and pushes changes to GitHub

echo "🚀 VHT Auto-Upload Script"
echo "========================="
echo ""

# Check if index.html exists
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found!"
    exit 1
fi

# Check if git repository is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized!"
    echo "   Run: git init"
    exit 1
fi

# Check if remote repository is configured
REMOTE_URL=$(git remote get-url origin 2>/dev/null)
if [ -z "$REMOTE_URL" ]; then
    echo "⚠️  Warning: No remote repository configured!"
    echo ""
    echo "To set up GitHub remote, run:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
    echo ""
    echo "Or if you haven't created a GitHub repository yet:"
    echo "  1. Go to https://github.com and create a new repository"
    echo "  2. Then run the command above with your repository URL"
    echo ""
    read -p "Do you want to continue with local commit only? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Get current timestamp for commit message
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

# Check if there are changes to commit
if git diff --quiet && git diff --cached --quiet; then
    echo "✅ No changes to commit. Everything is up to date!"
    exit 0
fi

# Show what will be committed
echo "📝 Changes to be committed:"
git status --short
echo ""

# Stage all changes
echo "📦 Staging changes..."
git add .

# Commit with timestamp
COMMIT_MSG="Auto-update: $(date +'%Y-%m-%d %H:%M:%S') - Updated index.html"
echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG"

if [ $? -eq 0 ]; then
    echo "✅ Changes committed successfully!"
    echo ""
    
    # Push to remote if configured
    if [ ! -z "$REMOTE_URL" ]; then
        echo "☁️  Pushing to GitHub..."
        CURRENT_BRANCH=$(git branch --show-current)
        git push origin $CURRENT_BRANCH 2>&1
        
        if [ $? -eq 0 ]; then
            echo "✅ Successfully pushed to GitHub!"
            echo ""
            echo "🌐 Your changes should be live in 1-2 minutes at:"
            echo "   https://vht299.github.io/VHT-Itinerary-Generator/"
        else
            echo "⚠️  Warning: Failed to push to remote repository"
            echo "   Check your internet connection and GitHub credentials"
            echo "   You may need to authenticate with a Personal Access Token"
        fi
    else
        echo "ℹ️  Changes committed locally (no remote configured)"
    fi
else
    echo "❌ Error: Failed to commit changes"
    exit 1
fi

echo ""
echo "✨ Done!"

