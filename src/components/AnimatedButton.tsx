
import React from 'react';

interface AnimatedButtonProps {
  href: string;
  className?: string;
}

const AnimatedButton = ({ href, className = '' }: AnimatedButtonProps) => {
  return (
    <a 
      href="https://www.skool.com/self-optimization-nation-1012"
      target="_blank"
      rel="noopener noreferrer"
      className={`block mx-auto w-fit ${className}`}
    >
      <button className="custom-btn btn-12 minimalist">
        <span>It's free!</span>
        <span>Join my free school community</span>
      </button>
    </a>
  );
};

export default AnimatedButton;
