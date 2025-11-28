
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, ArrowRight, Dog, Cat, Bird, Heart, 
  Store, Star, TrendingUp, CheckCircle, Activity 
} from 'lucide-react';
import { MOCK_PETS } from '../constants';
import VerificationBadge from '../components/VerificationBadge';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. ULTRA-MODERN HERO SECTION */}
      <section className="relative bg-[#0D1F23] rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[550px] flex items-center relative isolate">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-16 py-12">
            {/* Left: Copy */}
            <div className="space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide animate-fade-in-up">
                    <ShieldCheck size={14} className="animate-pulse" /> #1 Verified Pet Ecosystem
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                    Find a Friend, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Not a Scam.</span>
                </h1>
                
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                    Pakistan's first platform with <strong>3-Tier Verification</strong>. From AI price estimation to Digital IDs, we make pet parenting safe and smart.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Link to="/marketplace" className="px-8 py-4 bg-teal-500 text-white rounded-2xl font-bold shadow-lg shadow-teal-500/30 hover:bg-teal-400 hover:shadow-teal-500/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                        Explore Marketplace <ArrowRight size={20} />
                    </Link>
                    <Link to="/digital-id" className="px-8 py-4 bg-white/10 text-white border border-white/10 backdrop-blur-sm rounded-2xl font-bold hover:bg-white/20 transition flex items-center justify-center gap-2">
                        Get Digital ID
                    </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-500">
                    <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0D1F23] bg-gray-700 overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                            </div>
                        ))}
                    </div>
                    <div>
                        <span className="text-white font-bold">12,000+</span> Happy Parents
                    </div>
                </div>
            </div>

            {/* Right: Dynamic Visuals */}
            <div className="relative hidden lg:block h-full min-h-[500px]">
                {/* Main Hero Image */}
                <img 
                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255db?auto=format&fit=crop&q=80&w=1000" 
                    alt="Happy Dog" 
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] rounded-[3rem] shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-all duration-700"
                />

                {/* Floating Card: Verification */}
                <div className="absolute top-20 left-0 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase">Status</p>
                            <p className="text-gray-900 font-bold">Gold Verified</p>
                        </div>
                    </div>
                </div>

                {/* Floating Card: Price */}
                <div className="absolute bottom-20 right-10 bg-gray-900/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-gray-800 text-white animate-bounce-slow delay-700">
                    <div className="flex items-center gap-3">
                        <div className="bg-teal-500/20 p-2 rounded-full text-teal-400">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase">Fair Price</p>
                            <p className="text-white font-bold">Rs. 45,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. LIVE ACTIVITY TICKER (FOMO) */}
      <section className="bg-teal-50 border-y border-teal-100 py-3 overflow-hidden">
        <div className="flex gap-12 animate-scroll whitespace-nowrap">
            {[1,2,3,4,5].map(i => (
                <div key={i} className="flex items-center gap-2 text-sm text-teal-800 font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-bold">Just Adopted:</span> Persian Cat in Karachi
                    <span className="text-gray-400">|</span>
                    <span className="font-bold">New Listing:</span> Husky in Islamabad
                </div>
            ))}
             {[1,2,3,4,5].map(i => (
                <div key={`d-${i}`} className="flex items-center gap-2 text-sm text-teal-800 font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-bold">Just Adopted:</span> Labrador in Lahore
                    <span className="text-gray-400">|</span>
                    <span className="font-bold">Verified Seller:</span> Ali Pets Joined
                </div>
            ))}
        </div>
      </section>

      {/* 3. CATEGORIES RELOADED */}
      <section className="px-4">
        <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Explore by Category</h2>
            <Link to="/marketplace" className="text-teal-600 font-bold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard 
                label="Dogs" 
                count="1.2k+ Listings" 
                img="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400" 
                color="from-orange-400 to-red-500" 
            />
            <CategoryCard 
                label="Cats" 
                count="850+ Listings" 
                img="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400" 
                color="from-blue-400 to-indigo-500" 
            />
            <CategoryCard 
                label="Birds" 
                count="300+ Listings" 
                img="https://images.unsplash.com/photo-1552728089-57bdde30ebd1?auto=format&fit=crop&q=80&w=400" 
                color="from-green-400 to-teal-500" 
            />
            <CategoryCard 
                label="Adoption" 
                count="Save a Life" 
                img="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=400" 
                color="from-pink-400 to-rose-500" 
                isAdoption
            />
        </div>
      </section>

      {/* 4. FEATURED PETS (CARDS) */}
      <section className="px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Trending Verified Pets</h2>
                <p className="text-gray-500 mt-2">Hand-picked, medically checked, and ready for loving homes.</p>
            </div>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-bold">Dogs</button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-bold">Cats</button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-bold">Recent</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_PETS.map(pet => (
                <Link key={pet.id} to={`/pet/${pet.id}`} className="group relative bg-white rounded-3xl p-3 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                        <img src={pet.imageUrl} alt={pet.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        
                        <div className="absolute top-3 left-3">
                             <VerificationBadge tier={pet.sellerTier} showLabel={false} />
                        </div>
                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white hover:bg-white hover:text-red-500 transition">
                            <Heart size={16} />
                        </div>

                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-bold leading-tight">{pet.name}</h3>
                            <p className="text-sm opacity-90">{pet.breed}</p>
                        </div>
                    </div>
                    
                    <div className="pt-3 px-2 flex justify-between items-center">
                        <div>
                             <p className="text-xs text-gray-400 font-medium">Price</p>
                             <p className="text-lg font-bold text-primary">Rs. {pet.price.toLocaleString()}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition">
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </section>

      {/* 5. VALUE PROPOSITION (Why PawHub) */}
      <section className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Why Pakistan Trusts PawHub</h2>
            <p className="text-gray-400 text-lg">We fixed the broken pet market. No more scams, no more sick puppies, no more uncertainty.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <FeatureCard 
                icon={<ShieldCheck size={32} className="text-teal-400" />}
                title="100% Verified Sellers"
                desc="Every breeder passes a strict 3-step verification process including CNIC and Video checks."
            />
            <FeatureCard 
                icon={<Activity size={32} className="text-purple-400" />}
                title="Health Guarantee"
                desc="Listings include vaccination records and vet checks. Sick pets are instantly removed."
            />
            <FeatureCard 
                icon={<TrendingUp size={32} className="text-orange-400" />}
                title="AI Fair Pricing"
                desc="Don't get ripped off. Our AI analyzes market data to tell you the fair price instantly."
            />
        </div>
      </section>

      {/* 6. SERVICES CAROUSEL */}
      <section className="px-4">
         <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-orange-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
                <span className="text-orange-600 font-bold tracking-widest uppercase text-xs">More than just a marketplace</span>
                <h2 className="text-4xl font-extrabold text-gray-900">Expert Care for Your Best Friend.</h2>
                <p className="text-gray-600 text-lg">Book vet visits, grooming sessions, or order food—all within the app. Earn PawPoints on every booking.</p>
                
                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-gray-700 flex items-center gap-2">
                        <Store size={18} className="text-orange-500" /> Grooming
                    </span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-gray-700 flex items-center gap-2">
                        <Activity size={18} className="text-blue-500" /> Vet Visits
                    </span>
                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-gray-700 flex items-center gap-2">
                        <Dog size={18} className="text-green-500" /> Training
                    </span>
                </div>

                <Link to="/services" className="inline-block px-8 py-3 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition">
                    Book a Service
                </Link>
            </div>
            <div className="flex-1 relative">
                <div className="absolute inset-0 bg-orange-200 rounded-full blur-3xl opacity-30 transform translate-y-4"></div>
                <img 
                    src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800" 
                    alt="Grooming" 
                    className="relative rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500" 
                />
            </div>
         </div>
      </section>

      {/* 7. SOCIAL PROOF / TESTIMONIALS */}
      <section className="px-4 py-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">Loved by Pet Parents Across Pakistan 🇵🇰</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
                name="Sarah Khan"
                role="Adopted a Persian"
                text="I was so scared of online scams. PawHub's verification badge gave me confidence. Luna is healthy and perfect!"
                rating={5}
            />
            <TestimonialCard 
                name="Bilal Ahmed"
                role="Breeder (Gold Tier)"
                text="As a verified breeder, I get serious buyers here. The platform filters out time-wasters. Highly recommended."
                rating={5}
            />
            <TestimonialCard 
                name="Dr. Hamza"
                role="Veterinarian"
                text="The Digital ID system is a game changer. I can update vaccination records directly. Great for pet health tracking."
                rating={5}
            />
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden mx-4 shadow-xl shadow-teal-900/20">
         <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to join the ecosystem?</h2>
            <p className="text-teal-100 text-lg">Whether you're looking for a new family member or offering services, PawHub is your trusted partner.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/marketplace" className="px-8 py-3 bg-white text-teal-900 font-bold rounded-xl hover:bg-teal-50 transition">
                    Browse Pets
                </Link>
                <Link to="/become-seller" className="px-8 py-3 bg-teal-800 text-white font-bold rounded-xl hover:bg-teal-900 transition border border-teal-700">
                    Become a Partner
                </Link>
            </div>
         </div>
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      </section>

    </div>
  );
};

// --- Subcomponents for Cleaner Code ---

const CategoryCard = ({ label, count, img, color, isAdoption }: any) => (
    <Link to="/marketplace" className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0">
            <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-t ${isAdoption ? 'from-rose-900/90' : 'from-black/80'} via-transparent to-transparent`}></div>
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-3 shadow-lg group-hover:-translate-y-2 transition duration-300`}>
                <ArrowRight size={20} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold">{label}</h3>
            <p className="text-sm opacity-80 font-medium">{count}</p>
        </div>
    </Link>
);

const FeatureCard = ({ icon, title, desc }: any) => (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition duration-300 text-left">
        <div className="bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
);

const TestimonialCard = ({ name, role, text, rating }: any) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
        <div className="flex gap-1 text-yellow-400 mb-4">
            {[...Array(rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-gray-600 italic mb-6">"{text}"</p>
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                {name.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
                <p className="text-xs text-gray-400">{role}</p>
            </div>
        </div>
    </div>
);

export default Home;
