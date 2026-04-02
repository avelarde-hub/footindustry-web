import DataTable from '../../components/DataTable'
import { qualityChecks } from '../../utils/mockData'

export default function QualityView() {
  const rows = qualityChecks.map((item) => [item.batch, item.parameter, item.result, item.owner])

  return (
    <section className="page-grid">
      <div className="hero-card quality-banner">
        <div>
          <span className="eyebrow">Calidad</span>
          <h2>Verificación de parámetros críticos</h2>
          <p>Monitoreo demo de resultados de laboratorio, observaciones y controles previos a liberación.</p>
        </div>
      </div>
      <DataTable title="Controles de calidad" columns={['Lote', 'Parámetro', 'Resultado', 'Responsable']} rows={rows} />
    </section>
  )
}
