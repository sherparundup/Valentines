import React, { useState } from "react";
import MemoryLane from "./MemoryLane";
import { Link, useNavigate } from "react-router-dom";
  
const MemoryLaneAsking = () => {
  const [noPosition, setNoPosition] = useState({ top: "0", left: "0" });
  const [isNoMoved, setIsNoMoved] = useState(false);
  const [showMemoryLane, setShowMemoryLane] = useState(false); 
  const navigate = useNavigate()

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; 
    const randomLeft = Math.floor(Math.random() * 80) + 10; 
    setNoPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    setIsNoMoved(true); 
  };

  if (showMemoryLane) {
    navigate("/MemoryLane") 
  }

  return (
    <div
      className="p-6 md:p-7 text-center w-[490px] bg-amber-50 border border-red-900 rounded-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
      style={{ zIndex: 50 }} 
    >
      <h3 className="mb-5 text-lg font-bold text-pink-600 dark:text-pink-400">
        Wanna go down through this past year, my love? ❤️
      </h3>

      <div className="relative flex justify-center gap-6">
        <button
          onClick={() => setShowMemoryLane(true)} 
          className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Yes
        </button>

        <button
          onMouseEnter={moveNoButton} 
          onClick={moveNoButton} 
          className="py-2.5 px-5 text-sm font-medium text-pink-600 focus:outline-none bg-white rounded-lg border border-pink-300 hover:bg-pink-100 hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-pink-700 transition-all duration-300"
          style={{
            position: isNoMoved ? "absolute" : "relative",
            top: isNoMoved ? noPosition.top : "0",
            left: isNoMoved ? noPosition.left : "0",
          }}
        >
          No 💔
        </button>
      </div>
    </div>
  );
};

export default MemoryLaneAsking;
