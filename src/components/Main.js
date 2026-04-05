import ChartComponent from "./ChartComponent";
import DiagnosticTable from "./DiagnosticTable";
import StatsCards from "./StatsCards";

function Main({ data }) {

  if (!data) return <p>Loading...</p>;

  return (
    <div className="main">
      <div className="card">
        <h3>Diagnosis History</h3>
        <ChartComponent data={data} />
      </div>
      <StatsCards data={data} />

      <DiagnosticTable data={data} />

    </div>
  );
}

export default Main;