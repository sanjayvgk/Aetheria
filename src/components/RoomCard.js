"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import BookingOptionsModal from './BookingOptionsModal';
import { useBooking } from '@/context/BookingContext';

const RoomCard = ({ category, image, title, description, badgeColor = "bg-primary-gold" }) => {
    const [showBookingModal, setShowBookingModal] = useState(false);
    const { bookingData } = useBooking();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 ${badgeColor} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg`}>
                    {category}
                </div>
                
            </div>

            <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif mb-4 group-hover:text-primary-gold transition-colors">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                    {description}
                </p>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between gap-4">
                    <div className="flex space-x-4">
                        <span title="Free WiFi"><svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg></span>
                        <span title="Kitchen"><svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></span>
                        <span title="TV"><svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
                    </div>
                    <button 
                        onClick={() => setShowBookingModal(true)}
                        className="text-primary-gold text-xs font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-primary-gold transition-all whitespace-nowrap"
                    >
                        Book Now
                    </button>
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
        </motion.div>
    );
};

export default RoomCard;
