import React, { useEffect, useState } from 'react';
import { CircleAlert } from 'lucide-react';

export default function DisclaimerBanner() {
  const [topPosition, setTopPosition] = useState(72);

  useEffect(() => {
    const updatePosition = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        setTopPosition(navbarHeight);
      }
    };

    // Initial calculation
    updatePosition();

    // Update on window resize
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <div 
      className="bg-dark-orange text-white border-b border-dark-orange/20 py-3 text-center text-sm font-medium fixed w-full z-30" 
      style={{ top: `${topPosition}px` }}
    >
      <div className="container mx-auto px-4 flex items-center justify-center">
        <CircleAlert size={16} className="text-white mr-2" />
        <p>
          This is a demo website. Not a real law firm. No legal advice provided.
        </p>
      </div>
    </div>
  );
}
