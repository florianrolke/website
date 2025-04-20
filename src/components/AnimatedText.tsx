
import React from 'react';
import WaveAnimation from './WaveAnimation';
import TrustPilotPlaceholder from './TrustPilotPlaceholder';
import TestimonialSection from './TestimonialSection';

const AnimatedText = () => {
  return (
    <div className="relative">
      <div className="container-animate text-center flex flex-col md:flex-row items-center justify-center gap-8">
        <div>
          <div className="static-text text-white text-3xl md:text-4xl lg:text-5xl mb-4">
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
          <p className="text-white text-3xl md:text-4xl lg:text-5xl mt-8 opacity-90 font-normal">
            And create an offer that sells.
          </p>
          <div className="mt-8">
            <TrustPilotPlaceholder />
          </div>
        </div>
        <img 
          src="/lovable-uploads/26928ad4-83d9-40e0-903a-a6bc8765c7c6.png"
          alt="Profile"
          className="w-80 h-auto hidden md:block lg:w-[28rem]"
        />
      </div>
      <WaveAnimation />
      <TestimonialSection />
    </div>
  );
};

export default AnimatedText;
