import Link from "next/link";
import Image from "next/image";

export default function Servicios() {
  return (
    <div className="flex flex-col pb-24">
      <section className="bg-brand-primary pt-32 pb-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_21.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-20 animate-spin-slow pointer-events-none">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_17.svg" alt="" width={600} height={600} className="w-96 h-auto" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-title text-6xl md:text-7xl mb-8 text-brand-accent drop-shadow-lg">Servicios Brújula</h1>
          <p className="text-3xl max-w-4xl mx-auto text-brand-light mb-8 font-medium">
            Soluciones creativas para marcas que buscan crecer en el mundo digital.
          </p>
          <div className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 font-medium leading-relaxed space-y-6">
            <p>
              En Agencia Brújula trabajamos a través de servicios de:
            </p>
            <ul className="flex flex-wrap justify-center gap-4 text-brand-accent mb-6 font-bold text-xl">
              <li>✦ Diseño gráfico</li>
              <li>✦ Branding e identidad visual</li>
              <li>✦ Gestión de redes sociales</li>
              <li>✦ Marketing y presencia digital</li>
            </ul>
            <p>
              Para adaptarnos a las necesidades de cada proyecto, contamos con distintos planes de trabajo y también servicios complementarios que pueden contratarse de forma individual.
            </p>
          </div>
        </div>
      </section>

      {/* Planes Brújula */}
      <section className="py-32 bg-brand-light/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-10 pointer-events-none">
           <Image src="/images/elements/FONDO/GRAFICOS SVG FONDO_19.svg" alt="Pattern" width={800} height={800} />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-title text-5xl md:text-6xl text-brand-primary mb-8">Planes Brújula</h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto font-medium leading-relaxed">
              Cada marca tiene objetivos, desafíos y ritmos diferentes. Por eso desarrollamos distintos planes pensados para acompañar a emprendimientos, negocios y proyectos en distintas etapas de crecimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Plan Norte */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border-2 border-brand-light hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-3 bg-brand-primary group-hover:h-4 transition-all"></div>
              <h3 className="font-title text-4xl text-brand-primary mb-6 mt-4">Plan Norte</h3>
              <p className="text-foreground/70 mb-10 flex-grow text-lg font-medium leading-relaxed">
                Pensado para marcas personales, creadores de contenido y emprendimientos en etapa inicial.
              </p>
              <Link href="/contacto" className="block text-center bg-brand-light text-brand-primary font-bold py-4 rounded-full hover:bg-brand-primary hover:text-white transition-colors text-lg">
                Solicitar información
              </Link>
            </div>

            {/* Plan Sur */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border-2 border-brand-light hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-3 bg-brand-secondary group-hover:h-4 transition-all"></div>
              <h3 className="font-title text-4xl text-brand-primary mb-6 mt-4">Plan Sur</h3>
              <p className="text-foreground/70 mb-10 flex-grow text-lg font-medium leading-relaxed">
                Pensado para microempresas y pymes que buscan profesionalizar su presencia digital.
              </p>
              <Link href="/contacto" className="block text-center bg-brand-light text-brand-primary font-bold py-4 rounded-full hover:bg-brand-secondary hover:text-white transition-colors text-lg">
                Solicitar información
              </Link>
            </div>

            {/* Plan Este */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border-2 border-brand-light hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-3 bg-brand-muted group-hover:h-4 transition-all"></div>
              <h3 className="font-title text-4xl text-brand-primary mb-6 mt-4">Plan Este</h3>
              <p className="text-foreground/70 mb-10 flex-grow text-lg font-medium leading-relaxed">
                Pensado para empresas que buscan consolidar su presencia digital.
              </p>
              <Link href="/contacto" className="block text-center bg-brand-light text-brand-primary font-bold py-4 rounded-full hover:bg-brand-muted hover:text-white transition-colors text-lg">
                Solicitar información
              </Link>
            </div>

            {/* Plan Oeste */}
            <div className="bg-brand-primary text-white rounded-[2.5rem] p-10 shadow-xl hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(85,18,115,0.5)] transition-all duration-300 relative overflow-hidden flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-3 bg-brand-accent group-hover:h-4 transition-all"></div>
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-150 transition-transform duration-700">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="" width={200} height={200} />
              </div>
              <h3 className="font-title text-4xl text-brand-accent mb-6 mt-4 relative z-10">Plan Oeste<br/>Personalizado</h3>
              <p className="text-brand-light mb-10 flex-grow text-lg font-medium leading-relaxed relative z-10">
                ¿Ningún plan se ajusta a lo que necesitas? Creamos uno a tu medida.
              </p>
              <Link href="/contacto" className="block text-center bg-brand-accent text-brand-primary font-bold py-4 rounded-full hover:bg-white transition-colors text-lg relative z-10 shadow-lg shadow-brand-accent/30">
                Solicitar información
              </Link>
            </div>
          </div>
          
          <div className="mt-20 text-center text-2xl text-brand-primary font-bold bg-white w-full px-12 py-8 rounded-full shadow-md border-2 border-brand-light relative">
            <span className="relative z-10">Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la mejor alternativa.</span>
          </div>
        </div>
      </section>

      {/* Servicios Individuales */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_23.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            
            {/* Redes Sociales */}
            <div className="bg-brand-light/30 rounded-[4rem] p-16 border-4 border-brand-light relative hover:shadow-2xl transition-all duration-500 bg-white/60 backdrop-blur-sm">
              <div className="w-24 h-24 bg-brand-primary rounded-[2rem] flex items-center justify-center mb-10 shadow-lg transform -rotate-6 hover:rotate-0 transition-transform">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_4.svg" alt="Icon" width={50} height={50} className="filter brightness-0 invert" />
              </div>
              <h3 className="font-title text-5xl text-brand-primary mb-6">Redes Sociales</h3>
              <p className="text-xl text-foreground/80 mb-10 font-medium">
                Servicios orientados a la creación y adaptación de contenido digital.
              </p>
              <h4 className="font-bold text-brand-primary mb-6 text-2xl">Algunos servicios:</h4>
              <ul className="space-y-4 mb-12 text-foreground/80 text-xl font-medium">
                <li className="flex items-center gap-4"><span className="text-brand-accent text-3xl">★</span> Diseño de post (publicaciones)</li>
                <li className="flex items-center gap-4"><span className="text-brand-accent text-3xl">★</span> Historias</li>
                <li className="flex items-center gap-4"><span className="text-brand-accent text-3xl">★</span> Carruseles</li>
                <li className="flex items-center gap-4"><span className="text-brand-accent text-3xl">★</span> Reels</li>
                <li className="flex items-center gap-4"><span className="text-brand-accent text-3xl">★</span> Community Manager</li>
              </ul>
              <Link href="/contacto" className="inline-block bg-brand-primary text-white px-10 py-5 rounded-full font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-lg text-lg hover:scale-105">
                Solicitar información
              </Link>
            </div>

            {/* Diseño Gráfico */}
            <div className="bg-brand-light/30 rounded-[4rem] p-16 border-4 border-brand-light relative hover:shadow-2xl transition-all duration-500 bg-white/60 backdrop-blur-sm mt-10 md:mt-20">
              <div className="w-24 h-24 bg-brand-primary rounded-[2rem] flex items-center justify-center mb-10 shadow-lg transform rotate-6 hover:rotate-0 transition-transform">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_2.svg" alt="Icon" width={50} height={50} className="filter brightness-0 invert" />
              </div>
              <h3 className="font-title text-5xl text-brand-primary mb-6">Diseño Gráfico</h3>
              <p className="text-xl text-foreground/80 mb-10 font-medium">
                Servicios enfocados en la identidad visual y piezas gráficas para construir una imagen coherente y profesional.
              </p>
              
              <h4 className="font-bold text-brand-primary mb-6 text-2xl">Identidad de marca:</h4>
              <ul className="space-y-4 mb-8 text-foreground/80 text-xl font-medium">
                <li className="flex items-center gap-4"><span className="text-brand-secondary text-2xl">✦</span> Branding básico y completo</li>
                <li className="flex items-center gap-4"><span className="text-brand-secondary text-2xl">✦</span> Rediseño de marca</li>
                <li className="flex items-center gap-4"><span className="text-brand-secondary text-2xl">✦</span> Manual de marca</li>
              </ul>
              
              <h4 className="font-bold text-brand-primary mb-2 text-2xl">Piezas gráficas:</h4>
              <p className="text-foreground/80 text-lg mb-4 font-medium">Diseñamos material visual para apoyar la comunicación y promoción de marcas, emprendimientos y proyectos.</p>
              <ul className="space-y-4 mb-12 text-foreground/80 text-xl font-medium">
                <li className="flex items-center gap-4"><span className="text-brand-secondary text-2xl">✦</span> Tarjetas de presentación</li>
                <li className="flex items-center gap-4"><span className="text-brand-secondary text-2xl">✦</span> Flyers, afiches, brochure, trípticos</li>
              </ul>
              
              <Link href="/contacto" className="inline-block bg-brand-primary text-white px-10 py-5 rounded-full font-bold hover:bg-brand-secondary transition-all shadow-lg text-lg hover:scale-105">
                Solicitar información
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
