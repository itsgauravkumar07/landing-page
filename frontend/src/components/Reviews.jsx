import React from "react";
import { reviews } from "../data/content.js";
import { PlayIcon } from "./icons.jsx";
import { useUI } from "../context/UIContext.jsx";

export default function Reviews() {
  const { openLightbox } = useUI();

  return (
    <section className="reviews grain grain--light">
      <div className="wrap">
        <div className="sec-head center">
          <h2>{reviews.heading}</h2>
        </div>

        {/* Customer video reels */}
        <div className="reels">
          {reviews.reels.map((reel, i) => (
            <button
              className="reel"
              key={i}
              onClick={() => openLightbox(reel)}
              type="button"
            >
              <img src={reel.poster} alt="Testimonials" />
              <span className="reel__play">
                <PlayIcon />
              </span>
              <span className="reel__label">Testimonials</span>
            </button>
          ))}
        </div>

        {/* Traveler photos */}
        <div className="photos">
          {reviews.photos.map((src, i) => (
            <figure key={i}>
              <img src={src} alt="Traveler photo" />
            </figure>
          ))}
        </div>

        {/* Written reviews */}
        <div className="quotes">
          {reviews.quotes.map((q, i) => (
            <article className="quote" key={i}>
              <div className="stars">★★★★★</div>
              <p>&ldquo;{q.text}&rdquo;</p>
              <footer>
                <img className="avatar" src={q.avatar} alt="" />
                <span>
                  <cite>{q.name}</cite>
                  <small>{q.trip}</small>
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
