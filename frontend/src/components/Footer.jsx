import React from "react";
import { footer } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div>&copy; {new Date().getFullYear()} {footer.brand}</div>
        <div style={{ marginTop: "8px", display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:+919873391733" style={{ textDecoration: "none" }}>+91 9873391733</a>
          <span>•</span>
          <a href="mailto:dikshant@paradiseyatra.com" style={{ textDecoration: "none" }}>dikshant@paradiseyatra.com</a>
        </div>
      </div>
    </footer>
  );
}