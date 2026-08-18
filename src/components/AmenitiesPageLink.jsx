import React from 'react';

const LandingPageSection = () => {
  return (
    <div className="min-h-screen bg-[#F8F7F2] py-16 px-6 lg:px-20 flex items-center justify-center relative font-sans">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text & Amenities */}
        <div>
          <h4 className="text-[#BE9F55] font-bold tracking-widest text-xs uppercase mb-4">
            Why Choose Us
          </h4>
          
          <h1 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight mb-6">
            Your Home Away from Home <br />
            <span className="italic text-[#306C39]">in Nature's Lap</span>
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed max-w-lg">
            Aetheria Hospitality offers a rare combination of luxury service apartment
            living with the tranquil beauty of Chikmagalur's coffee estates. Every detail is
            curated for your comfort and delight.
          </p>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg">
            
            {/* Amenity 1 */}
            <div className="flex items-center p-4 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#EAF1EA] flex items-center justify-center shrink-0 mr-4">
                <svg className="w-5 h-5 text-[#306C39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[#1A1A1A] font-semibold text-sm">High-Speed WiFi</h3>
                <p className="text-gray-500 text-xs">Stay connected always</p>
              </div>
            </div>

            {/* Amenity 2 */}
            <div className="flex items-center p-4 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#EAF1EA] flex items-center justify-center shrink-0 mr-4">
                <svg className="w-5 h-5 text-[#306C39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v6zM9 21v-4M15 21v-4M7 7V3M17 7V3"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[#1A1A1A] font-semibold text-sm">Full Kitchen</h3>
                <p className="text-gray-500 text-xs">Cook your own meals</p>
              </div>
            </div>

            {/* Amenity 3 */}
            <div className="flex items-center p-4 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#EAF1EA] flex items-center justify-center shrink-0 mr-4">
                <svg className="w-5 h-5 text-[#306C39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[#1A1A1A] font-semibold text-sm">Free Parking</h3>
                <p className="text-gray-500 text-xs">Secure on-site parking</p>
              </div>
            </div>

            {/* Amenity 4 */}
            {/* <div className="flex items-center p-4 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#EAF1EA] flex items-center justify-center shrink-0 mr-4">
                <svg className="w-5 h-5 text-[#306C39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[#1A1A1A] font-semibold text-sm">Nature Views</h3>
                <p className="text-gray-500 text-xs">Scenic estate surrounds</p>
              </div>
            </div> */}
          </div>

          <a href="amenities" className="inline-flex items-center text-[#306C39] font-bold text-sm hover:underline">
            View All Amenities
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>

        {/* Right Column: Image & Overlays */}
        <div className="relative mt-12 lg:mt-0">
          {/* Main Image placeholder */}
          <img 
            src="https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1776435603/aethi_jgjaxn.jpg" 
            alt="Cabins in nature" 
            className="w-full h-auto object-cover rounded-[2rem] shadow-lg"
          />

          {/* Top Right Guest Rating Badge */}
          <div className="absolute -top-6 -right-4 lg:-right-8 bg-[#2A5C32] text-white p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center w-28 h-28 transform hover:scale-105 transition-transform duration-300">
            <span className="text-2xl font-bold font-serif">4.9</span>
            <div className="flex text-[#FFD700] text-[10px] my-1 gap-[1px]">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="text-[10px] uppercase tracking-wide">Guest Rating</span>
          </div>

          {/* Bottom Left Trusted Badge */}
          <div className="absolute -bottom-8 -left-4 lg:-left-12 bg-white px-5 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#C5A85A] text-white flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-[#1A1A1A] font-bold text-sm">Trusted by 2000+</h4>
              <p className="text-gray-500 text-xs">Happy Guests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Absolutely stunning property! The apartment was spotless, the views were breathtaking, and the staff were incredibly helpful. We'll definitely be back */}
      
    </div>
  );
};

export default LandingPageSection; 