"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useRef } from "react";
import { useBooking } from '@/context/BookingContext';

const Hero = () => {
    const router = useRouter();
    const { updateBookingData } = useBooking();
    const checkInRef = useRef(null);
    const checkOutRef = useRef(null);

    // Set default dates: Today and Tomorrow
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (date) => date.toISOString().split('T')[0];

    const [checkIn, setCheckIn] = useState(formatDate(today));
    const [checkOut, setCheckOut] = useState(formatDate(tomorrow));
    const [guests, setGuests] = useState(2);

    // Update booking context whenever values change
    useEffect(() => {
      updateBookingData({
        checkIn,
        checkOut,
        guests: guests.toString(),
      });
    }, [checkIn, checkOut, guests]);

    const normalizeDate = (dateStr) => {
        // Handle DD-MM-YYYY to YYYY-MM-DD conversion if needed
        if (dateStr.includes('-') && dateStr.split('-')[0].length === 2) {
            const [d, m, y] = dateStr.split('-');
            return `${y}-${m}-${d}`;
        }
        return dateStr;
    };

    const handleCheckAvailability = () => {
        const params = new URLSearchParams({
            checkIn: normalizeDate(checkIn),
            checkOut: normalizeDate(checkOut),
            guests: guests.toString()
        });
        router.push(`/booking?${params.toString()}`);
    };


// Calculate tomorrow's date in YYYY-MM-DD format for the 'min' attribute
const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
};

const minCheckInDate = getTomorrowDate();

// Ensure Check-out is at least one day AFTER Check-in (or default to tomorrow)
const getMinCheckOutDate = () => {
    if (!checkIn) return minCheckInDate;
    const checkInDate = new Date(checkIn);
    checkInDate.setDate(checkInDate.getDate() + 1);
    return checkInDate.toISOString().split('T')[0];
};






    return (
        <section className="relative h-screen w-full flex justify-center md:pt-32 pt-24 overflow-hidden">
            {/* Background with zoom effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/FirstPage.jpeg')",
                    backgroundColor: "#111"
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </motion.div>

            <div className="relative z-10 w-full max-w-3xl md:max-w-6xl mx-auto px-2 md:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md md:px-4 md:py-2 px-4 py-1 rounded-full border border-white/20 mb-2"
                >
                    <span className="text-[#C9A84C] text-sm">★</span>
                    <span className="md:text-xs text-[10px] font-semibold tracking-wider uppercase">Rated #1 Stay in Chikmagalur</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 md:mt-0 mt-4 md:mb-2 leading-tight drop-shadow-2xl"
                >
                    Luxury Service Apartments <br />
                    <span className="italic text-primary-gold">in Chikmagalur</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-sm md:text-xl text-white/90 md:max-w-2xl max-w-xl mx-auto mb-6 md:mb-2 font-serif leading-relaxed"
                >
                    Experience the perfect blend of luxury and nature in the heart of Karnataka's coffee country. Your dream stay awaits.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative z-20 mt-10 md:mt-10 w-full max-w-4xl mx-auto px-6"
                >
                    <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-4 flex flex-col gap-2 ">
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">

{/* Check-in */}
<div className="flex flex-col space-y-2">
    <label className="text-[10px] font-bold tracking-widest transition-colors text-gray-600">Check-in</label>
    {/* Added onClick here to the entire wrapper */}
    <div 
        onClick={() => checkInRef.current?.showPicker && checkInRef.current.showPicker()}
        className="flex items-center border border-gray-200 text-black rounded-xl p-4 hover:border-primary-gold transition-colors cursor-pointer group"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-gold mr-3 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <input
            ref={checkInRef} // Attached the ref here
            type="date"
            min={minCheckInDate}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={`bg-transparent border-none outline-none text-sm text-black font-semibold w-full cursor-pointer 
                [&::-webkit-calendar-picker-indicator]:opacity-100 
                [&::-webkit-calendar-picker-indicator]:cursor-pointer  
                ${!checkIn ? "text-gray-400" : "text-black"}`}
        />
    </div>
</div>

{/* Check-out */}
<div className="flex flex-col space-y-2">
    <label className="text-[10px] font-bold tracking-widest transition-colors text-gray-600">Check-out</label>
    {/* Added onClick here to the entire wrapper */}
    <div 
        onClick={() => checkOutRef.current?.showPicker && checkOutRef.current.showPicker()}
        className="flex items-center border border-gray-200 text-black rounded-xl p-4 hover:border-primary-gold transition-colors cursor-pointer group"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-gold mr-3 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <input
            ref={checkOutRef} // Attached the ref here
            type="date"
            min={getMinCheckOutDate()}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={`bg-transparent border-none outline-none text-sm text-black font-semibold w-full cursor-pointer 
                [&::-webkit-calendar-picker-indicator]:opacity-100 
                [&::-webkit-calendar-picker-indicator]:cursor-pointer  
                ${!checkOut ? "text-gray-400" : "text-black"}`} 
        />
    </div>
</div>

                            {/* Guests */}
                            <div className="flex flex-col space-y-2">
                                <label className="text-[10px] font-bold transition-colors tracking-widest text-gray-600">Guests</label>
                                <div className="flex items-center justify-between border text-black border-gray-200 rounded-xl p-4 hover:border-primary-gold transition-colors cursor-pointer group">
                                    <div className="flex items-center w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-gold mr-3 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        <select
                                            value={guests}
                                            onChange={(e) => setGuests(parseInt(e.target.value))}
                                            className="bg-transparent border-none outline-none text-sm font-semibold w-full cursor-pointer appearance-none"
                                        >
                                            {[1, 2, 3, 4, 5, 6].map(num => (
                                                <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-primary-gold transition-colors pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckAvailability}
                            className="w-full btn-secondary py-[1.125rem] px-10 rounded-xl font-bold tracking-widest text-sm hover:translate-y-[-2px] hover:shadow-lg transition-all active:translate-y-0"
                        >
                            Check Availability
                        </button>
                    </div>

                    <div className="mt-6 md:flex hidden flex-wrap justify-center gap-x-12 gap-y-2 md:gap-y-4">
                        <div className="flex items-center space-x-2 text-white/80 group">
                            <svg className="w-5 h-5 text-primary-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="text-sm font-medium">Best Price Guarantee</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/80 group">
                            <svg className="w-5 h-5 text-primary-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="text-sm font-medium">Free Cancellation</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/80 group">
                            <span className="text-primary-gold text-lg group-hover:scale-110 transition-transform">★</span>
                            <span className="text-sm font-medium">4.9/5 Average Rating</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
