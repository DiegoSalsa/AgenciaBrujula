"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56990746646"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      id="whatsapp-floating-btn"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-brand-primary shadow-[0_4px_20px_rgba(85,18,115,0.5)] hover:shadow-[0_6px_30px_rgba(85,18,115,0.7)] transition-all duration-300 hover:scale-110 flex items-center justify-center">
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-brand-primary animate-ping opacity-20" />
        
        {/* WhatsApp SVG with custom colors: #551273 bg, #F3B900 icon */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 md:w-10 md:h-10 relative z-10"
        >
          {/* Phone icon path (WhatsApp logo shape) */}
          <path
            d="M16.004 3.2C9.05 3.2 3.4 8.85 3.4 15.8c0 2.22.58 4.39 1.68 6.3L3.2 28.8l6.92-1.82a12.56 12.56 0 006.03 1.54h.01c6.95 0 12.64-5.65 12.64-12.6 0-3.37-1.31-6.53-3.7-8.91a12.53 12.53 0 00-8.93-3.8h-.01zM16.01 5.45c2.87 0 5.57 1.12 7.6 3.15a10.7 10.7 0 013.14 7.61c0 5.92-4.82 10.74-10.75 10.74a10.7 10.7 0 01-5.14-1.32l-.37-.22-3.84 1.01 1.03-3.76-.24-.38A10.67 10.67 0 015.65 15.8c0-5.92 4.82-10.74 10.74-10.74l-.38.39z"
            fill="#F3B900"
          />
          <path
            d="M12.14 10.32c-.27-.6-.56-.61-.82-.62h-.7c-.24 0-.64.09-.97.46-.34.37-1.28 1.25-1.28 3.04 0 1.79 1.31 3.52 1.49 3.76.18.24 2.53 4.04 6.22 5.5.87.34 1.55.54 2.07.7.87.27 1.66.23 2.29.14.7-.1 2.15-.88 2.45-1.73.3-.85.3-1.57.21-1.73-.09-.15-.34-.24-.7-.42-.37-.18-2.16-1.07-2.5-1.19-.34-.12-.58-.18-.82.18-.24.37-.94 1.19-1.15 1.43-.21.24-.43.27-.79.09-.37-.18-1.55-.57-2.95-1.82-1.09-.97-1.83-2.17-2.04-2.54-.21-.37-.02-.57.16-.75.16-.16.37-.43.55-.64.18-.21.24-.37.37-.61.12-.24.06-.46-.03-.64-.09-.18-.82-1.97-1.13-2.7z"
            fill="#F3B900"
          />
        </svg>
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-brand-primary text-sm font-bold px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Escríbenos!
      </span>
    </a>
  );
}
