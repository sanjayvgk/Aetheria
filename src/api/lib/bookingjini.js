// lib/bookingjini.js

const API_KEY = process.env.BOOKINGJINI_API_KEY;
const HOTEL_ID = process.env.BOOKINGJINI_HOTEL_ID;
const BASE_URL = 'https://api.bookingjini.com/v2'; // Replace with actual base URL

export async function checkAvailability(checkIn, checkOut, roomType, guests) {
  // Replace with actual BookingJini endpoint for availability
  const response = await fetch(`${BASE_URL}/inventory/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      hotel_id: HOTEL_ID,
      check_in: checkIn,
      check_out: checkOut,
      room_type: roomType,
      guests: guests
    }),
    cache: 'no-store'
  });

  if (!response.ok) throw new Error("Failed to fetch availability");
  const data = await response.json();
  
  // Adjust this based on their actual response structure
  return data.available_rooms > 0; 
}

export async function holdRoom(checkIn, checkOut, roomType) {
  // *NOTE: If BookingJini does not have a "Hold" endpoint, you can skip this function 
  // and just rely on checkAvailability.
  const response = await fetch(`${BASE_URL}/inventory/hold`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({ hotel_id: HOTEL_ID, check_in: checkIn, check_out: checkOut, room_type: roomType })
  });

  if (!response.ok) throw new Error("Could not hold room");
  return await response.json(); 
}

export async function confirmBooking(bookingData, paymentId) {
  // Pushes the final booking into the Channel Manager to block dates globally
  const response = await fetch(`${BASE_URL}/bookings/push`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      hotel_id: HOTEL_ID,
      source: "Website Direct",
      guest_details: bookingData.guest,
      check_in: bookingData.checkIn,
      check_out: bookingData.checkOut,
      room_type: bookingData.roomType,
      payment_status: "PAID",
      transaction_id: paymentId
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`BookingJini Sync Failed: ${JSON.stringify(errorData)}`);
  }
  return await response.json();
}