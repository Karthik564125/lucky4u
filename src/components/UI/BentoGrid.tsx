import React from 'react'

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {children}
    </div>
  )
}

interface BentoItemProps {
  children: React.ReactNode
  className?: string
  colSpan?: 'md:col-span-1' | 'md:col-span-2' | 'md:col-span-3' | 'lg:col-span-1' | 'lg:col-span-2' | 'lg:col-span-3' | string
  rowSpan?: string
}

export function BentoItem({
  children,
  className = '',
  colSpan = '',
  rowSpan = '',
}: BentoItemProps) {
  return (
    <div className={`relative overflow-hidden ${colSpan} ${rowSpan} ${className}`}>
      {children}
    </div>
  )
}
