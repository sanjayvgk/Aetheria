"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import BookingOptionsModal from './BookingOptionsModal';
import { useBooking } from '@/context/BookingContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { bookingData } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ` +
          (scrolled ? 'bg-white shadow-md' : 'bg-transparent')}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col group cursor-pointer">
            <span
              className={`text-xl font-bold font-serif tracking-widest leading-none uppercase ` +
                (scrolled ? 'text-green-900' : 'text-white')}
            >
              Aetheria
            </span>
            <span
              className={`text-xs tracking-[0.3em] font-semibold uppercase ` +
                (scrolled ? 'text-primary-gold' : 'text-[#C9A84C]')}
            >
              Hospitality
            </span>
          </div>

          <nav
            className={`hidden md:flex items-center space-x-10 font-medium text-sm ` +
              (scrolled ? 'text-gray-800' : 'text-white')}
          >
            <Link href="/" className="nav-link hover:text-primary-gold transition-colors">
              Home
            </Link>
            <Link href="/rooms" className="nav-link hover:text-primary-gold transition-colors">
              Rooms & Services
            </Link>
            <Link href="/amenities" className="nav-link hover:text-primary-gold transition-colors">
              Amenities
            </Link>
            <Link href="/blogs" className="nav-link hover:text-primary-gold transition-colors">
              Blogs
            </Link>
            <Link href="/gallary" className="nav-link hover:text-primary-gold transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="nav-link hover:text-primary-gold transition-colors">
              Contact
            </Link>
          </nav>

          <div className={`hidden lg:flex items-center space-x-6 font-medium ` +
            (scrolled ? 'text-gray-800' : 'text-white')}
          >
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+917019454382" className="text-sm">+91 7019454382</a>
            </div>
            <button 
              onClick={() => setShowBookingModal(true)}
              className="btn-primary py-2 px-6 rounded-md hover:shadow-lg transition-shadow"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-md transition-colors ` +
              (scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10')}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ` +
          (menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible')}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ` +
            (menuOpen ? 'opacity-100' : 'opacity-0')}
          onClick={closeMenu}
        />
        <div
          className={`absolute top-0 left-0 w-full h-fit ` +
            (scrolled ? 'bg-white' : 'bg-green-900') +
            ` shadow-xl transform transition-transform duration-300 ` +
            (menuOpen ? 'translate-y-0' : '-translate-y-full')}
        >
          <div className="p-6 pt-20 max-w-md mx-auto">

            <nav className="space-y-6 mb-8">
              <Link
                href="/"
                onClick={closeMenu}
                className={`block text-lg font-medium transition-colors ` +
                  (scrolled ? 'text-gray-800 hover:text-primary-gold' : 'text-white hover:text-[#C9A84C]')}
              >
                Home
              </Link>
              <Link
                href="/rooms"
                onClick={closeMenu}
                className={`block text-lg font-medium transition-colors ` +
                  (scrolled ? 'text-gray-800 hover:text-primary-gold' : 'text-white hover:text-[#C9A84C]')}
              >
                Rooms & Services
              </Link>
              <Link
                href="/amenities"
                onClick={closeMenu}
                className={`block text-lg font-medium transition-colors ` +
                  (scrolled ? 'text-gray-800 hover:text-primary-gold' : 'text-white hover:text-[#C9A84C]')}
              >
                Amenities
              </Link>
              <Link
                href="/blogs"
                onClick={closeMenu}
                className={`block text-lg font-medium transition-colors ` +
                  (scrolled ? 'text-gray-800 hover:text-primary-gold' : 'text-white hover:text-[#C9A84C]')}
              >
                Blogs
              </Link>
              <Link
                href="/gallary"
                onClick={closeMenu}
                className={`block text-lg font-medium transition-colors ` +
                  (scrolled ? 'text-gray-800 hover:text-primary-gold' : 'text-white hover:text-[#C9A84C]')}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`block text-lg font-medium transition-colors ` +
                  (scrolled ? 'text-gray-800 hover:text-primary-gold' : 'text-white hover:text-[#C9A84C]')}
              >
                Contact
              </Link>
            </nav>

            <div className={`border-t pt-6 ` +
              (scrolled ? 'border-gray-200' : 'border-white/20')}
            >
              <div className={`flex items-center space-x-2 mb-4 ` +
                (scrolled ? 'text-gray-800' : 'text-white')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+917019454382" className="text-sm">+91 7019454382</a>
              </div>
              <button
                onClick={() => {
                  setShowBookingModal(true);
                  closeMenu();
                }}
                className="btn-primary w-full py-3 px-6 rounded-md text-center block font-medium"
              >
                Book Now
              </button>
            </div>
          </div>
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
    </>
  );
};

export default Header;
