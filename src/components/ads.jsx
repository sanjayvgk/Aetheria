"use client";
import React, { useState } from "react";

const AetheriaAdBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleRedirect = () => {
    // Replace hwith your actual Aetheria Estate Retreat booking or landing page URL
    window.open("https://www.google.com/search?q=aetheria+estate+retreat&oq=a&gs_lcrp=EgZjaHJvbWUqDAgDECMYJxiABBiKBTIGCAAQRRg5MgYIARBFGDwyDAgCEAAYQxiABBiKBTIMCAMQIxgnGIAEGIoFMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1NzY1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8", "_blank");
  };

  const handleClose = (e) => {
    e.stopPropagation(); // Prevents the click from triggering the redirect
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-[360px] max-w-sm animate-fade-in-up">
      <div 
        onClick={handleRedirect}
        className="relative bg-gradient-to-br from-[#1e3d22] via-[#2e5733] to-[#3a6b40] rounded-sm shadow-2xl cursor-pointer group overflow-hidden border border-[#cca354]/30 transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Decorative Gold Ring (Branding) */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full border border-[#cca354]/20 pointer-events-none group-hover:scale-110 transition-transform duration-500" />
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/40 transition-colors duration-200"
          aria-label="Close advertisement"
        >
          <svg className="w-3.5 h-3.5 stroke-white/80 hover:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center p-4">
          {/* Image / Icon Placeholder */}
          <div className="w-16 h-16 bg-[#faf9f7] rounded-sm flex-shrink-0 flex items-center justify-center overflow-hidden border border-[#cca354]/50">
  {/* Standard CSS with object-fit: cover */}
  <img
    src="https://lh3.googleusercontent.com/p/AF1QipPWR7MK_uHVo5uNtzdleyZ1Qj3faE5u0H5HSiq4=w243-h174-n-k-no-nu"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }}
  />
</div>
          {/* Ad Content */}
          <div className="ml-4 flex-1 pr-6">
            <p className="text-[9px] uppercase tracking-widest text-[#cca354] font-medium mb-1">
              Featured Property
            </p>
            <h4 className="font-serif text-sm sm:text-base font-medium text-white leading-snug mb-1">
              Aetheria Estate Retreat
            </h4>
            <p className="text-[10px] text-white/70 line-clamp-2">
              Experience luxury living amidst nature. Book your exclusive stay today.
            </p>
            
            <div className="mt-2 flex items-center gap-1 text-[10px] text-[#cca354] font-medium group-hover:text-white transition-colors duration-200">
              Explore Now
              <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animation (add to your global CSS if not already present) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AetheriaAdBanner;