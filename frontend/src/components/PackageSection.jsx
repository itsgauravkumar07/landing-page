import React from "react";
import { packageSection } from "../data/content.js";
import { ICONS_BY_KEY } from "./icons.jsx";
import { useUI } from "../context/UIContext.jsx";

export default function PackageSection() {
  const { openForm } = useUI();

  return (
    <section className="package">
      <div className="wrap">
        <div className="sec-head">
          <h2>{packageSection.heading}</h2>
        </div>

        <div className="pkg grain grain--light">
          <div className="pkg__media">
            <img src={packageSection.media} alt="Jetty leading to Maldives water villas" />
            <div className="pkg__price">
              <span>{packageSection.priceLabel}</span>
              <strong>{packageSection.priceValue}</strong>
              <em>{packageSection.priceUnit}</em>
            </div>
          </div>

          <div className="pkg__body">
            <h3>{packageSection.title}</h3>
            <p className="pkg__for">{packageSection.forText}</p>
            <ul className="incl">
              {packageSection.inclusions.map((item) => {
                const Icon = ICONS_BY_KEY[item.icon];
                return (
                  <li key={item.title}>
                    <span className="incl__icon">
                      <Icon />
                    </span>
                    <span>
                      <b>{item.title}</b>
                      <small>{item.desc}</small>
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="pkg__note">{packageSection.note}</p>
            <button type="button" className="btn" onClick={openForm}>
              Get My Maldives Options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
