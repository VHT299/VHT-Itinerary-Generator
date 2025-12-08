# 🔐 GitHub Authentication Guide

## Quick Setup (2 minutes)

### Step 1: Create Personal Access Token

1. **Go to**: https://github.com/settings/tokens
2. **Click**: "Generate new token" → "Generate new token (classic)"
3. **Name it**: "VHT Auto-Upload" (or any name)
4. **Select scopes**: Check ✅ `repo` (Full control of private repositories)
5. **Click**: "Generate token" (bottom of page)
6. **IMPORTANT**: Copy the token immediately! (It looks like: `ghp_xxxxxxxxxxxxxxxxxxxx`)

### Step 2: Use the Token

When you push, Git will ask for:
- **Username**: `vht299` (your GitHub username)
- **Password**: Paste your Personal Access Token (NOT your GitHub password)

The token will be saved in your Mac's Keychain for future use.

---

## 🚀 After Creating Token

Run this command to push:
```bash
git push origin main
```

Then enter:
- Username: `vht299`
- Password: `[paste your token here]`

---

## ✅ Verify It Works

After successful push, test the auto-upload script:
```bash
./auto-upload.sh
```

It should work automatically now!

---

## 🔒 Security Note

- ✅ Token is stored securely in macOS Keychain
- ✅ You can revoke the token anytime on GitHub
- ✅ Token only has access to repositories you grant

---

**Need help?** Let me know once you've created the token and I'll help you push!




