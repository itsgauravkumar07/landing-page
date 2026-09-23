import React from "react";
import { Routes, Route } from "react-router-dom";
import { UIProvider } from "./context/UIContext.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";

export default function App() {
  return (
    <UIProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </UIProvider>
  );
}
