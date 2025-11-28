import React, { useState } from 'react';
import { getPriceEstimate } from '../services/geminiService';
import { Sparkles, Loader2, DollarSign } from 'lucide-react';

const PriceEstimator: React.FC = () => {
  const [formData, setFormData] = useState({
    category: 'Dog',
    breed: '',
    age: '',
    location: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.breed || !formData.age) return;

    setLoading(true);
    setResult(null);
    const estimate = await getPriceEstimate(formData);
    setResult(estimate);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <Sparkles className="text-secondary" /> 
            AI Price Estimator
        </h1>
        <p className="text-gray-500 mt-2">
            Unsure about a fair price? Let our AI analyze the Pakistani market for you.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pet Type</label>
                    <select 
                        className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-primary focus:border-primary"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <select 
                        className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-primary focus:border-primary"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                    >
                        <option value="">Select City</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Islamabad">Islamabad</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Breed</label>
                    <input 
                        type="text"
                        placeholder="e.g. German Shepherd"
                        className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-primary focus:border-primary"
                        value={formData.breed}
                        onChange={(e) => setFormData({...formData, breed: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input 
                        type="text"
                        placeholder="e.g. 2 Months"
                        className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-primary focus:border-primary"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        required
                    />
                </div>
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg hover:bg-teal-800 transition flex justify-center items-center gap-2"
            >
                {loading ? <Loader2 className="animate-spin" /> : <DollarSign size={20} />}
                {loading ? 'Analyzing Market Data...' : 'Get Price Estimate'}
            </button>
        </form>

        {result && (
            <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-100 animate-fade-in">
                <h3 className="text-lg font-bold text-primary mb-2">Estimation Result</h3>
                <p className="text-gray-800 whitespace-pre-line">{result}</p>
                <div className="mt-4 text-xs text-gray-500">
                    *Estimates are based on aggregated online data and may vary based on pedigree, health, and lineage.
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default PriceEstimator;
