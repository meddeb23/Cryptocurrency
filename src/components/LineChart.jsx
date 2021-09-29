import React from "react";
import { Line } from "react-chartjs-2";
import DropDownMenu from "./DropDownMenu";
import Loader from "./Loader";

export default function LineChart({
  coinHistory,
  change,
  list,
  selected,
  action,
  isFetching,
}) {
  const coinPrice = [];
  const coinTimestamp = [];
  coinHistory.forEach((val, index) => {
    if (index % 10 === 0) {
      coinPrice.push(val.price);
      coinTimestamp.push(new Date(val.timestamp).toLocaleDateString());
    }
  });
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price",
        data: coinPrice,
        fill: false,
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        pointBorderWidth: 1,
        lineTension: 0.1,
      },
    ],
  };
  const option = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className=" w-5/6">
      <div className="flex items-center justify-between">
        <DropDownMenu list={list} selected={selected} action={action} />
        <span
          className={`${
            change > 0 ? "text-green-500" : "text-red-500"
          } font-bold`}
        >
          {change} %
        </span>
      </div>
      <div className="relative mt-4">
        {isFetching && (
          <div className="h-full w-full bg-gray-800 bg-opacity-70 absolute flex justify-center items-center flex-col text-white space-y-1">
            <Loader />
            <span>Loading</span>
          </div>
        )}
        <Line options={option} data={data} />
      </div>
    </div>
  );
}
