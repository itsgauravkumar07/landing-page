import React from "react";
import { finalCta } from "../data/content.js";
import { useUI } from "../context/UIContext.jsx";

export default function FinalCTA() {
  const { openForm } = useUI();

  return (
    <section className="final grain">
      <div className="hero__bg">
        <img src={finalCta.bgImage} alt="Maldives ocean deck at sunset" />
      </div>
      <div className="wrap final__inner">
        <h2>{finalCta.heading}</h2>
        <p>{finalCta.text}</p>
        <button type="button" className="btn btn--wide" onClick={openForm}>
          {finalCta.ctaLabel}
        </button>
      </div>
    </section>
  );
}
