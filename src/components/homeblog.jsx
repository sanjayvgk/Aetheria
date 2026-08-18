import React from 'react';
import Link from 'next/link';

const NearbyAttractions = () => {
  const attractions = [
    {
      id: 1,
      title: 'Service Apartment in Chikkamagaluru',
      distance: 'Aetheria Hospitality',
      description: 'Family-Friendly Stay (Complete Guide 2026)Highest peak in Karnataka with breathtaking 360° views',
      image: 'https://res.cloudinary.com/djfxdsmvk/image/upload/v1772124899/atheria_p1xrgl.jpg', 
    },
    {
      id: 2,
      title: 'Apartment vs Hotels in Chikkamagaluru',
      distance: 'Aetheria Hospitality',
      description: 'Service Apartment in Chikkamagaluru vs Hotels – Best Stay Guide (2026)',
      image: 'https://res.cloudinary.com/djfxdsmvk/image/upload/v1772125140/WhatsApp_Image_2026-02-26_at_10.22.55_PM_ggikqd.jpg',
    },
    {
      id: 3,
      title: 'Best Places to Visit in Chikkamagaluru',
      distance: 'Aetheria Hospitality',
      description: 'Best Places to Visit in Chikkamagaluru – Complete 2026 Travel Guide',
      image: 'https://res.cloudinary.com/djfxdsmvk/image/upload/v1771608514/blog1_kiblex.jpg',
    },
  ];
  return (
    <section className="bg-white py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <p className="font-serif text-lg font-semibold tracking-widest text-[#cca354] mb-2">
            Explore Blogs
          </p>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Our Explaintion
          </h2>
          <p className="text-gray-500 text-lg font-serif">
            Discover the best of Chikmagalur from our doorstep
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <Link 
              key={attraction.id}
              href={`/blogs?id=${attraction.id}`}
              className="block"
            >
              <div 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col cursor-pointer transition-transform hover:scale-105"
              >
              {/* Image Container with Gradient Overlay */}
              <div className="relative h-64 w-full">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Text overlay on image */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex items-center text-[#cca354] text-sm mb-2 font-medium">
                    <svg 
                      className="w-4 h-4 mr-1.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {attraction.distance}
                  </div>
                  <h3 className="text-white text-2xl font-semibold tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                    {attraction.title}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 grow flex flex-col justify-center">
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {attraction.description}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default NearbyAttractions;