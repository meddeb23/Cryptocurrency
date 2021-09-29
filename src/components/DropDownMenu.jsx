import React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function DropDownMenu({ selected, list, action }) {
  const [showList, setShowList] = useState(false);
  return (
    <div className="text-white relative">
      <div
        onClick={() => setShowList(!showList)}
        className="bg-secondary p-2 w-36 flex items-center rounded-md justify-between"
      >
        <div>{selected}</div>
        <div>
          <FaAngleDown size={18} />
        </div>
      </div>
      <div
        style={{ display: !showList ? "none" : "block" }}
        className="z-10 bg-secondary w-36 mt-2 rounded-md py-2 absolute"
      >
        {list.length !== 0 &&
          list.map((val) => (
            <li
              onClick={() => {
                action(val);
                setShowList(false);
              }}
              className="list-none p-3 hover:bg-accent cursor-pointer rounded-md"
              key={val}
            >
              {val}
            </li>
          ))}
      </div>
    </div>
  );
}
