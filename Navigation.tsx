
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PawPrint, Search, User, ShieldCheck, MessageCircle } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Services', path: '/services' },
    { name: 'Lost & Found', path: '/lost-and-found' },
    { name: 'Price Estimator', path: '/estimator' },
    { name: 'Digital ID', path: '/digital-id' },
    { name: 'Membership', path: '/membership' },
    { name: 'Admin', path: '/admin' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <PawPrint className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-gray-800 tracking-tight">PawHub</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-900'
                } px-1 pt-1 text-sm font-medium transition-colors duration-200 h-16 flex items-center`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/chat" className="text-gray-500 hover:text-primary relative">
                <MessageCircle size={24} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </Link>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-800 transition flex items-center gap-2">
              <User size={16} /> Login
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-teal-50 text-primary border-l-4 border-primary'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                } block pl-3 pr-4 py-2 text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/chat" onClick={() => setIsOpen(false)} className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50">
                Messages (2)
            </Link>
            <div className="pl-3 pr-4 py-2">
               <button className="w-full text-left bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-800 transition">
                Login / Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
