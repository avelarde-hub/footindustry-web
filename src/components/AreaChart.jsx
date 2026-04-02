export default function AreaChart({ data }) {
  const width = 640
  const height = 220
  const max = Math.max(...data)
  const min = Math.min(...data)
  const stepX = width / (data.length - 1)

  const points = data
    .map((value, index) => {
      const normalized = (value - min) / (max - min || 1)
      const x = index * stepX
      const y = height - normalized * 150 - 30
      return `${x},${y}`
    })
    .join(' ')

  const area = `${points} ${width},${height} 0,${height}`

  return (
    <div className="chart-card">
      <div className="chart-head">
        <div>
          <h3>Eficiencia operativa</h3>
          <p>Comportamiento mensual de la capacidad productiva.</p>
        </div>
        <span className="badge">Últimos 12 meses</span>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg" role="img" aria-label="Gráfico de tendencia">
        <defs>
          <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(16,185,129,0.45)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0.02)" />
          </linearGradient>
        </defs>
        <polygon points={area} fill="url(#chartFill)" />
        <polyline points={points} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
