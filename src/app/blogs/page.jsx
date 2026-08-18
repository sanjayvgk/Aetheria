"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Folder, Calendar, User, Clock, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Blog Data Array ---
const blogPosts = [
  {
    id: 1,
    title: 'Service Apartment in Chikkamagaluru – Family-Friendly Stay (Complete Guide 2026)',
    slug: '1',
    author: 'Aetheria Hospitality',
    date: 'February 26, 2026',
    category: 'Travel Guide',
    featured_image: 'https://res.cloudinary.com/djfxdsmvk/image/upload/v1772124899/atheria_p1xrgl.jpg',
    excerpt: 'Looking for a spacious and comfortable Service apartment in Chikkamagaluru for your family trip? Aetheria offers fully furnished 2BHK and 3BHK apartments designed for families, groups, and long-stay travelers.',
    content: `
      <p>Looking for a spacious and comfortable Service apartment in Chikkamagaluru for your family trip?</p>
      <p>Aetheria Service Apartment offers fully furnished 2BHK and 3BHK apartments designed for families, groups, and long-stay travelers who need more than just a hotel room. With kitchen access, parking, WiFi, and peaceful surroundings, Aetheria is one of the best stay options in Chikkamagaluru for family vacations.</p>
      <h3>Why Choose a Family-Friendly Service Apartment in Chikkamagaluru?</h3>
      <p>When traveling with children or elders, comfort and convenience matter more than luxury branding.</p>
      <p>A family-friendly Service apartment should offer:</p>
      <ul>
          <li>• Spacious bedrooms</li>
          <li>• Separate living area</li>
          <li>• Kitchen facility</li>
          <li>• Safe parking</li>
          <li>• Peaceful location</li>
          <li>• Easy access to attractions</li>
      </ul>
      <p>Unlike compact hotel rooms, a Service apartment in Chikkamagaluru allows families to stay together comfortably.</p>
      <h3>What Makes Aetheria Ideal for Family Stay?</h3>
      <h4>Spacious 1BHK & 2BHK Layout</h4>
      <p>Families need space to relax after visiting places like Mullayanagiri and Baba Budangiri.</p>
      <p>Aetheria offers:</p>
      <ul>
          <li>• Separate bedrooms</li>
          <li>• Comfortable living room</li>
          <li>• Dining space</li>
          <li>• Proper ventilation</li>
      </ul>
      <h4>Kitchen Facility for Home-Style Comfort</h4>
      <p>For families with kids, daily restaurant food is not always practical.</p>
      <p>Our Service apartment provides:</p>
      <ul>
          <li>• Functional kitchen</li>
          <li>• Refrigerator</li>
          <li>• Cooking essentials</li>
      </ul>
      <p>This makes Aetheria one of the most practical Service apartments in Chikkamagaluru.</p>
      <h4>Peaceful & Safe Location</h4>
      <p><strong>📍 Aetheria Service Apartment, Shetty Street, Chikmagalur, Karnataka</strong></p>
      <p>Located in a calm residential area, ideal for families and group travelers.</p>
      <h4>Cost-Effective for Groups</h4>
      <p>Booking two hotel rooms increases cost.</p>
      <p>Booking one Service apartment:</p>
      <ul>
          <li>• Reduces expense</li>
          <li>• Keeps everyone together</li>
          <li>• Offers better comfort</li>
      </ul>
      <p>That's why many travelers searching for the best stay in Chikkamagaluru choose service apartments over hotels.</p>
      <h3>Service Apartment vs Hotel – Which is Better for Families?</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
              <tr style="background-color: #f5f5f5;">
                  <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Feature</th>
                  <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Hotel Room</th>
                  <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Service Apartment</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td style="border: 1px solid #ddd; padding: 12px;">Space</td>
                  <td style="border: 1px solid #ddd; padding: 12px;">Limited</td>
                  <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold; color: #2ecc71;">Spacious</td>
              </tr>
              <tr style="background-color: #fafafa;">
                  <td style="border: 1px solid #ddd; padding: 12px;">Kitchen</td>
                  <td style="border: 1px solid #ddd; padding: 12px;">No</td>
                  <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold; color: #2ecc71;">Yes</td>
              </tr>
              <tr>
                  <td style="border: 1px solid #ddd; padding: 12px;">Privacy</td>
                  <td style="border: 1px solid #ddd; padding: 12px;">Limited</td>
                  <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold; color: #2ecc71;">High</td>
              </tr>
              <tr style="background-color: #fafafa;">
                  <td style="border: 1px solid #ddd; padding: 12px;">Cost for Group</td>
                  <td style="border: 1px solid #ddd; padding: 12px;">High</td>
                  <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold; color: #2ecc71;">Shared & Affordable</td>
              </tr>
          </tbody>
      </table>
      <p>For families, a Service apartment in Chikkamagaluru is clearly the smarter choice.</p>
      <h3>Book Your Service Apartment in Chikkamagaluru Today</h3>
      <p><strong>Call Now:</strong></p>
      <ul>
          <li>• 📞 (+91) 7019454382</li>
          <li>• 📞 (+91) 8147475109</li>
          <li>• 📧 aetheriahospitality@gmail.com</li>
      </ul>
      <p>Book directly for the best price and personalized support.</p>
      <p><strong>Stay smart. Stay spacious. Stay at Aetheria.</strong></p>
    `,
    reading_time: '8 min read'
  },
  {
    id: 2,
    title: 'Service Apartment in Chikkamagaluru vs Hotels – Best Stay Guide (2026)',
    slug: '2',
    author: 'Aetheria Hospitality',
    date: 'February 26, 2026',
    category: 'Travel Guide',
    featured_image: 'https://res.cloudinary.com/djfxdsmvk/image/upload/v1772125140/WhatsApp_Image_2026-02-26_at_10.22.55_PM_ggikqd.jpg',
    excerpt: 'Planning a trip and unsure whether to choose a budget hotel, luxury resort, or a Service apartment in Chikkamagaluru? This guide compares all three.',
    content: `
      <p>Planning a trip and unsure whether to choose a budget hotel, luxury resort, or a Service apartment in Chikkamagaluru?</p>
      <p>Your stay decision directly impacts comfort, cost, and overall travel experience. While Chikkamagaluru offers multiple accommodation options, not all are suitable for families, groups, or longer stays.</p>
      <h3>Budget Stay in Chikkamagaluru – Is It Worth It?</h3>
      <p>Budget hotels are popular among short-term travelers.</p>
      <p><strong>Pros:</strong></p>
      <ul>
          <li>• Lower room rates</li>
          <li>• Basic amenities</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
          <li>• Small rooms</li>
          <li>• No kitchen</li>
          <li>• Limited privacy</li>
      </ul>
      <h3>Service Apartment in Chikkamagaluru – The Perfect Balance</h3>
      <p>A Service apartment in Chikkamagaluru offers the best of both worlds — space and comfort without luxury pricing.</p>
      <p><strong>Why Service Apartments Are Better:</strong></p>
      <ul>
          <li>• Spacious 1BHK & 2BHK layouts</li>
          <li>• Separate living area</li>
          <li>• Kitchen access</li>
          <li>• Cost-sharing advantage</li>
          <li>• Better privacy</li>
      </ul>
    `,
    reading_time: '10 min read'
  },
  {
    id: 3,
    title: 'Best Places to Visit in Chikkamagaluru – Complete 2026 Travel Guide',
    slug: '3',
    author: 'Aetheria Hospitality',
    date: 'February 20, 2026',
    category: 'Travel',
    featured_image: 'https://res.cloudinary.com/djfxdsmvk/image/upload/v1771608514/blog1_kiblex.jpg',
    excerpt: 'Discover the best places to visit in Chikkamagaluru including Mullayanagiri, Baba Budangiri, Hebbe Falls & more. Complete 2026 travel guide with itinerary & stay tips.',
    content: `
        <p>Chikkamagaluru, known as the "Coffee Land of Karnataka," is one of South India's most breathtaking hill stations. With mist-covered mountains, lush green valleys, waterfalls, coffee estates, and cool climate throughout the year, it has become a top weekend getaway from Bangalore and across Karnataka.</p>
        <p>If you are planning a trip in 2026, this complete travel guide covers the best places to visit in Chikkamagaluru, ideal itinerary, travel tips, and the best stay options for families, couples, and groups.</p>
        <h3>1. Mullayanagiri – The Highest Peak in Karnataka</h3>
        <p>Mullayanagiri stands at 1930 meters above sea level and is the highest peak in Karnataka.</p>
        <p><strong>Why Visit?</strong></p>
        <ul>
            <li>• Stunning sunrise views</li>
            <li>• Cool mountain breeze</li>
            <li>• Short trekking trails</li>
            <li>• Perfect photo spots</li>
        </ul>
        <p>It is easily accessible by road, and from the parking area, a short walk takes you to the summit viewpoint.</p>
        <p><strong>Best time to visit:</strong> Early morning (6 AM – 9 AM) or sunset.</p>
        <h3>2. Baba Budangiri – Scenic Drives & Spiritual Significance</h3>
        <p>Baba Budangiri is famous for its scenic hill roads and ancient caves.</p>
        <p>The drive itself is magical, especially during monsoon when clouds cover the roads. The place holds both spiritual and historical significance.</p>
        <p><strong>Ideal for:</strong></p>
        <ul>
            <li>• Road trips</li>
            <li>• Couples</li>
            <li>• Peaceful nature lovers</li>
        </ul>
        <h3>Where to Stay in Chikkamagaluru?</h3>
        <p>Choosing the right accommodation makes a huge difference. Hotels often have:</p>
        <ul>
            <li>• Limited space</li>
            <li>• No kitchen</li>
            <li>• Higher seasonal pricing</li>
        </ul>
        <p>If you're searching for the best stay in Chikkamagaluru for families or groups, service apartments offer better value.</p>
        <p><strong>Aetheria Service Apartment provides:</strong></p>
        <ul>
            <li>• Spacious 1BHK & 2BHK apartments</li>
            <li>• Fully furnished interiors</li>
            <li>• Kitchen facility</li>
            <li>• High-speed WiFi</li>
            <li>• Parking</li>
            <li>• Ideal for families, couples & group stays</li>
        </ul>
        <p>For direct booking and best price guarantee, contact Aetheria Service Apartment.</p>
    `,
    reading_time: '10 min read'
  },
  {
    id: 4,
    title: '2 Days Chikkamagaluru Itinerary for Families & Couples (2026 Complete Guide)',
    slug: '4',
    author: 'Aetheria Hospitality',
    date: 'February 20, 2026',
    category: 'Travel Guide',
    featured_image: 'https://images.unsplash.com/photo-1542644265-d0515152a5c9?q=80&w=2000',
    excerpt: 'Plan the perfect 2 days Chikkamagaluru itinerary with top attractions, travel tips, budget guide & best stay options for families and couples.',
    content: `
        <p>Chikkamagaluru is one of the most beautiful hill stations in Karnataka and a perfect destination for a short weekend getaway. If you're planning a quick escape, this 2 days Chikkamagaluru itinerary for families and couples will help you cover the top attractions comfortably without rushing.</p>
        <p>Whether you're traveling from Bangalore or nearby cities, this guide includes a sightseeing plan, travel tips, best time to visit, and where to stay for a comfortable experience.</p>
        <h3>Why 2 Days Are Enough for Chikkamagaluru</h3>
        <p>Many travelers ask: <strong>Is 2 days enough for Chikkamagaluru?</strong></p>
        <p><strong>Yes</strong> — if planned properly.</p>
        <p>In two days, you can cover:</p>
        <ul>
            <li>• Major hill viewpoints</li>
            <li>• Waterfalls</li>
            <li>• Coffee plantations</li>
            <li>• Scenic drives</li>
            <li>• Local shopping</li>
        </ul>
        <h3>Day 1: Peaks, Scenic Drives & Coffee Experience</h3>
        <h4>Morning: Mullayanagiri Sunrise</h4>
        <p>Start early and head to Mullayanagiri — the highest peak in Karnataka.</p>
        <p><strong>Why visit early?</strong></p>
        <ul>
            <li>• Less crowd</li>
            <li>• Cool weather</li>
            <li>• Clear sunrise views</li>
            <li>• Better photography</li>
        </ul>
        <p>There's a small staircase walk from the parking area to the top viewpoint, suitable even for families.</p>
        <p><strong>Time required:</strong> 1.5–2 hours</p>
        <h3>Estimated Cost for 2 Days Trip (Per Couple)</h3>
        <ul>
            <li><strong>• Travel (from Bangalore):</strong> ₹3000–₹5000</li>
            <li><strong>• Food:</strong> ₹1500–₹2500</li>
            <li><strong>• Sightseeing & entry:</strong> ₹1000–₹2000</li>
            <li><strong>• Stay:</strong> Depends on choice</li>
        </ul>
        <p>Choosing a service apartment in Chikkamagaluru reduces overall cost for families and groups.</p>
    `,
    reading_time: '12 min read'
  }
];

