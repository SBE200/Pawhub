
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, Legend 
} from 'recharts';
import { 
  Users, DollarSign, TrendingUp, AlertCircle, Award, 
  ShieldCheck, ShoppingBag, Activity, Calendar, Filter, MapPin 
} from 'lucide-react';

// --- MOCK DATA FOR ANALYTICS ---

// 1. Executive Data
const revenueData = [
  { month: 'Jan', gmv: 450000, netRevenue: 67500 },
  { month: 'Feb', gmv: 520000, netRevenue: 78000 },
  { month: 'Mar', gmv: 480000, netRevenue: 72000 },
  { month: 'Apr', gmv: 610000, netRevenue: 91500 },
  { month: 'May', gmv: 750000, netRevenue: 112500 },
  { month: 'Jun', gmv: 920000, netRevenue: 138000 },
];

const serviceMixData = [
  { name: 'Food Delivery', value: 45 },
  { name: 'Vet Care', value: 25 },
  { name: 'Grooming', value: 20 },
  { name: 'Adoption', value: 10 },
];

// 2. Loyalty Data
const membershipDistData = [
  { name: 'Silver', value: 600, color: '#94A3B8' },
  { name: 'Gold', value: 300, color: '#F59E0B' },
  { name: 'Platinum', value: 150, color: '#7C3AED' },
];

const aovByTierData = [
  { tier: 'No ID', aov: 1500 },
  { tier: 'Green ID', aov: 3200 },
  { tier: 'Blue ID', aov: 5500 },
  { tier: 'Gold ID', aov: 8900 },
];

// 3. Operations Data
const vendorPerformanceData = [
  { name: 'Lahore Kennels', revenue: 120000, disputes: 1, rating: 4.8 },
  { name: 'PetMart Khi', revenue: 95000, disputes: 0, rating: 4.9 },
  { name: 'Islamabad Vets', revenue: 88000, disputes: 0, rating: 5.0 },
  { name: 'Rawalpindi Breeders', revenue: 60000, disputes: 3, rating: 3.5 },
  { name: 'Dog House', revenue: 45000, disputes: 0, rating: 4.2 },
];

