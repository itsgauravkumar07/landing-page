import React from "react";
import { hero } from "../data/content.js";
import { useUI } from "../context/UIContext.jsx";

export default function Hero() {
  const { openForm } = useUI();

  return (
    <header className="hero grain">
      <div className="hero__bg">
        <img src={hero.bgImage} alt="Maldives resort at dusk" />
      </div>
      <div className="wrap hero__inner">
        <h1>
          {hero.heading[0]}
          <br />
          {hero.heading[1]}
        </h1>
        <div className="price">
          <span className="price__rule"></span>
          <span className="price__label">{hero.priceLabel}</span>
          <strong className="price__value">{hero.priceValue}</strong>
          <span className="price__unit">{hero.priceUnit}</span>
        </div>

        <button type="button" className="btn btn--hero" onClick={openForm}>
          {hero.ctaLabel}
        </button>
      </div>
    </header>
  );
}
