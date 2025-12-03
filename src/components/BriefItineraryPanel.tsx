// src/components/BriefItineraryPanel.tsx

import React from "react";
import { getBriefByDays } from "@/lib/briefItineraries";

type Props = {
  briefDays: number | string | null;
};

export function BriefItineraryPanel({ briefDays }: Props) {
  const brief = getBriefByDays(briefDays);
  const daysLabel = briefDays || "—";

  return (
    <div className="rounded-2xl border p-4 bg-white shadow-sm mt-4">
      <h3 className="text-lg font-semibold mb-2">
        Brief Itinerary – {daysLabel} Days
      </h3>

      {brief ? (
        <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
          {brief.brief.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">
          Brief itinerary not uploaded yet for {daysLabel} days.
        </p>
      )}
    </div>
  );
}
