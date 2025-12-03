import { BRIEF_ITINERARIES } from "@/lib/briefItineraries";

export function getBriefByDays(days: number) {
  return BRIEF_ITINERARIES.find((it) => it.days === days);
}

