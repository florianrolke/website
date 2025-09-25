import React, { useEffect } from 'react';

const SenjaWidget = () => {
  useEffect(() => {
    // Load iFrameResize script
    const script1 = document.createElement('script');
    script1.src = 'https://widget.senja.io/js/iframeResizer.min.js';
    script1.type = 'text/javascript';
    document.head.appendChild(script1);

    // Initialize iframe resizer after script loads
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.text = `
        document.addEventListener("DOMContentLoaded", function () {
          if (window.iFrameResize) {
            iFrameResize({log: false, checkOrigin: false}, "#wall-of-love-vRlkURH");
          }
        });
      `;
      document.head.appendChild(script2);
      
      // Trigger resize immediately if DOM is already loaded
      if (window.iFrameResize) {
        window.iFrameResize({log: false, checkOrigin: false}, "#wall-of-love-vRlkURH");
      }
    };

    return () => {
      // Cleanup scripts on component unmount
      const scripts = document.querySelectorAll('script[src*="senja.io"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="w-full bg-white py-8" style={{ backgroundColor: 'white' }}>
      <iframe 
        id="wall-of-love-vRlkURH" 
        src="https://senja.io/p/florian-rolke/vRlkURH?hideNavigation=true&embed=true&backgroundColor=white" 
        title="Wall of Love" 
        frameBorder="0" 
        scrolling="no" 
        width="100%"
        className="w-full bg-white"
        style={{ backgroundColor: 'white' }}
      />
    </div>
  );
};

export default SenjaWidget;