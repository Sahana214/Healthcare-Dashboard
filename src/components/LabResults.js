function LabResults({ data }) {

  const labs = data?.lab_results || [];

  return (
    <div className="card">
      <h3>Lab Results</h3>

      {labs.length === 0 ? (
        <p style={{ color: "#888" }}>
          No lab results available
        </p>
      ) : (
        labs.map((lab, i) => {

          // ✅ handle ALL possible formats
          let name = "";

          if (typeof lab === "string") {
            name = lab;
          } else {
            name =
              lab.name ||
              lab.test_name ||
              lab.title ||
              lab.lab ||
              "Unknown Test";
          }

          return (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #eee"
              }}
            >
              <span>{name}</span>

              {/* icon like XD */}
              <span style={{ color: "#00c2a8" }}>⬇</span>
            </div>
          );
        })
      )}
    </div>
  );
}
export default LabResults;