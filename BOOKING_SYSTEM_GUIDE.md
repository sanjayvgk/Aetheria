# Aetheria Booking System - Implementation Guide

## Overview
The booking system has been redesigned to provide users with two clear options:
1. **Book Online** - Direct link to BookingJini platform for automated bookings
2. **Contact Us** - Quick contact form for personalized assistance

This two-option approach is available throughout the application for maximum flexibility.

---

## Components Created/Updated

### 1. **BookingOptionsModal.jsx** (NEW)
**Location:** `src/components/BookingOptionsModal.jsx`

A reusable modal component that displays two booking options side-by-side:
- **Left Option:** Book Online via BookingJini
  - Direct external link: `https://aetheriaserviceapartments.bookingjini.in/`
  - Instant confirmation
  - Real-time availability
  - Secure payment

- **Right Option:** Contact Us Form
  - Name, Email, Phone fields (required)
  - Check-in/Check-out dates
  - Number of guests
  - Additional message field
  - Form data sent to `/api/contact` endpoint

**Features:**
- Beautiful gradient styling matching brand colors
- Responsive design (mobile & desktop)
- Form validation & loading states
- Success confirmation message
- Modal close functionality

---

### 2. **API Endpoint** (NEW)
**Location:** `src/api/contact/route.js`

Handles form submissions from the contact form:
- Validates required fields (name, email, phone)
- Logs inquiry details with timestamp
- Returns success response

**TODO:**
You'll need to integrate an email service:
- SendGrid
- AWS SES
- Mailgun
- Or any other email service provider

Replace the TODO section with actual email sending logic.

---

### 3. **Header Component** (UPDATED)
**Location:** `src/components/Header.js`

Changes:
- "Book Now" button now opens `BookingOptionsModal` instead of linking to `/booking`
- Works on both desktop and mobile versions
- Opens modal overlay with booking choice

---

### 4. **Home Rooms Section** (UPDATED)
**Location:** `src/components/HomeRoom.jsx`

Changes:
- Made component client-side (`"use client"`)
- Added `BookingOptionsModal` integration
- "Reserve" button on each room card opens the modal
- Users can choose booking method before selecting a room

---

### 5. **Room Card Component** (UPDATED)
**Location:** `src/components/RoomCard.js`

Changes:
- Added `BookingOptionsModal` integration
- "View Details" button changed to "Book Now"
- Opens modal when clicked
- Consistent with other booking triggers

---

### 6. **Booking Page** (SIMPLIFIED)
**Location:** `src/app/booking/page.jsx`

Changes:
- Completely simplified from complex multi-step payment flow
- Now shows `BookingOptionsModal` on page load
- Displays thank you message after user closes modal
- Buttons to make another booking or return home

---

## Where to Add "Book Now" Buttons

You can easily add the booking modal to other pages:

```jsx
import { useState } from 'react';
import BookingOptionsModal from '@/components/BookingOptionsModal';

export default function MyComponent() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowBookingModal(true)}>
        Book Now
      </button>
      
      <BookingOptionsModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />
    </>
  );
}
```

---

## Configuration

### BookingJini Link
The external BookingJini link can be updated in `BookingOptionsModal.jsx`:
```jsx
const handleBookOnline = () => {
  window.open('https://aetheriaserviceapartments.bookingjini.in/', '_blank');
  onClose();
};
```

### Email Service Setup
In `src/api/contact/route.js`, add your email service integration in the TODO section to actually send emails to your admin.

---

## UI/UX Features

### Design
- Brand-consistent colors (#325d36 green, #cca354 gold)
- Rounded corners and shadow effects
- Gradient backgrounds
- Responsive grid layout

### Interactivity
- Smooth animations
- Hover effects on buttons
- Form validation feedback
- Loading states
- Success messages

### Mobile Responsive
- Stacks vertically on mobile
- Touch-friendly button sizes
- Readable text at all breakpoints
- Full-screen modal on small screens

---

## Next Steps

1. **Email Integration:** Set up SendGrid/AWS SES/Mailgun in the contact API
2. **Admin Notifications:** Configure where contact inquiries are sent
3. **Database Storage:** Optionally save inquiries to a database
4. **Analytics:** Track booking method preference (online vs contact)
5. **Customization:** Adjust colors, copy, and fields as needed

---

## Testing Checklist

- [ ] Modal opens from Header "Book Now" button
- [ ] "Book Online" link opens BookingJini in new tab
- [ ] Contact form validates all required fields
- [ ] Form submission shows success message
- [ ] Modal closes properly
- [  "Reserve" buttons on room cards open modal
- [ ] Booking page shows modal on load
- [ ] Mobile responsiveness works correctly
- [ ] All animations are smooth

---

## Files Modified Summary

| File | Changes |
|------|---------|
| [BookingOptionsModal.jsx](src/components/BookingOptionsModal.jsx) | Created new |
| [route.js](src/api/contact/route.js) | Created new |
| [Header.js](src/components/Header.js) | Added modal integration |
| [HomeRoom.jsx](src/components/HomeRoom.jsx) | Added modal integration |
| [RoomCard.js](src/components/RoomCard.js) | Added modal integration |
| [page.jsx](src/app/booking/page.jsx) | Simplified to show modal |

