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
  title: "Moiz - وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ",
  description: "That man will only have what he has worked towards - A digital sanctuary of faith and code",
  keywords: ["Moiz", "Abdul Moiz Shahzad", "Developer", "Muslim", "TEDx", "Entrepreneur"],
  authors: [{ name: "Abdul Moiz Shahzad" }],
  openGraph: {
    title: "Moiz - وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ",
    description: "That man will only have what he has worked towards",
    type: "website",
    locale: "en_US",
    url: "https://moiz.dev",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MoizIbnYousaf",
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
