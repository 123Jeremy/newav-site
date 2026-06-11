import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-pj-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newav.eu"),
  title: "NEWAV — Le premier van 100 % électrique accessible à tous",
  description:
    "Découvrez NEWAV EA1. 100 % électrique, accessible, conçu dès l'origine pour les personnes à mobilité réduite. Pré-réservez dès maintenant.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://newav.eu",
    siteName: "NEWAV",
    title: "NEWAV EA1",
    description:
      "Le premier van 100 % électrique accessible à tous.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
