import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Agencia Brújula en Concepción",
  description: "Conoce al equipo detrás de Agencia Brújula. Somos una agencia joven de diseño gráfico y marketing en Concepción que crece junto a tu marca.",
  alternates: {
    canonical: "https://agenciabrujula.com/sobre-nosotros",
  },
};

export default function SobreNosotros() {
  return (
    <div className="flex flex-col pb-12 md:pb-24">
      <section className="bg-brand-primary pt-24 md:pt-32 pb-16 md:pb-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_21.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-8 text-brand-accent drop-shadow-md">Sobre Nosotros</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-brand-light font-medium leading-relaxed">
            Agencia Brújula es un equipo creativo de diseñadoras enfocado en diseño y presencia digital.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute top-20 left-10 opacity-10 animate-float pointer-events-none hidden md:block">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_5.svg" alt="" width={200} height={200} />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-6 md:mb-8 leading-tight">Quiénes somos</h2>
              <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                <p>
                  Somos un equipo joven que cree en el poder de las buenas ideas, el trabajo colaborativo y la comunicación cercana.
                </p>
                <p>
                  Nos gusta conocer la historia detrás de cada proyecto, aprender de nuestros clientes y construir soluciones visuales que respondan a las necesidades reales de cada marca.
                </p>
                <div className="bg-brand-light/40 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-l-8 border-brand-primary mt-6 md:mt-10">
                  <p className="font-bold text-brand-primary text-lg sm:text-xl md:text-2xl italic">
                    &quot;Porque más que trabajar para las marcas, nos gusta crecer junto a ellas.&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden p-4 order-1 md:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-accent rounded-[2rem] md:rounded-[3rem] transform rotate-3 md:rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-brand-light rounded-[2rem] md:rounded-[3rem] transform -rotate-2 md:-rotate-3 group-hover:-rotate-6 transition-transform duration-500 delay-75"></div>
                <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative border-4 border-brand-primary flex flex-col justify-center items-center py-16 md:py-24 min-h-[250px] md:min-h-[400px]">
                  <Image src="/images/logos/principal/LOGO PRINCIPAL BRUJULA SVG_1.svg" alt="Brújula" width={400} height={200} className="w-56 sm:w-64 md:w-80 h-auto group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_22.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border-t-[8px] md:border-t-[12px] border-brand-primary hover:-translate-y-2 transition-transform">
              <h3 className="font-title text-3xl md:text-4xl text-brand-primary mb-4 md:mb-6 flex items-center gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 bg-brand-primary rounded-xl md:rounded-2xl flex-shrink-0">
                  <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="Misión" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                Nuestra misión
              </h3>
              <p className="text-foreground/80 text-base sm:text-lg md:text-xl mb-4 md:mb-6 font-medium leading-relaxed">
                Ayudar a marcas y emprendimientos a comunicar sus ideas a través del diseño, la creatividad y la presencia digital.
              </p>
              <p className="text-foreground/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Buscamos desarrollar soluciones que permitan transmitir mejor cada proyecto, fortaleciendo su identidad y conexión con su audiencia.
              </p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border-t-[8px] md:border-t-[12px] border-brand-accent hover:-translate-y-2 transition-transform">
              <h3 className="font-title text-3xl md:text-4xl text-brand-primary mb-4 md:mb-6 flex items-center gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 bg-brand-accent rounded-xl md:rounded-2xl flex-shrink-0">
                  <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_2.svg" alt="Visión" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                Nuestra visión
              </h3>
              <p className="text-foreground/80 text-base sm:text-lg md:text-xl mb-4 md:mb-6 font-medium leading-relaxed">
                Convertirnos en una agencia creativa reconocida a nivel nacional por su cercanía, compromiso y pasión por ayudar a otras marcas a desarrollar su potencial.
              </p>
              <p className="text-foreground/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Queremos seguir creciendo junto a proyectos que valoren el diseño, la creatividad y la comunicación como herramientas para diferenciarse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4 animate-spin-slow hidden md:block">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_17.svg" alt="Deco" width={600} height={600} />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="font-title text-4xl sm:text-5xl md:text-6xl text-center text-brand-primary mb-10 md:mb-20 drop-shadow-sm">Nuestros valores</h2>
          <div className="grid sm:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-16">
            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-brand-light flex items-center justify-center text-brand-primary font-title text-3xl sm:text-4xl md:text-5xl border-4 border-brand-primary shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">1</div>
              <div>
                <h4 className="font-title text-2xl sm:text-3xl md:text-4xl text-brand-primary mb-2 md:mb-4">Cercanía</h4>
                <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-medium leading-relaxed">Creemos en la confianza, la comunicación abierta y el trabajo en equipo.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-brand-light flex items-center justify-center text-brand-primary font-title text-3xl sm:text-4xl md:text-5xl border-4 border-brand-primary shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">2</div>
              <div>
                <h4 className="font-title text-2xl sm:text-3xl md:text-4xl text-brand-primary mb-2 md:mb-4">Creatividad</h4>
                <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-medium leading-relaxed">Buscamos soluciones que reflejen la esencia de cada proyecto.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-brand-light flex items-center justify-center text-brand-primary font-title text-3xl sm:text-4xl md:text-5xl border-4 border-brand-primary shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">3</div>
              <div>
                <h4 className="font-title text-2xl sm:text-3xl md:text-4xl text-brand-primary mb-2 md:mb-4">Colaboración</h4>
                <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-medium leading-relaxed">Las mejores ideas nacen cuando clientes y el equipo trabajan en una misma dirección.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-brand-light flex items-center justify-center text-brand-primary font-title text-3xl sm:text-4xl md:text-5xl border-4 border-brand-primary shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">4</div>
              <div>
                <h4 className="font-title text-2xl sm:text-3xl md:text-4xl text-brand-primary mb-2 md:mb-4">Compromiso</h4>
                <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-medium leading-relaxed">Nos involucramos en cada proyecto con responsabilidad, dedicación y atención a los detalles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Oculto (Screen Readers & Search Engines) */}
      <div className="sr-only">
        <h2>Conoce más sobre Agencia Brújula, tu agencia de marketing en Concepción</h2>
        <p>
          En Agencia Brújula no solo nos definimos como una agencia de marketing digital en Concepción; somos un equipo humano, creativo y joven de diseñadoras gráficas y expertas en comunicación digital. Nuestro propósito central es brindar apoyo integral en diseño de branding y presencia digital para emprendimientos, pymes y empresas en la región del Biobío y todo Chile. Trabajamos bajo la firme convicción de que el diseño gráfico en Concepción debe estar al servicio de la estrategia comercial de cada cliente, creando identidades visuales que realmente destaquen y perduren en el tiempo.
        </p>
        <p>
          Si estás buscando agencias de marketing en Concepción que ofrezcan un trato cercano y colaborativo, has llegado al lugar correcto. Nos apasiona involucrarnos en la historia de cada marca. El proceso creativo de Agencia Brújula incluye desde la concepción del logotipo y manual de marca (branding corporativo) hasta la estrategia integral de posicionamiento digital y manejo de redes sociales. Sabemos que el éxito de una estrategia de marketing en Chile depende de la autenticidad y la creatividad, dos de nuestros valores fundamentales. No somos solo proveedores; somos tus aliados estratégicos en el mundo digital.
        </p>
        <p>
          Nuestra misión como agencia brújula es clara: orientar a las marcas para que no se pierdan en el vasto mundo digital. Con nuestros servicios de diseño gráfico, creación de contenido, estrategias de branding y marketing digital integral en Concepción, garantizamos que tu proyecto no solo se vea impecable, sino que también logre sus objetivos comerciales. La visión a futuro de nuestra agencia de marketing es consolidarnos a nivel nacional como referentes de creatividad, cercanía y resultados. Explora cómo nuestro equipo de expertas puede transformar la presencia digital de tu marca hoy mismo.
        </p>
      </div>
    </div>
  );
}
