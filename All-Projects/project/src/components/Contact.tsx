import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  Calendar,
  User,
  MessageCircle
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Our Showroom',
      details: ['123 Automotive Blvd', 'Premium District', 'City, ST 12345'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'Toll-free: 1-800-BALACH'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@balachmotors.com', 'sales@balachmotors.com', 'service@balachmotors.com'],
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon-Fri: 9AM - 8PM', 'Saturday: 9AM - 7PM', 'Sunday: 11AM - 6PM'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-3 mb-6">
            <span className="text-amber-400 font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to find your perfect vehicle? Our team is here to help. Reach out to us today for personalized service and expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group contact-card-3d"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="glass-container backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-700 transform hover:scale-105 hover:-translate-y-1 shadow-2xl relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="relative">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div className={`absolute inset-0 w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-100 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-xl transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="space-y-4 pt-6">
              <button className="w-full premium-button bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold py-3 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 group">
                <span className="flex items-center justify-center">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Test Drive
                </span>
              </button>
              <button className="w-full glass-button backdrop-blur-xl bg-white/5 border border-white/20 text-white font-semibold py-3 rounded-full hover:bg-white/10 transition-all duration-500 transform hover:scale-105 shadow-xl group">
                <span className="flex items-center justify-center">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Live Chat Support
                </span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-container backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <MessageSquare className="w-8 h-8 text-amber-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Send us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className={`floating-label-container ${focusedField === 'name' || formData.name ? 'active' : ''}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="floating-input w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-transparent focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="name" className="floating-label absolute left-4 top-4 text-gray-400 transition-all duration-300 pointer-events-none">
                        <User className="w-4 h-4 mr-2 inline" />
                        Your Name
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <div className={`floating-label-container ${focusedField === 'email' || formData.email ? 'active' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="floating-input w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-transparent focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email" className="floating-label absolute left-4 top-4 text-gray-400 transition-all duration-300 pointer-events-none">
                        <Mail className="w-4 h-4 mr-2 inline" />
                        Your Email
                      </label>
                    </div>
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className={`floating-label-container ${focusedField === 'phone' || formData.phone ? 'active' : ''}`}>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="floating-input w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-transparent focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your Phone"
                      />
                      <label htmlFor="phone" className="floating-label absolute left-4 top-4 text-gray-400 transition-all duration-300 pointer-events-none">
                        <Phone className="w-4 h-4 mr-2 inline" />
                        Your Phone
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm appearance-none"
                      required
                    >
                      <option value="" className="bg-gray-800">Select Subject</option>
                      <option value="sales" className="bg-gray-800">Sales Inquiry</option>
                      <option value="service" className="bg-gray-800">Service Appointment</option>
                      <option value="financing" className="bg-gray-800">Financing Options</option>
                      <option value="trade-in" className="bg-gray-800">Trade-In Valuation</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <div className={`floating-label-container ${focusedField === 'message' || formData.message ? 'active' : ''}`}>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="floating-input w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-transparent focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <label htmlFor="message" className="floating-label absolute left-4 top-4 text-gray-400 transition-all duration-300 pointer-events-none">
                      <MessageSquare className="w-4 h-4 mr-2 inline" />
                      Your Message
                    </label>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-gray-400 mb-2">Preferred Contact Method:</p>
                    <div className="flex space-x-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-2 transition-all duration-300 ${formData.preferredContact === 'email' ? 'border-amber-400 bg-amber-400' : 'border-gray-400'}`}>
                          {formData.preferredContact === 'email' && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                        <span className="text-white">Email</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-2 transition-all duration-300 ${formData.preferredContact === 'phone' ? 'border-amber-400 bg-amber-400' : 'border-gray-400'}`}>
                          {formData.preferredContact === 'phone' && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                        <span className="text-white">Phone</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="premium-button group bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-8 py-4 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
                  >
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;