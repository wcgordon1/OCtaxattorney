import { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { createPortal } from 'react-dom';

const NavLink = ({ to, label, onClick = () => {} }: { to: string; label: string; onClick?: () => void }) => (
  <Link 
    to={to} 
    smooth={true} 
    duration={500} 
    spy={true} 
    activeClass="active-nav-link"
    className="text-xl py-4 border-b border-cream/50 cursor-pointer hover:text-dark-orange transition-colors"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Adjust body padding for banner
  useEffect(() => {
    document.body.style.paddingTop = '30px';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 bg-white shadow-md transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <RouterLink to="/" className="text-dark-brown font-serif font-bold text-xl md:text-2xl">
              <span className="text-dark-orange">Orange County</span> Tax Attorney
            </RouterLink>
          </div>

          {/* Right Side - Contact Button and Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Contact Button */}
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="btn-primary flex items-center transition-transform hover:scale-105"
            >
              Contact <ChevronRight size={16} className="ml-1" />
            </Link>
            
            {/* Menu Toggle Button */}
            <button 
              type="button"
              className="text-dark-brown hover:text-dark-orange hover:rotate-6 transition-all duration-300" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} className="rotate-0 hover:rotate-90 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay rendered via Portal */}
      {typeof window !== 'undefined' && createPortal(
        <div 
          className={`fixed inset-0 bg-white z-[9999] transform transition-all duration-500 ${
            isMenuOpen 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <span className="text-dark-brown font-serif font-bold text-2xl">
                <span className="text-dark-orange">Orange County</span> Tax Attorney
              </span>
              <button 
                type="button"
                className="text-dark-brown hover:text-dark-orange transform hover:rotate-90 transition-all duration-300" 
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col text-dark-brown space-y-2">
              <RouterLink to="/services" className="text-xl py-4 border-b border-cream/50 cursor-pointer hover:text-dark-orange transition-colors" onClick={closeMenu}>
                Services
              </RouterLink>
              <NavLink to="about" label="About Us" onClick={closeMenu} />
              <NavLink to="process" label="Our Process" onClick={closeMenu} />
              <RouterLink to="/locations" className="text-xl py-4 border-b border-cream/50 cursor-pointer hover:text-dark-orange transition-colors" onClick={closeMenu}>
                Locations
              </RouterLink>
              <NavLink to="testimonials" label="Results" onClick={closeMenu} />
              <NavLink to="faq" label="FAQ" onClick={closeMenu} />
              <RouterLink to="/blog" className="text-xl py-4 border-b border-cream/50 cursor-pointer hover:text-dark-orange transition-colors" onClick={closeMenu}>
                Blog
              </RouterLink>
              <NavLink to="contact" label="Contact" onClick={closeMenu} />
              <div className="pt-8 flex justify-center">
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  className="btn-primary flex items-center justify-center w-full max-w-xs mx-auto hover:scale-105 transition-transform"
                  onClick={closeMenu}
                >
                  Free Consultation <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}
