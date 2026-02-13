import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "[Tu Nombre] - Desarrollador Jr.",
  description:
    "Busco mi primera oportunidad en tecnología. Aprendo rápido, tengo criterio y muchas ganas de crecer.",
  keywords: ["desarrollador", "junior", "trainee", "programador", "web"],
  authors: [{ name: "[Tu Nombre]" }],
  openGraph: {
    title: "[Tu Nombre] - Desarrollador Jr.",
    description:
      "Busco mi primera oportunidad en tecnología. Aprendo rápido, tengo criterio y muchas ganas de crecer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
