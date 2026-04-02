import logo from '../assets/aserfintec-logo.png'
import { useAppContext } from '../context/AppContext'

export default function LoginScreen() {
  const { setIsAuthenticated, credentials, setCredentials } = useAppContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsAuthenticated(true)
  }

  return (
    <main className="login-shell">
      <section className="login-card">
        <img src={logo} alt="ASERFINTEC" className="login-logo" />
        <span className="eyebrow">Acceso demo</span>
        <h1>Food Industry Suite</h1>
        <p>Ingreso simulado para entorno de demostración sin base de datos.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Usuario
            <input
              type="email"
              value={credentials.user}
              onChange={(event) => setCredentials((prev) => ({ ...prev, user: event.target.value }))}
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              value={credentials.password}
              onChange={(event) => setCredentials((prev) => ({ ...prev, password: event.target.value }))}
            />
          </label>
          <button type="submit">Ingresar al sistema</button>
        </form>
      </section>
    </main>
  )
}
