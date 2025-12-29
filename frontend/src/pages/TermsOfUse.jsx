import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockData } from '../mock';

const TermsOfUse = () => {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="mb-8" style={{ color: 'rgb(161, 161, 170)' }}>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8" style={{ color: 'rgb(218, 218, 218)' }}>
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>1. Acceptance of Terms</h2>
              <p style={{ lineHeight: '1.8' }}>By accessing and using Funnel-IQ services operated by aykaa.me, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>2. Service Description</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>Funnel-IQ provides conversion funnel audit and analysis services, including:</p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>Comprehensive funnel analysis and audit reports</li>
                <li>Actionable recommendations for conversion optimization</li>
                <li>30-day implementation roadmap</li>
                <li>Optional consultation services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>3. User Obligations</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use the service only for lawful purposes</li>
                <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                <li>Not reproduce, duplicate, or resell our reports without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>4. Payment Terms</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>All payments are processed securely through Razorpay. By making a payment, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>Pay the full amount at the time of ordering</li>
                <li>Provide valid payment information</li>
                <li>Accept that prices are subject to change without notice</li>
                <li>Understand that promotional pricing is time-limited</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>5. Delivery of Services</h2>
              <p style={{ lineHeight: '1.8' }}>We aim to deliver audit reports within 8-10 hours of payment confirmation. While we strive to meet this timeline, delivery times may vary based on workload and complexity. Delays do not constitute grounds for refund unless they exceed 72 hours.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>6. Intellectual Property</h2>
              <p style={{ lineHeight: '1.8' }}>All content, reports, methodologies, and materials provided by Funnel-IQ are our intellectual property. You receive a non-exclusive, non-transferable license to use the audit report for your own business purposes only.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>7. Disclaimers and Limitations</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>Our services are provided "as is" without warranties of any kind. We do not guarantee specific results or outcomes. Implementation of recommendations is at your own risk and discretion.</p>
              <p style={{ lineHeight: '1.8', color: 'rgb(161, 161, 170)' }}>Funnel-IQ provides analysis and recommendations based on industry best practices. Actual results may vary based on numerous factors including implementation quality, market conditions, and business-specific variables.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>8. Limitation of Liability</h2>
              <p style={{ lineHeight: '1.8' }}>To the maximum extent permitted by law, aykaa.me and Funnel-IQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>9. Confidentiality</h2>
              <p style={{ lineHeight: '1.8' }}>We treat all client information and website data as confidential. We will not disclose your information to third parties except as required by law or as necessary to provide our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>10. Modifications to Terms</h2>
              <p style={{ lineHeight: '1.8' }}>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>11. Termination</h2>
              <p style={{ lineHeight: '1.8' }}>We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these terms or is harmful to other users or our business.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>12. Governing Law</h2>
              <p style={{ lineHeight: '1.8' }}>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>13. Contact Information</h2>
              <p style={{ lineHeight: '1.8' }}>For any questions or concerns regarding these Terms of Use, please contact us at:</p>
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

export default TermsOfUse;
