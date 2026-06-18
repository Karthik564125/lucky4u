import { motion } from 'framer-motion'
import { Server, Globe, Landmark } from 'lucide-react'

export default function StrategicNetwork() {
  return (
    <div className="relative w-full max-w-lg mx-auto bg-brand-navy-950/20 border border-brand-navy-900/60 p-8 rounded-none select-none overflow-hidden h-[420px] flex flex-col justify-between">
      
      {/* Decorative Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />
      
      {/* Subtle Glow Hub Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-brand-gold-500/5 blur-[80px] rounded-full pointer-events-none" />

      {/* SVG Network Lines Overlay */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Connection: Dubai -> India */}
        <motion.path
          d="M 50,30 L 75,55"
          fill="none"
          stroke="rgba(197, 168, 128, 0.2)"
          strokeWidth="0.75"
        />
        <motion.path
          d="M 50,30 L 75,55"
          fill="none"
          stroke="#c5a880"
          strokeWidth="1.25"
          strokeDasharray="4,6"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
        />

        {/* Connection: Dubai -> East Africa */}
        <motion.path
          d="M 50,30 L 25,80"
          fill="none"
          stroke="rgba(197, 168, 128, 0.2)"
          strokeWidth="0.75"
        />
        <motion.path
          d="M 50,30 L 25,80"
          fill="none"
          stroke="#c5a880"
          strokeWidth="1.25"
          strokeDasharray="4,6"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
        />

        {/* Connection: India -> East Africa (Logistics loop) */}
        <motion.path
          d="M 75,55 L 25,80"
          fill="none"
          stroke="rgba(197, 168, 128, 0.1)"
          strokeWidth="0.5"
          strokeDasharray="2,4"
        />
      </svg>

      {/* Node 1: Dubai HQ */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center justify-center w-11 h-11 border border-brand-gold-500 bg-brand-navy-950 shadow-lg relative">
          <Landmark className="w-5 h-5 text-brand-gold-500" />
          <span className="absolute inset-0 bg-brand-gold-500/10 animate-ping -m-1" style={{ animationDuration: '4s' }} />
        </div>
        <div className="mt-2 text-center">
          <span className="text-[10px] font-heading font-extrabold tracking-widest text-white uppercase block">
            DUBAI HQ
          </span>
          <span className="text-[8px] tracking-widest text-brand-gold-400 font-semibold uppercase block">
            Global Trade & Capital Axis
          </span>
        </div>
      </div>

      {/* Node 2: India Operations */}
      <div className="relative z-10 flex flex-col items-end mr-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 border border-brand-navy-800 bg-brand-navy-950 shadow-md">
            <Server className="w-4.5 h-4.5 text-brand-gold-500/80" />
          </div>
          <div className="mt-2 text-center">
            <span className="text-[9px] font-heading font-bold tracking-widest text-white uppercase block">
              INDIA OPERATIONS
            </span>
            <span className="text-[8px] tracking-widest text-gray-500 uppercase block">
              Tech & Consumer Brands
            </span>
          </div>
        </div>
      </div>

      {/* Node 3: East Africa Operations */}
      <div className="relative z-10 flex flex-col items-start ml-4 pb-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 border border-brand-navy-800 bg-brand-navy-950 shadow-md">
            <Globe className="w-4.5 h-4.5 text-brand-gold-500/80" />
          </div>
          <div className="mt-2 text-center">
            <span className="text-[9px] font-heading font-bold tracking-widest text-white uppercase block">
              EAST AFRICA OPERATIONS
            </span>
            <span className="text-[8px] tracking-widest text-gray-500 uppercase block">
              Agribusiness & Logistics
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}
