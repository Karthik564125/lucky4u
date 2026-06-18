import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
  hoverEffect?: boolean
}

export default function GlassCard({
  children,
  className = '',
  glow = false,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <div
      className={`relative bg-brand-navy-900 border border-brand-navy-800 rounded-none p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-institutional ${
        hoverEffect 
          ? 'hover:-translate-y-1.5 shadow-institutional-hover hover:border-brand-gold-500/40' 
          : ''
      } ${className}`}
    >
      {/* Subtle Accent Glow Indicator */}
      {glow && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-brand-gold-500 via-brand-gold-500/50 to-transparent pointer-events-none" />
      )}
      
      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

