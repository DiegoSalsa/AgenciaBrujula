"use server";

import { createServerSupabaseClient } from "./supabase-server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createHash } from "crypto";

// =====================================================
// AUTH
// =====================================================

export async function loginAction(formData: FormData) {
  const supabase = await createServerSupabaseClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  redirect("/admin");
}

export async function logoutAction() {
  const supabase = await createServerSupabaseClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

// =====================================================
// CATEGORIES
// =====================================================

export async function getCategories() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data;
}

export async function getCategoryBySlug(slug: string) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;
  return data;
}

export async function createCategory(formData: FormData) {
  const supabase = await createServerSupabaseClient();

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const bg_class = formData.get("bg_class") as string || "bg-brand-light";
  const text_color_class = formData.get("text_color_class") as string || "text-brand-primary";

  const { error } = await supabase.from("categories").insert({
    title,
    slug,
    description,
    bg_class,
    text_color_class,
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/categorias");
  revalidatePath("/portafolio");
  return { success: true };
}

export async function updateCategory(id: string, formData: FormData) {
  const supabase = await createServerSupabaseClient();

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const bg_class = formData.get("bg_class") as string;
  const text_color_class = formData.get("text_color_class") as string;

  const { error } = await supabase
    .from("categories")
    .update({ title, slug, description, bg_class, text_color_class })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/categorias");
  revalidatePath("/portafolio");
  return { success: true };
}

export async function deleteCategory(id: string) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("categories").delete().eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/categorias");
  revalidatePath("/portafolio");
  return { success: true };
}

// =====================================================
// PROJECTS
// =====================================================

export async function getProjects() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*, categories(title, slug), project_images(id)")
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data;
}

export async function getPublishedProjectsByCategory(categoryId: string) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*, project_images(*)")
    .eq("category_id", categoryId)
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data;
}

export async function getProjectBySlug(slug: string) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*, categories(title, slug), project_images(*)")
    .eq("slug", slug)
    .single();

  if (error) return null;

  // Sort images by sort_order
  if (data?.project_images) {
    data.project_images.sort((a: { sort_order: number }, b: { sort_order: number }) => a.sort_order - b.sort_order);
  }

  return data;
}

export async function getProjectById(id: string) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*, categories(title, slug), project_images(*)")
    .eq("id", id)
    .single();

  if (error) return null;

  if (data?.project_images) {
    data.project_images.sort((a: { sort_order: number }, b: { sort_order: number }) => a.sort_order - b.sort_order);
  }

  return data;
}

export async function createProject(formData: FormData) {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase.from("projects").insert({
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    subtitle: formData.get("subtitle") as string,
    client_name: formData.get("client_name") as string,
    description: formData.get("description") as string,
    category_id: formData.get("category_id") as string,
    background_color: formData.get("background_color") as string || "#551273",
    text_color: formData.get("text_color") as string || "#ffffff",
    logo_url: formData.get("logo_url") as string || null,
    watermark_url: formData.get("watermark_url") as string || null,
    mobile_image_url: formData.get("mobile_image_url") as string || null,
    layout_template: formData.get("layout_template") as string || "grid-left-phone-right",
    is_published: formData.get("is_published") === "true",
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/proyectos");
  revalidatePath("/portafolio");
  return { success: true };
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase
    .from("projects")
    .update({
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      subtitle: formData.get("subtitle") as string,
      client_name: formData.get("client_name") as string,
      description: formData.get("description") as string,
      category_id: formData.get("category_id") as string,
      background_color: formData.get("background_color") as string || "#551273",
      text_color: formData.get("text_color") as string || "#ffffff",
      logo_url: formData.get("logo_url") as string || null,
      watermark_url: formData.get("watermark_url") as string || null,
      mobile_image_url: formData.get("mobile_image_url") as string || null,
      layout_template: formData.get("layout_template") as string || "grid-left-phone-right",
      is_published: formData.get("is_published") === "true",
    })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/proyectos");
  revalidatePath("/portafolio");
  return { success: true };
}

export async function deleteProject(id: string) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/proyectos");
  revalidatePath("/portafolio");
  return { success: true };
}

export async function togglePublish(id: string, currentState: boolean) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase
    .from("projects")
    .update({ is_published: !currentState })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/proyectos");
  revalidatePath("/portafolio");
  return { success: true };
}

// =====================================================
// PROJECT IMAGES
// =====================================================

