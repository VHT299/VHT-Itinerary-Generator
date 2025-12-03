# Places to Visit Feature - Implementation Proposal

## 🎯 Goal
Allow clients to specify places/sites they want to visit, and automatically generate itineraries that prioritize those destinations.

## 📋 Proposed Solution

### Option 1: Multi-Select Checkbox System (Recommended)
**Location**: Add after "Special requests" field, before "Additional internal info" section

**UI Design**:
```
┌─────────────────────────────────────────────────┐
│ Places to Visit (select all that apply)        │
├─────────────────────────────────────────────────┤
│ ☐ Angkor Wat (Siem Reap)                       │
│ ☐ Ha Long Bay Cruise                            │
│ ☐ Hoi An Ancient Town                           │
│ ☐ Cu Chi Tunnels (Ho Chi Minh City)            │
│ ☐ Mekong Delta Floating Markets                 │
│ ☐ Sapa Rice Terraces                            │
│ ☐ Hue Imperial City                             │
│ ☐ Phong Nha Caves                               │
│ ☐ Ninh Binh (Tam Coc/Trang An)                 │
│ ☐ Ba Na Hills Golden Bridge (Da Nang)           │
│ ☐ Other (specify in text box below)             │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ Custom places (comma-separated):                │
│ [___________________________]                    │
│ e.g. "Mai Chau valley, Fansipan mountain"       │
└─────────────────────────────────────────────────┘
```

**Advantages**:
- ✅ Easy to use - just check boxes
- ✅ Clear visual feedback
- ✅ Shows which city each attraction is in
- ✅ Can combine with custom text input

---

### Option 2: Smart Text Input with Auto-Suggestions
**Location**: Replace or enhance "Special requests" field

**UI Design**:
```
┌─────────────────────────────────────────────────┐
│ Places to Visit                                 │
│ [Type or select: Angkor Wat, Ha Long Bay...]   │
│                                                  │
│ 💡 Suggestions:                                  │
│ • Angkor Wat • Ha Long Bay • Hoi An • Cu Chi    │
│ • Mekong Delta • Sapa • Hue • Phong Nha         │
└─────────────────────────────────────────────────┘
```

**Advantages**:
- ✅ Flexible - can type anything
- ✅ Auto-complete suggestions
- ✅ Less visual clutter

---

### Option 3: Tag/Chip System
**UI Design**:
```
┌─────────────────────────────────────────────────┐
│ Places to Visit                                 │
│ Click to add:                                   │
│                                                  │
│ [Angkor Wat] [Ha Long Bay] [Hoi An] [Cu Chi]   │
│ [Mekong Delta] [Sapa] [Hue] [Phong Nha]         │
│ [+ Add custom place]                             │
│                                                  │
│ Selected:                                       │
│ [Angkor Wat ×] [Ha Long Bay ×] [Custom place ×]│
└─────────────────────────────────────────────────┘
```

**Advantages**:
- ✅ Modern, interactive UI
- ✅ Easy to add/remove
- ✅ Visual representation of selections

---

## 🔧 Implementation Logic

### Step 1: Create Attraction-to-City Mapping
```javascript
const ATTRACTION_TO_CITY = {
  // Siem Reap / Cambodia
  "Angkor Wat": "Siem Reap",
  "Angkor Thom": "Siem Reap",
  "Ta Prohm": "Siem Reap",
  "Bayon Temple": "Siem Reap",
  
  // Ha Long Bay
  "Ha Long Bay": "Ha Long Bay",
  "Lan Ha Bay": "Ha Long Bay",
  "Bai Tu Long Bay": "Ha Long Bay",
  
  // Hoi An
  "Hoi An Ancient Town": "Hoi An",
  "Hoi An Old Town": "Hoi An",
  "Japanese Covered Bridge": "Hoi An",
  
  // Ho Chi Minh City
  "Cu Chi Tunnels": "Ho Chi Minh City",
  "War Remnants Museum": "Ho Chi Minh City",
  "Reunification Palace": "Ho Chi Minh City",
  
  // Mekong Delta
  "Mekong Delta": "Mekong Delta",
  "Cai Rang Floating Market": "Can Tho",
  "Phong Dien Floating Market": "Can Tho",
  
  // Sapa
  "Sapa": "Sapa",
  "Fansipan": "Sapa",
  "Rice Terraces": "Sapa",
  
  // Hue
  "Hue Imperial City": "Hue",
  "Imperial Citadel": "Hue",
  "Royal Tombs": "Hue",
  
  // Phong Nha
  "Phong Nha Caves": "Phong Nha",
  "Paradise Cave": "Phong Nha",
  "Son Doong Cave": "Phong Nha",
  
  // Ninh Binh
  "Tam Coc": "Ninh Binh",
  "Trang An": "Ninh Binh",
  "Ninh Binh": "Ninh Binh",
  
  // Da Nang
  "Ba Na Hills": "Da Nang",
  "Golden Bridge": "Da Nang",
  "Marble Mountains": "Da Nang",
  
  // Hanoi
  "Hanoi Old Quarter": "Hanoi",
  "Ho Chi Minh Mausoleum": "Hanoi",
  "Temple of Literature": "Hanoi",
  
  // Other
  "Mai Chau": "Mai Chau",
  "Da Lat": "Da Lat",
  "Nha Trang": "Nha Trang"
};
```

### Step 2: Parse Preferences
```javascript
function parsePlacesToVisit(preferences) {
  // Extract from checkboxes + custom text
  // Match to cities using ATTRACTION_TO_CITY mapping
  // Return array of required cities
}
```

### Step 3: Modify Route Building
```javascript
function buildGeographicRoute(travellerProfile) {
  const requiredCities = parsePlacesToVisit(travellerProfile.placesToVisit);
  
  // If required cities exist:
  // 1. Ensure route includes all required cities
  // 2. Prioritize routes that visit them
  // 3. Add extra days if needed to accommodate
  // 4. Fill remaining days with logical intermediate cities
}
```

### Step 4: Highlight in Itinerary
- Mark days that include requested places
- Add note: "⭐ Includes requested: [Place Name]"

---

## 🎨 Recommended: Option 1 (Checkboxes + Custom Text)

**Why?**
- Most user-friendly
- Clear what's available
- Shows city locations
- Easy to implement
- Works well for non-technical users

**Implementation Steps**:
1. Add checkbox section in form (after Special requests)
2. Create ATTRACTION_TO_CITY mapping
3. Parse selected preferences
4. Modify route builder to prioritize required cities
5. Add visual indicators in itinerary

---

## 📍 Example Usage

**Client selects**:
- ☑ Angkor Wat
- ☑ Ha Long Bay Cruise
- ☑ Hoi An Ancient Town
- ☑ Cu Chi Tunnels
- Custom: "Mai Chau valley"

**System generates**:
- Route includes: Siem Reap, Ha Long Bay, Hoi An, Ho Chi Minh City, Mai Chau
- Ensures adequate days in each city
- Adds logical intermediate cities
- Highlights requested places in itinerary

---

## ❓ Questions for You

1. **Which UI option do you prefer?** (I recommend Option 1)
2. **Should this be mandatory or optional?** (I suggest optional)
3. **How many places should clients be able to select?** (Unlimited?)
4. **Should we show a warning if selected places don't fit the number of days?** (Yes, suggest minimum days)

---

Would you like me to proceed with **Option 1** (Checkboxes + Custom Text), or do you prefer a different approach?


