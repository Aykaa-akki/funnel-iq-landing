import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { mockData } from '../mock';

const RefundPolicy = () => {
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

      {/* Content */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 mb-8 transition-colors"
            style={{ color: 'rgb(161, 161, 170)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(218, 255, 1)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(161, 161, 170)'}
          >
            <ArrowLeft size={20} />
            <span>Back to home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="mb-8" style={{ color: 'rgb(161, 161, 170)' }}>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          {/* Highlight Box */}
          <div className="p-6 mb-8 rounded-lg" style={{ background: 'rgba(218, 255, 1, 0.1)', border: '1px solid rgba(218, 255, 1, 0.3)' }}>
            <div className="flex items-start gap-3">
              <AlertCircle size={24} className="flex-shrink-0" style={{ color: 'rgb(218, 255, 1)' }} />
              <div>
                <h3 className="font-semibold mb-2" style={{ color: 'rgb(218, 255, 1)' }}>100% Money-Back Guarantee</h3>
                <p className="text-sm" style={{ color: 'rgb(218, 218, 218)', lineHeight: '1.6' }}>
                  We stand behind the quality of our work. If you implement all the suggestions mentioned in your Funnel-IQ audit report and do not see measurable improvement in your funnel performance, we will provide a full refund.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8" style={{ color: 'rgb(218, 218, 218)' }}>
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>1. Refund Eligibility</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>You are eligible for a full refund if:</p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>You have received your complete Funnel-IQ audit report</li>
                <li>You have implemented ALL the recommendations mentioned in the report</li>
                <li>You have provided documented evidence of implementation (screenshots, analytics data, etc.)</li>
                <li>You can demonstrate that the implemented changes did not result in any measurable improvement</li>
                <li>Your refund request is submitted within 60 days of receiving the report</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>2. Digital Service Nature</h2>
              <p style={{ lineHeight: '1.8' }}>Funnel-IQ provides digital audit services. Once your audit report has been delivered, the service has been rendered. However, we maintain our 100% satisfaction guarantee to ensure you receive actionable value from our analysis.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>3. Non-Refundable Scenarios</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>Refund requests may be declined if:</p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>You have not implemented all the suggestions mentioned in the report</li>
                <li>You cannot provide evidence of proper implementation</li>
                <li>The refund request is made after 60 days from report delivery</li>
                <li>You have violated our Terms of Use</li>
                <li>The lack of results is due to factors outside the scope of our recommendations (e.g., product/market fit issues, pricing problems, service quality issues)</li>
                <li>You have shared or distributed the report to unauthorized parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>4. Refund Request Process</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>To request a refund, please follow these steps:</p>
              <ol className="list-decimal pl-6 space-y-3" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>Email us at <span style={{ color: 'rgb(218, 255, 1)' }}>{mockData.supportEmail}</span> with subject line "Refund Request"</li>
                <li>Include your order ID and payment details</li>
                <li>Provide detailed documentation of your implementation efforts, including:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Before and after screenshots</li>
                    <li>Code changes or design modifications made</li>
                    <li>Analytics data showing the implementation period</li>
                    <li>Timeline of when each recommendation was implemented</li>
                  </ul>
                </li>
                <li>Explain why you believe the recommendations did not produce results</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>5. Review and Processing</h2>
              <p style={{ lineHeight: '1.8' }}>Once we receive your refund request, our team will:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>Review your documentation within 5-7 business days</li>
                <li>May request additional information or clarification</li>
                <li>Schedule a call to understand implementation challenges (if needed)</li>
                <li>Provide our decision in writing via email</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>6. Refund Timeline</h2>
              <p style={{ lineHeight: '1.8' }}>If your refund request is approved:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>The refund will be processed within 7-10 business days</li>
                <li>The amount will be credited back to your original payment method</li>
                <li>Depending on your bank or card issuer, it may take an additional 5-7 business days for the refund to reflect in your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>7. Partial Refunds</h2>
              <p style={{ lineHeight: '1.8' }}>In certain exceptional cases, we may offer partial refunds if:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>There was a significant delay in report delivery (beyond 72 hours)</li>
                <li>The report quality did not meet our stated standards</li>
                <li>You only partially implemented recommendations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>8. Chargebacks</h2>
              <p style={{ lineHeight: '1.8' }}>If you initiate a chargeback without first contacting us for a refund, we reserve the right to dispute the chargeback and provide evidence of service delivery. Please contact us first to resolve any issues amicably.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>9. Our Commitment</h2>
              <p style={{ lineHeight: '1.8' }}>We are committed to your success. Before considering a refund, we will:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>Offer a complimentary 30-minute consultation to discuss implementation challenges</li>
                <li>Provide clarification on any recommendations you found unclear</li>
                <li>Review your implementation approach and suggest corrections</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>10. Contact Us</h2>
              <p style={{ lineHeight: '1.8' }}>For any questions or concerns regarding our Refund Policy, please contact us at:</p>
              <p className="mt-4" style={{ color: 'rgb(218, 255, 1)' }}>
                <a href={`mailto:${mockData.supportEmail}`} className="underline">{mockData.supportEmail}</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 mt-16" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center text-sm" style={{ color: 'rgb(161, 161, 170)' }}>
            <p>© 2026 Funnel-IQ by aykaa.me. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RefundPolicy;
