import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaTiktok, FaBehance } from "react-icons/fa6";

export default function Contacto() {
  return (
    <div className="flex flex-col pb-24">
      <section className="bg-brand-primary pt-32 pb-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
           <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_21.svg" alt="Pattern" fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-30 animate-spin-slow">
          <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_11.svg" alt="" width={600} height={600} className="w-[600px] h-auto" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-title text-6xl md:text-7xl mb-8 text-brand-accent drop-shadow-md">¿Le damos dirección a tu marca?</h1>
          <p className="text-2xl max-w-3xl mx-auto text-brand-light font-medium leading-relaxed mb-4">
            ¿Tienes una idea, emprendimiento o proyecto?
          </p>
          <p className="text-2xl max-w-3xl mx-auto text-white font-medium leading-relaxed">
            Nos encantaría conocerte y ayudarte a encontrar la mejor dirección.
          </p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-5 pointer-events-none">
           <Image src="/images/elements/FONDO/GRAFICOS SVG FONDO_19.svg" alt="Pattern" width={800} height={800} />
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="bg-white rounded-[4rem] shadow-2xl border-4 border-brand-light p-12 md:p-20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 opacity-5 pointer-events-none">
              <Image src="/images/logos/principal/ICONO PRINCIPAL BRUJULA SVG.svg" alt="" width={600} height={600} className="w-[600px] h-auto" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-20 relative z-10 items-center">
              {/* Información Directa */}
              <div>
                <h2 className="font-title text-5xl text-brand-primary mb-12">Hablemos</h2>
                
                <div className="space-y-10">
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors shadow-md">
                      <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_4.svg" alt="Phone" width={30} height={30} className="w-8 h-8 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-brand-primary mb-1">WhatsApp</h4>
                      <a href="https://wa.me/56990746646" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-brand-accent transition-colors text-2xl font-medium">
                        (+56) 9 9074 6646
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors shadow-md">
                      <span className="font-title text-4xl text-brand-primary group-hover:text-white transition-colors">@</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-brand-primary mb-1">Correo electrónico</h4>
                      <a href="mailto:brujulaequipo@gmail.com" className="text-foreground/80 hover:text-brand-accent transition-colors text-2xl font-medium break-all">
                        brujulaequipo@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-16 border-t-4 border-brand-light">
                  <h4 className="font-bold text-2xl text-brand-primary mb-8">Síguenos en redes sociales</h4>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://instagram.com/agenciabrujula.ccp" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-md text-lg flex items-center gap-2">
                      <FaInstagram className="text-2xl" /> Instagram
                    </a>
                    <a href="https://linkedin.com/company/agencia-brujula" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-md text-lg flex items-center gap-2">
                      <FaLinkedinIn className="text-2xl" /> LinkedIn
                    </a>
                    <a href="https://tiktok.com/@agenciabrujula.ccp" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-md text-lg flex items-center gap-2">
                      <FaTiktok className="text-2xl" /> TikTok
                    </a>
                    <a href="https://behance.net/agenciabrujula" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-accent hover:text-brand-primary transition-all shadow-md text-lg flex items-center gap-2">
                      <FaBehance className="text-2xl" /> Behance
                    </a>
                  </div>
                </div>
              </div>

              {/* Mensaje de cierre */}
              <div className="bg-brand-primary rounded-[3rem] p-12 flex flex-col justify-center text-center text-white relative overflow-hidden shadow-2xl h-full min-h-[500px]">
                <div className="absolute top-0 right-0 p-4 opacity-20 animate-pulse-slow">
                  <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_1.svg" alt="" width={150} height={150} className="w-32 h-auto" />
                </div>
                <div className="absolute bottom-0 left-0 p-4 opacity-20 rotate-180 animate-float">
                  <Image src="/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_5.svg" alt="" width={120} height={120} className="w-24 h-auto" />
                </div>
                
                <h3 className="font-title text-5xl mb-8 text-brand-accent relative z-10 drop-shadow-md">Tu marca tiene algo que decir.</h3>
                <p className="text-2xl mb-12 relative z-10 font-medium text-brand-light leading-relaxed">Nosotros podemos ayudarte a comunicarlo y conectarlo con tu audiencia ideal.</p>
                
                <div className="relative z-10 mt-4">
                  <a href="https://wa.me/56990746646" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-accent text-brand-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(243,185,0,0.4)]">
                    Solicitar info por WhatsApp
                  </a>
                </div>
                
                <p className="mt-12 text-lg text-brand-light/80 font-medium relative z-10 border-t border-brand-light/30 pt-6">
                  Agencia Brújula: Tu brújula en el mundo digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
