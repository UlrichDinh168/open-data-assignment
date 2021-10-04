import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
const Home = () => {
  const data = useSelector((state) => state.sensor.sensors)?.data?.result;

  const { date, ...sensors } = data;

  const dataset = {
    labels: Object.keys(sensors),
    datasets: [
      {
        data: Object.values(sensors),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  console.log("sensors", sensors);
  return (
    <div className="home">
      List of Sensors
      <Doughnut data={dataset} />
    </div>
  );
};

export default Home;
