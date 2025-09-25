import React from 'react';
import { 
  Car, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Inventory', href: '#inventory' },
        { name: 'Services', href: '#services' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Financing', href: '#' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Vehicle Sales', href: '#' },
        { name: 'Auto Financing', href: '#' },
        { name: 'Trade-In Valuation', href: '#' },
        { name: 'Extended Warranties', href: '#' },
        { name: 'Maintenance & Repair', href: '#' },
        { name: 'Vehicle Delivery', href: '#' },
      ]
    },
    {
      title: 'Vehicle Types',
      links: [
        { name: 'Luxury Sedans', href: '#' },
        { name: 'Sports Cars', href: '#' },
        { name: 'SUVs & Crossovers', href: '#' },
        { name: 'Electric Vehicles', href: '#' },
        { name: 'Hybrid Vehicles', href: '#' },
        { name: 'Certified Pre-Owned', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook', color: 'hover:text-blue-400' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram', color: 'hover:text-pink-400' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', name: 'YouTube', color: 'hover:text-red-400' },
  ];

  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center group cursor-pointer mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-400/30 transition-all duration-500"></div>
                  <Car className="w-12 h-12 text-amber-500 relative transform group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="ml-3">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Balach Motors
                  </h3>
                  <p className="text-sm text-gray-400 -mt-1">Premium Automotive</p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted automotive partner for over 15 years. We specialize in premium vehicles with exceptional quality, competitive pricing, and unmatched customer service.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-3 text-amber-500 flex-shrink-0" />
                  <span className="text-sm">123 Automotive Blvd, Premium District</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3 text-amber-500 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3 text-amber-500 flex-shrink-0" />
                  <span className="text-sm">info@balachmotors.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 glass-button backdrop-blur-xl bg-white/5 border border-white/20 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-white/10 shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h4 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="group text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center text-sm"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="glass-container backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-8">
            <div className="text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="text-2xl font-bold text-white mb-2">
                  Stay Updated
                </h4>
                <p className="text-gray-300">
                  Get the latest news on new arrivals, special offers, and automotive insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:ml-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm min-w-64"
                />
                <button className="premium-button bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-6 py-3 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p>&copy; 2025 Balach Motors. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Sitemap</a>
              </div>
            </div>
            
            <div className="flex items-center text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              <span>for automotive enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;