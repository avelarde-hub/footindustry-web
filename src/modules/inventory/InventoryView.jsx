import DataTable from '../../components/DataTable'
import { inventoryRows } from '../../utils/mockData'

export default function InventoryView() {
  const rows = inventoryRows.map((item) => [item.sku, item.name, item.stock, item.unit, item.level])

  return (
    <section className="page-grid">
      <div className="hero-card inventory-banner">
        <div>
          <span className="eyebrow">Inventario</span>
          <h2>Disponibilidad de materias primas e insumos</h2>
          <p>Visualización de niveles de stock para apoyar reposición, trazabilidad y continuidad operativa.</p>
        </div>
      </div>
      <DataTable title="Inventario estratégico" columns={['SKU', 'Material', 'Stock', 'Unidad', 'Nivel']} rows={rows} />
    </section>
  )
}
