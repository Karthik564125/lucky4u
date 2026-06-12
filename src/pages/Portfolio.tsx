import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Cpu, TrendingUp, Layers } from 'lucide-react'
import Card from '../components/UI/Card'

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
}

const portfolioItems: PortfolioItem[] = [
  // Direct Investments
  {
    id: 'mitra-foods',
    name: 'Mitra Foods',
    sector: 'Food & FMCG',
    geography: 'India',
    investmentType: 'Direct Equity (Listed Exit)',
    categoryText: 'Consumer & Food',
    description: "Mitra Foods represents Lucky 4U Holdings’ early interest in India’s fast-growing packaged food and FMCG sector. The company later became part of a listed Indian company, reflecting the group's focus on scalable businesses with strategic growth potential.",
    category: 'consumer-food',
    isDirect: true,
    isOperating: false,
  },
  {
    id: 'omspace-rocket',
    name: 'Omspace Rocket',
    sector: 'Space Exploration',
    geography: 'India / Global',
    investmentType: 'Venture Capital',
    categoryText: 'Frontier Tech',
    description: 'Omspace Rocket operates within the space exploration and rocket technology sector. Lucky 4U Holdings supports frontier innovation and the future of aerospace development.',
    category: 'frontier-technology',
    isDirect: true,
    isOperating: false,
  },
  {
    id: 'sow-and-reap',
    name: 'Sow and Reap Pvt Ltd',
    sector: 'Biochar / Carbon Removal',
    geography: 'Emerging Markets',
    investmentType: 'Sustainable Equity',
    categoryText: 'Climate & ESG',
    description: 'Sow and Reap focuses on climate-positive technologies including biochar and carbon removal solutions. The company aligns with sustainability, circular economy principles, and carbon-linked value creation.',
    category: 'climate-sustainability',
    isDirect: true,
    isOperating: false,
  },
  {
    id: 'skippi',
    name: 'Skippi',
    sector: 'Consumer Brand / FMCG',
    geography: 'India',
    investmentType: 'Growth Capital',
    categoryText: 'Consumer & Food',
    description: 'Skippi is a fast-growing consumer brand with strong market recognition and expansion potential. The investment reflects Lucky 4U Holdings’ interest in scalable consumer businesses.',
    category: 'consumer-food',
    isDirect: true,
    isOperating: false,
  },
  {
    id: 'tracker-suite',
    name: 'Tracker Suite AI',
    sector: 'Enterprise AI & SaaS',
    geography: 'Global',
    investmentType: 'Venture Equity',
    categoryText: 'Frontier Tech',
    description: 'Tracker Suite AI represents the group’s conviction in artificial intelligence and enterprise automation. The company focuses on improving business productivity through intelligent technology solutions.',
    category: 'frontier-technology',
    isDirect: true,
    isOperating: false,
  },
  {
    id: 'lucky-avocado',
    name: 'Lucky 4U Avocado Limited',
    sector: 'Agro-Processing & Export',
    geography: 'Kenya',
    investmentType: 'Operating Subsidiary',
    categoryText: 'Agriculture & Trade',
    description: 'Lucky 4U Avocado Limited is an integrated agriculture venture focused on avocado procurement, export, processing, and farmer integration across Kenya.',
    category: 'agriculture-trade',
    isDirect: true,
    isOperating: true,
  },
  {
    id: 'lucky-traders',
    name: 'Lucky 4U Traders FZCO',
    sector: 'International Trade',
    geography: 'Dubai, UAE',
    investmentType: 'Operating Subsidiary',
    categoryText: 'Agriculture & Trade',
    description: "Lucky 4U Traders FZCO serves as the group's trading arm supporting import-export operations, distribution networks, and cross-border commerce.",
    category: 'agriculture-trade',
    isDirect: true,
    isOperating: true,
  },
  {
    id: 'smartbridge',
    name: 'Smartbridge Distribution',
    sector: 'Logistics & Distribution',
    geography: 'Kenya / East Africa',
    investmentType: 'Operating Subsidiary',
    categoryText: 'Agriculture & Trade',
    description: 'Smartbridge Distribution supports market access, logistics, and regional supply chain development across East Africa.',
    category: 'agriculture-trade',
    isDirect: true,
    isOperating: true,
  },
  // Fund & Secondary Investments
  {
    id: 'cornerstone-ventures',
    name: 'Cornerstone Ventures Fund',
    sector: 'Tech-Led Growth',
    geography: 'India / Global',
    investmentType: 'Venture Fund Allocation',
    categoryText: 'Private Markets',
    description: 'Exposure to professionally managed venture and growth-stage opportunities across technology-led businesses.',
    category: 'funds-secondary',
    isDirect: false,
    isOperating: false,
  },
  {
    id: '1mx-ai-fund',
    name: '1MX AI Fund',
    sector: 'Artificial Intelligence',
    geography: 'Global',
    investmentType: 'Venture Fund Allocation',
    categoryText: 'Private Markets',
    description: 'An investment reflecting conviction in artificial intelligence as one of the most significant long-term growth opportunities.',
    category: 'funds-secondary',
    isDirect: false,
    isOperating: false,
  },
  {
    id: 'non-public',
    name: 'Non Public Pty Ltd',
    sector: 'Pre-IPO Secondary',
    geography: 'Global',
    investmentType: 'Secondary Placement',
    categoryText: 'Private Markets',
    description: 'Provides exposure to select private companies before public listing or major liquidity events.',
    category: 'funds-secondary',
    isDirect: false,
    isOperating: false,
  },
]

