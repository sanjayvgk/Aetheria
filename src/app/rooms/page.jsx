"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { useRef, useState } from "react";
import BookingOptionsModal from '@/components/BookingOptionsModal';

const RoomsListingPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  // Data array for the properties
  const propertiesData = [
    {
      id: 1,
      cat:'1bhk',
      badge: "Most Popular",
      badgeColor: "bg-[#C5A85A]", // Gold
      type: "Apartment",
      rating: 4.9,
      title: "1BHK Penthouse",
      description: "A beautifully designed 1-bedroom apartment ideal for couples and solo travelers. Features a fully equipped kitchen and cozy living area",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sq.ft",
      amenities: ["Free WiFi", "Full Kitchen", "Air Conditioning", "Smart TV", "Free Parking"],
      originalPrice: "4,200",
      price: "3,500",
      priceDetails: "₹3,500 for 1 night",
      urgency: "",
      isAvailable: true,
      imageUrl: "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812472/7G0A8872-HDR_t1ktwx.jpg",
    },
    {
      id: 2,
       cat:'2bk',
      badge: "Family Choice",
      badgeColor: "bg-[#2A5C32]", // Green
      type: "Apartment",
      rating: 4.8,
      title: "2BHK Standard",
      description: "Spacious 2-bedroom apartment with separate dining and full kitchen. Perfect for families and groups.",
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      area: "1100 sq.ft",
      amenities: ["Free WiFi", "Full Kitchen", "2x Air Conditioning", "Smart TV", "Free Parking"],
      originalPrice: "6,500",
      price: "4,500",
      priceDetails: "₹4,500 for 1 night",
      urgency: "",
      isAvailable: true,
      imageUrl: "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812396/7G0A9082-HDR_debnmw.jpg",
    },
    {
      id: 3,
       cat:'2bhk',
      badge: "Best Views",
      badgeColor: "bg-[#8B5CF6]", // Purple
      type: "Suite",
      rating: 5.0,
      title: "2BHK Deluxe",
      description: "An elegant suite with premium furnishings, private balcony, and stunning mountain views. Ideal for a romantic getaway.",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      area: "900 sq.ft",
      amenities: ["High-Speed WiFi", "Kitchenette", "Air Conditioning", "55\" Smart TV", "Valet Parking"],
      originalPrice: "9,000",
      price: "4,800",
      priceDetails: "₹4,800 for 1 night",
      urgency: "",
      isAvailable: true,
      imageUrl: "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772810934/7G0A8973-HDR_yk9qhp.jpg",
    }
  ];


  // Inside your component:
const checkInRef = useRef(null);
const checkOutRef = useRef(null);

const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");

// Date helpers
const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
};
const minCheckInDate = getTomorrowDate();

