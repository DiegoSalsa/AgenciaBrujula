import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-primary pt-32 pb-40">
        {/* Massive Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_21.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="absolute top-10 right-10 opacity-40 animate-spin-slow pointer-events-none">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_3.svg" alt="Star" width={150} height={150} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-40 animate-float pointer-events-none">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_5.svg" alt="Element" width={120} height={120} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-title text-6xl md:text-8xl text-brand-light mb-8 leading-tight drop-shadow-lg">
              Tu brújula en el <br/><span className="text-brand-accent">mundo digital.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-12 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Diseño, branding, redes sociales y marketing digital para marcas que buscan crecer y conectar.
            </p>
            <div className="flex justify-center gap-6 mt-12">
              <Link href="/contacto" className="bg-brand-accent hover:bg-white text-brand-primary px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_40px_rgba(243,185,0,0.4)] hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] flex items-center gap-2">
                ¿Le damos dirección a tu marca? <span className="text-3xl ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 opacity-10 rotate-45 pointer-events-none animate-pulse-slow">
           <Image src="/images/elements/FONDO/GRAFICOS SVG FONDO_19.svg" alt="Pattern" width={800} height={800} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="aspect-square bg-brand-accent rounded-[4rem] absolute inset-0 -rotate-6 transform scale-105 group-hover:rotate-0 transition-all duration-700"></div>
              <div className="aspect-square bg-brand-light rounded-[4rem] p-12 relative flex flex-wrap gap-12 items-center justify-center border-4 border-white shadow-2xl overflow-hidden">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_5.svg" alt="Element" width={140} height={140} className="w-32 h-auto animate-float" />
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_7.svg" alt="Element" width={140} height={140} className="w-32 h-auto hover:scale-125 transition-transform" />
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_9.svg" alt="Element" width={140} height={140} className="w-32 h-auto animate-spin-slow" />
              </div>
            </div>
            <div>
              <h2 className="font-title text-5xl md:text-6xl text-brand-primary mb-10 leading-tight">Nuestra Filosofía</h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed font-medium">
                Ayudamos a marcas, emprendimientos y proyectos a construir una presencia digital sólida a través del diseño, la creatividad y la estrategia.
              </p>
              <div className="pl-6 border-l-4 border-brand-accent mb-12">
                <p className="text-xl text-brand-primary/90 leading-relaxed italic">
                  Creemos que una marca no solo debe verse bien, sino que debe transmitir quién es, conectar con las personas correctas y avanzar con una dirección clara.
                </p>
              </div>
              <Link href="/sobre-nosotros" className="inline-block border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-white px-8 py-4 rounded-full transition-all text-lg group">
                Conoce más sobre nosotros <span className="inline-block transform group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Services Preview */}
      <section className="py-32 bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_23.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-title text-5xl md:text-7xl mb-20 text-brand-primary drop-shadow-sm">Encuentra tu dirección</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border-b-[8px] border-brand-primary hover:-translate-y-4 transition-transform group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="Deco" width={200} height={200} />
              </div>
              <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-accent transition-colors">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_2.svg" alt="Icon" width={80} height={80} className="w-16 h-16 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all" />
              </div>
              <h3 className="font-title text-3xl mb-6 text-brand-primary">Diseño Gráfico</h3>
              <p className="text-lg text-foreground/70 font-medium">Identidad visual y piezas gráficas que destacan por sí solas.</p>
            </div>
            
            <div className="bg-brand-primary p-12 rounded-[3rem] shadow-xl border-b-[8px] border-brand-accent hover:-translate-y-4 transition-transform group cursor-pointer relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="Deco" width={200} height={200} />
              </div>
              <div className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-accent transition-colors">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_4.svg" alt="Icon" width={80} height={80} className="w-16 h-16 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all filter brightness-0 invert" />
              </div>
              <h3 className="font-title text-3xl mb-6 text-brand-accent">Redes Sociales</h3>
              <p className="text-lg text-brand-light font-medium">Estrategia, diseño y gestión de contenido interactivo.</p>
            </div>
            
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border-b-[8px] border-brand-muted hover:-translate-y-4 transition-transform group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="Deco" width={200} height={200} />
              </div>
              <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-accent transition-colors">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_6.svg" alt="Icon" width={80} height={80} className="w-16 h-16 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all" />
              </div>
              <h3 className="font-title text-3xl mb-6 text-brand-primary">Planes Brújula</h3>
              <p className="text-lg text-foreground/70 font-medium">Acompañamos tu marca en cada etapa de crecimiento digital.</p>
            </div>
          </div>
          <div className="mt-20">
            <Link href="/servicios" className="inline-block bg-brand-primary text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl shadow-brand-primary/20 hover:bg-brand-accent hover:text-brand-primary hover:scale-105">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
