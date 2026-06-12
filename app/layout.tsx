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
  title: "Agencia Brújula | Marketing y Diseño Gráfico en Concepción",
  description: "Agencia Brújula: Agencia de marketing digital, branding y diseño gráfico en Concepción, Chile. Soluciones creativas para marcas que buscan crecer y conectar en el mundo digital.",
  keywords: "agenciabrujula, marketing chile, marketing en concepcion, agencias de marketing concepcion, brujula agencia, agencia brujula, diseño grafico concepcion, branding concepcion, diseño de branding concepcion",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://agenciabrujula.com"),
  openGraph: {
    title: "Agencia Brújula | Marketing y Diseño en Concepción",
    description: "Agencia de branding, marketing digital y diseño gráfico en Concepción, Chile.",
    url: "https://agenciabrujula.com",
    siteName: "Agencia Brújula",
    images: [
      {
        url: "/icono_descarga.png",
        width: 512,
        height: 512,
        alt: "Logo Agencia Brújula",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agencia Brújula",
  "image": "https://agenciabrujula.com/icon.png",
  "@id": "https://agenciabrujula.com",
  "url": "https://agenciabrujula.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Concepción",
    "addressRegion": "Biobío",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -36.820135,
    "longitude": -73.044390
  },
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/agenciabrujula.cl/"
  ],
  "description": "Agencia de marketing digital, branding y diseño gráfico en Concepción, Chile."
};

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
