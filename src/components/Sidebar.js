function Sidebar({ patients }) {
  return (
    <div className="sidebar">
      <h3>Patients</h3>

      {patients?.map((p, i) => (
        <div
          key={i}
          className={`patient ${
            p.name === "Jessica Taylor" ? "active" : ""
          }`}
        >
          <img src={p.profile_picture} width="45" />

          <div>
            <div style={{ fontWeight: "600" }}>{p.name}</div>
            <small style={{ color: "#777" }}>
              {p.gender}, {p.age}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;