
import React from "react";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleHoverEffect = (show) => {
        if (show) {
            setShowDropdown(true);
        }
        else setShowDropdown(false);
    }

    return (
      <div className="flex justify-between px-10 items-center h-20">
        <div className="flex relative">
          {["Find designers", "Inspiration", "Jobs", "Go Pro"].map(
            (ele, idx) => {
              return (
                <button
                  className="px-4 text-sm font-semibold flex items-center"
                  onMouseEnter={
                    idx === 0 ? () => handleHoverEffect(true) : null
                  }
                  onMouseLeave={
                    idx === 0 ? () => handleHoverEffect(false) : null
                  }
                >
                  {ele}
                  {idx === 0 && <IoIosArrowDown />}
                </button>
              );
            }
          )}
          {showDropdown ? (
            <div className="bg-white rounded-2xl px-6 py-6 top-8 absolute">
              {[
                {
                  head: "Designer Search",
                  subHead: "Quickly find your next designer",
                },
                {
                  head: "Post a job",
                  subHead: "The #1 job board for design talent",
                },
              ].map((item, idx) => {
                return (
                  <div className={`${idx === 0 ? "mb-4" : ""}`}>
                    <div className="text-sm font-medium text-gray-600">
                      {item.head}
                    </div>
                    <div className="text-xs font-normal text-gray-600">
                      {item.subHead}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="text-2xl">
          <i>Dribble</i>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Search ..."
            className="p-2 px-4 rounded-full"
          ></input>
          <button className="ml-3 px-2 text-sm font-semibold">Log in</button>
          <button className="ml-3 text-sm font-semibold text-white bg-black rounded-full px-5 py-3">
            Sign up
          </button>
        </div>
      </div>
    );
}

export default Header;