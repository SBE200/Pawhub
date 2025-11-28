
import React, { useState } from 'react';
import { ShieldCheck, TrendingUp, Users, CheckCircle, Store, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BecomeSeller: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Received!</h1>
        <p className="text-lg text-gray-600 max-w-md mb-8">
          Thanks for your interest in becoming a PawHub Partner. Our verification team will contact you within 24 hours to verify your details.
        </p>
        <Link to="/" className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide border border-teal-100">
          For Breeders, Vets & Stores
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-6 mb-6">
          Grow Your Pet Business on <span className="text-primary">PawHub</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Join Pakistan's first verified pet ecosystem. Get a trusted badge, reach thousands of buyers, and manage bookings instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Benefits */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
            <div className="bg-blue-100 p-3 rounded-xl h-fit">
              <ShieldCheck size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Get Verified & Trusted</h3>
              <p className="text-gray-500 mt-1">
                Earn the Green, Blue, or Gold badge. Buyers trust verified sellers 5x more than unverified ones.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
            <div className="bg-purple-100 p-3 rounded-xl h-fit">
              <TrendingUp size={24} className="text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Access Analytics</h3>
              <p className="text-gray-500 mt-1">
                Track your views, clicks, and revenue with our dedicated Seller Dashboard.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
            <div className="bg-orange-100 p-3 rounded-xl h-fit">
              <Users size={24} className="text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Instant Chat & Bookings</h3>
              <p className="text-gray-500 mt-1">
                Communicate directly with buyers and manage service appointments via the app.
              </p>
            </div>
          </div>
          
          <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 mt-8">
             <h4 className="font-bold text-teal-800 mb-2">Seller Success Story</h4>
             <p className="text-teal-700 italic">"Since joining PawHub, my grooming bookings have doubled. The verification badge really helps customers trust us."</p>
             <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center font-bold text-teal-800">A</div>
                <span className="text-sm font-bold text-teal-900">Ali Khan, Lahore Groomers</span>
             </div>
          </div>
        </div>

        {/* Right: Registration Form */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Store className="text-primary" /> Register as Partner
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Bilal Ahmed" required />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Business Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Royal Kennels" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="0300-..." required />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">City</label>
                    <select className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none">
                        <option>Lahore</option>
                        <option>Karachi</option>
                        <option>Islamabad</option>
                        <option>Rawalpindi</option>
                    </select>
                </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Business Type</label>
              <select className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none">
                <option>Breeder (Dogs/Cats)</option>
                <option>Pet Store (Food/Accessories)</option>
                <option>Service Provider (Grooming/Vet)</option>
                <option>Trainer</option>
              </select>
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">CNIC Number</label>
                <input type="text" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="35202-..." required />
                <p className="text-xs text-gray-500 mt-1">Required for basic Green Badge verification.</p>
            </div>

            <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-teal-800 transition flex items-center justify-center gap-2 mt-4">
              Submit Application <ArrowRight size={20} />
            </button>
            
            <p className="text-xs text-center text-gray-400 mt-4">
                By submitting, you agree to PawHub's Vendor Terms & Conditions.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeSeller;