const getMinCheckOutDate = () => {
    if (!checkIn) return minCheckInDate;
    const checkInDate = new Date(checkIn);
    checkInDate.setDate(checkInDate.getDate() + 1);
    return checkInDate.toISOString().split('T')[0];
};

  return (
    <>
    <Header />
    <div className="min-h-screen bg-[#F8F7F2] font-sans pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#2A5C32] pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-[#C5A85A] font-bold tracking-widest text-xs uppercase mb-3">
            Aetheria Hospitality
          </h4>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-2">
            Rooms & Services
          </h1>
          <p className="text-white/80 text-lg">
            Best service apartments in Chikmagalur — book direct for the best rate
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
        
        {/* Search & Booking Bar */}
        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-3 flex flex-col md:flex-row gap-3 mb-8">
    {/* Check-in */}
    <div 
        onClick={() => checkInRef.current?.showPicker && checkInRef.current.showPicker()}
        className="flex-1 flex items-center border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-[#C5A85A] transition-colors"
    >
        <svg className="w-5 h-5 text-[#C5A85A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <div className="w-full">
            <div className="text-xs text-gray-500">Check-in</div>
            <input
                ref={checkInRef}
                type="date"
                min={minCheckInDate}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className={`bg-transparent border-none outline-none text-sm font-medium w-full cursor-pointer p-0 m-0 
                    [&::-webkit-calendar-picker-indicator]:opacity-100 
                    [&::-webkit-calendar-picker-indicator]:cursor-pointer 
                    dark:[color-scheme:light] 
                    ${!checkIn ? "text-gray-400" : "text-[#1A1A1A]"}`}
            />
        </div>
    </div>

    {/* Check-out */}
    <div 
        onClick={() => checkOutRef.current?.showPicker && checkOutRef.current.showPicker()}
        className="flex-1 flex items-center border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-[#C5A85A] transition-colors"
    >
        <svg className="w-5 h-5 text-[#C5A85A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <div className="w-full">
            <div className="text-xs text-gray-500">Check-out</div>
            <input
                ref={checkOutRef}
                type="date"
                min={getMinCheckOutDate()}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className={`bg-transparent border-none outline-none text-sm font-medium w-full cursor-pointer p-0 m-0 
                    [&::-webkit-calendar-picker-indicator]:opacity-100 
                    [&::-webkit-calendar-picker-indicator]:cursor-pointer 
                    dark:[color-scheme:light] 
                    ${!checkOut ? "text-gray-400" : "text-[#1A1A1A]"}`}
            />
        </div>
    </div>

    {/* Guests (Kept exactly as you had it) */}
    <div className="w-full md:w-48 flex items-center border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-[#C5A85A] transition-colors">
        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <div className="w-full flex justify-between items-center">
            <div>
                <div className="text-xs text-gray-500">Guests</div>
                <div className="text-sm font-medium text-[#1A1A1A]">2 Guests</div>
            </div>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </div>

    {/* Updated Button */}
    <button onClick={() => setIsBookingModalOpen(true)} className="bg-[#2A5C32] hover:bg-[#1e4424] text-white font-semibold rounded-lg px-8 py-3 transition-colors">
        Book Now
    </button>
</div>

        {/* Filters & Sorting */}
        {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-3 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar">
            <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            <span className="text-gray-600 text-sm whitespace-nowrap">Filter by guests:</span>
            <button className="bg-[#2A5C32] text-white text-sm px-4 py-1.5 rounded-full whitespace-nowrap">All</button>
            <button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm px-4 py-1.5 rounded-full whitespace-nowrap transition-colors">≤2 guests</button>
            <button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm px-4 py-1.5 rounded-full whitespace-nowrap transition-colors">≤4 guests</button>
            <button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm px-4 py-1.5 rounded-full whitespace-nowrap transition-colors">≤6+ guests</button>
          </div>
          <div className="flex items-center gap-2 shrink-0 border border-gray-200 bg-white rounded-lg px-3 py-1.5">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
            <select className="bg-transparent text-sm text-[#1A1A1A] font-medium outline-none cursor-pointer">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div> */}

        <p className="text-gray-500 text-sm mb-6">
          Showing {propertiesData.length} properties for 1 night · 5 Mar – 6 Mar 2026
        </p>

        {/* Property List */}
        <div className="flex flex-col gap-6">
          {propertiesData.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col md:flex-row">
              
              {/* Image Box */}
              <div className="relative w-full md:w-[320px] lg:w-[380px] h-64 md:h-auto shrink-0">
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className={`w-full h-full object-cover ${!property.isAvailable ? 'grayscale opacity-80' : ''}`}
                />
                <div className={`absolute top-4 left-4 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${property.badgeColor}`}>
                  {property.badge}
                </div>
                {!property.isAvailable && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="bg-[#FF4444] text-white font-bold px-4 py-1.5 rounded-full text-sm shadow-lg">
                      Fully Booked
                    </span>
                  </div>
                )}
              </div>

              {/* Middle Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-[#EAF1EA] text-[#2A5C32] text-xs font-semibold px-2.5 py-1 rounded-full">
                      {property.type}
                    </span>
                    <div className="bg-[#2A5C32] text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                      <span>★</span> {property.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {property.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center text-gray-500 text-xs mb-4 gap-2">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      {property.guests} Guests
                    </div>
                    <span>•</span>
                    <span>{property.bedrooms} Bedroom{property.bedrooms > 1 ? 's' : ''}</span>
                    <span>•</span>
                    <span>{property.bathrooms} Bathroom{property.bathrooms > 1 ? 's' : ''}</span>
                    <span>•</span>
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Amenities tags */}
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 border border-gray-200 text-gray-600 text-xs px-2.5 py-1.5 rounded-lg">
                      {/* Generic icon for amenities to keep it simple */}
                      <svg className="w-3.5 h-3.5 text-[#2A5C32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Pricing Sidebar */}
              <div className="w-full md:w-[260px] p-6 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-between shrink-0 bg-[#FAFAFA] md:bg-white">
                <div>
                  <div className="text-gray-400 text-xs line-through mb-1">
                    ₹{property.originalPrice} /night
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-serif text-[#1A1A1A] font-bold">₹{property.price}</span>
                    <span className="text-gray-500 text-sm">/night</span>
                  </div>
                  <div className="text-gray-500 text-xs mb-1">
                    {property.priceDetails}
                  </div>
                  <div className="text-[#2A5C32] text-xs mb-2">
                    + taxes & fees
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[#C5A85A] text-xs mb-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Free Cancellation
                  </div>
                  
                  {property.urgency && property.isAvailable && (
                    <div className="flex items-center gap-1 text-[#FF4444] text-xs font-medium">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      {property.urgency}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  <a href={`/rooms/${property.cat}`} className="w-full text-center bg-white border border-[#2A5C32] text-[#2A5C32] font-semibold text-sm py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                    View Details
                  </a>
                  {property.isAvailable ? (
                    <button onClick={() => setIsBookingModalOpen(true)} className="w-full bg-[#C5A85A] hover:bg-[#b0944b] text-white font-semibold text-sm py-2.5 rounded-lg transition-colors">
                      Reserve Now
                    </button>
                  ) : (
                    <button className="w-full bg-gray-200 text-gray-500 font-semibold text-sm py-2.5 rounded-lg cursor-not-allowed">
                      Unavailable
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>


    </div>
    <Footer/>
    <BookingOptionsModal 
      isOpen={isBookingModalOpen} 
      onClose={() => setIsBookingModalOpen(false)}
      checkIn="05-03-2026"
      checkOut="06-03-2026"
      guests="2"
    />
    </>
  );
};

export default RoomsListingPage;