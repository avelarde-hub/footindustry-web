function downloadFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = fileName
  anchor.click()
  URL.revokeObjectURL(url)
}

export function exportToCsv(rows, fileName = 'reporte-demo.csv') {
  const csv = rows.map((row) => row.join(',')).join('\n')
  downloadFile(csv, fileName, 'text/csv;charset=utf-8;')
}

export function exportToTxt(lines, fileName = 'reporte-demo.txt') {
  const txt = lines.join('\n')
  downloadFile(txt, fileName, 'text/plain;charset=utf-8;')
}
