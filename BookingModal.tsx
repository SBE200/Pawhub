
import React, { useState } from 'react';
import { Service } from '../types';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<Props> = ({ service, isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  const handleBook = () => {
    // Logic to save booking would go here
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {step === 1 ? (
          <>
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Book Service</h3>
                <p className="text-sm text-gray-500">{service.title}</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar size={16} className="inline mr-2 text-primary" /> Select Date
                </label>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock size={16} className="inline mr-2 text-primary" /> Select Time
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="">Choose a slot</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                </select>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg flex items-start gap-3">
                <div className="bg-teal-100 p-1 rounded text-primary">
                    <CheckCircle size={16} />
                </div>
                <div className="text-sm text-teal-800">
                    <span className="font-bold">PawPoints Reward:</span> You will earn <span className="font-bold">+50 Points</span> for this booking!
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex gap-4">
              <button onClick={onClose} className="flex-1 py-3 text-gray-600 font-medium hover:bg-gray-50 rounded-xl transition">
                Cancel
              </button>
              <button 
                onClick={handleBook}
                disabled={!date || !time}
                className={`flex-1 py-3 text-white font-bold rounded-xl transition shadow-lg ${!date || !time ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary hover:bg-teal-800'}`}
              >
                Confirm Booking
              </button>
            </div>
          </>
        ) : (
          <div className="p-10 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-500 mb-8">
              Your appointment for {service.title} is scheduled for <strong>{date} at {time}</strong>.
            </p>
            <div className="w-full space-y-3">
                <Link to="/membership" className="block w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-teal-800 transition">
                    View My PawPoints
                </Link>
                <button onClick={onClose} className="block w-full text-gray-500 py-3 hover:text-gray-800">
                    Close
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
