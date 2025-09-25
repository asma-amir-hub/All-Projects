import React from 'react';
import { 
  Wrench, 
  Shield, 
  CreditCard, 
  Truck, 
  Users, 
  FileCheck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: <Wrench className="w-8 h-8" />,
      title: 'Expert Maintenance',
      description: 'Professional automotive maintenance and repair services by certified technicians.',
      features: ['Oil Changes', 'Brake Service', 'Engine Diagnostics', 'Preventive Care'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8" />,
      title: 'Extended Warranties',
      description: 'Comprehensive warranty coverage to protect your investment and peace of mind.',
      features: ['Powertrain Coverage', '24/7 Roadside', 'Nationwide Service', 'Transferable'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Flexible Financing',
      description: 'Competitive financing options and lease programs tailored to your needs.',
      features: ['Low APR Rates', 'Flexible Terms', 'Trade-In Value', 'Quick Approval'],
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 4,
      icon: <Truck className="w-8 h-8" />,
      title: 'Vehicle Delivery',
      description: 'Convenient home delivery service for your newly purchased vehicle.',
      features: ['Free Delivery', 'Contactless Options', 'Flexible Scheduling', 'Setup Service'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: 'Personal Consultation',
      description: 'One-on-one consultation to help you find the perfect vehicle for your lifestyle.',
      features: ['Expert Guidance', 'Custom Solutions', 'Needs Assessment', 'Follow-up Support'],
      gradient: 'from-red-500 to-rose-500'
    },
    {
      id: 6,
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Documentation',
      description: 'Complete handling of all paperwork, registration, and legal documentation.',
      features: ['Title Transfer', 'Registration', 'Insurance Setup', 'DMV Services'],
      gradient: 'from-indigo-500 to-violet-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-3 mb-6">
            <span className="text-amber-400 font-semibold">Complete Solutions</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From purchase to maintenance, we provide comprehensive automotive services to ensure your complete satisfaction and peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group service-card-3d"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-container backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-lg relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    {service.icon}
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <button className={`w-full premium-button bg-gradient-to-r ${service.gradient} text-white font-semibold py-3 rounded-full hover:shadow-lg transition-all duration-500 transform hover:scale-105 group opacity-80 hover:opacity-100`}>
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass-container backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Something Specific?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Can't find the service you're looking for? Our team is here to help with custom solutions tailored to your needs.
            </p>
            <button className="premium-button bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-8 py-4 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;