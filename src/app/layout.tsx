import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Ignacio Palmeri | Portfolio",
  description: "Estudiante de Gestión de Tecnología de la Información - Python, Web3, Automatización",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
