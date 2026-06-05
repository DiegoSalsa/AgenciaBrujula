"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCategory, deleteCategory } from "@/lib/actions";
import { FiTrash2, FiPlus } from "react-icons/fi";

interface CategoryActionsProps {
  category?: {
    id: string;
    title: string;
    slug: string;
    description: string | null;
  };
  isNew?: boolean;
}

export default function CategoryActions({ category, isNew }: CategoryActionsProps) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  if (isNew) {
    const handleCreate = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("description", description);

      const result = await createCategory(formData);
      if (result.error) {
        alert(result.error);
      } else {
        setTitle("");
        setSlug("");
        setDescription("");
        router.refresh();
      }
      setLoading(false);
    };

    return (
      <form onSubmit={handleCreate} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brand-light mb-1">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setSlug(generateSlug(e.target.value));
              }}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-accent text-sm"
              placeholder="Ej: Video Corporativo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-light mb-1">Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-accent text-sm"
              placeholder="video-corporativo"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-light mb-1">Descripción</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-accent text-sm"
            placeholder="Breve descripción de la categoría"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-primary text-white rounded-xl font-medium text-sm hover:bg-brand-secondary transition-colors disabled:opacity-50"
        >
          <FiPlus className="w-4 h-4" />
          {loading ? "Creando..." : "Crear categoría"}
        </button>
      </form>
    );
  }

  // Existing category - show delete button
  const handleDelete = async () => {
    if (!confirm(`¿Eliminar la categoría "${category!.title}"? Esto eliminará también todos sus proyectos.`)) return;
    setLoading(true);
    await deleteCategory(category!.id);
    router.refresh();
    setLoading(false);
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
    >
      <FiTrash2 className="w-5 h-5" />
    </button>
  );
}
