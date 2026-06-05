import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { getDashboardStats } from "@/lib/actions";
import Link from "next/link";
import { FiFolder, FiLayers, FiImage, FiEye, FiPlus } from "react-icons/fi";

export default async function AdminDashboard() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const stats = await getDashboardStats();

  const statCards = [
    { label: "Categorías", value: stats.categories, icon: FiLayers, color: "from-purple-500 to-purple-700" },
    { label: "Proyectos", value: stats.projects, icon: FiFolder, color: "from-brand-accent to-yellow-600" },
    { label: "Imágenes", value: stats.images, icon: FiImage, color: "from-pink-500 to-rose-600" },
    { label: "Publicados", value: stats.published, icon: FiEye, color: "from-green-500 to-emerald-600" },
  ];

  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-white/50">Bienvenido al panel de administración, {user.email}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-white mb-6">Acciones rápidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/admin/proyectos/nuevo"
            className="flex items-center gap-4 p-4 rounded-xl bg-brand-primary/20 border border-brand-primary/30 text-brand-light hover:bg-brand-primary/30 transition-colors"
          >
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
              <FiPlus className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">Nuevo proyecto</p>
              <p className="text-sm text-white/50">Crear un nuevo caso de estudio</p>
            </div>
          </Link>
          <Link
            href="/admin/categorias"
            className="flex items-center gap-4 p-4 rounded-xl bg-brand-accent/20 border border-brand-accent/30 text-brand-accent hover:bg-brand-accent/30 transition-colors"
          >
            <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
              <FiLayers className="w-5 h-5 text-[#0f0314]" />
            </div>
            <div>
              <p className="font-semibold">Gestionar categorías</p>
              <p className="text-sm text-white/50">Agregar o editar categorías</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
