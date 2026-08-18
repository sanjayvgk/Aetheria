const Footer = () => {
    return (
        <footer className="bg-bg-dark text-white pt-16 pb-12">
            <div className="container mx-auto px-6">
                {/* Statistics section above footer content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 pb-6 border-b border-white/5">
                    <div className="text-center group">
                        <h4 className="text-4xl md:text-5xl font-serif text-primary-gold mb-2 group-hover:scale-110 transition-transform">2,000+</h4>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Happy Guests</p>
                    </div>
                    <div className="text-center group">
                        <h4 className="text-4xl md:text-5xl font-serif text-primary-gold mb-2 group-hover:scale-110 transition-transform">4.9★</h4>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Average Rating</p>
                    </div>
                    <div className="text-center group">
                        <h4 className="text-4xl md:text-5xl font-serif text-primary-gold mb-2 group-hover:scale-110 transition-transform">4</h4>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Room Types</p>
                    </div>
                    <div className="text-center group">
                        <h4 className="text-4xl md:text-5xl font-serif text-primary-gold mb-2 group-hover:scale-110 transition-transform">5+</h4>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Years of Excellence</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold tracking-widest text-[#FFF] leading-none uppercase">Aetheria</span>
                            <span className="text-[10px] tracking-[0.3em] text-[#C9A84C] font-semibold uppercase">Hospitality</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            Premium service apartments and estate stays nestled in the lush coffee estates of Chikmagalur, Karnataka.
                        </p>
                        <div className="flex space-x-2 text-primary-gold items-center">
                            {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                            <span className="text-white/60 text-xs ml-2">4.9/5</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h5 className="text-sm font-bold uppercase tracking-[0.2em]">Quick Links</h5>
                        <ul className="space-y-4 text-sm text-white/40 font-medium">
                            <li><a href="" className="hover:text-primary-gold transition-colors">Home</a></li>
                            <li><a href="rooms" className="hover:text-primary-gold transition-colors">Rooms & Apartments</a></li>
                            <li><a href="amenities" className="hover:text-primary-gold transition-colors">Amenities</a></li>
                            <li><a href="gallary" className="hover:text-primary-gold transition-colors">Gallery</a></li>
                            <li><a href="contact" className="hover:text-primary-gold transition-colors">Contact</a></li>
                            <li><a href="booking" className="hover:text-primary-gold transition-colors underline underline-offset-4 decoration-primary-gold">Book Direct</a></li>
                        </ul>
                    </div>

                    {/* Our Rooms */}
                    <div className="space-y-6">
                        <h5 className="text-sm font-bold uppercase tracking-[0.2em]">Our Rooms</h5>
                        <ul className="space-y-4 text-sm text-white/40 font-medium">
                            <li><a href="/rooms/1bhk" className="hover:text-primary-gold transition-colors">1BHK Penthouse</a></li>
                            <li><a href="/rooms/2bk" className="hover:text-primary-gold transition-colors">2BHK Standard</a></li>
                            <li><a href="/rooms/2bhk" className="hover:text-primary-gold transition-colors">2BHK Deluxe</a></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div className="space-y-6">
                        <h5 className="text-sm font-bold uppercase tracking-[0.2em]">Contact Us</h5>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start space-x-3 text-white/40">
                                <svg className="w-5 h-5 text-primary-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Shetty St, Lakshmishanagara, Chikkamagaluru, Karnataka 577101</span>
                            </li>
                            <li className="flex items-center space-x-3 text-white/40">
                                <svg className="w-5 h-5 text-primary-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <a href="tel:+917019454382" className="hover:text-primary-gold transition-colors">
                                    +91 7019454382
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 text-white/60 font-bold group">
                                <div className="w-5 h-5 bg-[#25D366] rounded-full flex items-center justify-center p-1 group-hover:scale-110 transition-transform">
                                    <svg fill="white" viewBox="0 0 24 24" className="w-full h-full"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.502-5.69-1.448l-6.303 1.651zm6.373-3.048l.457.27c1.45.859 3.12 1.314 4.823 1.314l.006.001c5.642 0 10.232-4.59 10.235-10.235.001-2.734-1.063-5.304-3.001-7.24s-4.507-3.004-7.241-3.004c-5.645 0-10.236 4.592-10.239 10.237 0 1.802.473 3.564 1.37 5.123l.298.513-1.006 3.673 3.763-.987zm11.385-6.621c-.301-.151-1.782-.879-2.057-.979s-.477-.151-.677.151-.777.979-.952 1.179-.351.226-.651.076c-.301-.151-1.268-.467-2.416-1.492-.892-.797-1.494-1.782-1.67-2.083s-.019-.465.132-.614c.135-.133.301-.351.451-.526s.201-.301.301-.502.05-.376-.025-.526-.677-1.632-.927-2.233c-.243-.586-.49-.507-.677-.517s-.376-.01-.577-.01-.526.076-.802.376c-.276.301-1.053 1.028-1.053 2.508s1.078 2.908 1.228 3.109c.151.201 2.122 3.241 5.141 4.543.718.31 1.279.495 1.716.634.721.229 1.378.197 1.897.12.578-.085 1.782-.728 2.032-1.43s.25-1.304.175-1.43c-.075-.126-.276-.201-.577-.352z" /></svg>
                                </div>
                                <a href="https://wa.me/+917019454382?text=Hi%2C%20I%27m%20interested%20in%20your%20stay.%20Could%20you%20please%20share%20details%20about%20availability%20and%20pricing%3F" className="hover:text-[#25D366] transition-colors border-b border-transparent hover:border-[#25D366]">WhatsApp Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col xl:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
  
  {/* Left Side: Copyright & Credits */}
  <div className="flex flex-col md:flex-row items-center md:gap-3 text-center md:text-left">
    <p className="mb-2 md:mb-0">© 2026 Aetheria Hospitality. All rights reserved.</p>
    
    {/* Small dot separator (hidden on mobile) */}
    <div className="hidden md:block w-1 h-1 rounded-full bg-white/20"></div>
    
    <div className="flex items-center gap-1.5 mt-1 md:mt-0">
      <span>Designed by</span>
      <a 
        href="https://www.marketspherechikkamagaluru.in/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-1 text-[#cca354] hover:text-white transition-colors duration-300"
      >
        MarketSphere Chikkamagaluru
        {/* Animated Arrow on Hover */}
        <svg 
          className="w-2.5 h-2.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        {/* Animated Underline */}
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#cca354] group-hover:w-full group-hover:bg-white transition-all duration-300"></span>
      </a>
    </div>
  </div>

  {/* Right Side: Legal Links */}
  <div className="flex space-x-6 mt-6 xl:mt-0">
    <a href="#" className="relative group overflow-hidden pb-1">
      <span className="transition-colors duration-300 group-hover:text-white">Privacy Policy</span>
      {/* Sliding Underline Effect */}
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/40 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
    </a>
    
    <a href="#" className="relative group overflow-hidden pb-1">
      <span className="transition-colors duration-300 group-hover:text-white">Terms of Service</span>
      {/* Sliding Underline Effect */}
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/40 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
    </a>
  </div>
  
</div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/+917019454382?text=Hi%2C%20I%27m%20interested%20in%20your%20stay.%20Could%20you%20please%20share%20details%20about%20availability%20and%20pricing%3F"
                className="fixed md:bottom-8 bottom-2 right-6 md:right-8 z-50 md:w-14 w-13 h-13 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce duration-1000"
            >
                <svg fill="white" viewBox="0 0 24 24" className="md:w-8 w-6 h-6 md:h-8"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.502-5.69-1.448l-6.303 1.651zm6.373-3.048l.457.27c1.45.859 3.12 1.314 4.823 1.314l.006.001c5.642 0 10.232-4.59 10.235-10.235.001-2.734-1.063-5.304-3.001-7.24s-4.507-3.004-7.241-3.004c-5.645 0-10.236 4.592-10.239 10.237 0 1.802.473 3.564 1.37 5.123l.298.513-1.006 3.673 3.763-.987zm11.385-6.621c-.301-.151-1.782-.879-2.057-.979s-.477-.151-.677.151-.777.979-.952 1.179-.351.226-.651.076c-.301-.151-1.268-.467-2.416-1.492-.892-.797-1.494-1.782-1.67-2.083s-.019-.465.132-.614c.135-.133.301-.351.451-.526s.201-.301.301-.502.05-.376-.025-.526-.677-1.632-.927-2.233c-.243-.586-.49-.507-.677-.517s-.376-.01-.577-.01-.526.076-.802.376c-.276.301-1.053 1.028-1.053 2.508s1.078 2.908 1.228 3.109c.151.201 2.122 3.241 5.141 4.543.718.31 1.279.495 1.716.634.721.229 1.378.197 1.897.12.578-.085 1.782-.728 2.032-1.43s.25-1.304.175-1.43c-.075-.126-.276-.201-.577-.352z" /></svg>
            </a>
        </footer>
    );
};

export default Footer;
