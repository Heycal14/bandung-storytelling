import type { Metadata } from "next";
import { Fraunces, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "600"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bandung, 1990 → 2024 — Yang Hilang dan Yang Tersisa",
  description:
    "Liputan jurnalisme data scrollytelling tentang transformasi fisik, tutupan hijau, suhu, dan demografi Cekungan Bandung selama 34 tahun.",
  authors: [{ name: "Editorial Visual Data Team" }],
  openGraph: {
    title: "Bandung, 1990 → 2024",
    description: "Yang hilang dan yang tersisa dari cekungan purba.",
    type: "article",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${sourceSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-paper text-ink selection:bg-terracotta selection:text-paper antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
