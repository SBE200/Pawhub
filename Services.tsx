
import React, { useState } from 'react';
import { MOCK_SERVICES } from '../constants';
import { ServiceType, Service } from '../types';
import { Search, MapPin, Star, Truck, Heart, Scissors, Stethoscope, Users } from 'lucide-react';
import BookingModal from '../components/BookingModal';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceType | 'All'>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = [
    { type: 'All', label: 'All Services', icon: <Star size={16} /> },
    { type: ServiceType.GROOMING, label: 'Grooming', icon: <Scissors size={16} /> },
    { type: ServiceType.FOOD, label: 'Food Delivery', icon: <Truck size={16} /> },
    { type: ServiceType.VET, label: 'Vet Care', icon: <Stethoscope size={16} /> },
    { type: ServiceType.MATING, label: 'Mating', icon: <Users size={16} /> },
    { type: ServiceType.ADOPTION, label: 'Adoption', icon: <Heart size={16} /> },
  ];

  const filteredServices = activeTab === 'All' 
    ? MOCK_SERVICES 
    : MOCK_SERVICES.filter(s => s.type === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Pet Services Marketplace</h1>
        <p className="text-gray-500 mt-2 text-lg">
            Everything your pet needs, from food delivery to grooming and healthcare.
        </p>
      </div>

      {/* Categories / Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActiveTab(cat.type as any)}
            className={`px-5 py-3 rounded-full text-sm font-medium transition flex items-center gap-2 ${
              activeTab === cat.type
                ? 'bg-primary text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Service List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
            <div className="relative h-48">
              <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-800 shadow-sm flex items-center gap-1">
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                {service.rating}
              </div>
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                {service.type}
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                <MapPin size={14} /> {service.location} • {service.vendorName}
              </p>
              
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-primary font-bold">{service.priceRange}</span>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition shadow-md hover:shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-xl border-dashed border-2 border-gray-200">
            <p className="text-gray-500">No services found in this category yet.</p>
        </div>
      )}

      {selectedService && (
        <BookingModal 
          service={selectedService} 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

export default Services;
