import { useAppContext } from '../context/AppContext'

export default function Topbar() {
  const { role, setRole, theme, setTheme, isSidebarOpen, setIsSidebarOpen } = useAppContext()

  return (
    <header className="topbar">
      <div>
        <button type="button" className="ghost-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          ☰
        </button>
      </div>
      <div className="topbar-actions">
        <select value={role} onChange={(event) => setRole(event.target.value)}>
          <option>Administrador</option>
          <option>Usuario</option>
        </select>
        <button type="button" className="ghost-btn" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
        </button>
      </div>
    </header>
  )
}
