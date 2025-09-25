import React from 'react';
import { Award, Users, Star, TrendingUp, Heart, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '25,000+',
      label: 'Satisfied Customers',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '15',
      label: 'Years Experience',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: '4.9/5',
      label: 'Customer Rating',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '98%',
      label: 'Customer Retention',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Every decision we make is guided by what\'s best for our customers.',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Integrity',
      description: 'Transparent pricing, honest advice, and ethical business practices.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for perfection in every vehicle and every interaction.',
      gradient: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-3 mb-6">
            <span className="text-amber-400 font-semibold">Our Story</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              About Balach Motors
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="glass-container backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                15 Years of Automotive Excellence
              </h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in 2009, Balach Motors has grown from a small family dealership to one of the region's most trusted automotive destinations. Our journey began with a simple mission: to provide exceptional vehicles backed by unparalleled customer service.
                </p>
                <p>
                  Today, we're proud to offer an extensive selection of premium vehicles, from luxury sedans to high-performance sports cars and reliable family SUVs. Every vehicle in our inventory undergoes rigorous inspection to ensure it meets our exacting standards.
                </p>
                <p>
                  What sets us apart is our commitment to building lasting relationships. We don't just sell cars – we become your automotive partner for life, providing ongoing support, maintenance, and expertise whenever you need it.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group stat-card-3d"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="glass-container backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 shadow-2xl text-center relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center text-white mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      {stat.icon}
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 mx-auto`}></div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-white mb-2 group-hover:text-amber-100 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-xl transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group value-card-3d"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="glass-container backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 shadow-2xl text-center relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-white mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      {value.icon}
                    </div>
                    <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 mx-auto`}></div>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-100 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <div className="glass-container backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Meet Our Expert Team
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Our experienced professionals are passionate about automobiles and dedicated to helping you find the perfect vehicle. From sales consultants to certified technicians, every team member is committed to delivering exceptional service and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="premium-button bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-8 py-4 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
                Meet the Team
              </button>
              <button className="glass-button backdrop-blur-xl bg-white/5 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-500 transform hover:scale-105 shadow-xl">
                Visit Our Showroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;