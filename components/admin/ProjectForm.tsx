"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "./ImageUploader";
import { createProject, updateProject, addProjectImage, deleteProjectImage, updateProjectImage, uploadFile } from "@/lib/actions";
import { convertToWebP } from "@/lib/imageUtils";
import { LAYOUT_TEMPLATES, ASPECT_RATIOS } from "@/lib/layoutTemplates";
import Image from "next/image";
import { FiTrash2, FiPlus, FiLoader, FiSave } from "react-icons/fi";

interface Category {
  id: string;
  title: string;
  slug: string;
}

interface ProjectImage {
  id: string;
  image_url: string;
  alt_text: string | null;
  sort_order: number;
  aspect_ratio: string;
}

interface ProjectFormProps {
  categories: Category[];
  project?: {
    id: string;
    title: string;
    slug: string;
    subtitle: string | null;
    client_name: string | null;
    description: string | null;
    category_id: string;
    background_color: string;
    text_color?: string;
    logo_url: string | null;
    watermark_url: string | null;
    mobile_image_url: string | null;
    layout_template?: string;
    is_published: boolean;
    project_images: ProjectImage[];
  } | null;
}

export default function ProjectForm({ categories, project }: ProjectFormProps) {
  const router = useRouter();
  const isEditing = !!project;

  const [title, setTitle] = useState(project?.title || "");
  const [slug, setSlug] = useState(project?.slug || "");
  const [subtitle, setSubtitle] = useState(project?.subtitle || "");
  const [clientName, setClientName] = useState(project?.client_name || "");
  const [description, setDescription] = useState(project?.description || "");
  const [categoryId, setCategoryId] = useState(project?.category_id || categories[0]?.id || "");
  const [backgroundColor, setBackgroundColor] = useState(project?.background_color || "#551273");
  const [textColor, setTextColor] = useState(project?.text_color || "#ffffff");
  const [logoUrl, setLogoUrl] = useState(project?.logo_url || "");
  const [watermarkUrl, setWatermarkUrl] = useState(project?.watermark_url || "");
  const [mobileImageUrl, setMobileImageUrl] = useState(project?.mobile_image_url || "");
  const [layoutTemplate, setLayoutTemplate] = useState(project?.layout_template || "grid-left-phone-right");
  const [isPublished, setIsPublished] = useState(project?.is_published || false);
  const [images, setImages] = useState<ProjectImage[]>(project?.project_images || []);
  const [saving, setSaving] = useState(false);
  const [uploadingGrid, setUploadingGrid] = useState(false);
  const [error, setError] = useState("");

  // Auto-generate slug from title
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!isEditing) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("subtitle", subtitle);
    formData.append("client_name", clientName);
    formData.append("description", description);
    formData.append("category_id", categoryId);
    formData.append("background_color", backgroundColor);
    formData.append("text_color", textColor);
    formData.append("logo_url", logoUrl);
    formData.append("watermark_url", watermarkUrl);
    formData.append("mobile_image_url", mobileImageUrl);
    formData.append("layout_template", layoutTemplate);
    formData.append("is_published", isPublished.toString());

    let result;
    if (isEditing) {
      result = await updateProject(project!.id, formData);
    } else {
      result = await createProject(formData);
    }

    if (result.error) {
      setError(result.error);
      setSaving(false);
      return;
    }

    setSaving(false);
    router.push("/admin/proyectos");
    router.refresh();
  };

  const handleGridImageUpload = async (files: FileList) => {
    if (!isEditing) {
      alert("Primero guarda el proyecto, luego podrás subir imágenes al grid.");
      return;
    }

    setUploadingGrid(true);

    for (const file of Array.from(files)) {
      // Convert to WebP before uploading
      let processedFile: File;
      try {
        processedFile = await convertToWebP(file);
      } catch {
        processedFile = file;
      }

      const formData = new FormData();
      formData.append("file", processedFile);
      formData.append("folder", `projects/${project!.slug}`);

      const uploadResult = await uploadFile(formData);
      if (uploadResult.url) {
        const addResult = await addProjectImage(project!.id, uploadResult.url, file.name);
        if (addResult.success && addResult.image) {
          setImages((prev) => [
            ...prev,
            {
              id: addResult.image.id,
              image_url: uploadResult.url!,
              alt_text: file.name,
              sort_order: prev.length,
              aspect_ratio: "square",
            },
          ]);
        }
      }
    }

    setUploadingGrid(false);
    router.refresh();
  };

  const handleDeleteImage = async (imageId: string) => {
    const result = await deleteProjectImage(imageId);
    if (result.success) {
      setImages((prev) => prev.filter((img) => img.id !== imageId));
    }
  };

  const handleUpdateImageRatio = async (imageId: string, ratio: string) => {
    // Optimistic update
    setImages((prev) =>
      prev.map((img) => (img.id === imageId ? { ...img, aspect_ratio: ratio } : img))
    );
    const result = await updateProjectImage(imageId, { aspect_ratio: ratio });
    if (result.error) {
      alert("Error actualizando ratio: " + result.error);
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* Basic Info */}
      <div className="bg-white/5 rounded-2xl p-6 space-y-5 border border-white/10">
        <h3 className="text-lg font-semibold text-white">Información básica</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-brand-light mb-2">Título *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              placeholder="Nombre del proyecto"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-light mb-2">Slug (URL)</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              placeholder="nombre-del-proyecto"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-light mb-2">Subtítulo</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              placeholder="POST/CARRUSELES"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-light mb-2">Cliente</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              placeholder="Nombre del cliente"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-light mb-2">Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
            placeholder="Breve descripción del proyecto..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-brand-light mb-2">Categoría *</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id} className="bg-[#1a0524]">
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-light mb-2">Plantilla de Diseño (Layout)</label>
            <div className="flex flex-col xl:flex-row gap-5">
              <div className="flex-1">
                <select
                  value={layoutTemplate}
                  onChange={(e) => setLayoutTemplate(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                >
                  {LAYOUT_TEMPLATES.map((tpl) => (
                    <option key={tpl.id} value={tpl.id} className="bg-[#1a0524]">
                      {tpl.name}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-white/50">
                  {LAYOUT_TEMPLATES.find(t => t.id === layoutTemplate)?.description}
                </p>
              </div>
              
              {/* Preview Layout Box */}
              <div className="w-full xl:w-48 bg-black/30 border border-white/10 rounded-xl p-3 flex items-center justify-center min-h-[120px]">
                <pre className="font-mono text-[10px] sm:text-xs leading-[1.1] text-brand-accent whitespace-pre">
                  {LAYOUT_TEMPLATES.find(t => t.id === layoutTemplate)?.preview.join("\n")}
                </pre>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-light mb-2">Color de fondo</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-12 h-12 rounded-xl border-2 border-white/20 cursor-pointer bg-transparent"
              />
              <input
                type="text"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-light mb-2">Color del texto</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-12 h-12 rounded-xl border-2 border-white/20 cursor-pointer bg-transparent"
              />
              <input
                type="text"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Brand Images */}
      <div className="bg-white/5 rounded-2xl p-6 space-y-5 border border-white/10">
        <h3 className="text-lg font-semibold text-white">Imágenes de marca</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ImageUploader
            label="Logo del cliente"
            folder={`projects/${slug}/brand`}
            currentImage={logoUrl || null}
            onUploadComplete={setLogoUrl}
          />
          <ImageUploader
            label="Marca de agua (fondo)"
            folder={`projects/${slug}/brand`}
            currentImage={watermarkUrl || null}
            onUploadComplete={setWatermarkUrl}
          />
          <ImageUploader
            label="Imagen para celular (mockup)"
            folder={`projects/${slug}/mobile`}
            currentImage={mobileImageUrl || null}
            onUploadComplete={setMobileImageUrl}
          />
        </div>
      </div>

      {/* Grid Images */}
      <div className="bg-white/5 rounded-2xl p-6 space-y-5 border border-white/10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Imágenes del grid ({images.length})</h3>
          {isEditing && (
            <label className="flex items-center gap-2 px-4 py-2 bg-brand-accent text-[#0f0314] rounded-xl font-medium text-sm cursor-pointer hover:bg-brand-accent/80 transition-colors">
              <FiPlus className="w-4 h-4" />
              Agregar
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => e.target.files && handleGridImageUpload(e.target.files)}
                className="hidden"
              />
            </label>
          )}
        </div>

        {!isEditing && (
          <p className="text-sm text-white/50">Guarda el proyecto primero para poder subir imágenes al grid.</p>
        )}

        {uploadingGrid && (
          <div className="flex items-center gap-2 text-brand-accent text-sm">
            <FiLoader className="w-4 h-4 animate-spin" />
            Subiendo imágenes...
          </div>
        )}

        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img) => (
              <div key={img.id} className="relative group rounded-xl overflow-hidden aspect-square bg-white/5">
                <Image
                  src={img.image_url}
                  alt={img.alt_text || ""}
                  fill
                  className="object-cover"
                />
                
                {/* Image Actions Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(img.id)}
                      className="p-1.5 bg-red-500 rounded-lg text-white hover:bg-red-600 shadow-sm"
                      title="Eliminar"
                    >
                      <FiTrash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  
                  <select
                    value={img.aspect_ratio || "square"}
                    onChange={(e) => handleUpdateImageRatio(img.id, e.target.value)}
                    className="w-full bg-black/70 text-white text-xs border border-white/20 rounded px-1 py-1 focus:outline-none"
                  >
                    {ASPECT_RATIOS.map((ratio) => (
                      <option key={ratio.id} value={ratio.id}>{ratio.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Publish & Save */}
      <div className="flex items-center justify-between bg-white/5 rounded-2xl p-6 border border-white/10">
        <label className="flex items-center gap-3 cursor-pointer">
          <div
            onClick={() => setIsPublished(!isPublished)}
            className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${
              isPublished ? "bg-green-500" : "bg-white/20"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                isPublished ? "left-6.5" : "left-0.5"
              }`}
            />
          </div>
          <span className="text-sm text-brand-light">
            {isPublished ? "Publicado" : "Borrador"}
          </span>
        </label>

        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-8 py-3 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-secondary transition-colors disabled:opacity-50"
        >
          {saving ? (
            <FiLoader className="w-5 h-5 animate-spin" />
          ) : (
            <FiSave className="w-5 h-5" />
          )}
          {isEditing ? "Guardar cambios" : "Crear proyecto"}
        </button>
      </div>
    </form>
  );
}
