"use client";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import BookingOptionsModal from '@/components/BookingOptionsModal';

// 1. Extract the logic that relies on useSearchParams into its own component
const BookingContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showBookingOptions, setShowBookingOptions] = useState(true);
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  useEffect(() => {
    const checkIn = searchParams.get('checkIn') || "";
    const checkOut = searchParams.get('checkOut') || "";
    const guests = searchParams.get('guests') || "";
    
    setBookingData({
      checkIn,
      checkOut,
      guests,
    });
  }, [searchParams]);

  const handleCloseModal = () => {
    setShowBookingOptions(false);
    // Redirect to home after 500ms
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  return (
    <BookingOptionsModal 
      isOpen={showBookingOptions}
      onClose={handleCloseModal}
      checkIn={bookingData.checkIn}
      checkOut={bookingData.checkOut}
      guests={bookingData.guests}
    />
  );
};

// 2. Wrap that component in a Suspense boundary in your main default export
const BookingPage = () => {
  return (
    <>
      <Header />
      
      {/* You can replace the fallback <div> with a proper loading spinner/skeleton if you prefer */}
      <Suspense fallback={<div>Loading booking details...</div>}>
        <BookingContent />
      </Suspense>

      <Footer />
    </>
  );
};

export default BookingPage;