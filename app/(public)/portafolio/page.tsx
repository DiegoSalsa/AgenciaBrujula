import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function Portafolio() {
  let categories: any[] = [];
  try {
    categories = await getCategories();
  } catch (e) {
    console.error("Error fetching categories:", e);
  }

  return (
    <div className="flex flex-col pb-24">
      <section className="bg-white pt-24 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-title text-5xl md:text-6xl mb-6 text-brand-primary">Portafolio</h1>
          <p className="text-xl max-w-2xl mx-auto text-foreground/80">
            Algunos proyectos que han confiado en nosotros. Cada proyecto representa una historia, un desafío y una solución diferente.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link href={`/portafolio/${cat.slug}`} key={cat.id} className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-brand-light flex flex-col justify-end block">
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/40 transition-all z-10"></div>
                {cat.svg_icon && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <Image src={cat.svg_icon} alt={cat.title} width={150} height={150} className="w-32 h-32" />
                  </div>
                )}
                <div className="relative z-20 p-8 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform">
                  <h3 className="font-title text-3xl text-white mb-2 shadow-sm">{cat.title}</h3>
                  <p className="text-white/90 mb-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-100">{cat.description}</p>
                  <span className="inline-block bg-white text-brand-primary px-6 py-2 rounded-full font-semibold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-200 group-hover:bg-brand-accent">
                    Ver proyectos
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-secondary transition-all">
              Visita nuestro Behance completo
              <span className="text-2xl leading-none">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
