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
      style={{ background: "#8B1E1E" }}
      buttonStyle={{
        background: "#D8A12B",
        color: "#241815",
        borderRadius: "9999px",
        padding: "8px 16px",
        fontWeight: 700,
      }}
      declineButtonStyle={{
        background: "#241815",
        color: "#FFF7DC",
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
