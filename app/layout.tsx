import {Chicle, Cormorant_Upright, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import type {Metadata} from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Upright({
    variable: "--font-cormorant-upright",
    subsets: ["latin"],
    weight: ['300', "500"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chicle = Chicle({
    weight: ["400"],
    variable: "--font-chicle" ,
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Elchanan | Portfolio",
    description: "My portfolio to showcase my abilities to design and develop a great looking & feeling websites",
    icons: {
        icon: "/favicon-new.svg",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${chicle.variable} antialiased`}
      >
        {children}
      <SpeedInsights/>
      </body>
    </html>
  );
}
