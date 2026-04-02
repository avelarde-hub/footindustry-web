import { useAppContext } from '../../context/AppContext'
import { exportToCsv, exportToTxt } from '../../utils/exporters'

export default function ReportsView() {
  const { reportsCatalog, role } = useAppContext()

  const exportExecutiveCsv = () => {
    exportToCsv(
      [
        ['Indicador', 'Valor'],
        ['Producción diaria', '18.4 t'],
        ['Lotes aprobados', '126'],
        ['Merma controlada', '1.8%'],
        ['Despachos a tiempo', '97.6%']
      ],
      'reporte-ejecutivo-foodindustry.csv'
    )
  }

  const exportQualityTxt = () => {
    exportToTxt(
      [
        'REPORTE DE CALIDAD - DEMO',
        '--------------------------------',
        'Lote LT-8842: Conforme',
        'Lote LT-8845: En observación',
        'Lote LT-8849: Conforme'
      ],
      'reporte-calidad-foodindustry.txt'
    )
  }

  return (
    <section className="page-grid">
      <div className="hero-card reports-banner">
        <div>
          <span className="eyebrow">Reportes</span>
          <h2>Generación de reportes operativos y ejecutivos</h2>
          <p>Exportación local demo en CSV y TXT para análisis gerencial, calidad y seguimiento operativo.</p>
        </div>
      </div>

      <section className="cards-grid">
        {reportsCatalog.map((item) => (
          <article className="action-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="badge">Formato: {item.format}</span>
          </article>
        ))}
      </section>

      <section className="actions-panel">
        <button type="button" onClick={exportExecutiveCsv}>Exportar reporte ejecutivo CSV</button>
        <button type="button" onClick={exportQualityTxt}>Exportar reporte de calidad TXT</button>
        <p>Perfil actual: <strong>{role}</strong></p>
      </section>
    </section>
  )
}
