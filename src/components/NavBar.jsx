import React from "react";
import { FaCog, FaCoins, FaHome } from "react-icons/fa";
import { Link, useRouteMatch } from "react-router-dom";

export default function NavBar() {
  const match = useRouteMatch();
  return (
    <aside className="flex flex-col items-center border-r border-gray-700">
      {/* Logo */}
      <div className="bg-red-500 rounded-md w-10 h-10 my-4"></div>
      <nav className="text-white py-4 flex flex-col justify-between flex-auto p-3">
        <ul>
          <li className={`icon_style ${match.path === "/" ? "bg-accent" : ""}`}>
            <Link to="/">
              <FaHome size={24} />
            </Link>
          </li>
          <li
            className={`icon_style ${
              match.path === "/icons/:_id" ? "bg-accent" : ""
            }`}
          >
            <FaCoins size={24} />
          </li>
          <li
            className={`icon_style ${
              match.path === "/test" ? "bg-accent" : ""
            }`}
          >
            <FaHome size={24} />
          </li>
          <li
            className={`icon_style ${
              match.path === "/test" ? "bg-accent" : ""
            }`}
          >
            <FaHome size={24} />
          </li>
        </ul>
        <div
          className={`icon_style ${match.path === "/test" ? "bg-accent" : ""}`}
        >
          <FaCog size={24} />
        </div>
      </nav>
    </aside>
  );
}
