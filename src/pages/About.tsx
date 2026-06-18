import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Landmark, Briefcase, TrendingUp, Target, Globe2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import GlassCard from '../components/UI/GlassCard'

const timelineMilestones = [
  {
    year: '2018',
    title: 'Trade Corridor Foundations',
    subtitle: 'Agribusiness Roots',
    description: 'Began operational trading in agricultural supply networks across East Africa, identifying major bottlenecks in storage and clearance.'
  },
  {
    year: '2020',
    title: 'Asset Acquisition & Processing',
    subtitle: 'Agro-processing Platforms',
    description: 'Acquired processing facilities in Kenya, scaling from pure brokerage to full cold-chain and export pipeline ownership.'
  },
  {
    year: '2022',
    title: 'Establishing Dubai HQ',
    subtitle: 'L4U Traders FZCO Launch',
    description: 'Incorporated central operations in Dubai, UAE, enabling direct credit lines and border clearance synchronization.'
  },
  {
    year: '2024',
    title: 'Frontier Tech & ESG Expansion',
    subtitle: 'Incubating Tech Assets',
    description: 'Underwrote direct equity stakes in Deep Tech and space initiatives (Omspace Rocket) and biochar climate frameworks.'
  },
  {
    year: '2026',
    title: 'Global Operating Platform',
    subtitle: 'Institutional Integration',
    description: 'Managing integrated networks that secure job outcomes, support farmer livelihoods, and run AI logistics.'
  }
]

const pillars = [
  {
    title: 'Dubai Clearing Infrastructure',
    description: 'Routing compliance and custom clearances in the GCC, eliminating shipping delays for agribusiness export.'
  },
  {
    title: 'Operator-First Capital',
    description: 'We do not act as passive allocators. Our operational teams manage distribution pipelines and warehouses.'
  },
  {
    title: 'ESG Livelihood Ledger',
    description: 'Evaluating every capital allocation on structural metrics: carbon removed, jobs created, and income uplift.'
  }
]

