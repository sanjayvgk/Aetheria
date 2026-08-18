"use client";
import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
  });

  const updateBookingData = (data) => {
    setBookingData(prev => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
}
