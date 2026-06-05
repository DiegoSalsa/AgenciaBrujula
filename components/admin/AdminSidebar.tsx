"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/lib/actions";
import { FiGrid, FiFolder, FiLayers, FiLogOut, FiArrowLeft, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: FiGrid },
  { href: "/admin/proyectos", label: "Proyectos", icon: FiFolder },
  { href: "/admin/categorias", label: "Categorías", icon: FiLayers },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#0f0314] border-b border-white/10 z-50 flex items-center justify-between px-4">
        <h2 className="font-title text-2xl text-brand-accent tracking-wide">Brújula</h2>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed md:sticky top-0 left-0 z-40 h-[100dvh] w-64 bg-[#0f0314] text-white flex flex-col shrink-0 transition-transform duration-300 ease-in-out md:translate-x-0 shadow-2xl md:shadow-none ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Brand (Desktop only since mobile has top bar) */}
        <div className="hidden md:block px-6 py-8 border-b border-white/10">
          <h2 className="font-title text-2xl text-brand-accent tracking-wide">Brújula</h2>
          <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">Panel Admin</p>
        </div>

        {/* Mobile top spacer to account for the header */}
        <div className="md:hidden h-16 shrink-0 border-b border-white/10 flex items-center px-6">
          <p className="text-xs text-white/40 uppercase tracking-widest">Menú Principal</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/admin" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-6 border-t border-white/10 space-y-3 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all"
          >
            <FiArrowLeft className="w-5 h-5" />
            Ver sitio público
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all w-full"
            >
              <FiLogOut className="w-5 h-5" />
              Cerrar sesión
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}
