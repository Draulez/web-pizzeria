"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = "G-EGTTY1TM4P";

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

useEffect(() => {
  const checkConsent = () => {
    if (localStorage.getItem("cookiesAccepted") === "true") {
      setEnabled(true);
    }
  };

  checkConsent();
  window.addEventListener("cookiesAccepted", checkConsent);

  return () => {
    window.removeEventListener("cookiesAccepted", checkConsent);
  };
}, []);


  if (!enabled) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
