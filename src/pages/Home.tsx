import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Shield, Landmark, TrendingUp, Cpu, Layers } from 'lucide-react'

const stats = [
  { id: 1, label: 'Headquarters', value: 'Dubai, UAE', icon: Globe },
  { id: 2, label: 'Core Philosophy', value: 'Long-Term Capital', icon: Shield },
  { id: 3, label: 'Approach', value: 'Operating + Investment', icon: Landmark },
  { id: 4, label: 'Presence', value: 'High-Growth Markets', icon: TrendingUp },
]

export default function Home() {
  return (
    <div className="bg-white text-brand-navy-950 font-sans min-h-screen">
      
      {/* 1. Hero Section (Deep Navy Background) */}
      <section className="relative bg-brand-navy-950 text-white overflow-hidden py-24 md:py-32 border-b border-brand-navy-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-navy-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 border border-brand-gold-500/30 px-3 py-1 mb-8 bg-brand-navy-900"
            >
              <span className="w-1.5 h-1.5 bg-brand-gold-500 rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-gold-500">
                Dubai-Based Private Investment Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight md:leading-none"
            >
              From Dubai to the World:<br />
              <span className="text-brand-gold-500">Investing in Scalable, Future-Ready Companies.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed max-w-3xl"
            >
              Lucky 4U Holdings is a Dubai-based investment and operating group with interests across food, agriculture, climate technology, artificial intelligence, space exploration, venture funds, private markets, and international trade.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 font-semibold text-xs tracking-wider uppercase transition-colors rounded-sm shadow-sm"
              >
                Explore Portfolio
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 hover:border-brand-gold-500 hover:text-brand-gold-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors rounded-sm"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Statistics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-20 pt-12 border-t border-brand-navy-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-left"
            >
              <div>
                <span className="block text-3xl md:text-4xl font-heading font-extrabold text-brand-gold-500">11+</span>
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mt-1 font-heading">Portfolio Companies</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-heading font-extrabold text-brand-gold-500">7+</span>
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mt-1 font-heading">Investment Themes</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-heading font-extrabold text-brand-gold-500">4</span>
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mt-1 font-heading">Strategic Regions</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-heading font-extrabold text-brand-gold-500">Dubai</span>
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mt-1 font-heading">Global Headquarters</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Institutional Stats Section */}
      <section className="bg-brand-gold-50/55 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const IconComponent = stat.icon
              return (
                <div key={stat.id} className="flex items-center space-x-4 p-4">
                  <div className="p-3 bg-brand-navy-950 rounded-sm text-brand-gold-500 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                      {stat.label}
                    </p>
                    <p className="text-sm md:text-base font-heading font-bold text-brand-navy-950">
                      {stat.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Global Operations Section (Deep Navy Theme) */}
      <section className="py-24 bg-brand-navy-950 text-white border-b border-brand-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase">
              Global Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
              Building Strategic Presence Across Key Markets
            </h2>
            <div className="w-12 h-[2px] bg-brand-gold-500 mx-auto mt-4" />
            <p className="text-sm text-gray-400 font-light max-w-xl mx-auto pt-2">
              Our operating and investment footprint spans high-growth regions where capital, innovation, and trade intersect.
            </p>
          </div>

          {/* 4-Card Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-brand-navy-900 border border-brand-navy-800 p-8 rounded-none relative group hover:border-brand-gold-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-brand-navy-950 border border-brand-navy-800 text-brand-gold-500 rounded-sm">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-brand-gold-500 font-semibold font-heading">Corporate Headquarters</h4>
                  <h3 className="text-base md:text-lg font-heading font-bold text-white mt-0.5">Dubai, UAE</h3>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-gray-300 font-light">
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Global capital allocation
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Trade facilitation hub
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Strategic investment platform
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-brand-navy-900 border border-brand-navy-800 p-8 rounded-none relative group hover:border-brand-gold-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-brand-navy-950 border border-brand-navy-800 text-brand-gold-500 rounded-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-brand-gold-500 font-semibold font-heading">Innovation & Technology</h4>
                  <h3 className="text-base md:text-lg font-heading font-bold text-white mt-0.5">India</h3>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-gray-300 font-light">
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Artificial intelligence
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Consumer brands
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Frontier technology investments
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-navy-900 border border-brand-navy-800 p-8 rounded-none relative group hover:border-brand-gold-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-brand-navy-950 border border-brand-navy-800 text-brand-gold-500 rounded-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-brand-gold-500 font-semibold font-heading">Agriculture & Logistics</h4>
                  <h3 className="text-base md:text-lg font-heading font-bold text-white mt-0.5">Kenya / East Africa</h3>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-gray-300 font-light">
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Agricultural processing
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Distribution networks
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Export infrastructure
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-brand-navy-900 border border-brand-navy-800 p-8 rounded-none relative group hover:border-brand-gold-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-brand-navy-950 border border-brand-navy-800 text-brand-gold-500 rounded-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-brand-gold-500 font-semibold font-heading">Partnerships & Capital</h4>
                  <h3 className="text-base md:text-lg font-heading font-bold text-white mt-0.5">Global Markets</h3>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-gray-300 font-light">
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Venture investments
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  Secondary markets
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold-500 mr-2">•</span>
                  International trade relationships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Chairman's Message Section (Elegant Gold/White Accent Layout) */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Prestigious Quote & Title */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-8 border border-brand-gold-500/30 bg-brand-gold-50/20 rounded-sm w-full">
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-gold-500/40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-gold-500/40 pointer-events-none" />
                
                <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase block mb-4 font-heading">
                  Chairman's Mandate
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy-950 tracking-tight leading-snug">
                  "Vision, patience, and operational execution are the bedrocks of sustainable capital growth."
                </h3>
                
                <div className="border-t border-gray-200 mt-8 pt-6">
                  <p className="text-base font-heading font-bold text-brand-navy-950">
                    Surya Pavan Kumar Avva
                  </p>
                  <p className="text-[10px] text-brand-gold-700 font-semibold uppercase tracking-wider mt-1 font-heading">
                    Founder & Chairman, Lucky 4U Holdings
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Letter Copy */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase block">
                  Corporate Leadership
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-navy-950 tracking-tight">
                  Chairman's Message
                </h2>
                <div className="w-16 h-[2px] bg-brand-gold-500 mt-4" />
              </div>

              <div className="space-y-6 text-gray-600 font-sans font-light leading-relaxed text-sm md:text-base border-l-2 border-brand-gold-500/30 pl-6 md:pl-8 py-2">
                <p className="italic text-brand-navy-950 font-medium text-base leading-relaxed">
                  "At Lucky 4U Holdings, we believe the best businesses are built at the intersection of vision, patience, and execution."
                </p>
                <p>
                  Our goal is to identify strong founders, real industries, and scalable opportunities where capital can do more than generate returns—it can create jobs, improve supply chains, support innovation, and build long-term value.
                </p>
                <p>
                  From food and agriculture to space technology, climate solutions, and artificial intelligence, we are investing in sectors that will help shape the future.
                </p>
                <p>
                  Dubai provides us with an ideal base to connect markets, talent, and opportunities across India, Africa, the Middle East, and beyond.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-base font-heading font-bold text-brand-navy-950">
                    Surya Pavan Kumar Avva
                  </p>
                  <p className="text-xs text-brand-gold-700 font-semibold uppercase tracking-wider mt-1">
                    Founder & Chairman
                  </p>
                </div>
                <div>
                  {/* Executive signature script styling */}
                  <span className="font-serif italic text-3xl text-gray-300/80 font-bold select-none tracking-widest">
                    S.P.K. Avva
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. Quick CTA Section */}
      <section className="bg-brand-navy-950 py-16 text-white text-center border-t border-brand-navy-900">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
            Interested in partnering or investing with us?
          </h3>
          <p className="text-sm text-gray-400 font-light max-w-2xl mx-auto">
            We actively collaborate with institutional co-investors, family offices, operational partners, and exceptional founders solving real-world problems.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 font-semibold text-xs tracking-wider uppercase transition-colors rounded-sm"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
