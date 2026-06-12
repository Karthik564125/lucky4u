import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Shield, Landmark, TrendingUp } from 'lucide-react'
import Map from '../components/UI/Map'

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

      {/* 3. Geographic Presence Section (Deep Navy Theme) */}
      <section className="py-24 bg-brand-navy-950 text-white border-b border-brand-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase">
              Global Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
              Geographic Presence
            </h2>
            <div className="w-12 h-[2px] bg-brand-gold-500 mx-auto mt-4" />
          </div>
          
          {/* Interactive World Map */}
          <Map />

          {/* Region Cards Grid (Option B Integrated with Option A Map) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
            <div className="bg-brand-navy-900 border border-brand-navy-800 p-6 rounded-none relative group hover:border-brand-gold-500/50 transition-colors">
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />
              <span className="text-[10px] uppercase tracking-wider text-brand-gold-500 font-semibold block mb-2 font-heading">Global Headquarters</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">Dubai, UAE</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Headquarters, investment platform, and central trading hub coordinating global operations.
              </p>
            </div>
            <div className="bg-brand-navy-900 border border-brand-navy-800 p-6 rounded-none relative group hover:border-brand-gold-500/50 transition-colors">
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />
              <span className="text-[10px] uppercase tracking-wider text-brand-gold-500 font-semibold block mb-2 font-heading font-heading">South Asia Hub</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">India</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Primary focal market for FMCG brands, artificial intelligence, climate technology, and space exploration.
              </p>
            </div>
            <div className="bg-brand-navy-900 border border-brand-navy-800 p-6 rounded-none relative group hover:border-brand-gold-500/50 transition-colors">
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />
              <span className="text-[10px] uppercase tracking-wider text-brand-gold-500 font-semibold block mb-2 font-heading font-heading">East Africa Operations</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">Kenya / East Africa</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Integrated agricultural platforms, agro-processing, logistics, regional distribution, and exports.
              </p>
            </div>
            <div className="bg-brand-navy-900 border border-brand-navy-800 p-6 rounded-none relative group hover:border-brand-gold-500/50 transition-colors">
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />
              <span className="text-[10px] uppercase tracking-wider text-brand-gold-500 font-semibold block mb-2 font-heading font-heading">International Allocations</span>
              <h4 className="text-base font-heading font-bold text-white mb-2">Global Markets</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Strategic co-investments, late-stage secondary market allocations, and international commodities trading.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Chairman's Message Section (Elegant Gold/White Accent Layout) */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Prestigious Quote & Title */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative p-8 border border-brand-gold-500/30 bg-brand-gold-50/20 rounded-sm">
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
