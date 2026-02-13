import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
