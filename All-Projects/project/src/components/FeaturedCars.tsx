import React, { useState } from 'react';
import { Star, Heart, Eye, ArrowRight } from 'lucide-react';

interface Car {
  id: number;
  name: string;
  brand: string;
  price: string;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  image: string;
  rating: number;
  features: string[];
}

const FeaturedCars = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCar, setHoveredCar] = useState<number | null>(null);

  const cars: Car[] = [
    {
      id: 1,
      name: 'Model S',
      brand: 'Tesla',
      price: '$89,990',
      year: 2023,
      mileage: '15K',
      fuel: 'Electric',
      transmission: 'Auto',
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      features: ['Autopilot', 'Premium Interior', 'Supercharging']
    },
    {
      id: 2,
      name: 'AMG GT',
      brand: 'Mercedes-Benz',
      price: '$134,500',
      year: 2023,
      mileage: '8K',
      fuel: 'Gasoline',
      transmission: 'Auto',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      features: ['AMG Performance', 'Premium Sound', 'Sport Package']
    },
    {
      id: 3,
      name: 'M4 Competition',
      brand: 'BMW',
      price: '$74,900',
      year: 2022,
      mileage: '12K',
      fuel: 'Gasoline',
      transmission: 'Manual',
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      features: ['M Performance', 'Carbon Fiber', 'Track Package']
    },
    {
      id: 4,
      name: 'Panamera',
      brand: 'Porsche',
      price: '$92,800',
      year: 2023,
      mileage: '5K',
      fuel: 'Hybrid',
      transmission: 'Auto',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      features: ['Sport Chrono', 'Air Suspension', 'Premium Plus']
    },
    {
      id: 5,
      name: 'Range Rover',
      brand: 'Land Rover',
      price: '$104,500',
      year: 2023,
      mileage: '3K',
      fuel: 'Gasoline',
      transmission: 'Auto',
      image: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      features: ['Off-Road', 'Luxury Interior', 'Air Suspension']
    },
    {
      id: 6,
      name: 'Continental GT',
      brand: 'Bentley',
      price: '$231,800',
      year: 2023,
      mileage: '2K',
      fuel: 'Gasoline',
      transmission: 'Auto',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5.0,
      features: ['Handcrafted', 'W12 Engine', 'Luxury Package']
    }
  ];

  const filters = [
    { id: 'all', name: 'All Vehicles' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'sports', name: 'Sports' },
    { id: 'electric', name: 'Electric' },
    { id: 'suv', name: 'SUV' }
  ];

  return (
    <section id="inventory" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-3 mb-6">
            <span className="text-amber-400 font-semibold">Premium Collection</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Featured Vehicles
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our handpicked selection of premium vehicles, each offering exceptional performance, luxury, and value.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold shadow-lg shadow-amber-500/25'
                  : 'glass-button backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="group car-card-3d"
              onMouseEnter={() => setHoveredCar(car.id)}
              onMouseLeave={() => setHoveredCar(null)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass-container backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-amber-500/20">
                {/* Car Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.name}`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Action Buttons */}
                  <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500 ${
                    hoveredCar === car.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-4 py-2 rounded-full shadow-lg">
                      {car.price}
                    </div>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{car.brand} {car.name}</h3>
                      <p className="text-amber-400 font-semibold">{car.year}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-400 mr-1" />
                      <span className="text-amber-400 font-semibold">{car.rating}</span>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <p className="text-gray-400">Mileage</p>
                      <p className="text-white font-semibold">{car.mileage}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400">Fuel</p>
                      <p className="text-white font-semibold">{car.fuel}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400">Trans</p>
                      <p className="text-white font-semibold">{car.transmission}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full premium-button bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold py-3 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 group">
                    <span className="flex items-center justify-center">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="glass-button group backdrop-blur-xl bg-white/5 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-500 transform hover:scale-105 shadow-xl">
            <span className="flex items-center">
              View All Vehicles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;