import type { Metadata } from "next";

import "./globals.css";

import { Inter, Orbitron } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Anir Jung Thapa",
  description: "Aspiring Software Engineer From Dharan Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-bg-dark text-titanium-light`}
      >
        {children}
      </body>
    </html>
  );
}
