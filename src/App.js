import { useEffect, useState } from "react";
import { fetchPatients } from "./api";

import Sidebar from "./components/Sidebar";
import ChartComponent from "./components/ChartComponent";
import DiagnosticTable from "./components/DiagnosticTable";
import Profile from "./components/Profile";
import LabResults from "./components/LabResults";
import StatsCards from "./components/StatsCards";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchPatients().then((data) => {
       console.log("FULL DATA:", data); 
      setPatients(data);

      const jessica = data.find(
        (p) => p.name === "Jessica Taylor"
      );
       console.log("JESSICA:", jessica);

      setSelected(jessica);
    });
  }, []);

  return (
    <div className="container">
      <Sidebar patients={patients} />
      <div className="main">
        <ChartComponent data={selected} />
        <StatsCards data={selected} /> 
        <DiagnosticTable data={selected} />
      </div>
      <div className="right-panel">
        <Profile data={selected} />
        <LabResults data={selected} />
      </div>

    </div>
  );
}

export default App;