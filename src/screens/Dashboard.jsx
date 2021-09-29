import React from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { useGetCryptosQuery } from "../services/cryptoApi";

import Loader from "../components/Loader";
import CoinsCard from "../components/CoinsCard";
import Header from "../components/Header";

export default function Dashboard() {
  const [limit] = useState(20);
  const [page, setpage] = useState(0);
  const { data, isFetching } = useGetCryptosQuery({
    limit,
    offset: page * limit,
  });
  console.log(Math.ceil(data?.data?.stats.total / 20));
  return (
    <div className="h-full">
      <Header />
      {isFetching ? (
        <div className="h-full w-full flex justify-center items-center">
          <Loader />
        </div>
      ) : data?.data?.coins.length !== 0 ? (
        <>
          <div
            className="pt-10 min-h-full grid gap-x-4 gap-y-8 p-4 
             md:grid-cols-3
             lg:grid-cols-4
             xl:grid-cols-5"
          >
            {data?.data?.coins.slice(0, 20).map((coin) => (
              <CoinsCard
                key={coin.uuid}
                coin={coin}
                sign={data?.data?.base?.sign}
                symbol={data?.data?.base.symbol}
              />
            ))}
          </div>
          <div className="text-white flex justify-center items-center space-x-4">
            <button
              onClick={() => setpage(page - 1)}
              className={`${
                page === 0 ? "bg-secondary" : "bg-red-500 hover:bg-red-300"
              }  h-12 w-12 flex justify-center items-center rounded-md`}
            >
              <FaAngleLeft size={20} />
            </button>
            <span>{page + 1}</span>
            <button
              onClick={() => setpage(page + 1)}
              className={`${
                page === Math.ceil(data?.data?.stats.total / 20)
                  ? "bg-secondary"
                  : "bg-red-500 hover:bg-red-300"
              }  h-12 w-12 flex justify-center items-center rounded-md`}
            >
              <FaAngleRight size={20} />
            </button>
          </div>
        </>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
}
