import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Ace Outdoors Solutions | Custom Patios, Outdoor Kitchens & Hardscapes in Santa Fe, TX",
  description:
    "Veteran-owned outdoor living builder in Santa Fe, Texas. Custom patios, outdoor kitchens, pergolas, fireplaces, hardscaping, and more. Free estimates — call (346) 237-0573.",
  keywords: [
    "outdoor living Santa Fe TX",
    "custom patios Texas",
    "outdoor kitchens Santa Fe",
    "pergolas Houston area",
    "hardscaping contractor Galveston County",
    "veteran owned contractor Texas",
  ],
  openGraph: {
    title: "Ace Outdoors Solutions | Custom Outdoor Living in Santa Fe, TX",
    description:
      "Patios, outdoor kitchens, shade, and hardscapes built to fit your space and your budget.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ace Outdoors Solutions",
  telephone: "(346) 237-0573",
  email: "zach@aceoutdoorsolutions.com",
  url: "https://aceoutdoorsolutions.com",
  areaServed: {
    "@type": "Place",
    name: "Santa Fe, Texas and surrounding areas",
  },
  founder: {
    "@type": "Person",
    name: "Zach",
  },
  description:
    "Veteran-owned outdoor living builder specializing in custom patios, outdoor kitchens, pergolas, fireplaces, hardscaping, and more in Santa Fe, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
