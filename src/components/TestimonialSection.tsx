
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
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Client Experiences</h2>
          <p className="text-xl text-gray-600">My clients</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <iframe 
            id="wall-of-love-W18EoJH" 
            src="https://senja.io/p/florianrolke/W18EoJH?hideNavigation=true&embed=true" 
            title="Client Experiences" 
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
