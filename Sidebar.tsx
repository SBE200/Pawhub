
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  ShoppingBag, 
  Search, 
  Activity, 
  CreditCard, 
  MessageCircle, 
  Settings, 
  LogOut, 
  QrCode, 
  ShieldCheck, 
  Heart,
  LayoutDashboard,
  PawPrint,
  Store
} from 'lucide-react';
import { MOCK_USER_MEMBERSHIP } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Marketplace', path: '/marketplace', icon: <ShoppingBag size={20} /> },
    { name: 'Services', path: '/services', icon: <Activity size={20} /> },
    { name: 'Lost & Found', path: '/lost-and-found', icon: <Search size={20} /> },
    { name: 'Price Estimator', path: '/estimator', icon: <CreditCard size={20} /> },
    { name: 'Digital ID', path: '/digital-id', icon: <QrCode size={20} /> },
    { name: 'Membership', path: '/membership', icon: <ShieldCheck size={20} /> },
    { name: 'Messages', path: '/chat', icon: <MessageCircle size={20} />, badge: 2 },
  ];

  const adminItems = [
    { name: 'Admin Panel', path: '/admin', icon: <LayoutDashboard size={20} /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 w-64 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col`}>
        
        {/* Logo Area */}
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight">
            <PawPrint className="fill-current" />
            <span>PawHub</span>
          </Link>
        </div>

        {/* Scrollable Nav Items */}
        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
          <p className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Menu</p>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                isActive(item.path)
                  ? 'bg-teal-50 text-primary shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={isActive(item.path) ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600'}>
                    {item.icon}
                </span>
                {item.name}
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}

          <div className="my-6 border-t border-gray-100 mx-3"></div>

          <p className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Management</p>
          {adminItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                isActive(item.path)
                  ? 'bg-teal-50 text-primary shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className={isActive(item.path) ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600'}>
                  {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
          
          {/* Become Seller CTA */}
          <div className="mt-6 px-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 text-white shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl -mr-4 -mt-4 transition group-hover:scale-150 duration-700"></div>
                <h4 className="font-bold relative z-10">Sell on PawHub</h4>
                <p className="text-xs text-gray-300 mt-1 mb-3 relative z-10">Reach millions of pet lovers & get verified.</p>
                <Link 
                    to="/become-seller" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 text-xs font-bold py-2 rounded-lg hover:bg-gray-100 transition relative z-10"
                >
                    <Store size={14} /> Become Vendor
                </Link>
            </div>
          </div>
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-md">
                    AH
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate">Ahmed Hasan</p>
                    <p className="text-xs text-gray-500 truncate">{MOCK_USER_MEMBERSHIP.tier} Member</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <Settings size={18} />
                </button>
            </div>
            <button className="flex items-center gap-2 text-xs font-medium text-red-600 hover:text-red-700 w-full px-1">
                <LogOut size={14} /> Sign Out
            </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
