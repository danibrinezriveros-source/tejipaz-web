import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tejipaz",
  description:
    "Tejipaz | Primero que todo un café.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}