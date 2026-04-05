import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function ChartComponent({ data }) {
  const history = data?.diagnosis_history || [];
  if (history.length === 0) {
    return <p>Loading chart...</p>;
  }
  const chartData = {
    labels: history.map((item) => item.month),

    datasets: [
      {
        label: "Systolic",
        data: history.map(
          (item) => item.blood_pressure?.systolic?.value
        ),
        borderColor: "#ff4d6d",
        backgroundColor: "#ff4d6d",
        tension: 0.4,
        pointRadius: 4
      },
      {
        label: "Diastolic",
        data: history.map(
          (item) => item.blood_pressure?.diastolic?.value
        ),
        borderColor: "#4dabf7",
        backgroundColor: "#4dabf7",
        tension: 0.4,
        pointRadius: 4
      }
    ]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          stepSize: 20
        }
      }
    }
  };

  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>Blood Pressure</h3>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default ChartComponent;