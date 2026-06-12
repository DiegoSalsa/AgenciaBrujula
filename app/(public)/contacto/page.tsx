import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaTiktok, FaBehance } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto Agencia Brújula | Marketing Digital Concepción",
  description: "Ponte en contacto con Agencia Brújula, tu agencia de diseño gráfico y marketing en Concepción. ¡Hablemos de tu próximo proyecto digital!",
  alternates: {
    canonical: "https://agenciabrujula.com/contacto",
  },
};

export default async function Contacto({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const params = await searchParams;
  const plan = params?.plan;

  let waMessage = "¡Hola! Vengo desde su página web y me gustaría recibir más información sobre Agencia Brújula.";
  let initialService = "";
  if (plan === "norte") {
    waMessage = "¡Hola! Vengo desde su página web y me gustaría solicitar información sobre el Plan Norte.";
    initialService = "plan-norte";
  } else if (plan === "sur") {
    waMessage = "¡Hola! Vengo desde su página web y me gustaría solicitar información sobre el Plan Sur.";
    initialService = "plan-sur";
  } else if (plan === "este") {
    waMessage = "¡Hola! Vengo desde su página web y me gustaría solicitar información sobre el Plan Este.";
    initialService = "plan-este";
  } else if (plan === "oeste") {
    waMessage = "¡Hola! Vengo desde su página web y me gustaría solicitar información sobre el Plan Oeste Personalizado.";
    initialService = "plan-oeste";
  }

  const waUrl = `https://wa.me/56990746646?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="flex flex-col pb-12 md:pb-24">
      <section className="bg-brand-primary pt-24 md:pt-32 pb-16 md:pb-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_21.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-30 animate-spin-slow hidden md:block">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_11.svg" alt="" width={600} height={600} className="w-[400px] lg:w-[600px] h-auto" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-8 text-brand-accent drop-shadow-md">¿Le damos dirección a tu marca?</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-brand-light font-medium leading-relaxed mb-2 md:mb-4">
            ¿Tienes una idea, emprendimiento o proyecto?
          </p>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-white font-medium leading-relaxed">
            Nos encantaría conocerte y ayudarte a encontrar la mejor dirección.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-5 pointer-events-none hidden md:block">
          <Image src="/images/elements/FONDO/GRAFICOS SVG FONDO_19.svg" alt="Pattern" width={800} height={800} />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="bg-white rounded-[2rem] md:rounded-[4rem] shadow-2xl border-4 border-brand-light p-6 sm:p-10 md:p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 opacity-5 pointer-events-none hidden md:block">
              <Image src="/images/logos/principal/ICONO PRINCIPAL BRUJULA SVG.svg" alt="" width={600} height={600} className="w-[600px] h-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 relative z-10 items-center">
              {/* Información Directa */}
              <div>
                <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-8 md:mb-12">Hablemos</h2>

                <div className="space-y-6 md:space-y-10">
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors shadow-md">
                      <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_4.svg" alt="Phone" width={30} height={30} className="w-6 h-6 md:w-8 md:h-8 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg md:text-xl text-brand-primary mb-1">WhatsApp</h4>
                      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-brand-accent transition-colors text-lg md:text-2xl font-medium">
                        (+56) 9 9074 6646
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors shadow-md">
                      <span className="font-title text-2xl md:text-4xl text-brand-primary group-hover:text-white transition-colors">@</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg md:text-xl text-brand-primary mb-1">Correo electrónico</h4>
                      <a href="mailto:brujulaequipo@gmail.com" className="text-foreground/80 hover:text-brand-accent transition-colors text-base sm:text-lg md:text-2xl font-medium break-all">
                        brujulaequipo@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 md:mt-16 pt-10 md:pt-16 border-t-4 border-brand-light">
                  <h4 className="font-bold text-xl md:text-2xl text-brand-primary mb-6 md:mb-8">Síguenos en redes sociales</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <a href="https://instagram.com/agenciabrujula.ccp" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-md text-base md:text-lg flex items-center gap-2">
                      <FaInstagram className="text-xl md:text-2xl" /> Instagram
                    </a>
                    <a href="https://linkedin.com/company/agencia-brujula" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-md text-base md:text-lg flex items-center gap-2">
                      <FaLinkedinIn className="text-xl md:text-2xl" /> LinkedIn
                    </a>
                    <a href="https://tiktok.com/@agenciabrujula.ccp" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-md text-base md:text-lg flex items-center gap-2">
                      <FaTiktok className="text-xl md:text-2xl" /> TikTok
                    </a>
                    <a href="https://behance.net/agenciabrujula" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-md text-base md:text-lg flex items-center gap-2">
                      <FaBehance className="text-xl md:text-2xl" /> Behance
                    </a>
                  </div>
                </div>
              </div>

              {/* Mensaje de cierre */}
              <div className="bg-brand-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-center text-center text-white relative overflow-hidden shadow-2xl min-h-[350px] md:min-h-[500px]">
                <div className="absolute top-0 right-0 p-4 opacity-20 animate-pulse-slow hidden sm:block">
                  <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="" width={150} height={150} className="w-24 md:w-32 h-auto" />
                </div>
                <div className="absolute bottom-0 left-0 p-4 opacity-20 rotate-180 animate-float hidden sm:block">
                  <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_5.svg" alt="" width={120} height={120} className="w-20 md:w-24 h-auto" />
                </div>

                <h3 className="font-title text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-8 text-brand-accent relative z-10 drop-shadow-md">Tu marca tiene algo que decir.</h3>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 relative z-10 font-medium text-brand-light leading-relaxed">Nosotros podemos ayudarte a comunicarlo y conectarlo con tu audiencia ideal.</p>

                <div className="relative z-10 mt-2 md:mt-4">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-accent text-brand-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(243,185,0,0.4)]">
                    Solicitar info por WhatsApp
                  </a>
                </div>

                <p className="mt-8 md:mt-12 text-base md:text-lg text-brand-light/80 font-medium relative z-10 border-t border-brand-light/30 pt-4 md:pt-6">
                  Agencia Brújula: Tu brújula en el mundo digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-24 bg-brand-light/40 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-[0.06] pointer-events-none">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_17.svg" alt="" width={800} height={800} className="w-[500px] md:w-[800px] h-auto animate-spin-slow" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 opacity-[0.06] pointer-events-none hidden md:block">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_9.svg" alt="" width={600} height={600} className="w-[600px] h-auto" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-title text-3xl sm:text-4xl md:text-5xl text-brand-primary mb-4 md:mb-6">Envíanos un mensaje</h2>
            <p className="text-base md:text-xl text-foreground/70 font-medium max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo para darle dirección a tu proyecto.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-brand-light">
            {/* Branded Sidebar */}
            <div className="lg:col-span-2 bg-brand-primary p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="" width={200} height={200} className="w-40 h-auto" />
              </div>
              <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none rotate-180">
                <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_5.svg" alt="" width={150} height={150} className="w-28 h-auto animate-float" />
              </div>

              <div className="relative z-10">
                <h3 className="font-title text-3xl md:text-4xl text-brand-accent mb-4 md:mb-6">¿Listo para comenzar?</h3>
                <p className="text-brand-light text-base md:text-lg font-medium leading-relaxed mb-8">
                  Cuéntanos sobre tu marca o proyecto. Queremos entender tu visión para ayudarte a darle forma.
                </p>
              </div>

              <div className="relative z-10 space-y-5 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-white/90 font-medium text-sm md:text-base">Respuesta en menos de 24 hrs</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-white/90 font-medium text-sm md:text-base">Asesoría personalizada</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-white/90 font-medium text-sm md:text-base">Sin compromiso</p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/15">
                  <p className="text-brand-light/70 text-sm font-medium italic">
                    &quot;Cada gran marca comenzó con una conversación.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-3 bg-white p-6 sm:p-10 md:p-14 relative">
              {/* Subtle watermark */}
              <div className="absolute bottom-4 right-4 opacity-[0.03] pointer-events-none">
                <Image src="/images/logos/principal/ICONO PRINCIPAL BRUJULA SVG.svg" alt="" width={300} height={300} className="w-48 md:w-72 h-auto" />
              </div>
              <div className="relative z-10">
                <ContactForm initialService={initialService} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Oculto (Screen Readers & Search Engines) */}
      <div className="sr-only">
        <h2>Contacto para agencias de marketing en Concepción, Chile</h2>
        <p>
          ¿Estás buscando comunicarte con una agencia de marketing digital en Concepción que ofrezca resultados medibles y creatividad estratégica? En Agencia Brújula estamos listos para atender tus solicitudes. Entendemos que cada negocio tiene necesidades comunicacionales únicas, desde el diseño gráfico de logotipos y branding corporativo, hasta el desarrollo de completas estrategias para redes sociales. Nuestro equipo está a tu entera disposición para resolver cualquier duda y asesorarte en la mejor dirección para el crecimiento online de tu pyme o marca en Chile.
        </p>
        <p>
          A través de nuestra página de contacto, puedes comunicarte fácilmente con nuestro equipo de creativas expertas. Ya sea que requieras la cotización de los Planes Brújula (Norte, Sur, Este u Oeste), o busques servicios personalizados de Community Manager, diseño web y diseño gráfico en Concepción, te garantizamos una respuesta rápida en menos de 24 horas. Nuestra asesoría es totalmente personalizada y sin compromiso. Contactar a las mejores agencias de marketing en Concepción nunca había sido tan fácil: utiliza nuestro formulario interactivo o escríbenos directamente a nuestro correo y WhatsApp corporativo.
        </p>
        <p>
          Agencia Brújula no es solo un proveedor; buscamos ser un aliado estratégico a largo plazo para tu crecimiento. Contáctanos y descubre cómo podemos transformar tu visión en una identidad de marca profesional que enamore a tu audiencia. Revisa nuestro portafolio de marketing digital y diseño gráfico en Chile, envíanos un mensaje, y comencemos la conversación que llevará a tu marca al siguiente nivel comercial en el competitivo entorno digital actual. Nos ubicamos conceptualmente como tu brújula principal en todo el espectro del marketing digital y el diseño gráfico en la región.
        </p>
      </div>
    </div>
  );
}
