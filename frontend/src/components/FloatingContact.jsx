import React from "react";
import { company } from "../data/content.js";
import { PhoneCallIcon, WhatsAppIcon } from "./icons.jsx";

// Fixed phone + WhatsApp buttons, bottom-right of the viewport.
export default function FloatingContact() {
  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    company.whatsappDefaultMessage
  )}`;

  return (
    <div className="float-contact">
      <a
        className="float-contact__btn float-contact__btn--whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp: ${company.phoneDisplay}`}
      >
        <WhatsAppIcon />
      </a>
      <a
        className="float-contact__btn float-contact__btn--call"
        href={`tel:${company.phoneNumber}`}
        aria-label={`Call us: ${company.phoneDisplay}`}
      >
        <PhoneCallIcon />
      </a>
    </div>
  );
}
