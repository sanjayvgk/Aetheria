"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingOptionsModal from '@/components/BookingOptionsModal';
import {
  Wifi,
  Car,
  CookingPot,
  Wind,
  Shield,
  Mountain,
  Coffee,
  Shirt,
  Tv,
  Zap,
  Phone,
  ChefHat,
  Utensils,
  Microwave,
  Bath,
  Dumbbell,
  ShieldCheck,
  Camera,
  Lock,
  CarTaxiFront,
  Plane,
  Bike,
  Trees,
  Footprints,
  Bird,
  Sparkles,
  ConciergeBell,
  Baby,
  Cloud
} from 'lucide-react';

// Top Pill Amenities
const amenities = [
  { name: 'Free WiFi', icon: Wifi },
  { name: 'Free Parking', icon: Car },
  { name: 'Full Kitchen', icon: CookingPot },
  { name: 'Air Conditioning', icon: Wind },
  { name: '24/7 Security', icon: Shield },
  // { name: 'Estate Views', icon: Mountain },
  { name: 'Tea & Coffee', icon: Coffee },
  { name: 'Housekeeping', icon: Shirt },
];

// Main Grid Amenities with specific icons for Headers and Items
const amenitiesData = [
  {
    category: 'Connectivity',
    headerIcon: Wifi,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    items: [
      { title: 'High-Speed WiFi', desc: '100 Mbps fiber-optic internet throughout the property', icon: Wifi },
      { title: 'Smart TV', desc: '55" OLED Smart TVs with Netflix, Amazon Prime & more', icon: Tv },
      { title: 'Generator Backup', desc: '24/7 power backup for uninterrupted stay', icon: Zap },
      { title: 'Intercom System', desc: 'Connect with staff at any time of day', icon: Phone }
    ]
  },
  {
    category: 'Kitchen & Dining',
    headerIcon: ChefHat,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    items: [
      { title: 'Fully Equipped Kitchen', desc: 'Modular kitchen with all premium appliances', icon: ChefHat },
      { title: 'Dining Area', desc: 'Spacious dining space with quality crockery & cutlery', icon: Utensils },
      { title: 'Tea/Coffee Station', desc: 'Nespresso machine & artisan local coffee selection', icon: Coffee },
      // { title: 'Microwave & Oven', desc: 'Convection microwave oven in every apartment', icon: Microwave }
    ]
  },
  {
    category: 'Comfort & Leisure',
    headerIcon: Wind,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    items: [
      { title: 'Air Conditioning', desc: 'Premium inverter ACs in all rooms and living areas', icon: Wind },
      { title: 'Luxury Bathroom', desc: 'Rain shower, premium toiletries (Forest Essentials)', icon: Bath },
      // { title: 'Washing Machine', desc: 'In-unit washer/dryer for extended stays', icon: Shirt },
      // { title: 'Fitness Corner', desc: 'Basic fitness equipment available on request', icon: Dumbbell }
    ]
  },
  {
    category: 'Safety & Security',
    headerIcon: Shield,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    items: [
      { title: '24/7 Security', desc: 'Round-the-clock CCTV surveillance and security guard', icon: ShieldCheck },
      { title: 'CCTV Surveillance', desc: 'Full property coverage with HD cameras', icon: Camera },
      // { title: 'In-room Safe', desc: 'Electronic in-room safe for valuables', icon: Lock },
      { title: 'Gated Property', desc: 'Secure gated entry with access control', icon: Shield }
    ]
  },
  {
    category: 'Parking & Transport',
    headerIcon: Car,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    items: [
      { title: 'Free Parking', desc: 'Covered, secure parking for 1-2 vehicles per apartment', icon: Car },
      { title: 'Cab Assistance', desc: 'Help arranging local cabs and sightseeing tours', icon: CarTaxiFront },
      { title: 'Airport Transfer', desc: 'Mangalore/Hassan airport pickup (chargeable)', icon: Plane },
      { title: 'Bike Rental', desc: 'Bicycles and two-wheeler rentals arranged on request', icon: Bike }
    ]
  },
  // {
  //   category: 'Nature & Views',
  //   headerIcon: Mountain,
  //   color: 'text-teal-600',
  //   bgColor: 'bg-teal-50',
  //   items: [
  //     // { title: 'Estate Views', desc: 'Panoramic views of coffee estate and misty mountains', icon: Mountain },
  //     { title: 'Garden Area', desc: 'Lush landscaped garden with seating areas', icon: Trees },
  //     { title: 'Coffee Estate Walk', desc: 'Guided walks through the coffee plantation', icon: Footprints },
  //     { title: 'Bird Watching', desc: 'Home to 50+ bird species — binoculars available', icon: Bird }
  //   ]
  // },
  {
    category: 'Housekeeping',
    headerIcon: Sparkles,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    items: [
      { title: 'Daily Housekeeping', desc: 'Professional daily cleaning and linen change', icon: Sparkles },
      { title: '24/7 Concierge', desc: 'Round-the-clock assistance for all needs', icon: ConciergeBell },
      { title: 'Room Service', desc: 'In-room dining available from local restaurant partners', icon: Utensils },
      // { title: 'Baby Essentials', desc: 'Baby cot, high chair available on request', icon: Baby }
    ]
  }
];

