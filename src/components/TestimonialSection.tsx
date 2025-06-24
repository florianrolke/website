
import React, { useEffect } from 'react';

const TestimonialSection = () => {
  useEffect(() => {
    // Load the new Senja widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widget.senja.io/widget/6f215e1c-3d01-4482-ab06-13dfab4816bd/platform.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-white py-16 relative w-full overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-800">Client Testimonials</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div 
            className="senja-embed rounded-lg shadow-lg" 
            data-id="6f215e1c-3d01-4482-ab06-13dfab4816bd" 
            data-mode="shadow" 
            data-lazyload="false" 
            style={{display: 'block', width: '100%'}}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
