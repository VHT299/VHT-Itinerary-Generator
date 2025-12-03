/// file: src/components/BriefItinerarySelector.tsx

"use client";

import React, { useState } from "react";
import { BriefItineraryPanel } from "@/components/BriefItineraryPanel";

export function BriefItinerarySelector() {
  const [briefDays, setBriefDays] = useState<string>("");

  return (
    <div className="space-y-3">
      <select
        className="rounded-md border px-2 py-1 text-sm"
        value={briefDays}
        onChange={(e) => setBriefDays(e.target.value)}
      >
        <option value="">Select…</option>
        <option value="4">4 days</option>
        <option value="6">6 days</option>
        <option value="8">8 days</option>
        <option value="10">10 days</option>
        <option value="12">12 days</option>
        <option value="14">14 days</option>
        <option value="16">16 days</option>
        <option value="18">18 days</option>
        <option value="20">20 days</option>
        <option value="21">21 days</option>
        <option value="22">22 days</option>
        <option value="24">24 days</option>
        <option value="26">26 days</option>
        <option value="28">28 days</option>
        <option value="30">30 days</option>
      </select>

      {briefDays && <BriefItineraryPanel briefDays={briefDays} />}
    </div>
  );
}
