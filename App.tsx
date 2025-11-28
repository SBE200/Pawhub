
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import PriceEstimator from './pages/PriceEstimator';
import DigitalID from './pages/DigitalID';
import Admin from './pages/Admin';
import Services from './pages/Services';
import Membership from './pages/Membership';
import PetDetails from './pages/PetDetails';
import Chat from './pages/Chat';
import LostAndFound from './pages/LostAndFound';
import BecomeSeller from './pages/BecomeSeller';

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/lost-and-found" element={<LostAndFound />} />
          <Route path="/estimator" element={<PriceEstimator />} />
          <Route path="/digital-id" element={<DigitalID />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
};

export default App;
