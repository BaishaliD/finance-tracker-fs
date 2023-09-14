import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

export default function BarChart({ chartdata, labels, datalabel }) {
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
      labels,
      datasets: [
        {
          label: datalabel,
          data: chartdata,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
  }, [chartdata, labels]);
  return (
    <div className="chart">
      {chartdata?.length > 0 && labels?.length > 0 ? (
        <Bar options={options} data={data} />
      ) : (
        <div className="no-chart-data">No data to show</div>
      )}
    </div>
  );
}
