import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,

  datasets: [
    {
      tension: 0.2,
      label: "My First dataset",
      backgroundColor: "skyblue",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 40, 15, 32, 20, 30, 45],
    },
    {
      tension: 0.2,
      label: "My First dataset",
      backgroundColor: "skyblue",
      borderColor: "skyblue",
      data: [10, 4, 35, 12, 50, 10, 5],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line width="400px" height="300px" data={data} />
    </div>
  );
};

export default LineChart;
