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

          {/* Critical: Additional Information - Rephrased as Essential */}
          <div className="p-8 mb-8 text-center" style={{ background: 'rgba(218, 255, 1, 0.05)', border: '2px solid rgba(218, 255, 1, 0.3)', borderRadius: '16px' }}>
            <div className="mb-4">
              <div className="inline-block px-4 py-2 rounded-full mb-3" style={{ background: 'rgba(218, 255, 1, 0.2)', color: 'rgb(218, 255, 1)', fontSize: '14px', fontWeight: '700' }}>
                ⚡ CRITICAL STEP
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Complete Your Audit Details</h2>
            <p className="mb-6 text-lg" style={{ color: 'rgb(218, 218, 218)' }}>
              To deliver the <strong style={{ color: 'rgb(218, 255, 1)' }}>most accurate and actionable recommendations</strong>, our experts need a few key details about your business. This takes only 2 minutes and <strong>directly impacts the quality of your audit</strong>.
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
                padding: '20px 48px',
                fontSize: '19px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgb(166, 190, 21)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(218, 255, 1, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgb(218, 255, 1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span>Complete Business Details Now</span>
              <span style={{ fontSize: '13px', opacity: 0.85 }}>↓ Takes 2 minutes • Required for best results</span>
            </a>
            <p className="text-sm mt-4" style={{ color: 'rgb(161, 161, 170)' }}>Without these details, our experts may miss critical optimization opportunities specific to your industry and audience.</p>
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

          {/* Support */}
          <div className="text-center mt-12">
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

export default ThankYou;
