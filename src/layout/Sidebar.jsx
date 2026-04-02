import { useAppContext } from '../context/AppContext'
import logo from '../assets/aserfintec-logo.png'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'production', label: 'Producción' },
  { id: 'inventory', label: 'Inventario' },
  { id: 'quality', label: 'Calidad' },
  { id: 'reports', label: 'Reportes' },
  { id: 'users', label: 'Usuarios' }
]

export default function Sidebar() {
  const { selectedView, setSelectedView, isSidebarOpen } = useAppContext()

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
      <div className="brand-block">
        <img src={logo} alt="ASERFINTEC" className="brand-logo" />
        {isSidebarOpen && (
          <div>
            <h1>Food Industry Suite</h1>
            <p>Demo empresarial</p>
          </div>
        )}
      </div>

      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={selectedView === item.id ? 'active' : ''}
            onClick={() => setSelectedView(item.id)}
          >
            <span className="nav-dot" />
            {isSidebarOpen && item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
