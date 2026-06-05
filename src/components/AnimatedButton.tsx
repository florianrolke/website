
import React from 'react';

interface AnimatedButtonProps {
  className?: string;
}

const AnimatedButton = ({ className = '' }: AnimatedButtonProps) => {
  return (
    <a 
      href="https://www.skool.com/aiautomationsbyjack/about?ref=2fe7a5c2ecf945689cc0590e0cec7441"
      target="_blank"
      rel="noopener noreferrer"
      className={`block mx-auto w-fit ${className}`}
    >
      <button className="custom-btn btn-12 minimalist">
        <span>You get 1:1 attention.</span>
        <span>Meet me in 'AI Automations by Jack'</span>
      </button>
    </a>
  );
};

export default AnimatedButton;
