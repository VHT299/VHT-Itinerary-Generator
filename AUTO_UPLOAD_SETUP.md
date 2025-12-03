# Auto-Upload Setup Guide

## 🎯 Quick Setup

### Step 1: Create GitHub Repository (if you haven't already)

1. Go to https://github.com and create a new repository
2. Name it something like `vht-itinerary-generator`
3. Make it **Public** (required for free hosting)
4. **Don't** initialize with README

### Step 2: Connect Your Local Repository to GitHub

Run this command (replace with your actual GitHub username and repo name):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

**Example:**
```bash
git remote add origin https://github.com/vht299/vht-itinerary-generator.git
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Step 4: Use Auto-Upload Script

Now whenever you make changes to `index.html`, just run:

```bash
./auto-upload.sh
```

Or on Mac/Linux:
```bash
bash auto-upload.sh
```

The script will:
- ✅ Automatically detect changes
- ✅ Commit them with a timestamp
- ✅ Push to GitHub
- ✅ Your site updates in 1-2 minutes!

---

## 🔄 How to Use

### Option 1: Manual Run (Recommended)
After making changes to `index.html`, run:
```bash
./auto-upload.sh
```

### Option 2: Watch for Changes (Advanced)
If you want automatic uploads whenever you save `index.html`, you can use a file watcher. Ask me if you want help setting this up!

---

## 📝 What the Script Does

1. ✅ Checks if `index.html` exists
2. ✅ Checks if git is initialized
3. ✅ Checks if remote repository is configured
4. ✅ Shows what will be committed
5. ✅ Stages all changes
6. ✅ Commits with timestamp
7. ✅ Pushes to GitHub (if remote configured)
8. ✅ Shows success message

---

## 🆘 Troubleshooting

### "No remote repository configured"
- Run: `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git`

### "Failed to push"
- Check your internet connection
- Make sure you have push access to the repository
- You may need to authenticate with GitHub (use Personal Access Token)

### "Permission denied"
- Make sure the script is executable: `chmod +x auto-upload.sh`

---

## 🔐 GitHub Authentication

If you get authentication errors when pushing:

1. **Use Personal Access Token** (recommended):
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Generate a new token with `repo` permissions
   - Use the token as password when pushing

2. **Or use SSH** (more secure):
   - Set up SSH keys with GitHub
   - Change remote URL to SSH: `git remote set-url origin git@github.com:USERNAME/REPO.git`

---

## ✨ Benefits

- ✅ **One command** to upload changes
- ✅ **Automatic timestamps** in commit messages
- ✅ **No manual git commands** needed
- ✅ **Quick updates** to your live site

---

Ready to use! Just run `./auto-upload.sh` after making changes! 🚀

