"use client";
import React, { useEffect, useRef } from 'react';

const TestimonialSection = () => {
  // We use a ref to directly target the container div without querying the DOM by ID
  const containerRef = useRef(null);
  const widgetId = "wid_1761049432787";

  useEffect(() => {
    // Check if the script is already there to prevent duplicates (especially in React StrictMode)
    if (containerRef.current && containerRef.current.children.length === 0) {
      const sc = document.createElement("script");
      
      // Attach all the attributes provided by your third-party service
      sc.setAttribute("defer", "true");
      sc.setAttribute("src", "https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1761049432787");
      sc.setAttribute("theme", "light");
      sc.setAttribute("footer", "true"); 
      sc.setAttribute("widget-type", "carousel");
      sc.setAttribute("token", "68f5bcf4f6236cc8d0815d90");
      sc.setAttribute("apiurl", "https://server.onlinereviews.tech/api/v0.0.9");
      sc.setAttribute("stats", "true");
      sc.setAttribute("addReview", "true");
      sc.setAttribute("profile-pic", "true");
      sc.setAttribute("review-name", "true");
      sc.setAttribute("positive-stars", "false");
      sc.setAttribute("wl", "true");
      sc.setAttribute("wlndig", "https://go.ratemybiz.xyz/the-aetheria-service-apartment");
      sc.setAttribute("lang", "us");
      sc.setAttribute("brandStyle", "%7B%22sidebar_background%22%3A%22%23ffffff%22%2C%22sidebar_text%22%3A%22%23000000%22%2C%22brand_button_text_color%22%3A%22white%22%2C%22brand_main_color%22%3A%22%23000000%22%2C%22brand_button_border_radius%22%3A%2216px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%230000001a%22%2C%22brand_button_hover%22%3A%22rgb(0%2C%200%2C%200)%22%2C%22brand_button_active%22%3A%22rgb(0%2C%200%2C%200)%22%2C%22brand_main_color_opacity%22%3A%22%230000001a%22%2C%22brand_font%22%3A%22Montserrat%22%2C%22star_color%22%3A%22%23128c7e%22%2C%22brand_main_background%22%3A%22%23FBF8F6%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Fratemybiz.xyz%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Fapp.ratemybiz.xyz%2Ftopbar.png%22%7D");
      
      // Append the script to our referenced div
      containerRef.current.appendChild(sc);
    }

    // Cleanup function: If the component unmounts (user navigates away), clear the div
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  return (
    <section className="bg-[#F8F7F2] py-10 px-6 font-sans relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h4 className="text-[#C5A85A] font-bold tracking-widest text-md uppercase mb-4">
            Guest Stories
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
            What Our Guests Say
          </h2>
          <p className="text-[#4A4A4A] mt-4 text-lg">
            Don't just take our word for it - hear from our satisfied guests
          </p>
        </div>

        {/* Third-Party Widget Container */}
        <div 
          ref={containerRef} 
          id={widgetId} 
          className="w-full min-h-[300px]" // Added min-height to prevent layout shift before widget loads
        >
          {/* The external script will inject the carousel right here */}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialSection;