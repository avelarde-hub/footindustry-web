export default function DataTable({ title, columns, rows }) {
  return (
    <section className="table-card">
      <div className="section-head">
        <h3>{title}</h3>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`}>
                {row.map((cell, index) => (
                  <td key={`${title}-${rowIndex}-${index}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
