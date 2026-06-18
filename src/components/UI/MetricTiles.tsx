
type Tile = { label: string; value: string }

export default function MetricTiles({ tiles }: { tiles: Tile[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {tiles.map((t, i) => (
        <div key={i} className="p-4">
          <div className="text-3xl font-heading font-extrabold text-brand-gold-500">{t.value}</div>
          <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">{t.label}</div>
        </div>
      ))}
    </div>
  )
}
