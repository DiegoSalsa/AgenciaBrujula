import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/lib/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio de Diseño y Marketing | Agencia Brújula",
  description: "Explora el portafolio de Agencia Brújula. Casos de éxito en diseño gráfico, branding, redes sociales y campañas de marketing digital en Concepción y Chile.",
  alternates: {
    canonical: "https://agenciabrujula.com/portafolio",
  },
};

export const dynamic = "force-dynamic";

export default async function Portafolio() {
  let categories: any[] = [];
  try {
    categories = await getCategories();
  } catch (e) {
    console.error("Error fetching categories:", e);
  }

  return (
    <div className="flex flex-col pb-12 md:pb-24">
      <section className="bg-white pt-24 md:pt-24 pb-10 md:pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 text-brand-primary">Portafolio</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            Algunos proyectos que han confiado en nosotros. Cada proyecto representa una historia, un desafío y una solución diferente.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <Link href={`/portafolio/${cat.slug}`} key={cat.id} className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5] bg-brand-light flex flex-col justify-end block">
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/40 transition-all z-10"></div>
                {cat.svg_icon && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <Image src={cat.svg_icon} alt={cat.title} width={150} height={150} className="w-24 h-24 md:w-32 md:h-32" />
                  </div>
                )}
                <div className="relative z-20 p-6 md:p-8 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform">
                  <h3 className="font-title text-2xl md:text-3xl text-white mb-2 shadow-sm">{cat.title}</h3>
                  <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-100">{cat.description}</p>
                  <span className="inline-block bg-white text-brand-primary px-5 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-200 group-hover:bg-brand-accent">
                    Ver proyectos
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 md:mt-16 text-center">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 md:gap-3 bg-brand-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-brand-secondary transition-all">
              Visita nuestro Behance completo
              <span className="text-xl md:text-2xl leading-none">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Oculto (Screen Readers & Search Engines) */}
      <div className="sr-only">
        <h2>Portafolio de Agencia Brújula: Diseño gráfico y marketing digital en Concepción</h2>
        <p>
          Te invitamos a explorar el portafolio creativo de Agencia Brújula, una recopilación de nuestros mejores trabajos y casos de éxito reales como agencia de marketing digital en Concepción. A lo largo de nuestra trayectoria, hemos tenido el honor de colaborar con empresas, marcas locales y pymes de toda la región, entregando resultados sobresalientes en diseño gráfico publicitario, branding corporativo y posicionamiento de marca. Cada proyecto que visualizas en esta galería es el reflejo de una meticulosa estrategia de diseño pensada para generar impacto visual y cumplir con objetivos comerciales claros en el competitivo mercado actual.
        </p>
        <p>
          Nuestro equipo de expertas aborda cada desafío creativo con una perspectiva única. Entre nuestras especialidades destacadas en el portafolio encontrarás el diseño de logotipos modernos, creación de identidades visuales memorables (manual de marca integral), y el desarrollo completo de campañas gráficas para redes sociales. Al analizar nuestras agencias de marketing en Concepción, notarás que nuestro enfoque se centra en la estética funcional. Creemos firmemente que el buen diseño gráfico en Concepción no solo debe ser hermoso a la vista, sino que debe comunicar eficazmente los valores y la promesa de valor de tu negocio a tu público objetivo.
        </p>
        <p>
          Además del diseño puro, nuestros proyectos integran servicios de manejo de redes sociales (Community Manager) y marketing digital integral, donde las estrategias de comunicación toman forma visual. Te alentamos a revisar en detalle nuestros proyectos de marketing en Chile, categorizados por industria y tipo de servicio. Nuestra brújula creativa está siempre apuntando hacia la innovación. Si te inspira lo que ves y deseas resultados similares o superiores para tu propia empresa, contáctanos. Confía en Agencia Brújula para liderar el proceso de transformar tu marca en un referente digital indiscutible dentro de tu sector.
        </p>
      </div>
    </div>
  );
}
