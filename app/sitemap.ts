import { MetadataRoute } from 'next';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agenciabrujula.com';
  const supabase = await createServerSupabaseClient();
  
  // Base routes
  const routes = [
    '',
    '/sobre-nosotros',
    '/servicios',
    '/portafolio',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Categories (Portafolio slugs)
  const { data: categories } = await supabase.from('categories').select('slug');
  const categoryRoutes = (categories || []).map((category) => ({
    url: `${baseUrl}/portafolio/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Projects
  const { data: projects } = await supabase.from('projects').select('slug, created_at').eq('is_published', true);
  const projectRoutes = (projects || []).map((project) => ({
    url: `${baseUrl}/proyecto/${project.slug}`,
    lastModified: project.created_at ? new Date(project.created_at) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...categoryRoutes, ...projectRoutes];
}
