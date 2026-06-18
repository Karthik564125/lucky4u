import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import GlassCard from '../components/UI/GlassCard'
import { BentoGrid, BentoItem } from '../components/UI/BentoGrid'

interface PortfolioItem {
  id: string
  name: string
  sector: string
  geography: string
  investmentType: string
  categoryText: string
  description: string
  category: 'consumer-food' | 'frontier-technology' | 'climate-sustainability' | 'agriculture-trade' | 'funds-secondary'
  isDirect: boolean
  isOperating: boolean
  isFeatured: boolean // Bento layout flag
  metrics?: { label: string; value: string }[]
}

const portfolioItems: PortfolioItem[] = [
  // Operating platforms - Bento style double grid
  {
    id: 'lucky-avocado',
    name: 'Lucky 4U Avocado Limited',
    sector: 'Agro-Processing & Export',
    geography: 'Kenya / East Africa',
    investmentType: '100% Operating Subsidiary',
    categoryText: 'Agriculture & Trade',
    description: 'A vertically integrated agri-processing and packaging platform. We secure end-to-end logistics from local smallholder growers to international GCC market networks, optimizing post-harvest cold storage.',
    category: 'agriculture-trade',
    isDirect: true,
    isOperating: true,
    isFeatured: true,
    metrics: [
      { label: 'Growers Assisted', value: '4,500+' },
      { label: 'Income Uplift', value: '+34%' },
      { label: 'Export Cap', value: '250 Tons/Yr' }
    ]
  },
  {
    id: 'lucky-traders',
    name: 'Lucky 4U Traders FZCO',
    sector: 'International Trade & Clearing',
    geography: 'Dubai, UAE',
    investmentType: '100% Operating Subsidiary',
    categoryText: 'Agriculture & Trade',
    description: 'The commercial clearing and trade backbone of L4U. Located in Dubai, this engine orchestrates custom border filings, wholesale networks, credit line configurations, and route-to-market scaling.',
    category: 'agriculture-trade',
    isDirect: true,
    isOperating: true,
    isFeatured: true,
    metrics: [
      { label: 'Custom Clearances', value: 'Zero-Friction' },
      { label: 'Corridors Managed', value: 'GCC & Africa' }
    ]
  },
  {
    id: 'omspace-rocket',
    name: 'Omspace Rocket',
    sector: 'Space & Aerospace Systems',
    geography: 'India / Global',
    investmentType: 'Venture Capital Stake',
    categoryText: 'frontier-technology',
    description: 'Advancing indigenous sub-orbital rocket capabilities, payload integration modules, and micro-satellite launchers to reduce launch cost structures for global communication providers.',
    category: 'frontier-technology',
    isDirect: true,
    isOperating: false,
    isFeatured: true,
    metrics: [
      { label: 'Patents Pending', value: '3 Filings' },
      { label: 'Engineering Jobs', value: '80+ Experts' }
    ]
  },
  // Direct Investments - Standard Grid
  {
    id: 'sow-and-reap',
    name: 'Sow and Reap Pvt Ltd',
    sector: 'Biochar & Carbon Removal',
    geography: 'Emerging Markets',
    investmentType: 'Sustainable Equity',
    categoryText: 'Climate & ESG',
    description: 'Reforming crop residual burning by converting agricultural waste to biochar, restoring soil health, and yielding verifiable carbon removal credits for compliance markets.',
    category: 'climate-sustainability',
    isDirect: true,
    isOperating: false,
    isFeatured: false,
    metrics: [
      { label: 'Carbon Removed', value: '1,200 Tons' }
    ]
  },
  {
    id: 'mitra-foods',
    name: 'Mitra Foods',
    sector: 'Food & FMCG Manufacturing',
    geography: 'India',
    investmentType: 'Direct Equity (Listed Exit)',
    categoryText: 'Consumer & Food',
    description: 'Packaging and scaling localized food products, demonstrating pathways to efficiency in manufacturing-to-shelf distribution models.',
    category: 'consumer-food',
    isDirect: true,
    isOperating: false,
    isFeatured: false,
  },
  {
    id: 'skippi',
    name: 'Skippi Ice Pops',
    sector: 'Consumer FMCG Brand',
    geography: 'India / Global',
    investmentType: 'Growth Equity',
    categoryText: 'Consumer & Food',
    description: 'Converting regional product innovations into multi-channel consumer retail scale, driving factory employment and local supply procurement.',
    category: 'consumer-food',
    isDirect: true,
    isOperating: false,
    isFeatured: false,
  },
  {
    id: 'tracker-suite',
    name: 'Tracker Suite AI',
    sector: 'Enterprise AI & SaaS',
    geography: 'Global',
    investmentType: 'Venture Equity',
    categoryText: 'Frontier Tech',
    description: 'Orchestrating workflow intelligence and predictive cargo trackers to optimize commercial operating pipeline efficiencies.',
    category: 'frontier-technology',
    isDirect: true,
    isOperating: false,
    isFeatured: false,
  },
  {
    id: 'smartbridge',
    name: 'Smartbridge Distribution',
    sector: 'Agribusiness Logistics',
    geography: 'Kenya / East Africa',
    investmentType: 'Joint Venture Asset',
    categoryText: 'Agriculture & Trade',
    description: 'Solving last-mile delivery blockages in agricultural distribution, bridging regional grower grids to export shipping lanes.',
    category: 'agriculture-trade',
    isDirect: true,
    isOperating: true,
    isFeatured: false,
  },
  // Fund allocations
  {
    id: 'cornerstone-ventures',
    name: 'Cornerstone Ventures Fund',
    sector: 'Tech-Led Growth Ventures',
    geography: 'India / Global',
    investmentType: 'Fund Allocation',
    categoryText: 'Private Markets',
    description: 'Allocations inside managed pools targeting high-growth software and digital transformation platforms across emerging corridors.',
    category: 'funds-secondary',
    isDirect: false,
    isOperating: false,
    isFeatured: false,
  },
  {
    id: '1mx-ai-fund',
    name: '1MX AI Fund',
    sector: 'Artificial Intelligence Pools',
    geography: 'Global',
    investmentType: 'Fund Allocation',
    categoryText: 'Private Markets',
    description: 'Dedicated fund participation mapping foundational artificial intelligence and workflow automation developments.',
    category: 'funds-secondary',
    isDirect: false,
    isOperating: false,
    isFeatured: false,
  },
  {
    id: 'non-public',
    name: 'Non Public Pty Ltd',
    sector: 'Pre-IPO Secondary Placements',
    geography: 'Global',
    investmentType: 'Secondary Placements',
    categoryText: 'Private Markets',
    description: 'Tactical secondary visibility in mature private technology leaders ahead of liquidity events.',
    category: 'funds-secondary',
    isDirect: false,
    isOperating: false,
    isFeatured: false,
  }
]

