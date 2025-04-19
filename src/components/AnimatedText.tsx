
import React from 'react';

const AnimatedText = () => {
  return (
    <div className="container-animate text-center flex flex-col md:flex-row items-center justify-center gap-8">
      <div>
        <div className="static-text text-white text-3xl md:text-4xl mb-4">
          I help B2B AI agency owners focus on
        </div>
        <div className="animated-text">
          <div>
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400">one business</div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500">one avatar</div>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600">one problem</div>
          </div>
        </div>
        <p className="text-white text-2xl mt-8 opacity-90 font-normal">
          And create an offer that sells.
        </p>
      </div>
      <img 
        src="/lovable-uploads/26928ad4-83d9-40e0-903a-a6bc8765c7c6.png"
        alt="Profile"
        className="w-64 h-auto hidden md:block"
      />
    </div>
  );
};

export default AnimatedText;
