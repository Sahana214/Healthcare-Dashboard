function DiagnosticTable({ data }) {

  const list = data?.diagnostic_list || [];

  return (
    <div className="card">
      <h3>Diagnostic List</h3>

      <table width="100%">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {list.map((d, i) => (
            <tr key={i}>
              <td style={{ fontWeight: "600" }}>{d.name}</td>
              <td style={{ color: "#666" }}>{d.description}</td>
              <td style={{ color: "#00c2a8" }}>{d.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DiagnosticTable;