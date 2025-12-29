import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { mockData } from '../mock';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'rgb(17, 17, 19)', color: 'rgb(255, 255, 255)' }}>
      {/* Header */}
      <header className="py-6" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container mx-auto px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={mockData.brand.logo} alt="Funnel-IQ" className="h-16 w-auto" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          {/* 404 Icon */}
          <div className="mb-8">
            <div 
              className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
              style={{ background: 'rgba(218, 255, 1, 0.1)', border: '3px solid rgb(218, 255, 1)' }}
            >
              <Search size={40} style={{ color: 'rgb(218, 255, 1)' }} />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ color: 'rgb(218, 255, 1)' }}>
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgb(161, 161, 170)' }}>
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="inline-flex items-center justify-center gap-2"
              style={{
                background: 'rgb(218, 255, 1)',
                color: 'rgb(17, 17, 19)',
                border: 'none',
                borderRadius: '12px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgb(166, 190, 21)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(218, 255, 1, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgb(218, 255, 1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Home size={20} />
              Go to Homepage
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2"
              style={{
                background: 'transparent',
                color: 'rgb(255, 255, 255)',
                border: '2px solid rgb(63, 63, 63)',
                borderRadius: '12px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgb(218, 255, 1)';
                e.currentTarget.style.color = 'rgb(218, 255, 1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgb(63, 63, 63)';
                e.currentTarget.style.color = 'rgb(255, 255, 255)';
              }}
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <p className="text-sm mb-4" style={{ color: 'rgb(161, 161, 170)' }}>Looking for something specific?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/checkout" 
                className="text-sm transition-colors"
                style={{ color: 'rgb(218, 255, 1)' }}
              >
                Get Your Audit →
              </Link>
              <a 
                href="mailto:support@aykaa.me" 
                className="text-sm transition-colors"
                style={{ color: 'rgb(218, 255, 1)' }}
              >
                Contact Support →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center text-sm" style={{ color: 'rgb(161, 161, 170)' }}>
            <p>© 2026 Funnel-IQ by aykaa.me. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
