import React from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

function Chart({ resource, country }) {
  const dailyData = resource.dailyData.read();
  const data = resource.data.read();

  const LineChart = (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#ffa502",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "#ff4757",
            fill: true,
          },
        ],
      }}
    />
  );

  const BarChart = (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
            label: "People",
            backgroundColor: ["#ffa502", "#2ed573", "#ff4757"],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  );

  return (
    <div className={styles.container}>{country ? BarChart : LineChart}</div>
  );
}

export default Chart;
