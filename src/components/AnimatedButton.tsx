
import React from 'react';

interface AnimatedButtonProps {
  className?: string;
}

const AnimatedButton = ({ className = '' }: AnimatedButtonProps) => {
  return (
    <a 
      href="https://www.skool.com/self-optimization-nation-1012"
      target="_blank"
      rel="noopener noreferrer"
      className={`block mx-auto w-fit ${className}`}
    >
      <button className="custom-btn btn-12 minimalist">
        <span>You get 1:1 attention.</span>
        <span>Join my free community!</span>
      </button>
    </a>
  );
};

export default AnimatedButton;
