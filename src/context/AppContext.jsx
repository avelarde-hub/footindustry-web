import { createContext, useContext, useMemo, useState } from 'react'
import { reportsCatalog, sampleNotifications, statCards, trendSeries } from '../utils/mockData'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [role, setRole] = useState('Administrador')
  const [theme, setTheme] = useState('light')
  const [selectedView, setSelectedView] = useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ user: 'admin@aserfintec.ec', password: 'Demo2026*' })

  const value = useMemo(
    () => ({
      role,
      setRole,
      theme,
      setTheme,
      selectedView,
      setSelectedView,
      isSidebarOpen,
      setIsSidebarOpen,
      isAuthenticated,
      setIsAuthenticated,
      credentials,
      setCredentials,
      statCards,
      trendSeries,
      reportsCatalog,
      sampleNotifications
    }),
    [role, theme, selectedView, isSidebarOpen, isAuthenticated, credentials]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppProvider')
  }
  return context
}
