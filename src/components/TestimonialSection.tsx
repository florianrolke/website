
import React, { useEffect } from 'react';

interface TestimonialSectionProps {
  variant?: 'senja' | 'wall-of-love';
}

const TestimonialSection = ({ variant = 'senja' }: TestimonialSectionProps) => {
  useEffect(() => {
    if (variant === 'senja') {
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
    } else {
      // Load the iframeResizer script for wall of love
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
    }
  }, [variant]);

  return (
    <section className="bg-white py-16 relative w-full overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-800">Client Testimonials</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {variant === 'senja' ? (
            <div 
              className="senja-embed rounded-lg shadow-lg" 
              data-id="6f215e1c-3d01-4482-ab06-13dfab4816bd" 
              data-mode="shadow" 
              data-lazyload="false" 
              style={{display: 'block', width: '100%'}}
            />
          ) : (
            <iframe 
              id="wall-of-love-W18EoJH" 
              src="https://senja.io/p/florianrolke/W18EoJH?hideNavigation=true&embed=true" 
              title="Wall of Love" 
              frameBorder="0" 
              scrolling="no" 
              width="100%"
              className="rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
