import type { Metadata } from "next";
import { Inter, Noto_Naskh_Arabic, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-naskh",
  display: "swap",
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Moiz Shahzad",
  description: "Building with purpose - وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ",
  keywords: ["Abdul Moiz Shahzad", "Moiz", "TEDx", "Developer", "Entrepreneur"],
  authors: [{ name: "Abdul Moiz Shahzad" }],
  openGraph: {
    title: "Abdul Moiz Shahzad",
    description: "Building with purpose - that man will only have what he has worked towards",
    type: "website",
    locale: "en_US",
    url: "https://moizibnyousaf.com",
    siteName: "Abdul Moiz Shahzad",
  },
  twitter: {
    card: "summary_large_image",
    title: "that man will only have what he has worked towards",
    description: "Quran 53:39",
    creator: "@MoizIbnYousaf",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoNaskh.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
