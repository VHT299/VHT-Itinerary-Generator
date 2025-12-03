// src/lib/briefItineraries.ts

export type BriefItinerary = {
  days: number;
  title: string;
  subtitle: string;
  start: string;
  end: string;
  styleTags: string[];
  brief: string[]; // lines shown to the user
};

// Helper: normalise 8 / "8" / "8 days" → 8
function normalizeDays(value: unknown): number | null {
  if (value == null) return null;
  if (typeof value === "number" && Number.isFinite(value)) return value;

  const digits = String(value).match(/\d+/);
  if (!digits) return null;
  const num = parseInt(digits[0], 10);
  return Number.isFinite(num) ? num : null;
}

export const BRIEF_ITINERARIES: BriefItinerary[] = [
  {
    days: 4,
    title: "Vietnam in 4 Days – Saigon & Mekong Snapshot",
    subtitle: "Short, intense taste of Southern Vietnam",
    start: "Ho Chi Minh City",
    end: "Ho Chi Minh City",
    styleTags: ["Highlights", "Short break"],
    brief: [
      "Day 1 – Ho Chi Minh City: Arrival, orientation walk and rooftop sunset.",
      "Day 2 – Saigon City Highlights: Independence Palace, Notre Dame, Post Office, War Remnants Museum, Ben Thanh Market.",
      "Day 3 – Mekong Delta Day Trip: My Tho, boat ride, canals, local houses, honey tea and fruits.",
      "Day 4 – Free time & departure from Ho Chi Minh City."
    ]
  },

  {
    days: 6,
    title: "Vietnam in 6 Days – Saigon, Mekong & Central Coast",
    subtitle: "From busy Saigon to charming Hoi An",
    start: "Ho Chi Minh City",
    end: "Da Nang / Hoi An",
    styleTags: ["Highlights", "Soft adventure"],
    brief: [
      "Day 1 – Ho Chi Minh City: Arrival and evening in the city center.",
      "Day 2 – Saigon City Tour: Main landmarks + local street food experience.",
      "Day 3 – Mekong Delta: Boat trip, canals, local crafts and village life.",
      "Day 4 – Fly to Da Nang, transfer to Hoi An, evening lanterns in Ancient Town.",
      "Day 5 – Hoi An Old Town & countryside: Walking tour + basket boat or Tra Que village.",
      "Day 6 – Free time in Hoi An (beach/old town) and onward departure."
    ]
  },

  {
    days: 8,
    title: "Vietnam in 8 Days – Classic Highlights South to Central",
    subtitle: "Saigon, Mekong Delta, Da Nang & Hoi An",
    start: "Ho Chi Minh City",
    end: "Da Nang / Hoi An",
    styleTags: ["Classic", "Family", "First-time"],
    brief: [
      "Day 1 – Ho Chi Minh City: Arrival, easy evening in District 1.",
      "Day 2 – Saigon City Highlights: Independence Palace, Cathedral, Post Office, War Museum, Ben Thanh.",
      "Day 3 – Cu Chi Tunnels: Half-day visit to the underground network + free afternoon.",
      "Day 4 – Mekong Delta: Boat trip, floating/local markets, canals and village lunch.",
      "Day 5 – Fly to Da Nang, transfer to Hoi An, lantern-lit evening by the river.",
      "Day 6 – Hoi An Old Town: Walking tour, Japanese Bridge, assembly halls, local crafts.",
      "Day 7 – Countryside Experience: Tra Que village & coconut basket boats OR beach day.",
      "Day 8 – Free time in Hoi An and departure from Da Nang."
    ]
  },

  {
    days: 10,
    title: "Vietnam in 10 Days – South, Central & a Taste of the North",
    subtitle: "Saigon, Mekong, Hoi An and Hanoi snapshot",
    start: "Ho Chi Minh City",
    end: "Hanoi",
    styleTags: ["Highlights", "Balanced pace"],
    brief: [
      "Day 1–2 – Ho Chi Minh City: Arrival + full city tour and Cu Chi Tunnels.",
      "Day 3 – Mekong Delta: Day trip with boat, canals, local farms and lunch.",
      "Day 4 – Fly to Da Nang, transfer to Hoi An, evening in Ancient Town.",
      "Day 5 – Hoi An: Walking tour + Tra Que & coconut palm forest.",
      "Day 6 – Ba Na Hills: Golden Bridge, cable car, French Village.",
      "Day 7 – Fly Da Nang → Hanoi, Old Quarter orientation.",
      "Day 8 – Hanoi City Tour: Ho Chi Minh complex, Temple of Literature, Old Quarter.",
      "Day 9 – Ninh Binh day trip: Hoa Lu, Trang An or Tam Coc, viewpoints.",
      "Day 10 – Free time in Hanoi and departure."
    ]
  },

  {
    days: 12,
    title: "Vietnam in 12 Days – Highlights with Ha Long Bay",
    subtitle: "Saigon, Mekong, Hoi An, Hanoi & Ha Long",
    start: "Ho Chi Minh City",
    end: "Hanoi",
    styleTags: ["Classic", "Cruise"],
    brief: [
      "Days 1–3 – Ho Chi Minh City & Cu Chi: Arrival, full city tour, half-day Cu Chi Tunnels.",
      "Day 4 – Mekong Delta: My Tho/Ben Tre boat trip, village visit and local lunch.",
      "Day 5 – Fly to Da Nang, transfer to Hoi An, sunset in Ancient Town.",
      "Day 6 – Hoi An countryside: Tra Que & coconut basket boats.",
      "Day 7 – Ba Na Hills: Golden Bridge, cable car, Fantasy Park.",
      "Day 8 – Fly Da Nang → Hanoi, evening Old Quarter.",
      "Day 9 – Hanoi City Highlights: Ho Chi Minh complex, Temple of Literature, Old Quarter.",
      "Day 10 – Hanoi → Ha Long / Bai Tu Long: Board overnight cruise, kayaking & caves.",
      "Day 11 – Morning on the bay, brunch on cruise, return to Hanoi.",
      "Day 12 – Free time in Hanoi and departure."
    ]
  },

  {
    days: 14,
    title: "Vietnam Immersion – 14 Days",
    subtitle: "Based on your 14D/13N 'Vietnam Immersion' program",
    start: "Hanoi",
    end: "Ho Chi Minh City",
    styleTags: ["Classic", "Family", "Luxury option"],
    brief: [
      "Days 1–2 – Hanoi: City highlights – Ho Chi Minh complex, Temple of Literature, Old Quarter.",
      "Day 3 – Ninh Binh: Trang An boat trip + Hoa Lu ancient capital.",
      "Days 4–5 – Ha Long / Bai Tu Long: 2-day cruise with caves, kayaking and sunset.",
      "Days 6–9 – Da Nang & Hoi An: Ba Na Hills, Hoi An walking tour, Da Nang city tour + free day.",
      "Days 10–11 – Ho Chi Minh City: City highlights & Cu Chi Tunnels.",
      "Days 12–13 – Mekong Delta & Can Tho: My Tho/Ben Tre + Cai Rang floating market.",
      "Day 14 – Free time in Saigon and departure."
    ]
  },

  {
    days: 16,
    title: "Vietnam in 16 Days – Coastline & Culture",
    subtitle: "Adds more free time and coastal relaxation",
    start: "Hanoi",
    end: "Ho Chi Minh City",
    styleTags: ["Relaxed", "Coast & culture"],
    brief: [
      "Days 1–3 – Hanoi & Ninh Binh: City tour + Hoa Lu/Trang An day trip.",
      "Days 4–5 – Ha Long Bay cruise with overnight on board.",
      "Days 6–9 – Da Nang & Hoi An: Ba Na Hills, Hoi An town, Da Nang city tour, free beach day.",
      "Day 10 – Fly to Ho Chi Minh City, evening street life.",
      "Days 11–12 – Saigon city & Cu Chi Tunnels.",
      "Days 13–14 – Mekong Delta & Can Tho: Local life, boat trips, Cai Rang floating market.",
      "Days 15–16 – Extra free day in Saigon for shopping/spa and departure."
    ]
  },

  {
    days: 18,
    title: "Vietnam in 18 Days – Extended North & Central",
    subtitle: "More time in Hanoi, Ninh Binh, Hoi An and Saigon",
    start: "Hanoi",
    end: "Ho Chi Minh City",
    styleTags: ["Extended", "Culture & scenery"],
    brief: [
      "Days 1–3 – Hanoi: City highlights + food and coffee experiences.",
      "Days 4–5 – Ninh Binh: Two days of boat trips, temples and viewpoints.",
      "Days 6–7 – Ha Long / Bai Tu Long: Cruise, caves, kayaking.",
      "Days 8–11 – Da Nang & Hoi An: Ba Na Hills, walking tour, countryside, beach/free time.",
      "Day 12 – Fly to Saigon, evening city lights.",
      "Days 13–14 – Ho Chi Minh City & Cu Chi Tunnels.",
      "Days 15–16 – Mekong Delta: 2-day program with local stays and Can Tho.",
      "Days 17–18 – Free days in Saigon for shopping, massages and departure."
    ]
  },

  {
    days: 20,
    title: "Vietnam in 20 Days – Vietnam & Inland Valleys",
    subtitle: "Adds extra countryside and rural experiences",
    start: "Hanoi",
    end: "Hanoi or Ho Chi Minh City",
    styleTags: ["In-depth", "Countryside"],
    brief: [
      "Core 14-day 'Vietnam Immersion' program (Hanoi → Halong → Da Nang/Hoi An → Saigon → Mekong).",
      "Extra days in Ninh Binh for slower exploration and village walks.",
      "Optional Mai Chau valley overnight for ethnic villages and rice fields.",
      "Additional free day in Hoi An for tailor-made shopping or beach.",
      "Free day in Saigon for personal exploration before departure."
    ]
  },

  {
    days: 22,
    title: "Vietnam Panorama – 22 Days",
    subtitle: "Based on your 22D/21N South–North panorama",
    start: "Ho Chi Minh City",
    end: "Hanoi",
    styleTags: ["Panoramic", "Long trip", "Nature & culture"],
    brief: [
      "Days 1–4 – Saigon, Cu Chi & Mekong Delta (Cai Be, Vinh Long, Cat Tien NP).",
      "Days 5–7 – Da Lat highlands: waterfalls, countryside and cool mountain air.",
      "Days 8–12 – Central Coast: Hoi An, Da Nang, Ba Na Hills and Hue.",
      "Days 13–16 – Hanoi, Ninh Binh & Cuc Phuong National Park.",
      "Days 17–20 – Ha Giang loop: spectacular mountain passes and ethnic villages.",
      "Days 21–22 – Ha Long / Lan Ha Bay cruise and return to Hanoi for departure."
    ]
  },

  {
    days: 24,
    title: "Vietnam in 24 Days – Deep Discovery",
    subtitle: "Adds more slow days on top of the 22-day panorama",
    start: "Ho Chi Minh City",
    end: "Hanoi",
    styleTags: ["Deep dive", "Slow travel"],
    brief: [
      "Follows the 22-day Vietnam Panorama route (Saigon → Dalat → Central → North).",
      "Adds one extra free day in Hoi An for tailors, beach or spa.",
      "Adds one extra free day in Hanoi for cafés, museums and shopping.",
      "Ideal for travellers who prefer more rest days between long transfers."
    ]
  },

  {
    days: 26,
    title: "Vietnam in 26 Days – Mountains, Coast & Countryside",
    subtitle: "Very slow version including mountains and valleys",
    start: "Ho Chi Minh City",
    end: "Hanoi",
    styleTags: ["Very in-depth", "Mountains & valleys"],
    brief: [
      "Core structure: South (Saigon & Mekong), Central (Dalat, Hoi An, Hue) and North (Hanoi, Ninh Binh, Ha Giang, Ha Long).",
      "Extra nights in Dalat and Hue for more relaxed exploration.",
      "Additional village walks and free time in Ha Giang or Ninh Binh.",
      "Designed for travellers who want time to breathe, not just rush."
    ]
  },

  {
    days: 28,
    title: "Vietnam in 28 Days – Almost a Full Month",
    subtitle: "Near full-month program based on your 30-day tour",
    start: "Ho Chi Minh City",
    end: "Hanoi",
    styleTags: ["Long stay", "Full-country"],
    brief: [
      "Follows most of the 30-day 'Vietnam Full Month' route.",
      "Reduces 1–2 free days but keeps all key highlights: Saigon, Mekong, Nha Trang, Dalat, Hoi An, Hue, Hanoi, Ninh Binh, Sapa, Mai Chau and Ha Long.",
      "Balanced mix of excursions and rest days, perfect for a 4-week vacation.",
      "Finishes in Hanoi with time for last shopping and café culture."
    ]
  },

  {
    days: 30,
    title: "Vietnam Full Month – 30 Days",
    subtitle: "Based on your 30D/29N 'Vietnam Full Month' itinerary",
    start: "Ho Chi Minh City",
    end: "Hanoi",
    styleTags: ["Ultimate", "Full month", "Luxury or classic"],
    brief: [
      "Days 1–3 – Ho Chi Minh City & Mekong Delta to Can Tho.",
      "Days 4–7 – Nha Trang: coastal stay, city & mud spa.",
      "Days 8–9 – Dalat: city tour and free day in the Central Highlands.",
      "Days 10–14 – Hoi An & Ba Na Hills: walking tour, countryside, Golden Bridge and free time.",
      "Days 15–17 – Hue & Hanoi: imperial city and capital highlights.",
      "Days 18–24 – Ninh Binh, Sapa & Fansipan: rice terraces, ethnic villages, valleys and mountain views.",
      "Days 25–27 – Mai Chau valley stay with biking, walks and local culture.",
      "Days 28–29 – Ha Long / Bai Tu Long Bay cruise with overnight on board.",
      "Day 30 – Hanoi free time & departure."
    ]
  }
];

// Public API: get itinerary by "days"
export function getBriefByDays(rawDays: number | string | null | undefined) {
  const num = normalizeDays(rawDays);
  if (num == null) return undefined;
  return BRIEF_ITINERARIES.find((it) => it.days === num);
}
