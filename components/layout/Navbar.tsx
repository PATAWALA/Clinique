// components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import clinicConfig from '../../data/clinic-config';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm md:text-xl">C</span>
            </div>
            <span className="font-bold text-sm md:text-xl text-gray-900">
              {clinicConfig.name}
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#problems" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
              Problèmes
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
              Avantages
            </a>
            <a href="#opportunities" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
              Opportunités
            </a>
            <Button primary href="#contact" className="!text-sm !px-5 !py-2.5 !rounded-full">
              <span className="mr-1.5">💬</span>
              Parler à un expert
            </Button>
          </div>

          {/* Burger Menu Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-2">
              <a 
                href="#problems" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-50"
              >
                🔍 Problèmes
              </a>
              <a 
                href="#benefits" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-50"
              >
                ⭐ Avantages
              </a>
              <a 
                href="#opportunities" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-50"
              >
                💰 Opportunités
              </a>
              <div className="pt-2 px-3 pb-1">
                <Button primary href="#contact" className="!text-sm !px-5 !py-2.5 w-full justify-center !rounded-full">
                  <span className="mr-1.5">💬</span>
                  Parler à un expert
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}