import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RMD Vet Biotech | Science for Animal Health",
  description:
    "Science-driven, nature-inspired animal health and nutrition products for cattle, buffalo, goat, poultry, swine and companion animals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="h-[100px] fixed w-full t-0 l-0 z-50"><Navbar /></div>
        {/* <Navbar /> */}
        <div className="pt-10">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}