import React from "react";
import { useUI } from "../context/UIContext.jsx";

export default function VideoLightbox() {
  const { lightbox, closeLightbox } = useUI();
  const open = Boolean(lightbox);

  return (
    <div
      className={`lb${open ? " open" : ""}`}
      onClick={(e) => e.target === e.currentTarget && closeLightbox()}
    >
      <div className="lb__box">
        <button className="lb__close" aria-label="Close" onClick={closeLightbox}>
          &times;
        </button>

        {open && lightbox.video ? (
          <video src={lightbox.video} controls playsInline autoPlay />
        ) : open ? (
          <>
            <img src={lightbox.poster} alt="" />
            <div className="lb__msg">
              Customer video goes here.
              <br />
              Add its URL to the reel's <code>video</code> field in content.js.
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
