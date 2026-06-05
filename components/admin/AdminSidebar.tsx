"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/lib/actions";
import { FiGrid, FiFolder, FiLayers, FiLogOut, FiArrowLeft } from "react-icons/fi";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: FiGrid },
  { href: "/admin/proyectos", label: "Proyectos", icon: FiFolder },
  { href: "/admin/categorias", label: "Categorías", icon: FiLayers },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-[#0f0314] text-white flex flex-col shrink-0">
      {/* Brand */}
      <div className="px-6 py-8 border-b border-white/10">
        <h2 className="font-title text-2xl text-brand-accent tracking-wide">Brújula</h2>
        <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">Panel Admin</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== "/admin" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
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
      <div className="px-4 py-6 border-t border-white/10 space-y-2">
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
  );
}
