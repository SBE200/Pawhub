
import { Pet, Service, VerificationTier, BannerAd, ServiceType, Membership, ChatSession, Message, LostPet } from './types';

export const MOCK_USER_MEMBERSHIP: Membership = {
  userId: 'u1',
  tier: 'Gold',
  points: 2450,
  joinedDate: 'Jan 2024'
};

export const MOCK_CHATS: ChatSession[] = [
  {
    id: 'c1',
    partnerName: 'Lahore Kennels',
    partnerAvatar: 'https://ui-avatars.com/api/?name=Lahore+Kennels&background=0F766E&color=fff',
    lastMessage: 'Yes, the puppy is available. When can you visit?',
    unreadCount: 2,
    petName: 'Max (GSD)'
  },
  {
    id: 'c2',
    partnerName: 'Ali Pets',
    partnerAvatar: 'https://ui-avatars.com/api/?name=Ali+Pets&background=F59E0B&color=fff',
    lastMessage: 'The final price is 24,000.',
    unreadCount: 0,
    petName: 'Luna (Persian)'
  }
];

export const MOCK_MESSAGES: Message[] = [
  { id: 'm1', senderId: 'other', text: 'Hi! Is Max still available?', timestamp: '10:00 AM', isMe: true },
  { id: 'm2', senderId: 'me', text: 'Yes, he is available. Fully vaccinated.', timestamp: '10:05 AM', isMe: false },
  { id: 'm3', senderId: 'other', text: 'Can you share a video?', timestamp: '10:15 AM', isMe: true },
  { id: 'm4', senderId: 'me', text: 'Sure, let me upload it here.', timestamp: '10:20 AM', isMe: false },
  { id: 'm5', senderId: 'me', text: 'Yes, the puppy is available. When can you visit?', timestamp: '10:22 AM', isMe: false },
];

export const MOCK_LOST_PETS: LostPet[] = [
  {
    id: 'lp1',
    type: 'Lost',
    petName: 'Rocky',
    breed: 'Labrador',
    location: 'DHA Phase 5, Lahore',
    date: '2 Hours Ago',
    description: 'Black Labrador, wearing a red collar. Very friendly but scared.',
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800',
    contactName: 'Bilal Ahmed',
    reward: 10000
  },
  {
    id: 'lp2',
    type: 'Found',
    breed: 'Persian Cat (White)',
    location: 'F-11 Markaz, Islamabad',
    date: 'Yesterday',
    description: 'Found a white Persian cat near the park. Has a blue collar but no tag.',
    imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800',
    contactName: 'Sarah Khan'
  }
];

export const MOCK_PETS: Pet[] = [
  {
    id: '1',
    name: 'Max',
    breed: 'German Shepherd',
    category: 'Dog',
    age: '4 Months',
    price: 45000,
    location: 'Lahore, DHA',
    imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=800',
    description: 'Active and healthy German Shepherd puppy. Single coat.',
    sellerId: 'v1',
    sellerName: 'Lahore Kennels',
    sellerTier: VerificationTier.GOLD,
    microchipId: '98200910654321',
    vaccinated: true,
    pedigree: true
  },
  {
    id: '2',
    name: 'Luna',
    breed: 'Persian Cat',
    category: 'Cat',
    age: '1 Year',
    price: 25000,
    location: 'Karachi, Clifton',
    imageUrl: 'https://images.unsplash.com/photo-1610123598195-26d9d4d5d9a9?auto=format&fit=crop&q=80&w=800',
    description: 'Triple coat pure white Persian. Very friendly.',
    sellerId: 'v2',
    sellerName: 'Ali Pets',
    sellerTier: VerificationTier.BLUE,
    vaccinated: true,
    pedigree: false
  },
  {
    id: '3',
    name: 'Bella',
    breed: 'Labrador',
    category: 'Dog',
    age: '2 Months',
    price: 35000,
    location: 'Islamabad, F-10',
    imageUrl: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eca6?auto=format&fit=crop&q=80&w=800',
    description: 'Playful chocolate Labrador. First shot done.',
    sellerId: 'v3',
    sellerName: 'Safe Hands Breeders',
    sellerTier: VerificationTier.GREEN,
    vaccinated: true,
    pedigree: false
  },
  {
    id: '4',
    name: 'Coco',
    breed: 'Poodle',
    category: 'Dog',
    age: '3 Months',
    price: 65000,
    location: 'Lahore, Model Town',
    imageUrl: 'https://images.unsplash.com/photo-1605248152567-27e10df3a758?auto=format&fit=crop&q=80&w=800',
    description: 'Toy Poodle, very active and vaccinated.',
    sellerId: 'v1',
    sellerName: 'Lahore Kennels',
    sellerTier: VerificationTier.GOLD,
    vaccinated: true,
    pedigree: true
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Premium Dog Grooming',
    vendorName: 'PawSpaw Lahore',
    type: ServiceType.GROOMING,
    priceRange: 'PKR 2,000 - 5,000',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    location: 'Lahore'
  },
  {
    id: 's2',
    title: 'Royal Canin Bulk Store',
    vendorName: 'PetMart Karachi',
    type: ServiceType.FOOD,
    priceRange: 'PKR 1,500+',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1585499193151-0f50d54c4e5d?auto=format&fit=crop&q=80&w=800',
    location: 'Karachi'
  },
  {
    id: 's3',
    title: 'Stud Service: Husky',
    vendorName: 'Islamabad Stud Farm',
    type: ServiceType.MATING,
    priceRange: 'PKR 10,000',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1560525821-d5615ef80c69?auto=format&fit=crop&q=80&w=800',
    location: 'Islamabad'
  },
  {
    id: 's4',
    title: 'Stray Cat Adoption',
    vendorName: 'Save A Life Foundation',
    type: ServiceType.ADOPTION,
    priceRange: 'Free',
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&q=80&w=800',
    location: 'Lahore'
  },
  {
    id: 's5',
    title: 'Home Vet Visit',
    vendorName: 'Dr. Hamza Vet',
    type: ServiceType.VET,
    priceRange: 'PKR 3,000',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1628009368231-76033527212e?auto=format&fit=crop&q=80&w=800',
    location: 'Karachi'
  }
];

export const MOCK_ADS: BannerAd[] = [
  {
    id: 'ad1',
    imageUrl: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    position: 'home_hero',
    sponsorName: 'Royal Canin'
  },
  {
    id: 'ad2',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400',
    link: '#',
    position: 'sidebar',
    sponsorName: 'Reflex'
  }
];
