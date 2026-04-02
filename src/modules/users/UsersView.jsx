import DataTable from '../../components/DataTable'
import { usersData } from '../../utils/mockData'
import { useAppContext } from '../../context/AppContext'

export default function UsersView() {
  const { role } = useAppContext()
  const rows = usersData.map((item) => [item.name, item.role, item.area, item.status])

  return (
    <section className="page-grid">
      <div className="hero-card users-banner">
        <div>
          <span className="eyebrow">Usuarios y roles</span>
          <h2>Administración demo de perfiles</h2>
          <p>Simulación de control de acceso según perfil funcional, con visualización para usuarios y administradores.</p>
        </div>
      </div>
      <section className="info-card">
        <div className="section-head">
          <h3>Rol activo</h3>
        </div>
        <p>La aplicación está operando con el perfil <strong>{role}</strong>.</p>
      </section>
      <DataTable title="Usuarios registrados" columns={['Nombre', 'Rol', 'Área', 'Estado']} rows={rows} />
    </section>
  )
}