export default function About() {
  const [activeTab, setActiveTab] = useState<'operations' | 'investments'>('operations')

  return (
    <div className="bg-brand-navy-950 text-white font-sans min-h-screen overflow-x-hidden">
      
      {/* Page Header (Navy Theme) */}
      <section className="relative bg-brand-navy-950 py-24 border-b border-brand-navy-900/60 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase font-heading">
              Our Identity
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
              An Active{' '}
              <span className="text-brand-gold-400">Operating</span>{' '}
              &amp; Investment Force
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mt-4">
              Headquartered in Dubai, Lucky 4U Holdings builds the physical networks, trade pathways, and technologies that transform regional trade corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy and Purpose - Editorial Layout */}
      <section className="py-24 bg-white text-brand-navy-950 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Narrative Title */}
            <div className="lg:col-span-5 text-left space-y-4">
              <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase font-heading block">
                The Heritage
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-navy-950 tracking-tight leading-tight">
                From Local Agribusiness to Global Infrastructure
              </h2>
              <div className="w-16 h-[2px] bg-brand-gold-500 mt-4" />
            </div>

            {/* Right Detailed Legacy Blocks */}
            <div className="lg:col-span-7 space-y-8 text-left text-gray-600 font-light text-sm sm:text-base leading-relaxed">
              <div>
                <h3 className="text-lg font-heading font-bold text-brand-navy-950 mb-2">Our Operating Core</h3>
                <p>
                  Lucky 4U Holdings began not in boardroom corridors, but inside agricultural processing centers. We learned that capital alone cannot solve the structural issues of emerging economies: agricultural crop wastage, logistics bottlenecks, lack of compliance, and volatile trade channels. 
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-heading font-bold text-brand-navy-950 mb-2">Why Dubai is Our Gateway</h3>
                <p>
                  By centering our trade operations (Lucky 4U Traders FZCO) inside Dubai, UAE, we connect farmers in East Africa and developers in India directly to GCC consumption markets. Dubai provides the financial clearing, compliance safety nets, and routing infrastructure necessary to build durable corporate bridges.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-bold text-brand-navy-950 mb-2">Measuring Value, Not Just Margins</h3>
                <p>
                  Our commitment is simple: we measure every dollar deployed by the industries it builds, the farming households it supports, the export supply chain efficiencies it gains, and the technology engineers it employs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE TOGGLE: DIRECT OPERATIONS VS CAPITAL ALLOCATIONS */}
      <section className="py-24 bg-brand-navy-950 border-b border-brand-navy-900/60 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase font-heading">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
              Operational Depth vs. Capital Placement
            </h2>
            <p className="text-xs text-gray-400 max-w-xl mx-auto font-light">
              Toggle to explore how we partition direct operational control from thematic venture placements.
            </p>
            
            {/* Interactive Toggle Switch */}
            <div className="pt-6 flex justify-center">
              <div className="inline-flex p-1 bg-brand-navy-900 border border-brand-navy-800 rounded-none">
                <button
                  onClick={() => setActiveTab('operations')}
                  className={`px-6 py-2.5 text-xs font-heading font-bold tracking-widest uppercase transition-all cursor-pointer ${
                    activeTab === 'operations'
                      ? 'bg-brand-gold-500 text-brand-navy-950'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Direct Operating Units
                </button>
                <button
                  onClick={() => setActiveTab('investments')}
                  className={`px-6 py-2.5 text-xs font-heading font-bold tracking-widest uppercase transition-all cursor-pointer ${
                    activeTab === 'investments'
                      ? 'bg-brand-gold-500 text-brand-navy-950'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Investment Allocations
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content Display with Framer Motion */}
          <div className="min-h-[380px]">
            <AnimatePresence mode="wait">
              {activeTab === 'operations' ? (
                <motion.div
                  key="operations"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
                >
                  <GlassCard glow={true}>
                    <Briefcase className="w-6 h-6 text-brand-gold-500 mb-4" />
                    <h3 className="text-lg font-heading font-extrabold text-white mb-2">Lucky 4U Avocado Limited</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                      Direct agricultural processing infrastructure in Kenya, managing crop collection, cooling, packaging, and export protocols.
                    </p>
                    <div className="text-[10px] text-brand-gold-400 font-heading uppercase tracking-wider">
                      Ownership: 100% Operating Subsidiary
                    </div>
                  </GlassCard>

                  <GlassCard glow={true}>
                    <Globe2 className="w-6 h-6 text-brand-gold-500 mb-4" />
                    <h3 className="text-lg font-heading font-extrabold text-white mb-2">Lucky 4U Traders FZCO</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                      Dubai headquarters trade clearance engine orchestrating border compliance, letters of credit, and GCC wholesale networks.
                    </p>
                    <div className="text-[10px] text-brand-gold-400 font-heading uppercase tracking-wider">
                      Ownership: 100% Operating Subsidiary
                    </div>
                  </GlassCard>

                  <GlassCard glow={true}>
                    <Landmark className="w-6 h-6 text-brand-gold-500 mb-4" />
                    <h3 className="text-lg font-heading font-extrabold text-white mb-2">Smartbridge Distribution</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                      Agro-processing transport logistics grid bridging East African supplier farms with direct shipping gateways.
                    </p>
                    <div className="text-[10px] text-brand-gold-400 font-heading uppercase tracking-wider">
                      Ownership: Direct Joint-Venture Asset
                    </div>
                  </GlassCard>
                </motion.div>
              ) : (
                <motion.div
                  key="investments"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
                >
                  <GlassCard>
                    <Target className="w-6 h-6 text-brand-gold-500 mb-4" />
                    <h3 className="text-lg font-heading font-extrabold text-white mb-2">Omspace Rocket</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                      Venture capital support for indigenous launch vehicles, payload modules, and satellite aerospace developments.
                    </p>
                    <div className="text-[10px] text-brand-gold-400 font-heading uppercase tracking-wider">
                      Asset Type: Direct Growth Venture
                    </div>
                  </GlassCard>

                  <GlassCard>
                    <ShieldCheck className="w-6 h-6 text-brand-gold-500 mb-4" />
                    <h3 className="text-lg font-heading font-extrabold text-white mb-2">1MX AI & Tech Funds</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                      Passive pool fund allocations giving L4U strategic visibility over foundational automation and enterprise software trends.
                    </p>
                    <div className="text-[10px] text-brand-gold-400 font-heading uppercase tracking-wider">
                      Asset Type: Venture Fund Allocation
                    </div>
                  </GlassCard>

                  <GlassCard>
                    <TrendingUp className="w-6 h-6 text-brand-gold-500 mb-4" />
                    <h3 className="text-lg font-heading font-extrabold text-white mb-2">Pre-IPO Secondary Placements</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                      Tactical allocations in late-stage technology leaders to diversify group assets and optimize liquid cashouts.
                    </p>
                    <div className="text-[10px] text-brand-gold-400 font-heading uppercase tracking-wider">
                      Asset Type: Secondary Equity
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* FOUNDER JOURNEY: HORIZONTAL MILESTONE TIMELINE */}
      <section className="py-28 bg-white text-brand-navy-950 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-20 space-y-3 text-left">
            <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase font-heading">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-navy-950 tracking-tight leading-tight">
              A Timeline of Value Construction
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold-500" />
            <p className="text-sm text-gray-500 font-light max-w-xl leading-relaxed">
              We grew by addressing bottlenecks, building direct assets step-by-step from trade nodes to institutional structures.
            </p>
          </div>

          {/* HORIZONTAL TIMELINE — Desktop */}
          <div className="hidden md:block relative">
            {/* Connector line */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-brand-gold-500/15" />
            <div className="absolute top-6 left-0 w-2/5 h-[2px] bg-brand-gold-500/60" />

            <div className="grid grid-cols-5 gap-0">
              {timelineMilestones.map((milestone, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center px-4">
                  {/* Node */}
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-white border-2 border-brand-gold-500 mb-6">
                    <span className="font-heading font-extrabold text-sm text-brand-gold-600">{milestone.year.slice(2)}</span>
                  </div>
                  {/* Year label */}
                  <span className="text-xs font-heading font-extrabold text-brand-gold-700 tracking-wide mb-1">{milestone.year}</span>
                  {/* Subtitle */}
                  <span className="text-[9px] tracking-widest text-gray-400 font-bold uppercase font-heading mb-2 block">
                    {milestone.subtitle}
                  </span>
                  {/* Title */}
                  <h3 className="text-sm font-heading font-bold text-brand-navy-950 leading-snug mb-2">
                    {milestone.title}
                  </h3>
                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VERTICAL TIMELINE — Mobile fallback */}
          <div className="md:hidden relative border-l-2 border-brand-gold-500/20 ml-3 space-y-10 text-left">
            {timelineMilestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-2 border-brand-gold-500" />
                <span className="text-xs font-bold text-brand-gold-700 font-heading block mb-0.5">{milestone.year}</span>
                <span className="text-[10px] tracking-wider text-gray-400 font-bold uppercase font-heading block">{milestone.subtitle}</span>
                <h3 className="text-base font-heading font-bold text-brand-navy-950 mt-1">{milestone.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light mt-1">{milestone.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INSTITUTIONAL PILLARS / TRUST SECTION */}
      <section className="py-24 bg-brand-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase font-heading">
              Governance Standard
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-white tracking-tight">
              Sovereign & Regulatory Alignment
            </h2>
            <div className="w-12 h-[2px] bg-brand-gold-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <GlassCard key={index} glow={false} className="flex flex-col justify-between text-left h-full">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-brand-gold-500">
                    <span className="font-heading font-extrabold text-lg">0{index + 1}</span>
                    <div className="h-[1px] w-6 bg-brand-gold-500/30" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Quick inline CTAs */}
          <div className="mt-20 p-8 border border-brand-navy-900 bg-brand-navy-900/30 text-left flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="space-y-1">
              <h4 className="text-sm font-heading font-bold text-white">Interested in reviewing our portfolio assets?</h4>
              <p className="text-xs text-gray-400 font-light">Explore a complete breakdown of direct operations and secondary placements.</p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center text-xs font-heading font-bold tracking-wider text-brand-gold-400 hover:text-brand-gold-300 uppercase shrink-0"
            >
              Go to Portfolio Asset List
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}
