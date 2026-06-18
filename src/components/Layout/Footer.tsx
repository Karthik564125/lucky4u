import { Link } from 'react-router-dom'
import { MapPin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy-950 border-t border-brand-navy-900/60 text-gray-400 font-sans text-left">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        
        {/* Global Operational Divisions & Hubs */}
        <div className="border-b border-brand-navy-900/80 pb-12 mb-12">
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-gold-500 font-heading mb-6">
            Global Operational Divisions & Regional Desks
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Dubai HQ */}
            <div className="space-y-2 relative md:pr-8 md:border-r border-brand-navy-900/80 last:border-0">
              <div className="flex items-center space-x-2 text-white">
                <span className="w-1.5 h-1.5 bg-brand-gold-500 rounded-full" />
                <h5 className="font-heading font-bold text-xs uppercase tracking-wider">Dubai Headquarters (HQ)</h5>
              </div>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Central corporate registry, capital allocation, trade compliance management, and Middle East distribution customs clearance.
              </p>
            </div>
            {/* India Operations */}
            <div className="space-y-2 relative md:pr-8 md:border-r border-brand-navy-900/80 last:border-0">
              <div className="flex items-center space-x-2 text-white">
                <span className="w-1.5 h-1.5 bg-brand-gold-500 rounded-full" />
                <h5 className="font-heading font-bold text-xs uppercase tracking-wider">India Operations</h5>
              </div>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Deep tech systems infrastructure management, space technology investments, and FMCG retail consumer brand scaling.
              </p>
            </div>
            {/* East Africa Operations */}
            <div className="space-y-2 relative">
              <div className="flex items-center space-x-2 text-white">
                <span className="w-1.5 h-1.5 bg-brand-gold-500 rounded-full" />
                <h5 className="font-heading font-bold text-xs uppercase tracking-wider">East Africa Operations</h5>
              </div>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Avocado agro-processing infrastructure, post-harvest cooling lines, and regional freight distribution logistics hubs.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-9 h-9 border border-brand-gold-500/50 bg-brand-navy-900 rounded-none transition-colors group-hover:border-brand-gold-500">
                <span className="text-brand-gold-500 font-heading font-bold text-base tracking-wider">L4U</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-heading font-semibold text-xs tracking-wider uppercase group-hover:text-brand-gold-200 transition-colors">
                  Lucky 4U Holdings
                </span>
                <span className="text-[9px] text-gray-500 tracking-widest uppercase">Investment Group</span>
              </div>
            </Link>
            
            <p className="text-xs leading-relaxed text-gray-400 pt-2 font-light">
              We build industries, strengthen communities, create jobs, improve supply chains, and unlock long-term economic value across high-growth corridors.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-xs tracking-widest uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-xs tracking-wide uppercase font-heading font-medium">
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
            <h3 className="text-white font-heading font-bold text-xs tracking-widest uppercase mb-6">
              Strategic Sectors
            </h3>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <Link to="/portfolio?filter=agriculture-trade" className="hover:text-brand-gold-500 transition-colors block">
                  Agribusiness & Logistics
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=frontier-technology" className="hover:text-brand-gold-500 transition-colors block">
                  Frontier Tech & Space Systems
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=climate-sustainability" className="hover:text-brand-gold-500 transition-colors block">
                  Climate & ESG Solutions
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=consumer-food" className="hover:text-brand-gold-500 transition-colors block">
                  Consumer Goods & FMCG
                </Link>
              </li>
              <li>
                <Link to="/portfolio?filter=funds-secondary" className="hover:text-brand-gold-500 transition-colors block">
                  Secondary Placements
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-white font-heading font-bold text-xs tracking-widest uppercase mb-6">
              Corporate Office
            </h3>
            <ul className="space-y-4 text-xs font-light">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-brand-gold-500 mr-3 shrink-0 mt-0.5" />
                <span>
                  Dubai, United Arab Emirates<br />
                  <span className="text-[9px] text-gray-500">Corporate HQ Registry</span>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-brand-gold-500 mr-3 shrink-0" />
                <a href="mailto:info@lucky4uholdings.com" className="hover:text-brand-gold-500 transition-colors">
                  info@lucky4uholdings.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-navy-900/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 space-y-4 md:space-y-0">
          <div>
            &copy; {currentYear} Lucky 4U Holdings. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Placement</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
