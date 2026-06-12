import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Marketing y Diseño Gráfico en Concepción | Agencia Brújula",
  description: "Conoce nuestros servicios de diseño gráfico, branding, redes sociales y marketing digital en Concepción. Soluciones a medida para hacer crecer tu marca.",
  alternates: {
    canonical: "https://agenciabrujula.com/servicios",
  },
};

export default function Servicios() {
  return (
    <div className="flex flex-col pb-0">
      <section className="bg-brand-primary pt-24 md:pt-32 pb-16 md:pb-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_21.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-20 animate-spin-slow pointer-events-none hidden md:block">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_17.svg" alt="" width={600} height={600} className="w-96 h-auto" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-8 text-brand-accent drop-shadow-lg">Servicios Brújula</h1>
          <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto text-brand-light mb-4 md:mb-8 font-medium">
            Soluciones creativas para marcas que buscan crecer en el mundo digital.
          </p>
          <div className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-white/90 font-medium leading-relaxed space-y-4 md:space-y-6">
            <p>
              En Agencia Brújula trabajamos a través de servicios de:
            </p>
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-brand-accent mb-4 md:mb-6 font-bold text-base sm:text-lg md:text-xl">
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
      <section id="planes-brujula" className="py-16 md:py-32 bg-brand-light/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-10 pointer-events-none hidden md:block">
           <Image src="/images/elements/FONDO/GRAFICOS SVG FONDO_19.svg" alt="Pattern" width={800} height={800} />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-4 md:mb-8">Planes Brújula</h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto font-medium leading-relaxed">
              Cada marca tiene objetivos, desafíos y ritmos diferentes. Por eso desarrollamos distintos planes pensados para acompañar a emprendimientos, negocios y proyectos en distintas etapas de crecimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Plan Norte */}
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-xl border-2 border-brand-light hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-3 bg-brand-primary group-hover:h-4 transition-all"></div>
              <h3 className="font-title text-3xl md:text-4xl text-brand-primary mb-4 md:mb-6 mt-4">Plan Norte</h3>
              <p className="text-foreground/70 mb-8 md:mb-10 flex-grow text-base md:text-lg font-medium leading-relaxed">
                Pensado para marcas personales, creadores de contenido y emprendimientos en etapa inicial.
              </p>
              <Link href="/contacto?plan=norte" className="block text-center bg-brand-light text-brand-primary font-bold py-3 md:py-4 rounded-full hover:bg-brand-primary hover:text-white transition-colors text-base md:text-lg">
                Solicitar información
              </Link>
            </div>

            {/* Plan Sur */}
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-xl border-2 border-brand-light hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-3 bg-brand-secondary group-hover:h-4 transition-all"></div>
              <h3 className="font-title text-3xl md:text-4xl text-brand-primary mb-4 md:mb-6 mt-4">Plan Sur</h3>
              <p className="text-foreground/70 mb-8 md:mb-10 flex-grow text-base md:text-lg font-medium leading-relaxed">
                Pensado para microempresas y pymes que buscan profesionalizar su presencia digital.
              </p>
              <Link href="/contacto?plan=sur" className="block text-center bg-brand-light text-brand-primary font-bold py-3 md:py-4 rounded-full hover:bg-brand-secondary hover:text-white transition-colors text-base md:text-lg">
                Solicitar información
              </Link>
            </div>

            {/* Plan Este */}
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-xl border-2 border-brand-light hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-3 bg-brand-muted group-hover:h-4 transition-all"></div>
              <h3 className="font-title text-3xl md:text-4xl text-brand-primary mb-4 md:mb-6 mt-4">Plan Este</h3>
              <p className="text-foreground/70 mb-8 md:mb-10 flex-grow text-base md:text-lg font-medium leading-relaxed">
                Pensado para empresas que buscan consolidar su presencia digital.
              </p>
              <Link href="/contacto?plan=este" className="block text-center bg-brand-light text-brand-primary font-bold py-3 md:py-4 rounded-full hover:bg-brand-muted hover:text-white transition-colors text-base md:text-lg">
                Solicitar información
              </Link>
            </div>

            {/* Plan Oeste */}
            <div className="bg-brand-primary text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-xl hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(85,18,115,0.5)] transition-all duration-300 relative overflow-hidden flex flex-col h-full group">
              <div className="absolute top-0 left-0 w-full h-3 bg-brand-accent group-hover:h-4 transition-all"></div>
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-150 transition-transform duration-700">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="" width={200} height={200} />
              </div>
              <h3 className="font-title text-3xl md:text-4xl text-brand-accent mb-4 md:mb-6 mt-4 relative z-10">Plan Oeste<br/>Personalizado</h3>
              <p className="text-brand-light mb-8 md:mb-10 flex-grow text-base md:text-lg font-medium leading-relaxed relative z-10">
                ¿Ningún plan se ajusta a lo que necesitas? Creamos uno a tu medida.
              </p>
              <Link href="/contacto?plan=oeste" className="block text-center bg-brand-accent text-brand-primary font-bold py-3 md:py-4 rounded-full hover:bg-white transition-colors text-base md:text-lg relative z-10 shadow-lg shadow-brand-accent/30">
                Solicitar información
              </Link>
            </div>
          </div>
          
          <div className="mt-10 md:mt-20 text-center text-lg sm:text-xl md:text-2xl text-brand-primary font-bold bg-white w-full px-6 sm:px-8 md:px-12 py-6 md:py-8 rounded-[2rem] md:rounded-full shadow-md border-2 border-brand-light relative">
            <span className="relative z-10">Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la mejor alternativa.</span>
          </div>
        </div>
      </section>

      {/* Servicios Individuales */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_23.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            
            {/* Redes Sociales */}
            <div id="redes-sociales" className="bg-brand-light/30 rounded-[2rem] md:rounded-[4rem] p-8 sm:p-10 md:p-16 border-4 border-brand-light relative hover:shadow-2xl transition-all duration-500 bg-white/60 backdrop-blur-sm scroll-mt-24">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-primary rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-6 md:mb-10 shadow-lg transform -rotate-6 hover:rotate-0 transition-transform">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_4.svg" alt="Icon" width={50} height={50} className="w-8 md:w-auto filter brightness-0 invert" />
              </div>
              <h3 className="font-title text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-4 md:mb-6">Redes Sociales</h3>
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 md:mb-10 font-medium">
                Servicios orientados a la creación y adaptación de contenido digital.
              </p>
              <h4 className="font-bold text-brand-primary mb-4 md:mb-6 text-xl md:text-2xl">Algunos servicios:</h4>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12 text-foreground/80 text-base sm:text-lg md:text-xl font-medium">
                <li className="flex items-center gap-3 md:gap-4"><span className="text-brand-accent text-2xl md:text-3xl">★</span> Diseño de post (publicaciones)</li>
                <li className="flex items-center gap-3 md:gap-4"><span className="text-brand-accent text-2xl md:text-3xl">★</span> Historias</li>
                <li className="flex items-center gap-3 md:gap-4"><span className="text-brand-accent text-2xl md:text-3xl">★</span> Carruseles</li>
                <li className="flex items-center gap-3 md:gap-4"><span className="text-brand-accent text-2xl md:text-3xl">★</span> Reels</li>
                <li className="flex items-center gap-3 md:gap-4"><span className="text-brand-accent text-2xl md:text-3xl">★</span> Community Manager</li>
              </ul>
              <Link href="/contacto" className="inline-block bg-brand-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-lg text-base md:text-lg hover:scale-105">
                Solicitar información
              </Link>
            </div>

            {/* Diseño Gráfico */}
            <div id="diseno-grafico" className="bg-brand-light/30 rounded-[2rem] md:rounded-[4rem] p-8 sm:p-10 md:p-16 border-4 border-brand-light relative hover:shadow-2xl transition-all duration-500 bg-white/60 backdrop-blur-sm mt-0 md:mt-20 scroll-mt-24">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-primary rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-6 md:mb-10 shadow-lg transform rotate-6 hover:rotate-0 transition-transform">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_2.svg" alt="Icon" width={50} height={50} className="w-8 md:w-auto filter brightness-0 invert" />
              </div>
              <h3 className="font-title text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-4 md:mb-6">Diseño Gráfico</h3>
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 md:mb-10 font-medium">
                Servicios enfocados en la identidad visual y piezas gráficas para construir una imagen coherente y profesional.
              </p>
              
              <h4 className="font-bold text-brand-primary mb-4 md:mb-6 text-xl md:text-2xl">Identidad de marca:</h4>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-foreground/80 text-base sm:text-lg md:text-xl font-medium">
                <li className="flex items-center gap-3 md:gap-4"><span className="text-brand-secondary text-xl md:text-2xl">✦</span> Branding básico y completo</li>
                <li className="flex items-center gap-3 md:gap-4"><span className="text-brand-secondary text-xl md:text-2xl">✦</span> Rediseño de marca</li>
                <li className="flex items-center gap-3 md:gap-4"><span className="text-brand-secondary text-xl md:text-2xl">✦</span> Manual de marca</li>
              </ul>
              
              <h4 className="font-bold text-brand-primary mb-2 text-xl md:text-2xl">Piezas gráficas:</h4>
              <p className="text-foreground/80 text-base md:text-lg mb-4 font-medium">Diseñamos material visual para apoyar la comunicación y promoción de marcas, emprendimientos y proyectos.</p>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12 text-foreground/80 text-base sm:text-lg md:text-xl font-medium">
                <li className="flex items-center gap-3 md:gap-4"><span className="text-brand-secondary text-xl md:text-2xl">✦</span> Tarjetas de presentación</li>
                <li className="flex items-center gap-3 md:gap-4"><span className="text-brand-secondary text-xl md:text-2xl">✦</span> Flyers, afiches, brochure, trípticos</li>
              </ul>
              
              <Link href="/contacto" className="inline-block bg-brand-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-brand-secondary transition-all shadow-lg text-base md:text-lg hover:scale-105">
                Solicitar información
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Banner Ecosistema */}
      <section className="py-12 md:py-16 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_21.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h3 className="font-title text-2xl sm:text-3xl md:text-4xl text-brand-accent mb-4">
            ¿Necesitas una página web profesional para respaldar tu estrategia digital?
          </h3>
          <p className="text-brand-light text-lg md:text-xl font-medium mb-8">
            Conoce nuestro ecosistema de colaboradores y descubre cómo integramos el marketing con la mejor tecnología.
          </p>
          <Link href="/ecosistema-digital" className="inline-block bg-white text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-accent transition-colors shadow-lg text-base md:text-lg hover:scale-105">
            Ver Ecosistema Digital
          </Link>
        </div>
      </section>

      {/* SEO Oculto (Screen Readers & Search Engines) */}
      <div className="sr-only">
        <h2>Servicios completos de marketing digital y diseño gráfico en Concepción</h2>
        <p>
          En Agencia Brújula, ofrecemos una amplia gama de servicios de marketing digital en Concepción diseñados específicamente para resolver las necesidades comunicacionales de marcas y empresas actuales. Entendemos que el diseño gráfico publicitario y el branding corporativo son los pilares fundamentales para establecer una identidad visual potente, capaz de generar confianza inmediata en tus clientes. Ya sea que busques diseño de logotipos, manual de marca, papelería corporativa o un rediseño completo de identidad, nuestros servicios de diseño gráfico en Concepción están pensados para capturar la esencia única de tu negocio.
        </p>
        <p>
          Además del diseño visual, el éxito en el mundo digital requiere estrategias probadas y constancia. Nuestro equipo de expertas ofrece servicios integrales de manejo de redes sociales en Concepción, actuando como tu propio Community Manager dedicado. Desarrollamos contenido de alto valor interactivo, desde la creación de reels y carruseles atractivos hasta el diseño estratégico de posts para Instagram y LinkedIn. El marketing digital moderno no se trata solo de publicar, sino de interactuar y crear comunidad, por lo que nuestros planes de marketing en Chile abarcan todo el espectro de la gestión de redes sociales.
        </p>
        <p>
          Sabemos que cada cliente se encuentra en una etapa diferente, por lo que hemos estructurado los Planes Brújula (Plan Norte, Plan Sur, Plan Este y Planes Personalizados) que se ajustan a distintos presupuestos y objetivos comerciales. Al buscar agencias de marketing digital en Concepción que ofrezcan un catálogo integral que combine branding, creatividad visual y manejo de RRSS con resultados medibles, Agencia Brújula es la alternativa líder. Contáctanos para conocer más sobre nuestro catálogo de servicios de diseño gráfico, identidad de marca y posicionamiento digital, e invierte en el crecimiento sostenido de tu empresa.
        </p>
      </div>
    </div>
  );
}
