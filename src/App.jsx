import { AppProvider, useAppContext } from './context/AppContext'
import Sidebar from './layout/Sidebar'
import Topbar from './layout/Topbar'
import LoginScreen from './layout/LoginScreen'
import DashboardView from './modules/dashboard/DashboardView'
import ProductionView from './modules/production/ProductionView'
import InventoryView from './modules/inventory/InventoryView'
import QualityView from './modules/quality/QualityView'
import ReportsView from './modules/reports/ReportsView'
import UsersView from './modules/users/UsersView'

const views = {
  dashboard: DashboardView,
  production: ProductionView,
  inventory: InventoryView,
  quality: QualityView,
  reports: ReportsView,
  users: UsersView
}

function AppShell() {
  const { selectedView, theme, isAuthenticated } = useAppContext()
  const ActiveView = views[selectedView] ?? DashboardView

  if (!isAuthenticated) {
    return <LoginScreen />
  }

  return (
    <div className={`app-shell ${theme}`}>
      <Sidebar />
      <div className="content-shell">
        <Topbar />
        <main className="content-area">
          <ActiveView />
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  )
}
