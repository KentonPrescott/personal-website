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
    { rel: "icon", url: "/favicon.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/apple-icon.png" }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
