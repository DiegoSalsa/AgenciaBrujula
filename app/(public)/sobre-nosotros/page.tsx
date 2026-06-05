import Image from "next/image";
import Link from "next/link";

export default function SobreNosotros() {
  return (
    <div className="flex flex-col pb-24">
      <section className="bg-brand-primary pt-32 pb-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_21.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-title text-6xl md:text-7xl mb-8 text-brand-accent drop-shadow-md">Sobre Nosotros</h1>
          <p className="text-2xl max-w-3xl mx-auto text-brand-light font-medium leading-relaxed">
            Agencia Brújula es un equipo creativo de diseñadoras enfocado en diseño y presencia digital.
          </p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 left-10 opacity-10 animate-float pointer-events-none">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_5.svg" alt="" width={200} height={200} />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-title text-5xl text-brand-primary mb-8 leading-tight">Quiénes somos</h2>
              <div className="space-y-6 text-xl text-foreground/80 leading-relaxed font-medium">
                <p>
                  Somos un equipo joven que cree en el poder de las buenas ideas, el trabajo colaborativo y la comunicación cercana.
                </p>
                <p>
                  Nos gusta conocer la historia detrás de cada proyecto, aprender de nuestros clientes y construir soluciones visuales que respondan a las necesidades reales de cada marca.
                </p>
                <div className="bg-brand-light/40 p-8 rounded-[2rem] border-l-8 border-brand-primary mt-10">
                  <p className="font-bold text-brand-primary text-2xl italic">
                    "Porque más que trabajar para las marcas, nos gusta crecer junto a ellas."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-accent rounded-[3rem] transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-brand-light rounded-[3rem] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 delay-75"></div>
              <div className="bg-white p-12 rounded-[3rem] shadow-2xl relative border-4 border-brand-primary flex flex-col justify-center items-center py-24 min-h-[400px]">
                <Image src="/images/logos/principal/LOGO PRINCIPAL BRUJULA SVG_1.svg" alt="Brújula" width={400} height={200} className="w-80 h-auto group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_22.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border-t-[12px] border-brand-primary hover:-translate-y-2 transition-transform">
              <h3 className="font-title text-4xl text-brand-primary mb-6 flex items-center gap-4">
                <div className="p-3 bg-brand-primary rounded-2xl">
                  <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="Misión" width={40} height={40} className="w-10 h-10" />
                </div>
                Nuestra misión
              </h3>
              <p className="text-foreground/80 text-xl mb-6 font-medium leading-relaxed">
                Ayudar a marcas y emprendimientos a comunicar sus ideas a través del diseño, la creatividad y la presencia digital.
              </p>
              <p className="text-foreground/80 text-xl font-medium leading-relaxed">
                Buscamos desarrollar soluciones que permitan transmitir mejor cada proyecto, fortaleciendo su identidad y conexión con su audiencia.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border-t-[12px] border-brand-accent hover:-translate-y-2 transition-transform">
              <h3 className="font-title text-4xl text-brand-primary mb-6 flex items-center gap-4">
                <div className="p-3 bg-brand-accent rounded-2xl">
                  <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_2.svg" alt="Visión" width={40} height={40} className="w-10 h-10" />
                </div>
                Nuestra visión
              </h3>
              <p className="text-foreground/80 text-xl mb-6 font-medium leading-relaxed">
                Convertirnos en una agencia creativa reconocida a nivel nacional por su cercanía, compromiso y pasión por ayudar a otras marcas a desarrollar su potencial.
              </p>
              <p className="text-foreground/80 text-xl font-medium leading-relaxed">
                Queremos seguir creciendo junto a proyectos que valoren el diseño, la creatividad y la comunicación como herramientas para diferenciarse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4 animate-spin-slow">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_17.svg" alt="Deco" width={600} height={600} />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="font-title text-6xl text-center text-brand-primary mb-20 drop-shadow-sm">Nuestros valores</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-brand-light flex items-center justify-center text-brand-primary font-title text-5xl border-4 border-brand-primary shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">1</div>
              <div>
                <h4 className="font-title text-4xl text-brand-primary mb-4">Cercanía</h4>
                <p className="text-xl text-foreground/80 font-medium leading-relaxed">Creemos en la confianza, la comunicación abierta y el trabajo en equipo.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-brand-light flex items-center justify-center text-brand-primary font-title text-5xl border-4 border-brand-primary shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">2</div>
              <div>
                <h4 className="font-title text-4xl text-brand-primary mb-4">Creatividad</h4>
                <p className="text-xl text-foreground/80 font-medium leading-relaxed">Buscamos soluciones que reflejen la esencia de cada proyecto.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-brand-light flex items-center justify-center text-brand-primary font-title text-5xl border-4 border-brand-primary shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">3</div>
              <div>
                <h4 className="font-title text-4xl text-brand-primary mb-4">Colaboración</h4>
                <p className="text-xl text-foreground/80 font-medium leading-relaxed">Las mejores ideas nacen cuando clientes y el equipo trabajan en una misma dirección.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-brand-light flex items-center justify-center text-brand-primary font-title text-5xl border-4 border-brand-primary shadow-lg group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">4</div>
              <div>
                <h4 className="font-title text-4xl text-brand-primary mb-4">Compromiso</h4>
                <p className="text-xl text-foreground/80 font-medium leading-relaxed">Nos involucramos en cada proyecto con responsabilidad, dedicación y atención a los detalles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
