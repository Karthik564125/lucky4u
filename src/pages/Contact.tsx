import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Send, CheckCircle2, Briefcase, Award, Globe, ShieldAlert } from 'lucide-react'
import GlassCard from '../components/UI/GlassCard'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  country: string
  reason: 'partnership' | 'investment' | 'collaboration'
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
    if (!formData.message.trim()) tempErrors.message = 'Proposal summary is required'
    if (!formData.country.trim()) tempErrors.country = 'Country is required'
    
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleReasonSelect = (val: 'partnership' | 'investment' | 'collaboration') => {
    setFormData((prev) => ({ ...prev, reason: val }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData(initialFormState)
    }, 1500)
  }

  return (
    <div className="bg-brand-navy-950 text-white font-sans min-h-screen overflow-x-hidden">
      
      {/* Page Header (Navy Theme) */}
      <section className="relative bg-brand-navy-950 py-24 border-b border-brand-navy-900/60 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase font-heading">
              Capital Intake
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
              Partner with <span className="text-brand-gold-400">Lucky 4U</span> Holdings
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mt-4">
              Submit your private placement project, agribusiness logistics partnership, or trade distribution proposition for committee evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-24 bg-brand-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Form Wrapper (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <GlassCard glow={true} hoverEffect={false} className="text-left space-y-8">
                <div>
                  <h2 className="text-xl font-heading font-extrabold text-white">
                    Deal Flow & Placement Registration
                  </h2>
                  <p className="text-xs text-gray-400 font-light mt-1">
                    Please provide detailed metrics regarding sector focus, geography, and unit economics.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-16 space-y-6"
                    >
                      <div className="flex justify-center">
                        <CheckCircle2 className="w-16 h-16 text-brand-gold-500 animate-bounce" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-heading font-extrabold text-white">
                          Proposal Intake Registered
                        </h3>
                        <p className="text-xs text-gray-400 font-light max-w-md mx-auto leading-relaxed">
                          Your submission has been securely routed to the selected desk. The Investment Committee will reach out within 14 business days if alignment exists.
                        </p>
                      </div>
                      <button
                        onClick={() => setStatus('idle')}
                        className="inline-flex items-center justify-center px-6 py-3 bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 font-bold text-xs tracking-wider uppercase transition-colors rounded-none font-heading cursor-pointer"
                      >
                        Submit another proposal
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Interactive Desk Routing Selector */}
                      <div className="space-y-3">
                        <label className="text-[10px] font-heading font-bold tracking-widest uppercase text-gray-400 block">
                          Select Deal Flow Desk Router <span className="text-brand-gold-500">*</span>
                        </label>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <button
                            type="button"
                            onClick={() => handleReasonSelect('partnership')}
                            className={`p-4 border text-left rounded-none transition-all cursor-pointer ${
                              formData.reason === 'partnership'
                                ? 'bg-brand-gold-500/10 border-brand-gold-500 text-white'
                                : 'border-brand-navy-800 bg-brand-navy-900/40 text-gray-400 hover:border-brand-gold-500/20'
                            }`}
                          >
                            <span className="font-heading font-bold text-xs text-white block">Co-Investment Desk</span>
                            <span className="text-[9px] font-light leading-normal text-gray-400 block mt-1">Sovereign & Family Offices</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleReasonSelect('investment')}
                            className={`p-4 border text-left rounded-none transition-all cursor-pointer ${
                              formData.reason === 'investment'
                                ? 'bg-brand-gold-500/10 border-brand-gold-500 text-white'
                                : 'border-brand-navy-800 bg-brand-navy-900/40 text-gray-400 hover:border-brand-gold-500/20'
                            }`}
                          >
                            <span className="font-heading font-bold text-xs text-white block">Private Deal Flow</span>
                            <span className="text-[9px] font-light leading-normal text-gray-400 block mt-1">Growth Operators & Builders</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleReasonSelect('collaboration')}
                            className={`p-4 border text-left rounded-none transition-all cursor-pointer ${
                              formData.reason === 'collaboration'
                                ? 'bg-brand-gold-500/10 border-brand-gold-500 text-white'
                                : 'border-brand-navy-800 bg-brand-navy-900/40 text-gray-400 hover:border-brand-gold-500/20'
                            }`}
                          >
                            <span className="font-heading font-bold text-xs text-white block">Logistics & Trade</span>
                            <span className="text-[9px] font-light leading-normal text-gray-400 block mt-1">Agribusiness Trade pipelines</span>
                          </button>
                        </div>
                      </div>

                      {/* Inputs Row 1 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label htmlFor="name" className="text-[9px] font-heading font-bold tracking-wider uppercase text-gray-400 block">
                            Full Name / Principal <span className="text-brand-gold-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-brand-navy-900/50 border text-sm text-white focus:outline-none transition-all rounded-none ${
                              errors.name ? 'border-red-500 focus:border-red-500' : 'border-brand-navy-800 focus:border-brand-gold-500'
                            }`}
                            placeholder="John Doe"
                          />
                          {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="company" className="text-[9px] font-heading font-bold tracking-wider uppercase text-gray-400 block">
                            Corporate Entity / Firm
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-brand-navy-900/50 border border-brand-navy-800 focus:border-brand-gold-500 text-sm text-white focus:outline-none transition-all rounded-none"
                            placeholder="Acme Corp"
                          />
                        </div>
                      </div>

                      {/* Inputs Row 2 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label htmlFor="email" className="text-[9px] font-heading font-bold tracking-wider uppercase text-gray-400 block">
                            Business Email <span className="text-brand-gold-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-brand-navy-900/50 border text-sm text-white focus:outline-none transition-all rounded-none ${
                              errors.email ? 'border-red-500 focus:border-red-500' : 'border-brand-navy-800 focus:border-brand-gold-500'
                            }`}
                            placeholder="principal@company.com"
                          />
                          {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="phone" className="text-[9px] font-heading font-bold tracking-wider uppercase text-gray-400 block">
                            Direct Contact Phone
                          </label>
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-brand-navy-900/50 border border-brand-navy-800 focus:border-brand-gold-500 text-sm text-white focus:outline-none transition-all rounded-none"
                            placeholder="+971 4 000 0000"
                          />
                        </div>
                      </div>

                      {/* Country Origin */}
                      <div className="space-y-1">
                        <label htmlFor="country" className="text-[9px] font-heading font-bold tracking-wider uppercase text-gray-400 block">
                          Country of Origin / Registration <span className="text-brand-gold-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-brand-navy-900/50 border text-sm text-white focus:outline-none transition-all rounded-none ${
                            errors.country ? 'border-red-500 focus:border-red-500' : 'border-brand-navy-800 focus:border-brand-gold-500'
                          }`}
                          placeholder="United Arab Emirates"
                        />
                        {errors.country && <p className="text-[10px] text-red-500">{errors.country}</p>}
                      </div>

                      {/* Proposal Message */}
                      <div className="space-y-1">
                        <label htmlFor="message" className="text-[9px] font-heading font-bold tracking-wider uppercase text-gray-400 block">
                          Proposal or Venture Brief Summary <span className="text-brand-gold-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 bg-brand-navy-900/50 border text-sm text-white focus:outline-none transition-all rounded-none resize-none ${
                            errors.message ? 'border-red-500 focus:border-red-500' : 'border-brand-navy-800 focus:border-brand-gold-500'
                          }`}
                          placeholder="Detail your target sectors, operational metrics, required logistics support, and unit economics..."
                        />
                        {errors.message && <p className="text-[10px] text-red-500">{errors.message}</p>}
                      </div>

                      {/* Submit button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="w-full inline-flex items-center justify-center px-6 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 font-bold text-xs tracking-wider uppercase transition-colors rounded-none disabled:opacity-70 cursor-pointer font-heading"
                        >
                          {status === 'submitting' ? (
                            <span>Verifying Submission compliance...</span>
                          ) : (
                            <>
                              <span>Register Placement Brief</span>
                              <Send className="ml-2 w-4 h-4 text-brand-navy-950" />
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  )}
                </AnimatePresence>
              </GlassCard>
            </div>

            {/* Right Column: Desk Info & Details (lg:col-span-5) */}
            <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-24">
              
              <div className="space-y-3">
                <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase font-heading">
                  Intake Process
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white tracking-tight">
                  Registry Screening Channels
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  We partition inbound transactions into direct desks to verify custom logistics, capital security, and compliance.
                </p>
              </div>

              {/* Informative Desks details */}
              <div className="space-y-4">
                <div className="border border-brand-navy-850 p-5 rounded-none space-y-1.5 relative bg-brand-navy-900/20">
                  <span className="absolute top-0 left-0 w-0.5 h-full bg-brand-gold-500" />
                  <div className="flex items-center space-x-2 text-white">
                    <Briefcase className="w-4 h-4 text-brand-gold-500" />
                    <h4 className="text-xs font-heading font-bold uppercase tracking-wider">Co-Investment Office</h4>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    Direct channel for partner family offices, institutional managers, and GCC sovereign allocators reviewing shared deal pipelines.
                  </p>
                </div>

                <div className="border border-brand-navy-850 p-5 rounded-none space-y-1.5 relative bg-brand-navy-900/20">
                  <span className="absolute top-0 left-0 w-0.5 h-full bg-brand-gold-500" />
                  <div className="flex items-center space-x-2 text-white">
                    <Award className="w-4 h-4 text-brand-gold-500" />
                    <h4 className="text-xs font-heading font-bold uppercase tracking-wider">Private Placements Deal Desk</h4>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    Intake for growth-stage physical assets, tech ventures, and operators requiring asset injection alongside customs/FZCO integration.
                  </p>
                </div>

                <div className="border border-brand-navy-850 p-5 rounded-none space-y-1.5 relative bg-brand-navy-900/20">
                  <span className="absolute top-0 left-0 w-0.5 h-full bg-brand-gold-500" />
                  <div className="flex items-center space-x-2 text-white">
                    <Globe className="w-4 h-4 text-brand-gold-500" />
                    <h4 className="text-xs font-heading font-bold uppercase tracking-wider">Logistics & Trade Logistics</h4>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    Registry for East African grower collectives, packing houses, shipping agents, and GCC wholesale distribution networks.
                  </p>
                </div>
              </div>

              {/* Office Details */}
              <div className="space-y-4 pt-6 border-t border-brand-navy-900 text-xs font-light text-gray-300">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-brand-gold-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading font-bold text-white uppercase text-[10px] tracking-wider">Dubai Headquarters</h5>
                    <p className="text-gray-400 mt-0.5">Dubai, United Arab Emirates</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-4 h-4 text-brand-gold-500 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-heading font-bold text-white uppercase text-[10px] tracking-wider">Central Intake</h5>
                    <p className="text-gray-400 mt-0.5">
                      <a href="mailto:info@lucky4uholdings.com" className="hover:text-brand-gold-400 transition-colors">
                        info@lucky4uholdings.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Compliance Warning Badge */}
              <div className="border border-brand-gold-500/20 bg-brand-navy-900/60 p-5 rounded-none flex items-start space-x-3">
                <ShieldAlert className="w-5 h-5 text-brand-gold-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="text-[10px] font-heading font-bold text-brand-gold-400 uppercase tracking-widest">
                    Placement Mandate Warning
                  </h5>
                  <p className="text-[9px] text-gray-400 leading-relaxed font-light">
                    Lucky 4U Holdings manages private placements. We do not provide public market listings, retail broker operations, or public advisory accounts.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
