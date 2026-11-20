import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Stop Solutions | We Make You Visible",
  description:
    "One Stop Solutions is an offline marketing and advertising agency offering outdoor advertising, hoardings, unipoles, transit media, auto branding, LED van campaigns, signage and brand promotions across Uttar Pradesh.",
  keywords: [
    "One Stop Solutions",
    "offline marketing agency",
    "outdoor advertising",
    "OOH advertising",
    "hoarding advertising",
    "unipole advertising",
    "auto branding",
    "LED van advertising",
    "Kanpur advertising agency",
    "Uttar Pradesh marketing agency",
  ],
  applicationName: "One Stop Solutions",
  openGraph: {
    title: "One Stop Solutions | We Make You Visible",
    description:
      "Offline marketing, outdoor advertising and on-ground brand activation solutions across Uttar Pradesh.",
    type: "website",
    siteName: "One Stop Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Stop Solutions | We Make You Visible",
    description:
      "Offline marketing, outdoor advertising and on-ground brand activation solutions across Uttar Pradesh.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
