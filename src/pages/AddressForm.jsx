import { useState } from 'react';

export default function AddressForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    country: '',
    state: '',
    city: '',
    street: '',
    pinCode: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];
  const states = {
    India: ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat'],
    USA: ['California', 'Texas', 'New York', 'Florida'],
    UK: ['England', 'Scotland', 'Wales'],
    Canada: ['Ontario', 'Quebec', 'British Columbia'],
    Australia: ['New South Wales', 'Victoria', 'Queensland']
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = 'Enter valid 10-digit number';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.street.trim()) newErrors.street = 'Street address is required';
    if (!formData.pinCode.trim()) newErrors.pinCode = 'Pin code is required';
    else if (!/^\d{6}$/.test(formData.pinCode)) newErrors.pinCode = 'Enter valid 6-digit pin code';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'country' ? { state: '' } : {})
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Address Saved!</h2>
          <p className="text-gray-400 mb-4">Your shipping address has been added successfully.</p>
          <button onClick={() => { setSubmitted(false); setFormData({ fullName: '', mobileNumber: '', country: '', state: '', city: '', street: '', pinCode: '' }); }} className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
            Add Another
          </button>
        </div>
      </div>
    );
  }

  const inputClass = (field) => `w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 ${errors[field] ? 'ring-2 ring-red-500' : ''}`;
  const selectClass = (field) => `w-full bg-white rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none cursor-pointer ${errors[field] ? 'ring-2 ring-red-500' : ''}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Spiral Background Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 p-6 max-w-5xl mx-auto">
        <h1 className="text-xl font-bold text-white mb-6"> Shipping Address Form</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-white text-sm mb-2">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Tony Stark" className={inputClass('fullName')} />
              {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
            </div>
            
            {/* Mobile Number */}
            <div>
              <label className="block text-white text-sm mb-2">Mobile Number</label>
              <div className="flex">
                <span className="bg-gray-200 text-gray-600 px-3 py-3 rounded-l-lg text-sm flex items-center">+91</span>
                <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="7896543210" className={`flex-1 bg-white rounded-r-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 ${errors.mobileNumber ? 'ring-2 ring-red-500' : ''}`} />
              </div>
              {errors.mobileNumber && <p className="text-red-400 text-xs mt-1">{errors.mobileNumber}</p>}
            </div>
            
            {/* Country */}
            <div className="relative">
              <label className="block text-white text-sm mb-2">Country</label>
              <select name="country" value={formData.country} onChange={handleChange} className={selectClass('country')}>
                <option value="">Select Country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <div className="absolute right-3 top-10 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
            </div>
            
            {/* State */}
            <div className="relative">
              <label className="block text-white text-sm mb-2">State</label>
              <select name="state" value={formData.state} onChange={handleChange} className={selectClass('state')} disabled={!formData.country}>
                <option value="">Select State</option>
                {formData.country && states[formData.country]?.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <div className="absolute right-3 top-10 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
            </div>
            
            {/* City */}
            <div>
              <label className="block text-white text-sm mb-2">City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Nagpur" className={inputClass('city')} />
              {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
            </div>
            
            {/* Street */}
            <div>
              <label className="block text-white text-sm mb-2">Street / Flat No.</label>
              <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="London Street, Flat no 108" className={inputClass('street')} />
              {errors.street && <p className="text-red-400 text-xs mt-1">{errors.street}</p>}
            </div>
            
            {/* Pin Code */}
            <div>
              <label className="block text-white text-sm mb-2">Pin Code</label>
              <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder="789458" className={inputClass('pinCode')} />
              {errors.pinCode && <p className="text-red-400 text-xs mt-1">{errors.pinCode}</p>}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-16 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}