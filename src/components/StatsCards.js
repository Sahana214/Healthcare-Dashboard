function StatsCards({ data }) {

  if (!data || !data.diagnosis_history) return null;

  const latest = data.diagnosis_history[0];

  return (
    <div className="stats">

      <div className="stat-card blue">
        <div className="icon">🫁</div>
        <p>Respiratory Rate</p>
        <h2>{latest.respiratory_rate?.value} bpm</h2>
        <span>Normal</span>
      </div>

      <div className="stat-card pink">
        <div className="icon">🌡️</div>
        <p>Temperature</p>
        <h2>{latest.temperature?.value}°F</h2>
        <span>Normal</span>
      </div>

      <div className="stat-card red">
        <div className="icon">❤️</div>
        <p>Heart Rate</p>
        <h2>{latest.heart_rate?.value} bpm</h2>
        <span>Normal</span>
      </div>

    </div>
  );
}

export default StatsCards;