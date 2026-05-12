// components/layout/Navbar.tsx
import { useState } from 'react';
import Button from '../ui/Button';
import clinicConfig from '../../data/clinic-config';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
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
            <Button primary href="#contact" className="!text-sm !px-5 !py-2.5">
              <span className="mr-1.5">💬</span>
              Parler à un expert
            </Button>
          </div>

          {/* Burger Menu Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <a 
                href="#problems" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                🔍 Problèmes
              </a>
              <a 
                href="#benefits" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                ⭐ Avantages
              </a>
              <a 
                href="#opportunities" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                💰 Opportunités
              </a>
              <div className="pt-2 px-3">
                <Button primary href="#contact" className="!text-sm !px-5 !py-2.5 w-full justify-center">
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