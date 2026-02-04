import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProviderWrapper from "@/components/ReduxProviderWrapper";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Invest in Ethiopia 2026 | High-Level Business Forum",
  description:
    "Official registration portal for the Invest in Ethiopia High-Level Business Forum 2026. Join global investors and business leaders on 26–27 March 2026 at Ethiopian Skylight Hotel, Addis Ababa.",
  
  keywords: [
    "Invest in Ethiopia",
    "Ethiopia investment",
    "business forum 2026",
    "Addis Ababa conference",
    "EIC",
    "Ethiopian Investment Commission",
    "Africa investment summit"
  ],

  authors: [{ name: "Ethiopian Investment Commission" }],

  icons: {
    icon: "/logo-small.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://investethiopia.gov.et/invest-in-ethiopia-2026",
    title: "Invest in Ethiopia 2026 | High-Level Business Forum",
    description:
      "Join Africa’s premier investment forum in Addis Ababa, Ethiopia — 26–27 March 2026.",
    siteName: "Invest in Ethiopia 2026",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Invest in Ethiopia 2026 Forum",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Invest in Ethiopia 2026 | High-Level Business Forum",
    description:
      "Africa’s premier investment forum — Addis Ababa, Ethiopia — March 2026.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ReduxProviderWrapper>
          <div className="w-full bg-white border-b border-[#1E2B4D]/15">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 py-4">
              <img src="/EIC.jpg" alt="IEC" className="h-10 w-auto object-contain" />
              <img src="/ministry_of_finance.jpg" alt="Ministry of Finance" className="h-10 w-auto object-contain" />
              <img src="/DPG.jpg" alt="DPG" className="h-10 w-auto object-contain" />
              <img src="/INVEST_IN_ETHIOPIA.jpg" alt="Invest in Ethiopia 2026" className="h-10 w-auto object-contain" />
            </div>
          </div>
          {children}
          <Toaster position="top-right" richColors />
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}