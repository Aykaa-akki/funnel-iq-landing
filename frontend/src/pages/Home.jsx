import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, Shield, TrendingUp, Users, Zap, Target, FileText, BarChart3, Star, ChevronDown } from 'lucide-react';
import { mockData } from '../mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Home = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="min-h-screen" style={{ background: 'rgb(17, 17, 19)', color: 'rgb(255, 255, 255)' }}>
      {/* Header */}
      <header className="sticky top-0 z-50" style={{ background: 'rgba(17, 17, 19, 0.95)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)' }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={mockData.brand.logo} alt="Funnel-IQ" className="h-16 w-auto" />
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-base font-medium transition-colors" style={{ color: 'rgb(218, 218, 218)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.target.style.color = 'rgb(218, 218, 218)'}>Features</a>
              <a href="#how-it-works" className="text-base font-medium transition-colors" style={{ color: 'rgb(218, 218, 218)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.target.style.color = 'rgb(218, 218, 218)'}>How It Works</a>
              <a href="#pricing" className="text-base font-medium transition-colors" style={{ color: 'rgb(218, 218, 218)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.target.style.color = 'rgb(218, 218, 218)'}>Pricing</a>
              <a href="#faq" className="text-base font-medium transition-colors" style={{ color: 'rgb(218, 218, 218)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.target.style.color = 'rgb(218, 218, 218)'}>FAQ</a>
            </nav>

            <Link 
              to="/checkout"
              className="btn-primary"
              style={{
                background: 'rgb(218, 255, 1)',
                color: 'rgb(17, 17, 19)',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 28px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgb(166, 190, 21)';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 8px 25px rgba(218, 255, 1, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgb(218, 255, 1)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get My Audit – ₹5,999
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Strong Hero Headline with Highlights */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                Stop <span style={{ color: 'rgb(218, 255, 1)', background: 'rgba(218, 255, 1, 0.1)', padding: '0 8px' }}>Losing Money</span> on Your Funnel
              </h1>
              
              {/* Agitate with highlights */}
              <p className="text-xl md:text-2xl mb-8" style={{ color: 'rgb(218, 218, 218)', lineHeight: '1.6' }}>
                You're driving traffic and spending on ads, but visitors <strong style={{ color: 'rgb(218, 255, 1)' }}>leave without converting</strong>. Every day, thousands of rupees slip through the cracks.
              </p>
              
              {/* Solve */}
              <p className="text-lg md:text-xl mb-10" style={{ color: 'rgb(161, 161, 170)', lineHeight: '1.6' }}>
                Funnel-IQ identifies <strong>exactly where you're losing customers</strong> and gives you a proven <strong style={{ color: 'rgb(218, 255, 1)' }}>30-day action plan</strong> to fix it. Get your expert audit in <strong>8-10 hours</strong> and start converting more visitors into paying customers.
              </p>

              {/* CTAs with subtexts */}
              <div className="flex flex-col gap-4 mb-12">
                <Link 
                  to="/checkout"
                  className="btn-primary w-full sm:w-auto text-center"
                  style={{
                    background: 'rgb(218, 255, 1)',
                    color: 'rgb(17, 17, 19)',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '18px 40px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    minHeight: '72px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgb(166, 190, 21)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(218, 255, 1, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgb(218, 255, 1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span className="flex items-center gap-2">
                    Get My FunnelIQ Audit
                    <ArrowRight size={20} />
                  </span>
                  <span style={{ fontSize: '12px', opacity: 0.8 }}>✓ 8-10 hour delivery • 100% money-back guarantee</span>
                </Link>

                <a 
                  href="#sample"
                  className="btn-secondary w-full sm:w-auto text-center"
                  style={{
                    background: 'transparent',
                    color: 'rgb(255, 255, 255)',
                    border: '2px solid rgb(63, 63, 63)',
                    borderRadius: '12px',
                    padding: '16px 38px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    display: 'inline-block',
                    minHeight: '56px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'rgb(218, 255, 1)';
                    e.target.style.color = 'rgb(218, 255, 1)';
                    e.target.style.background = 'rgba(218, 255, 1, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgb(63, 63, 63)';
                    e.target.style.color = 'rgb(255, 255, 255)';
                    e.target.style.background = 'transparent';
                  }}
                >
                  See Issues Fixed After This Analysis
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block">
              <img 
                src={mockData.images.hero} 
                alt="Funnel-IQ Analytics Dashboard showing conversion metrics, visitor flow analysis, and ROI improvement statistics" 
                className="rounded-2xl shadow-2xl"
                style={{ border: '1px solid rgba(218, 255, 1, 0.2)' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Trust Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {mockData.trustBadges.map((badge, idx) => {
              const IconComponent = { Users, Clock, TrendingUp, Shield }[badge.icon];
              return (
                <div key={idx} className="flex flex-col items-center gap-2 p-4" style={{ background: 'rgba(218, 255, 1, 0.05)', borderRadius: '12px' }}>
                  <IconComponent size={24} style={{ color: 'rgb(218, 255, 1)' }} />
                  <span className="text-sm font-medium text-center" style={{ color: 'rgb(218, 218, 218)' }}>{badge.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12" style={{ background: 'rgb(26, 28, 30)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: 'rgb(218, 255, 1)' }}>{mockData.stats.totalClients}+</div>
              <div className="text-sm mt-1" style={{ color: 'rgb(161, 161, 170)' }}>Funnels Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: 'rgb(218, 255, 1)' }}>{mockData.stats.roiIncrease}</div>
              <div className="text-sm mt-1" style={{ color: 'rgb(161, 161, 170)' }}>Avg. ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: 'rgb(218, 255, 1)' }}>{mockData.stats.deliveryTime}</div>
              <div className="text-sm mt-1" style={{ color: 'rgb(161, 161, 170)' }}>Delivery Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: 'rgb(218, 255, 1)' }}>{mockData.stats.avgConversionLift}</div>
              <div className="text-sm mt-1" style={{ color: 'rgb(161, 161, 170)' }}>Avg. Conversion Lift</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-xl text-center mb-16" style={{ color: 'rgb(161, 161, 170)' }}>Get your expert funnel audit in 3 simple steps</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.howItWorks.map((step, idx) => (
              <div 
                key={idx} 
                className="feature-card p-8 text-center relative"
                style={{ 
                  background: 'rgb(26, 28, 30)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgb(218, 255, 1)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full" style={{ background: 'rgba(218, 255, 1, 0.1)', border: '2px solid rgb(218, 255, 1)' }}>
                  <span className="text-2xl font-bold" style={{ color: 'rgb(218, 255, 1)' }}>{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p style={{ color: 'rgb(161, 161, 170)', lineHeight: '1.6' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-32" style={{ background: 'rgb(26, 28, 30)' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">What You Get</h2>
            <p className="text-xl text-center mb-16" style={{ color: 'rgb(161, 161, 170)' }}>Comprehensive audit designed to maximize your conversions</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-6"
                  style={{ 
                    background: 'rgb(38, 40, 42)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'rgb(218, 255, 1)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full" style={{ background: 'rgba(218, 255, 1, 0.1)', color: 'rgb(218, 255, 1)' }}>
                    {feature.metric}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm" style={{ color: 'rgb(161, 161, 170)', lineHeight: '1.6' }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Findings */}
      <section id="sample" className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Real Findings, Real Results</h2>
          <p className="text-xl text-center mb-16" style={{ color: 'rgb(161, 161, 170)' }}>Examples of issues we've found and fixed</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {mockData.sampleFindings.map((finding, idx) => (
              <div 
                key={idx}
                className="p-6"
                style={{ 
                  background: 'rgb(26, 28, 30)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(218, 255, 1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'rgb(239, 68, 68)' }}>Issue Found</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{finding.issue}</h3>
                <div className="text-2xl font-bold mb-3" style={{ color: 'rgb(239, 68, 68)' }}>{finding.stat}</div>
                <div className="pt-3" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <CheckCircle2 size={20} className="inline mr-2" style={{ color: 'rgb(218, 255, 1)' }} />
                  <span className="text-sm" style={{ color: 'rgb(161, 161, 170)' }}>{finding.fix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Stack Value Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">What You're Really Getting</h2>
          <p className="text-xl text-center mb-12" style={{ color: 'rgb(161, 161, 170)' }}>Total value worth <strong style={{ color: 'rgb(218, 255, 1)' }}>₹28,500+</strong> — You pay only ₹5,999</p>
          
          <div className="space-y-4">
            {[
              { item: '47-Point Expert Funnel Audit', value: '₹15,000', description: 'Deep analysis by conversion specialists with 10+ years experience' },
              { item: '30-50 Page Premium PDF Report', value: '₹8,000', description: 'Detailed insights with before/after examples and visual breakdowns' },
              { item: 'Prioritized 30-Day Action Plan', value: '₹3,500', description: 'Step-by-step roadmap ranked by impact vs. effort' },
              { item: '30-Minute Expert Consultation', value: '₹2,000', description: 'Optional call to discuss findings and clarify doubts' }
            ].map((offer, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-6 rounded-lg"
                style={{ background: 'rgb(26, 28, 30)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{offer.item}</h3>
                  <p className="text-sm" style={{ color: 'rgb(161, 161, 170)' }}>{offer.description}</p>
                </div>
                <div className="text-right ml-6">
                  <div className="text-xl font-bold" style={{ color: 'rgb(218, 255, 1)' }}>{offer.value}</div>
                </div>
              </div>
            ))}
            
            <div className="p-6 rounded-lg text-center" style={{ background: 'rgba(218, 255, 1, 0.1)', border: '2px solid rgb(218, 255, 1)' }}>
              <div className="text-sm mb-2" style={{ color: 'rgb(161, 161, 170)' }}>TOTAL VALUE</div>
              <div className="text-4xl font-bold mb-2">₹28,500</div>
              <div className="text-2xl" style={{ color: 'rgb(218, 255, 1)' }}>You Pay: <strong>₹5,999</strong></div>
              <div className="text-sm mt-2" style={{ color: 'rgb(161, 161, 170)' }}>Save ₹22,501 (79% OFF) — This month only</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-32" style={{ background: 'rgb(26, 28, 30)' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Limited Time Offer</h2>
            <p className="text-xl mb-8" style={{ color: 'rgb(161, 161, 170)' }}>Lock in 48% discount — {mockData.pricing.urgency}</p>
            
            <div className="p-8 md:p-12" style={{ background: 'rgb(38, 40, 42)', border: '2px solid rgb(218, 255, 1)', borderRadius: '16px' }}>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-2xl line-through" style={{ color: 'rgb(161, 161, 170)' }}>₹{mockData.pricing.regularPrice.toLocaleString()}</span>
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full" style={{ background: 'rgb(239, 68, 68)', color: 'white' }}>-{mockData.pricing.discount}% OFF</span>
                </div>
                <div className="text-6xl font-bold" style={{ color: 'rgb(218, 255, 1)' }}>₹{mockData.pricing.salePrice.toLocaleString()}</div>
                <div className="text-sm mt-2" style={{ color: 'rgb(161, 161, 170)' }}>One-time payment • No hidden fees</div>
              </div>

              <div className="mb-8 text-left space-y-3">
                {[
                  'Complete 47-point funnel audit',
                  '30-50 page premium PDF report',
                  'Prioritized 30-day action plan',
                  'Expert analysis in 8-10 hours',
                  'Optional 30-min consultation call',
                  '100% money-back guarantee'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" style={{ color: 'rgb(218, 255, 1)' }} />
                    <span style={{ color: 'rgb(218, 218, 218)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/checkout"
                className="btn-primary w-full block"
                style={{
                  background: 'rgb(218, 255, 1)',
                  color: 'rgb(17, 17, 19)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '20px 40px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgb(166, 190, 21)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(218, 255, 1, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgb(218, 255, 1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="text-lg md:text-xl">Get My FunnelIQ Audit Now</span>
                <span style={{ fontSize: '12px', opacity: 0.85, textAlign: 'center', whiteSpace: 'normal' }}>Start fixing your funnel in 8-10 hours</span>
              </Link>

              <div className="mt-6 grid grid-cols-2 md:flex md:items-center md:justify-center gap-4 md:gap-6 text-xs md:text-sm" style={{ color: 'rgb(161, 161, 170)' }}>
                {mockData.guarantees.map((guarantee, idx) => (
                  <div key={idx} className="flex items-center gap-2 justify-center md:justify-start p-3 md:p-0 rounded-lg md:rounded-none" style={{ background: 'rgba(218, 255, 1, 0.05)', border: '1px solid rgba(218, 255, 1, 0.1)' }}>
                    <Shield size={16} style={{ color: 'rgb(218, 255, 1)' }} className="flex-shrink-0" />
                    <span className="text-center md:text-left">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <Clock size={20} className="inline mr-2" style={{ color: 'rgb(239, 68, 68)' }} />
              <span style={{ color: 'rgb(239, 68, 68)', fontWeight: '600' }}>Offer ends this month — Price increases to ₹11,499 next month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-xl text-center mb-16" style={{ color: 'rgb(161, 161, 170)' }}>Real results from real businesses across industries</p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockData.testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="p-6"
                style={{ 
                  background: 'rgb(26, 28, 30)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(218, 255, 1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Avatar with Initials */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                    style={{ background: 'rgba(218, 255, 1, 0.15)', color: 'rgb(218, 255, 1)', border: '2px solid rgba(218, 255, 1, 0.3)' }}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="rgb(218, 255, 1)" style={{ color: 'rgb(218, 255, 1)' }} />
                    ))}
                  </div>
                </div>
                <p className="mb-6 text-sm" style={{ color: 'rgb(218, 218, 218)', lineHeight: '1.6' }}>"{testimonial.quote}"</p>
                <div className="pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm" style={{ color: 'rgb(161, 161, 170)' }}>{testimonial.title}</div>
                  <div className="mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ background: 'rgba(218, 255, 1, 0.1)', color: 'rgb(218, 255, 1)' }}>
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32" style={{ background: 'rgb(26, 28, 30)' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-center mb-16" style={{ color: 'rgb(161, 161, 170)' }}>Everything you need to know</p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {mockData.faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="border rounded-lg px-6"
                  style={{ 
                    background: 'rgb(38, 40, 42)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6" style={{ color: 'rgb(161, 161, 170)', lineHeight: '1.6' }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ background: 'rgb(26, 28, 30)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src={mockData.brand.logo} alt="Funnel-IQ" className="h-16 w-auto mb-4" />
              <p className="mb-6" style={{ color: 'rgb(161, 161, 170)' }}>{mockData.brand.slogan}</p>
              <p className="text-sm mb-4" style={{ color: 'rgb(161, 161, 170)', lineHeight: '1.6' }}>
                Expert funnel audits delivered in 8-10 hours. We analyze your entire conversion funnel and provide actionable insights to maximize ROI.
              </p>
              <p className="text-sm" style={{ color: 'rgb(161, 161, 170)' }}>
                Contact: <a href={`mailto:${mockData.supportEmail}`} className="underline transition-colors" style={{ color: 'rgb(218, 255, 1)' }}>{mockData.supportEmail}</a>
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="transition-colors" style={{ color: 'rgb(161, 161, 170)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(218, 255, 1)'} onMouseLeave={(e) => e.target.style.color = 'rgb(161, 161, 170)'}>Features</a></li>
                <li><a href="#how-it-works" className="transition-colors" style={{ color: 'rgb(161, 161, 170)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(218, 255, 1)'} onMouseLeave={(e) => e.target.style.color = 'rgb(161, 161, 170)'}>How It Works</a></li>
                <li><a href="#pricing" className="transition-colors" style={{ color: 'rgb(161, 161, 170)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(218, 255, 1)'} onMouseLeave={(e) => e.target.style.color = 'rgb(161, 161, 170)'}>Pricing</a></li>
                <li><a href="#faq" className="transition-colors" style={{ color: 'rgb(161, 161, 170)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(218, 255, 1)'} onMouseLeave={(e) => e.target.style.color = 'rgb(161, 161, 170)'}>FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/privacy-policy" className="transition-colors" style={{ color: 'rgb(161, 161, 170)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(218, 255, 1)'} onMouseLeave={(e) => e.target.style.color = 'rgb(161, 161, 170)'}>Privacy Policy</Link></li>
                <li><Link to="/terms-of-use" className="transition-colors" style={{ color: 'rgb(161, 161, 170)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(218, 255, 1)'} onMouseLeave={(e) => e.target.style.color = 'rgb(161, 161, 170)'}>Terms of Use</Link></li>
                <li><Link to="/refund-policy" className="transition-colors" style={{ color: 'rgb(161, 161, 170)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(218, 255, 1)'} onMouseLeave={(e) => e.target.style.color = 'rgb(161, 161, 170)'}>Refund Policy</Link></li>
                <li><a href={`mailto:${mockData.supportEmail}`} className="transition-colors" style={{ color: 'rgb(161, 161, 170)' }} onMouseEnter={(e) => e.target.style.color = 'rgb(218, 255, 1)'} onMouseLeave={(e) => e.target.style.color = 'rgb(161, 161, 170)'}>Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 text-center text-sm" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: 'rgb(161, 161, 170)' }}>
            <p className="mb-4">© 2026 Funnel-IQ by aykaa.me. All rights reserved. • GDPR Compliant • Secure Payments via Razorpay</p>
            
            {/* Disclaimer */}
            <div className="mt-8 pt-6 text-xs" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: 'rgb(120, 120, 120)', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto' }}>
              <p>
                <strong>DISCLAIMER:</strong> This website is not affiliated with or endorsed by Facebook™, Google™, LinkedIn™, or any third-party platforms. All trademarks and brand names are property of their respective owners and used for identification purposes only. Results and performance metrics shown are based on past client experiences and do not guarantee future outcomes. Individual results may vary based on implementation, market conditions, and business-specific factors. Funnel-IQ provides analysis and recommendations; actual conversion rates and revenue increases depend on proper implementation and various external factors beyond our control.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
