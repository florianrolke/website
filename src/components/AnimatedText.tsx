
import React from 'react';

const AnimatedText = () => {
  return (
    <div className="container-animate text-center flex flex-col md:flex-row items-center justify-center gap-8">
      <div>
        <div className="static-text text-white text-3xl md:text-4xl lg:text-5xl mb-4">
          I help B2B AI agency owners focus on
        </div>
        <div className="animated-text">
          <div className="bg-white rounded-lg p-1">
            <div>
              <div className="animated-item bg-clip-text text-transparent bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
                one problem
              </div>
              <div className="animated-item bg-clip-text text-transparent bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
                one business
              </div>
              <div className="animated-item bg-clip-text text-transparent bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
                one avatar
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-3xl md:text-4xl lg:text-5xl mt-8 opacity-90 font-normal">
          And create an offer that sells.
        </p>
      </div>
      <img 
        src="/lovable-uploads/26928ad4-83d9-40e0-903a-a6bc8765c7c6.png"
        alt="Profile"
        className="w-72 h-auto hidden md:block lg:w-96"
      />
    </div>
  );
};

export default AnimatedText;
