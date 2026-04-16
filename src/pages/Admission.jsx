import React, { useState, useMemo, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'
import { 
  Calendar, 
  Download, 
  FileText, 
  Award, 
  Clock, 
  CheckCircle, 
  Users,
  BookOpen,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Shield,
  Percent,
  Bookmark,
  X,
  Loader2,
  AlertCircle,
  Home,
  GraduationCap,
  Library,
  FlaskConical,
  Monitor,
  Mic,
  Target,
  Eye,
  Heart,
  Sparkles,
  Video,
  Star,
  Building2,
  Users2,
  PhoneCall,
  MailOpen,
  MapPinned,
  ScrollText,
  Landmark,
  FileCheck,
  Droplets,
  Wifi,
  Coffee,
  Bus,
  Utensils,
  Briefcase,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ExternalLink,
  Book,
  Play
} from 'lucide-react'

// Validation utilities
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}

const validatePercentage = (percentage) => {
  if (!percentage) return false
  const numValue = parseFloat(percentage)
  return !isNaN(numValue) && numValue >= 0 && numValue <= 100
}

// Initial form state for B.Ed enquiry
const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  course: 'B.Ed',
  year: '2026',
  message: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
  highestQualification: '',
  percentage: '',
  university: '',
  category: 'General',
  dateOfBirth: '',
  gender: 'Male',
  guardianName: '',
  guardianPhone: '',
  howDidYouHear: 'Website'
}

