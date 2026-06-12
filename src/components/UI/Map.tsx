import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Compass } from 'lucide-react'


interface Region {
  id: string
  name: string
  coordinates: { x: number; y: number }
  role: string
  description: string
  details: string[]
}

const regions: Region[] = [
  {
    id: 'dubai',
    name: 'Dubai, UAE',
    coordinates: { x: 540, y: 220 },
    role: 'Corporate Headquarters & Trading Hub',
    description: 'Serving as the strategic global headquarters, trade facilitation center, and secondary investment platform connecting Eastern and Western markets.',
    details: [
      'Central Treasury & Capital Allocation',
      'Lucky 4U Traders FZCO operations',
      'Venture & Secondary Market investments hub'
    ]
  },
  {
    id: 'india',
    name: 'India',
    coordinates: { x: 670, y: 235 },
    role: 'Innovation & Technology Engine',
    description: 'Primary destination for technology-driven startup investments, FMCG brands, artificial intelligence, carbon removal, and space exploration.',
    details: [
      'Mitra Foods & Skippi (FMCG)',
      'Omspace Rocket & Sow and Reap (Frontier tech & climate)',
      'Cornerstone Ventures & 1MX AI investments'
    ]
  },
  {
    id: 'kenya',
    name: 'Kenya / East Africa',
    coordinates: { x: 535, y: 320 },
    role: 'Agriculture, Logistics & Export',
    description: 'Main operating base for physical supply chains, agro-processing, regional distribution, and sustainable farming integrations.',
    details: [
      'Lucky 4U Avocado Limited (Kenya)',
      'Smartbridge Distribution network',
      'Farmer integration & carbon-linked value creation'
    ]
  },
  {
    id: 'global',
    name: 'Global Markets',
    coordinates: { x: 300, y: 180 }, // Centered around Europe/US transition
    role: 'Strategic Partnerships & Capital Flows',
    description: 'Participation in international trade networks, venture funds, and pre-IPO secondary market opportunities.',
    details: [
      'Global secondary market exposure (Non Public Pty Ltd)',
      'Cross-border commodities trading networks',
      'International venture capital partnerships'
    ]
  }
]

