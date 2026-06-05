"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { uploadFile } from "@/lib/actions";
import { convertToWebP, formatFileSize } from "@/lib/imageUtils";
import { FiUploadCloud, FiX, FiLoader, FiCheck } from "react-icons/fi";

interface ImageUploaderProps {
  onUploadComplete: (url: string) => void;
  folder?: string;
  label?: string;
  currentImage?: string | null;
  accept?: string;
  className?: string;
}

export default function ImageUploader({
  onUploadComplete,
  folder = "general",
  label = "Subir imagen",
  currentImage = null,
  accept = "image/*",
  className = "",
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [converting, setConverting] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage);
  const [dragActive, setDragActive] = useState(false);
  const [sizeInfo, setSizeInfo] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    setSizeInfo("");
    setPreview(URL.createObjectURL(file));

    // Convert to WebP
    setConverting(true);
    const originalSize = file.size;
    let processedFile: File;

    try {
      processedFile = await convertToWebP(file);
      const newSize = processedFile.size;
      const reduction = Math.round((1 - newSize / originalSize) * 100);

      if (file.type !== "image/webp" && file.type !== "image/svg+xml") {
        setSizeInfo(`${formatFileSize(originalSize)} → ${formatFileSize(newSize)} (−${reduction}%)`);
      }
    } catch {
      // If conversion fails, use the original file
      processedFile = file;
    }
    setConverting(false);

    // Upload to Supabase
    const formData = new FormData();
    formData.append("file", processedFile);
    formData.append("folder", folder);

    const result = await uploadFile(formData);

    if (result.url) {
      setPreview(result.url);
      onUploadComplete(result.url);
    } else {
      setPreview(null);
      setSizeInfo("");
      alert("Error al subir: " + (result.error || "Error desconocido"));
    }

    setUploading(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const clearImage = () => {
    setPreview(null);
    setSizeInfo("");
    onUploadComplete("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-brand-light mb-2">{label}</label>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
          dragActive
            ? "border-brand-accent bg-brand-accent/10"
            : "border-white/20 hover:border-white/40 bg-white/5"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          className="hidden"
        />

        {uploading ? (
          <div className="flex flex-col items-center gap-2 py-4">
            <FiLoader className="w-8 h-8 text-brand-accent animate-spin" />
            <p className="text-sm text-white/60">
              {converting ? "Convirtiendo a WebP..." : "Subiendo..."}
            </p>
          </div>
        ) : preview ? (
          <div className="relative">
            <Image
              src={preview}
              alt="Preview"
              width={200}
              height={200}
              className="w-full h-40 object-contain rounded-lg"
            />
            {sizeInfo && (
              <div className="mt-2 flex items-center justify-center gap-1 text-xs text-green-400">
                <FiCheck className="w-3 h-3" />
                WebP: {sizeInfo}
              </div>
            )}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); clearImage(); }}
              className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-4">
            <FiUploadCloud className="w-8 h-8 text-white/40" />
            <p className="text-sm text-white/60">Arrastra una imagen aquí o haz clic</p>
            <p className="text-xs text-white/30">Se convierte automáticamente a WebP</p>
          </div>
        )}
      </div>
    </div>
  );
}
