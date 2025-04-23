import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const AnimatedText = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative max-w-[1400px] mx-auto">
      <div className="container-animate text-center flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 pt-8 md:pt-16">
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
          <p className="text-white text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-8 opacity-90 font-normal">
            And create an offer that sells.
          </p>
        </div>
        {(!isMobile || window.innerWidth >= 768) && (
          <img 
            src="/lovable-uploads/26928ad4-83d9-40e0-903a-a6bc8765c7c6.png"
            alt="Profile"
            className="w-64 md:w-80 lg:w-[28rem] h-auto object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default AnimatedText;
