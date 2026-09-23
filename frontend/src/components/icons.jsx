import React from "react";

// Small inline SVG icons used by the package inclusions list.
const common = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function StayIcon() {
  return (
    <svg {...common}>
      <path d="M2 18h20M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
      <path d="M7 10V7.5A1.5 1.5 0 0 1 8.5 6h7A1.5 1.5 0 0 1 17 7.5V10" />
      <path d="M4 18v2M20 18v2" />
    </svg>
  );
}

export function MealsIcon() {
  return (
    <svg {...common}>
      <path d="M5 3v7a2.5 2.5 0 0 0 5 0V3" />
      <path d="M7.5 10v11" />
      <path d="M17.5 3c-1.6 1.7-2.5 3.9-2.5 6.2 0 1.8.9 2.8 2.5 2.8s2.5-1 2.5-2.8c0-2.3-.9-4.5-2.5-6.2z" />
      <path d="M17.5 12v9" />
    </svg>
  );
}

export function TransfersIcon() {
  return (
    <svg {...common}>
      <path d="M17.8 19.9 16 11.6l3.6-3.6a2.1 2.1 0 1 0-3-3L13 8.6 4.7 6.8a.8.8 0 0 0-.8 1.3l4.3 3.2-2.5 2.5-2.1-.4a.6.6 0 0 0-.5 1l1.9 2.3 2.3 1.9a.6.6 0 0 0 1-.5l-.4-2.1 2.5-2.5 3.2 4.3a.8.8 0 0 0 1.3-.8z" />
    </svg>
  );
}

export function WaterIcon() {
  return (
    <svg {...common}>
      <path d="M2 7c2.2 0 2.2-2 4.5-2S8.7 7 11 7s2.2-2 4.5-2S17.7 7 20 7" />
      <path d="M2 12.5c2.2 0 2.2-2 4.5-2s2.2 2 4.5 2 2.2-2 4.5-2 2.2 2 4.5 2" />
      <path d="M2 18c2.2 0 2.2-2 4.5-2s2.2 2 4.5 2 2.2-2 4.5-2 2.2 2 4.5 2" />
    </svg>
  );
}

export function BreakfastIcon() {
  return (
    <svg {...common}>
      <path d="M4 9h13v5.5a4.5 4.5 0 0 1-4.5 4.5h-4A4.5 4.5 0 0 1 4 14.5V9z" />
      <path d="M17 10.5h1.2a2.5 2.5 0 0 1 0 5H17" />
      <path d="M7.5 3v2.5M11 3v2.5M14.5 3v2.5" />
    </svg>
  );
}

export function TaxesIcon() {
  return (
    <svg {...common}>
      <path d="M12 2.5 4.5 5.3V11c0 4.8 3.2 8.9 7.5 10.4 4.3-1.5 7.5-5.6 7.5-10.4V5.3L12 2.5z" />
      <path d="m9 11.8 2.1 2.1 4-4" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function PhoneCallIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.06L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2zm0 18.2a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.02.79.8-2.94-.2-.3A8.2 8.2 0 1 1 20.2 12a8.19 8.19 0 0 1-8.18 8.2z" />
    </svg>
  );
}

export const ICONS_BY_KEY = {
  stay: StayIcon,
  meals: MealsIcon,
  transfers: TransfersIcon,
  water: WaterIcon,
  breakfast: BreakfastIcon,
  taxes: TaxesIcon,
};
