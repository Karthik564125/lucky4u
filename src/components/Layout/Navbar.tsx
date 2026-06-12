import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Investment Philosophy', path: '/philosophy' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-navy-950/95 border-b border-brand-navy-800 shadow-md backdrop-blur-md'
            : 'bg-brand-navy-950 border-b border-brand-navy-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-10 h-10 border border-brand-gold-500/50 bg-brand-navy-900 rounded-sm transition-colors group-hover:border-brand-gold-500">
                <span className="text-brand-gold-500 font-heading font-bold text-lg tracking-wider">L4U</span>
              </div>

              <div className="flex flex-col">
                <span className="text-white font-heading font-semibold text-sm md:text-base tracking-wider uppercase group-hover:text-brand-gold-100 transition-colors">
                  Lucky 4U Holdings
                </span>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase">Investment Group</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-sans text-sm font-medium tracking-wide uppercase transition-colors relative py-2 ${isActive ? 'text-brand-gold-500' : 'text-gray-300 hover:text-white'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-brand-gold-500 text-brand-gold-500 hover:bg-brand-gold-500 hover:text-brand-navy-950 font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen((s) => !s)} aria-label={isOpen ? 'Close menu' : 'Open menu'} className="p-2 text-white">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div id="mobile-menu" className={`md:hidden fixed inset-0 pt-20 bg-brand-navy-950 z-[999] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full overflow-y-auto px-6 py-8">
          <div className="pb-8 mb-8 border-b border-brand-navy-800">
            <div className="flex items-center space-x-4 mb-5">
              <div className="flex items-center justify-center w-14 h-14 border border-brand-gold-500/50 bg-brand-navy-900 rounded-sm">
                <span className="text-brand-gold-500 font-heading font-bold text-xl tracking-wider">L4U</span>
              </div>
              <div>
                <h3 className="text-white font-heading text-lg font-semibold tracking-wide uppercase">Lucky 4U Holdings</h3>
                <p className="text-xs text-gray-400 tracking-[0.25em] uppercase">Investment Group</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Dubai-based private investment platform focused on technology, agriculture, global trade, venture opportunities, and long-term value creation.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider border border-brand-gold-500/30 text-brand-gold-400 rounded-sm">Dubai</span>
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider border border-brand-gold-500/30 text-brand-gold-400 rounded-sm">Global Markets</span>
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider border border-brand-gold-500/30 text-brand-gold-400 rounded-sm">AI</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={({ isActive }) => `text-lg font-heading font-medium tracking-wide uppercase transition-colors py-2 border-b border-brand-navy-800 ${isActive ? 'text-brand-gold-500' : 'text-gray-300 hover:text-white'}`}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-8">
            <Link to="/contact" className="w-full inline-flex items-center justify-center px-6 py-3 border border-brand-gold-500 text-brand-gold-500 hover:bg-brand-gold-500 hover:text-brand-navy-950 font-sans text-sm font-semibold tracking-wider uppercase transition-all rounded-sm">
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
