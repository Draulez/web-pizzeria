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
    >
      <p>Utilizamos cookies para mejorar la experiencia y analizar el tráfico.</p>
      <button className="ml-4">
        <Link href="/politicas_privacidad" className="underline">
          Leer más
        </Link>
      </button>
    </CookieConsent>
  );
}
