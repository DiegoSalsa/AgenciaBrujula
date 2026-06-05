-- =====================================================
-- Migración: Text color for projects
-- =====================================================
-- Ejecuta este script DESPUÉS del schema.sql inicial y de migration_001.

-- Agregar campo de text color a proyectos
ALTER TABLE projects ADD COLUMN IF NOT EXISTS text_color TEXT DEFAULT '#ffffff';
