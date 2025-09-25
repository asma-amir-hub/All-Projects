import React from 'react';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.3}px)` }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="glass-container p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2 mb-8 animate-slideDown">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-200">Award-Winning Dealership</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slideUp">
            <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              Premium
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Automotive
            </span>
            <br />
            <span className="text-white">Experience</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideUp" style={{ animationDelay: '0.3s' }}>
            Discover luxury vehicles with unmatched quality, exceptional service, and competitive prices. Your dream car awaits at Balach Motors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <button className="premium-button group bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-8 py-4 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50">
              <span className="flex items-center">
                View Inventory
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </button>
            
            <button className="glass-button group backdrop-blur-xl bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-500 transform hover:scale-105 shadow-xl">
              <span className="flex items-center">
                Schedule Test Drive
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideUp" style={{ animationDelay: '0.9s' }}>
            <div className="text-center group">
              <div className="glass-stat-card p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center justify-center mb-3">
                  <Star className="w-6 h-6 text-amber-400 mr-2" />
                  <span className="text-3xl font-bold text-amber-400">4.9</span>
                </div>
                <p className="text-gray-300">Customer Rating</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="glass-stat-card p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-blue-400 mr-2" />
                  <span className="text-3xl font-bold text-blue-400">25K+</span>
                </div>
                <p className="text-gray-300">Happy Customers</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="glass-stat-card p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-3xl font-bold text-green-400">15</span>
                </div>
                <p className="text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;