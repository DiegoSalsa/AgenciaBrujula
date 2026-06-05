-- =====================================================
-- Migración: Layout templates + aspect ratios
-- =====================================================
-- Ejecuta este script DESPUÉS del schema.sql inicial.

-- Agregar campo de layout template a proyectos
ALTER TABLE projects ADD COLUMN IF NOT EXISTS layout_template TEXT DEFAULT 'grid-left-phone-right';

-- Agregar aspect ratio a imágenes del grid
ALTER TABLE project_images ADD COLUMN IF NOT EXISTS aspect_ratio TEXT DEFAULT 'square';
-- Valores posibles: 'square' (1:1 post), 'story' (9:16 historia), 'landscape' (16:9 horizontal)
