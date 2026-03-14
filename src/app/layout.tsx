import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "EmbedReviews — Put your Google reviews on your website automatically",
  description: "Connect your Google Business Profile and embed a beautiful review widget on any website in 5 minutes. Free to start.",
  openGraph: {
    title: "EmbedReviews — Put your Google reviews on your website automatically",
    description: "Connect your Google Business Profile and embed a beautiful review widget on any website in 5 minutes. Free to start.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-brand-navy font-sans mb-10`}>
        {children}
      </body>
    </html>
  );
}

