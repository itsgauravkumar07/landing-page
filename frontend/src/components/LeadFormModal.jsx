import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUI } from "../context/UIContext.jsx";
import { submitLead } from "../api/leads.js";
import { travelMonthOptions } from "../data/content.js";

const initialValues = { name: "", phone: "", email: "", travelMonth: "" };
const initialFieldErrors = { name: "", phone: "", email: "", travelMonth: "" };

const NAME_RE = /^[A-Za-z][A-Za-z\s.'-]{1,49}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Indian mobile number: optional +91 / 91 / 0 prefix, then a 10-digit
// number starting 6-9. Adjust if you need to accept other countries.
const PHONE_RE = /^(?:\+91[-\s]?|91[-\s]?|0)?[6-9]\d{9}$/;

function validateField(name, value) {
  switch (name) {
    case "name":
      if (!value.trim()) return "Please enter your name.";
      if (!NAME_RE.test(value.trim())) {
        return "Name should be at least 2 letters, with no numbers or symbols.";
      }
      return "";
    case "phone":
      if (!value.trim()) return "Please enter your phone number.";
      if (!PHONE_RE.test(value.trim().replace(/\s+/g, ""))) {
        return "Enter a valid 10-digit mobile number (e.g. +91 98765 43210).";
      }
      return "";
    case "email":
      if (!value.trim()) return "Please enter your email.";
      if (!EMAIL_RE.test(value.trim())) return "Enter a valid email address.";
      return "";
    case "travelMonth":
      if (!value) return "Please select a month.";
      return "";
    default:
      return "";
  }
}

function validateAll(values) {
  return {
    name: validateField("name", values.name),
    phone: validateField("phone", values.phone),
    email: validateField("email", values.email),
    travelMonth: validateField("travelMonth", values.travelMonth),
  };
}

export default function LeadFormModal() {
  const { isFormOpen, closeForm } = useUI();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const [fieldErrors, setFieldErrors] = useState(initialFieldErrors);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nameInputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => nameInputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
    document.body.style.overflow = "";
  }, [isFormOpen]);

  // Reset back to a blank form a moment after closing, so the next
  // visitor who opens it sees empty fields.
  function handleClose() {
    closeForm();
    setTimeout(() => {
      setValues(initialValues);
      setFieldErrors(initialFieldErrors);
      setError("");
    }, 200);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // Re-validate this field as the user fixes it, so the message
    // clears as soon as the input is valid instead of only on submit.
    setFieldErrors((fe) => ({ ...fe, [name]: validateField(name, value) }));
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setFieldErrors((fe) => ({ ...fe, [name]: validateField(name, value) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const errors = validateAll(values);
    setFieldErrors(errors);
    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) {
      setError("Please fix the highlighted fields.");
      return;
    }

    setLoading(true);
    try {
      await submitLead(values);
      // Success — close the modal, reset it for next time, and send the
      // visitor to the dedicated Thank You page.
      document.body.style.overflow = "";
      closeForm();
      setValues(initialValues);
      setFieldErrors(initialFieldErrors);
      navigate("/thank-you");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key !== "Tab" || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll("button, input, select");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape" && isFormOpen) handleClose();
    }
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormOpen]);

  return (
    <div
      className={`modal${isFormOpen ? " open" : ""}`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      ref={modalRef}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="leadTitle"
    >
      <div className="modal__card">
        <button className="modal__close" aria-label="Close" onClick={handleClose}>
          &times;
        </button>

        <form onSubmit={handleSubmit} noValidate>
            <h2 id="leadTitle">Get Maldives Options</h2>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!fieldErrors.name}
                ref={nameInputRef}
              />
              {fieldErrors.name && <p className="field-error">{fieldErrors.name}</p>}
            </div>
            <div className="field">
              <label htmlFor="phone">Phone / WhatsApp</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 00000 00000"
                required
                autoComplete="tel"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!fieldErrors.phone}
              />
              {fieldErrors.phone && <p className="field-error">{fieldErrors.phone}</p>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                required
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!fieldErrors.email}
              />
              {fieldErrors.email && <p className="field-error">{fieldErrors.email}</p>}
            </div>
            <div className="field">
              <label htmlFor="travelMonth">When are you planning to visit?</label>
              <select
                id="travelMonth"
                name="travelMonth"
                required
                value={values.travelMonth}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!fieldErrors.travelMonth}
              >
                <option value="" disabled>
                  Select a month
                </option>
                {travelMonthOptions.map((month) => (
                  <option value={month} key={month}>
                    {month}
                  </option>
                ))}
              </select>
              {fieldErrors.travelMonth && <p className="field-error">{fieldErrors.travelMonth}</p>}
            </div>

            {error && <p className="form-error">{error}</p>}

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Get My Maldives Options"}
            </button>
        </form>
      </div>
    </div>
  );
}



// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUI } from "../context/UIContext.jsx";
// import { submitLead } from "../api/leads.js";
// import { travelMonthOptions } from "../data/content.js";

// const initialValues = { name: "", phone: "", email: "", travelMonth: "" };

// export default function LeadFormModal() {
//   const { isFormOpen, closeForm } = useUI();
//   const navigate = useNavigate();
//   const [values, setValues] = useState(initialValues);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const nameInputRef = useRef(null);
//   const modalRef = useRef(null);

//   useEffect(() => {
//     if (isFormOpen) {
//       document.body.style.overflow = "hidden";
//       const t = setTimeout(() => nameInputRef.current?.focus(), 60);
//       return () => clearTimeout(t);
//     }
//     document.body.style.overflow = "";
//   }, [isFormOpen]);

//   // Reset back to a blank form a moment after closing, so the next
//   // visitor who opens it sees empty fields.
//   function handleClose() {
//     closeForm();
//     setTimeout(() => {
//       setValues(initialValues);
//       setError("");
//     }, 200);
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setValues((v) => ({ ...v, [name]: value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError("");

//     if (!values.name || !values.phone || !values.email || !values.travelMonth) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await submitLead(values);
//       // Success — close the modal, reset it for next time, and send the
//       // visitor to the dedicated Thank You page.
//       document.body.style.overflow = "";
//       closeForm();
//       setValues(initialValues);
//       navigate("/thank-you");
//     } catch (err) {
//       setError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   function handleKeyDown(e) {
//     if (e.key !== "Tab" || !modalRef.current) return;
//     const focusable = modalRef.current.querySelectorAll("button, input, select");
//     const first = focusable[0];
//     const last = focusable[focusable.length - 1];
//     if (e.shiftKey && document.activeElement === first) {
//       e.preventDefault();
//       last.focus();
//     } else if (!e.shiftKey && document.activeElement === last) {
//       e.preventDefault();
//       first.focus();
//     }
//   }

//   useEffect(() => {
//     function onEsc(e) {
//       if (e.key === "Escape" && isFormOpen) handleClose();
//     }
//     document.addEventListener("keydown", onEsc);
//     return () => document.removeEventListener("keydown", onEsc);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isFormOpen]);

//   return (
//     <div
//       className={`modal${isFormOpen ? " open" : ""}`}
//       onClick={(e) => e.target === e.currentTarget && handleClose()}
//       ref={modalRef}
//       onKeyDown={handleKeyDown}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="leadTitle"
//     >
//       <div className="modal__card">
//         <button className="modal__close" aria-label="Close" onClick={handleClose}>
//           &times;
//         </button>

//         <form onSubmit={handleSubmit} noValidate>
//             <h2 id="leadTitle">Get Maldives Options</h2>

//             <div className="field">
//               <label htmlFor="name">Name</label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Your full name"
//                 required
//                 autoComplete="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 ref={nameInputRef}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="phone">Phone / WhatsApp</label>
//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 placeholder="+91 00000 00000"
//                 required
//                 autoComplete="tel"
//                 value={values.phone}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="you@email.com"
//                 required
//                 autoComplete="email"
//                 value={values.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="travelMonth">When are you planning to visit?</label>
//               <select
//                 id="travelMonth"
//                 name="travelMonth"
//                 required
//                 value={values.travelMonth}
//                 onChange={handleChange}
//               >
//                 <option value="" disabled>
//                   Select a month
//                 </option>
//                 {travelMonthOptions.map((month) => (
//                   <option value={month} key={month}>
//                     {month}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {error && <p className="form-error">{error}</p>}

//             <button className="btn" type="submit" disabled={loading}>
//               {loading ? "Sending..." : "Get My Maldives Options"}
//             </button>
//         </form>
//       </div>
//     </div>
//   );
// }
