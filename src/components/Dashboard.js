import React from "react";
import { Bar } from "react-chartjs-2"; // Use Bar chart for a bar graph
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Register required chart components
ChartJS.register(
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

function Dashboard({ totalCO2 }) {
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4"], // Example days
    datasets: [
      {
        label: "CO₂ Reduction (kg)",
        data: [0.2, 0.5, 0.8, totalCO2], // Dynamically use totalCO2
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "CO₂ Reduction Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days",
        },
      },
      y: {
        title: {
          display: true,
          text: "CO₂ Reduction (kg)",
        },
      },
    },
  };

  return (
    <div className="dashboard">
      <h2>Impact Dashboard</h2>
      <Bar data={data} options={options} />
      {/* Using the Bar chart to show the data */}
    </div>
  );
}

export default Dashboard;
