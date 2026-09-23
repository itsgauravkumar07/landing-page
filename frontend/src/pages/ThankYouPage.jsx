import React, { useEffect } from "react";
import "../styles/thankyou.css";

// Post-submit Thank You page, ported 1:1 from the supplied thankyou.html
// design (same Paradise Yatra navy/teal brand as the rest of the site).
// Shown at /thank-you after a visitor successfully submits the
// "Get Maldives Options" lead form.
export default function ThankYouPage() {
  useEffect(() => {
    document.title = "Thank You - Paradise Yatra";
  }, []);

  return (
    <main className="ty-page">
      {/* Background shapes */}
      <div className="ty-yellow-shape"></div>
      <div className="ty-green-shape"></div>

      {/* Main content */}
      <section className="ty-content">
        {/* Check */}
        <div className="ty-check-circle">
          <i className="fa-solid fa-check"></i>
        </div>

        {/* Heading */}
        <h1>Thank you!</h1>

        {/* Description */}
        <p className="ty-description">
          We will get back to you shortly. If you have any questions, please
          feel free to contact us.
        </p>

        {/* Action card */}
        <div className="ty-action-card">
          {/* Social section */}
          <div className="ty-action-column">
            <div className="ty-action-title">Connect With Us</div>

            <div className="ty-social-icons">
              <a href="https://www.facebook.com/paradiseyatra/" className="ty-facebook" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="https://www.instagram.com/paradiseyatra/" className="ty-instagram" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="https://www.youtube.com/@ParadiseYatra" className="ty-youtube" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="https://x.com/ParadiseYatra" className="ty-twitter" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a href="https://www.linkedin.com/company/paradise-yatra" className="ty-linkedin" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="ty-divider"></div>

          {/* Website section */}
          <div className="ty-action-column">
            <div className="ty-action-title">Visit Our Website</div>

            <a
              href="https://paradiseyatra.com"
              className="ty-website-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
