
import React, { useState } from 'react';
import { MOCK_PETS } from '../constants';
import { QrCode, Share2, Download, CheckCircle, ShieldCheck, Award } from 'lucide-react';
import { VerificationTier } from '../types';

const DigitalID: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState(MOCK_PETS[0]);
  // Demo state to toggle card appearance
  const [demoTier, setDemoTier] = useState<VerificationTier>(VerificationTier.GOLD);

  const getTierStyles = (tier: VerificationTier) => {
    switch(tier) {
        case VerificationTier.GOLD:
            return {
                bg: 'bg-gradient-to-br from-yellow-900 via-yellow-800 to-amber-900',
                border: 'border-yellow-600',
                badgeBg: 'bg-yellow-500',
                badgeText: 'text-yellow-950',
                glow: 'shadow-yellow-900/50',
                icon: <Award className="w-5 h-5" />,
                name: 'Gold Tier'
            };
        case VerificationTier.BLUE:
            return {
                bg: 'bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900',
                border: 'border-blue-500',
                badgeBg: 'bg-blue-500',
                badgeText: 'text-white',
                glow: 'shadow-blue-900/50',
                icon: <ShieldCheck className="w-5 h-5" />,
                name: 'Blue Tier'
            };
        case VerificationTier.GREEN:
        default:
            return {
                bg: 'bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800',
                border: 'border-emerald-500',
                badgeBg: 'bg-emerald-500',
                badgeText: 'text-white',
                glow: 'shadow-emerald-900/50',
                icon: <CheckCircle className="w-5 h-5" />,
                name: 'Green Tier'
            };
    }
  };

  const style = getTierStyles(demoTier);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Official Digital Pet ID</h1>
          <p className="text-lg text-gray-600 mb-8">
            A verifiable identity for your pet. Choose your verification tier to unlock trusted status and premium benefits.
          </p>
          
          <div className="space-y-4 mb-8">
            <h3 className="font-bold text-gray-900">Verification Tiers</h3>
            
            <button 
                onClick={() => setDemoTier(VerificationTier.GREEN)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${demoTier === VerificationTier.GREEN ? 'border-emerald-500 bg-emerald-50' : 'border-gray-100 hover:border-emerald-200'}`}
            >
                <div className="flex items-center gap-3 mb-1">
                    <CheckCircle className={`w-5 h-5 ${demoTier === VerificationTier.GREEN ? 'text-emerald-600' : 'text-gray-400'}`} />
                    <span className="font-bold text-gray-900">Green Tier (Basic)</span>
                </div>
                <p className="text-sm text-gray-600 ml-8">Requires CNIC + Phone verification.</p>
            </button>

            <button 
                onClick={() => setDemoTier(VerificationTier.BLUE)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${demoTier === VerificationTier.BLUE ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:border-blue-200'}`}
            >
                <div className="flex items-center gap-3 mb-1">
                    <ShieldCheck className={`w-5 h-5 ${demoTier === VerificationTier.BLUE ? 'text-blue-600' : 'text-gray-400'}`} />
                    <span className="font-bold text-gray-900">Blue Tier (Medium)</span>
                </div>
                <p className="text-sm text-gray-600 ml-8">Requires Video Proof of ownership.</p>
            </button>

            <button 
                onClick={() => setDemoTier(VerificationTier.GOLD)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${demoTier === VerificationTier.GOLD ? 'border-yellow-500 bg-yellow-50' : 'border-gray-100 hover:border-yellow-200'}`}
            >
                <div className="flex items-center gap-3 mb-1">
                    <Award className={`w-5 h-5 ${demoTier === VerificationTier.GOLD ? 'text-yellow-600' : 'text-gray-400'}`} />
                    <span className="font-bold text-gray-900">Gold Tier (Premium)</span>
                </div>
                <p className="text-sm text-gray-600 ml-8">Requires Vet Check, Microchip & Pedigree.</p>
            </button>
          </div>

          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-teal-800 transition w-full md:w-auto">
            Get Verified ID (PKR 1,000)
          </button>
        </div>

        {/* The ID Card Visual */}
        <div className="flex flex-col items-center">
          <div className={`relative w-full max-w-sm ${style.bg} rounded-2xl shadow-2xl overflow-hidden text-white border-2 ${style.border} transition-colors duration-500`}>
            {/* Header */}
            <div className="bg-black/20 backdrop-blur-sm px-6 py-4 flex justify-between items-center border-b border-white/10">
                <span className="font-bold tracking-wider text-sm flex items-center gap-2">
                    <span className="bg-white text-black p-0.5 rounded-sm"><QrCode size={12}/></span>
                    PAWHUB ID
                </span>
                <span className={`${style.badgeBg} ${style.badgeText} px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide flex items-center gap-1`}>
                    {style.icon} {style.name}
                </span>
            </div>

            <div className="p-6">
                <div className="flex gap-4">
                    <div className="relative">
                        <img 
                            src={selectedPet.imageUrl} 
                            alt="Pet" 
                            className="w-24 h-24 rounded-lg object-cover border-2 border-white/30"
                        />
                        {demoTier === VerificationTier.GOLD && (
                            <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 p-1 rounded-full border border-white">
                                <Award size={12} />
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{selectedPet.name}</h2>
                        <p className="text-white/80 text-sm">{selectedPet.breed}</p>
                        <div className="mt-2 flex flex-col gap-1 text-xs text-white/60">
                            <span>DOB: 01 Jan 2024</span>
                            <span>Sex: Male</span>
                            <span>Microchip: {selectedPet.microchipId || 'N/A'}</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="block text-white/50 text-xs uppercase">Owner</span>
                        <span className="font-medium">Ahmed Khan</span>
                    </div>
                    <div>
                        <span className="block text-white/50 text-xs uppercase">City</span>
                        <span className="font-medium">Lahore</span>
                    </div>
                    <div>
                        <span className="block text-white/50 text-xs uppercase">Issued</span>
                        <span className="font-medium">Oct 2025</span>
                    </div>
                    <div>
                        <span className="block text-white/50 text-xs uppercase">Valid Until</span>
                        <span className="font-medium">Oct 2026</span>
                    </div>
                </div>
            </div>

            {/* Footer / QR */}
            <div className="bg-white p-4 flex justify-between items-center text-gray-900">
                <div className="text-xs">
                    <p className="font-bold uppercase tracking-tight text-gray-500">Scan to Verify</p>
                    <p className="font-mono text-[10px] text-gray-400">ID: PH-PK-882190</p>
                </div>
                <div className="bg-gray-900 p-1.5 rounded">
                    <QrCode className="text-white" size={48} />
                </div>
            </div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary">
                <Share2 size={16} /> Share
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary">
                <Download size={16} /> Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalID;
