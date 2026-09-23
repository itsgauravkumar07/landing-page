import React, { useEffect } from "react";
import "../styles/thankyou.css";
import { company } from "../data/content.js";

export default function ThankYouPage() {
  useEffect(() => {
    document.title = "Thank You - Paradise Yatra";

    if (window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

   const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
      company.whatsappDefaultMessage
    )}`;

 
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
            <div className="ty-action-title">
              Connect With Us
            </div>

            <div className="ty-social-icons">
              <a
                href="https://www.facebook.com/paradiseyatra/"
                className="ty-facebook"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com/paradiseyatra/"
                className="ty-instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.youtube.com/@ParadiseYatra"
                className="ty-youtube"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a
                href="https://x.com/ParadiseYatra"
                className="ty-twitter"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/paradise-yatra"
                className="ty-linkedin"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="ty-divider"></div>

          {/* Contact section */}
          <div className="ty-action-column ty-contact-column">
            <div className="ty-action-title">
              Need Help?
            </div>

            <div className="ty-contact-buttons">

              {/* WhatsApp */}
            
              <a
                href={whatsappHref}
                className="ty-contact-button ty-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>

                <span>
                  Chat on WhatsApp
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${company.phoneNumber}`}
                className="ty-contact-button ty-phone"
              >
                <i className="fa-solid fa-phone"></i>

                <span>
                  {company.phoneNumber}
                </span>
              </a>

            </div>
          </div>

          {/* Divider */}
          <div className="ty-divider"></div>

          {/* Website section */}
          <div className="ty-action-column">
            <div className="ty-action-title">
              Visit Our Website
            </div>

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