import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy-950 border-t border-brand-navy-800 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-8 h-8 border border-brand-gold-500/50 bg-brand-navy-900 rounded-sm">
                <span className="text-brand-gold-500 font-heading font-bold text-sm tracking-wider">L4U</span>
              </div>
              <span className="text-white font-heading font-semibold text-sm tracking-wider uppercase">
                Lucky 4U Holdings
              </span>
            </Link>
            <p className="text-[10px] text-brand-gold-500/90 tracking-widest uppercase font-semibold font-heading">
              Dubai-Based Investment & Operating Group
            </p>
            <p className="text-sm leading-relaxed text-gray-400 pt-1">
              A family-backed investment and operating group headquartered in Dubai, UAE. We invest in high-growth, scalable businesses sitting at the intersection of innovation, necessity, and compounding long-term value.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-gold-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand-gold-500 transition-colors">
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link to="/philosophy" className="hover:text-brand-gold-500 transition-colors">
                  Investment Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold-500 transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Strategic Sectors */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-6">
              Strategic Sectors
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/portfolio?filter=consumer-food" className="hover:text-brand-gold-500 transition-colors block">
                  Food & FMCG
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=agriculture-trade" className="hover:text-brand-gold-500 transition-colors block">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=climate-sustainability" className="hover:text-brand-gold-500 transition-colors block">
                  Climate Technology
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=frontier-technology" className="hover:text-brand-gold-500 transition-colors block">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=frontier-technology" className="hover:text-brand-gold-500 transition-colors block">
                  Space Exploration
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=funds-secondary" className="hover:text-brand-gold-500 transition-colors block">
                  Venture Funds
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=funds-secondary" className="hover:text-brand-gold-500 transition-colors block">
                  Private Markets
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=agriculture-trade" className="hover:text-brand-gold-500 transition-colors block">
                  International Trade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-white font-heading font-semibold text-sm tracking-wider uppercase mb-6">
              Corporate Office
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-gold-500 mr-3 shrink-0 mt-0.5" />
                <span>
                  Dubai, United Arab Emirates<br />
                  <span className="text-xs text-gray-500">Corporate Headquarters</span>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-brand-gold-500 mr-3 shrink-0" />
                <a href="mailto:info@lucky4uholdings.com" className="hover:text-brand-gold-500 transition-colors">
                  info@lucky4uholdings.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-brand-gold-500 mr-3 shrink-0" />
                <a href="tel:+97140000000" className="hover:text-brand-gold-500 transition-colors">
                  +971 4 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-navy-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <div>
            &copy; {currentYear} Lucky 4U Holdings. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
