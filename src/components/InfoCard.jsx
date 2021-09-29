import React from "react";

export default function InfoCard({ label, data, icon, color }) {
  return (
    <div className="text-white bg-secondary px-6 py-4 rounded-md my-2 mx-1">
      <div className="flex items-center space-x-4">
        <span
          className={`${
            color || "bg-red-500"
          } h-12 w-12 flex justify-center items-center rounded-md`}
        >
          {icon}
        </span>
        <div>
          <span className="text-sm">{label}</span>
          <h2 className="font-semibold text-2xl ">{data}</h2>
        </div>
      </div>
    </div>
  );
}