type CloudinaryUploadResponse = {
  secure_url?: string;
  public_id?: string;
  resource_type?: string;
  duration?: number;
  bytes?: number;
  width?: number;
  height?: number;
  error?: { message?: string };
};

const MAX_VIDEO_SIZE_BYTES = 100 * 1024 * 1024;

function getCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Faltan variables de entorno de Cloudinary.");
  }

  return { cloudName, apiKey, apiSecret };
}

function signCloudinaryParams(params: Record<string, string | number>, apiSecret: string) {
  const signatureBase = Object.entries(params)
    .filter(([, value]) => value !== "" && value !== undefined && value !== null)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return createHash("sha1").update(`${signatureBase}${apiSecret}`).digest("hex");
}

function getCloudinaryVideoPublicId(videoUrl?: string | null) {
  if (!videoUrl) return null;

  try {
    const url = new URL(videoUrl);
    const parts = url.pathname.split("/").filter(Boolean);
    const uploadIndex = parts.indexOf("upload");
    if (uploadIndex === -1 || parts[uploadIndex - 1] !== "video") return null;

    let publicParts = parts.slice(uploadIndex + 1);
    if (publicParts[0]?.startsWith("v") && /^v\d+$/.test(publicParts[0])) {
      publicParts = publicParts.slice(1);
    }

    return publicParts.join("/").replace(/\.[^/.]+$/, "");
  } catch {
    return null;
  }
}

