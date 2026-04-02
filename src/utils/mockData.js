export const statCards = [
  { label: 'Producción diaria', value: '18.4 t', delta: '+6.2%', accent: 'primary' },
  { label: 'Lotes aprobados', value: '126', delta: '+3.4%', accent: 'success' },
  { label: 'Merma controlada', value: '1.8%', delta: '-0.4%', accent: 'warning' },
  { label: 'Despachos a tiempo', value: '97.6%', delta: '+1.1%', accent: 'info' }
]

export const trendSeries = [72, 76, 74, 81, 85, 88, 91, 89, 94, 97, 99, 103]

export const productionOrders = [
  { code: 'OP-2401', product: 'Conserva vegetal premium', line: 'Línea A', status: 'En proceso', progress: 76 },
  { code: 'OP-2402', product: 'Snacks horneados', line: 'Línea B', status: 'Planificado', progress: 42 },
  { code: 'OP-2403', product: 'Bebida funcional', line: 'Línea C', status: 'Liberado', progress: 100 }
]

export const inventoryRows = [
  { sku: 'MAT-001', name: 'Harina fortificada', stock: 2450, unit: 'kg', level: 'Óptimo' },
  { sku: 'MAT-018', name: 'Envase PET 500ml', stock: 820, unit: 'und', level: 'Crítico' },
  { sku: 'MAT-026', name: 'Aceite vegetal', stock: 1380, unit: 'lt', level: 'Controlado' },
  { sku: 'MAT-032', name: 'Aditivo natural', stock: 410, unit: 'kg', level: 'Reserva' }
]

export const qualityChecks = [
  { batch: 'LT-8842', parameter: 'pH', result: 'Conforme', owner: 'Control de Calidad' },
  { batch: 'LT-8845', parameter: 'Temperatura', result: 'En observación', owner: 'Aseguramiento' },
  { batch: 'LT-8849', parameter: 'Sellado', result: 'Conforme', owner: 'Producción' }
]

export const usersData = [
  { name: 'María Andrade', role: 'Administrador', area: 'Operaciones', status: 'Activo' },
  { name: 'Carlos Flores', role: 'Usuario', area: 'Calidad', status: 'Activo' },
  { name: 'Daniela Pérez', role: 'Usuario', area: 'Bodega', status: 'Inactivo' }
]

export const reportsCatalog = [
  { title: 'Reporte de Producción', description: 'Consolidado diario por línea, lote y eficiencia.', format: 'CSV' },
  { title: 'Reporte de Calidad', description: 'Resumen de controles, alertas y liberaciones.', format: 'TXT' },
  { title: 'Reporte Ejecutivo', description: 'Indicadores clave para gerencia y directorio.', format: 'CSV' }
]

export const sampleNotifications = [
  'Temperatura de cámara 02 dentro de parámetro operativo.',
  'Lote LT-8845 requiere validación del supervisor de calidad.',
  'Inventario de envase PET se encuentra en nivel crítico.'
]
