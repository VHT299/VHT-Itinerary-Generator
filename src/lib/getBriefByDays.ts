/// file: src/lib/getBriefByDays.ts

import { BRIEF_ITINERARIES } from "@/lib/briefItineraries";

// Normalise anything (8, "8", "8 days", "8D") → 8
function normalizeDays(value: unknown): number | null {
  if (value == null) return null;

  if (typeof value === "number" && Number.isFinite(value)) return value;

  const digits = String(value).match(/\d+/);
  if (!digits) return null;

  const num = parseInt(digits[0], 10);
  return Number.isFinite(num) ? num : null;
}

// Build a dictionary: { 4: {...}, 6: {...}, 8: {...}, ... }
const BRIEF_BY_DAYS: Record<number, (typeof BRIEF_ITINERARIES)[number]> = {};

for (const it of BRIEF_ITINERARIES) {
  const num = normalizeDays((it as any).days);
  if (num != null) {
    BRIEF_BY_DAYS[num] = it;
  }
}

/**
 * Get a brief itinerary by "days".
 * Works with 8, "8", "8 days", etc.
 */
export function getBriefByDays(rawDays: unknown) {
  const num = normalizeDays(rawDays);
  if (num == null) return undefined;
  return BRIEF_BY_DAYS[num];
}
