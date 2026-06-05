import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { getCategories } from "@/lib/actions";
import ProjectForm from "@/components/admin/ProjectForm";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default async function NuevoProyectoPage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const categories = await getCategories();

  return (
    <div className="p-8 lg:p-12 max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/admin/proyectos"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-4 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Volver a proyectos
        </Link>
        <h1 className="text-3xl font-bold text-white">Nuevo proyecto</h1>
      </div>

      <ProjectForm categories={categories} />
    </div>
  );
}
