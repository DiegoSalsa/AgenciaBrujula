/**
 * Converts an image File to WebP format using the browser Canvas API.
 * Maintains visual quality while significantly reducing file size.
 * 
 * @param file - The original image file
 * @param quality - WebP quality (0 to 1). Default 0.85 = great quality, ~60-70% size reduction
 * @param maxWidth - Max width in pixels. Images wider than this will be resized proportionally.
 * @returns A new File object in WebP format
 */
export async function convertToWebP(
  file: File,
  quality: number = 0.85,
  maxWidth: number = 2000
): Promise<File> {
  // If already WebP or is an SVG, skip conversion
  if (file.type === "image/webp" || file.type === "image/svg+xml") {
    return file;
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // Calculate dimensions (resize if too large)
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      // Draw to canvas
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      // Convert to WebP blob
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Could not convert image to WebP"));
            return;
          }

          // Generate new filename with .webp extension
          const originalName = file.name.replace(/\.[^/.]+$/, "");
          const webpFile = new File([blob], `${originalName}.webp`, {
            type: "image/webp",
          });

          resolve(webpFile);
        },
        "image/webp",
        quality
      );
    };

    img.onerror = () => reject(new Error("Could not load image"));
    img.src = URL.createObjectURL(file);
  });
}

/**
 * Formats file size in human-readable format.
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
