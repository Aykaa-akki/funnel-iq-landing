import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import RefundPolicy from './pages/RefundPolicy';
import NotFound from './pages/NotFound';
import { initUTMTracking } from './utils/utmTracker';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// UTM Tracking initializer component
function UTMTracker() {
  const location = useLocation();
  
  useEffect(() => {
    // Capture UTM params on initial load and route changes
    initUTMTracking();
  }, [location.search]);
  
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/funnel-iq">
        <ScrollToTop />
        <UTMTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
