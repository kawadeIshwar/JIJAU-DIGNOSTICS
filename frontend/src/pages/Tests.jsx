import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { SimpleLogo } from '../ui/Logo'

export default function Tests(){
  const [tests, setTests] = useState([]);
  const [filteredTests, setFilteredTests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Mock data for tests (in case backend is not available)
  const mockTests = [
    { id: 1, name: 'Complete Blood Count (CBC)', price: 360, category: 'blood', info: 'Comprehensive blood analysis including red blood cells, white blood cells, and platelets', code: 'CBC001', fasting: false, reportTime: '6 hours' },
    { id: 2, name: 'Liver Function Test (LFT)', price: 700, category: 'organ', info: 'Assessment of liver health through various enzymes and proteins', code: 'LFT001', fasting: true, reportTime: '6 hours' },
    { id: 3, name: 'Thyroid Stimulating Hormone (TSH)', price: 400, category: 'hormone', info: 'Measures thyroid function and helps diagnose thyroid disorders', code: 'TSH001', fasting: false, reportTime: '6 hours' },
    { id: 4, name: 'C-reactive Protein (CRP)', price: 400, category: 'inflammatory', info: 'Measures inflammation levels in the body', code: 'CRP001', fasting: false, reportTime: '6 hours' },
    { id: 5, name: 'HbA1C (Diabetes)', price: 600, category: 'diabetes', info: 'Measures average blood sugar levels over the past 2-3 months', code: 'HBA001', fasting: false, reportTime: '6 hours' },
    { id: 6, name: 'Lipid Profile', price: 650, category: 'cardiac', info: 'Comprehensive cholesterol and lipid analysis', code: 'LIP001', fasting: true, reportTime: '6 hours' },
    { id: 7, name: 'Kidney Function Test (KFT)', price: 770, category: 'organ', info: 'Assessment of kidney health and function', code: 'KFT001', fasting: true, reportTime: '6 hours' },
    { id: 8, name: 'Vitamin D', price: 1200, category: 'vitamin', info: 'Measures vitamin D levels in the blood', code: 'VIT001', fasting: false, reportTime: '6 hours' },
    { id: 9, name: 'Iron Studies', price: 800, category: 'blood', info: 'Comprehensive iron level analysis', code: 'IRN001', fasting: true, reportTime: '6 hours' },
    { id: 10, name: 'Complete Urine Examination', price: 240, category: 'urine', info: 'Comprehensive urine analysis for various health indicators', code: 'UR001', fasting: false, reportTime: '6 hours' },
    { id: 11, name: 'Diabetes Basic Panel', price: 499, category: 'diabetes', info: 'Basic diabetes screening including glucose and HbA1C', code: 'DB001', fasting: true, reportTime: '6 hours' },
    { id: 12, name: 'Diabetes Advanced Panel', price: 999, category: 'diabetes', info: 'Comprehensive diabetes assessment with multiple parameters', code: 'DB002', fasting: true, reportTime: '6 hours' }
  ];

  const categories = [
    { value: 'all', label: 'All Tests' },
    { value: 'blood', label: 'Blood Tests' },
    { value: 'organ', label: 'Organ Function' },
    { value: 'hormone', label: 'Hormone Tests' },
    { value: 'diabetes', label: 'Diabetes' },
    { value: 'cardiac', label: 'Cardiac' },
    { value: 'vitamin', label: 'Vitamins' },
    { value: 'inflammatory', label: 'Inflammatory' },
    { value: 'urine', label: 'Urine Tests' }
  ];

  useEffect(() => {
    // Try to fetch from backend, fallback to mock data
    axios.get('http://localhost:5000/api/tests')
      .then(r => setTests(r.data))
      .catch(() => setTests(mockTests));
  }, []);

  useEffect(() => {
    let filtered = tests;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(test => 
        test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        test.info.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(test => test.category === selectedCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredTests(filtered);
  }, [tests, searchTerm, selectedCategory, sortBy]);

  const handleBookTest = (test) => {
    alert(`Booking ${test.name} for ₹${test.price}. We will contact you shortly!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-secondary-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-logo-vibrant to-logo-dark shadow-lg sticky top-0 z-50">
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
                <Link to="/tests" className="text-white px-3 py-2 text-sm font-medium border-b-2 border-white">Tests</Link>
                <Link to="/login" className="bg-white text-logo-vibrant hover:bg-purple-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Login</Link>
              </div>
            </nav>
            <div className="md:hidden">
              <Link to="/login" className="bg-white text-logo-vibrant px-3 py-2 rounded text-sm">Login</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Our Diagnostic Tests</h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of diagnostic tests. All tests include home sample collection 
            with results available within 6 hours.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Search Tests</label>
              <input
                type="text"
                placeholder="Search by test name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>{category.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map(test => (
            <div key={test.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-secondary-900">{test.name}</h3>
                <span className="text-primary-600 font-bold text-xl">₹{test.price}</span>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-secondary-600 mb-2">{test.info}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                    Code: {test.code}
                  </span>
                  <span className={`px-2 py-1 rounded-full ${test.fasting ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                    {test.fasting ? 'Fasting Required' : 'No Fasting'}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    Report: {test.reportTime}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => handleBookTest(test)}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                  Book Now
                </button>
                <button className="flex-1 border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <svg className="w-16 h-16 text-secondary-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.804-6.207-2.146M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">No tests found</h3>
              <p className="text-secondary-600">Try adjusting your search criteria or browse all tests.</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-logo-vibrant to-logo-dark rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Test?</h2>
          <p className="text-lg mb-6">Our health advisors are here to help you select the most appropriate tests for your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-logo-vibrant hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Us: +91 98765 43210
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-logo-vibrant px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Call Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
