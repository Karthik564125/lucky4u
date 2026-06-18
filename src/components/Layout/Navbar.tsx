import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Philosophy', path: '/philosophy' },
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
            ? 'bg-brand-navy-950 border-b border-brand-navy-900 shadow-xl'
            : 'bg-brand-navy-950 border-b border-brand-navy-950/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-22 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="flex items-center justify-center w-12 h-12 border border-brand-gold-500/40 bg-brand-navy-900 rounded-none transition-colors group-hover:border-brand-gold-500">
                <span className="text-brand-gold-500 font-heading font-extrabold text-lg tracking-wider">L4U</span>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-white font-heading font-bold text-sm tracking-wider uppercase group-hover:text-brand-gold-200 transition-colors">
                  Lucky 4U Holdings
                </span>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase font-medium">Investment Group</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-heading text-xs font-bold tracking-widest uppercase transition-colors relative py-2 ${
                      isActive ? 'text-brand-gold-500' : 'text-gray-300 hover:text-white'
                    }`
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
                className="inline-flex items-center justify-center px-5 py-2.5 border border-brand-gold-500 text-brand-gold-500 hover:bg-brand-gold-500 hover:text-brand-navy-950 font-heading text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen((s) => !s)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className="p-2 text-white cursor-pointer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 pt-20 bg-brand-navy-950 z-[999] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="pb-6 border-b border-brand-navy-900 flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 border border-brand-gold-500/40 bg-brand-navy-900 rounded-none">
                <span className="text-brand-gold-500 font-heading font-extrabold text-xl tracking-wider">L4U</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-heading text-base font-bold tracking-wide uppercase">Lucky 4U Holdings</h3>
                <p className="text-[10px] text-gray-400 tracking-[0.25em] uppercase font-medium">Investment Group</p>
              </div>
            </div>

            <nav className="flex flex-col space-y-4 text-left">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-heading font-bold tracking-widest uppercase transition-colors py-2 border-b border-brand-navy-900/40 ${
                      isActive ? 'text-brand-gold-500' : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="pb-12">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center px-6 py-4 border border-brand-gold-500 text-brand-gold-500 hover:bg-brand-gold-500 hover:text-brand-navy-950 font-heading text-xs font-bold tracking-widest uppercase transition-all rounded-none"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
