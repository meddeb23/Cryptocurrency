import millify from "millify";
import React from "react";
import { useState } from "react";
import { FaChartLine, FaDollarSign, FaHashtag, FaTrophy } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import LineChart from "../components/LineChart";
import Loader from "../components/Loader";
import {
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";

export default function CoinDetail() {
  let durations = ["24h", "7d", "30d", "3m", "1y", "5y"];
  const [period, setPeriod] = useState(durations[1]);
  const { _id } = useParams();
  const { data, isFetching } = useGetCryptoDetailQuery(_id);
  const { data: coinHistory, isFetching: isFetchingHistory } =
    useGetCryptoHistoryQuery({ _id, period });
  //   console.log(coinHistory?.data);
  //   console.log(new Date(coinHistory?.data?.history[0].timestamp));
  return (
    <>
      <Header />
      {isFetching ? (
        <div className="min-h-full w-full flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        data?.data?.coin && (
          <div className="p-8">
            <div className="">
              <div className="text-3xl text-white flex space-x-4 items-center">
                <div className="h-14 w-14">
                  <img
                    src={data?.data?.coin.iconUrl}
                    alt=""
                    className="object-cover w-14"
                  />
                </div>
                <h1>{data?.data?.coin.name}</h1>
              </div>
            </div>
            <div className="flex flex-wrap my-4 ">
              <InfoCard
                color="bg-yellow-500"
                data={data?.data?.coin.rank}
                icon={<FaHashtag size={22} />}
                label="Rank"
              />
              <InfoCard
                label="price"
                data={`${data?.data?.base.sign} ${millify(
                  data?.data?.coin.price
                )}`}
                icon={<FaDollarSign size={22} />}
              />
              <InfoCard
                color="bg-green-600"
                label="All Time High"
                data={`${data?.data?.base.sign} ${millify(
                  data?.data?.coin.allTimeHigh.price
                )}`}
                icon={<FaTrophy size={22} />}
              />
              <InfoCard
                color="bg-blue-600"
                label="Number Of Markets"
                data={`${millify(data?.data?.coin.numberOfMarkets)}`}
                icon={<FaChartLine size={22} />}
              />
              <InfoCard
                color="bg-purple-600"
                label="Total Supply"
                data={`${data?.data?.base.sign} ${millify(
                  data?.data?.coin.totalSupply
                )}`}
                icon={<FaDollarSign size={22} />}
              />
            </div>

            {coinHistory && (
              <LineChart
                change={coinHistory?.data.change}
                coinHistory={coinHistory?.data.history}
                list={durations}
                selected={period}
                action={setPeriod}
                isFetching={isFetchingHistory}
              />
            )}
          </div>
        )
      )}
    </>
  );
}
