import React, { useEffect, useState } from "react";
import "../styles/loading-screen.css";

export default function LoadingScreen({
  children,
  minDuration = 1200,
}) {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(removeTimer);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  return (
    <>
      {loading && (
        <div
          className={`loading-screen ${
            !visible ? "loading-screen--hide" : ""
          }`}
        >
          <div className="loading-screen__content">
            <div className="loading-screen__logo">
              <img src="/favicon.png" alt="Paradise Yatra" />
            </div>

            <h1 className="loading-screen__brand">
              Paradise Yatra
            </h1>

            <p className="loading-screen__tagline">
              Your Maldives Escape Starts Here
            </p>

            <div className="loading-screen__loader">
              <span />
            </div>

            <p className="loading-screen__text">
              Preparing your journey
            </p>
          </div>
        </div>
      )}

      {children}
    </>
  );
}