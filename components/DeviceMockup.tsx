import Image from "next/image";

interface DeviceMockupProps {
  imageSrc: string;
  altText?: string;
  className?: string;
}

export default function DeviceMockup({ imageSrc, altText = "Mockup", className = "" }: DeviceMockupProps) {
  return (
    <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[12px] rounded-[3rem] h-[600px] w-[280px] shadow-2xl overflow-hidden ring-4 ring-white/10 ${className}`}>
      {/* Notch / Dynamic Island */}
      <div className="w-[120px] h-[25px] bg-gray-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20"></div>
      
      {/* Screen Content */}
      <div className="w-full h-full bg-[#111] relative rounded-[2rem] overflow-hidden flex items-center justify-center">
        {imageSrc ? (
          <Image 
            src={imageSrc} 
            alt={altText}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="text-white/20 flex flex-col items-center gap-2">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-medium">Sin imagen</span>
          </div>
        )}
      </div>
    </div>
  );
}
