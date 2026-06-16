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
  badge?: string
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
      {/* Gold Accent Line */}
      <span className="absolute top-0 left-0 w-0 h-[3px] bg-brand-gold-500 transition-all duration-300 group-hover:w-full" />

      <div className="space-y-6">
        {/* Badge */}
        {badge && (
          <div className="flex justify-end">
            <span className="inline-flex items-center px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-gold-700 bg-brand-gold-50 border border-brand-gold-200 rounded-sm">
              {badge}
            </span>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-heading font-semibold text-brand-navy-950 group-hover:text-brand-gold-700 transition-colors leading-tight">
              {title}
            </h3>

            {subtitle && (
              <p className="text-xs font-medium uppercase tracking-wider text-brand-navy-500">
                {subtitle}
              </p>
            )}
          </div>

          {icon && (
            <div className="shrink-0 text-brand-navy-500 group-hover:text-brand-gold-500 transition-colors">
              {icon}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Metadata */}
        {(sector || geography || investmentType || categoryText) && (
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
            {sector && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold">
                  Sector
                </span>
                <span className="block mt-1 text-xs font-semibold text-brand-navy-950">
                  {sector}
                </span>
              </div>
            )}

            {geography && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold">
                  Geography
                </span>
                <span className="block mt-1 text-xs font-semibold text-brand-navy-950">
                  {geography}
                </span>
              </div>
            )}

            {investmentType && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold">
                  Structure
                </span>
                <span className="block mt-1 text-xs font-semibold text-brand-navy-950">
                  {investmentType}
                </span>
              </div>
            )}

            {categoryText && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold">
                  Asset Class
                </span>
                <span className="block mt-1 text-xs font-semibold text-brand-navy-950">
                  {categoryText}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      {footerText && (
        <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-400">
          {footerText}
        </div>
      )}
    </motion.div>
  )
}