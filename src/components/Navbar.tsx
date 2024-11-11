import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-1 py-4">
        <div className="flex justify-between items-center">
          <div className={`${isScrolled ? 'bg-white' : 'bg-blue-50'}`}>
            <img src="logo1.png" className="w-28 mix-blend-multiply" />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Skills</a>
            <a href="#contact" className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Skills</a>
              <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-center">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}