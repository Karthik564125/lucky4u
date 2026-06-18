import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Globe, Milestone } from 'lucide-react'

interface CorridorNode {
  id: string
  name: string
  role: string
  coordinates: { x: number; y: number } // Percentage coordinates for SVG overlay
  details: {
    title: string
    subtitle: string
    highlights: string[]
    metrics: { label: string; value: string }[]
  }
}

const corridorNodes: CorridorNode[] = [
  {
    id: 'dubai',
    name: 'Dubai, UAE',
    role: 'Global HQ & Capital Hub',
    coordinates: { x: 50, y: 35 },
    details: {
      title: 'Dubai Gateway Hub',
      subtitle: 'Global Headquarters & Strategic Trade Axis',
      highlights: [
        'Central treasury and capital allocation management',
        'Cross-border supply chain compliance and customs clearing',
        'Sovereign relationships and institutional co-investment routing',
      ],
      metrics: [
        { label: 'Operational Hubs', value: '3 Regions' },
        { label: 'Asset Management', value: 'Proprietary' },
      ],
    },
  },
  {
    id: 'india',
    name: 'India',
    role: 'Frontier Tech & Consumer Brands',
    coordinates: { x: 68, y: 45 },
    details: {
      title: 'India Industrial Innovation',
      subtitle: 'Consumer Distribution & Deep Tech Incubation',
      highlights: [
        'Early exposure to space exploration systems (Omspace)',
        'FMCG consumer brand acceleration (Skippi, Mitra Foods)',
        'Strategic enterprise AI tooling deployment (Tracker Suite AI)',
      ],
      metrics: [
        { label: 'Active Projects', value: '4 Assets' },
        { label: 'Tech Employees', value: '200+ Team' },
      ],
    },
  },
  {
    id: 'kenya',
    name: 'East Africa (Kenya)',
    role: 'Agribusiness & Last-Mile Distribution',
    coordinates: { x: 45, y: 70 },
    details: {
      title: 'East African Logistics & Export',
      subtitle: 'Agro-processing Platforms & Trade Distribution',
      highlights: [
        'Vertically integrated avocado processing & global export',
        'Last-mile distribution network bridging growers to regional markets',
        'Verifiable ESG initiatives (biochar carbon removal systems)',
      ],
      metrics: [
        { label: 'Growers Assisted', value: '4,500+' },
        { label: 'Carbon Removed', value: '1,200 Tons' },
      ],
    },
  },
]

export default function InteractiveMap() {
  const [activeNode, setActiveNode] = useState<CorridorNode>(corridorNodes[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full min-h-[500px]">
      {/* Visual Canvas Panel (lg:col-span-7) */}
      <div className="lg:col-span-7 bg-brand-navy-950 border border-brand-navy-800 p-6 relative overflow-hidden flex flex-col justify-between select-none min-h-[380px] lg:min-h-auto">
        {/* Subtle grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        
        {/* Glow behind maps */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-gold-500/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Heading overlay */}
        <div className="relative z-10 space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold-500 font-heading">
            Emerging Trade Corridors
          </span>
          <h3 className="text-lg font-heading font-extrabold text-white">
            Connecting Operations & Markets
          </h3>
        </div>

        {/* The Graphic Map Area */}
        <div className="relative flex-grow flex items-center justify-center min-h-[260px]">
          {/* Custom corridor map SVG network */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Connecting lines between nodes */}
            <motion.path
              d="M 50,35 Q 59,40 68,45"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
              d="M 50,35 Q 47.5,52.5 45,70"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.path
              d="M 68,45 Q 56.5,57.5 45,70"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="0.3"
              strokeDasharray="3,3"
            />
            
            {/* Definitions for Gradients */}
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c5a880" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c5a880" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Render Active Dots overlay */}
          {corridorNodes.map((node) => {
            const isActive = activeNode.id === node.id
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                style={{ top: `${node.coordinates.y}%`, left: `${node.coordinates.x}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none cursor-pointer"
              >
                {/* Outer pulsing ring */}
                <span className={`absolute inset-0 -m-3 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-brand-gold-500/25 animate-ping' : 'bg-transparent group-hover:bg-brand-gold-500/10'
                }`} />
                
                {/* Secondary ring */}
                <span className={`absolute inset-0 -m-1.5 rounded-full transition-all duration-300 border ${
                  isActive ? 'border-brand-gold-400 scale-110' : 'border-brand-gold-500/30 group-hover:border-brand-gold-400'
                }`} />

                {/* Core Dot */}
                <span className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-brand-gold-400 shadow-md shadow-brand-gold-500/50 scale-125' : 'bg-brand-navy-950 border-2 border-brand-gold-500 group-hover:bg-brand-gold-500'
                }`} />

                {/* Node Label tooltip */}
                <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 px-2 py-1 bg-brand-navy-900 border text-[9px] font-heading font-semibold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                  isActive ? 'border-brand-gold-500 text-brand-gold-400 translate-y-0 opacity-100 shadow-md' : 'border-brand-navy-800 text-gray-400 translate-y-1 opacity-70 group-hover:opacity-100'
                }`}>
                  {node.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Quick legend */}
        <div className="relative z-10 flex justify-between border-t border-brand-navy-900 pt-4 text-[10px] text-gray-500 tracking-wider">
          <span className="flex items-center"><Milestone className="w-3.5 h-3.5 mr-1 text-brand-gold-500" /> Operating Corridor</span>
          <span className="flex items-center"><Globe className="w-3.5 h-3.5 mr-1 text-brand-gold-500" /> Active Custom Clearances</span>
        </div>
      </div>

      {/* Details Panel (lg:col-span-5) */}
      <div className="lg:col-span-5 bg-brand-navy-900 border border-brand-navy-800 p-8 flex flex-col justify-between text-left relative group">
        <span className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-brand-gold-500 to-transparent" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <span className="text-xs font-semibold text-brand-gold-500 uppercase tracking-wider block font-heading">
                {activeNode.role}
              </span>
              <h2 className="text-2xl font-heading font-extrabold text-white mt-1">
                {activeNode.details.title}
              </h2>
              <p className="text-xs text-brand-gold-400/80 italic mt-1 font-serif">
                {activeNode.details.subtitle}
              </p>
            </div>

            {/* highlights */}
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase font-bold text-gray-400 tracking-widest border-b border-brand-navy-800 pb-2">
                Operational Value Addition
              </h4>
              <ul className="space-y-3">
                {activeNode.details.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-xs text-gray-300 font-light leading-relaxed">
                    <span className="text-brand-gold-500 mr-2 shrink-0 select-none">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* metrics indicators */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-navy-800">
              {activeNode.details.metrics.map((metric, index) => (
                <div key={index} className="p-3 bg-brand-navy-950/70 border border-brand-navy-800">
                  <p className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold">{metric.label}</p>
                  <p className="text-base font-heading font-extrabold text-white mt-0.5">{metric.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="pt-6 border-t border-brand-navy-800/60 mt-6 flex items-center justify-between text-[11px] text-gray-400">
          <span>Click map nodes to explore desk scopes</span>
          <MapPin className="w-4 h-4 text-brand-gold-500" />
        </div>
      </div>
    </div>
  )
}
