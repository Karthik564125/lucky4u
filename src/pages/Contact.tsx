import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Phone, Landmark, Send, CheckCircle, Briefcase, Award, Globe } from 'lucide-react'


interface FormData {
  name: string
  company: string
  email: string
  phone: string
  country: string
  reason: string
  message: string
}

const initialFormState: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  reason: 'investment',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormState)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const validateForm = () => {
    const tempErrors: Partial<FormData> = {}
    if (!formData.name.trim()) tempErrors.name = 'Full name is required'
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address'
    }
    if (!formData.message.trim()) tempErrors.message = 'Message content is required'
    if (!formData.country.trim()) tempErrors.country = 'Country is required'
    
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('submitting')
    // Simulate API request delay
    setTimeout(() => {
      setStatus('success')
      setFormData(initialFormState)
    }, 1500)
  }

  return (
    <div className="bg-white text-brand-navy-950 font-sans min-h-screen">
      
      {/* Page Header (Navy Theme) */}
      <section className="bg-brand-navy-950 text-white py-20 md:py-28 border-b border-brand-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase">
              Capital Placement
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-white m-0">
              Partner With Lucky 4U Holdings
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl mt-4">
              Submit your project, investment proposition, or trade inquiry. Our investment committee reviews submissions on a rolling basis.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Form Container (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <div className="bg-brand-gold-50/20 border border-gray-200/80 p-8 rounded-sm">
                
                <h2 className="text-xl font-heading font-bold text-brand-navy-950 mb-6">
                  Investment & Deal Flow Submission
                </h2>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 space-y-4"
                    >
                      <div className="flex justify-center">
                        <CheckCircle className="w-16 h-16 text-brand-gold-600" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-brand-navy-950">
                        Inquiry Registered
                      </h3>
                      <p className="text-sm text-gray-600 font-light max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to Lucky 4U Holdings. A representative from our relations or investment committee will contact you shortly if there is alignment.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 inline-flex items-center justify-center px-5 py-2.5 bg-brand-navy-950 hover:bg-brand-navy-900 text-white text-xs font-semibold tracking-wider uppercase transition-colors rounded-sm"
                      >
                        Submit another response
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-1">
                          <label htmlFor="name" className="text-xs font-heading font-semibold tracking-wider uppercase text-gray-500">
                            Full Name <span className="text-brand-gold-600">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white border text-sm focus:outline-none transition-colors rounded-none ${
                              errors.name ? 'border-red-500' : 'border-gray-200 focus:border-brand-gold-500'
                            }`}
                            placeholder="John Doe"
                          />
                          {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
                        </div>

                        {/* Company */}
                        <div className="space-y-1">
                          <label htmlFor="company" className="text-xs font-heading font-semibold tracking-wider uppercase text-gray-500">
                            Company / Entity
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-gold-500 text-sm focus:outline-none transition-colors rounded-none"
                            placeholder="Acme Corp"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Email */}
                        <div className="space-y-1">
                          <label htmlFor="email" className="text-xs font-heading font-semibold tracking-wider uppercase text-gray-500">
                            Business Email <span className="text-brand-gold-600">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white border text-sm focus:outline-none transition-colors rounded-none ${
                              errors.email ? 'border-red-500' : 'border-gray-200 focus:border-brand-gold-500'
                            }`}
                            placeholder="john@company.com"
                          />
                          {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div className="space-y-1">
                          <label htmlFor="phone" className="text-xs font-heading font-semibold tracking-wider uppercase text-gray-500">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-gold-500 text-sm focus:outline-none transition-colors rounded-none"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Country */}
                        <div className="space-y-1">
                          <label htmlFor="country" className="text-xs font-heading font-semibold tracking-wider uppercase text-gray-500">
                            Country of Origin <span className="text-brand-gold-600">*</span>
                          </label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white border text-sm focus:outline-none transition-colors rounded-none ${
                              errors.country ? 'border-red-500' : 'border-gray-200 focus:border-brand-gold-500'
                            }`}
                            placeholder="United Arab Emirates"
                          />
                          {errors.country && <p className="text-[10px] text-red-500">{errors.country}</p>}
                        </div>

                        {/* Reason for Contact */}
                        <div className="space-y-1">
                          <label htmlFor="reason" className="text-xs font-heading font-semibold tracking-wider uppercase text-gray-500">
                            Deal Flow Desk Routing
                          </label>
                          <select
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-gold-500 text-sm focus:outline-none transition-colors rounded-none cursor-pointer"
                          >
                            <option value="partnership">Partnership Enquiries Desk</option>
                            <option value="investment">Investment Opportunities Desk</option>
                            <option value="collaboration">Strategic Collaborations Desk</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1">
                        <label htmlFor="message" className="text-xs font-heading font-semibold tracking-wider uppercase text-gray-500">
                          Proposal or Message Summary <span className="text-brand-gold-600">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className={`w-full px-4 py-3 bg-white border text-sm focus:outline-none transition-colors rounded-none resize-none ${
                            errors.message ? 'border-red-500' : 'border-gray-200 focus:border-brand-gold-500'
                          }`}
                          placeholder="Provide a detailed summary of your business, sector, geography, unit economics, and how Lucky 4U Holdings can add value..."
                        />
                        {errors.message && <p className="text-[10px] text-red-500">{errors.message}</p>}
                      </div>

                      {/* Submit button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold-500 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 rounded-none disabled:opacity-75 cursor-pointer"
                        >
                          {status === 'submitting' ? (
                            <span>Processing Submission...</span>
                          ) : (
                            <>
                              <span>Submit Inquiry Details</span>
                              <Send className="ml-2 w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Contact Details & Deal Desks (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              
              {/* Institutional Details */}
              <div className="space-y-4">
                <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase">
                  Institutional Intake
                </span>
                <h3 className="text-2xl font-heading font-bold text-brand-navy-950 tracking-tight">
                  Deal Flow & Enquiries
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Lucky 4U Holdings routes inquiries to specialized teams to ensure thorough screening and rapid coordination.
                </p>
              </div>

              {/* Deal Flow Desks (New Section) */}
              <div className="space-y-4">
                <div className="border border-gray-200/80 p-5 rounded-none space-y-2 relative group">
                  <span className="absolute top-0 left-0 w-0.5 h-full bg-brand-gold-500" />
                  <div className="flex items-center space-x-2 text-brand-navy-950">
                    <Briefcase className="w-4 h-4 text-brand-gold-500" />
                    <h4 className="text-sm font-heading font-bold">Partnership Enquiries</h4>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Dedicated desk for institutional co-investors, family offices, and sovereign wealth entities seeking strategic co-investment alignment.
                  </p>
                </div>

                <div className="border border-gray-200/80 p-5 rounded-none space-y-2 relative group">
                  <span className="absolute top-0 left-0 w-0.5 h-full bg-brand-gold-500" />
                  <div className="flex items-center space-x-2 text-brand-navy-950">
                    <Award className="w-4 h-4 text-brand-gold-500" />
                    <h4 className="text-sm font-heading font-bold">Investment Opportunities</h4>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Direct proposal channel for growth-stage founders and operators seeking proprietary growth equity.
                  </p>
                </div>

                <div className="border border-gray-200/80 p-5 rounded-none space-y-2 relative group">
                  <span className="absolute top-0 left-0 w-0.5 h-full bg-brand-gold-500" />
                  <div className="flex items-center space-x-2 text-brand-navy-950">
                    <Globe className="w-4 h-4 text-brand-gold-500" />
                    <h4 className="text-sm font-heading font-bold">Strategic Collaborations</h4>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Inbound deck for global trading networks, commodities brokerage, customs agencies, and East African agribusiness logistics.
                  </p>
                </div>
              </div>

              {/* Office Details List */}
              <div className="space-y-5 pt-4 border-t border-gray-100">
                
                <div className="flex items-start">
                  <div className="p-2.5 bg-brand-gold-50 text-brand-gold-700 mr-3 shrink-0 rounded-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-heading font-bold text-brand-navy-950">Office Location</h4>
                    <p className="text-xs text-gray-500 font-light mt-0.5">
                      Dubai, United Arab Emirates<br />
                      <span className="text-[10px] text-gray-400">HQ coordinates and boardroom details shared upon meeting validation</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2.5 bg-brand-gold-50 text-brand-gold-700 mr-3 shrink-0 rounded-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-heading font-bold text-brand-navy-950">Central Registry</h4>
                    <p className="text-xs text-gray-500 font-light mt-0.5">
                      <a href="mailto:info@lucky4uholdings.com" className="hover:text-brand-gold-500 transition-colors">
                        info@lucky4uholdings.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2.5 bg-brand-gold-50 text-brand-gold-700 mr-3 shrink-0 rounded-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-heading font-bold text-brand-navy-950">Switchboard</h4>
                    <p className="text-xs text-gray-500 font-light mt-0.5">
                      <a href="tel:+97140000000" className="hover:text-brand-gold-500 transition-colors">
                        +971 4 000 0000
                      </a>
                    </p>
                  </div>
                </div>

              </div>

              {/* Decorative Accent Block */}
              <div className="border border-brand-gold-500/20 bg-brand-navy-950 text-white p-5 rounded-sm space-y-2">
                <h4 className="text-xs font-heading font-semibold tracking-wider text-brand-gold-500 uppercase flex items-center">
                  <Landmark className="w-4 h-4 mr-2" />
                  Institutional Notice
                </h4>
                <p className="text-[10px] text-gray-400 font-light leading-relaxed">
                  Lucky 4U Holdings does not offer retail broker services or public financial advisories. We allocate proprietary and partner family capital exclusively inside qualified private placements and physical asset frameworks.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
