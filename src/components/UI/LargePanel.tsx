import React from 'react'

export default function LargePanel({ children, variant = 'light' }: { children: React.ReactNode; variant?: 'light' | 'dark' }) {
  const base = variant === 'dark' ? 'bg-brand-navy-950 text-white' : 'bg-white text-brand-navy-950'
  return <section className={`${base} py-16 border-b border-gray-100`}>{children}</section>
}