// Form validation function
const validateForm = (formData, formType) => {
  const errors = {}
  
  // Common validations
  if (!formData.firstName?.trim()) errors.firstName = 'First name is required'
  if (!formData.lastName?.trim()) errors.lastName = 'Last name is required'
  
  if (!formData.email?.trim()) {
    errors.email = 'Email is required'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  if (!formData.phone?.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid 10-digit Indian phone number'
  }
  
  if (formType === 'enquiry' && !formData.message?.trim()) {
    errors.message = 'Please enter your enquiry'
  }
  
  // Additional validations for full application
  if (formType === 'admission') {
    if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required'
    if (!formData.highestQualification) errors.highestQualification = 'Highest qualification is required'
    
    if (!formData.percentage) {
      errors.percentage = 'Percentage is required'
    } else if (!validatePercentage(formData.percentage)) {
      errors.percentage = 'Please enter a valid percentage (0-100)'
    }
    
    if (!formData.university?.trim()) errors.university = 'University/Board name is required'
    if (!formData.address?.trim()) errors.address = 'Address is required'
    if (!formData.city?.trim()) errors.city = 'City is required'
    if (!formData.state?.trim()) errors.state = 'State is required'
    if (!formData.pincode?.trim()) errors.pincode = 'Pincode is required'
    if (!formData.guardianName?.trim()) errors.guardianName = 'Guardian name is required'
    
    if (!formData.guardianPhone?.trim()) {
      errors.guardianPhone = 'Guardian phone is required'
    } else if (!validatePhone(formData.guardianPhone)) {
      errors.guardianPhone = 'Please enter a valid 10-digit phone number'
    }
  }
  
  return errors
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry for the inconvenience. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Loading Skeleton Component
const FormSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-10 bg-gray-200 rounded w-3/4"></div>
    <div className="h-10 bg-gray-200 rounded"></div>
    <div className="h-10 bg-gray-200 rounded"></div>
    <div className="h-32 bg-gray-200 rounded"></div>
  </div>
)

// Enquiry Modal Component
const EnquiryModal = ({ isOpen, onClose, onSubmit, type }) => {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formType, setFormType] = useState(type || 'enquiry')
  const [isLoading, setIsLoading] = useState(false)

  const resetForm = () => {
    setFormData(initialFormState)
    setErrors({})
    setSubmitError('')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    
    const validationErrors = validateForm(formData, formType)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstErrorField = document.querySelector('[data-error="true"]')
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/bed/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType,
          submittedAt: new Date().toISOString(),
          source: window.location.href,
          college: 'Jai Ganesh College of Education - B.Ed'
        })
      })
      
      if (!response.ok) {
        throw new Error('Submission failed')
      }
      
      const result = await response.json()
      
      if (window.gtag) {
        window.gtag('event', 'form_submission', {
          event_category: formType,
          event_label: 'bed_admissions_form'
        })
      }
      
      onSubmit(result)
      setIsSubmitted(true)
      resetForm()
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError('Failed to submit form. Please try again or contact us directly.')
      
      if (window.Sentry) {
        window.Sentry.captureException(error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSwitchForm = (newType) => {
    setFormType(newType)
    setIsSubmitted(false)
    resetForm()
  }

  const handleClose = () => {
    setIsSubmitted(false)
    resetForm()
    onClose()
  }

  if (!isOpen) return null

  if (isSubmitted) {
    return (
      <div 
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={(e) => e.target === e.currentTarget && handleClose()}
      >
        <div className="bg-white rounded-2xl max-w-md w-full mx-auto animate-fadeIn">
          <div className="p-8 text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Thank You for Your {formType === 'admission' ? 'Application' : 'Enquiry'}!
            </h3>
            <p className="text-gray-600 mb-6">
              {formType === 'admission' 
                ? 'Your application has been successfully submitted. Our admission team will review your details and contact you within 2-3 working days.'
                : 'Your enquiry has been received. Our team will get back to you within 24 hours.'
              }
            </p>
            <p className="text-sm text-gray-500 mb-6">
              A confirmation email has been sent to {formData.email}
            </p>
            <div className="space-y-4">
              <button
                onClick={handleClose}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  handleSwitchForm(formType === 'admission' ? 'enquiry' : 'admission')
                }}
                className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit {formType === 'admission' ? 'Another Enquiry' : 'Admission Application'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full mx-auto my-8 animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h3 id="modal-title" className="text-2xl font-bold text-gray-900">
              {formType === 'admission' ? 'Apply Now - B.Ed Programs' : 'Admission Enquiry'}
            </h3>
            <p className="text-gray-600 mt-1">
              {formType === 'admission' 
                ? 'Fill out the application form for B.Ed admissions'
                : 'Get detailed information about our B.Ed programs'
              }
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="border-b">
          <div className="flex">
            <button
              onClick={() => handleSwitchForm('enquiry')}
              className={`flex-1 py-4 text-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${
                formType === 'enquiry'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              aria-pressed={formType === 'enquiry'}
            >
              Quick Enquiry
            </button>
            <button
              onClick={() => handleSwitchForm('admission')}
              className={`flex-1 py-4 text-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${
                formType === 'admission'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              aria-pressed={formType === 'admission'}
            >
              Full Application
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="p-6">
            <FormSkeleton />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 max-h-[70vh] overflow-y-auto" noValidate>
            {submitError && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4" role="alert">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700">{submitError}</p>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Personal Information</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.firstName}
                      data-error={!!errors.firstName}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter first name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600" role="alert">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.lastName}
                      data-error={!!errors.lastName}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600" role="alert">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    data-error={!!errors.email}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    data-error={!!errors.phone}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.phone}</p>
                  )}
                </div>

                {formType === 'admission' && (
                  <>
                    <div>
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.dateOfBirth}
                        data-error={!!errors.dateOfBirth}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                          errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.dateOfBirth && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.dateOfBirth}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Academic Information</h4>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                    Course Interested *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="B.Ed">B.Ed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Admission Year *
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="2026">2026-27</option>
                    <option value="2025">2025-26</option>
                  </select>
                </div>

                {formType === 'admission' && (
                  <>
                    <div>
                      <label htmlFor="highestQualification" className="block text-sm font-medium text-gray-700 mb-1">
                        Highest Qualification *
                      </label>
                      <select
                        id="highestQualification"
                        name="highestQualification"
                        value={formData.highestQualification}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.highestQualification}
                        data-error={!!errors.highestQualification}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                          errors.highestQualification ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select qualification</option>
                        <option value="10+2">10+2 (HSC)</option>
                        <option value="BA">Bachelor of Arts (BA)</option>
                        <option value="BSc">Bachelor of Science (BSc)</option>
                        <option value="BCom">Bachelor of Commerce (BCom)</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.highestQualification && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.highestQualification}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="percentage" className="block text-sm font-medium text-gray-700 mb-1">
                          Percentage/CGPA *
                        </label>
                        <input
                          type="text"
                          id="percentage"
                          name="percentage"
                          value={formData.percentage}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.percentage}
                          data-error={!!errors.percentage}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                            errors.percentage ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="e.g., 75% or 8.5 CGPA"
                        />
                        {errors.percentage && (
                          <p className="mt-1 text-sm text-red-600" role="alert">{errors.percentage}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                          Category *
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        >
                          <option value="General">General</option>
                          <option value="SC">SC</option>
                          <option value="ST">ST</option>
                          <option value="OBC">OBC</option>
                          <option value="EWS">EWS</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                        University/Board *
                      </label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.university}
                        data-error={!!errors.university}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                          errors.university ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Name of university/board"
                      />
                      {errors.university && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.university}</p>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Additional Fields for Admission Form */}
              {formType === 'admission' && (
                <>
                  {/* Address Information */}
                  <div className="space-y-4 md:col-span-2">
                    <h4 className="font-semibold text-gray-900">Address Information</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Address *
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.address}
                          data-error={!!errors.address}
                          rows="2"
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                            errors.address ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter complete address"
                        />
                        {errors.address && (
                          <p className="mt-1 text-sm text-red-600" role="alert">{errors.address}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.city}
                          data-error={!!errors.city}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                            errors.city ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="City"
                        />
                        {errors.city && (
                          <p className="mt-1 text-sm text-red-600" role="alert">{errors.city}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.state}
                          data-error={!!errors.state}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                            errors.state ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="State"
                        />
                        {errors.state && (
                          <p className="mt-1 text-sm text-red-600" role="alert">{errors.state}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.pincode}
                          data-error={!!errors.pincode}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                            errors.pincode ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Pincode"
                        />
                        {errors.pincode && (
                          <p className="mt-1 text-sm text-red-600" role="alert">{errors.pincode}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Guardian Information */}
                  <div className="space-y-4 md:col-span-2">
                    <h4 className="font-semibold text-gray-900">Guardian Information</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700 mb-1">
                          Guardian Name *
                        </label>
                        <input
                          type="text"
                          id="guardianName"
                          name="guardianName"
                          value={formData.guardianName}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.guardianName}
                          data-error={!!errors.guardianName}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                            errors.guardianName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Guardian's full name"
                        />
                        {errors.guardianName && (
                          <p className="mt-1 text-sm text-red-600" role="alert">{errors.guardianName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="guardianPhone" className="block text-sm font-medium text-gray-700 mb-1">
                          Guardian Phone *
                        </label>
                        <input
                          type="tel"
                          id="guardianPhone"
                          name="guardianPhone"
                          value={formData.guardianPhone}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.guardianPhone}
                          data-error={!!errors.guardianPhone}
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                            errors.guardianPhone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Guardian's phone number"
                        />
                        {errors.guardianPhone && (
                          <p className="mt-1 text-sm text-red-600" role="alert">{errors.guardianPhone}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Message/Enquiry */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {formType === 'admission' ? 'Additional Information' : 'Your Enquiry *'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required={formType === 'enquiry'}
                  aria-required={formType === 'enquiry'}
                  aria-invalid={!!errors.message}
                  data-error={!!errors.message}
                  rows="3"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={
                    formType === 'admission'
                      ? 'Any additional information or questions...'
                      : 'Please describe your enquiry in detail...'
                  }
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600" role="alert">{errors.message}</p>
                )}
              </div>

              {/* How did you hear about us */}
              {formType === 'admission' && (
                <div className="md:col-span-2">
                  <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">
                    How did you hear about us? *
                  </label>
                  <select
                    id="howDidYouHear"
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="Website">College Website</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Newspaper">Newspaper Advertisement</option>
                    <option value="Friend">Friend/Relative</option>
                    <option value="Seminar">Educational Seminar</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              )}
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="mt-6">
              <div 
                className="g-recaptcha" 
                data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                data-error-callback="console.error"
              ></div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  `Submit ${formType === 'admission' ? 'Application' : 'Enquiry'}`
                )}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              By submitting this form, you agree to our Privacy Policy and consent to being contacted by our admission team.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

EnquiryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

// Main Admissions Component
const Admissions = () => {
  const [openSections, setOpenSections] = useState({
    admissionProcess: true,
    documentsRequired: false,
    feeStructure: false,
    scholarships: false,
    rules: false
  })

  const [showEnquiryModal, setShowEnquiryModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleEnquiryClick = (type = 'enquiry') => {
    setModalType(type)
    setShowEnquiryModal(true)
  }

  const handleApplyNowClick = () => {
    setModalType('admission')
    setShowEnquiryModal(true)
  }

  const handleCloseModal = () => {
    setShowEnquiryModal(false)
    setModalType('')
  }

  const handleSubmitEnquiry = async (formData) => {
    try {
      console.log('Form submitted successfully for B.Ed')
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  const handleDownloadProspectus = async () => {
    setIsDownloading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      window.open('/assets/pdf/prospects.pdf', '_blank')
      
      if (window.gtag) {
        window.gtag('event', 'download', {
          event_category: 'prospectus',
          event_label: 'bed_admissions_page'
        })
      }
    } catch (error) {
      console.error('Failed to download prospectus:', error)
      alert('Unable to download prospectus. Please try again later.')
    } finally {
      setIsDownloading(false)
    }
  }

  const admissionCards = [
    {
      iconType: 'calendar',
      title: "2026 B.Ed Admissions Open",
      description: "Apply for B.Ed program starting academic year 2026-27",
      cta: "Apply Now",
      onClick: handleApplyNowClick,
      color: "from-blue-500 to-blue-600"
    },
    {
      iconType: 'download',
      title: "Download Prospectus",
      description: "Complete B.Ed admission guide with fee structure & eligibility",
      cta: isDownloading ? "Downloading..." : "Download PDF",
      onClick: handleDownloadProspectus,
      color: "from-green-500 to-green-600",
      disabled: isDownloading
    },
    {
      iconType: 'filetext',
      title: "Admission Enquiry",
      description: "Mon-Sat: 10:00 AM - 5:00 PM | Get personalized counseling",
      cta: "Enquire Now",
      onClick: () => handleEnquiryClick('enquiry'),
      color: "from-purple-500 to-purple-600"
    }
  ]

  const renderCardIcon = (iconType) => {
    switch(iconType) {
      case 'calendar':
        return <Calendar className="h-8 w-8" />
      case 'download':
        return <Download className="h-8 w-8" />
      case 'filetext':
        return <FileText className="h-8 w-8" />
      default:
        return null
    }
  }

  const feeStructure = [
    { category: "B.Ed", tuition: "₹45,000 per year", development: "₹5,000", total: "₹50,000" }
  ]

  const scholarshipCategories = [
    {
      name: "Government Scholarships",
      details: [
        "SC/ST students: Full fee reimbursement as per Govt. norms",
        "OBC students: Fee concession as per state policy",
        "EBC students: Financial aid through government schemes",
        "Minority scholarship schemes available"
      ]
    },
    {
      name: "Merit-Based Scholarships",
      details: [
        "Top 5 rank holders in entrance: 50% tuition fee waiver",
        "90% and above in graduation: 25% fee concession",
        "85-89% in graduation: 15% fee concession"
      ]
    },
    {
      name: "Special Category Scholarships",
      details: [
        "Single girl child: 20% fee waiver",
        "Sports achievers: Up to 30% concession",
        "Students with disabilities: Special financial aid"
      ]
    }
  ]

  const rulesRegulations = [
    {
      title: "Academic Regulations",
      points: [
        "Minimum 75% attendance mandatory for all subjects",
        "Internal assessment carries 40% weightage",
        "End-semester examination carries 60% weightage",
        "Minimum 45% marks required to pass each subject",
        "Practical records must be completed as per schedule"
      ]
    },
    {
      title: "Conduct & Discipline",
      points: [
        "Strict anti-ragging policy as per Supreme Court guidelines",
        "Professional dress code on campus",
        "Mobile phone usage restricted in classrooms",
        "Zero tolerance for substance abuse on campus",
        "Respect teachers, staff, and fellow students"
      ]
    },
    {
      title: "Examination Rules",
      points: [
        "Valid college ID card mandatory for examinations",
        "No revaluation for internal assessment marks",
        "Medical certificate required for absentees",
        "University pattern followed for all evaluations",
        "Use of unfair means leads to cancellation"
      ]
    }
  ]

  const documentsList = {
    academic: [
      "SSC Mark sheet & Passing Certificate",
      "HSC Mark sheet & Passing Certificate",
      "Graduation Mark sheets (All years)",
      "Graduation Degree Certificate/Provisional Certificate",
      "Transfer Certificate/Leaving Certificate",
      "Migration Certificate (if applicable)"
    ],
    personal: [
      "Aadhaar Card (Self & Parents)",
      "Domicile Certificate (for Maharashtra students)",
      "Caste Certificate (for reserved category)",
      "Caste Validity Certificate (for reserved category)",
      "Non-Creamy Layer Certificate (if applicable)",
      "Income Certificate (for EWS category)",
      "Passport size photographs (8 copies)",
      "Gap Certificate (if applicable)"
    ]
  }

  return (
    <ErrorBoundary>
      <Helmet>
        <title>B.Ed Admissions 2026 | Jai Ganesh College of Education - B.Ed Pune | Apply Now</title>
        <meta
          name="description"
          content="Apply for B.Ed programs at Jai Ganesh College of Education - B.Ed Pune. Check admission process, documents required, fee structure, scholarships, and rules for 2026 batch. NCTE approved, SPPU affiliated."
        />
        <meta name="keywords" content="B.Ed admission 2026, teacher education college Pune, Jai Ganesh College of Education, NCTE approved, SPPU affiliated" />
        <meta property="og:title" content="B.Ed Admissions 2026 | Jai Ganesh College of Education - B.Ed Pune" />
        <meta property="og:description" content="Apply for B.Ed programs at Jai Ganesh College of Education - B.Ed Pune. Check admission process, documents required, fee structure, and scholarships." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jgefs.org/admissions" />
        <link rel="canonical" href="https://www.jgefs.org/admissions" />
      </Helmet>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={showEnquiryModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitEnquiry}
        type={modalType}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">NCTE Approved | SPPU Affiliated</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              B.Ed <span className="text-yellow-300">Admissions 2026</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Start Your Teaching Career at Jai Ganesh College of Education - B.Ed, Pune
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleApplyNowClick}
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                Apply Now
              </button>
              <button 
                onClick={handleDownloadProspectus}
                disabled={isDownloading}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDownloading ? 'Downloading...' : 'Download Prospectus'}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-16 bg-gray-50 -mt-2">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {admissionCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        {renderCardIcon(card.iconType)}
                      </div>
                      <h3 className="text-xl font-bold">{card.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
                  <button 
                    onClick={card.onClick}
                    disabled={card.disabled}
                    className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group/btn disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {card.cta}
                    {!card.disabled && <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('admissionProcess')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleSection('admissionProcess')}
              aria-expanded={openSections.admissionProcess}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">B.Ed Admission Process</h3>
                </div>
                {openSections.admissionProcess ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.admissionProcess && (
                <div className="px-6 pb-6">
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Criteria</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-blue-800">For B.Ed</h5>
                            <p className="text-blue-700 mt-1">
                              Graduate from any faculty in any recognized university,
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Application Submission",
                        description: "Fill online application form available on college website or collect form from admission office"
                      },
                      {
                        step: "2",
                        title: "Document Verification",
                        description: "Submit required documents for verification at admission office within specified timeline"
                      },
                      {
                        step: "3",
                        title: "Merit List Publication",
                        description: "College publishes merit list based on graduation marks and reservation criteria"
                      },
                      {
                        step: "4",
                        title: "Counseling & Interview",
                        description: "Shortlisted candidates called for personal interview and counseling"
                      },
                      {
                        step: "5",
                        title: "Fee Payment",
                        description: "Selected candidates need to pay admission fees to confirm their seat"
                      },
                      {
                        step: "6",
                        title: "Admission Confirmation",
                        description: "Collect admission letter and complete enrollment formalities"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('documentsRequired')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleSection('documentsRequired')}
              aria-expanded={openSections.documentsRequired}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Documents Required</h3>
                </div>
                {openSections.documentsRequired ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.documentsRequired && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">Academic Documents</h4>
                      <div className="space-y-3">
                        {documentsList.academic.map((doc, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">Personal Documents</h4>
                      <div className="space-y-3">
                        {documentsList.personal.map((doc, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <p className="text-yellow-800 text-center">
                      <strong>Important:</strong> All documents must be submitted in original for verification along with two attested photocopies. Self-attested copies will not be accepted.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('feeStructure')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleSection('feeStructure')}
              aria-expanded={openSections.feeStructure}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Fee Structure (Government Approved)</h3>
                </div>
                {openSections.feeStructure ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.feeStructure && (
                <div className="px-6 pb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <p className="text-green-800 text-center">
                      <strong>Government Approved:</strong> All fees are regulated as per government norms. Fees are subject to revision as per guidelines.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          <th className="px-6 py-4 text-left font-semibold">Program</th>
                          <th className="px-6 py-4 text-left font-semibold">Tuition Fee</th>
                          <th className="px-6 py-4 text-left font-semibold">Development Fee</th>
                          <th className="px-6 py-4 text-left font-semibold">Total Annual Fee</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {feeStructure.map((fee, index) => (
                          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium">{fee.category}</td>
                            <td className="px-6 py-4">{fee.tuition}</td>
                            <td className="px-6 py-4">{fee.development}</td>
                            <td className="px-6 py-4 font-bold text-blue-700">{fee.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Additional Charges (One Time)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6">
                        <ul className="space-y-2 text-blue-700">
                          <li>Admission Processing Fee: ₹500</li>
                          <li>Library Deposit (Refundable): ₹1,000</li>
                          <li>Laboratory Charges: ₹1,000</li>
                          <li>Identity Card: ₹200</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-xl p-6">
                        <ul className="space-y-2 text-green-700">
                          <li>University Enrollment Fee: ₹500</li>
                          <li>Medical Examination: ₹300</li>
                          <li>Student Welfare Fund: ₹500</li>
                          <li>Alumni Association: ₹300</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* Scholarships & Freeships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('scholarships')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleSection('scholarships')}
              aria-expanded={openSections.scholarships}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Percent className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Scholarships & Freeships</h3>
                </div>
                {openSections.scholarships ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.scholarships && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {scholarshipCategories.map((scholarship, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Award className="h-6 w-6 text-blue-600" />
                          <h4 className="font-bold text-gray-900">{scholarship.name}</h4>
                        </div>
                        <ul className="space-y-2">
                          {scholarship.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">Important Information</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>Scholarship applications must be submitted within 30 days of admission</li>
                      <li>All scholarships are subject to annual renewal based on academic performance</li>
                      <li>Students must maintain minimum 75% attendance to continue scholarships</li>
                      <li>Multiple scholarship benefits cannot be combined</li>
                      <li>Scholarship disbursement is done through DBT (Direct Bank Transfer)</li>
                      <li>Government scholarship applications through MahaDBT portal</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => toggleSection('rules')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleSection('rules')}
              aria-expanded={openSections.rules}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Rules & Regulations</h3>
                </div>
                {openSections.rules ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
              
              {openSections.rules && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {rulesRegulations.map((rule, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Bookmark className="h-5 w-5 text-blue-600" />
                          <h4 className="font-bold text-gray-900">{rule.title}</h4>
                        </div>
                        <ul className="space-y-3">
                          {rule.points.map((point, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <div className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 text-xs">
                                {idx + 1}
                              </div>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="font-semibold text-red-800 mb-3">Important Regulations</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Academic Integrity</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• Plagiarism in assignments leads to disciplinary action</li>
                          <li>• Use of unfair means in exams results in cancellation</li>
                          <li>• Fabrication of documents leads to rustication</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Code of Conduct</h5>
                        <ul className="space-y-1 text-red-600">
                          <li>• Smoking and alcohol strictly prohibited on campus</li>
                          <li>• Mobile phones prohibited in classrooms and examination halls</li>
                          <li>• Damage to college property must be compensated</li>
                          <li>• Regular attendance mandatory for all classes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Teaching Journey with Us
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join Jai Ganesh College of Education - B.Ed's programs and build a strong foundation for your teaching career. 
            Limited seats available for 2026 batch.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={handleApplyNowClick}
              className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Apply for Admission
            </button>
            <button 
              onClick={handleDownloadProspectus}
              disabled={isDownloading}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? 'Downloading...' : 'Download Complete Prospectus'}
            </button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <Phone className="h-8 w-8 text-yellow-300" />
              <div>
                <h4 className="font-semibold">Admission Helpline</h4>
                <p className="text-blue-100">+91 9823872816</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-yellow-300" />
              <div>
                <h4 className="font-semibold">Email Assistance</h4>
                <p className="text-blue-100">admissions@jgefs.org</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-yellow-300" />
              <div>
                <h4 className="font-semibold">Visit Admission Office</h4>
                <p className="text-blue-100">Mon-Sat: 9:30 AM - 5:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </ErrorBoundary>
  )
}

export default Admissions