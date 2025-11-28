
import React from 'react';
import { MOCK_USER_MEMBERSHIP } from '../constants';
import { Trophy, Gift, ShoppingBag, Truck, CreditCard } from 'lucide-react';

const Membership: React.FC = () => {
  const user = MOCK_USER_MEMBERSHIP;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Card & Stats */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Membership</h1>
          <p className="text-gray-500 mb-8">Earn points on every service booking and food delivery.</p>

          {/* Membership Card */}
          <div className="relative w-full max-w-md aspect-[1.586/1] rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white p-6 flex flex-col justify-between border border-white/10">
            <div className="absolute top-0 right-0 p-3 opacity-10">
                <Trophy size={140} />
            </div>
            
            <div className="flex justify-between items-start z-10">
                <div>
                    <h2 className="text-2xl font-bold tracking-wider">PawHub</h2>
                    <span className="text-xs tracking-[0.2em] uppercase opacity-70">Club Member</span>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-sm font-bold shadow-lg">
                    {user.tier} Tier
                </div>
            </div>

            <div className="z-10">
                <div className="flex gap-4 items-end mb-2">
                    <span className="text-5xl font-bold">{user.points.toLocaleString()}</span>
                    <span className="mb-2 text-indigo-200 text-sm font-medium">Points Balance</span>
                </div>
            </div>

            <div className="flex justify-between items-end z-10 text-sm opacity-90">
                <div className="flex flex-col">
                    <span className="text-xs uppercase text-indigo-300 mb-0.5">Member Since</span>
                    <span className="font-medium tracking-wide">{user.joinedDate}</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-xs uppercase text-indigo-300 mb-0.5">Member ID</span>
                    <span className="font-mono tracking-widest">PH-8821-9920</span>
                </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <ShoppingBag className="mx-auto text-purple-600 mb-2" />
                <div className="text-sm font-bold text-gray-800">5 pts</div>
                <div className="text-xs text-gray-500">per 100 PKR</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Truck className="mx-auto text-purple-600 mb-2" />
                <div className="text-sm font-bold text-gray-800">50 pts</div>
                <div className="text-xs text-gray-500">per Delivery</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Gift className="mx-auto text-purple-600 mb-2" />
                <div className="text-sm font-bold text-gray-800">Redeem</div>
                <div className="text-xs text-gray-500">Discounts</div>
            </div>
          </div>
        </div>

        {/* Right Side: Rewards Info */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">How it works</h3>
            
            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <CreditCard size={20} className="text-purple-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Book & Shop</h4>
                        <p className="text-sm text-gray-600 mt-1">
                            Use PawHub services for grooming, vet visits, or buy food. Every Rupee spent counts.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Trophy size={20} className="text-purple-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Level Up</h4>
                        <p className="text-sm text-gray-600 mt-1">
                            Reach 5,000 points to unlock <strong>Platinum Tier</strong> for free delivery and 10% off vet fees.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Gift size={20} className="text-purple-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Redeem Rewards</h4>
                        <p className="text-sm text-gray-600 mt-1">
                            Use points to pay for food, toys, or services directly in the app.
                        </p>
                    </div>
                </div>
            </div>

            <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-purple-700 transition">
                Browse Services to Earn Points
            </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
