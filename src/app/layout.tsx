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

const siteUrl = "https://aceoutdoorsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    "outdoor builder Santa Fe Texas",
    "patio builder near me",
    "outdoor kitchen installer Galveston County",
    "fire pit builder Santa Fe TX",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ace Outdoors Solutions | Custom Outdoor Living in Santa Fe, TX",
    description:
      "Patios, outdoor kitchens, shade, and hardscapes built to fit your space and your budget. Veteran-owned — free estimates.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ace Outdoors Solutions",
    images: [
      {
        url: "/images/hero-backyard.jpg",
        width: 1200,
        height: 630,
        alt: "Custom outdoor living space by Ace Outdoors Solutions in Santa Fe, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ace Outdoors Solutions | Custom Outdoor Living in Santa Fe, TX",
    description:
      "Veteran-owned outdoor living builder. Custom patios, outdoor kitchens, pergolas, hardscaping & more. Free estimates.",
    images: ["/images/hero-backyard.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Ace Outdoors Solutions",
  telephone: "(346) 237-0573",
  email: "zach@aceoutdoorsolutions.com",
  url: siteUrl,
  image: `${siteUrl}/images/hero-backyard.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Fe",
    addressRegion: "TX",
    postalCode: "77510",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.3788,
    longitude: -95.0941,
  },
  areaServed: [
    { "@type": "City", name: "Webster" },
    { "@type": "City", name: "League City" },
    { "@type": "City", name: "Friendswood" },
    { "@type": "City", name: "Santa Fe" },
    { "@type": "City", name: "Pearland" },
    { "@type": "City", name: "Manvel" },
  ],
  founder: {
    "@type": "Person",
    name: "Zach",
    jobTitle: "Owner",
  },
  description:
    "Veteran-owned outdoor living builder specializing in custom patios, outdoor kitchens, pergolas, fireplaces, hardscaping, and more in Santa Fe, TX.",
  knowsAbout: [
    "Custom Patios",
    "Outdoor Kitchens",
    "Fireplaces and Fire Pits",
    "Pergolas and Shade Systems",
    "Hardscaping",
    "Water Features",
    "Outdoor Lighting",
    "Landscape Edging",
    "Drainage Solutions",
  ],
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
