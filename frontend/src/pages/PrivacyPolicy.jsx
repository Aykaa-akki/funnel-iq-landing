import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockData } from '../mock';

const PrivacyPolicy = () => {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-8" style={{ color: 'rgb(161, 161, 170)' }}>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8" style={{ color: 'rgb(218, 218, 218)' }}>
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>1. Information We Collect</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>We collect information that you provide directly to us when using Funnel-IQ services operated by aykaa.me, including:</p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>Contact information (phone number, email address)</li>
                <li>Website URL for audit purposes</li>
                <li>Payment information (processed securely through Razorpay)</li>
                <li>Communication preferences and feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>2. How We Use Your Information</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>Provide, maintain, and improve our funnel audit services</li>
                <li>Process your payments and deliver your audit reports</li>
                <li>Send you service-related updates via WhatsApp and email</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, and promotional offers</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>3. Information Sharing and Disclosure</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>With service providers who perform services on our behalf (e.g., payment processing, analytics)</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>4. Data Security</h2>
              <p style={{ lineHeight: '1.8' }}>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment information is processed securely through Razorpay's encrypted payment gateway.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>5. Data Retention</h2>
              <p style={{ lineHeight: '1.8' }}>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>6. Your Rights</h2>
              <p className="mb-4" style={{ lineHeight: '1.8' }}>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(161, 161, 170)' }}>
                <li>Access, update, or delete your personal information</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>7. Cookies and Tracking</h2>
              <p style={{ lineHeight: '1.8' }}>We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>8. Third-Party Links</h2>
              <p style={{ lineHeight: '1.8' }}>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>9. Changes to This Policy</h2>
              <p style={{ lineHeight: '1.8' }}>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>10. Contact Us</h2>
              <p style={{ lineHeight: '1.8' }}>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
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

export default PrivacyPolicy;
