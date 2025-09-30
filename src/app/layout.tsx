import type { Metadata } from "next";
import { Caveat, Montserrat, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/Navbar";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Autofficina Mille Motors",
  description: "Descrizione",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "var(--font-montserrat)" }}
        // style={{ fontFamily: "var(--font-montserrat)" }}
        className={`${caveat.variable} ${montserrat.variable} ${orbitron.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
