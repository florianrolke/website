import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Linkedin } from 'lucide-react';

const AnimatedText = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative max-w-[1400px] mx-auto">
      {isMobile && (
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300 mb-6 mx-auto w-fit"
        >
          <Linkedin className="w-5 h-5" />
          <span>Connect with me on LinkedIn</span>
        </a>
      )}
      <div className="container-animate text-center flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 pt-4 md:pt-6">
        <div className="w-full md:w-1/2 lg:w-3/5">
          <div className="static-text text-white text-2xl md:text-3xl lg:text-4xl mb-4">
            I help B2B AI agency owners focus on
          </div>
          <div className="animated-text">
            <div className="flip">
              <div>
                <div className="animated-box">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
                    one problem
                  </span>
                </div>
                <div className="animated-box">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
                    one business
                  </span>
                </div>
                <div className="animated-box">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
                    one avatar
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-white text-2xl md:text-3xl lg:text-4xl mt-6 opacity-90 font-normal">
            And create an offer that sells.
          </p>
        </div>
        {(!isMobile || window.innerWidth >= 768) && (
          <img 
            src="/lovable-uploads/26928ad4-83d9-40e0-903a-a6bc8765c7c6.png"
            alt="Profile"
            className="w-64 md:w-72 lg:w-96 h-auto object-contain -mb-16"
          />
        )}
        {isMobile && (
          <div className="flex flex-col items-center w-full">
            <img 
              src="/lovable-uploads/26928ad4-83d9-40e0-903a-a6bc8765c7c6.png"
              alt="Profile"
              className="w-48 h-auto object-contain -mb-12"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedText;
