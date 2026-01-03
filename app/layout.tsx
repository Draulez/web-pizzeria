import "@/app/globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const GA_ID = "G-EGTTY1TM4P";

export const metadata = {
  title: "Trattoria Italiana | Pizzería en Llíria",
  description:
    "Pizzería italiana tradicional en Llíria. Pizzas artesanas, entrantes y ensaladas con productos de calidad.",
  keywords: [
    "pizzería llíria",
    "pizzas artesanas llíria",
    "cocina italiana llíria",
    "restaurante italiano llíria",
    "entrantes italianos llíria",
    "ensaladas italianas llíria",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} bg-stone-50 text-stone-800`}>
        <Navbar />
        <main>
          {children}
          <CookieBanner />

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
        </main>
      </body>
    </html>
  );
}
