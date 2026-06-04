import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaTiktok, FaBehance } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-16 pb-8 border-t-[12px] border-brand-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Image 
              src="/images/logos/mono/BRUJULA LOGO SVG BLANCO_1.svg" 
              alt="Agencia Brújula Logo Blanco" 
              width={500} 
              height={150} 
              className="w-56 md:w-72 h-auto -mt-8 md:-mt-16 -mb-16 md:-mb-24 drop-shadow-xl -ml-2"
            />
            <p className="text-brand-light max-w-md font-medium text-xl leading-relaxed relative z-10">
              Tu brújula en el mundo digital. Diseño, branding, redes sociales y marketing digital.
            </p>
          </div>
          <div>
            <h4 className="font-title text-2xl mb-6 text-brand-accent">Enlaces</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white hover:text-brand-accent transition-colors">Inicio</Link></li>
              <li><Link href="/sobre-nosotros" className="text-white hover:text-brand-accent transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/servicios" className="text-white hover:text-brand-accent transition-colors">Servicios</Link></li>
              <li><Link href="/portafolio" className="text-white hover:text-brand-accent transition-colors">Portafolio</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-title text-2xl mb-6 text-brand-accent">Contacto</h4>
            <ul className="space-y-4">
              <li className="text-white">brujulaequipo@gmail.com</li>
              <li className="text-white">(+56) 9 9074 6646</li>
              <li className="pt-4 flex flex-wrap gap-4">
                <a href="https://instagram.com/agenciabrujula.ccp" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all text-2xl group">
                  <FaInstagram className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com/company/agencia-brujula" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all text-2xl group">
                  <FaLinkedinIn className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://tiktok.com/@agenciabrujula.ccp" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all text-2xl group">
                  <FaTiktok className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://behance.net/agenciabrujula" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all text-2xl group">
                  <FaBehance className="group-hover:scale-110 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between text-brand-light text-sm">
          <p>&copy; {new Date().getFullYear()} Agencia Brújula. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
