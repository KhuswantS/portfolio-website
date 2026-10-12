// Numbers drawn by the two former charts. Kept apart from the graphics so
// the report page can build their tables without loading the graphics code.
export const FUNDING = [
  { name: "SatVu", usd: 122 },
  { name: "constellr", usd: 89.1 },
  // Hydrosat is not in the Tracxn data; its figure is its Series B only
  // ($60M, Jan 2026, plus a $10M extension, Sep 2026), so it is a minimum.
  { name: "Hydrosat", usd: 70, atLeast: true, source: "Series B only (Hydrosat, EU-Startups)" },
  { name: "OroraTech", usd: 63.2 },
  { name: "SatLeo", usd: 5.5 },
];

export const VALUATION = [
  { label: "Dec 2024", m: 0, cr: 38.3 },
  { label: "Feb 2025", m: 2, cr: 48.3 },
  { label: "Apr 2025", m: 4, cr: 80 },
  { label: "Apr 2026", m: 16, cr: 149 },
  { label: "May 2026", m: 17, cr: 150 },
];
