import { Landmark, Users, Briefcase, TrendingUp, Compass, Target, Globe2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../components/UI/Card'

const highlights = [
  {
    title: 'Headquartered in Dubai',
    description: 'Operating out of Dubai, UAE, the premier gateway connecting Middle East, India, Africa, and global financial markets.',
    icon: Landmark,
  },
  {
    title: 'Founder-Led Investment Approach',
    description: 'We prioritize strong partnership alignment with founders who possess operational excellence and sector expertise.',
    icon: Users,
  },
  {
    title: 'Operating + Investment Mindset',
    description: 'Beyond providing growth equity, we build, incubate, and operate direct trading and agricultural platforms.',
    icon: Briefcase,
  },
  {
    title: 'Long-Term Capital',
    description: 'Family-backed resources allow us to maintain patient horizon cycles, prioritizing compounding value over exit urgency.',
    icon: TrendingUp,
  },
]

const executivePillars = [
  {
    title: 'Strategic Operating Expertise',
    subtitle: 'Interdisciplinary Track Record',
    description: 'Our leadership leverages decades of interdisciplinary experience across trade, retail distribution, space technologies, and climate science. We translate raw capital into strategic execution blueprints.',
    icon: Target,
  },
  {
    title: 'Global Market Focus',
    subtitle: 'Emerging Trade Corridors',
    description: 'By positioning our core clearing operations in the UAE, we directly facilitate capital, supply chain compliance, and business scale across the fast-growth corridors of India, East Africa, and global networks.',
    icon: Globe2,
  },
  {
    title: 'Founder-Led Alignment',
    subtitle: 'Operator-First Capital',
    description: 'We do not act as passive allocators. We co-invest with founders who run asset-heavy or tech-forward projects, integrating them into our existing logistics, custom clearance, and AI distribution pathways.',
    icon: Users,
  },
]

export default function About() {
  return (
    <div className="bg-white text-brand-navy-950 font-sans min-h-screen">
      
      {/* Page Header (Navy Theme) */}
      <section className="bg-brand-navy-950 text-white py-20 md:py-28 border-b border-brand-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase">
              Corporate Profile
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-white m-0">
              A Global Investment Platform from Dubai
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl mt-4">
              Lucky 4U Holdings is a family-backed investment and operating company headquartered in Dubai, UAE. We build bridges across high-growth global corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Copy Section (White/Gray layout) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Context Statement */}
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase block mb-3">
                Executive Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy-950 tracking-tight leading-snug">
                Pioneering innovation at the intersection of sustainability and global trade.
              </h2>
              <div className="w-12 h-[2px] bg-brand-gold-500 mt-6" />
            </div>

            {/* Right Column: Detailed narrative copy */}
            <div className="lg:col-span-7 space-y-6 text-gray-600 font-light leading-relaxed text-sm md:text-base">
              <p>
                Lucky 4U Holdings represents a multi-generational legacy of trading and investing, formalized into an institutional platform. From our primary offices in Dubai, we identify and fund enterprises solving high-barrier problems in critical sectors.
              </p>
              <p>
                We invest in and build companies that sit at the intersection of innovation, sustainability, scale, and long-term value creation. Our interests span emerging consumer brands, food and agriculture, climate-positive technologies, artificial intelligence, space exploration, venture funds, secondary private markets, and international trading.
              </p>
              <p>
                We work with founders, operators, and strategic partners who are solving real-world problems and creating businesses that can scale across markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Pillars / Institutional trust */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase">
              Trust & Credibility
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy-950 tracking-tight">
              Institutional Frameworks
            </h2>
            <div className="w-12 h-[2px] bg-brand-gold-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executivePillars.map((item, index) => {
              const IconComp = item.icon
              return (
                <div key={index} className="bg-brand-navy-950 text-white p-8 border border-brand-navy-800 rounded-none relative group hover:border-brand-gold-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                  <span className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />
                  <div className="space-y-4">
                    <div className="p-3 bg-brand-navy-900 border border-brand-navy-800 rounded-sm text-brand-gold-500 inline-block">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-wider text-brand-gold-500 uppercase font-semibold font-heading block">{item.subtitle}</span>
                      <h3 className="text-lg font-heading font-bold text-white mt-1">{item.title}</h3>
                    </div>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4 Highlights Grid Section */}
      <section className="py-24 bg-brand-gold-50/20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase">
              Operational Strategy
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy-950 tracking-tight">
              Strategic Advantages
            </h2>
            <div className="w-12 h-[2px] bg-brand-gold-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {highlights.map((item, index) => {
              const IconComp = item.icon
              return (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  label={`Pillar 0${index + 1}`}
                  icon={<IconComp className="w-6 h-6 text-brand-gold-600" />}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Governance & Vision section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-brand-navy-950 text-white p-8 md:p-16 border border-brand-navy-800 rounded-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase block">
                Alignment & Strategy
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                An Active Partner for Long-Term Scale
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                As a family-backed investment and operating group, we are not constrained by typical private equity horizons. We take structural, multi-decade positions in direct operations—facilitating cold-chain logistics, regional agricultural processing, and trade clearance directly in key geographies.
              </p>
              <div className="pt-4">
                <Link
                  to="/philosophy"
                  className="inline-flex items-center text-xs font-heading font-semibold text-brand-gold-500 hover:text-brand-gold-400 tracking-wider uppercase"
                >
                  Learn about our Investment Philosophy
                  <Compass className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
