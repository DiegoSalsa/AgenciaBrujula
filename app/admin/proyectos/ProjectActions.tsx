"use client";

import { togglePublish, deleteProject } from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEdit, FiTrash2, FiEye, FiEyeOff } from "react-icons/fi";

interface ProjectActionsProps {
  project: {
    id: string;
    slug: string;
    is_published: boolean;
  };
}

export default function ProjectActions({ project }: ProjectActionsProps) {
  const router = useRouter();

  const handleTogglePublish = async () => {
    await togglePublish(project.id, project.is_published);
    router.refresh();
  };

  const handleDelete = async () => {
    if (!confirm("¿Seguro que quieres eliminar este proyecto? Esta acción no se puede deshacer.")) return;
    await deleteProject(project.id);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
      <Link
        href={`/admin/proyectos/${project.id}/editar`}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 text-white/70 hover:text-white hover:bg-white/20 text-xs font-medium transition-colors"
      >
        <FiEdit className="w-3.5 h-3.5" />
        Editar
      </Link>
      <button
        onClick={handleTogglePublish}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 text-white/70 hover:text-white hover:bg-white/20 text-xs font-medium transition-colors"
      >
        {project.is_published ? (
          <>
            <FiEyeOff className="w-3.5 h-3.5" />
            Ocultar
          </>
        ) : (
          <>
            <FiEye className="w-3.5 h-3.5" />
            Publicar
          </>
        )}
      </button>
      <button
        onClick={handleDelete}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 text-xs font-medium transition-colors ml-auto"
      >
        <FiTrash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
