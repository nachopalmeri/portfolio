import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ignacio Palmeri | Backend Developer",
  description: "Backend Developer especializado en Python, Web3 y automatización. Construyo herramientas que resuelven problemas reales.",
  keywords: ["Backend Developer", "Python", "Web3", "Solidity", "Automation"],
  authors: [{ name: "Ignacio Palmeri" }],
  openGraph: {
    title: "Ignacio Palmeri | Backend Developer",
    description: "Backend Developer especializado en Python, Web3 y automatización.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-black text-[#F5F5F7]">{children}</body>
    </html>
  );
}
