# 🚀 Quick Upload Guide

## Your GitHub Repository
- **Repository**: https://github.com/vht299/VHT-Itinerary-Generator
- **Live Site**: https://vht299.github.io/VHT-Itinerary-Generator/

## ✅ Setup Complete!

Your local repository is now connected to GitHub. You're ready to auto-upload!

---

## 📤 How to Upload Changes

### After making changes to `index.html`:

**Option 1: Use the auto-upload script (Recommended)**
```bash
./auto-upload.sh
```

**Option 2: Manual git commands**
```bash
git add .
git commit -m "Updated: [describe your changes]"
git push origin main
```

---

## 🎯 What Happens When You Upload

1. ✅ Changes are committed locally
2. ✅ Changes are pushed to GitHub
3. ⏱️ Wait 1-2 minutes for GitHub Pages to update
4. 🌐 Your live site automatically updates!

---

## 🔄 Workflow Example

```bash
# 1. Make changes to index.html in your editor
# 2. Save the file
# 3. Run the upload script:
./auto-upload.sh

# 4. Wait 1-2 minutes
# 5. Visit: https://vht299.github.io/VHT-Itinerary-Generator/
# 6. Refresh the page - your changes are live!
```

---

## 📝 Commit Messages

The auto-upload script automatically creates commit messages with timestamps:
- `Auto-update: 2025-01-XX XX:XX:XX - Updated index.html`

If you want custom messages, use manual git commands instead.

---

## 🆘 Troubleshooting

### "Permission denied" when pushing
- You may need to authenticate with GitHub
- Use a Personal Access Token instead of password
- Or set up SSH keys

### "Failed to push"
- Check your internet connection
- Verify you have push access to the repository
- Try: `git push origin main --force` (only if you're sure!)

### Changes not showing on live site
- Wait 2-3 minutes (GitHub Pages needs time to build)
- Clear browser cache (Cmd+Shift+R on Mac)
- Check GitHub Pages settings in repository Settings → Pages

---

## ✨ Tips

- **Always test locally** before uploading
- **Commit often** - small commits are easier to manage
- **Check the live site** after uploading to verify changes
- **Use descriptive commit messages** when uploading manually

---

**Ready to go!** Just run `./auto-upload.sh` after making changes! 🚀




