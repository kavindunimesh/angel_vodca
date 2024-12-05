import localFont from "next/font/local";
import { Metadata } from "next";
import { headers } from "next/headers";
import { Chakra_Petch } from "next/font/google";

import "./globals.css";

// Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Custom Fraunces Font
const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces/Fraunces_144pt-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/fraunces/Fraunces_144pt-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/fraunces/Fraunces_144pt-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/fraunces/Fraunces_144pt-Regular.ttf", weight: "400", style: "normal" },
   
  ],
  variable: "--font-fraunces",
});

// Google Fonts
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const title = headersList.get("x-seo-title") || "Angel Vodka";
  const description = headersList.get("x-seo-description") || "Angel Vodka";

  return {
    title,
    description,
    keywords: "Angel Vodka",
    authors: [{ name: "Similater (PVT) Ltd" }],
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: "https://www.ecommerce-solution.com",
      type: "website",
      images: [
        {
          url: "https://www.ecommerce-solution.com/og-image.jpg",
          width: 800,
          height: 600,
          alt: "Angel Vodka",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chakra.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