const COLORS = ['#0F766E', '#F59E0B', '#3B82F6', '#EF4444'];

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'executive' | 'loyalty' | 'operations'>('executive');

  return (
    <div className="space-y-8 pb-12">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-500">Track business health, loyalty programs, and operations.</p>
        </div>
        <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100">
                <Calendar size={16} /> Last 30 Days
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100">
                <MapPin size={16} /> All Cities
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white border border-gray-900 rounded-lg text-sm font-medium shadow hover:bg-gray-800">
                <Filter size={16} /> More Filters
            </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
        {[
            { id: 'executive', label: '💰 Executive Summary' },
            { id: 'loyalty', label: '🏆 Loyalty & Retention' },
            { id: 'operations', label: '🛠️ Operations & Quality' }
        ].map(tab => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all ${
                    activeTab === tab.id 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                }`}
            >
                {tab.label}
            </button>
        ))}
      </div>

      {/* --- EXECUTIVE DASHBOARD --- */}
      {activeTab === 'executive' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard 
                    title="Total GMV" 
                    value="PKR 920K" 
                    subvalue="+12% vs last month" 
                    icon={<DollarSign />} 
                    trend="up"
                />
                <StatsCard 
                    title="Net Revenue" 
                    value="PKR 138K" 
                    subvalue="15% Take Rate" 
                    icon={<TrendingUp />} 
                    trend="up" 
                    color="blue"
                />
                <StatsCard 
                    title="Total Orders" 
                    value="1,245" 
                    subvalue="45 daily avg" 
                    icon={<ShoppingBag />} 
                    trend="up" 
                    color="emerald"
                />
                <StatsCard 
                    title="Active Users" 
                    value="3,500" 
                    subvalue="+5% new signups" 
                    icon={<Users />} 
                    trend="down" 
                    color="purple"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Financial Performance (GMV vs Net Revenue)</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="colorGmv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0F766E" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#0F766E" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} dy={10} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
                                <Legend />
                                <Area type="monotone" dataKey="gmv" stroke="#0F766E" fillOpacity={1} fill="url(#colorGmv)" name="Gross Merchandise Vol" />
                                <Area type="monotone" dataKey="netRevenue" stroke="#F59E0B" fillOpacity={1} fill="url(#colorNet)" name="Net Revenue" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Service Mix */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Orders by Service Type</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={serviceMixData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {serviceMixData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* --- LOYALTY DASHBOARD --- */}
      {activeTab === 'loyalty' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard 
                    title="PawPoints Issued" 
                    value="1.2M" 
                    subvalue="Lifetime" 
                    icon={<Award />} 
                    color="purple"
                />
                <StatsCard 
                    title="Redemption Rate" 
                    value="34%" 
                    subvalue="Healthy > 30%" 
                    icon={<Activity />} 
                    color="green"
                />
                 <StatsCard 
                    title="Gold Upgrade Rate" 
                    value="12%" 
                    subvalue="MoM Growth" 
                    icon={<TrendingUp />} 
                    color="amber"
                />
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* AOV by Pet ID Tier */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Spending Power by Verification Tier</h3>
                    <p className="text-sm text-gray-500 mb-6">Do verified owners spend more?</p>
                    <div className="h-80">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={aovByTierData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                                <XAxis type="number" hide />
                                <YAxis dataKey="tier" type="category" width={80} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{fill: 'transparent'}} />
                                <Bar dataKey="aov" fill="#0F766E" radius={[0, 4, 4, 0]} barSize={32}>
                                    {
                                        aovByTierData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={index === 3 ? '#F59E0B' : index === 2 ? '#3B82F6' : '#0F766E'} />
                                        ))
                                    }
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Membership Distribution */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Membership Tier Distribution</h3>
                     <div className="h-80 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={membershipDistData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={100}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {membershipDistData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="middle" align="right" layout="vertical" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
             </div>
        </div>
      )}

      {/* --- OPERATIONS DASHBOARD --- */}
      {activeTab === 'operations' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatsCard title="Pending Vendors" value="8" icon={<AlertCircle />} color="amber" />
                <StatsCard title="Active Listings" value="1,402" icon={<ShoppingBag />} color="blue" />
                <StatsCard title="Open Disputes" value="3" icon={<ShieldCheck />} color="red" />
                <StatsCard title="Avg Resolution Time" value="2.4 Days" icon={<Activity />} color="purple" />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900">Top Vendors by Revenue & Quality</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-900 font-medium">
                            <tr>
                                <th className="px-6 py-4">Vendor Name</th>
                                <th className="px-6 py-4">Total Revenue</th>
                                <th className="px-6 py-4">Disputes</th>
                                <th className="px-6 py-4">Rating</th>
                                <th className="px-6 py-4 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {vendorPerformanceData.map((vendor, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition">
                                    <td className="px-6 py-4 font-bold text-gray-900">{vendor.name}</td>
                                    <td className="px-6 py-4 text-emerald-600 font-medium">PKR {vendor.revenue.toLocaleString()}</td>
                                    <td className="px-6 py-4">
                                        {vendor.disputes > 0 ? (
                                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">{vendor.disputes} Issues</span>
                                        ) : (
                                            <span className="text-gray-400">Clean</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 flex items-center gap-1">
                                        <span className="font-bold text-gray-900">{vendor.rating}</span>
                                        <span className="text-yellow-400">★</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Active</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

// Reusable Stats Card Component
const StatsCard = ({ title, value, subvalue, icon, trend, color = 'teal' }: any) => {
    const colorClasses: any = {
        teal: 'bg-teal-50 text-teal-600',
        blue: 'bg-blue-50 text-blue-600',
        emerald: 'bg-emerald-50 text-emerald-600',
        purple: 'bg-purple-50 text-purple-600',
        amber: 'bg-amber-50 text-amber-600',
        red: 'bg-red-50 text-red-600',
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
                    {React.cloneElement(icon, { size: 24 })}
                </div>
                {trend && (
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {trend === 'up' ? '↗' : '↘'} {trend === 'up' ? '+2.4%' : '-1.2%'}
                    </span>
                )}
            </div>
            <div>
                <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
                <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
                {subvalue && <p className="text-xs text-gray-400 mt-1">{subvalue}</p>}
            </div>
        </div>
    );
};

export default Admin;
