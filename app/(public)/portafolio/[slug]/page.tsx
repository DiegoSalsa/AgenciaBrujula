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
                return (
                  <Link
                    key={project.id}
                    href={`/proyecto/${project.slug}`}
                    className="group relative rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[4/3] flex flex-col items-center justify-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-4 border-solid border-transparent hover:border-white/30"
                    style={{ backgroundColor: project.background_color || "#551273" }}
                  >
                    {/* Watermark Background */}
                    {project.watermark_url && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-10">
                        <Image
                          src={project.watermark_url}
                          alt=""
                          width={600}
                          height={600}
                          className="w-[150%] h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    )}
                    
                    {/* Centered Logo or Title */}
                    <div className="relative z-10 flex flex-col items-center p-6 transform group-hover:-translate-y-2 transition-transform duration-300 w-full mb-8 md:mb-12">
                      {project.logo_url ? (
                        <Image
                          src={project.logo_url}
                          alt={project.title}
                          width={300}
                          height={150}
                          className="w-40 sm:w-48 md:w-56 h-auto drop-shadow-lg"
                        />
                      ) : (
                        <h3 className="font-title text-3xl md:text-4xl text-white drop-shadow-md text-center">{project.title}</h3>
                      )}
                    </div>
                    
                    {/* Permanent Button */}
                    <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 w-max transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="inline-block bg-white text-brand-primary font-bold text-sm md:text-base px-5 sm:px-6 py-2 md:py-2.5 rounded-full shadow-md group-hover:bg-brand-accent transition-colors">
                        Ver proyecto completo →
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
