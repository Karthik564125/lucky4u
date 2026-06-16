import { Leaf, Cpu, Award, Heart, Globe, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../components/UI/Card'


const pillars = [
  {
    number: '01',
    title: 'Essential Industries',
    short: 'Food, agriculture, logistics, climate, and trade.',
    description: 'We prioritize funding infrastructure and platforms that serve foundational human needs, focusing on securing supply chains, improving shelf-life, and optimizing physical commodity trade.',
    icon: Leaf,
  },
  {
    number: '02',
    title: 'Frontier Innovation',
    short: 'Space exploration, AI, and advanced technologies.',
    description: 'We deploy venture capital into paradigm-shifting domains including aerospace engineering, rocket payloads, enterprise-level automation, and predictive machine learning architectures.',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Scalable Consumer Brands',
    short: 'Products with strong market adoption and growth potential.',
    description: 'We back high-growth FMCG and consumer lifestyle brands that demonstrate clear product-market fit, capital efficiency, and regional distribution scalability.',
    icon: Award,
  },
  {
    number: '04',
    title: 'Sustainability & Impact',
    short: 'Businesses creating measurable environmental and social value.',
    description: 'We support carbon-positive initiatives, carbon-credit platforms, biochar projects, and circular economy startups that prove positive impact without compromising financial yields.',
    icon: Heart,
  },
  {
    number: '05',
    title: 'Strategic Market Access',
    short: 'Connecting Dubai, India, Africa, and global markets.',
    description: 'We act as a gateway, leveraging our Dubai operations to assist portfolio founders in expanding logistics corridors, licensing, and trade channels into emerging high-yield networks.',
    icon: Globe,
  },
]

export default function Philosophy() {
  return (
    <div className="bg-white text-brand-navy-950 font-sans min-h-screen">
      
      {/* Page Header (Navy Theme) */}
      <section className="bg-brand-navy-950 text-white py-16 md:py-24 border-b border-brand-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase">
              Core Mandate
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white m-0">
              Our Investment Philosophy
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl mt-4">
              We allocate capital where modern innovation intersects with foundational human necessity.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Statement Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase block">
              Investment Core Message
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy-950 tracking-tight leading-tight">
              "We invest where innovation meets necessity."
            </h2>
            <div className="w-12 h-[2px] bg-brand-gold-500 mx-auto" />
            <p className="text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto pt-4">
              Modern investment often prioritizes temporary hype over sustained utility. Lucky 4U Holdings actively focuses on sectors that form the backbone of the physical economy, coupled with breakthrough frontier technologies that will drive future optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-24 bg-brand-gold-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase">
              Operational Strategy
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy-950 tracking-tight">
              Five Pillars of Allocation
            </h2>
            <p className="text-xs text-gray-500 max-w-xl mx-auto font-light">
              Our allocation framework is split across essential industries, breakthrough technology platforms, and market-gateway operations.
            </p>
            <div className="w-12 h-[2px] bg-brand-gold-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const IconComp = pillar.icon
              return (
                <Card
                  key={index}
                  title={pillar.title}
                  subtitle={pillar.short}
                  description={pillar.description}
                  icon={<IconComp className="w-5 h-5 text-brand-gold-600" />}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Value Creation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase">
                Active Stewardship
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy-950 tracking-tight">
                Our Mandate: Value-Added Growth
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                We believe that capital alone is not a differentiator. As a family-backed office, we deliver active strategic guidance, regulatory clearance support, and cross-border trade facilitation.
              </p>
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                Whether helping an Indian FMCG brand enter Middle East distribution networks, or helping an agricultural processing company in Kenya set up carbon offsets, our team works hand-in-hand with our management teams to expand horizons.
              </p>
              <div className="pt-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-5 py-3 bg-brand-navy-950 hover:bg-brand-navy-900 text-white font-sans text-xs font-semibold tracking-wider uppercase transition-colors rounded-sm"
                >
                  Explore Portfolio Companies
                  <ArrowRight className="ml-2 w-4 h-4 text-brand-gold-500" />
                </Link>
              </div>
            </div>

            <div className="bg-brand-gold-50 border border-brand-gold-200/50 p-8 lg:p-12 space-y-6 rounded-sm">
              <h4 className="text-lg font-heading font-bold text-brand-navy-950">
                Key Parameters We Evaluate:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 bg-brand-navy-950 text-brand-gold-500 text-xs font-bold rounded-sm mr-3 shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h5 className="text-sm font-heading font-bold text-brand-navy-950">Strong Unit Economics</h5>
                    <p className="text-xs text-gray-500 font-light mt-0.5">Clear route to profitability without depending solely on endless equity cycles.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 bg-brand-navy-950 text-brand-gold-500 text-xs font-bold rounded-sm mr-3 shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h5 className="text-sm font-heading font-bold text-brand-navy-950">Scalability of Infrastructure</h5>
                    <p className="text-xs text-gray-500 font-light mt-0.5">Technology or physical logistics that scale without massive friction.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 bg-brand-navy-950 text-brand-gold-500 text-xs font-bold rounded-sm mr-3 shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h5 className="text-sm font-heading font-bold text-brand-navy-950">Strategic Alignment with Dubai Hub</h5>
                    <p className="text-xs text-gray-500 font-light mt-0.5">Opportunities that leverage the UAE’s trade, distribution, and financial frameworks.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
