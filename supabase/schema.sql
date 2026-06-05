-- =====================================================
-- Agencia Brújula - Schema de Base de Datos (Supabase)
-- =====================================================
-- Ejecuta este script en el SQL Editor de tu proyecto Supabase.

-- 1. Categorías del portafolio
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  svg_icon TEXT,
  bg_class TEXT DEFAULT 'bg-brand-light',
  text_color_class TEXT DEFAULT 'text-brand-primary',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Proyectos individuales
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  client_name TEXT,
  description TEXT,
  background_color TEXT DEFAULT '#551273',
  logo_url TEXT,
  watermark_url TEXT,
  mobile_image_url TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Imágenes del grid
CREATE TABLE project_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- Row Level Security
-- =====================================================
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;

-- Lectura pública de categorías
CREATE POLICY "Public read categories"
  ON categories FOR SELECT USING (true);

-- Lectura pública solo de proyectos publicados
CREATE POLICY "Public read published projects"
  ON projects FOR SELECT USING (is_published = true);

-- Lectura pública de imágenes de proyectos publicados
CREATE POLICY "Public read project images"
  ON project_images FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = project_images.project_id
      AND projects.is_published = true
    )
  );

-- Admin: escritura para usuarios autenticados
CREATE POLICY "Auth manage categories"
  ON categories FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "Auth manage projects"
  ON projects FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "Auth manage project_images"
  ON project_images FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

-- =====================================================
-- Storage: Crear bucket "portfolio" público
-- =====================================================
-- Ve a Storage en tu Supabase dashboard y crea un bucket llamado "portfolio".
-- Activa el acceso público para este bucket.
-- O ejecuta esto si tienes permisos:
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio', 'portfolio', true)
ON CONFLICT (id) DO NOTHING;

-- Política de lectura pública para el bucket
CREATE POLICY "Public read portfolio storage"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'portfolio');

-- Política de escritura para usuarios autenticados
CREATE POLICY "Auth upload portfolio storage"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'portfolio');

CREATE POLICY "Auth update portfolio storage"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'portfolio');

CREATE POLICY "Auth delete portfolio storage"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'portfolio');

-- =====================================================
-- Seed: Categorías iniciales
-- =====================================================
INSERT INTO categories (slug, title, description, svg_icon, bg_class, text_color_class, sort_order) VALUES
  ('identidad-visual', 'Identidad Visual', 'Creación de marcas con propósito.', '/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_18.svg', 'bg-brand-light', 'text-brand-primary', 1),
  ('redes-sociales', 'Redes Sociales', 'Contenido que conecta e interactúa.', '/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_20.svg', 'bg-brand-accent/20', 'text-brand-secondary', 2),
  ('fotografia', 'Fotografía', 'Imágenes que cuentan tu historia.', '/images/elements/SIN FONDO/GRAFICOS SVG SIN FONDO_10.svg', 'bg-brand-muted/20', 'text-brand-primary', 3);
