# 🧪 Local Testing Workflow

## Quick Start

### Step 1: Test Locally (No Upload)
1. **Make changes** to `index.html` in your editor
2. **Save the file**
3. **Open browser**: http://localhost:8000/index.html
4. **Test your changes** - refresh the page to see updates
5. **Repeat** until you're happy with the result

### Step 2: Upload to GitHub (When Ready)
Once you're satisfied with your changes:
```bash
./auto-upload.sh
```

Your changes will be live at: https://vht299.github.io/VHT-Itinerary-Generator/ in 1-2 minutes!

---

## 🎯 Recommended Workflow

```
1. Edit index.html
   ↓
2. Save file
   ↓
3. Test at http://localhost:8000/index.html
   ↓
4. Make more changes? → Go back to step 1
   ↓
5. Happy with changes? → Run ./auto-upload.sh
   ↓
6. Wait 1-2 minutes
   ↓
7. Check live site: https://vht299.github.io/VHT-Itinerary-Generator/
```

---

## 🚀 Quick Commands

### Open Local Test Site
```bash
open http://localhost:8000/index.html
```

### Check Local Server Status
```bash
lsof -ti:8000 && echo "✅ Server running" || echo "❌ No server"
```

### Start Local Server (if not running)
```bash
cd /Users/macbookair/Desktop/VHT_SIMPLE
python3 -m http.server 8000
```

### Upload Changes to GitHub
```bash
./auto-upload.sh
```

---

## 💡 Tips

- ✅ **Test locally first** - faster feedback, no waiting for GitHub Pages
- ✅ **Make multiple changes** before uploading - saves time
- ✅ **Refresh browser** (Cmd+R) to see latest changes
- ✅ **Clear cache** (Cmd+Shift+R) if changes don't appear
- ✅ **Upload when ready** - only push to GitHub when you're satisfied

---

## 🔄 Current Status

- ✅ **Local server**: Running on port 8000
- ✅ **Test URL**: http://localhost:8000/index.html
- ✅ **Auto-upload script**: Ready to use
- ✅ **GitHub Pages**: https://vht299.github.io/VHT-Itinerary-Generator/

---

**Happy coding!** Test locally, upload when ready! 🚀

