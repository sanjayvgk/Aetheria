# EmailJS Template Configuration

This document contains the template code for both the BookingOptionsModal and Contact page forms.

## 1. Booking Inquiry Template (for BookingOptionsModal.jsx)

### Template Name: `booking_inquiry_template`

**HTML Template Code:**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #1a1a1a;
            background-color: #f9fafb;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #1e3d22 0%, #2e5733 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: normal;
        }
        .header p {
            margin: 5px 0 0 0;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
        }
        .content {
            padding: 30px 20px;
        }
        .greeting {
            font-size: 16px;
            margin-bottom: 20px;
        }
        .booking-details {
            background: #faf9f7;
            border: 1px solid #f0ebe1;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #f0ebe1;
        }
        .detail-row:last-child {
            border-bottom: none;
        }
        .detail-label {
            font-weight: bold;
            color: #325d36;
        }
        .detail-value {
            color: #1a1a1a;
        }
        .message-section {
            margin: 20px 0;
            padding: 15px;
            background: #f5f5f5;
            border-left: 4px solid #cca354;
            border-radius: 4px;
        }
        .message-section h4 {
            margin: 0 0 10px 0;
            color: #325d36;
        }
        .message-section p {
            margin: 0;
            color: #1a1a1a;
            white-space: pre-wrap;
        }
        .cta-button {
            display: inline-block;
            background: #325d36;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            margin: 20px 0;
        }
        .footer {
            background: #f9fafb;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #6b7c6d;
            border-top: 1px solid #f0ebe1;
        }
        .footer a {
            color: #325d36;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Booking Inquiry</h1>
            <p>Aetheria Service Apartments</p>
        </div>
        
        <div class="content">
            <div class="greeting">
                <p>Hello,</p>
                <p>You have received a new booking inquiry from <strong>{{from_name}}</strong>.</p>
            </div>
            
            <div class="booking-details">
                <h3 style="margin-top: 0; color: #325d36;">Guest Information</h3>
                <div class="detail-row">
                    <span class="detail-label">Guest Name:</span>
                    <span class="detail-value">{{from_name}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value"><a href="mailto:{{from_email}}">{{from_email}}</a></span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span class="detail-value">{{phone}}</span>
                </div>
                
                <h3 style="margin-top: 30px; color: #325d36;">Booking Details</h3>
                <div class="detail-row">
                    <span class="detail-label">Check-in Date:</span>
                    <span class="detail-value">{{check_in}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Check-out Date:</span>
                    <span class="detail-value">{{check_out}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Number of Guests:</span>
                    <span class="detail-value">{{guests}}</span>
                </div>
            </div>
            
            {{#if message}}
            <div class="message-section">
                <h4>Special Requests:</h4>
                <p>{{message}}</p>
            </div>
            {{/if}}
            
            <p style="color: #6b7c6d; font-size: 14px; margin-top: 30px;">
                <strong>Next Steps:</strong> Please contact the guest at your earliest convenience to confirm their booking and provide further details about the reservation.
            </p>
            
            <a href="mailto:{{from_email}}" class="cta-button">Reply to Inquiry</a>
        </div>
        
        <div class="footer">
            <p>This is an automated email from Aetheria Service Apartments booking system.</p>
            <p>Aetheria Service Apartments | Chikmagalur, Karnataka</p>
            <p>&copy; 2026 Aetheria. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

---

## 2. Contact Form Template (for Contact Page)

### Template Name: `contact_inquiry_template`

**HTML Template Code:**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #1a1a1a;
            background-color: #f9fafb;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #1e3d22 0%, #2e5733 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: normal;
        }
        .header p {
            margin: 5px 0 0 0;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
        }
        .content {
            padding: 30px 20px;
        }
        .greeting {
            font-size: 16px;
            margin-bottom: 20px;
        }
        .contact-details {
            background: #faf9f7;
            border: 1px solid #f0ebe1;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .detail-row {
            padding: 12px 0;
            border-bottom: 1px solid #f0ebe1;
        }
        .detail-row:last-child {
            border-bottom: none;
        }
        .detail-label {
            font-weight: bold;
            color: #325d36;
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .detail-value {
            color: #1a1a1a;
        }
        .message-section {
            margin: 20px 0;
            padding: 15px;
            background: #f5f5f5;
            border-left: 4px solid #cca354;
            border-radius: 4px;
        }
        .message-section h4 {
            margin: 0 0 10px 0;
            color: #325d36;
            font-size: 14px;
        }
        .message-section p {
            margin: 0;
            color: #1a1a1a;
            white-space: pre-wrap;
            font-size: 14px;
        }
        .cta-button {
            display: inline-block;
            background: #325d36;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            margin: 20px 0;
        }
        .subject-badge {
            display: inline-block;
            background: #e8f3ee;
            color: #325d36;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .footer {
            background: #f9fafb;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #6b7c6d;
            border-top: 1px solid #f0ebe1;
        }
        .footer a {
            color: #325d36;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Aetheria Service Apartments</p>
        </div>
        
        <div class="content">
            <div class="greeting">
                <p>Hello,</p>
                <p>You have received a new message from <strong>{{from_name}}</strong>.</p>
                <p><span class="subject-badge">{{subject}}</span></p>
            </div>
            
            <div class="contact-details">
                <h3 style="margin-top: 0; color: #325d36; font-size: 16px;">Sender's Information</h3>
                
                <div class="detail-row">
                    <span class="detail-label">Name:</span>
                    <span class="detail-value">{{from_name}}</span>
                </div>
                
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value"><a href="mailto:{{from_email}}" style="color: #325d36; text-decoration: none;">{{from_email}}</a></span>
                </div>
                
                {{#if phone}}
                <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span class="detail-value">{{phone}}</span>
                </div>
                {{/if}}
                
                <div class="detail-row">
                    <span class="detail-label">Subject:</span>
                    <span class="detail-value">{{subject}}</span>
                </div>
            </div>
            
            <div class="message-section">
                <h4>Message:</h4>
                <p>{{message}}</p>
            </div>
            
            <p style="color: #6b7c6d; font-size: 14px; margin-top: 30px;">
                <strong>Action Required:</strong> Please review this inquiry and respond to the sender within 24 hours for the best customer experience.
            </p>
            
            <a href="mailto:{{from_email}}" class="cta-button">Reply to Message</a>
        </div>
        
        <div class="footer">
            <p>This is an automated email from Aetheria Service Apartments contact form.</p>
            <p>Aetheria Service Apartments | Chikmagalur, Karnataka</p>
            <p>&copy; 2026 Aetheria. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

---

## Setup Instructions

### Step 1: Create Templates in EmailJS Dashboard

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates**
3. Create two new templates with the names above
4. Copy and paste the respective HTML template code into each template

### Step 2: Template Variables Reference

#### Booking Inquiry Template Variables:
- `{{from_name}}` - Guest's full name
- `{{from_email}}` - Guest's email address
- `{{phone}}` - Guest's phone number
- `{{check_in}}` - Check-in date
- `{{check_out}}` - Check-out date
- `{{guests}}` - Number of guests
- `{{message}}` - Special requests (optional)

#### Contact Form Template Variables:
- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email address
- `{{phone}}` - Sender's phone number (optional)
- `{{subject}}` - Inquiry subject
- `{{message}}` - Message content

### Step 3: Save Template IDs

After creating templates, note down their Template IDs and add them to your `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=booking_inquiry_template
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=contact_inquiry_template
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 4: (Optional) Update Contact Page

If you want to use the separate template ID for contact form, update the contact page's `handleSubmit` to use `NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID`.

---

## Email Formatting Notes

- Both templates use the brand colors (#325d36 for green, #cca354 for gold)
- Responsive design that works on mobile and desktop
- Clear hierarchy and readability
- Professional appearance matching your brand
- Conditional rendering for optional fields (like phone in contact form)
