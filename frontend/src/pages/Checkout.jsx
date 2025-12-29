import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, CheckCircle2, Clock } from 'lucide-react';
import axios from 'axios';
import { mockData } from '../mock';
import { getUTMParamsForAPI } from '../utils/utmTracker';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    countryCode: '+91',
    phone: '',
    website: ''
  });
  const [utmData, setUtmData] = useState(() => {
    // Initialize UTM data from storage on first render
    return getUTMParamsForAPI();
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Log UTM data on component mount
  useEffect(() => {
    console.log('UTM data for checkout:', utmData);
  }, [utmData]);

  const validateForm = () => {
    const newErrors = {};

    // Validate phone
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Validate website
    const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    if (!formData.website) {
      newErrors.website = 'Website URL is required';
    } else if (!urlRegex.test(formData.website)) {
      newErrors.website = 'Please enter a valid website URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      // Create order on backend with UTM data
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/create-order`, {
        amount: mockData.pricing.salePrice * 100, // Convert to paise
        currency: 'INR',
        phone: `${formData.countryCode}${formData.phone}`,
        website: formData.website,
        // Include UTM parameters
        ...utmData
      });

      const { order_id, amount, currency, key_id } = response.data;

      // Razorpay options
      const options = {
        key: key_id,
        amount: amount,
        currency: currency,
        name: 'Funnel-IQ',
        description: 'Expert Funnel Audit - 8-10 Hour Delivery',
        order_id: order_id,
        handler: async function (response) {
          try {
            // Verify payment on backend with UTM data
            const verifyResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              phone: `${formData.countryCode}${formData.phone}`,
              website: formData.website,
              amount: mockData.pricing.salePrice * 100,
              // Include UTM parameters
              ...utmData
            });

            if (verifyResponse.data.success) {
              // Store data in session storage for thank you page
              sessionStorage.setItem('orderData', JSON.stringify({
                phone: `${formData.countryCode}${formData.phone}`,
                website: formData.website,
                amount: mockData.pricing.salePrice,
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                timestamp: new Date().toISOString(),
                utm: utmData
              }));

              // Navigate to thank you page
              navigate('/thank-you');
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            alert('Payment verification failed. Please contact support.');
            setIsProcessing(false);
          }
        },
        prefill: {
          contact: `${formData.countryCode}${formData.phone}`
        },
        theme: {
          color: '#DAFF01'
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to initiate payment. Please try again.');
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'rgb(17, 17, 19)', color: 'rgb(255, 255, 255)' }}>
      {/* Header */}
      <header className="py-6" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={mockData.brand.logo} alt="Funnel-IQ" className="h-16 w-auto" />
            </Link>
            <div className="flex items-center gap-2" style={{ color: 'rgb(161, 161, 170)' }}>
              <Lock size={16} />
              <span className="text-sm">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
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

          {/* Urgency Banner */}
          <div className="mb-8 p-4 rounded-lg text-center" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock size={20} style={{ color: 'rgb(239, 68, 68)' }} />
              <span style={{ color: 'rgb(239, 68, 68)', fontWeight: '600', fontSize: '18px' }}>⚡ Few slots available for today</span>
            </div>
            <p className="text-sm" style={{ color: 'rgb(218, 218, 218)' }}>Limited capacity to maintain quality. Price increases to ₹11,499 next month.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Start Your FunnelIQ Audit</h1>
              <p className="mb-8" style={{ color: 'rgb(161, 161, 170)' }}>Expert analysis delivered in {mockData.stats.deliveryTime}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp Phone Number</label>
                  <div className="flex gap-3">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="input-field w-24"
                      style={{
                        background: 'rgb(26, 28, 30)',
                        border: '2px solid rgb(63, 63, 63)',
                        borderRadius: '12px',
                        padding: '16px 12px',
                        fontSize: '16px',
                        color: 'rgb(255, 255, 255)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+971">+971</option>
                    </select>
                    <div className="flex-1">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className="input-field w-full"
                        style={{
                          background: 'rgb(26, 28, 30)',
                          border: errors.phone ? '2px solid rgb(239, 68, 68)' : '2px solid rgb(63, 63, 63)',
                          borderRadius: '12px',
                          padding: '16px 20px',
                          fontSize: '16px',
                          color: 'rgb(255, 255, 255)',
                          transition: 'all 0.2s ease'
                        }}
                        onFocus={(e) => {
                          if (!errors.phone) {
                            e.target.style.borderColor = 'rgb(218, 255, 1)';
                            e.target.style.boxShadow = '0 0 0 4px rgba(218, 255, 1, 0.1)';
                          }
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.phone ? 'rgb(239, 68, 68)' : 'rgb(63, 63, 63)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-sm mt-2" style={{ color: 'rgb(239, 68, 68)' }}>{errors.phone}</p>
                  )}
                  <p className="text-xs mt-2" style={{ color: 'rgb(161, 161, 170)' }}>We'll send your report via WhatsApp. We never share your number.</p>
                </div>

                {/* Website URL */}
                <div>
                  <label className="block text-sm font-medium mb-2">Website URL</label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                    className="input-field w-full"
                    style={{
                      background: 'rgb(26, 28, 30)',
                      border: errors.website ? '2px solid rgb(239, 68, 68)' : '2px solid rgb(63, 63, 63)',
                      borderRadius: '12px',
                      padding: '16px 20px',
                      fontSize: '16px',
                      color: 'rgb(255, 255, 255)',
                      transition: 'all 0.2s ease'
                    }}
                    onFocus={(e) => {
                      if (!errors.website) {
                        e.target.style.borderColor = 'rgb(218, 255, 1)';
                        e.target.style.boxShadow = '0 0 0 4px rgba(218, 255, 1, 0.1)';
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.website ? 'rgb(239, 68, 68)' : 'rgb(63, 63, 63)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  {errors.website && (
                    <p className="text-sm mt-2" style={{ color: 'rgb(239, 68, 68)' }}>{errors.website}</p>
                  )}
                  <p className="text-xs mt-2" style={{ color: 'rgb(161, 161, 170)' }}>Enter your website or landing page URL</p>
                </div>

                {/* Submit Button with Subtext */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn-primary w-full"
                  style={{
                    background: isProcessing ? 'rgb(161, 161, 170)' : 'rgb(218, 255, 1)',
                    color: 'rgb(17, 17, 19)',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '20px 40px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: isProcessing ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isProcessing) {
                      e.currentTarget.style.background = 'rgb(166, 190, 21)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(218, 255, 1, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isProcessing) {
                      e.currentTarget.style.background = 'rgb(218, 255, 1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg md:text-xl">Pay ₹{mockData.pricing.salePrice.toLocaleString()} & Get Audit</span>
                      <span style={{ fontSize: '12px', opacity: 0.85, textAlign: 'center', whiteSpace: 'normal' }}>Get your report in 8-10 hours • Risk-free guarantee</span>
                    </>
                  )}
                </button>

                {/* Security badges */}
                <div className="flex items-center justify-center gap-6 pt-4 text-xs" style={{ color: 'rgb(161, 161, 170)' }}>
                  <div className="flex items-center gap-2">
                    <Shield size={14} style={{ color: 'rgb(218, 255, 1)' }} />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock size={14} style={{ color: 'rgb(218, 255, 1)' }} />
                    <span>Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} style={{ color: 'rgb(218, 255, 1)' }} />
                    <span>Money-back Guarantee</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <div className="p-8" style={{ background: 'rgb(26, 28, 30)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', position: 'sticky', top: '24px' }}>
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span style={{ color: 'rgb(161, 161, 170)' }}>FunnelIQ Audit</span>
                    <span className="line-through" style={{ color: 'rgb(161, 161, 170)' }}>₹{mockData.pricing.regularPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: 'rgb(161, 161, 170)' }}>Discount ({mockData.pricing.discount}% OFF)</span>
                    <span style={{ color: 'rgb(34, 197, 94)' }}>-₹{(mockData.pricing.regularPrice - mockData.pricing.salePrice).toLocaleString()}</span>
                  </div>
                  <div className="pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold" style={{ color: 'rgb(218, 255, 1)' }}>₹{mockData.pricing.salePrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold">What You'll Receive:</h3>
                  <ul className="space-y-3">
                    {[
                      '47-point conversion audit',
                      '30-50 page premium PDF',
                      '30-day action roadmap',
                      'Delivered in 8-10 hours',
                      'Expert human analysis',
                      '100% money-back guarantee'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'rgb(218, 255, 1)' }} />
                        <span className="text-sm" style={{ color: 'rgb(218, 218, 218)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg" style={{ background: 'rgba(218, 255, 1, 0.1)', border: '1px solid rgba(218, 255, 1, 0.2)' }}>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="flex-shrink-0" style={{ color: 'rgb(218, 255, 1)' }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'rgb(218, 255, 1)' }}>Limited Time Offer</p>
                      <p className="text-xs" style={{ color: 'rgb(161, 161, 170)' }}>This ₹5,999 price is only available this month. Regular price: ₹11,499</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center text-sm" style={{ color: 'rgb(161, 161, 170)' }}>
            <p>© 2026 Funnel-IQ by aykaa.me. Secure payments powered by Razorpay.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
