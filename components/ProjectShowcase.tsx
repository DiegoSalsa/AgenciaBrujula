import Image from "next/image";
import Link from "next/link";
import DeviceMockup from "./DeviceMockup";

interface ShowcaseImage {
  url: string;
  alt?: string;
  aspectRatio?: "square" | "story" | "landscape" | "portrait";
}

const getAspectClass = (ratio?: string) => {
  switch (ratio) {
    case "story": return "aspect-[9/16] row-span-2";
    case "landscape": return "aspect-video";
    case "portrait": return "aspect-[4/5] row-span-2";
    default: return "aspect-square";
  }
};

interface ProjectShowcaseProps {
  project: {
    title: string;
    subtitle: string;
    backgroundColor: string;
    textColor?: string;
    logoSrc: string;
    watermarkLogoSrc: string;
    gridImages: ShowcaseImage[];
    mobileImageSrc: string;
    categorySlug?: string;
    layoutTemplate?: string;
  };
}

function ImageGrid({ images, className = "" }: { images: ShowcaseImage[]; className?: string }) {

  // Determine grid cols based on count
  const getCols = () => {
    if (images.length <= 2) return "grid-cols-1 sm:grid-cols-2";
    if (images.length <= 4) return "grid-cols-2";
    return "grid-cols-2 md:grid-cols-3";
  };

  return (
    <div className={`grid ${getCols()} gap-4 md:gap-5 ${className}`}>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`${getAspectClass(img.aspectRatio)} relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)] group bg-white/5`}
        >
          <Image
            src={img.url}
            alt={img.alt || `Post ${idx + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
}

function GalleryOnly({ images }: { images: ShowcaseImage[] }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 items-center">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-xl md:rounded-2xl bg-white/[0.08] shadow-[0_18px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.15] group ${img.aspectRatio === "landscape" ? "aspect-[4/3]" : "aspect-[4/5]"} ${idx % 2 === 1 ? "lg:translate-y-8" : ""}`}
          >
            <Image
              src={img.url}
              alt={img.alt || `Imagen ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 260px"
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const hasGridImages = project.gridImages.length > 0;
  const hasMobile = !!project.mobileImageSrc;
  const hasLogo = !!project.logoSrc;
  const hasWatermark = !!project.watermarkLogoSrc;
  const layout = project.layoutTemplate || "grid-left-phone-right";
  const needsPhone = layout.includes("phone");
  const showGalleryOnly = hasGridImages && (!needsPhone || !hasMobile);

  const backHref = project.categorySlug
    ? `/portafolio/${project.categorySlug}`
    : "/portafolio";

  // For center layout, split images in half
  const leftImages = project.gridImages.slice(0, Math.ceil(project.gridImages.length / 2));
  const rightImages = project.gridImages.slice(Math.ceil(project.gridImages.length / 2));

  return (
    <div
      className="min-h-screen relative flex flex-col py-8 md:py-12 overflow-hidden"
      style={{ backgroundColor: project.backgroundColor, color: project.textColor || "#ffffff" }}
    >
      {/* Back Button */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30">
        <Link
          href={backHref}
          className="hover:opacity-100 opacity-80 flex items-center gap-2 text-sm md:text-base font-medium transition-opacity bg-black/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm w-max"
        >
          ← Volver
        </Link>
      </div>

      {/* Watermark Background */}
      {hasWatermark && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <Image
            src={project.watermarkLogoSrc}
            alt=""
            width={1200}
            height={1200}
            className="w-[150%] md:w-[120%] lg:w-[100%] h-auto object-contain opacity-[0.07]"
          />
        </div>
      )}

      <div className="flex-1 container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 flex flex-col">
        {/* Header / Brand Logo */}
        <div className="mb-8 md:mb-10 flex flex-col items-center w-full mt-6 md:mt-0">
          {hasLogo ? (
            <>
              <Image
                src={project.logoSrc}
                alt={project.title}
                width={400}
                height={200}
                className="w-36 sm:w-48 md:w-64 lg:w-80 h-auto mb-2 drop-shadow-lg"
              />
              <h1 className="sr-only">{project.title}</h1>
            </>
          ) : (
            <h1 className="font-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg text-center leading-none">{project.title}</h1>
          )}
        </div>

        {/* Main Layout Content */}
        <div className="flex-1 flex flex-col justify-center w-full">

        {showGalleryOnly && (
          <GalleryOnly images={project.gridImages} />
        )}

        {/* ============================================= */}
        {/* LAYOUT: Grid Left + Phone Right               */}
        {/* ============================================= */}
        {layout === "grid-left-phone-right" && hasMobile && !showGalleryOnly && (
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-16">
            <div className="w-full lg:w-3/5">
              {hasGridImages ? <ImageGrid images={project.gridImages} /> : <div className="py-24 text-center border-2 border-dashed border-white/20 rounded-2xl text-white/40">Sin imágenes en el grid</div>}
            </div>
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <DeviceMockup
                imageSrc={project.mobileImageSrc}
                altText={`${project.title} en móvil`}
                className="transform lg:rotate-2 hover:-translate-y-4 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        )}

        {/* ============================================= */}
        {/* LAYOUT: Phone Left + Grid Right               */}
        {/* ============================================= */}
        {layout === "phone-left-grid-right" && hasMobile && !showGalleryOnly && (
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-16">
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
              <DeviceMockup
                imageSrc={project.mobileImageSrc}
                altText={`${project.title} en móvil`}
                className="transform lg:-rotate-2 hover:-translate-y-4 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              />
            </div>
            <div className="w-full lg:w-3/5">
              {hasGridImages ? <ImageGrid images={project.gridImages} /> : <div className="py-24 text-center border-2 border-dashed border-white/20 rounded-2xl text-white/40">Sin imágenes en el grid</div>}
            </div>
          </div>
        )}

        {/* ============================================= */}
        {/* LAYOUT: Phone Left + Row Right                */}
        {/* ============================================= */}
        {layout === "phone-left-row-right" && hasMobile && !showGalleryOnly && (
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-16">
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
              <DeviceMockup
                imageSrc={project.mobileImageSrc}
                altText={`${project.title} en móvil`}
                className="transform lg:-rotate-1 hover:-translate-y-4 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              />
            </div>
            <div className="w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 items-stretch">
              {hasGridImages ? project.gridImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)] group bg-white/5 ${getAspectClass(img.aspectRatio).replace("row-span-2", "")}`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt || `Post ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )) : <div className="flex-1 py-24 text-center border-2 border-dashed border-current opacity-40 rounded-2xl">Sin imágenes en el grid</div>}
            </div>
          </div>
        )}

        {/* ============================================= */}
        {/* LAYOUT: Phone Center + Images on Both Sides   */}
        {/* ============================================= */}
        {layout === "phone-center-images-sides" && hasMobile && !showGalleryOnly && (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Left side images */}
            <div className="w-full lg:w-1/4">
              {leftImages.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {leftImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)] group bg-white/5 ${getAspectClass(img.aspectRatio).replace('row-span-2', '')}`}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt || `Post ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              ) : <div className="hidden lg:block py-24 text-center border-2 border-dashed border-white/20 rounded-2xl text-white/40">Vacío</div>}
            </div>

            {/* Center phone */}
            <div className="flex justify-center">
              <DeviceMockup
                imageSrc={project.mobileImageSrc}
                altText={`${project.title} en móvil`}
                className="hover:-translate-y-4 transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Right side images */}
            <div className="w-full lg:w-1/4">
              {rightImages.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {rightImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)] group bg-white/5 ${getAspectClass(img.aspectRatio).replace('row-span-2', '')}`}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt || `Post ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              ) : <div className="hidden lg:block py-24 text-center border-2 border-dashed border-white/20 rounded-2xl text-white/40">Vacío</div>}
            </div>
          </div>
        )}

        {/* ============================================= */}
        {/* LAYOUT: Grid Only                             */}
        {/* ============================================= */}
        {layout === "grid-only" && !showGalleryOnly && (
          <div className="max-w-5xl mx-auto">
            {hasGridImages ? <ImageGrid images={project.gridImages} /> : <div className="py-24 text-center border-2 border-dashed border-current opacity-40 rounded-2xl">Sin imágenes en el grid</div>}
          </div>
        )}

        {/* ============================================= */}
        {/* LAYOUT: Phone Only                            */}
        {/* ============================================= */}
        {layout === "phone-only" && hasMobile && !showGalleryOnly && (
          <div className="flex justify-center">
            <DeviceMockup
              imageSrc={project.mobileImageSrc}
              altText={`${project.title} en móvil`}
              className="hover:-translate-y-4 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            />
          </div>
        )}

        {/* Empty state (Fallback) */}
        {(!layout || (needsPhone && !hasMobile && !hasGridImages)) && !hasGridImages && !hasMobile && (
          <div className="text-center py-24">
            <p className="opacity-40 text-lg">Este proyecto aún no tiene imágenes.</p>
          </div>
        )}

        </div> {/* End Main Layout Content */}

        {/* Typography / Footer info */}
        <div className="mt-12 md:mt-16 pt-4 text-center lg:absolute lg:bottom-20 lg:left-6 lg:mt-0 lg:pt-0 lg:text-left drop-shadow-sm">
          {project.subtitle && (
            <p className="text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-1 opacity-80">
              {project.subtitle}
            </p>
          )}
          <p className="text-lg md:text-xl lg:text-2xl font-medium">{project.title}</p>
        </div>
      </div>
    </div>
  );
}
