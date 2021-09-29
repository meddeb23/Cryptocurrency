import React from "react";
import millify from "millify";
import { FaExchangeAlt } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const options = {
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

export default function CoinsCard({ coin, symbol, sign }) {
  return (
    <div className="bg-secondary text-white pb-2 w-full rounded-md p-6 relative">
      <div className="h-12 w-full flex justify-center rounded-full absolute left-0 -top-6">
        <img src={coin.iconUrl} alt="" className="object-cover h-12 w-12" />
      </div>
      <h1 className=" font-semibold text-lg">
        <Link to={`/coins/${coin.id}`}>{coin.name}</Link>
      </h1>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2 text-gray-400">
          <span className="text-xs ">{coin.symbol}</span>
          <FaExchangeAlt />
          <span className="text-xs ">{symbol}</span>
        </div>
        <h2 className="text-xl font-bold">{`${millify(coin.price)}${sign}`}</h2>
      </div>
      <Line
        data={{
          labels: new Array(coin.history.length).fill().map((i, idx) => idx),
          datasets: [
            {
              data: coin.history,
              fill: false,
              backgroundColor: coin.color,
              borderColor: coin.color,
              lineTension: 0.1,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              showLine: true,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}
