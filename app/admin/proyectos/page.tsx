import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { getProjects, togglePublish, deleteProject } from "@/lib/actions";
import Link from "next/link";
import { FiPlus, FiEdit, FiTrash2, FiEye, FiEyeOff } from "react-icons/fi";
import ProjectActions from "./ProjectActions";

export default async function ProyectosPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const projects = await getProjects();

  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Proyectos</h1>
          <p className="text-white/50">{projects.length} proyecto{projects.length !== 1 ? "s" : ""}</p>
        </div>
        <Link
          href="/admin/proyectos/nuevo"
          className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-secondary transition-colors"
        >
          <FiPlus className="w-5 h-5" />
          Nuevo proyecto
        </Link>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <div className="text-center py-24 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-white/50 text-lg mb-4">Aún no hay proyectos</p>
          <Link
            href="/admin/proyectos/nuevo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-secondary transition-colors"
          >
            <FiPlus className="w-5 h-5" />
            Crear el primero
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group"
            >
              {/* Color header */}
              <div
                className="h-28 relative flex items-center justify-center"
                style={{ backgroundColor: project.background_color }}
              >
                <h3 className="font-title text-2xl text-white drop-shadow-lg">{project.title}</h3>
                {/* Badge */}
                <span
                  className={`absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full ${
                    project.is_published
                      ? "bg-green-500/30 text-green-300 border border-green-500/40"
                      : "bg-white/10 text-white/50 border border-white/20"
                  }`}
                >
                  {project.is_published ? "Publicado" : "Borrador"}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-sm text-white/40 mb-1">
                  {(project.categories as { title: string } | null)?.title || "Sin categoría"}
                </p>
                {project.client_name && (
                  <p className="text-sm text-white/60 mb-3">Cliente: {project.client_name}</p>
                )}
                <p className="text-xs text-white/30">
                  {(project.project_images as { id: string }[])?.length || 0} imágenes
                </p>

                {/* Actions */}
                <ProjectActions project={project} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