async function destroyCloudinaryVideo(publicId: string) {
  const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();
  const timestamp = Math.round(Date.now() / 1000);
  const signature = signCloudinaryParams({ public_id: publicId, timestamp }, apiSecret);
  const formData = new FormData();

  formData.append("public_id", publicId);
  formData.append("timestamp", String(timestamp));
  formData.append("api_key", apiKey);
  formData.append("signature", signature);

  await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/destroy`, {
    method: "POST",
    body: formData,
  });
}

export async function addProjectImage(projectId: string, imageUrl: string, altText?: string, aspectRatio?: string) {
  const supabase = await createServerSupabaseClient();

  // Get max sort_order for this project
  const { data: existing } = await supabase
    .from("project_images")
    .select("sort_order")
    .eq("project_id", projectId)
    .order("sort_order", { ascending: false })
    .limit(1);

  const nextOrder = existing && existing.length > 0 ? existing[0].sort_order + 1 : 0;

  const { data, error } = await supabase.from("project_images").insert({
    project_id: projectId,
    image_url: imageUrl,
    alt_text: altText || null,
    sort_order: nextOrder,
    aspect_ratio: aspectRatio || "square",
  }).select().single();

  if (error) return { error: error.message };

  revalidatePath("/admin/proyectos");
  revalidatePath("/portafolio");
  return { success: true, image: data };
}

export async function addProjectVideo(projectId: string, formData: FormData) {
  const supabase = await createServerSupabaseClient();
  const file = formData.get("file") as File;
  const folder = formData.get("folder") as string || "projects/videos";
  const altText = formData.get("alt_text") as string || file?.name || "Video";
  const aspectRatio = formData.get("aspect_ratio") as string || "story";

  if (!file) return { error: "No se recibio ningun video." };
  if (!file.type.startsWith("video/")) return { error: "El archivo debe ser un video." };
  if (file.size > MAX_VIDEO_SIZE_BYTES) return { error: "El video supera el limite de 100 MB." };

  let cloudinaryData: CloudinaryUploadResponse;

  try {
    const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();
    const timestamp = Math.round(Date.now() / 1000);
    const uploadFolder = `agencia-brujula/${folder}`;
    const signature = signCloudinaryParams({ folder: uploadFolder, timestamp }, apiSecret);
    const uploadForm = new FormData();

    uploadForm.append("file", file);
    uploadForm.append("folder", uploadFolder);
    uploadForm.append("timestamp", String(timestamp));
    uploadForm.append("api_key", apiKey);
    uploadForm.append("signature", signature);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
      method: "POST",
      body: uploadForm,
    });

    cloudinaryData = await response.json();

    if (!response.ok || !cloudinaryData.secure_url || !cloudinaryData.public_id) {
      return { error: cloudinaryData.error?.message || "No se pudo subir el video a Cloudinary." };
    }

    const { data: existing } = await supabase
      .from("project_images")
      .select("sort_order")
      .eq("project_id", projectId)
      .order("sort_order", { ascending: false })
      .limit(1);

    const nextOrder = existing && existing.length > 0 ? existing[0].sort_order + 1 : 0;
    const { data, error } = await supabase.from("project_images").insert({
      project_id: projectId,
      image_url: cloudinaryData.secure_url,
      alt_text: altText || null,
      sort_order: nextOrder,
      aspect_ratio: aspectRatio,
    }).select().single();

    if (error) {
      await destroyCloudinaryVideo(cloudinaryData.public_id);
      return { error: error.message };
    }

    revalidatePath("/admin/proyectos");
    revalidatePath("/portafolio");
    return { success: true, image: data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Error subiendo video." };
  }
}

export async function updateProjectImage(imageId: string, updates: { aspect_ratio?: string; alt_text?: string }) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("project_images").update(updates).eq("id", imageId);

  if (error) return { error: error.message };

  revalidatePath("/admin/proyectos");
  revalidatePath("/portafolio");
  return { success: true };
}

export async function deleteProjectImage(imageId: string) {
  const supabase = await createServerSupabaseClient();
  const { data: media } = await supabase
    .from("project_images")
    .select("image_url")
    .eq("id", imageId)
    .single();

  const { error } = await supabase.from("project_images").delete().eq("id", imageId);

  if (error) return { error: error.message };

  const publicId = getCloudinaryVideoPublicId(media?.image_url);
  if (publicId) {
    await destroyCloudinaryVideo(publicId);
  }

  revalidatePath("/admin/proyectos");
  revalidatePath("/portafolio");
  return { success: true };
}

export async function reorderImages(imageIds: string[]) {
  const supabase = await createServerSupabaseClient();

  const updates = imageIds.map((id, index) =>
    supabase.from("project_images").update({ sort_order: index }).eq("id", id)
  );

  await Promise.all(updates);

  revalidatePath("/admin/proyectos");
  revalidatePath("/portafolio");
  return { success: true };
}

// =====================================================
// FILE UPLOAD
// =====================================================

export async function uploadFile(formData: FormData) {
  const supabase = await createServerSupabaseClient();
  const file = formData.get("file") as File;
  const folder = formData.get("folder") as string || "general";

  if (!file) return { error: "No file provided" };

  const fileExt = file.name.split(".").pop();
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;

  const { error } = await supabase.storage
    .from("portfolio")
    .upload(fileName, file);

  if (error) return { error: error.message };

  const { data: urlData } = supabase.storage
    .from("portfolio")
    .getPublicUrl(fileName);

  return { success: true, url: urlData.publicUrl };
}

export async function deleteFile(fileUrl: string) {
  const supabase = await createServerSupabaseClient();

  // Extract file path from full URL
  const urlParts = fileUrl.split("/storage/v1/object/public/portfolio/");
  if (urlParts.length < 2) return { error: "Invalid file URL" };

  const filePath = urlParts[1];
  const { error } = await supabase.storage.from("portfolio").remove([filePath]);

  if (error) return { error: error.message };
  return { success: true };
}

// =====================================================
// DASHBOARD STATS
// =====================================================

export async function getDashboardStats() {
  const supabase = await createServerSupabaseClient();

  const [categoriesRes, projectsRes, imagesRes, publishedRes] = await Promise.all([
    supabase.from("categories").select("id", { count: "exact", head: true }),
    supabase.from("projects").select("id", { count: "exact", head: true }),
    supabase.from("project_images").select("id", { count: "exact", head: true }),
    supabase.from("projects").select("id", { count: "exact", head: true }).eq("is_published", true),
  ]);

  return {
    categories: categoriesRes.count || 0,
    projects: projectsRes.count || 0,
    images: imagesRes.count || 0,
    published: publishedRes.count || 0,
  };
}

// =====================================================
// CONTACT FORM
// =====================================================

import { sendContactEmails } from "./email";

export async function submitContactForm(formData: FormData) {
  const data = {
    nombre: formData.get("nombre") as string,
    email: formData.get("email") as string,
    telefono: formData.get("telefono") as string,
    servicio: formData.get("servicio") as string,
    mensaje: formData.get("mensaje") as string,
  };

  // Validación básica
  if (!data.nombre || !data.email || !data.mensaje) {
    return { error: "Faltan campos obligatorios" };
  }

  const result = await sendContactEmails(data);
  return result;
}
