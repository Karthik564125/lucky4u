import { Link } from 'react-router-dom'
import LargePanel from '../components/UI/LargePanel'
import QuoteBlock from '../components/UI/QuoteBlock'

export default function CommunityImpact() {
  return (
    <div className="bg-white text-brand-navy-950 font-sans min-h-screen">

      <LargePanel variant="dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-white">Creating Value Beyond Capital</h1>
            <p className="mt-6 text-gray-300 font-light leading-relaxed">We measure success by jobs created, supply chains strengthened, traders connected and sustainable businesses launched — not only by exits.</p>
          </div>
        </div>
      </LargePanel>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Supporting Entrepreneurs</h3>
            <p className="text-gray-600 text-sm">Hands-on operational programs, market introductions, and founder coaching to convert local insight into scalable businesses.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Creating Jobs</h3>
            <p className="text-gray-600 text-sm">From processing facilities to logistics and retail distribution — we prioritise opportunities that generate sustained employment.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Strengthening Supply Chains</h3>
            <p className="text-gray-600 text-sm">We invest in cold-chain, processing and aggregation to reduce post-harvest loss and increase farmer incomes.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-gold-50/20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-heading font-bold">Expanding Trade Opportunities</h3>
              <p className="text-gray-600 mt-4">Our operations connect producers to new markets through predictable export channels, compliance support and distribution networks.</p>
              <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li><strong>Market access:</strong> introductions to institutional buyers and trade partners.</li>
                <li><strong>Logistics:</strong> clearance, freight and export coordination to reduce time-to-market.</li>
                <li><strong>Supplier development:</strong> quality, traceability and certification programs.</li>
              </ul>
            </div>
            <div className="bg-white p-6 border rounded-sm shadow-sm">
              <h4 className="text-lg font-heading font-bold">Micro Case Studies</h4>
              <p className="text-xs text-gray-500 mt-4">Short vignettes here should be replaced with verified outcomes: jobs created, suppliers on-boarded, trade lanes opened.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-heading font-bold">Interested in collaborating on impact initiatives?</h3>
          <p className="text-gray-600 mt-4">We work with development partners, institutional buyers and founders to scale programs that deliver measurable economic benefit.</p>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-brand-navy-950 text-white font-semibold rounded-sm">Contact our team</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <QuoteBlock
            quote={"Our most important returns are the sustained jobs and supply‑chain resilience we build with our partners."}
            author={"Operational Leadership"}
            role={"Lucky 4U Holdings"}
          />
        </div>
      </section>

    </div>
  )
}
