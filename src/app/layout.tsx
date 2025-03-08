import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kenton Prescott",
  description: "Founder, product builder, trader/investor, and techno-optimist.",
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "apple-touch-icon", url: "/apple-icon.png", sizes: "180x180" },
    { rel: "mask-icon", url: "/favicon.ico", color: "#1A202C" }
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kenton Prescott"
  },
  themeColor: "#1A202C",
  other: {
    "mobile-web-app-capable": "yes"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#1A202C" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>{children}</body>
    </html>
  );
}