const BlogContent = () => {
  // Get blog ID from URL params
  const searchParams = useSearchParams();
  const urlBlogId = searchParams.get('id') || '1';

  // State for Navigation - initialize from URL or default to '1'
  const [currentSlug, setCurrentSlug] = useState(urlBlogId);

  // Update slug when URL changes
  useEffect(() => {
    setCurrentSlug(urlBlogId);
  }, [urlBlogId]);

  // Scroll to top on post change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSlug]);

  useEffect(() => {
    window.scrollBy(0, 3);

    const handleScroll = () => {
      if (window.scrollY < 3) {
        window.scrollTo(0, 3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Derive Current, Next, and Previous Posts
  const currentIndex = blogPosts.findIndex((post) => post.slug === currentSlug);
  const currentPost = blogPosts[currentIndex] || blogPosts[0];

  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="font-sans text-[#333333] mt-26 bg-[#faf9f6] min-h-screen">
      {/* Main Content Area */}
      <main className="pt-6 pb-16 px-5">
        <div className="max-w-6xl mx-auto bg-white p-6 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e9ecef]">

          {/* Post Header */}
          <div className="mb-10 animate-[fadeInDown_0.6s_ease-out]">
            <h1 className="text-[2rem] md:text-[2.6rem] leading-[1.2] font-semibold text-[#192436] mb-6 font-serif">
              {currentPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 pb-6 border-b border-[#e9ecef]">
              <span className="inline-flex items-center bg-[#f8f5f0] text-[#ae9d81] px-4 py-1.5 rounded-full text-[0.8rem] font-bold uppercase tracking-widest border border-[#ae9d81]/20">
                <Folder className="w-3.5 h-3.5 mr-2" />
                {currentPost.category}
              </span>

              <div className="flex items-center gap-2 text-[0.9rem] text-[#777777] font-medium">
                <Calendar className="w-4 h-4 text-[#ae9d81]" />
                {currentPost.date}
              </div>

              <div className="flex items-center gap-2 text-[0.9rem] text-[#777777] font-medium hidden sm:flex">
                <User className="w-4 h-4 text-[#ae9d81]" />
                {currentPost.author}
              </div>

              <div className="flex items-center gap-2 text-[0.9rem] text-[#777777] font-medium">
                <Clock className="w-4 h-4 text-[#ae9d81]" />
                {currentPost.reading_time}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-[250px] md:h-[450px] mb-12 rounded-2xl overflow-hidden shadow-md animate-[fadeInUp_0.6s_ease-out] group">
            <img
              src={currentPost.featured_image}
              alt={currentPost.title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Dynamic Post Content styled via nested Tailwind selectors */}
          <div
            className="
              text-[1.05rem] md:text-[1.1rem] text-[#4a4a4a] leading-[1.85] mb-16
              [&_p]:mb-6 
              [&_h3]:text-[1.7rem] md:[&_h3]:text-[2rem] [&_h3]:font-serif [&_h3]:font-semibold [&_h3]:text-[#192436] [&_h3]:mt-12 [&_h3]:mb-6 [&_h3]:pb-3 [&_h3]:border-b [&_h3]:border-[#e9ecef]
              [&_h4]:text-[1.3rem] md:[&_h4]:text-[1.4rem] [&_h4]:font-serif [&_h4]:font-semibold [&_h4]:text-[#192436] [&_h4]:mt-8 [&_h4]:mb-4
              [&_strong]:text-[#192436] [&_strong]:font-semibold
              [&_ul]:my-6 [&_ul]:ml-2 md:[&_ul]:ml-6 [&_ul]:list-none [&_ul]:space-y-3
              [&_li]:relative [&_li]:pl-7 [&_li]:text-[#4a4a4a]
              before:[&_li]:content-['▸'] before:[&_li]:absolute before:[&_li]:left-0 before:[&_li]:text-[#ae9d81] before:[&_li]:font-bold before:[&_li]:text-xl before:[&_li]:top-[-2px]
              [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:shadow-[0_2px_10px_rgba(0,0,0,0.03)]
              [&_th]:bg-[#f8f5f0] [&_th]:border [&_th]:border-white [&_th]:p-4 [&_th]:text-left [&_th]:text-[#192436] [&_th]:font-serif [&_th]:font-semibold
              [&_td]:border [&_td]:border-gray-100 [&_td]:p-4 [&_td]:text-[#4a4a4a]
              [&_tr:nth-child(even)]:bg-[#faf9f6]
            "
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />

          {/* Blog Navigation (Prev/Next) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-[#e9ecef]">

            {/* Previous Post */}
            {prevPost ? (
              <div
                onClick={() => setCurrentSlug(prevPost.slug)}
                className="bg-white border border-[#e9ecef] rounded-2xl p-6 transition-all duration-300 relative overflow-hidden cursor-pointer group hover:border-[#ae9d81] hover:-translate-y-1 hover:shadow-lg text-left"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#ae9d81] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                <div className="text-[0.75rem] uppercase tracking-[1.5px] text-[#ae9d81] font-bold mb-3 flex items-center gap-2 justify-start">
                  <ChevronLeft className="w-4 h-4" /> Previous
                </div>
                <div className="text-[1.1rem] font-serif font-semibold text-[#192436] mb-2 leading-[1.4] group-hover:text-[#ae9d81] transition-colors line-clamp-2">
                  {prevPost.title}
                </div>
              </div>
            ) : (
              <div className="bg-[#fcfcfc] border border-[#f0f0f0] rounded-2xl p-6 relative overflow-hidden text-left pointer-events-none opacity-60">
                <div className="text-[0.75rem] uppercase tracking-[1.5px] text-[#999999] font-bold mb-3 flex items-center gap-2 justify-start">
                  <ChevronLeft className="w-4 h-4" /> Previous
                </div>
                <div className="text-[1.1rem] font-serif font-semibold text-[#999999] mb-2 leading-[1.4]">
                  No Older Posts
                </div>
              </div>
            )}

            {/* Next Post */}
            {nextPost ? (
              <div
                onClick={() => setCurrentSlug(nextPost.slug)}
                className="bg-white border border-[#e9ecef] rounded-2xl p-6 transition-all duration-300 relative overflow-hidden cursor-pointer group hover:border-[#ae9d81] hover:-translate-y-1 hover:shadow-lg text-left md:text-right"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#ae9d81] origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                <div className="text-[0.75rem] uppercase tracking-[1.5px] text-[#ae9d81] font-bold mb-3 flex items-center gap-2 justify-start md:justify-end">
                  Next <ChevronRight className="w-4 h-4" />
                </div>
                <div className="text-[1.1rem] font-serif font-semibold text-[#192436] mb-2 leading-[1.4] group-hover:text-[#ae9d81] transition-colors line-clamp-2">
                  {nextPost.title}
                </div>
              </div>
            ) : (
              <div className="bg-[#fcfcfc] border border-[#f0f0f0] rounded-2xl p-6 relative overflow-hidden text-left md:text-right pointer-events-none opacity-60">
                <div className="text-[0.75rem] uppercase tracking-[1.5px] text-[#999999] font-bold mb-3 flex items-center gap-2 justify-start md:justify-end">
                  Next <ChevronRight className="w-4 h-4" />
                </div>
                <div className="text-[1.1rem] font-serif font-semibold text-[#999999] mb-2 leading-[1.4]">
                  No Newer Posts
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* Internal CSS for basic animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

const BlogPostPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#faf9f6]">
          <div className="w-12 h-12 border-4 border-[#ae9d81] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <BlogContent />
      </Suspense>
      <Footer />
    </>
  );
};

export default BlogPostPage;