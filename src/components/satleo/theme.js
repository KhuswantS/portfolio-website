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

// Company marks. If an official logo file sits in src/assets/logos/ (named by
// `slug`, .svg or .png), it is used; otherwise an initials badge is shown.
export const COMPANIES = {
  SatVu: { slug: "satvu", logoH: 15, initials: "SV", color: "#3fbfb0" },
  constellr: { slug: "constellr", logoH: 24, initials: "C", color: "#c96fa6" },
  OroraTech: { slug: "ororatech", logoH: 18, initials: "OT", color: "#6e9bee" },
  Hydrosat: { slug: "hydrosat", logoH: 23, initials: "H", color: "#58b26d" },
  "Aistech Space": { slug: "aistech-space", initials: "AS", color: "#9a7fe0" },
  SatLeo: { slug: "satleo", logoH: 18, initials: "SL", color: "#f2c14e" },
};
