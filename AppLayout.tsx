
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu, Search, Bell } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Determine Page Title based on route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path.startsWith('/marketplace') || path.startsWith('/pet/')) return 'Marketplace';
    if (path.startsWith('/services')) return 'Services';
    if (path.startsWith('/lost-and-found')) return 'Lost & Found';
    if (path.startsWith('/chat')) return 'Messages';
    if (path.startsWith('/admin')) return 'Admin Dashboard';
    if (path.startsWith('/estimator')) return 'Price Estimator';
    if (path.startsWith('/digital-id')) return 'Digital ID';
    if (path.startsWith('/membership')) return 'Membership';
    return 'PawHub';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300 min-w-0">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">{getPageTitle()}</h1>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                    type="text" 
                    placeholder="Search anything..." 
                    className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-64 outline-none"
                />
            </div>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold md:hidden">
                AH
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
            {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
