import React from "react";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";
import { useSelector } from "react-redux";
const Home = () => {
  const data = useSelector((state) => state.sensor.sensors)?.data?.result;
  const classes = useStyles();

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

  return (
    <div className={classes.home}>
      <h1> List of Sensors</h1>
      <div className={classes.chartContainer}>
        <Doughnut data={dataset} />
      </div>
    </div>
  );
};

export default Home;