const categories = [
  { id: 'all', name: 'All Portfolios' },
  { id: 'agriculture-trade', name: 'Agribusiness & Trade' },
  { id: 'frontier-technology', name: 'Frontier Tech & AI' },
  { id: 'climate-sustainability', name: 'Climate & ESG' },
  { id: 'consumer-food', name: 'Consumer & FMCG' },
  { id: 'funds-secondary', name: 'Funds & Secondaries' },
]

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterParam = searchParams.get('filter') || 'all'
  const [activeFilter, setActiveFilter] = useState(filterParam)

  useEffect(() => {
    setActiveFilter(filterParam)
  }, [filterParam])

  const handleFilterChange = (filterId: string) => {
    setSearchParams({ filter: filterId })
  }

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  )

  return (
    <div className="bg-brand-navy-950 text-white font-sans min-h-screen overflow-x-hidden">
      
      {/* Page Header (Navy Theme) */}
      <section className="relative bg-brand-navy-950 py-24 border-b border-brand-navy-900/60 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase font-heading">
              Asset Register
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
              Our <span className="text-brand-gold-400">Portfolio</span> Platforms
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mt-4">
              Explore our direct operating subsidiaries, sustainable infrastructure models, deep tech ventures, and secondary fund placements.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="sticky top-20 z-30 bg-brand-navy-950 border-b border-brand-navy-900 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pb-2 -mb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                className={`px-5 py-3 text-xs font-heading font-bold tracking-widest uppercase border transition-all shrink-0 rounded-none cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-brand-gold-500 border-brand-gold-500 text-brand-navy-950'
                    : 'border-brand-navy-800 text-gray-400 hover:border-brand-gold-500/30 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO BENTO & GRID */}
      <section className="py-24 bg-brand-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <BentoGrid className="text-left">
            {filteredItems.map((item) => {
              const isFeatured = item.isFeatured && activeFilter === 'all'
              
              return (
                <BentoItem
                  key={item.id}
                  colSpan={isFeatured ? 'lg:col-span-2' : 'lg:col-span-1'}
                  className="flex flex-col h-full"
                >
                  <GlassCard glow={isFeatured} className="h-full flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Sector & Location */}
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold-400 font-heading">
                          {item.sector}
                        </span>
                        <span className="inline-flex items-center text-[9px] text-gray-400 uppercase tracking-widest font-heading">
                          <MapPin className="w-3.5 h-3.5 text-brand-gold-500 mr-1" />
                          {item.geography}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className={`font-heading font-extrabold text-white leading-snug ${
                        isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'
                      }`}>
                        {item.name}
                      </h3>

                      {/* Investment Category label */}
                      <div className="inline-block px-2.5 py-1 bg-brand-navy-950 border border-brand-navy-850 text-[9px] uppercase tracking-widest font-heading font-bold text-brand-gold-500">
                        {item.investmentType}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-300 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Embedded metrics widget */}
                    {item.metrics && item.metrics.length > 0 && (
                      <div className={`grid gap-4 pt-6 border-t border-brand-navy-850 ${
                        isFeatured ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-1'
                      }`}>
                        {item.metrics.map((metric, idx) => (
                          <div key={idx} className="p-3 bg-brand-navy-950/70 border border-brand-navy-850">
                            <span className="text-[8px] uppercase tracking-widest text-gray-500 font-semibold font-heading block">
                              {metric.label}
                            </span>
                            <span className="text-sm font-heading font-extrabold text-brand-gold-400 block mt-0.5">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                </BentoItem>
              )
            })}
          </BentoGrid>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20 border border-dashed border-brand-navy-850 max-w-lg mx-auto mt-12 space-y-4">
              <span className="text-sm text-gray-400 font-light">No active placements found in this segment.</span>
            </div>
          )}

        </div>
      </section>

      {/* PORTFOLIO METHODOLOGY CALLOUT */}
      <section className="py-20 bg-brand-navy-900/20 border-t border-brand-navy-900/60 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-xl font-heading font-bold text-white tracking-tight">
            How L4U Operates
          </h3>
          <p className="text-xs text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Every operational subsidiary and asset allocation complies with our strict underwriting protocols. We co-develop distribution grids, structure compliance metrics, and provide active board governance.
          </p>
          <div className="pt-2">
            <Link
              to="/philosophy"
              className="inline-flex items-center text-xs font-heading font-bold tracking-wider text-brand-gold-400 hover:text-brand-gold-300 uppercase"
            >
              Read Valuation Parameters
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}
