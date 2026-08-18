"use client"
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Maximize, 
  Bed, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Hexagon 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingOptionsModal from '@/components/BookingOptionsModal';

const RoomDetailsPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const images = [
    "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812398/7G0A9097-HDR_zhzue5.jpg",
    "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812400/7G0A9103-HDR_zitur0.jpg",
    "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812401/7G0A9154_g1ykrk.jpg",
    "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812403/7G0A9155_jijhzj.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- NEW: Form State ---
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2');

  // --- NEW: Dynamic Price Calculation ---
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1; 
  };

  const nights = calculateNights();
  const basePricePerNight = 6500; // Updated to match the ₹6,500 header price
  const subtotal = basePricePerNight * nights;
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  // Prevent check-out date from being before check-in date
  useEffect(() => {
    if (checkOut <= checkIn) {
      const nextDay = new Date(checkIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay.toISOString().split('T')[0]);
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    window.scrollBy(0, 3);

    const handleScroll = () => {
      if (window.scrollY < 3) {
        window.scrollTo(0, 3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Header/>
    <div className="min-h-screen pt-20 bg-white font-sans text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Navigation */}
        <a href="/rooms" className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all rooms
        </a>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
          <div>
            <span className="inline-block bg-[#e8f3ee] text-[#2c5330] text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Service Apartment
            </span>
            <h1 className="text-3xl md:text-4xl font-medium mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              2BHK Standard
            </h1>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-2">
              <span className="flex items-center text-gray-700 font-medium">
                <Star className="w-4 h-4 text-[#c5a85a] mr-1.5 fill-current" /> 
                4.9 <span className="font-normal text-gray-500 ml-1">(48 reviews)</span>
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1.5" /> Up to 2 guests
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Maximize className="w-4 h-4 mr-1.5" /> 650 sq.ft
              </span>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 md:text-right">
            <div className="text-gray-400 line-through text-sm font-medium">₹6,500</div>
            <div className="text-3xl font-bold text-[#1a1a1a]">₹4,500</div>
            <div className="text-sm text-gray-500">per night</div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-10">
          <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden mb-4 group">
            <img 
              src={images[currentImageIndex]} 
              alt="Room Gallery" 
              className="w-full h-full object-cover"
            />
            {/* Gallery Controls */}
            <button 
              onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button 
              onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Room view ${idx + 1}`} 
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-full h-20 md:h-28 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity ${
                  currentImageIndex === idx ? 'border-2 border-[#c5a85a]' : ''
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Main Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <Users className="w-6 h-6 text-[#2c5330] mb-2" />
                <span className="text-sm font-semibold text-gray-900">Up to 2</span>
                <span className="text-xs text-gray-500">Guests</span>
              </div>
              <div className="border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <Bed className="w-6 h-6 text-[#2c5330] mb-2" />
                <span className="text-sm font-semibold text-gray-900">2</span>
                <span className="text-xs text-gray-500">Bedrooms</span>
              </div>
              <div className="border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <Maximize className="w-6 h-6 text-[#2c5330] mb-2" />
                <span className="text-sm font-semibold text-gray-900">650 sq.ft</span>
                <span className="text-xs text-gray-500">Area</span>
              </div>
            </div>

            {/* About This Space */}
            <div className="border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'Georgia, serif' }}>About This Space</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Our Dulex Service Apartment is the perfect retreat for couples and solo travelers seeking a home-like experience in the heart of Chikmagalur's coffee country. The apartment features a modern bedroom with a plush king-size bed and premium Egyptian cotton bedding, a bright and airy living area, a fully equipped modular kitchen, and a stylishly designed bathroom. The apartment is serviced daily by our housekeeping team, ensuring your stay is comfortable and hassle-free throughout.
              </p>
            </div>

            {/* What Makes This Special */}
            <div className="border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-medium mb-5" style={{ fontFamily: 'Georgia, serif' }}>What Makes This Special</h3>
              <ul className="space-y-4">
                {[
                  // 'Wake up to breathtaking coffee estate views',
                  'Fully equipped kitchen — perfect for long stays',
                  'Daily housekeeping included',
                  'Secure, gated property with 24/7 CCTV',
                  '5 min walk to local coffee shops & restaurants'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-[#e8f3ee] rounded-full p-1 mr-3 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#2c5330]" strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div className="border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-medium mb-6" style={{ fontFamily: 'Georgia, serif' }}>Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  'High-Speed WiFi (100 Mbps)', 'Air Conditioning',
                  '55" Smart TV with OTT', 'Fully Equipped Kitchen',
                  // 'Refrigerator', 'Microwave & Oven',
                  // 'Washing Machine', 'Daily Housekeeping',
                  'Free Parking', '24/7 Security',
                  'In-room Safe', 'Hot Water (24hr)',
                  'Premium Toiletries', 'Tea/Coffee Maker',
                  'Room Service', 'Iron & Board'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-gray-600 text-[15px]">
                    <Check className="w-4 h-4 text-[#6b7280] mr-3" strokeWidth={2.5} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-medium mb-5" style={{ fontFamily: 'Georgia, serif' }}>Policies</h3>
              <ul className="space-y-4">
                {[
                  'Check-in: 12:00 PM | Check-out: 11:00 AM',
                  'Free cancellation up to 48 hours before check-in',
                  'No smoking inside the apartment',
                  'Pets not allowed',
                  'Extra person charges apply beyond base occupancy'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Hexagon className="w-5 h-5 text-[#c5a85a] mr-3 mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-gray-600 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column (Sidebar Booking Widget) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-2xl p-6">
              
              <div className="flex items-baseline mb-6">
                <span className="text-2xl font-bold text-gray-900 mr-1">₹6,500</span>
                <span className="text-gray-500 text-sm">/night</span>
              </div>

              {/* Booking Inputs */}
              <div className="border border-gray-300 rounded-xl overflow-hidden mb-4">
                <div className="grid grid-cols-2 border-b border-gray-300">
                  <div className="p-3 border-r border-gray-300">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wide">Check-in</label>
                    <input 
                      type="date" 
                      value={checkIn}
                      min={today}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-sm outline-none mt-1 text-gray-800 bg-transparent cursor-pointer" 
                    />
                  </div>
                  <div className="p-3">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wide">Check-out</label>
                    <input 
                      type="date" 
                      value={checkOut}
                      min={checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full text-sm outline-none mt-1 text-gray-800 bg-transparent cursor-pointer" 
                    />
                  </div>
                </div>
                <div className="p-3">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wide">Guests</label>
                  <select 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full text-sm outline-none mt-1 text-gray-800 bg-transparent appearance-none cursor-pointer">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                  </select>
                </div>
              </div>

              {/* Primary CTA */}
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-[#c5a85a] hover:bg-[#b5984a] text-white font-semibold py-3.5 rounded-xl transition-colors mb-3">
                Reserve Now
              </button>
              <div className="text-center text-xs text-gray-500 mb-6">
                You won't be charged yet
              </div>

              {/* Dynamic Price Breakdown */}
              <div className="space-y-3 text-[15px] text-gray-600 border-b border-gray-100 pb-4 mb-4">
                <div className="flex justify-between">
                  <span>₹{basePricePerNight.toLocaleString()} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{gst.toLocaleString()}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg text-gray-900 mb-6">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              {/* Perks */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#2c5330] mr-2" /> Free cancellation (48 hrs before)
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Hexagon className="w-4 h-4 text-[#c5a85a] mr-2" /> Best price guaranteed
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#2c5330] mr-2" /> Complimentary tea/coffee
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="relative border-t border-gray-100 pt-6">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-gray-400">
                  Or inquire via
                </span>
                <button className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold py-3 rounded-xl transition-colors">
                  WhatsApp Us
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
     <BookingOptionsModal 
      isOpen={isBookingModalOpen} 
      onClose={() => setIsBookingModalOpen(false)}
      checkIn={checkIn}
      checkOut={checkOut}
      guests={guests}
    />
    </>
  );
};

export default RoomDetailsPage;