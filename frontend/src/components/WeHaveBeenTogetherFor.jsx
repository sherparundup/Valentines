import React, { useState, useEffect } from "react";

const WeHaveBeenTogetherFor = () => {
  const startDate = new Date("2024-02-17T00:00:00"); // Set your actual start date
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = now - startDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeTogether({ days, hours, minutes, seconds });
    };

    calculateTime(); // Initial calculation
    const interval = setInterval(calculateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="text-5xl md:text-7xl font-semibold tracking-wide">
        We Have Been Together For
      </div>
      <div className="mt-10 text-6xl md:text-[140px] font-bold">
        <span className="text-gray-300">{timeTogether.days}</span> days
      </div>
      <div className="mt-4 text-5xl md:text-[100px] font-semibold">
        {timeTogether.hours}h : {timeTogether.minutes}m : {timeTogether.seconds}s
      </div>
      <div className="mt-6 text-lg md:text-2xl text-gray-400 italic">
        too many many more
      </div>
    </div>
  );
};

export default WeHaveBeenTogetherFor;
