import React from "react";
import "../style/loader.css";
export default function Loader({ text = false }) {
  return (
    <div>
      <div className="loader "></div>
      {text && <h3 className="text-white">Loading...</h3>}
    </div>
  );
}
