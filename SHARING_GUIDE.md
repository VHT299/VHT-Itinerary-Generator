# VHT Itinerary Generator - Sharing & Usage Guide

## 📋 Current Status

### ✅ Saved Today (December 1, 2025)
- **Main File**: `index.html` (331KB)
- **Backup Created**: `index_backup_20251201_183311.html`
- **All Features Implemented**:
  - Places to Visit feature with checkboxes
  - 3-star hotels and homestays added to all cities
  - Cambodia route prioritization fixed
  - Round-trip itinerary logic
  - Transfer time calculations
  - Meal plan dropdowns
  - Drag-and-drop image galleries
  - Interactive maps with Leaflet.js

---

## 💾 How Itineraries Are Saved

### Current System:
**⚠️ IMPORTANT**: Generated itineraries are **NOT automatically saved**. They exist only in browser memory while the page is open.

### To Save Itineraries:
1. **Generate your itinerary** using the form
2. **Click "Print / Save as PDF"** button (top right)
3. **In the print dialog**:
   - **Mac**: Click "PDF" → "Save as PDF"
   - **Windows**: Select "Microsoft Print to PDF" or "Save as PDF"
   - **Chrome/Edge**: Use "Save as PDF" destination
4. **Save the PDF** with a descriptive filename (e.g., `Smith_Family_15Days_HCMC_Hanoi.pdf`)

### Recommendation:
- **Save each itinerary as PDF immediately** after generating and customizing it
- **Use consistent naming**: `ClientName_Days_StartCity_EndCity_Date.pdf`
- **Store PDFs in a shared folder** (see sharing options below)

---

## 🔄 Sharing Options for Lona

### Option 1: Cloud Storage (Recommended) ⭐

**Best for**: Easy access, automatic sync, version control

#### Setup:
1. **Choose a cloud service**:
   - **Google Drive** (easiest)
   - **Dropbox**
   - **OneDrive**
   - **iCloud Drive**

2. **Create a shared folder**:
   - Name it: `VHT_Itinerary_Generator`
   - Share with Lona's email address
   - Give "Editor" access (not just "Viewer")

3. **Upload files**:
   ```
   VHT_Itinerary_Generator/
   ├── index.html (main program)
   ├── vht_logo.png
   ├── README.md (this file)
   └── Generated_Itineraries/ (folder for PDFs)
       ├── Client1_15Days_HCMC_Hanoi.pdf
       ├── Client2_8Days_DaNang_HoiAn.pdf
       └── ...
   ```

4. **Both users**:
   - Download the folder to your computer
   - Open `index.html` in a web browser
   - Save generated PDFs to `Generated_Itineraries/` folder
   - Changes sync automatically

#### Pros:
- ✅ Automatic sync
- ✅ Version history
- ✅ Accessible from any device
- ✅ Easy collaboration

#### Cons:
- ⚠️ Requires internet connection
- ⚠️ Need cloud storage account

---

### Option 2: USB Drive / External Hard Drive

**Best for**: Offline access, no internet needed

#### Setup:
1. **Copy entire folder** to USB drive:
   ```
   VHT_SIMPLE/
   ├── index.html
   ├── vht_logo.png
   ├── Generated_Itineraries/ (create this folder)
   └── All backup files
   ```

2. **Give USB to Lona**
3. **Lona copies folder** to her computer
4. **Both work independently**
5. **Periodically sync** by copying new PDFs back and forth

#### Pros:
- ✅ Works offline
- ✅ No internet needed
- ✅ Simple setup

#### Cons:
- ⚠️ Manual syncing required
- ⚠️ Risk of version conflicts
- ⚠️ Need physical transfer

---

### Option 3: Network Shared Folder (Same Office)

**Best for**: Same network, fast access

#### Setup:
1. **On your Mac**:
   - System Settings → Sharing → File Sharing
   - Share the `VHT_SIMPLE` folder
   - Add Lona as a user

2. **Lona connects**:
   - Finder → Go → Connect to Server
   - Enter your Mac's IP address
   - Mount the shared folder

3. **Both access** the same `index.html` file

#### Pros:
- ✅ Real-time access
- ✅ No cloud needed
- ✅ Fast local network

#### Cons:
- ⚠️ Both computers must be on same network
- ⚠️ Your Mac must be on for Lona to access

---

### Option 4: Simple Web Server (Advanced)

**Best for**: Professional setup, multiple users

#### Setup:
1. **Host the files** on a simple web server:
   - GitHub Pages (free)
   - Netlify (free)
   - Your own web hosting

2. **Share the URL** with Lona
3. **Both access** via web browser

#### Pros:
- ✅ Accessible from anywhere
- ✅ Always up-to-date
- ✅ No file syncing needed

#### Cons:
- ⚠️ Requires technical setup
- ⚠️ Need internet connection

---

## 📝 Recommended Workflow

### Daily Usage:
1. **Open** `index.html` in browser
2. **Fill out** client information form
3. **Generate** itinerary
4. **Customize** hotels, activities, transfers
5. **Add photos** (drag & drop)
6. **Review** map at bottom
7. **Click "Print / Save as PDF"**
8. **Save PDF** to shared folder with client name

### File Naming Convention:
```
[ClientName]_[Days]Days_[StartCity]_[EndCity]_[Date].pdf

Examples:
- Smith_Family_15Days_HCMC_Hanoi_2025-12-01.pdf
- Johnson_8Days_DaNang_HoiAn_2025-12-02.pdf
- Williams_21Days_Hanoi_SiemReap_2025-12-03.pdf
```

---

## 🔧 Technical Requirements

### For Both Users:
- **Modern web browser** (Chrome, Firefox, Safari, Edge)
- **Internet connection** (for map tiles and CDN resources)
- **PDF viewer** (built into browsers)

### Files Needed:
- ✅ `index.html` (main program - 331KB)
- ✅ `vht_logo.png` (logo file)
- ✅ Optional: backup files for safety

### No Installation Required:
- This is a **single HTML file** - no installation needed
- Just open `index.html` in any web browser
- Works on Mac, Windows, Linux

---

## 🚨 Important Notes

### Data Storage:
- **Itineraries**: Must be saved as PDFs manually
- **Form data**: Not saved between sessions (starts fresh each time)
- **Photos**: Stored in browser memory only (lost if page refreshes)

### Best Practices:
1. **Save PDFs immediately** after generating
2. **Use consistent naming** for easy searching
3. **Keep backups** of important itineraries
4. **Test the program** on Lona's computer before sharing

### Troubleshooting:
- **Maps not loading?** Check internet connection
- **PDF not generating?** Try different browser
- **Photos not showing?** Make sure images are under 5MB each

---

## 📞 Quick Start for Lona

1. **Receive** the `VHT_SIMPLE` folder (via cloud/USB/network)
2. **Open** `index.html` in Chrome or Safari
3. **Fill out** the form on the left
4. **Click** "Generate / Refresh Itinerary"
5. **Customize** as needed
6. **Click** "Print / Save as PDF"
7. **Save** PDF with client name
8. **Done!** ✅

---

## 🔄 Future Enhancements (Optional)

If you want automatic saving, we could add:
- **LocalStorage** to save form data in browser
- **Export to JSON** for backup
- **Cloud database** integration
- **Auto-save** drafts

Let me know if you'd like any of these features!


