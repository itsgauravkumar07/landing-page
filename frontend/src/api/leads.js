// Thin wrapper around the backend lead-capture endpoint.
// In dev, Vite proxies /api -> http://localhost:5000 (see vite.config.js).
// In production, set VITE_API_URL to your deployed backend URL.

const API_BASE = import.meta.env.VITE_API_URL || "/api";

export async function submitLead({ name, phone, email, travelMonth }) {
  const res = await fetch(`${API_BASE}/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, email, travelMonth }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
}
