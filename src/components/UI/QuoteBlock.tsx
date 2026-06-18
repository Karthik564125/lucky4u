
type Props = {
  quote: string
  author: string
  role?: string
  image?: string
}

export default function QuoteBlock({ quote, author, role }: Props) {
  return (
    <blockquote className="bg-white border border-gray-100 p-6 rounded-sm shadow-sm">
      <p className="text-lg font-serif italic text-brand-navy-950">“{quote}”</p>
      <div className="mt-4">
        <p className="text-sm font-heading font-bold text-brand-navy-950">{author}</p>
        {role && <p className="text-xs text-gray-500 mt-1">{role}</p>}
      </div>
    </blockquote>
  )
}
