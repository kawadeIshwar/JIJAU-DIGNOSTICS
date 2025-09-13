import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageCarousel from '../ui/ImageCarousel'
import { SimpleLogo } from '../ui/Logo'

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="shadow-lg sticky top-0 z-50" style={{background: 'linear-gradient(90deg, #7F55B1 0%, #6B46A3 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <SimpleLogo />
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-white hover:text-purple-200 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                <Link to="/tests" className="text-white hover:text-purple-200 px-3 py-2 text-sm font-medium transition-colors">Tests</Link>
                <Link to="/login" className="bg-white text-logo-vibrant hover:bg-purple-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Login</Link>
              </div>
          </nav>
            <div className="md:hidden">
              <Link to="/login" className="bg-white text-logo-vibrant px-3 py-2 rounded text-sm">Login</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Sliding Images */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ImageCarousel />
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Schedule Your Test Today</h2>
            <p className="text-lg text-secondary-600">We are just a call away! Fill the form below and we'll contact you.</p>
          </div>
          
          <div className="rounded-2xl p-8 shadow-lg" style={{background: 'linear-gradient(90deg, #f0e6ff 0%, #e6d9ff 100%)'}}>
            <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:border-transparent" style={{'--tw-ring-color': '#7F55B1'}} onFocus={(e) => e.target.style.setProperty('--tw-ring-color', '#7F55B1')}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:border-transparent" style={{'--tw-ring-color': '#7F55B1'}} onFocus={(e) => e.target.style.setProperty('--tw-ring-color', '#7F55B1')}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">City *</label>
                <select
                  required
                  value={bookingForm.city}
                  onChange={(e) => setBookingForm({...bookingForm, city: e.target.value})}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:border-transparent" style={{'--tw-ring-color': '#7F55B1'}} onFocus={(e) => e.target.style.setProperty('--tw-ring-color', '#7F55B1')}
                >
                  <option value="">Select your city</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                  <option value="kolkata">Kolkata</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Test Type</label>
                <select
                  value={bookingForm.testType}
                  onChange={(e) => setBookingForm({...bookingForm, testType: e.target.value})}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:border-transparent" style={{'--tw-ring-color': '#7F55B1'}} onFocus={(e) => e.target.style.setProperty('--tw-ring-color', '#7F55B1')}
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
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg text-lg font-semibold transition-colors" style={{backgroundColor: '#7F55B1'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#6B46A3'} onMouseLeave={(e) => e.target.style.backgroundColor = '#7F55B1'}
                >
                  Request Call Back
                </button>
                <p className="text-sm text-secondary-500 mt-2 text-center">
                  *All fields are mandatory. Home sample collection charges will be applicable.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="py-16 relative overflow-hidden bg-purple-200" >
        {/* Watermark */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-6xl font-bold">
            JIJAU PATHOLOGY LABORATORY
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Packages</h2>
            <p className="text-lg text-gray-700">Comprehensive health checkup packages at unbeatable prices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* JIJAU ACTIVE CARE */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="px-6 py-4" style={{backgroundColor: '#7F55B1'}}>
                <h3 className="text-xl font-bold text-white uppercase">JIJAU ACTIVE CARE</h3>
                <p className="text-white text-sm mt-1">72 Test</p>
              </div>
              
              <div className="p-6 bg-gray-50 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <div className="text-gray-600 line-through mb-2">MRP: ₹3,180/-</div>
                  <div className="relative">
                    <div className="text-white px-6 py-3 rounded-full shadow-lg" style={{backgroundColor: '#7F55B1', animation: 'wiggle-rotate 2s ease-in-out infinite'}}>
                      <span className="text-yellow-300 font-bold text-lg">Offer Price ₹999/-</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    COMPLETE BLOOD COUNT+PBS
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    ESR ERYTHROCYTE SEDIMENTATION RATE
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    BLOOD SUGAR FASTING & PP (BSF & PP)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    RENAL FUNCTION TEST (RFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    LIVER FUNCTION TEST (LFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    LIPID PROFILE
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    TOTAL CALCIUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    HbA1c: GLYCOSYLATED HEMOGLOBIN BY HPLC
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    THYROID STIMULATING HORMONE (TSH)-SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    URINE ROUTINE
                  </div>
                </div>
                
                <button className="w-full text-white py-3 rounded-lg font-semibold transition-colors" style={{backgroundColor: '#7F55B1'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#6B46A3'} onMouseLeave={(e) => e.target.style.backgroundColor = '#7F55B1'}>
                  Book Package
                </button>
              </div>
            </div>

            {/* JIJAU ACTIVE CARE + */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 relative h-full flex flex-col">
              <div className="absolute top-2 right-2 text-white px-2 py-1 rounded text-xs font-bold bg-green-500">
                MOST POPULAR
              </div>
              <div className="px-6 py-4" style={{backgroundColor: '#7F55B1'}}>
                <h3 className="text-xl font-bold text-white uppercase">JIJAU ACTIVE CARE +</h3>
                <p className="text-white text-sm mt-1">95 Test</p>
              </div>
              
              <div className="p-6 bg-gray-50 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <div className="text-gray-600 line-through mb-2">MRP: ₹4,930/-</div>
                  <div className="relative">
                    <div className="text-white px-6 py-3 rounded-full shadow-lg" style={{backgroundColor: '#7F55B1', animation: 'wiggle-rotate 2s ease-in-out infinite'}}>
                      <span className="text-yellow-300 font-bold text-lg">Offer Price ₹1,799/-</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    COMPLETE BLOOD COUNT +PBS
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    ESR-ERYTHROCYTE SEDIMENTATION RATE
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    BLOOD SUGAR FASTING & PP (BSF & PP)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    RENAL FUNCTION TEST (RFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    LIVER FUNCTION TEST (LFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    LIPID PROFILE
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    TOTAL CALCIUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    HbA1c: GLYCOSYLATED HEMOGLOBIN BY HPLC
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    Thyroid Function Test (TFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    VITAMIN B12 - SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    VITAMIN D-TOTAL (25-OH-VIT D)-SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    URINE ROUTINE
                  </div>
                </div>
                
                <button className="w-full text-white py-3 rounded-lg font-semibold transition-colors" style={{backgroundColor: '#7F55B1'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#6B46A3'} onMouseLeave={(e) => e.target.style.backgroundColor = '#7F55B1'}>
                  Book Package
                </button>
              </div>
            </div>

            {/* JIJAU WOMEN'S CARE */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="px-6 py-4" style={{backgroundColor: '#7F55B1'}}>
                <h3 className="text-xl font-bold text-white uppercase">JIJAU WOMEN'S CARE</h3>
                <p className="text-white text-sm mt-1">157 Test</p>
              </div>
              
              <div className="p-6 bg-gray-50 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <div className="text-gray-600 line-through mb-2">MRP: ₹2,400/-</div>
                  <div className="relative">
                    <div className="text-white px-6 py-3 rounded-full shadow-lg" style={{backgroundColor: '#7F55B1', animation: 'wiggle-rotate 2s ease-in-out infinite'}}>
                      <span className="text-yellow-300 font-bold text-lg">Offer Price ₹1,730/-</span>
                    </div>
                  </div>
                </div>
                 
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    BLOOD SUGAR FASTING & PP (BSF & PP)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    HbA1c: GLYCOSYLATED HEMOGLOBIN BY HPLC
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    RENAL FUNCTION TEST (RFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    LIVER FUNCTION TEST (LFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    LIPID PROFILE
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    TOTAL CALCIUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    IRON STUDIES
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    Thyroid Function Test (TFT)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    FSH (FOLLICLE STIMULATING HORMONE)-SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    LH (LEUTNISING HRMONE)-SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    PROLACTIN-SERUM
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2" style={{color: '#7F55B1'}}>→</span>
                    VITAMIN B12 + VITAMIN D.TOTAL - SERUM
                  </div>
                </div>
                
                <button className="w-full text-white py-3 rounded-lg font-semibold transition-colors" style={{backgroundColor: '#7F55B1'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#6B46A3'} onMouseLeave={(e) => e.target.style.backgroundColor = '#7F55B1'}>
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
      <footer className="bg-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JIJAU DIAGNOSTICS</h3>
              <p className="text-secondary-300 mb-4">Your trusted partner for accurate and reliable diagnostic services.</p>
              <div className="flex space-x-4">
                <div className="p-2 rounded" style={{backgroundColor: '#7F55B1'}}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="p-2 rounded" style={{backgroundColor: '#7F55B1'}}>
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
