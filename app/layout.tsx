import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onestopsolution.net"),

  title: "One Stop Solutions | Outdoor Advertising Agency in Kanpur",

  description:
    "One Stop Solutions is a Kanpur-based offline marketing and outdoor advertising agency offering hoardings, unipoles, transit media, auto branding, LED van campaigns, signage and brand promotions across Uttar Pradesh.",

  keywords: [
    "One Stop Solutions",
    "advertising agency in Kanpur",
    "outdoor advertising in Kanpur",
    "offline marketing agency",
    "OOH advertising",
    "hoarding advertising",
    "unipole advertising",
    "auto branding",
    "LED van advertising",
    "transit media advertising",
    "brand promotion in Uttar Pradesh",
  ],

  applicationName: "One Stop Solutions",

  alternates: {
    canonical: "https://www.onestopsolution.net",
  },

  openGraph: {
    title: "One Stop Solutions | We Make You Visible",
    description:
      "Your trusted partner for outdoor advertising, offline marketing and on-ground brand promotions across Uttar Pradesh.",
    url: "https://www.onestopsolution.net",
    siteName: "One Stop Solutions",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "One Stop Solutions | We Make You Visible",
    description:
      "Outdoor advertising, offline marketing and brand activation solutions across Uttar Pradesh.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AdvertisingAgency",
        name: "One Stop Solutions",
        url: "https://www.onestopsolution.net",
        description:
          "Offline marketing and outdoor advertising agency providing hoardings, unipoles, transit media, auto branding, LED van campaigns and brand promotions.",
        telephone: "+919129412039",
        email: "1stopsoluions0512@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "40-1A, Hardev Nagar, Barra",
          addressLocality: "Kanpur",
          addressRegion: "Uttar Pradesh",
          postalCode: "208027",
          addressCountry: "IN",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Kanpur",
          },
          {
            "@type": "State",
            name: "Uttar Pradesh",
          },
        ],
      }),
    }}
  />
  {children}
</body>
    </html>
  );
}