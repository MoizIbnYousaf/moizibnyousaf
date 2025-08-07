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
  metadataBase: new URL('https://www.moizibnyousaf.com'),
  title: "that man will only have what he has worked towards",
  description: "Quran 53:39",
  keywords: ["Abdul Moiz Shahzad", "Moiz", "TEDx", "Developer", "Entrepreneur"],
  authors: [{ name: "Abdul Moiz Shahzad" }],
  openGraph: {
    title: "that man will only have what he has worked towards",
    description: "Quran 53:39",
    type: "website",
    locale: "en_US",
    url: "https://www.moizibnyousaf.com",
    siteName: "moizibnyousaf.com",
    images: [
      {
        url: "https://www.moizibnyousaf.com/twitter-image",
        width: 1200,
        height: 630,
        alt: "that man will only have what he has worked towards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MoizIbnYousaf",
    creator: "@MoizIbnYousaf",
    title: "that man will only have what he has worked towards",
    description: "Quran 53:39",
    images: ["https://www.moizibnyousaf.com/twitter-image"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
    other: {
      rel: "icon",
      url: "/favicon.svg",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoNaskh.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
