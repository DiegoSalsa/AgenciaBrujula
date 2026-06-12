import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosistema Digital de Agencia Brújula | Marketing & Desarrollo",
  description: "Conoce nuestro ecosistema digital de especialistas. Como agencia de marketing en Concepción, nos asociamos con PuroCode para ofrecerte resultados digitales reales.",
  openGraph: {
    title: "Ecosistema Digital | Agencia Brújula & PuroCode",
    description: "Colaboración estratégica entre expertos en marketing y desarrollo web profesional.",
    url: "https://agenciabrujula.com/ecosistema-digital",
    siteName: "Agencia Brújula",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosistema Digital | Agencia Brújula",
    description: "El marketing y la tecnología trabajan de la mano para potenciar tu crecimiento digital.",
  },
  alternates: {
    canonical: "https://agenciabrujula.com/ecosistema-digital",
  },
};

export default function EcosistemaDigital() {
  return (
    <div className="flex flex-col pb-0">
      {/* Schema JSON-LD de Colaboración */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Agencia Brújula",
            "url": "https://agenciabrujula.com",
            "description": "Agencia de marketing digital en Concepción especializada en estrategia de atracción.",
            "knowsAbout": ["Marketing Digital", "Gestión de Redes Sociales", "Estrategia de Crecimiento"],
            "parentOrganization": null,
            "partner": {
              "@type": "Organization",
              "name": "PuroCode",
              "url": "https://www.purocode.com",
              "description": "Agencia de desarrollo web y software a medida.",
              "knowsAbout": ["Desarrollo Web", "E-commerce", "SaaS"]
            }
          })
        }}
      />
      {/* Hero Section */}
      <section className="bg-brand-primary pt-24 md:pt-32 pb-16 md:pb-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_21.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-8 text-brand-accent drop-shadow-md">
            El crecimiento digital necesita una base sólida
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-brand-light font-medium leading-relaxed">
            Como <strong>agencia de marketing digital en Concepción</strong>, te ayudamos a generar alcance real, pero sabemos que para maximizar resultados requieres una infraestructura técnica profesional.
          </p>
        </div>
      </section>

      {/* Sección 1: Qué hace Agencia Brújula */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-20 right-10 opacity-10 animate-float pointer-events-none hidden md:block">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_5.svg" alt="" width={200} height={200} />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute inset-0 bg-brand-primary rounded-[2rem] md:rounded-[3rem] transform -rotate-3 md:-rotate-6 group-hover:-rotate-12 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-brand-light rounded-[2rem] md:rounded-[3rem] transform rotate-2 md:rotate-3 group-hover:rotate-6 transition-transform duration-500 delay-75"></div>
              <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative border-4 border-brand-primary flex flex-col justify-center items-center min-h-[300px] md:min-h-[400px]">
                 <Image src="/images/logos/principal/LOGO PRINCIPAL BRUJULA SVG_1.svg" alt="Brújula" width={300} height={150} className="w-48 sm:w-56 md:w-72 h-auto group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-brand-accent font-bold mb-2 uppercase tracking-wider text-sm">
                Marketing y Atracción
              </p>
              <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-6 md:mb-8 leading-tight">
                Qué hacemos en Agencia Brújula
              </h2>
              <div className="space-y-4 text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                <p>
                  Nuestro núcleo de negocio es la estrategia de atracción y el crecimiento de audiencias a través de <Link href="/servicios" className="text-brand-accent hover:underline font-bold" aria-label="Ver nuestros servicios de marketing">nuestros servicios especializados</Link>. Nos dedicamos a conseguir que tu marca conecte con las personas correctas en la región del Biobío y todo Chile.
                </p>
                <ul className="space-y-4 mt-8 font-title text-xl text-brand-primary">
                  <li className="flex items-center gap-4"><Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="*" width={24} height={24} className="w-6 h-6" /> Marketing Digital Estratégico</li>
                  <li className="flex items-center gap-4"><Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="*" width={24} height={24} className="w-6 h-6" /> Gestión de Redes Sociales</li>
                  <li className="flex items-center gap-4"><Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="*" width={24} height={24} className="w-6 h-6" /> Creación de Contenido (Reels y Posts)</li>
                  <li className="flex items-center gap-4"><Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="*" width={24} height={24} className="w-6 h-6" /> Publicidad Digital (Ads)</li>
                  <li className="flex items-center gap-4"><Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="*" width={24} height={24} className="w-6 h-6" /> Posicionamiento de Marca</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2 y 3: Cuando un proyecto necesita más & Especialistas Complementarios */}
      <section className="py-16 md:py-24 bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_22.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-6 md:mb-10 drop-shadow-sm">
            Cuando un proyecto necesita más
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium mb-12">
            Comprendemos que las campañas de marketing más exitosas necesitan una superficie digital robusta donde aterrizar. Algunos clientes requieren <strong>sitios web profesionales, ecommerce, plataformas digitales o sistemas personalizados</strong> para potenciar realmente los resultados de sus campañas.
          </p>
          
          <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border-t-[8px] md:border-t-[12px] border-brand-accent max-w-4xl mx-auto transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-title text-2xl sm:text-3xl md:text-4xl text-brand-primary mb-6">Especialistas Complementarios</h3>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed font-medium mb-8">
              Para proyectos que exigen un desarrollo web avanzado, arquitecturas de ecommerce o software personalizado, colaboramos estrechamente con especialistas externos. Esto nos permite ampliar nuestras capacidades ofreciéndote soluciones integrales sin perder de vista el enfoque en lo que mejor hacemos: <strong>el marketing y el crecimiento de tu marca</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 4: PuroCode */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1 bg-brand-primary rounded-[3rem] p-10 md:p-14 text-white text-center relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none translate-x-1/4 -translate-y-1/4 w-[150%] h-[150%]">
                 <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_17.svg" alt="Pattern" layout="fill" objectFit="contain" />
              </div>
              <div className="inline-flex justify-center items-center mb-8 relative z-10">
                <Image src="/logo_blanco.svg" alt="PuroCode" width={160} height={160} className="w-32 md:w-40 h-auto" />
              </div>
              <p className="text-white text-lg font-medium mb-10 relative z-10 max-w-xs mx-auto leading-tight">
                Nuestro partner estratégico y especialistas en ingeniería de software.
              </p>
              <ul className="space-y-5 mb-14 text-base font-bold text-white text-left w-fit mx-auto relative z-10">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Desarrollo Web Premium</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> E-commerce Escalables</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Software a Medida</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Plataformas SaaS</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Optimización Técnica de Sitios</li>
              </ul>
              <div className="relative z-10 flex flex-col items-center gap-4">
                <a 
                  href="https://www.purocode.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-brand-accent text-brand-primary px-8 py-3 rounded-full font-bold text-base hover:bg-white transition-colors"
                  aria-label="Sitio web de nuestro partner tecnológico PuroCode"
                >
                  Visitar PuroCode
                </a>
                <a 
                  href="https://www.purocode.com/ecosistema-digital" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs sm:text-sm text-brand-light/80 hover:text-white underline underline-offset-4 font-medium transition-colors"
                >
                  Conoce cómo funciona esta colaboración desde PuroCode
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-brand-accent font-bold mb-2 uppercase tracking-wider text-sm">
                Desarrollo y Tecnología
              </p>
              <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-6 md:mb-8 leading-tight">
                Ingeniería para el crecimiento
              </h2>
              <div className="space-y-6 text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                <p>
                  PuroCode construye el motor tecnológico de tu negocio digital. Mientras nosotros impulsamos el tráfico y diseñamos estrategias visuales, ellos se aseguran de que tu plataforma no falle, sea ultrarrápida y brinde una experiencia fluida a cada usuario.
                </p>
                <div className="bg-white p-6 md:p-8 rounded-[1.5rem] border-l-8 border-brand-primary shadow-sm mt-6">
                  <p className="font-bold text-brand-primary text-lg md:text-xl italic flex gap-4 items-start">
                    <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="*" width={24} height={24} className="w-6 h-6 mt-1 flex-shrink-0" />
                    Ambas empresas mantienen independencia operativa absoluta. Cada quien en lo suyo, colaborando para que tu proyecto sobresalga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Cómo trabajamos (Flujo visual) */}
      <section className="py-16 md:py-24 bg-brand-light/30 border-y border-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-12 md:mb-16">
            Cómo trabajamos en ecosistema
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-5xl mx-auto pt-10">
            {/* Cliente */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-brand-light w-full md:w-[280px] h-[280px] flex flex-col items-center justify-center relative">
              <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mb-6 font-bold text-2xl font-title">
                 1
              </div>
              <h4 className="font-title text-2xl text-brand-primary mb-3">Cliente</h4>
              <p className="text-foreground/70 font-medium text-sm md:text-base leading-tight max-w-[200px]">Lidera el rumbo y los objetivos del negocio.</p>
            </div>

            <div className="hidden md:block text-brand-primary/60 text-3xl font-light">→</div>
            <div className="md:hidden text-brand-primary/60 text-3xl font-light transform rotate-90">→</div>

            {/* Agencia Brújula */}
            <div className="bg-brand-primary text-white p-8 rounded-[2rem] shadow-xl w-full md:w-[280px] h-[280px] flex flex-col items-center justify-center relative z-10 border border-brand-primary">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent rounded-full opacity-20 blur-3xl"></div>
              <div className="w-16 h-16 bg-brand-accent text-brand-primary rounded-full flex items-center justify-center mb-6 font-bold text-2xl font-title shadow-sm">
                 2
              </div>
              <h4 className="font-title text-2xl text-brand-accent mb-3 relative z-10">Agencia Brújula</h4>
              <p className="text-white font-medium text-sm md:text-base relative z-10 leading-tight max-w-[200px]">Estrategia, Tráfico, Redes y Branding.</p>
            </div>

            <div className="hidden md:flex flex-col items-center text-brand-primary/60 gap-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary text-center leading-tight">SI<br/>REQUIERE<br/>WEB</span>
              <span className="text-3xl font-light">→</span>
            </div>
            
            <div className="md:hidden flex flex-col items-center text-brand-primary/60 gap-1 my-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary text-center leading-tight">SI<br/>REQUIERE<br/>WEB</span>
              <span className="text-3xl font-light transform rotate-90">→</span>
            </div>

            {/* PuroCode */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-brand-accent w-full md:w-[280px] h-[280px] flex flex-col items-center justify-center relative">
              <div className="w-16 h-16 bg-brand-accent text-brand-primary rounded-full flex items-center justify-center mb-6 font-bold text-2xl font-title shadow-sm">
                 3
              </div>
              <h4 className="font-title text-2xl text-brand-primary mb-3">PuroCode</h4>
              <p className="text-foreground/70 font-medium text-sm md:text-base leading-tight max-w-[200px]">Plataforma, Ecommerce y Desarrollo Técnico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6: Beneficios para el cliente */}
      <section className="py-16 md:py-24 relative overflow-hidden">
         <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4 hidden md:block">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="Deco" width={400} height={400} />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-center text-brand-primary mb-12 md:mb-16">
            Beneficios del Ecosistema
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-[2rem] p-8 border-t-[8px] border-brand-primary shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <h4 className="font-title text-2xl text-brand-primary mb-4">
                Menos proveedores que coordinar
              </h4>
              <p className="text-foreground/80 font-medium text-lg">Centralizamos la comunicación para que tus estrategias de marketing y tu infraestructura técnica converjan de forma natural sin correos cruzados ni fricciones.</p>
            </div>
            
            <div className="bg-white rounded-[2rem] p-8 border-t-[8px] border-brand-accent shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <h4 className="font-title text-2xl text-brand-primary mb-4">
                Especialistas reales en cada área
              </h4>
              <p className="text-foreground/80 font-medium text-lg">Evitamos el síndrome de la agencia "todoterreno". Tendrás a marketers profesionales ejecutando tus campañas, y a ingenieros de software construyendo tu web.</p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border-t-[8px] border-brand-accent shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <h4 className="font-title text-2xl text-brand-primary mb-4">
                Estrategias alineadas
              </h4>
              <p className="text-foreground/80 font-medium text-lg">Garantizamos una continuidad perfecta entre lo que prometes en la publicidad y la experiencia funcional que encuentran tus usuarios en el ecosistema digital.</p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border-t-[8px] border-brand-primary shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <h4 className="font-title text-2xl text-brand-primary mb-4">
                Implementaciones más eficientes
              </h4>
              <p className="text-foreground/80 font-medium text-lg">Como equipos que ya conocen sus procesos colaborativos, se reduce drásticamente el tiempo de implementación y los riesgos de incompatibilidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Final de CTA */}
      <section className="py-16 md:py-24 bg-brand-primary text-white text-center relative overflow-hidden mt-12 md:mt-24 border-y-8 border-brand-accent">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_22.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="font-title text-3xl md:text-4xl lg:text-5xl mb-6 text-brand-accent drop-shadow-sm">
            ¿Necesitas marketing, desarrollo web o ambas cosas?
          </h2>
          <p className="text-lg md:text-xl font-medium text-brand-light mb-10">
            Cuéntanos sobre tu negocio y te orientaremos con el especialista adecuado de nuestro ecosistema para llevar tu proyecto al siguiente nivel.
          </p>
          <Link href="/contacto" className="inline-block bg-white text-brand-primary px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
            Hablemos de tu proyecto
          </Link>
        </div>
      </section>
    </div>
  );
}
