
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PETS } from '../constants';
import VerificationBadge from '../components/VerificationBadge';
import { Filter, MapPin } from 'lucide-react';

const Marketplace: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredPets = filter === 'All' ? MOCK_PETS : MOCK_PETS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Verified Marketplace</h1>
          <p className="text-gray-500 mt-1">Safe pets from verified breeders.</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {['All', 'Dog', 'Cat', 'Bird'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === cat 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 flex items-center gap-1">
            <Filter size={14} /> Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPets.map(pet => (
          <div key={pet.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition duration-300">
            <div className="relative h-64 bg-gray-100">
              <img src={pet.imageUrl} alt={pet.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800">
                {pet.age}
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <VerificationBadge tier={pet.sellerTier} />
                <span className="text-primary font-bold text-lg">Rs. {pet.price.toLocaleString()}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">{pet.breed}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MapPin size={14} className="mr-1" /> {pet.location}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded">
                    <span className={`w-2 h-2 rounded-full ${pet.vaccinated ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    Vaccinated
                    {pet.pedigree && (
                        <>
                        <span className="text-gray-300">|</span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        Pedigree
                        </>
                    )}
                </div>
              </div>

              <Link to={`/pet/${pet.id}`} className="block w-full mt-4 bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition text-center">
                Contact Seller
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
