import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WYC Engine Dashboard Demo",
  description: "A Next.js internal trading dashboard demo for WYC Capital frontend internship."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
