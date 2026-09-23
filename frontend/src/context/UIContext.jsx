import React, { createContext, useContext, useState, useCallback } from "react";

// Shared UI state for the lead-form modal and the video lightbox,
// so any component (hero button, package CTA, sticky bar, final CTA)
// can open them without prop drilling.

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [isFormOpen, setFormOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { video, poster } | null

  const openForm = useCallback(() => setFormOpen(true), []);
  const closeForm = useCallback(() => setFormOpen(false), []);

  const openLightbox = useCallback((reel) => setLightbox(reel), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const value = {
    isFormOpen,
    openForm,
    closeForm,
    lightbox,
    openLightbox,
    closeLightbox,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within a UIProvider");
  return ctx;
}
