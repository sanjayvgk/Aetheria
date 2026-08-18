# EmailJS Setup Guide

## Step 1: Create an EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Set Up Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add Service"
3. Choose your email provider (Gmail recommended):
   - **For Gmail**: Select "Gmail" and follow the authorization steps
   - Connect your Gmail account securely
4. Note your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create an Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up the template with these variables:

```
From Name: {{from_name}}
From Email: {{from_email}}
Phone: {{phone}}
Check-in: {{check_in}}
Check-out: {{check_out}}
Guests: {{guests}}
Special Requests: {{message}}
```

4. Set the email recipient to your hotel's email address
5. Save the template and note your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key
1. Go to "Account" in the EmailJS dashboard
2. Copy your **Public Key** (e.g., `xxxxx_yourpublickey`)

## Step 5: Update Environment Variables
Add these to your `.env.local` file:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
```

## Step 6: Restart Your Development Server
```bash
npm run dev
```

## Testing
1. Fill out the booking form with test data
2. Click "Send Inquiry"
3. Check your email inbox for the booking details
4. A toast notification will appear on success

## Notes
- Free EmailJS account allows up to 200 emails per month
- All templates use the variables defined in `BookingOptionsModal.jsx`
- Dates and guests are automatically filled from the Hero booking form
- Emails are sent directly from the user's browser using your SMTP service
