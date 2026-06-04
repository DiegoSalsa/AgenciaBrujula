import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-[6px] border-brand-accent shadow-sm">
      <div className="container mx-auto px-4 h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform origin-left">
          <Image 
            src="/images/logos/principal/LOGO PRINCIPAL BRUJULA SVG_1.svg" 
            alt="Agencia Brújula Logo" 
            width={400} 
            height={100} 
            className="w-48 md:w-64 h-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-brand-primary transition-colors font-medium text-lg">Inicio</Link>
          <Link href="/sobre-nosotros" className="text-foreground hover:text-brand-primary transition-colors font-medium text-lg">Sobre Nosotros</Link>
          <Link href="/servicios" className="text-foreground hover:text-brand-primary transition-colors font-medium text-lg">Servicios</Link>
          <Link href="/portafolio" className="text-foreground hover:text-brand-primary transition-colors font-medium text-lg">Portafolio</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contacto" className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-xl hover:shadow-brand-primary/30 text-lg">
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
