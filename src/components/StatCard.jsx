export default function StatCard({ label, value, delta, accent }) {
  return (
    <article className={`stat-card accent-${accent}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{delta} vs. periodo anterior</small>
    </article>
  )
}
