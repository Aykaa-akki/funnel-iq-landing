import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download, Mail, Clock, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const ThankYou = () => {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem('orderData');
    if (data) {
      setOrderData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'rgb(17, 17, 19)', color: 'rgb(255, 255, 255)' }}>
      {/* Header */}
      <header className="py-6" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container mx-auto px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={mockData.brand.logo} alt="Funnel-IQ" className="h-16 w-auto" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(218, 255, 1, 0.1)', border: '3px solid rgb(218, 255, 1)' }}
            >
              <CheckCircle2 size={40} style={{ color: 'rgb(218, 255, 1)' }} />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Payment Successful! 🎉
          </h1>
          <p className="text-xl text-center mb-12" style={{ color: 'rgb(161, 161, 170)' }}>
            Your FunnelIQ audit is being prepared by our experts
          </p>

          {/* Order Details Card */}
          {orderData && (
            <div className="p-8 mb-8" style={{ background: 'rgb(26, 28, 30)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
              <h2 className="text-xl font-semibold mb-6">Order Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ color: 'rgb(161, 161, 170)' }}>Order ID</span>
                  <span className="font-mono text-sm">{orderData.orderId}</span>
                </div>
                <div className="flex justify-between items-center pb-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ color: 'rgb(161, 161, 170)' }}>Website</span>
                  <span className="text-sm">{orderData.website}</span>
                </div>
                <div className="flex justify-between items-center pb-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ color: 'rgb(161, 161, 170)' }}>Amount Paid</span>
                  <span className="text-xl font-bold" style={{ color: 'rgb(218, 255, 1)' }}>₹{orderData.amount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Additional Information CTA */}
          <div className="p-8 mb-8 text-center" style={{ background: 'rgb(26, 28, 30)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
            <h2 className="text-2xl font-semibold mb-4">Help Us Serve You Better</h2>
            <p className="mb-6" style={{ color: 'rgb(161, 161, 170)' }}>
              Share a few more details about your business so we can customize your audit report and provide more targeted recommendations.
            </p>
            <a
              href="https://tally.so/r/0Qrzqy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
              style={{
                background: 'rgb(218, 255, 1)',
                color: 'rgb(17, 17, 19)',
                border: 'none',
                borderRadius: '12px',
                padding: '16px 40px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                display: 'inline-block'
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
              Fill Additional Details (2 min)
            </a>
            <p className="text-xs mt-4" style={{ color: 'rgb(161, 161, 170)' }}>Optional but helps us tailor the audit to your specific needs</p>
          </div>

          {/* Next Steps */}
          <div className="p-8 mb-8" style={{ background: 'rgb(26, 28, 30)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
            <h2 className="text-xl font-semibold mb-6">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(218, 255, 1, 0.1)', color: 'rgb(218, 255, 1)', fontWeight: '600' }}>1</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Expert Analysis Begins</h3>
                  <p className="text-sm" style={{ color: 'rgb(161, 161, 170)' }}>Our conversion specialists are starting your 47-point funnel audit right now.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(218, 255, 1, 0.1)', color: 'rgb(218, 255, 1)', fontWeight: '600' }}>2</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">WhatsApp Updates</h3>
                  <p className="text-sm" style={{ color: 'rgb(161, 161, 170)' }}>You'll receive status updates on WhatsApp as we progress through your audit.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(218, 255, 1, 0.1)', color: 'rgb(218, 255, 1)', fontWeight: '600' }}>3</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Report Delivery (8-10 hours)</h3>
                  <p className="text-sm" style={{ color: 'rgb(161, 161, 170)' }}>Your comprehensive PDF report with actionable recommendations will be delivered via email and WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Timeline */}
          <div className="p-6 mb-8 rounded-lg" style={{ background: 'rgba(218, 255, 1, 0.1)', border: '1px solid rgba(218, 255, 1, 0.2)' }}>
            <div className="flex items-start gap-3">
              <Clock size={24} className="flex-shrink-0" style={{ color: 'rgb(218, 255, 1)' }} />
              <div>
                <p className="font-semibold mb-1" style={{ color: 'rgb(218, 255, 1)' }}>Expected Delivery: 8-10 hours</p>
                <p className="text-sm" style={{ color: 'rgb(161, 161, 170)' }}>Your report will be ready within {mockData.stats.deliveryTime}. You'll receive an email and WhatsApp notification.</p>
              </div>
            </div>
          </div>

          {/* Sample Report CTA */}
          <div className="p-8 mb-8 text-center" style={{ background: 'rgb(26, 28, 30)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px' }}>
            <h3 className="text-xl font-semibold mb-4">Want to see what you'll receive?</h3>
            <p className="mb-6" style={{ color: 'rgb(161, 161, 170)' }}>Download our sample report to see the depth and quality of our analysis.</p>
            <button
              className="btn-secondary"
              style={{
                background: 'transparent',
                color: 'rgb(255, 255, 255)',
                border: '2px solid rgb(63, 63, 63)',
                borderRadius: '12px',
                padding: '14px 30px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgb(218, 255, 1)';
                e.currentTarget.style.color = 'rgb(218, 255, 1)';
                e.currentTarget.style.background = 'rgba(218, 255, 1, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgb(63, 63, 63)';
                e.currentTarget.style.color = 'rgb(255, 255, 255)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <Download size={20} />
              Download Sample Report
            </button>
          </div>

          {/* Support */}
          <div className="text-center">
            <p className="mb-4" style={{ color: 'rgb(161, 161, 170)' }}>Have questions? Need support?</p>
            <a 
              href={`mailto:${mockData.supportEmail}`}
              className="inline-flex items-center gap-2 transition-colors"
              style={{ color: 'rgb(218, 255, 1)', textDecoration: 'underline' }}
            >
              <Mail size={20} />
              {mockData.supportEmail}
            </a>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 transition-colors"
              style={{ color: 'rgb(161, 161, 170)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(218, 255, 1)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(161, 161, 170)'}
            >
              <span>Back to Home</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center text-sm" style={{ color: 'rgb(161, 161, 170)' }}>
            <p>© {new Date().getFullYear()} Funnel-IQ by aykaa.me. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
