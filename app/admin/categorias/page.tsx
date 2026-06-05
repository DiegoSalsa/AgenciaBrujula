import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { getCategories, createCategory, updateCategory, deleteCategory } from "@/lib/actions";
import CategoryActions from "./CategoryActions";
import Link from "next/link";

export default async function CategoriasPage() {
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
        <h1 className="text-3xl font-bold text-white mb-2">Categorías</h1>
        <p className="text-white/50">Gestiona las categorías del portafolio</p>
      </div>

      {/* Category List */}
      <div className="space-y-4 mb-10">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:bg-white/10 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              <p className="text-sm text-white/40">/{cat.slug}</p>
              {cat.description && <p className="text-sm text-white/60 mt-1">{cat.description}</p>}
            </div>
            <CategoryActions category={cat} />
          </div>
        ))}
      </div>

      {/* New Category Form */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Agregar categoría</h3>
        <CategoryActions isNew />
      </div>
    </div>
  );
}
