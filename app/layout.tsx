import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tejipaz",
  description:
    "Desde el ser para poder hacer. Primero que todo un café.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F2F1F1] text-[#1D1D1B] font-sans">
        {children}
      </body>
    </html>
  );
}