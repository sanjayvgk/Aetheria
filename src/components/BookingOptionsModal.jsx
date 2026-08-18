"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const BookingOptionsModal = ({ isOpen, onClose, checkIn = "", checkOut = "", guests = "" }) => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    checkIn: checkIn, checkOut: checkOut, guests: guests, message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Sync state with props when they change
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      checkIn: checkIn,
      checkOut: checkOut,
      guests: guests,
    }));
  }, [checkIn, checkOut, guests]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError(true);
      toast.error("Please fill in all required fields", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => setError(false), 2500);
      return;
    }
    setLoading(true);
    try {
      // Send email using EmailJS
      // CRITICAL: Ensure the keys here (from_name, check_in, etc.) 
      // exactly match the {{variables}} in your EmailJS Template.
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
    from_name: form.name,
    from_email: form.email,
    phone: form.phone,
    check_in: String(form.checkIn),   // See Point 3 below
    check_out: String(form.checkOut), // See Point 3 below
    guests: form.guests,
    message: form.message,
    subject: "New Offline Booking Inquiry", // <-- ADD THIS
    to_email: "aetheriahospitality@gmail.com",
  },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Passed directly here
      );

      toast.success(
        `Thank you, ${form.name.split(" ")[0]}! Your inquiry has been sent successfully. We'll contact you soon!`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      setForm({ name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "", message: "" });
      setTimeout(() => {
        onClose();
      }, 500);
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Failed to send inquiry. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBookOnline = () => {
    window.open("https://aetheriaserviceapartments.bookingjini.in/", "_blank");
    onClose();
  };

  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];

  const perks = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Instant Confirmation",
      desc: "Receive your booking details immediately via email",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
      title: "Real-Time Availability",
      desc: "Live calendar with accurate room availability",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      ),
      title: "Secure Payment",
      desc: "256-bit encrypted checkout via BookingJini",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Available 24/7",
      desc: "Reserve any time, at your own pace",
    },
  ];

  const inputClass =
    "w-full border border-[#ddd9d0] bg-white rounded-sm px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-sm text-[#1a2e1b] placeholder-[#b0a898] outline-none focus:border-[#325d36] transition-colors duration-200";
  
  const dateInputClass =
    "w-full border border-[#ddd9d0] bg-white rounded-sm px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-sm text-[#1a2e1b] outline-none focus:border-[#325d36] transition-colors duration-200 cursor-pointer appearance-none";

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-3 sm:p-4">
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(0.3);
        }
        input[type="date"]::-webkit-outer-spin-button,
        input[type="date"]::-webkit-inner-spin-button {
          display: none;
        }
        @media (max-width: 640px) {
          .modal-container {
            max-height: 90vh;
            overflow-y: auto;
          }
          .left-panel-mobile {
            display: none;
          }
        }
      `}</style>
      <div className="modal-container relative bg-white w-full max-w-4xl rounded-sm shadow-2xl grid grid-cols-1 md:grid-cols-2">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#325d36]/30 bg-white/90 flex items-center justify-center hover:bg-[#325d36] group transition-colors duration-200"
        >
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[#325d36] group-hover:stroke-white transition-colors duration-200"
            fill="none" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* ── LEFT PANEL: Book Online (Hidden on Mobile) ── */}
        <div className="left-panel-mobile relative bg-gradient-to-br from-[#1e3d22] via-[#2e5733] to-[#3a6b40] px-6 sm:px-8 md:px-10 py-10 sm:py-12 md:py-14 flex flex-col overflow-hidden min-h-[400px] md:min-h-[520px]">
          {/* Decorative rings */}
          <div className="absolute -top-14 -right-14 w-64 h-64 rounded-full border border-[#cca354]/20 pointer-events-none" />
          <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full border border-[#cca354]/15 pointer-events-none" />

          {/* Gold rule */}
          <div className="w-8 sm:w-10 h-px bg-[#cca354] mb-3 sm:mb-5" />

          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-white leading-snug tracking-wide mb-1 sm:mb-2">
            Book Your Stay
          </h2>
          <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/50 font-medium mb-6 sm:mb-10">
            Instant online reservation
          </p>

          {/* Perks */}
          <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5 flex-1">
            {perks.map((p, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 border border-[#cca354]/40 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 stroke-[#cca354]" fill="none" viewBox="0 0 24 24">
                    {p.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white/90 mb-0.5">{p.title}</p>
                  <p className="text-[10px] sm:text-xs text-white/45 leading-relaxed">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={handleBookOnline}
            className="mt-6 sm:mt-8 md:mt-10 flex items-center gap-2 sm:gap-2.5 bg-[#cca354] hover:bg-[#b8944a] active:scale-[0.98] text-white text-[9px] sm:text-xs font-medium uppercase tracking-widest px-4 sm:px-6 py-3 sm:py-4 rounded-sm transition-all duration-200 w-full justify-center h-10 sm:h-11 md:h-12"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Reserve on BookingJini
          </button>
        </div>

        {/* ── RIGHT PANEL: Contact Form ── */}
        <div className="bg-[#faf9f7] px-4 sm:px-6 md:px-10 py-6 sm:py-10 md:py-14 flex flex-col">
          <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#cca354] font-medium mb-1.5">
            Prefer a personal touch?
          </p>
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-[#1a2e1b] mb-5 sm:mb-8 leading-snug">
            Send Offline Booking Inquiry
          </h3>

          {/* BookingJini Button for Mobile */}
          <button
            onClick={handleBookOnline}
            className="md:hidden flex items-center gap-2 justify-center bg-[#cca354] hover:bg-[#b8944a] text-white text-[10px] sm:text-xs font-medium uppercase tracking-widest px-4 py-3 rounded-sm transition-all duration-200 w-full mb-4 h-10 sm:h-11"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Reserve on BookingJini
          </button>

          {/* Divider for Mobile */}
          <div className="md:hidden flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-[#e0d5c8]"></div>
            <span className="text-xs text-[#6b7c6d]">OR</span>
            <div className="flex-1 h-px bg-[#e0d5c8]"></div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 flex-1">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#6b7c6d] font-medium">
                Full name <span className="text-[#cca354]">*</span>
              </label>
              <input
                type="text" name="name" value={form.name}
                onChange={handleChange} placeholder="Your full name"
                className={`${inputClass} text-xs sm:text-sm`}
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#6b7c6d] font-medium">
                  Email <span className="text-[#cca354]">*</span>
                </label>
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="you@email.com"
                  className={`${inputClass} text-xs sm:text-sm`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#6b7c6d] font-medium">
                  Phone <span className="text-[#cca354]">*</span>
                </label>
                <input
                  type="tel" name="phone" value={form.phone}
                  onChange={handleChange} placeholder="+91 00000 00000"
                  className={`${inputClass} text-xs sm:text-sm`}
                />
              </div>
            </div>

            {/* Check-in + Check-out */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#6b7c6d] font-medium">
                  Check-in
                </label>
                <input
                  type="date" name="checkIn" value={form.checkIn}
                  onChange={handleChange} className={`${dateInputClass} text-xs sm:text-sm`}
                  min={today}
                  style={{
                    colorScheme: 'light',
                    fontSize: '14px',
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#6b7c6d] font-medium">
                  Check-out
                </label>
                <input
                  type="date" name="checkOut" value={form.checkOut}
                  onChange={handleChange} className={`${dateInputClass} text-xs sm:text-sm`}
                  min={today}
                  style={{
                    colorScheme: 'light',
                    fontSize: '14px',
                  }}
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-1">
              <label className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#6b7c6d] font-medium">
                Guests
              </label>
              <select
                name="guests" value={form.guests}
                onChange={handleChange} className={`${inputClass} text-xs sm:text-sm`}
              >
                <option value="">Select number of guests</option>
                {["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#6b7c6d] font-medium">
                Message (optional)
              </label>
              <textarea
                name="message" value={form.message}
                onChange={handleChange}
                placeholder="Any special requests or questions?"
                rows={2}
                className={`${inputClass} resize-none leading-relaxed text-xs sm:text-sm`}
              />
            </div>

            {/* Submit area */}
            <div className="mt-auto pt-2">
              {error ? (
                <button
                  type="submit"
                  className="w-full bg-[#a32d2d] text-white text-[10px] sm:text-xs font-medium uppercase tracking-widest py-3 sm:py-4 rounded-sm transition-all duration-200"
                >
                  Please fill in all required fields
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 sm:h-12 bg-[#325d36] hover:bg-[#254628] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[10px] sm:text-xs font-medium uppercase tracking-widest rounded-sm transition-all duration-200 flex items-center justify-center"
                >
                  {loading ? "Sending…" : "Send Inquiry"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingOptionsModal;