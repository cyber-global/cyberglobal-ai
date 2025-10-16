"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function Providers() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check for existing consent
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      setHasConsent(true);
    }

    // Listen for consent grant event
    const handleConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (consent === "accepted") {
        setHasConsent(true);
      }
    };

    window.addEventListener("consent-granted", handleConsent);
    return () => window.removeEventListener("consent-granted", handleConsent);
  }, []);

  // Only render analytics if consent given
  if (!hasConsent) {
    return null;
  }

  return (
    <>
      <Analytics 
        beforeSend={(event) => {
          // Filter out sensitive paths
          const url = event.url || "";
          if (url.includes("/api/") || url.includes("token") || url.includes("key")) {
            return null;
          }
          return event;
        }} 
      />
      <SpeedInsights />
    </>
  );
}

