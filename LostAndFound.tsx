
import React, { useState } from 'react';
import { MOCK_LOST_PETS } from '../constants';
import { AlertTriangle, MapPin, Calendar, Phone, CheckCircle, Search, Plus } from 'lucide-react';

const LostAndFound: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Lost' | 'Found'>('All');

  const displayedPets = filter === 'All' 
    ? MOCK_LOST_PETS 
    : MOCK_LOST_PETS.filter(p => p.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with CTA */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
            <h1 className="text-3xl font-bold text-red-700 flex items-center gap-2">
                <AlertTriangle className="fill-red-700 text-white" /> Lost & Found
            </h1>
            <p className="text-red-900/70 mt-2 max-w-xl">
                Help reunite lost pets with their families. Report a lost pet immediately or browse found pets in your area.
            </p>
        </div>
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition flex items-center gap-2">
            <Plus size={20} /> Report Lost Pet
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-8">
        <button 
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${filter === 'All' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200'}`}
        >
            All Alerts
        </button>
        <button 
            onClick={() => setFilter('Lost')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${filter === 'Lost' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-white text-gray-600 border-gray-200'}`}
        >
            Lost Pets
        </button>
        <button 
            onClick={() => setFilter('Found')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${filter === 'Found' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-white text-gray-600 border-gray-200'}`}
        >
            Found Pets
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                <div className="relative h-64">
                    <img src={pet.imageUrl} alt={pet.breed} className="w-full h-full object-cover" />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm ${pet.type === 'Lost' ? 'bg-red-600 text-white' : 'bg-green-500 text-white'}`}>
                        {pet.type === 'Lost' ? <AlertTriangle size={12} /> : <CheckCircle size={12} />}
                        {pet.type}
                    </div>
                    {pet.reward && (
                        <div className="absolute bottom-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                            Reward: PKR {pet.reward.toLocaleString()}
                        </div>
                    )}
                </div>
                
                <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{pet.petName ? pet.petName : 'Unknown Pet'}</h3>
                    <p className="text-gray-500 text-sm mb-4">{pet.breed}</p>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-6">
                        <div className="flex items-start gap-3">
                            <MapPin size={16} className="mt-0.5 text-gray-400 shrink-0" />
                            <span>{pet.location}</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Calendar size={16} className="mt-0.5 text-gray-400 shrink-0" />
                            <span>{pet.date}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg text-xs italic text-gray-500 border border-gray-100">
                            "{pet.description}"
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                        <span className="text-xs font-medium text-gray-500">Posted by {pet.contactName}</span>
                        <button className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition ${pet.type === 'Lost' ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-green-50 text-green-600 hover:bg-green-100'}`}>
                            <Phone size={16} /> Contact
                        </button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default LostAndFound;
