# EmailJS Template Quick Reference

## Template 1: Booking Inquiry Template

**Template ID:** `booking_inquiry_template`

**Variables to map from form:**
```javascript
{
  from_name: form.name,
  from_email: form.email,
  phone: form.phone,
  check_in: form.checkIn,
  check_out: form.checkOut,
  guests: form.guests,
  message: form.message,
  to_email: "support@aetheriaserviceapartments.com"
}
```

---

## Template 2: Contact Form Template

**Template ID:** `contact_inquiry_template`

**Variables to map from form:**
```javascript
{
  from_name: form.name,
  from_email: form.email,
  phone: form.phone,
  subject: form.subject,
  message: form.message,
  to_email: "support@aetheriaserviceapartments.com"
}
```

---

## How to Use These Templates

### In EmailJS Dashboard:

1. **Create Template** → Enter template name
2. **Go to Editor** → Use the HTML code templates
3. **Copy** the full HTML template code from `EMAILJS_TEMPLATES.md`
4. **Note Template ID** → You'll use this in your code

### In Your Code:

```javascript
// BookingOptionsModal.jsx
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  "booking_inquiry_template", // Use this template ID
  templateVariables
);

// Contact Page
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  "contact_inquiry_template", // Use this template ID
  templateVariables
);
```

---

## Email Variables Available in Templates

Use these in the HTML template with double curly braces:

### Booking Template:
- `{{from_name}}` - Contact name
- `{{from_email}}` - Contact email with mailto link
- `{{phone}}` - Phone number
- `{{check_in}}` - Check-in date
- `{{check_out}}` - Check-out date
- `{{guests}}` - Guest count
- `{{message}}` - Special requests

### Contact Template:
- `{{from_name}}` - Sender name
- `{{from_email}}` - Sender email
- `{{phone}}` - Phone (optional)
- `{{subject}}` - Inquiry type
- `{{message}}` - Full message
