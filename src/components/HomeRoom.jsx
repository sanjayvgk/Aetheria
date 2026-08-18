"use client";
import React, { useState } from 'react';
import BookingOptionsModal from './BookingOptionsModal';
import { useBooking } from '@/context/BookingContext';

const RoomsSection = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { bookingData } = useBooking();
  
  // Data array mimicking your room details
  const roomsData = [
    {
      id: 1,
      title: "1BHK Penthouse",
      description: "Cozy and well-equipped apartment perfect for couples or solo travelers seeking comfort.",
      guests: 2,
      area: "650 sq.ft",
      amenities: ["WiFi", "Kitchen", "AC", "TV"],
      price: "3,500",
      badge: "Most Popular",
      availability: "",
      imageUrl: "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812472/7G0A8872-HDR_t1ktwx.jpg",
    },
    {
      id: 2,
      title: "2BHK Standard",
      description: "Spacious family apartment with separate bedrooms, full kitchen, and stunning views.",
      guests: 4,
      area: "1100 sq.ft",
      amenities: ["WiFi", "Kitchen", "2 AC", "Parking"],
      price: "4,500",
      badge: "Family Choice",
      availability: "",
      imageUrl: "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812396/7G0A9082-HDR_debnmw.jpg",
    },
    {
      id: 3,
      title: "2BHK Deluxe",
      description: "The pinnacle of luxury — panoramic views, premium furnishings, and exclusive amenities.",
      guests: 6,
      area: "1800 sq.ft",
      amenities: ["WiFi", "Full Kitchen", "3 AC", "Butler"],
      price: "4,800",
      badge: "Luxury Pick",
      availability: "",
      imageUrl: "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772810934/7G0A8973-HDR_yk9qhp.jpg",
    }
  ];

  return (
    <section className="bg-white py-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h4 className="text-[#C5A85A] font-bold tracking-widest text-md uppercase mb-3">
            Our Spaces
          </h4>
          <h2 className="text-4xl md:text-5xl font-sans text-[#1A1A1A] mb-4">
            Rooms & Services
          </h2>
          <p className="text-gray-500 text-base md:text-md font-serif">
            From cozy 1BHK apartments to our sprawling penthouse suite — find the perfect space for your Chikmagalur escape.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid mx-auto md:px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {roomsData.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300">
              
              {/* Image & Overlays */}
              <div className="relative h-50 w-full">
                <img 
                  src={room.imageUrl} 
                  alt={room.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Top Left Badge */}
                <div className="absolute top-4 left-4 bg-[#C5A85A] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  {room.badge}
                </div>
                
                {/* Bottom Right Availability Badge */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md">
                  {room.availability}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[#1A1A1A] text-xl font-serif mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-500 text-sm mb-5 flex-grow">
                  {room.description}
                </p>

                {/* Meta Details (Guests & Area) */}
                <div className="flex items-center text-gray-500 text-xs mb-4 gap-3">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    <span>{room.guests} Guests</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span>{room.area}</span>
                </div>

                {/* Amenities Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity, index) => (
                    <span 
                      key={index} 
                      className="bg-[#EAF1EA] text-[#306C39] text-xs px-2.5 py-1 rounded-full font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Footer (Price & Reserve Button) */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#1A1A1A] font-bold text-2xl font-serif">₹{room.price}</span>
                    <span className="text-gray-500 text-sm">/night</span>
                  </div>
                  <button 
                    onClick={() => setShowBookingModal(true)}
                    className="bg-[#2A5C32] hover:bg-[#1e4424] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
                  >
                    Reserve
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-4">
          <a href='/rooms' className="bg-white border-2 border-[#2A5C32] text-[#2A5C32] hover:bg-[#f0f6f1] font-semibold px-8 py-2.5 rounded-lg transition-colors">
            View All Rooms
          </a>
        </div>

      </div>

      {/* Booking Options Modal */}
      <BookingOptionsModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        checkIn={bookingData.checkIn}
        checkOut={bookingData.checkOut}
        guests={bookingData.guests}
      />
    </section>
  );
};

export default RoomsSection;