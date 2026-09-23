import React from "react";
import { useUI } from "../context/UIContext.jsx";

// Fixed bottom bar shown only on small screens (see .sticky-cta in global.css).
export default function StickyCTA() {
  const { openForm } = useUI();

  return (
    <div className="sticky-cta">
      <button type="button" className="btn" onClick={openForm}>
        Get My Maldives Options
      </button>
    </div>
  );
}
