"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { useState, useEffect } from 'react';
import BookingOptionsModal from '@/components/BookingOptionsModal';
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

// --- Icon Components ---
const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const DirectionsIcon = () => (
  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
  </svg>
);

const CarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const TrainIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v8l9-11h-7z" />
  </svg>
);

const PlaneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Main Page Component ---
const ContactPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Booking Enquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
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
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message
        }
      );

      toast.success(
        `Thank you, ${form.name.split(" ")[0]}! Your message has been sent successfully. We'll contact you soon!`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "Booking Enquiry",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Failed to send message. Please try again.", {
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
  return (
    <>
    <Header />
    <div className="bg-[#f9fafb] min-h-screen font-sans pb-20">
      
      {/* Header Section */}
      <section className="bg-[#325d36] pt-22 pb-12 px-6 lg:px-12 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#cca354] font-serif font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-medium mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Contact & Location
          </h1>
          <p className="text-gray-100/90 text-lg max-w-2xl">
            We're here to help. Reach out for bookings, enquiries, or just to say hello.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Contact Information Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-50 text-[#325d36] p-2.5 rounded-full mr-4 shrink-0">
                    <LocationIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Address</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Shetty St, Lakshmishanagara, Chikkamagaluru, Karnataka 577101, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-50 text-[#325d36] p-2.5 rounded-full mr-4 shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Phone</h4>
                    <p className="text-sm text-gray-500">+91 7019454382<br/>+91 8147475109</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-50 text-[#325d36] p-2.5 rounded-full mr-4 shrink-0">
                    <EmailIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Email</h4>
                    <p className="text-sm text-gray-500">aetheriahospitality@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-50 text-[#325d36] p-2.5 rounded-full mr-4 shrink-0">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-0.5">WhatsApp</h4>
                    <p className="text-sm text-green-600 font-medium">+91 7019454382 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-50 text-[#325d36] p-2.5 rounded-full mr-4 shrink-0">
                    <ClockIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Reception Hours</h4>
                    <p className="text-sm text-gray-500">Mon-Sun: 8:00 AM – 10:00 PM<br/><span className="text-gray-400">After hours assistance via WhatsApp</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-3.5 px-4 rounded-xl shadow-sm transition-colors flex items-center justify-center">
              <WhatsAppIcon />
              <a href="https://wa.me/+917019454382?text=Hi%2C%20I%27m%20interested%20in%20your%20stay.%20Could%20you%20please%20share%20details%20about%20availability%20and%20pricing%3F" className="ml-2" target="_blank" rel="noopener noreferrer">
                Message On WhatsApp
              </a>
            </button>
            
            <button className="w-full bg-[#325d36] hover:bg-[#274a2b] text-white font-medium py-3.5 px-4 rounded-xl shadow-sm transition-colors flex items-center justify-center">
              <PhoneIcon />
              <a href="tel:+917019454382" className="ml-2">
                Call Us Now
              </a>
            </button>

            {/* Check-in Information */}
            <div className="bg-[#faf8f4] rounded-2xl p-6 border border-[#f0ebe1]">
              <h3 className="text-[15px] font-semibold text-gray-900 mb-4">Check-in Information</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Check-in</span>
                  <span className="font-semibold text-gray-900">12:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Check-out</span>
                  <span className="font-semibold text-gray-900">11:00 AM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Early check-in</span>
                  <span className="font-medium text-[#325d36]">On request</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Late check-out</span>
                  <span className="font-medium text-[#325d36]">On request</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN - Forms and Maps */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Form Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Send Us a Message
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma" 
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#325d36] focus:border-transparent transition-all placeholder-gray-400" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com" 
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#325d36] focus:border-transparent transition-all placeholder-gray-400" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210" 
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#325d36] focus:border-transparent transition-all placeholder-gray-400" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                    <select 
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#325d36] focus:border-transparent transition-all text-gray-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat pr-10"
                    >
                      <option>Booking Enquiry</option>
                      <option>General Support</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your stay requirements, dates, number of guests, or any special requests..." 
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#325d36] focus:border-transparent transition-all placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {error ? (
                  <button 
                    type="button"
                    className="bg-[#a32d2d] text-white font-medium py-3 px-6 rounded-lg flex items-center shadow-sm w-full justify-center"
                  >
                    <SendIcon />
                    Please fill in all required fields
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="bg-[#325d36] hover:bg-[#274a2b] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center shadow-sm disabled:hover:bg-[#325d36]"
                  >
                    <SendIcon />
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                )}
              </form>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl text-gray-900 mb-1" style={{ fontFamily: 'Georgia, serif' }}>Find Us on the Map</h3>
                  <p className="text-sm text-gray-500">The Aetheria Service Apartment | 1BHK & 2BHK Stay in Chikkamagaluru</p>
                </div>
                <button className="flex items-center text-sm font-medium text-[#325d36] hover:text-[#274a2b] transition-colors">
                  <DirectionsIcon />
                  Get Directions
                </button>
              </div>
              
              {/* Map Placeholder Container */}
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.526381151836!2d75.76991927809522!3d13.317499373783487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad7831d5f73f7%3A0x3bee56ab56085600!2sThe%20Aetheria%20Service%20Apartment%20%7C%201BHK%20%26%202BHK%20Stay%20in%20Chikkamagaluru!5e0!3m2!1sen!2sin!4v1775906376903!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aetheria Location Map"
                ></iframe>
              </div>
            </div>

            {/* How to Reach Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>How to Reach Aetheria</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Road */}
                <div className="bg-[#faf8f4] p-4 rounded-xl border border-[#f0ebe1] flex items-start">
                  <div className="text-[#325d36] mt-0.5 mr-3 shrink-0">
                    <CarIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">By Road</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      250 km from Bangalore (5 hrs)<br/>
                      110 km from Mangalore (2.5 hrs)<br/>
                      115 km from Mysore (2.5 hrs)
                    </p>
                  </div>
                </div>
                
                {/* Train */}
                <div className="bg-[#faf8f4] p-4 rounded-xl border border-[#f0ebe1] flex items-start">
                  <div className="text-[#325d36] mt-0.5 mr-3 shrink-0">
                    <TrainIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">By Train</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Nearest: Hassan Station (55 km)<br/>
                      Mangalore Junction (110 km)<br/>
                      Cab available from station
                    </p>
                  </div>
                </div>

                {/* Air */}
                <div className="bg-[#faf8f4] p-4 rounded-xl border border-[#f0ebe1] flex items-start">
                  <div className="text-[#325d36] mt-0.5 mr-3 shrink-0">
                    <PlaneIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">By Air</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Mangalore Airport (120 km)<br/>
                      Mysore Airport (130 km)<br/>
                      Airport transfers available
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* CTA Banner Section */}
      {/* 5. Ratings & CTA */}
      <section className="max-w-5xl mx-auto px-6 mt-4">
        {/* Main card with deep green base and nature-integrated background */}
        <div className="relative rounded-2xl overflow-hidden bg-[#2c5330] shadow-lg">
          
          {/* Nature Background Image set to 60% Opacity over the green base */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1739038034791-a60471396db0?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
          ></div>
          
          {/* Main Content */}
          <div className="relative z-10 py-12 px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-3 font-medium tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to Book Your Stay?
            </h2>
            <p className="text-white/95 text-sm md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Don't miss our direct booking discount — save up to 15% when you book with us.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button onClick={() => setIsBookingModalOpen(true)} className="flex items-center justify-center w-full sm:w-auto bg-[#cca354] hover:bg-[#b89146] text-white font-medium px-8 py-3.5 rounded-lg transition-colors shadow-md">
                 Book Now
              </button>
              <a href='/rooms' className="flex items-center justify-center w-full sm:w-auto bg-black/30 border border-white/20 hover:bg-black/50 text-white font-medium px-8 py-3.5 rounded-lg transition-colors backdrop-blur-sm border-white/10 shadow-sm">
                 View Rooms
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
    <Footer/>
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

export default ContactPage;