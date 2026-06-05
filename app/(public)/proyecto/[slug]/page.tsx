import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/actions";
import ProjectShowcase from "@/components/ProjectShowcase";

export const dynamic = "force-dynamic";

export default async function ProyectoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let project = null;
  try {
    project = await getProjectBySlug(slug);
  } catch (e) {
    console.error(e);
  }

  if (!project) {
    notFound();
  }

  // Transform DB data to component props
  const showcaseData = {
    title: project.title,
    subtitle: project.subtitle || "",
    backgroundColor: project.background_color,
    textColor: project.text_color || "#ffffff",
    logoSrc: project.logo_url || "",
    watermarkLogoSrc: project.watermark_url || "",
    gridImages: (project.project_images || []).map((img: { image_url: string; alt_text?: string; aspect_ratio?: "square" | "story" | "landscape" | "portrait" }) => ({
      url: img.image_url,
      alt: img.alt_text || "",
      aspectRatio: img.aspect_ratio || "square",
    })),
    mobileImageSrc: project.mobile_image_url || "",
    categorySlug: (project.categories as { slug: string } | null)?.slug || "portafolio",
    layoutTemplate: project.layout_template || "grid-left-phone-right",
  };

  return <ProjectShowcase project={showcaseData} />;
}