const ratings = [
  { label: 'Cleanliness', score: '4.9' },
  { label: 'Location', score: '4.8' },
  { label: 'Value', score: '4.7' },
  { label: 'Facilities', score: '4.9' }
];

const StarRating = () => (
  <div className="flex text-[#cca354] space-x-1 my-1 justify-center">
    {[1, 2, 3, 4].map(i => (
      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
    ))}
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
  </div>
);

const AmenitiesPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="bg-[#f9fafb] min-h-screen font-sans relative ">

        {/* 1. Header Section */}
        <section className="bg-[#325d36] pt-24 pb-16 px-6 lg:px-12 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#cca354] text-sm font-semibold font-serif tracking-widest uppercase mb-4"
            >
              Everything Included
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'Georgia, serif' }}
            >
              World-Class Amenities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-gray-100/90 text-lg max-w-3xl leading-relaxed"
            >
              At Aetheria, every detail is considered. From high-speed WiFi — we've got everything covered for your perfect stay.
            </motion.p>
          </div>
        </section>

        {/* 2. Filter / Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white sticky top-0 z-10 shadow-sm"
        >
          <div
            className="max-w-7xl mx-auto px-6 py-4 flex space-x-4 overflow-x-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {amenities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  className="flex-shrink-0 flex items-center px-5 py-2.5 rounded-full bg-[#F8F7F2] hover:bg-[#EBE9DE] text-[#2C3E50] text-sm font-medium transition-colors cursor-pointer border border-transparent whitespace-nowrap"
                >
                  <Icon className="w-[18px] h-[18px] mr-2.5 text-[#2A5C32]" strokeWidth={1.5} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 3. Main Amenities Grid */}
        <main className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenitiesData.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx % 2 * 0.2 }}
                className="bg-white rounded-[20px] p-8 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Card Header */}
                <div className="flex items-center mb-8 border-b border-gray-50 pb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${section.bgColor} ${section.color} mr-4`}>
                    <section.headerIcon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl text-gray-900 font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                    {section.category}
                  </h3>
                </div>

                {/* Card Items List */}
                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start group">
                      <div className={`mt-0.5 mr-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${section.bgColor} ${section.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-gray-900 mb-1 group-hover:text-[#cca354] transition-colors">{item.title}</h4>
                        <p className="text-[14px] text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </main>

        {/* 4. Nature Banner Section */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[24px] overflow-hidden bg-[#1e3b21] shadow-xl"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1739038034755-da0dd12de467?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
            ></motion.div>

            <div className="relative z-10 py-20 px-8 text-center text-white flex flex-col items-center justify-center min-h-[350px]">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-5xl mb-5 font-medium tracking-wide" style={{ fontFamily: 'Georgia, serif' }}
              >
                Nature is Our Greatest Amenity
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-white/95 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light"
              >
                Surrounded by 3,400 ft of lush coffee estates, misty mountains, and fresh mountain air — <strong>Aetheria's natural setting is unmatched.</strong>
              </motion.p>

              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                {[
                  { icon: Footprints, text: 'Coffee Estate Walks' },
                  { icon: Bird, text: 'Bird Watching' },
                  { icon: Mountain, text: 'Sunset Views' },
                  { icon: Cloud, text: 'Morning Mist' }
                ].map((feature, fIdx) => (
                  <motion.span
                    key={fIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + (fIdx * 0.1) }}
                    className="flex items-center bg-black/40 hover:bg-black/60 transition-colors px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10 cursor-default"
                  >
                    <feature.icon className="w-4 h-4 mr-2 text-[#e3ce98]" /> {feature.text}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5. Ratings & CTA */}
        <section className="max-w-5xl mx-auto px-6 pt-4 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-10"
          >
            <h3 className="text-lg text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              How Guests Rate Our Amenities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {ratings.map((rating, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <span className="text-3xl font-bold text-[#2c5330] mb-1" style={{ fontFamily: 'Georgia, serif' }}>{rating.score}</span>
                  <StarRating />
                  <span className="text-sm text-gray-500 mt-2">{rating.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 mb-6"
          >
            Experience all these amenities firsthand
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingModalOpen(true)}
            className="bg-[#cca354] hover:bg-[#b89146] text-white font-medium px-8 py-3.5 rounded-lg transition-colors shadow-lg active:shadow-sm"
          >
            Book Your Stay Now
          </motion.button>
        </section>

      </div>
      <Footer />
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

export default AmenitiesPage;