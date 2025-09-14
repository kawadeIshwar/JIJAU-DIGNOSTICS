import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageCarousel from '../ui/ImageCarousel'
import Logo from '../assets/Logo.jpg'

export default function Home(){
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    city: '',
    testType: ''
  })

  // Add custom CSS for wiggle rotation animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes wiggle-rotate {
        0% { transform: rotate(5deg); }
        25% { transform: rotate(0deg); }
        50% { transform: rotate(-5deg); }
        75% { transform: rotate(0deg); }
        100% { transform: rotate(5deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    // Handle booking submission
    alert('Booking request submitted! We will call you shortly.')
    setBookingForm({ name: '', phone: '', city: '', testType: '' })
  }

  const popularTests = [
    { name: 'Complete Blood Count (CBC)', price: '₹360', code: 'CBC001' },
    { name: 'Liver Function Test (LFT)', price: '₹700', code: 'LFT001' },
    { name: 'Thyroid Stimulating Hormone (TSH)', price: '₹400', code: 'TSH001' },
    { name: 'C-reactive Protein (CRP)', price: '₹400', code: 'CRP001' },
    { name: 'HbA1C (Diabetes)', price: '₹600', code: 'HBA001' },
    { name: 'Lipid Profile', price: '₹650', code: 'LIP001' }
  ]

  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
        {/* Header */}
        <header className="shadow-xl sticky top-0 z-50 backdrop-blur-md border-b border-purple-200" style={{backgroundColor: '#642EAA'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src={Logo}  
                  alt="JIJAU Pathology Laboratory" 
                  className="h-20 w-auto"
                />
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-white hover:text-yellow-300 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg">Home</Link>
                <Link to="/tests" className="text-white hover:text-yellow-300 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/20 rounded-lg">Tests</Link>
                <Link to="/login" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Login</Link>
              </div>
          </nav>
            <div className="md:hidden">
              <Link to="/login" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">Login</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #642EAA 0%, #7F55B1 25%, #8B5CF6 50%, #A855F7 75%, #C084FC 100%)'}}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
              
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Your Health, 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"> Our Priority</span>
                </h1>
                <p className="text-xl text-purple-100 leading-relaxed">
                  Get accurate diagnostic results from the comfort of your home. 
                  Our certified lab technicians ensure precision, speed, and reliability.
                </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">99.8%</div>
                  <div className="text-sm text-purple-200">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">6hrs</div>
                  <div className="text-sm text-purple-200">Report Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-purple-200">Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Book Test Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300">
                  View All Tests
                </button>
              </div>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="order-first lg:order-last">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{backgroundColor: '#E8D5F2', color: '#642EAA'}}>
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#642EAA'}}></span>
              Quick & Easy Booking
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Schedule Your Test Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get professional diagnostic services at your doorstep. Our certified technicians will visit you within 2 hours of booking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Home Sample Collection</h4>
                      <p className="text-gray-600">Professional phlebotomists visit your home</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Results</h4>
                      <p className="text-gray-600">Get reports within 6 hours online</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Certified Lab</h4>
                      <p className="text-gray-600">NABL accredited laboratory</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <div className="text-2xl font-bold" style={{color: '#642EAA'}}>50K+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg text-center">
                  <div className="text-2xl font-bold" style={{color: '#642EAA'}}>99.8%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Test</h3>
                <p className="text-gray-600">Fill the form and we'll call you within 15 minutes</p>
              </div>
              
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Test Type</label>
                  <select
                    value={bookingForm.testType}
                    onChange={(e) => setBookingForm({...bookingForm, testType: e.target.value})}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                  >
                  <option value="">Select test type</option>
                  <option value="cbc">Complete Blood Count</option>
                  <option value="lft">Liver Function Test</option>
                  <option value="thyroid">Thyroid Test</option>
                  <option value="diabetes">Diabetes Panel</option>
                  <option value="lipid">Lipid Profile</option>
                  <option value="other">Other</option>
                </select>
              </div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  style={{backgroundColor: '#642EAA'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#4A1F7A'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#642EAA'}
                >
                  Request Call Back
                </button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  *All fields are mandatory. Home sample collection charges will be applicable.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-6" style={{backgroundColor: '#E8D5F2', color: '#642EAA'}}>
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#642EAA'}}></span>
              Comprehensive Health Packages
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Health Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our carefully designed health packages that offer complete diagnostic solutions at affordable prices. 
              All packages include home sample collection and fast report delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* JIJAU ACTIVE CARE */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl border border-purple-100 h-full flex flex-col group">
              <div className="px-6 py-6" style={{backgroundColor: '#642EAA'}}>
                <h3 className="text-xl font-bold text-white uppercase">JIJAU ACTIVE CARE</h3>
                <p className="text-purple-100 text-sm mt-1">72 Comprehensive Tests</p>
              </div>
              
              <div className="p-6 bg-gray-50 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <div className="text-gray-600 line-through mb-2">MRP: ₹3,180/-</div>
                  <div className="relative">
                    <div className="text-white px-6 py-3 rounded-full shadow-lg" style={{backgroundColor: '#642EAA', animation: 'wiggle-rotate 3s ease-in-out infinite'}}>
                      <span className="text-yellow-300 font-bold text-lg">Offer Price ₹999/-</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    COMPLETE BLOOD COUNT+PBS
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    ESR ERYTHROCYTE SEDIMENTATION RATE
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    BLOOD SUGAR FASTING & PP (BSF & PP)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    RENAL FUNCTION TEST (RFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    LIVER FUNCTION TEST (LFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    LIPID PROFILE
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    TOTAL CALCIUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    HbA1c: GLYCOSYLATED HEMOGLOBIN BY HPLC
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    THYROID STIMULATING HORMONE (TSH)-SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    URINE ROUTINE
                  </div>
                </div>
                
                <button className="w-full text-white py-3 rounded-lg font-semibold transition-colors" style={{backgroundColor: '#642EAA'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A1F7A'} onMouseLeave={(e) => e.target.style.backgroundColor = '#642EAA'}>
                  Book Package
                </button>
              </div>
            </div>

            {/* JIJAU ACTIVE CARE + */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 relative h-full flex flex-col">
              <div className="absolute top-2 right-2 text-white px-2 py-1 rounded text-xs font-bold bg-green-500 anima">
                MOST POPULAR
              </div>
              <div className="px-6 py-4" style={{backgroundColor: '#642EAA'}}>
                <h3 className="text-xl font-bold text-white uppercase">JIJAU ACTIVE CARE +</h3>
                <p className="text-white text-sm mt-1">95 Test</p>
              </div>
              
              <div className="p-6 bg-gray-50 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <div className="text-gray-600 line-through mb-2">MRP: ₹4,930/-</div>
                  <div className="relative">
                    <div className="text-white px-6 py-3 rounded-full shadow-lg" style={{backgroundColor: '#642EAA', animation: 'wiggle-rotate 3s ease-in-out infinite'}}>
                      <span className="text-yellow-300 font-bold text-lg">Offer Price ₹1,799/-</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    COMPLETE BLOOD COUNT +PBS
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    ESR-ERYTHROCYTE SEDIMENTATION RATE
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    BLOOD SUGAR FASTING & PP (BSF & PP)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    RENAL FUNCTION TEST (RFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    LIVER FUNCTION TEST (LFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    LIPID PROFILE
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    TOTAL CALCIUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    HbA1c: GLYCOSYLATED HEMOGLOBIN BY HPLC
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    Thyroid Function Test (TFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    VITAMIN B12 - SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    VITAMIN D-TOTAL (25-OH-VIT D)-SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    URINE ROUTINE
                  </div>
                </div>
                
                <button className="w-full text-white py-3 rounded-lg font-semibold transition-colors" style={{backgroundColor: '#642EAA'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A1F7A'} onMouseLeave={(e) => e.target.style.backgroundColor = '#642EAA'}>
                  Book Package
                </button>
              </div>
            </div>

            {/* JIJAU WOMEN'S CARE */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="px-6 py-4" style={{backgroundColor: '#642EAA'}}>
                <h3 className="text-xl font-bold text-white uppercase">JIJAU WOMEN'S CARE</h3>
                <p className="text-white text-sm mt-1">157 Test</p>
              </div>
              
              <div className="p-6 bg-gray-50 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <div className="text-gray-600 line-through mb-2">MRP: ₹5,730/-</div>
                  <div className="relative">
                    <div className="text-white px-6 py-3 rounded-full shadow-lg" style={{backgroundColor: '#642EAA', animation: 'wiggle-rotate 3s ease-in-out infinite'}}>
                      <span className="text-yellow-300 font-bold text-lg">Offer Price ₹2,400/-</span>
                    </div>
                  </div>
                </div>
                 
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    BLOOD SUGAR FASTING & PP (BSF & PP)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    HbA1c: GLYCOSYLATED HEMOGLOBIN BY HPLC
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    RENAL FUNCTION TEST (RFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    LIVER FUNCTION TEST (LFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    LIPID PROFILE
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    TOTAL CALCIUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    IRON STUDIES
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    Thyroid Function Test (TFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    FSH (FOLLICLE STIMULATING HORMONE)-SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    LH (LEUTNISING HRMONE)-SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    PROLACTIN-SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#642EAA'}}>→</span>
                    VITAMIN B12 + VITAMIN D.TOTAL - SERUM
                  </div>
                </div>
                
                <button className="w-full text-white py-3 rounded-lg font-semibold transition-colors" style={{backgroundColor: '#642EAA'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A1F7A'} onMouseLeave={(e) => e.target.style.backgroundColor = '#642EAA'}>
                  Book Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Diagnostic Tests Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">BLOOD TESTS OVERVIEW</h2>
            <p className="text-lg text-secondary-600">Explore our comprehensive range of diagnostic test categories</p>
          </div>
          
          <div className="space-y-4">
            {/* Hematology */}
            <div className="rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105" style={{background: 'linear-gradient(90deg, #7F55B1 0%, #6B46A3 100%)'}}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Hematology</h3>
                <svg className="w-6 h-6 text-white transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Biochemistry */}
            <div className="rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105" style={{background: 'linear-gradient(90deg, #7F55B1 0%, #6B46A3 100%)'}}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Biochemistry</h3>
                <svg className="w-6 h-6 text-white transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Serology */}
            <div className="rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105" style={{background: 'linear-gradient(90deg, #7F55B1 0%, #6B46A3 100%)'}}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Serology</h3>
                <svg className="w-6 h-6 text-white transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Clinical Pathology */}
            <div className="rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105" style={{background: 'linear-gradient(90deg, #7F55B1 0%, #6B46A3 100%)'}}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Clinical Pathology</h3>
                <svg className="w-6 h-6 text-white transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Histopathology */}
            <div className="rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105" style={{background: 'linear-gradient(90deg, #7F55B1 0%, #6B46A3 100%)'}}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Histopathology</h3>
                <svg className="w-6 h-6 text-white transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tests */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Popular Tests</h2>
            <p className="text-lg text-secondary-600">Choose from our wide range of diagnostic tests</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTests.map((test, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-secondary-900">{test.name}</h3>
                  <span className="font-bold" style={{color: '#7F55B1'}}>{test.price}</span>
                </div>
                <p className="text-sm text-secondary-600 mb-4">Test Code: {test.code}</p>
                <div className="flex gap-2">
                  <button className="flex-1 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors" style={{backgroundColor: '#7F55B1'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#6B46A3'} onMouseLeave={(e) => e.target.style.backgroundColor = '#7F55B1'}>
                    Book Now
                  </button>
                  <button className="flex-1 border py-2 px-4 rounded-lg text-sm font-medium transition-colors" style={{borderColor: '#7F55B1', color: '#7F55B1'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#7F55B1'; e.target.style.color = 'white'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#7F55B1'}}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Why Choose JIJAU Diagnostics?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Trained Phlebotomists</h3>
              <p className="text-secondary-600">Skilled professionals ensure safe and comfortable sample collection</p>
            </div>
            
            <div className="text-center">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">100% Hygienic</h3>
              <p className="text-secondary-600">Strict hygiene protocols and sanitized equipment for every collection</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Quick Collection</h3>
              <p className="text-secondary-600">Sample collection within 30 minutes of booking confirmation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Home Visits Till 7PM</h3>
              <p className="text-secondary-600">Flexible timing to accommodate your busy schedule</p>
            </div>
          </div>
        </div>
        </section>

      {/* Process */}
      <section className="py-16" style={{background: 'linear-gradient(90deg, #f0e6ff 0%, #e6d9ff 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Here's How The Process Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{backgroundColor: '#7F55B1'}}>1</div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Give us a call</h3>
              <p className="text-secondary-600">Call us or fill the booking form to schedule your test</p>
            </div>
            
            <div className="text-center">
              <div className="text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{backgroundColor: '#7F55B1'}}>2</div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Provide address and time</h3>
              <p className="text-secondary-600">Share your address and preferred time slot</p>
            </div>
            
            <div className="text-center">
              <div className="text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{backgroundColor: '#7F55B1'}}>3</div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Sample collection</h3>
              <p className="text-secondary-600">Our phlebotomist arrives for sample collection</p>
            </div>
            
            <div className="text-center">
              <div className="text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{backgroundColor: '#7F55B1'}}>4</div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Lab processing</h3>
              <p className="text-secondary-600">Sample transported to lab and processed</p>
            </div>
            
            <div className="text-center">
              <div className="text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{backgroundColor: '#7F55B1'}}>5</div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Reports available</h3>
              <p className="text-secondary-600">Get your reports online within 6 hours</p>
            </div>
          </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="text-white py-16" style={{background: 'linear-gradient(135deg, #642EAA 0%, #4A1F7A 50%, #2D1B69 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JIJAU DIAGNOSTICS</h3>
              <p className="text-secondary-300 mb-4">Your trusted partner for accurate and reliable diagnostic services.</p>
              <div className="flex space-x-4">
                <div className="p-2 rounded" style={{backgroundColor: '#642EAA'}}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="p-2 rounded" style={{backgroundColor: '#642EAA'}}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-secondary-300">
                <li>Home Sample Collection</li>
                <li>Blood Tests</li>
                <li>Pathology Tests</li>
                <li>Health Checkups</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-secondary-300">
                <li><Link to="/tests" className="hover:text-white">All Tests</Link></li>
                <li><Link to="/login" className="hover:text-white">Login</Link></li>
                <li>Book Appointment</li>
                <li>Download Report</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-secondary-300">
                <p>📞 +91 98765 43210</p>
                <p>📧 info@jijaudiagnostics.com</p>
                <p>📍 Multiple locations across India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-300">
            <p>&copy; 2024 JIJAU Diagnostics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
