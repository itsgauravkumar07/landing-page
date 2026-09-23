import React from "react";
import { experience } from "../data/content.js";

function tileClass(size) {
  if (size === "lg") return "tile tile--lg";
  if (size === "w") return "tile tile--w";
  return "tile";
}

export default function Experience() {
  return (
    <section className="experience grain grain--light">
      <div className="wrap">
        <div className="sec-head center">
          <h2>{experience.heading}</h2>
          <p>{experience.subheading}</p>
        </div>

        <div className="grid">
          {experience.tiles.map((tile) => (
            <figure className={tileClass(tile.size)} key={tile.caption}>
              <img src={tile.img} alt={tile.caption} />
              <figcaption>{tile.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
