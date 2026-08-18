import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";
import { BookingProvider } from "@/context/BookingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aetheria Hospitality | Best Family Serviced Apartment in Chikkamagaluru",
  description: "Book your stay at Aetheria Hospitality, the top-rated 1BHK & 2BHK serviced apartments in Chikkamagaluru. Perfect for families, featuring mountain views, kitchens, and central city access.",
  keywords: [
    "Aetheria Hospitality Chikkamagaluru",
    "best apartment in Chikkamagaluru for family",
    "serviced apartments in Chikmagalur",
    "luxury stay Chikkamagaluru",
    "family friendly accommodation Chikmagalur",
    "1BHK 2BHK penthouse Chikkamagaluru",
    "stay near KSRTC bus stand Chikmagalur"
  ],
  openGraph: {
    title: "Aetheria Hospitality - Your Home Away From Home in Chikkamagaluru",
    description: "Experience comfort and elegance in the heart of nature. Spacious family apartments with modern amenities and stunning hill views.",
    url: "https://aetheriahospitality.com", // Replace with your actual URL
    siteName: "Aetheria Hospitality",
    images: [
      {
        url: "/og-image.jpg", // Path to your property photo
        width: 1200,
        height: 630,
        alt: "Aetheria Hospitality Apartment View",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <BookingProvider>
          <ToastProvider />
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
