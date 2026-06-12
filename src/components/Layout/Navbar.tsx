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

  // Change navbar background style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
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
              <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                Investment Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-sm font-medium tracking-wide uppercase transition-colors relative py-2 ${
                    isActive
                      ? 'text-brand-gold-500'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Primary CTA Button */}
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
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-sm text-gray-400 hover:text-white hover:bg-brand-navy-800 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 bg-brand-navy-950/98 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col h-full px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-heading font-medium tracking-wide uppercase transition-colors py-2 border-b border-brand-navy-800 ${
                    isActive ? 'text-brand-gold-500' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-6">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-brand-gold-500 text-brand-gold-500 hover:bg-brand-gold-500 hover:text-brand-navy-950 font-sans text-sm font-semibold tracking-wider uppercase transition-all rounded-sm"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
