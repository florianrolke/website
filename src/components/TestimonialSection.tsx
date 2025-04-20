
import React, { useState, useRef } from 'react';

const testimonials = [
  {
    image: "https://image.freepik.com/free-photo/spaghetti-with-carbonara-sauce_1216-324.jpg",
    text: "There was a time when Chinese food in this country meant (Americanized) Cantonese food.",
    title: "Chicken for two Roasted"
  },
  {
    image: "https://image.freepik.com/free-photo/dishes-with-healthy-waffles_1220-367.jpg",
    text: "There was a time when Chinese food in this country meant (Americanized) Cantonese food.",
    title: "Chicken for two Roasted"
  },
  {
    image: "https://image.freepik.com/free-photo/top-view-of-tasty-noodles-with-prawns_1203-1769.jpg",
    text: "There was a time when Chinese food in this country meant (Americanized) Cantonese food.",
    title: "Chicken for two Roasted"
  },
  {
    image: "https://image.freepik.com/free-photo/burguer-with-garnish_1088-72.jpg",
    text: "There was a time when Chinese food in this country meant (Americanized) Cantonese food.",
    title: "Chicken for two Roasted"
  },
  {
    image: "https://image.freepik.com/free-photo/delicious-pastry-with-chicken_1203-1616.jpg",
    text: "There was a time when Chinese food in this country meant (Americanized) Cantonese food.",
    title: "Chicken for two Roasted"
  }
];

const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newPosition = Math.max(scrollPosition - 300, 0);
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const newPosition = Math.min(scrollPosition + 300, maxScroll);
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="bg-white py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(84,58,183,0.05)] to-[rgba(0,172,193,0.05)] h-1/2 top-0"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-800">Client Testimonials</h2>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h5 className="text-lg font-semibold mb-2">{testimonial.title}</h5>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 -ml-4 hidden md:block"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 -mr-4 hidden md:block"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2 md:hidden">
          <button 
            onClick={scrollLeft}
            className="p-2 bg-white rounded-full shadow-sm"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 bg-white rounded-full shadow-sm"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
