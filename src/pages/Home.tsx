import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, ShieldCheck, Landmark, Briefcase } from 'lucide-react'
import GlassCard from '../components/UI/GlassCard'
import InteractiveMap from '../components/UI/InteractiveMap'
import { BentoGrid, BentoItem } from '../components/UI/BentoGrid'
import StrategicNetwork from '../components/UI/StrategicNetwork'

// Framer Motion transition curves
const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number]

const keyMetrics = [
  { value: '4,500+', label: 'Farming Households Impacted' },
  { value: '$250M+', label: 'Assets Under Management' },
  { value: '3', label: 'Operational Corridors' },
  { value: '8+', label: 'Portfolio Companies' },
  { value: '1,200 T', label: 'Carbon Tonnes Removed' },
]

export default function Home() {
  return (
    <div className="bg-brand-navy-950 text-white font-sans min-h-screen overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 lg:py-32 border-b border-brand-navy-900/60 overflow-hidden">
        {/* Obsidian Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Soft Radial Glow Spots */}
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-brand-gold-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-brand-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
                className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-gold-500/10 border border-brand-gold-500/20 rounded-none"
              >
                <span className="w-1.5 h-1.5 bg-brand-gold-400 rounded-full animate-pulse" />
                <span className="text-[10px] tracking-widest uppercase text-brand-gold-400 font-semibold font-heading">
                  Dubai-Headquartered Institutional Platform
                </span>
              </motion.div>

              {/* Bold Headline — clean typography, no cursive */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: easeOutExpo }}
                className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.08]"
              >
                We build <span className="gold-gradient-text">industries</span>,<br />
                strengthen <span className="text-brand-gold-400">communities</span>,<br />
                and unlock long-term value.
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: easeOutExpo }}
                className="text-gray-300 font-light text-base sm:text-lg leading-relaxed max-w-xl"
              >
                Lucky 4U Holdings is a premier private operating and investment firm. We bridge capital, infrastructure, and technology across emerging corridors — securing jobs, optimizing supply chains, and compounding physical assets.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: easeOutExpo }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 font-semibold text-xs tracking-wider uppercase transition-colors rounded-none shadow-lg shadow-brand-gold-500/5 font-heading"
                >
                  Explore Asset Register
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-brand-gold-500/30 hover:border-brand-gold-500 text-white hover:text-brand-gold-400 font-semibold text-xs tracking-wider uppercase transition-colors rounded-none font-heading"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </div>

            {/* Right: Strategic Network Visual */}
            <div className="lg:col-span-5 hidden lg:block relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: easeOutExpo }}
              >
                <StrategicNetwork />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BOLD METRICS STRIP */}
      <section className="bg-brand-navy-900 border-b border-brand-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {keyMetrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 * idx, ease: easeOutExpo }}
                className={`py-7 px-6 text-left border-r border-brand-navy-800 last:border-r-0 ${idx >= 3 ? 'border-t border-brand-navy-800 lg:border-t-0' : ''}`}
              >
                <span className="block text-2xl lg:text-3xl font-heading font-extrabold text-brand-gold-400 tracking-tight">
                  {m.value}
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-gray-500 font-semibold font-heading mt-1.5">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE GEOGRAPHIC CORRIDOR SECTION */}
      <section className="py-24 border-b border-brand-navy-900/60 bg-brand-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-16 space-y-3 text-left">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase font-heading">
              Operational Corridors
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              An Integrated Economic Network
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold-500" />
            <p className="text-sm text-gray-400 font-light max-w-xl leading-relaxed">
              We operate at the intersections of capital, distribution compliance, and processing infrastructure across high-growth emerging economies.
            </p>
          </div>

          <InteractiveMap />

        </div>
      </section>

      {/* 4. ACTIVE VALUE LEDGER (BENTO GRID) */}
      <section className="py-28 bg-brand-navy-900/20 border-b border-brand-navy-900/60 relative">
        <div className="absolute inset-0 bg-radial-at-t from-brand-gold-500/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-20 space-y-3 text-left">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase font-heading">
              Value Creation Ledger
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Building Industries &amp; Strengthening Communities
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold-500" />
            <p className="text-sm text-gray-400 font-light max-w-xl leading-relaxed">
              Durable growth occurs when capital addresses structural bottlenecks. Here is how we construct value inside our operating platforms.
            </p>
          </div>

          <BentoGrid className="text-left">

            {/* Bento 1: Agribusiness */}
            <BentoItem colSpan="lg:col-span-2">
              <GlassCard glow={true} className="h-full flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-brand-gold-400 font-heading">
                      Physical Agribusiness &amp; Supply Chains
                    </span>
                    <span className="p-2 bg-brand-gold-500/10 border border-brand-gold-500/20 text-brand-gold-400">
                      <Briefcase className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-white leading-snug">
                    East Africa to Gulf Trade Integration
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    By acquiring agricultural processing plants and structuring last-mile logistics, we establish direct export channels from Kenyan growers to Dubai trade hubs — eliminating intermediaries, guaranteeing quality compliance, and securing stable revenue.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-navy-800">
                  <div>
                    <span className="text-2xl font-heading font-extrabold text-brand-gold-400">4,500+</span>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Farming Households Assisted</p>
                  </div>
                  <div>
                    <span className="text-2xl font-heading font-extrabold text-brand-gold-400">+34%</span>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Grower Income Uplift</p>
                  </div>
                  <div>
                    <span className="text-2xl font-heading font-extrabold text-brand-gold-400">100%</span>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Operational Asset Control</p>
                  </div>
                </div>
              </GlassCard>
            </BentoItem>

            {/* Bento 2: Technology */}
            <BentoItem colSpan="lg:col-span-1">
              <GlassCard className="h-full flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-brand-gold-400 font-heading">
                      Deep Tech &amp; AI Platforms
                    </span>
                    <span className="p-2 bg-brand-gold-500/10 border border-brand-gold-500/20 text-brand-gold-400">
                      <Globe className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-white leading-snug">
                    Frontier Technology Solutions
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    We incubate and fund platforms addressing foundational tech — including indigenous launch vehicles (Omspace Rocket) and AI workflow automation (Tracker Suite AI).
                  </p>
                </div>
                <div className="pt-6 border-t border-brand-navy-800">
                  <span className="text-2xl font-heading font-extrabold text-brand-gold-400">200+</span>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Engineering Jobs Incubated</p>
                </div>
              </GlassCard>
            </BentoItem>

            {/* Bento 3: Sustainability */}
            <BentoItem colSpan="lg:col-span-1">
              <GlassCard className="h-full flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-brand-gold-400 font-heading">
                      Climate &amp; Carbon Removal
                    </span>
                    <span className="p-2 bg-brand-gold-500/10 border border-brand-gold-500/20 text-brand-gold-400">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-white leading-snug">
                    Sustainable Value Blueprints
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    Funding biochar carbon removal systems (Sow and Reap Pvt Ltd) that sequester carbon, restore soil health, and return verifiable carbon credit revenue to growers.
                  </p>
                </div>
                <div className="pt-6 border-t border-brand-navy-800">
                  <span className="text-2xl font-heading font-extrabold text-brand-gold-400">1,200 Tons</span>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Verifiable Carbon Removed</p>
                </div>
              </GlassCard>
            </BentoItem>

            {/* Bento 4: Dubai Clearing Gateway */}
            <BentoItem colSpan="lg:col-span-2">
              <GlassCard glow={true} className="h-full flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-brand-gold-400 font-heading">
                      Trade Desk Operations
                    </span>
                    <span className="p-2 bg-brand-gold-500/10 border border-brand-gold-500/20 text-brand-gold-400">
                      <Landmark className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-white leading-snug">
                    Lucky 4U Traders FZCO (Dubai Gateway)
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    Headquartered inside Dubai's free zones, our clearing operations secure end-to-end routing: credit line orchestration, global trade compliance, and route-to-market scaling across Emerging Market corridors.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-brand-navy-800">
                  <div>
                    <span className="text-2xl font-heading font-extrabold text-brand-gold-400">GCC &amp; East Africa</span>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Direct Clearing Corridors</p>
                  </div>
                  <div>
                    <span className="text-2xl font-heading font-extrabold text-brand-gold-400">Zero-Friction</span>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Custom Border Logistics Pipeline</p>
                  </div>
                </div>
              </GlassCard>
            </BentoItem>

          </BentoGrid>

        </div>
      </section>

      {/* 5. CHAIRMAN'S MESSAGE */}
      <section className="py-28 bg-white text-brand-navy-950 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            {/* Left: Quote */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase font-heading">
                Leadership Framework
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-navy-950 tracking-tight leading-[1.1]">
                A Message from the Chairman
              </h2>
              <div className="w-16 h-[2px] bg-brand-gold-500" />

              <blockquote className="border-l-4 border-brand-gold-500 pl-6 py-2">
                <p className="font-serif italic text-xl sm:text-2xl text-brand-navy-900 leading-relaxed font-light">
                  "Vision, patience, and operational execution are the bedrocks of sustainable capital growth. We act as builders, not simply allocators."
                </p>
                <footer className="mt-4">
                  <cite className="not-italic text-sm font-heading font-bold text-brand-navy-950">
                    Surya Pavan Kumar Avva
                  </cite>
                  <p className="text-[10px] text-brand-gold-700 uppercase font-semibold tracking-wider">
                    Founder &amp; Chairman, Lucky 4U Holdings
                  </p>
                </footer>
              </blockquote>
            </div>

            {/* Right: Letter */}
            <div className="lg:col-span-7 space-y-6 text-left text-gray-600 font-light text-sm sm:text-base leading-relaxed border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-12">
              <p className="text-brand-navy-950 font-medium">
                At Lucky 4U Holdings, we operate with a singular conviction: raw capital alone is no longer a differentiator in fast-growth corridors.
              </p>
              <p>
                To generate enduring value across India, East Africa, and the Middle East, capital must be coupled with deep operational discipline, supply chain control, and market access infrastructure. We step directly into the spaces we fund — setting up packaging yards, sorting trade routes, managing customs clearances, and deploying AI workflows.
              </p>
              <p>
                Our Dubai headquarters provides the nexus of financial compliance, logistical connectivity, and legal frameworks to scale emerging market founders. We target opportunities that make physical communities stronger and unlock real economic capability.
              </p>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-heading font-bold text-brand-navy-950">
                    Surya Pavan Kumar Avva
                  </p>
                  <p className="text-[10px] text-brand-gold-700 font-semibold uppercase tracking-wider mt-0.5">
                    Founder &amp; Chairman
                  </p>
                </div>
                <span className="text-3xl text-gray-200 select-none tracking-widest font-bold font-heading block">
                  S.P.K.A
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INSTITUTIONAL INTAKE CTA */}
      <section className="bg-brand-navy-950 py-24 text-center relative overflow-hidden border-t border-brand-navy-900/60">
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-gold-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
          <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase font-heading">
            Institutional Desk
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Initiate a Strategic Dialogue
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            We collaborate with sovereign offices, institutional co-investors, family offices, and operators scaling high-conviction platforms. Submissions reviewed by our Investment Committee on a rolling basis.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 font-semibold text-xs tracking-wider uppercase transition-colors rounded-none font-heading"
            >
              Submit Proposal Inquiry
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/philosophy"
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-navy-800 hover:border-brand-gold-500/30 text-gray-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-colors rounded-none font-heading"
            >
              Read Investment Philosophy
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
