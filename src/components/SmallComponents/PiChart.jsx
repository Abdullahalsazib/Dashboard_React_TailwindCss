import { Chart } from "chart.js/auto";
import React from "react";
import { Doughnut, Pie, Radar } from "react-chartjs-2";
const labels = ["Jan", "Feb", "Mar"];
const data = {
  labels: labels,

  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "rgb(255, 205, 86)",
        "rgb(54, 162, 235)",
        "rgb(255, 99, 132)",
      ],
      borderColor: "white",
      data: [20, 29, 5, 20],
    },
    {
      label: "My First dataset",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      borderColor: "white",
      data: [30, 59, 25, 10],
    },
  ],
};

const Fdata = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

function PiChart() {
  return (
    <div className="">
      <Radar width="400" height="500" data={Fdata} />
    </div>
  );
}

export default PiChart;
