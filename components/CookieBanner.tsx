"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      enableDeclineButton
      cookieName="cookies-consent"
      style={{ background: "#2B2B2B" }}
      buttonStyle={{
        background: "#C89B3C",
        color: "#fff",
        borderRadius: "9999px",
        padding: "8px 16px",
      }}
      declineButtonStyle={{
        background: "#555",
        color: "#fff",
        borderRadius: "9999px",
        padding: "8px 16px",
      }}
      onAccept={() => {
        localStorage.setItem("cookiesAccepted", "true");
        window.dispatchEvent(new Event("cookiesAccepted"));
      }}
      onDecline={() => {
        localStorage.setItem("cookiesAccepted", "false");
      }}
    >
      <p>
        Utilizamos cookies para mejorar la experiencia y analizar el tráfico.
      </p>
      <Link href="/politicas_privacidad" className="ml-4 underline">
        Leer más
      </Link>
    </CookieConsent>
  );
}
