// app/api/booking/initiate/route.js
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { checkAvailability, holdRoom } from '@/lib/bookingjini';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { checkIn, checkOut, roomType, guests, amount } = body;

    // 1. Check Real-Time Availability
    const isAvailable = await checkAvailability(checkIn, checkOut, roomType, guests);
    if (!isAvailable) {
      return NextResponse.json({ success: false, message: "Sorry, this room just sold out." }, { status: 400 });
    }

    // 2. (Optional) Hold the room in BookingJini to prevent double booking while user pays
    try {
      await holdRoom(checkIn, checkOut, roomType);
    } catch (e) {
      console.warn("Hold failed, proceeding with optimistic booking", e);
    }

    // 3. Create secure Razorpay Order
    // Important: Calculate the actual amount on the backend in production to prevent frontend tampering
    const options = {
      amount: Math.round(amount * 100), // Amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({ 
      success: true, 
      orderId: order.id, 
      amount: options.amount 
    });

  } catch (error) {
    console.error("Initialization error:", error);
    return NextResponse.json({ success: false, message: "Could not initiate booking" }, { status: 500 });
  }
}