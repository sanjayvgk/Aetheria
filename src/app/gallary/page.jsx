"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';

const GalleryPage = () => {
  // 1. Manage State for filtering and the Lightbox modal
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // 2. Dummy data for the gallery images
  const galleryData = [
    {
      id: 1,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812403/7G0A9155_jijhzj.jpg',
      alt: '',
    },
    {
      id: 2,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812401/7G0A9154_g1ykrk.jpg',
      alt: '',
    },
    {
      id: 3,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812400/7G0A9103-HDR_zitur0.jpg',
      alt: '',
    },
    {
      id: 4,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812398/7G0A9097-HDR_zhzue5.jpg',
      alt: '',
    },
    {
      id: 5,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812396/7G0A9082-HDR_debnmw.jpg',
      alt: '',
    },
    {
      id: 6,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812395/7G0A9079-HDR_nypeeq.jpg',
      alt: '',
    },
    {
      id: 7,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812393/7G0A9076-HDR_fvvqfg.jpg',
      alt: 'Cabins on the hillside',
    },
    {
      id: 8,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812393/7G0A9070-HDR_hstred.jpg',
      alt: '',
    },
    {
      id: 9,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812393/7G0A9033-HDR_kztrrn.jpg',
      alt: '',
    },
    {
      id: 10,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812069/7G0A9097-HDR_jfqpkq.jpg',
      alt: '',
    },
    {
      id: 11,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812069/7G0A9103-HDR_yfjlmg.jpg',
      alt: '',
    },
    {
      id: 12,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812069/7G0A9100-HDR_at3yoy.jpg',
      alt: '',
    },
    {
      id: 13,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812066/7G0A8991-HDR_fwejmk.jpg',
      alt: '',
    },
    {
      id: 14,
      category: 'Standard Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812062/7G0A8832-Edit_d8lrka.jpg',
      alt: '',
    },
    {
      id: 15,
      category: '1BHK Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812473/7G0A8878-HDR_xxudzp.jpg',
      alt: '',
    },
    {
      id: 16,
      category: '1BHK Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812472/7G0A8872-HDR_t1ktwx.jpg',
      alt: '',
    },
    {
      id: 17,
      category: '1BHK Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812471/7G0A8863-HDR_nlng41.jpg',
      alt: '',
    },
    {
      id: 18,
      category: '1BHK Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812483/7G0A8961_sfh6v8.jpg',
      alt: '',
    },
    {
      id: 19,
      category: '1BHK Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812479/7G0A8908-HDR_uhw9qc.jpg',
      alt: '',
    },
    {
      id: 20,
      category: '1BHK Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812475/7G0A8881-HDR_yqrtag.jpg',
      alt: '',
    },
    {
      id: 21,
      category: '1BHK Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812393/7G0A9076-HDR_fvvqfg.jpg',
      alt: 'Cabins on the hillside',
    },
    {
      id: 22,
      category: '1BHK Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812393/7G0A9070-HDR_hstred.jpg',
      alt: '',
    },
    {
      id: 23,
      category: '1BHK Apartment',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812393/7G0A9033-HDR_kztrrn.jpg',
      alt: '',
    },
{
      id: 24,
      category: 'Delux Room',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772810936/7G0A8970-HDR_r6ojca.jpg',
      alt: '',
    },
    {
      id: 25,
      category: 'Delux Room',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772810935/7G0A8923-HDR_jhgcyw.jpg',
      alt: '',
    },
    {
      id: 26,
      category: 'Delux Room',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772810935/7G0A8932-HDR_oswff9.jpg',
      alt: '',
    },
    {
      id: 27,
      category: 'Delux Room',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772810935/7G0A9039-HDR_eabp5o.jpg',
      alt: 'Cabins on the hillside',
    },
    {
      id: 28,
      category: 'Delux Room',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772810934/7G0A8914-HDR_a3bjuw.jpg',
      alt: '',
    },
    {
      id: 29,
      category: 'Delux Room',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772810934/7G0A8973-HDR_yk9qhp.jpg',
      alt: '',
    },
    {
      id: 30,
      category: 'Delux Room',
      imageUrl: 'https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772810934/7G0A8994-HDR_jaylmw.jpg',
      alt: '',
    }



  ];

  // 3. Category definitions with counts (dynamic or static)
  const categories = [
    { name: 'All', count: galleryData.length },
    { name: 'Standard Apartment', count: galleryData.filter(item => item.category === 'Standard Apartment').length },
    { name: 'Delux Room', count: galleryData.filter(item => item.category === 'Delux Room').length },
    { name: '1BHK Apartment', count: galleryData.filter(item => item.category === '1BHK Apartment').length }
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <>
    <Header />
    <div className="min-h-screen bg-white font-sans">
      
      {/* Header Banner */}
      <div className="bg-[#2A5C32] pt-20 pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-[#C5A85A] font-bold tracking-widest text-md uppercase mb-3">
            Visual Journey
          </h4>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-3">
            Our Gallery
          </h1>
          <p className="text-white/80 text-base">
            A visual tour of Aetheria Hospitality — where luxury meets nature
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        
        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`text-sm px-5 py-2 rounded-full transition-colors flex items-center gap-1.5 border
                ${activeCategory === cat.name 
                  ? 'bg-[#2A5C32] text-white border-[#2A5C32]' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
            >
              {cat.name} 
              <span className={`text-[11px] ${activeCategory === cat.name ? 'text-white/80' : 'text-gray-400'}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* Masonry Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-[1.5rem]"
              onClick={() => setSelectedImage(item)}
            >
              {/* Image */}
              <img 
                src={item.imageUrl} 
                alt={item.alt} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm text-[#1A1A1A] w-12 h-12 rounded-full flex items-center justify-center transition-opacity duration-300 transform scale-75 group-hover:scale-100 shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12">
          
          {/* Dark Backdrop (Click to close) */}
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedImage(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-5xl max-h-full flex items-center justify-center animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Enlarged Image */}
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            
            {/* Image Caption/Label inside Modal */}
            <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
              <span className="bg-black/60 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full shadow-lg inline-block">
                {selectedImage.alt}
              </span>
            </div>

          </div>
        </div>
      )}

    </div>
    <Footer/>
    </>
  );
};

export default GalleryPage;