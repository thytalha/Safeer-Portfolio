"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

interface CertificateCardProps {
  title: string;
  imageFilename: string;
  index: number;
}

export function CertificateCard({ title, imageFilename, index }: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div 
        className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all cursor-pointer focus-within:ring-2 focus-within:ring-medical-teal outline-none"
        onClick={() => setIsOpen(true)}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
        aria-label={`View full certificate for ${title}`}
      >
        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center">
          {/* Fallback when images aren't present yet */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
             <span className="text-xs">Place {imageFilename} in public/images/certificates/</span>
          </div>
          {/* 
            <Image 
              src={`/images/certificates/${imageFilename}`} 
              alt={title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          */}
          <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors flex items-center justify-center">
            <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <Maximize2 className="h-5 w-5 text-navy-900" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-medium text-navy-900 leading-snug line-clamp-3" title={title}>
            {title}
          </h3>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setIsOpen(false)}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
            <button 
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
              autoFocus
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          
          <div 
            className="relative w-full max-w-5xl max-h-[85vh] bg-slate-900 rounded-lg overflow-hidden shadow-2xl flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-8 w-full text-center border-b border-slate-800">
              <h3 className="text-xl sm:text-2xl font-serif text-white">{title}</h3>
            </div>
            <div className="relative w-full flex-grow flex items-center justify-center p-4 bg-slate-800/50 min-h-[50vh]">
               <div className="text-slate-400 text-center">
                 <p className="mb-2">Image Placeholder</p>
                 <p className="text-sm">/images/certificates/{imageFilename}</p>
               </div>
              {/* 
                <Image 
                  src={`/images/certificates/${imageFilename}`} 
                  alt={title} 
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  quality={100}
                />
              */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
