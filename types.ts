
export enum VerificationTier {
  NONE = 'None',
  GREEN = 'Green', // CNIC + Phone
  BLUE = 'Blue',   // Video Proof
  GOLD = 'Gold',   // Vet + Microchip + Pedigree
}

export enum UserRole {
  BUYER = 'Buyer',
  VENDOR = 'Vendor',
  ADMIN = 'Admin',
}

export enum ServiceType {
  GROOMING = 'Grooming',
  VET = 'Vet',
  TRAINING = 'Training',
  FOOD = 'Food',
  MATING = 'Mating',
  ADOPTION = 'Adoption',
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  verificationTier: VerificationTier;
  location: string;
  avatarUrl: string;
}

export interface Membership {
  userId: string;
  tier: 'Silver' | 'Gold' | 'Platinum';
  points: number;
  joinedDate: string;
}

export interface Pet {
  id: string;
  name: string;
  breed: string;
  category: 'Dog' | 'Cat' | 'Bird' | 'Other';
  age: string;
  price: number;
  location: string;
  imageUrl: string;
  description: string;
  sellerId: string;
  sellerName: string;
  sellerTier: VerificationTier;
  microchipId?: string;
  vaccinated: boolean;
  pedigree: boolean;
}

export interface LostPet {
  id: string;
  type: 'Lost' | 'Found';
  petName?: string;
  breed: string;
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  contactName: string;
  reward?: number;
}

export interface Service {
  id: string;
  title: string;
  vendorName: string;
  type: ServiceType;
  priceRange: string;
  rating: number;
  imageUrl: string;
  location: string;
}

export interface BannerAd {
  id: string;
  imageUrl: string;
  link: string;
  position: 'home_hero' | 'sidebar' | 'featured';
  sponsorName: string;
}

export interface PriceEstimateRequest {
  breed: string;
  age: string;
  location: string;
  category: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface ChatSession {
  id: string;
  partnerName: string;
  partnerAvatar: string;
  lastMessage: string;
  unreadCount: number;
  petName?: string;
}
