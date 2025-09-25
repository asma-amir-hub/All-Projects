import React, { useState, useEffect } from 'react';
import { Car, Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Inventory', href: '#inventory' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-amber-600/10 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-between text-sm text-amber-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@balachmotors.com</span>
              </div>
            </div>
            <div>
              <span>Open Mon-Sat 9AM-8PM, Sun 11AM-6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-400/30 transition-all duration-500"></div>
              <Car className="w-10 h-10 text-amber-500 relative transform group-hover:scale-110 transition-all duration-300" />
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Balach Motors
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Premium Automotive</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-amber-400 transition-colors duration-300 group py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            ))}
            
            <button className="glass-button bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-6 py-2 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
              Schedule Test Drive
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-amber-400 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-amber-500/20 p-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold py-3 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300 mt-4">
              Schedule Test Drive
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;