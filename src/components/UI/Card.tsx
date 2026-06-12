import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  title: string
  subtitle?: string
  description: string
  sector?: string
  geography?: string
  investmentType?: string
  categoryText?: string
  label?: string // e.g. "Pillar 1", "Direct Equity"
  badge?: string // e.g. "India", "Dubai", "Global"
  footerText?: string
  icon?: ReactNode
  onClick?: () => void
  highlight?: boolean
}

export default function Card({
  title,
  subtitle,
  description,
  sector,
  geography,
  investmentType,
  categoryText,
  label,
  badge,
  footerText,
  icon,
  onClick,
  highlight = false,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onClick={onClick}
      className={`group relative overflow-hidden flex flex-col justify-between p-8 md:p-10 border bg-white transition-all duration-300 rounded-sm hover:-translate-y-1 ${
        onClick ? 'cursor-pointer hover:shadow-lg' : ''
      } ${
        highlight
          ? 'border-brand-gold-400/40 bg-brand-gold-50/10 shadow-xs hover:border-brand-gold-500 hover:shadow-md'
          : 'border-gray-200/80 hover:border-brand-gold-500/50 shadow-xs hover:shadow-md'
      }`}
    >
      {/* Decorative Muted Gold Top Line on Hover */}
      <span className="absolute top-0 left-0 w-0 h-[3px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />

      <div className="space-y-6">
        {/* Top Metadata labels */}
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-[10px] tracking-widest text-brand-gold-700 font-heading font-semibold uppercase">
              {label}
            </span>
          )}
          {badge && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-none text-[10px] font-heading font-semibold bg-brand-navy-950 text-brand-gold-500 border border-brand-gold-500/20 tracking-wider">
              {badge}
            </span>
          )}
        </div>

        {/* Card Header */}
        <div className="flex items-start justify-between space-x-4">
          <div className="space-y-1">
            <h3 className="text-xl font-heading font-bold text-brand-navy-950 group-hover:text-brand-gold-700 transition-colors leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs font-sans text-brand-navy-500 font-medium tracking-wide uppercase">
                {subtitle}
              </p>
            )}
          </div>
          {icon && (
            <div className="text-brand-navy-500 group-hover:text-brand-gold-500 transition-colors shrink-0">
              {icon}
            </div>
          )}
        </div>

        {/* Description Copy */}
        <p className="text-sm font-sans text-gray-600 leading-relaxed font-light">
          {description}
        </p>

        {/* Institutional 2x2 Metadata Grid */}
        {(sector || geography || investmentType || categoryText) && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-6 border-t border-gray-100 text-left">
            {sector && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold font-heading">Sector</span>
                <span className="text-xs text-brand-navy-950 font-semibold mt-0.5 block">{sector}</span>
              </div>
            )}
            {geography && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold font-heading">Geography</span>
                <span className="text-xs text-brand-navy-950 font-semibold mt-0.5 block">{geography}</span>
              </div>
            )}
            {investmentType && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold font-heading">Structure</span>
                <span className="text-xs text-brand-navy-950 font-semibold mt-0.5 block">{investmentType}</span>
              </div>
            )}
            {categoryText && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold font-heading">Asset Class</span>
                <span className="text-xs text-brand-navy-950 font-semibold mt-0.5 block">{categoryText}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Text */}
      {footerText && (
        <div className="border-t border-gray-100 mt-6 pt-4 text-xs font-sans text-gray-400">
          {footerText}
        </div>
      )}
    </motion.div>
  )
}
