export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  backgroundColor: string;
  logoSrc: string;
  watermarkLogoSrc: string;
  gridImages: string[];
  mobileImageSrc: string;
}

export const projectsData: Record<string, ProjectData> = {
  "salva-ramos": {
    slug: "salva-ramos",
    title: "SalvaRamos",
    subtitle: "POST/CARRUSELES",
    backgroundColor: "#543C73", // Color morado oscuro aproximado al de Behance
    logoSrc: "/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_11.svg", // Placeholder logo (se reemplazará cuando se suba el real)
    watermarkLogoSrc: "/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_11.svg", 
    gridImages: [
      "/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg",
      "/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_2.svg",
      "/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_3.svg",
      "/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_4.svg",
      "/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_5.svg",
      "/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_6.svg",
    ],
    mobileImageSrc: "/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_7.svg", // Placeholder for phone screen
  }
};
