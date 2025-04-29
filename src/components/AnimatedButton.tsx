
import React from 'react';

interface AnimatedButtonProps {
  href: string;
  className?: string;
}

const AnimatedButton = ({ href, className = '' }: AnimatedButtonProps) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block mx-auto w-fit ${className}`}
    >
      <button className="custom-btn btn-12">
        <span>See Calendar Availability &gt;&gt;</span>
        <span>Book a Consultation Call &gt;&gt;</span>
      </button>
    </a>
  );
};

export default AnimatedButton;