export default function Map() {
  const [selectedRegion, setSelectedRegion] = useState<Region>(regions[0])

  return (
    <div className="bg-brand-navy-900 border border-brand-navy-800 rounded-sm p-6 lg:p-12 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy-700/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
        
        {/* Left Column: Selector & Details */}
        <div className="lg:col-span-1 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-brand-gold-500 tracking-widest uppercase">
              Global Infrastructure
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-white">
              Connecting High-Growth Markets
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              We leverage Dubai's unique geographical position as an axis to bridge investments, operations, and trade across India, Africa, and global markets.
            </p>
          </div>

          {/* Quick Buttons Selector */}
          <div className="flex flex-wrap gap-2 py-2">
            {regions.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRegion(r)}
                className={`px-3 py-1.5 text-xs font-heading font-medium tracking-wider uppercase border transition-all duration-300 rounded-none ${
                  selectedRegion.id === r.id
                    ? 'bg-brand-gold-500 border-brand-gold-500 text-brand-navy-950 font-semibold'
                    : 'border-brand-navy-800 hover:border-brand-gold-500/50 text-gray-300 hover:text-white bg-brand-navy-950'
                }`}
              >
                {r.name.split(',')[0]}
              </button>
            ))}
          </div>

          {/* Dynamic Content Panel */}
          <div className="bg-brand-navy-950 border border-brand-navy-800/80 p-6 rounded-none min-h-[260px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-lg font-heading font-bold text-white flex items-center">
                    <MapPin className="w-4.5 h-4.5 text-brand-gold-500 mr-2" />
                    {selectedRegion.name}
                  </h4>
                  <p className="text-xs text-brand-gold-500 tracking-wider uppercase mt-1">
                    {selectedRegion.role}
                  </p>
                </div>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {selectedRegion.description}
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                    Key Operations & Assets
                  </span>
                  <ul className="space-y-1.5">
                    {selectedRegion.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-start">
                        <span className="text-brand-gold-500 mr-2 select-none">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: World Map Visualization */}
        <div className="lg:col-span-2 relative w-full h-[300px] sm:h-[400px] border border-brand-navy-800 bg-brand-navy-950/40 p-4 rounded-sm flex items-center justify-center">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full opacity-85 select-none"
            style={{ filter: 'drop-shadow(0 0 15px rgba(10, 17, 33, 0.5))' }}
          >
            {/* Base SVG Map Simplification (Continental outlines & Grid Dots) */}
            {/* North America */}
            <path
              d="M 80 100 Q 120 70 200 80 T 300 120 T 350 200 Q 300 230 250 220 T 150 250 T 80 200 Z"
              fill="rgba(255,255,255,0.02)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1.5"
            />
            {/* South America */}
            <path
              d="M 230 260 Q 280 280 320 330 T 290 450 Q 270 470 250 480 T 210 380 Q 200 330 230 260 Z"
              fill="rgba(255,255,255,0.02)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1.5"
            />
            {/* Eurasia (Europe + Asia) */}
            <path
              d="M 400 100 Q 500 50 650 70 T 850 100 T 920 180 Q 900 250 820 280 T 700 250 T 600 220 Q 550 250 480 220 T 400 150 Z"
              fill="rgba(255,255,255,0.02)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1.5"
            />
            {/* Africa */}
            <path
              d="M 450 220 Q 530 200 570 240 T 590 350 Q 550 400 500 420 T 440 350 Q 420 300 450 220 Z"
              fill="rgba(255,255,255,0.02)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1.5"
            />
            {/* Australia */}
            <path
              d="M 780 320 Q 850 310 880 350 T 850 420 T 760 380 Z"
              fill="rgba(255,255,255,0.02)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1.5"
            />

            {/* Connecting Arc Lines from Dubai (Hub) */}
            <g className="stroke-brand-gold-500/25 fill-none" strokeWidth="1.5" strokeDasharray="4,4">
              {/* Dubai to India */}
              <path d="M 540 220 Q 605 210 670 235" />
              {/* Dubai to Kenya */}
              <path d="M 540 220 Q 525 270 535 320" />
              {/* Dubai to Global (representative) */}
              <path d="M 540 220 Q 420 180 300 180" />
            </g>

            {/* Glowing lines representing direct transaction corridor */}
            <motion.path
              d="M 540 220 Q 605 210 670 235"
              fill="none"
              stroke="#c5a880"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M 540 220 Q 525 270 535 320"
              fill="none"
              stroke="#c5a880"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            />
            <motion.path
              d="M 540 220 Q 420 180 300 180"
              fill="none"
              stroke="#c5a880"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
            />

            {/* Region Node Points */}
            {regions.map((r) => {
              const isSelected = selectedRegion.id === r.id
              return (
                <g
                  key={r.id}
                  className="cursor-pointer"
                  onClick={() => setSelectedRegion(r)}
                >
                  {/* Outer glowing pulsing circle */}
                  <circle
                    cx={r.coordinates.x}
                    cy={r.coordinates.y}
                    r={isSelected ? 16 : 10}
                    fill="none"
                    stroke={isSelected ? '#c5a880' : 'rgba(197, 168, 128, 0.4)'}
                    strokeWidth="1"
                    className={isSelected ? 'animate-pulse' : ''}
                  />

                  {/* Core solid circle */}
                  <circle
                    cx={r.coordinates.x}
                    cy={r.coordinates.y}
                    r={isSelected ? 6 : 4}
                    fill={isSelected ? '#c5a880' : '#ffffff'}
                  />

                  {/* Text labels */}
                  <text
                    x={r.coordinates.x}
                    y={r.coordinates.y - (isSelected ? 20 : 12)}
                    textAnchor="middle"
                    fill={isSelected ? '#ffffff' : '#9ca3af'}
                    className="font-heading font-medium text-[11px] tracking-wider uppercase select-none pointer-events-none"
                    style={{ fontSize: isSelected ? '11px' : '9px' }}
                  >
                    {r.name.split(',')[0]}
                  </text>
                </g>
              )
            })}
          </svg>

          {/* Floating Instructions */}
          <div className="absolute bottom-4 left-4 bg-brand-navy-950/80 border border-brand-navy-800/60 px-3 py-1.5 text-[10px] tracking-wider uppercase text-gray-400 flex items-center space-x-1.5 pointer-events-none">
            <Compass className="w-3.5 h-3.5 text-brand-gold-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Click region nodes to inspect operations</span>
          </div>
        </div>
      </div>
    </div>
  )
}