const categories = [
  { id: 'all', name: 'All Portfolios' },
  { id: 'consumer-food', name: 'Consumer & Food' },
  { id: 'frontier-technology', name: 'Frontier Tech' },
  { id: 'climate-sustainability', name: 'Climate & ESG' },
  { id: 'agriculture-trade', name: 'Agriculture & Trade' },
  { id: 'funds-secondary', name: 'Funds & Secondaries' },
]

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterParam = searchParams.get('filter') || 'all'
  const [activeFilter, setActiveFilter] = useState(filterParam)

  // Sync state with URL search param
  useEffect(() => {
    setActiveFilter(filterParam)
  }, [filterParam])

  const handleFilterChange = (filterId: string) => {
    setSearchParams({ filter: filterId })
  }

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  )

  const directInvestments = filteredItems.filter((item) => item.isDirect && !item.isOperating)
  const operatingPlatforms = filteredItems.filter((item) => item.isOperating)
  const fundInvestments = filteredItems.filter((item) => item.category === 'funds-secondary')

  return (
    <div className="bg-white text-brand-navy-950 font-sans min-h-screen">
      
      {/* Page Header (Navy Theme) */}
      <section className="bg-brand-navy-950 text-white py-20 md:py-28 border-b border-brand-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase">
              Capital Allocation
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-white m-0">
              Our Portfolio
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl mt-4">
              A structured asset register spanning direct operations, climate technologies, space systems, and diversified fund holdings.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pb-2 -mb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                className={`px-4 py-2.5 text-xs font-heading font-medium tracking-wider uppercase border transition-all shrink-0 rounded-none cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-brand-navy-950 border-brand-navy-950 text-brand-gold-500 font-semibold shadow-xs'
                    : 'border-gray-200 hover:border-brand-gold-500/40 text-gray-600 hover:text-brand-navy-950'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Direct Investments Section */}
      {directInvestments.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 space-y-2">
              <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase">
                Active Equity Allocations
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy-950 tracking-tight">
                Direct Investments
              </h2>
              <div className="w-16 h-[2px] bg-brand-gold-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="popLayout">
                {directInvestments.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card
                      title={item.name}
                      description={item.description}
                      sector={item.sector}
                      geography={item.geography}
                      investmentType={item.investmentType}
                      categoryText={item.categoryText}
                      label="Direct Investment"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* 2. Operating Platforms Section */}
      {operatingPlatforms.length > 0 && (
        <section className="py-24 bg-brand-gold-50/20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase">
                  Beyond Capital
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy-950 tracking-tight">
                  Building Operating Platforms
                </h2>
                <div className="w-16 h-[2px] bg-brand-gold-500" />
                <p className="text-sm text-gray-600 font-light leading-relaxed pt-2">
                  Lucky 4U Holdings is not only an investor. The group also builds and operates businesses directly in strategic sectors, taking complete ownership of operations, trade clearance, and logistics pipelines.
                </p>
              </div>
              <div className="lg:col-span-7 bg-brand-navy-950 text-white p-8 border border-brand-navy-800 rounded-sm">
                <h3 className="text-sm font-heading font-semibold tracking-wider text-brand-gold-500 uppercase mb-4">
                  Operating Platform Advantages
                </h3>
                <ul className="space-y-3 text-xs text-gray-300 font-light">
                  <li className="flex items-start">
                    <span className="text-brand-gold-500 mr-2 font-bold">•</span>
                    Direct infrastructure control to reduce operational friction and regional supply chain bottlenecks.
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold-500 mr-2 font-bold">•</span>
                    Integration with East African grower bases and Middle Eastern custom clearances.
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-gold-500 mr-2 font-bold">•</span>
                    Direct pricing power, end-to-end commodity tracking, and asset control.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="popLayout">
                {operatingPlatforms.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card
                      title={item.name}
                      description={item.description}
                      sector={item.sector}
                      geography={item.geography}
                      investmentType={item.investmentType}
                      categoryText={item.categoryText}
                      label="Operating Platform"
                      highlight={true}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* 3. Funds & Secondary Investments Section */}
      {(activeFilter === 'all' || activeFilter === 'funds-secondary') && fundInvestments.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Premium Introductory Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-gray-100 pb-16">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-semibold text-brand-gold-700 tracking-widest uppercase">
                  Diversified Allocations
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-navy-950 tracking-tight leading-tight">
                  Fund Investments & Secondary Market Exposure
                </h2>
                <div className="w-16 h-[2px] bg-brand-gold-500" />
                <p className="text-sm text-gray-500 font-light leading-relaxed pt-2">
                  Lucky 4U Holdings participates in venture funds, AI-focused investment vehicles, and secondary market opportunities to gain exposure to high-growth private companies and emerging technology platforms.
                </p>
              </div>

              {/* 2x2 Grid of Highlights */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-brand-gold-700">
                    <Layers className="w-4 h-4" />
                    <h4 className="text-sm font-heading font-bold text-brand-navy-950">Strategic Diversification</h4>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Balancing direct asset exposure with professionally managed funds to capture broad growth across tech ecosystems.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-brand-gold-700">
                    <Cpu className="w-4 h-4" />
                    <h4 className="text-sm font-heading font-bold text-brand-navy-950">Focused AI Exposure</h4>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Underwriting dedicated AI pools like the 1MX AI Fund to secure capital positions in next-generation intelligence.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-brand-gold-700">
                    <Shield className="w-4 h-4" />
                    <h4 className="text-sm font-heading font-bold text-brand-navy-950">Venture Capital Access</h4>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Co-allocating into premium tier venture networks, capturing early-growth stage technology valuations.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-brand-gold-700">
                    <TrendingUp className="w-4 h-4" />
                    <h4 className="text-sm font-heading font-bold text-brand-navy-950">Secondary Opportunities</h4>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Targeting pre-IPO secondary transactions in high-conviction companies to optimize liquidity timelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {fundInvestments.map((item) => (
                <Card
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  sector={item.sector}
                  geography={item.geography}
                  investmentType={item.investmentType}
                  categoryText={item.categoryText}
                  label="Fund & Secondary"
                />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
