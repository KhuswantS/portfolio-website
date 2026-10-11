// Shared colours for the SatLeo report graphics. Amber marks SatLeo (a
// "heat" colour for a thermal company); rivals and other holders use the
// site's blues and muted tones so SatLeo is always the one that stands out.
export const C = {
  satleo: "#f2c14e",
  satleoSoft: "#f2c14e33",
  blue: "#6e9bee",
  blueDark: "#315599",
  teal: "#3fbfb0",
  pink: "#c96fa6",
  muted: "#5b6573",
  grid: "#24272c",
  text: "#f6f7f9",
  textSoft: "#f6f7f9b3",
  negative: "#e0705c",
};

// Company marks: our own initial badges, not the companies' trademark logos.
// To use an official logo instead, drop the file in /public/logos/ and set
// `logo` here (e.g. logo: "/logos/satvu.svg").
export const COMPANIES = {
  SatVu: { initials: "SV", color: "#3fbfb0" },
  constellr: { initials: "c", color: "#c96fa6" },
  OroraTech: { initials: "OT", color: "#6e9bee" },
  Hydrosat: { initials: "H", color: "#58b26d" },
  "Aistech Space": { initials: "AS", color: "#9a7fe0" },
  SatLeo: { initials: "SL", color: "#f2c14e" },
};
