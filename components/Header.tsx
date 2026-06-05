"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-[6px] border-brand-accent shadow-sm">
      <div className="container mx-auto px-4 h-24 md:h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform origin-left z-50" onClick={() => setIsOpen(false)}>
          <Image 
            src="/images/logos/principal/LOGO PRINCIPAL BRUJULA SVG_1.svg" 
            alt="Agencia Brújula Logo" 
            width={400} 
            height={100} 
            className="w-40 md:w-64 h-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-brand-primary transition-colors font-medium text-lg">Inicio</Link>
          <Link href="/sobre-nosotros" className="text-foreground hover:text-brand-primary transition-colors font-medium text-lg">Sobre Nosotros</Link>
          <Link href="/servicios" className="text-foreground hover:text-brand-primary transition-colors font-medium text-lg">Servicios</Link>
          <Link href="/portafolio" className="text-foreground hover:text-brand-primary transition-colors font-medium text-lg">Portafolio</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contacto" className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-xl hover:shadow-brand-primary/30 text-lg">
            Contacto
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-brand-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-8 h-1 bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
            <span className={`block w-8 h-1 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-8 h-1 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
          </div>
        </button>

        {/* Mobile Sidebar Overlay */}
        <div 
          className={`fixed inset-0 bg-brand-primary/40 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Sidebar */}
        <aside 
          className={`fixed top-0 right-0 h-[100dvh] w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden z-40 flex flex-col pt-32 px-8 gap-8 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="flex flex-col gap-6 text-2xl font-title text-brand-primary">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors">Inicio</Link>
            <Link href="/sobre-nosotros" onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors">Sobre Nosotros</Link>
            <Link href="/servicios" onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors">Servicios</Link>
            <Link href="/portafolio" onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors">Portafolio</Link>
          </nav>
          <div className="mt-4">
            <Link href="/contacto" onClick={() => setIsOpen(false)} className="inline-block bg-brand-primary text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-brand-accent hover:text-brand-primary transition-all">
              Contáctanos →
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
