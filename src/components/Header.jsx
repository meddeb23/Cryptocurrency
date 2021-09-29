import React from "react";
import { FaSearch } from "react-icons/fa";
import { useRouteMatch } from "react-router-dom";
const routesNames = {
  "/": "Dashboard",
  "/coins/:_id": "Coins",
};

export default function Header() {
  const match = useRouteMatch();
  // console.log(match);
  return (
    <header className="absolute top-0 left-0 w-full p-4 flex justify-between ">
      <div>
        <h1 className="text-white font-bold text-xl">
          {routesNames[match.path]}
        </h1>
        <h3 className="text-gray-400">
          10:00AM{" "}
          <span className="w-1 h-1 mb-1 inline-block bg-gray-400 rounded-full"></span>{" "}
          30 May 2021
        </h3>
      </div>
      <div className="flex text-gray-400 items-center bg-secondary rounded-md px-4">
        <input
          type="text"
          placeholder="search..."
          className="bg-transparent outline-none"
        />
        <button className="cursor-pointer">
          <FaSearch />
        </button>
      </div>
    </header>
  );
}
