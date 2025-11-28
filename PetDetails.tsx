
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PETS } from '../constants';
import VerificationBadge from '../components/VerificationBadge';
import { MapPin, ShieldCheck, Calendar, Activity, Syringe, MessageCircle, Share2, Heart } from 'lucide-react';

const PetDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pet = MOCK_PETS.find(p => p.id === id);

  if (!pet) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h2 className="text-2xl font-bold text-gray-900">Pet Not Found</h2>
            <Link to="/marketplace" className="text-primary mt-4 hover:underline">Back to Marketplace</Link>
        </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Hero Image */}
      <div className="relative h-80 md:h-[500px] w-full bg-gray-200">
        <img src={pet.imageUrl} alt={pet.name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 flex gap-2">
            <button className="bg-white/90 p-2 rounded-full shadow-md hover:bg-white text-gray-700">
                <Share2 size={20} />
            </button>
            <button className="bg-white/90 p-2 rounded-full shadow-md hover:bg-white text-red-500">
                <Heart size={20} />
            </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8">
            
            {/* Left Content */}
            <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{pet.category}</span>
                            <VerificationBadge tier={pet.sellerTier} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{pet.name} - {pet.breed}</h1>
                    </div>
                    <div className="text-right">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Rs. {pet.price.toLocaleString()}</h2>
                        <p className="text-sm text-gray-500">Fixed Price</p>
                    </div>
                </div>

                <div className="flex items-center text-gray-600 mb-6 border-b border-gray-100 pb-6">
                    <MapPin size={18} className="mr-2" />
                    {pet.location}
                    <span className="mx-4 text-gray-300">|</span>
                    <Calendar size={18} className="mr-2" />
                    Age: {pet.age}
                </div>

                <div className="prose max-w-none text-gray-600 mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Description</h3>
                    <p>{pet.description}</p>
                    <p className="mt-2">This pet is healthy, active, and looking for a loving home. Please contact for more details or a video call session.</p>
                </div>

                {/* Health Check */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Activity className="text-primary" /> Health & Documents
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className={`flex items-center gap-2 ${pet.vaccinated ? 'text-green-700' : 'text-gray-400'}`}>
                            <Syringe size={18} />
                            <span className="font-medium">{pet.vaccinated ? 'Fully Vaccinated' : 'Vaccination Pending'}</span>
                        </div>
                         <div className={`flex items-center gap-2 ${pet.pedigree ? 'text-green-700' : 'text-gray-400'}`}>
                            <ShieldCheck size={18} />
                            <span className="font-medium">{pet.pedigree ? 'Pedigree Certified' : 'No Pedigree'}</span>
                        </div>
                         <div className="flex items-center gap-2 text-gray-700">
                            <ShieldCheck size={18} />
                            <span className="font-medium">Microchip: {pet.microchipId || 'None'}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar (Seller Info) */}
            <div className="w-full md:w-80">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Seller Information</h3>
                    
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
                            {pet.sellerName.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">{pet.sellerName}</h4>
                            <div className="text-xs text-gray-500">Member since 2023</div>
                        </div>
                    </div>

                    <VerificationBadge tier={pet.sellerTier} />

                    <div className="mt-6 space-y-3">
                        <Link to="/chat" className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-teal-800 transition shadow-md">
                            <MessageCircle size={18} /> Chat with Seller
                        </Link>
                        <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition">
                            Show Phone Number
                        </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-400">
                            Safety Tip: Always meet at a safe public location and verify the pet before payment.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default PetDetails;
