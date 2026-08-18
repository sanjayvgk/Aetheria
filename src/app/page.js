"use client"
import Header from "@/components/Header";
import RoomCard from "@/components/RoomCard";
import Footer from "@/components/Footer";
import FristPage from "@/components/FristPage";
import { useState } from "react";
import BookingOptionsModal from '@/components/BookingOptionsModal';
import AetheriaAdBanner from "@/components/ads";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const rooms = [
    {
      category: "Most Popular",
      image: "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812472/7G0A8872-HDR_t1ktwx.jpg",
      title: "1BHK Service Apartment",
      description: "Cozy and well-equipped apartment perfect for couples or solo travelers seeking comfort.",
    },
    {
      category: "Family Choice",
      image: "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772812396/7G0A9082-HDR_debnmw.jpg",
      title: "2BHK Apartment",
      description: "Spacious family apartment with separate bedrooms, full kitchen, and stunning views.",
      badgeColor: "bg-accent-green"
    },
    {
      category: "Luxury Pick",
      image: "https://res.cloudinary.com/dk6awcsfk/image/upload/q_auto/f_auto/v1772810934/7G0A8973-HDR_yk9qhp.jpg",
      title: "Premium Penthouse Suite",
      description: "Our most exclusive offering featuring premium furnishings and exclusive amenities.",
      badgeColor: "bg-primary-gold"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <FristPage/>
      {/* CTA Section */}
      <section className="relative py-32 bg-accent-green overflow-hidden">
        <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1627661224418-a82bc277c4aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif">Wake up to the aroma of fresh coffee</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Book your stay today and experience the magic of the Misty Hills of Chikmagalur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button  onClick={() => setIsBookingModalOpen(true)} className="px-8 py-4 rounded bg-[#C9A84C] tracking-widest text-sm  font-bold" href="booking">
              Book Your Stay
            </button>
            <a className="px-8 py-4 rounded font-bold tracking-widest text-sm border border-white hover:bg-white hover:text-accent-green transition-all" href="contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BookingOptionsModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)}
        checkIn="05-03-2026"
        checkOut="06-03-2026"
        guests="2"
      />

      <AetheriaAdBanner/>

    </main>
  );
}
