import React, { useState } from "react";
import { company } from "../data/content.js";

// Fixed header, top-left: small round icon + stacked brand text
// ("Paradise Yatra" / "Yatra To Paradise"). Sits above the hero image.
export default function Header() {
  const [iconFailed, setIconFailed] = useState(false);

  return (
    <div className="site-header">
      <div className="wrap site-header__inner">
        <a href="https://paradiseyatra.com/" className="site-header__logo" aria-label={company.name}>
          {!iconFailed && (
            <img
              src={company.icon}
              alt=""
              className="site-header__icon"
              onError={() => setIconFailed(true)}
            />
          )}
          <span className="site-header__text">
            <strong>{company.name}</strong>
          </span>
        </a>
      </div>
    </div>
  );
}