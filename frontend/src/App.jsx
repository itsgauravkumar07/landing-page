import React from "react";
import { Routes, Route } from "react-router-dom";
import { UIProvider } from "./context/UIContext.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import LoadingScreen from "./pages/LoadingScreen.jsx";

export default function App() {
  return (
    <UIProvider>
      <LoadingScreen minDuration={2500}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </LoadingScreen>
    </UIProvider>
  );
}
