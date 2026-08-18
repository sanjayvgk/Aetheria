// app/api/booking/verify/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import { confirmBooking } from '@/lib/bookingjini';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature, 
      bookingData 
    } = body;

    // 1. Verify Razorpay Signature (CRITICAL SECURITY STEP)
    const signString = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(signString.toString())
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false, message: "Invalid payment signature" }, { status: 400 });
    }

    // 2. Signature valid. Now Push to BookingJini
    try {
      await confirmBooking(bookingData, razorpay_payment_id);
      
      // Success! Room is booked and synced.
      // TODO: Save to your own MongoDB/Postgres database here
      // TODO: Send confirmation email to guest here

      return NextResponse.json({ success: true, message: "Booking confirmed successfully!" });

    } catch (bookingjiniError) {
      console.error("BookingJini Sync Failed after payment:", bookingjiniError);

      // 3. FAILURE RECOVERY: Automatic Refund
      // If payment succeeded but room is no longer available in the channel manager
      try {
        await razorpay.payments.refund(razorpay_payment_id, {
           "speed": "optimum", // 'optimum' or 'normal'
           "receipt": `refund_${razorpay_order_id}`
        });

        return NextResponse.json({ 
          success: false, 
          message: "Payment succeeded but room became unavailable. We have automatically initiated a full refund to your account." 
        }, { status: 409 });

      } catch (refundError) {
        // FATAL ERROR: Booking failed AND refund failed. Needs manual intervention.
        console.error("URGENT: REFUND FAILED!", refundError);
        return NextResponse.json({ 
          success: false, 
          message: "Booking failed. Please contact support with your payment ID for a manual refund.",
          paymentId: razorpay_payment_id
        }, { status: 500 });
      }
    }

  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}