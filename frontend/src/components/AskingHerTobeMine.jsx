import React, { useState } from "react";
import Dance from "../assets/Bear Wow Sticker.gif";
import yesGif from "../assets/Laugh Love Sticker.gif";
import AskingMemoryLane from "./MemoryLaneAsking";

const AskingHerTobeMine = () => {
  const [no, setNo] = useState("Nwo");
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(80);
  const [hidden, setHidden] = useState(false);
  const [yes, setYes] = useState(false);
  const [showMemoryLane, setShowMemoryLane] = useState(false);

  const ClickedNo = () => {
    const noText = ["pleasee", "say yess", "pweasse", "Are you sure", "super sure??"];

    if (count < noText.length) {
      setNo(noText[count]);
      setCount(count + 1);
    }
    setSize((prevSize) => Math.min(prevSize * 2, window.innerWidth));
  };

  const whenYesClicked = () => {
    setYes(true);
    setHidden(true);

    setTimeout(() => {
      setShowMemoryLane(true);
    }, 3000);
  };

  return (
    <>
      {!hidden ? (
        <div className="bg-pink-300 w-full min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl bg-amber-50 p-4 rounded-lg">
            Will you let me be yours again?
          </div>

          <div className="flex flex-col sm:flex-row p-6 sm:p-10 items-center gap-4">
            <div
              onClick={whenYesClicked}
              className="flex justify-center items-center bg-green-400 text-white font-bold cursor-pointer transition-all duration-300  shadow-lg"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                maxWidth: "100vw",
                maxHeight: "100vh",
                fontSize: size > 200 ? "1.5rem" : "1rem",
              }}
            >
              Yes
            </div>

            <div
              className="flex justify-center items-center w-32 h-14 bg-red-400 text-white font-bold cursor-pointer  shadow-md text-lg md:text-xl"
              onClick={ClickedNo}
            >
              {no}
            </div>
          </div>

          <div className="w-64 sm:w-80 flex justify-center mt-4">
            <img src={Dance} alt="Dancing" className="max-w-full object-contain rounded-lg shadow-xl" />
          </div>
        </div>
      ) : (
        <div className="bg-pink-300 w-full min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl bg-amber-50 p-4 rounded-lg shadow-md">
            Yayyyyyyyyyyyyy
          </div>

          <div className="w-64 sm:w-80 mt-4">
            <img src={yesGif} alt="Excited GIF" className="max-w-full object-contain rounded-lg shadow-xl" />
          </div>

          {showMemoryLane && <AskingMemoryLane />}
        </div>
      )}
    </>
  );
};

export default AskingHerTobeMine;
