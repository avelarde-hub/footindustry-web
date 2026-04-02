import StatCard from '../../components/StatCard'
import AreaChart from '../../components/AreaChart'
import { useAppContext } from '../../context/AppContext'

export default function DashboardView() {
  const { statCards, trendSeries, sampleNotifications } = useAppContext()

  return (
    <section className="page-grid">
      <div className="hero-card food-hero">
        <div>
          <span className="eyebrow">Industria de alimentos</span>
          <h2>Control integral de producción, calidad y trazabilidad</h2>
          <p>
            Plataforma demo desarrollada por ASERFINTEC para visualizar indicadores operativos, gestionar reportes
            y simular procesos críticos sin base de datos.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        {statCards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>

      <AreaChart data={trendSeries} />

      <section className="info-card">
        <div className="section-head">
          <h3>Alertas y novedades</h3>
        </div>
        <ul className="notification-list">
          {sampleNotifications.map((notification) => (
            <li key={notification}>{notification}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}
