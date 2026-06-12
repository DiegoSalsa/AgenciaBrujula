import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getPublishedProjectsByCategory } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let category = null;
  let projects: any[] = [];

  try {
    category = await getCategoryBySlug(slug);
    if (category) {
      projects = await getPublishedProjectsByCategory(category.id);
    }
  } catch (e) {
    console.error(e);
  }

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col pb-12 md:pb-24 min-h-screen">
      <section className={`${category.bg_class || "bg-brand-light"} pt-24 md:pt-32 pb-10 md:pb-16 text-center relative overflow-hidden transition-colors`}>
        {category.svg_icon && (
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <Image src={category.svg_icon} alt="" width={400} height={400} className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96" />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className={`font-title text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 ${category.text_color_class || "text-brand-primary"}`}>{category.title}</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 mb-6 md:mb-8">
            {category.description}
          </p>
          <Link href="/portafolio" className={`inline-flex items-center gap-2 ${category.text_color_class || "text-brand-primary"} hover:opacity-80 font-medium transition-colors`}>
            ← Volver al portafolio
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {projects.length === 0 ? (
            <div className="text-center py-16 md:py-24">
              <p className="text-foreground/40 text-base md:text-lg">Aún no hay proyectos publicados en esta categoría.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project) => {
                const firstImage = project.project_images?.[0]?.image_url;
                return (
                  <Link
                    key={project.id}
                    href={`/proyecto/${project.slug}`}
                    className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center shadow-lg hover:-translate-y-2 transition-all duration-300 border-4 border-solid border-transparent hover:border-white/50"
                    style={{ backgroundColor: project.background_color }}
                  >
                    {/* Background image thumbnail */}
                    {firstImage && (
                      <Image
                        src={firstImage}
                        alt={project.title}
                        fill
                        className="object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                      />
                    )}
                    <div className="relative z-10 text-center px-4 md:px-6">
                      <h3 className="font-title text-2xl md:text-3xl text-white drop-shadow-md mb-2">{project.title}</h3>
                      {project.client_name && (
                        <p className="text-white/70 text-sm">{project.client_name}</p>
                      )}
                      <span className="inline-block mt-3 md:mt-4 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver proyecto →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
