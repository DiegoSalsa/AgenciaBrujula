import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const baihgale = localFont({
  src: "../public/fonts/Baihgale-9YVLy.otf",
  variable: "--font-baihgale",
});

export const metadata: Metadata = {
  title: "Agencia Brújula | Tu brújula en el mundo digital",
  description: "Diseño, branding, redes sociales y marketing digital para marcas que buscan crecer y conectar en el mundo digital.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${baihgale.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
