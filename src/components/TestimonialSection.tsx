
import React, { useEffect } from 'react';

const TestimonialSection = () => {
  useEffect(() => {
    // Load the iframeResizer script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widget.senja.io/js/iframeResizer.min.js';
    script.onload = () => {
      // Initialize iframe resizer after script loads
      if (window.iFrameResize) {
        window.iFrameResize({log: false, checkOrigin: false}, "#wall-of-love-W18EoJH");
      }
    };
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
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(84,58,183,0.05)] to-[rgba(0,172,193,0.05)] h-1/2 top-0 w-full"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-800">Client Testimonials</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <iframe 
            id="wall-of-love-W18EoJH" 
            src="https://senja.io/p/florianrolke/W18EoJH?hideNavigation=true&embed=true" 
            title="Wall of Love" 
            frameBorder="0" 
            scrolling="no" 
            width="100%"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
