import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Lenis from 'lenis'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morris Portfolio Page",
  description: "Coming soon broskies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
