import React, { useState } from 'react';
import { Upload, Calendar, MapPin, Phone, Mail, User, Globe, FileText, Plane, GraduationCap, Heart, AlertCircle, Facebook, Instagram, Linkedin, Building, Clock, BookOpen, Shield, UserPlus, Briefcase, Import as Passport } from 'lucide-react';

type VisaType = 'student' | 'work' | 'visit' | '';

function App() {
  const [visaType, setVisaType] = useState<VisaType>('');
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',

    // Travel Details
    destination: '',
    travelDate: '',
    duration: '',
    purpose: '',

    // Academic Details (for student visa)
    institution: '',
    fieldOfStudy: '',
    educationLevel: '',

    // Additional Services
    travelInsurance: false,
    accommodation: false,
    visaSupport: false,
    flightBooking: false,

    // Emergency Contact
    emergencyName: '',
    emergencyRelation: '',
    emergencyPhone: '',
    emergencyEmail: '',

    // Documents
    passportFile: null,
    nationalId: null,
    photo: null,
    certificate: null,
    transcript: null,
    reference: null,
    statement: null,
    cv: null,
    medical: null,
    police: null,
    bankStatement: null,
    otherDocs: null,

    // Agreement
    agreement: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: fileInput.files?.[0] || null
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      dateOfBirth: '',
      gender: '',
      email: '',
      phone: '',
      address: '',
      destination: '',
      travelDate: '',
      duration: '',
      purpose: '',
      institution: '',
      fieldOfStudy: '',
      educationLevel: '',
      travelInsurance: false,
      accommodation: false,
      visaSupport: false,
      flightBooking: false,
      emergencyName: '',
      emergencyRelation: '',
      emergencyPhone: '',
      emergencyEmail: '',
      passportFile: null,
      nationalId: null,
      photo: null,
      certificate: null,
      transcript: null,
      reference: null,
      statement: null,
      cv: null,
      medical: null,
      police: null,
      bankStatement: null,
      otherDocs: null,
      agreement: false
    });
    setVisaType('');
  };

  const renderDocumentUploadSection = () => {
    let documents = [];

    switch (visaType) {
      case 'student':
        documents = [
          { name: 'passportFile', label: 'Passport Copy' },
          { name: 'nationalId', label: 'National ID' },
          { name: 'photo', label: 'Passport Size Photo' },
          { name: 'certificate', label: 'Educational Certificate' },
          { name: 'transcript', label: 'Educational Transcript' },
          { name: 'reference', label: 'Reference Letter' },
          { name: 'statement', label: 'Personal Statement / SOP' },
          { name: 'cv', label: 'CV' },
          { name: 'medical', label: 'Medical Certificate' },
          { name: 'police', label: 'Police Clearance' },
          { name: 'otherDocs', label: 'Other Supporting Documents' }
        ];
        break;
      case 'work':
        documents = [
          { name: 'passportFile', label: 'Passport Copy' },
          { name: 'nationalId', label: 'National ID' },
          { name: 'photo', label: 'Passport Size Photo' },
          { name: 'certificate', label: 'Educational Certificate' },
          { name: 'cv', label: 'Curriculum Vitae (CV)' },
          { name: 'medical', label: 'Medical Certificate' },
          { name: 'police', label: 'Police Clearance Certificate' },
          { name: 'otherDocs', label: 'Other Supporting Documents' }
        ];
        break;
      case 'visit':
        documents = [
          { name: 'passportFile', label: 'Passport Copy' },
          { name: 'nationalId', label: 'National ID' },
          { name: 'photo', label: 'Passport Size Photo' },
          { name: 'medical', label: 'Medical Certificate' },
          { name: 'bankStatement', label: 'Bank Statement' },
          { name: 'otherDocs', label: 'Other Supporting Documents' }
        ];
        break;
      default:
        return null;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div key={doc.name}>
            <label className="block text-sm font-medium text-gray-700">{doc.label}</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-colors">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor={doc.name} className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload file</span>
                    <input
                      id={doc.name}
                      name={doc.name}
                      type="file"
                      className="sr-only"
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PDF or images up to 10MB</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Globe className="text-white w-16 h-16" />
                <div>
                  <h1 className="text-3xl font-bold text-white">Fafali Group Application Form</h1>
                  <p className="mt-2 text-blue-100"> ...a journey of excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Visa Type Selection */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Passport className="w-5 h-5 text-blue-600" />
                Select Application Type
              </h2>
              <select
                value={visaType}
                onChange={(e) => setVisaType(e.target.value as VisaType)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              >
                <option value="">Select Application Type</option>
                <option value="student">Student Visa</option>
                <option value="work">Work Permit & Visa</option>
                <option value="visit">Visit Visa</option>
              </select>
            </div>

            {visaType && (
              <>
                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Personal Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          required
                          className="block w-full pl-10 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 border"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          required
                          placeholder="+1 (555) 000-0000"
                          className="block w-full pl-10 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 border"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Current Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        required
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Travel Details */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Plane className="w-5 h-5 text-blue-600" />
                    Travel Details
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Preferred Destination</label>
                      <select
                        name="destination"
                        value={formData.destination}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Destination</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="canada">Canada</option>
                        <option value="dubai">Dubai</option>
                        <option value="qatar">Qatar</option>
                        <option value="germany">Germany</option>
                        <option value="italy">Italy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Planned Travel Date</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          name="travelDate"
                          value={formData.travelDate}
                          required
                          className="block w-full pl-10 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 border"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Trip Duration</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Duration</option>
                        <option value="1week">1 Week</option>
                        <option value="2weeks">2 Weeks</option>
                        <option value="1month">1 Month</option>
                        <option value="3months">3 Months</option>
                        <option value="6months">6 Months</option>
                        <option value="1year">1 Year</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Purpose of Travel</label>
                      <select
                        name="purpose"
                        value={formData.purpose}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Purpose</option>
                        <option value="study">Study</option>
                        <option value="work">Work</option>
                        <option value="visit">Visit</option>
                        <option value="cultural">Cultural Exchange</option>
                        <option value="internship">Internship</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Academic Details - Only show for student visa */}
                {visaType === 'student' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      Academic Details
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Educational Institution</label>
                        <input
                          type="text"
                          name="institution"
                          value={formData.institution}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Field of Study</label>
                        <input
                          type="text"
                          name="fieldOfStudy"
                          value={formData.fieldOfStudy}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Current Year/Level</label>
                        <select
                          name="educationLevel"
                          value={formData.educationLevel}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                          onChange={handleInputChange}
                        >
                          <option value="">Select Level</option>
                          <option value="highschool">High School</option>
                          <option value="undergraduate">Undergraduate</option>
                          <option value="postgraduate">Postgraduate</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional Services */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-blue-600" />
                    Additional Services
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="travelInsurance"
                        checked={formData.travelInsurance}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        onChange={handleInputChange}
                      />
                      <label className="ml-2 block text-sm text-gray-900">Travel Insurance</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="accommodation"
                        checked={formData.accommodation}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        onChange={handleInputChange}
                      />
                      <label className="ml-2 block text-sm text-gray-900">Accommodation Assistance</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="visaSupport"
                        checked={formData.visaSupport}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        onChange={handleInputChange}
                      />
                      <label className="ml-2 block text-sm text-gray-900">Visa Processing Support</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="flightBooking"
                        checked={formData.flightBooking}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        onChange={handleInputChange}
                      />
                      <label className="ml-2 block text-sm text-gray-900">Flight Booking Assistance</label>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600" />
                    Emergency Contact Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Contact Name</label>
                      <input
                        type="text"
                        name="emergencyName"
                        value={formData.emergencyName}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Relationship to Applicant</label>
                      <input
                        type="text"
                        name="emergencyRelation"
                        value={formData.emergencyRelation}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        name="emergencyEmail"
                        value={formData.emergencyEmail}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Documents Upload */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Required Documents
                  </h2>
                  {renderDocumentUploadSection()}
                </div>

                {/* Agreement */}
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={formData.agreement}
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      onChange={handleInputChange}
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      I confirm that the information provided is accurate to the best of my knowledge and agree to the company's terms and conditions.
                    </label>
                  </div>
                </div>

                {/* Submit and Reset Buttons */}
                <div className="pt-6 flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    className="flex-1 justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    onClick={() => console.log('Save for later:', formData)}
                  >
                    Save and Continue Later
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" /> info@fafaligroup.org
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" /> +233 54 821 9691
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <Globe className="w-4 h-4" /> www.fafaligroup.org
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/17GEBiUkXF/?mibextid=wwXIfr" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/fafali_group?igsh=MTlsYjhjaTBwMjU5ZQ%3D%3D&utm_source=qr" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/fafali-group/" className="text-gray-400 hover:text-blue-700 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;