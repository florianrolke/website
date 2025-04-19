
import React from 'react';
import { LinkedIn } from 'lucide-react';

const LinkedInButton = () => {
  return (
    <a
      href="https://linkedin.com/in/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300"
    >
      <LinkedIn className="w-5 h-5" />
      <span className="hidden sm:inline">Connect with me on LinkedIn</span>
    </a>
  );
};

export default LinkedInButton;
