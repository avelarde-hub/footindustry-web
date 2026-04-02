import DataTable from '../../components/DataTable'
import { productionOrders } from '../../utils/mockData'

export default function ProductionView() {
  const rows = productionOrders.map((item) => [item.code, item.product, item.line, item.status, `${item.progress}%`])

  return (
    <section className="page-grid">
      <div className="hero-card production-banner">
        <div>
          <span className="eyebrow">Producción</span>
          <h2>Gestión de órdenes y control por línea</h2>
          <p>Seguimiento demo del estado productivo, avance por lote y visibilidad operativa para supervisores.</p>
        </div>
      </div>
      <DataTable title="Órdenes de producción" columns={['Código', 'Producto', 'Línea', 'Estado', 'Avance']} rows={rows} />
    </section>
  )
}
