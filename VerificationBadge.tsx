import React from 'react';
import { VerificationTier } from '../types';
import { CheckCircle, ShieldCheck, Award } from 'lucide-react';

interface Props {
  tier: VerificationTier;
  showLabel?: boolean;
}

const VerificationBadge: React.FC<Props> = ({ tier, showLabel = true }) => {
  switch (tier) {
    case VerificationTier.GOLD:
      return (
        <div className="flex items-center gap-1 text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full text-xs font-semibold border border-yellow-200" title="Gold Verified: Vet + Microchip + Pedigree">
          <Award size={14} className="fill-yellow-600" />
          {showLabel && <span>Gold Verified</span>}
        </div>
      );
    case VerificationTier.BLUE:
      return (
        <div className="flex items-center gap-1 text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full text-xs font-semibold border border-blue-200" title="Blue Verified: Video Proof">
          <ShieldCheck size={14} className="fill-blue-600" />
          {showLabel && <span>Blue Verified</span>}
        </div>
      );
    case VerificationTier.GREEN:
      return (
        <div className="flex items-center gap-1 text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full text-xs font-semibold border border-emerald-200" title="Green Verified: ID + Phone">
          <CheckCircle size={14} />
          {showLabel && <span>Verified</span>}
        </div>
      );
    default:
      return null;
  }
};

export default VerificationBadge;
