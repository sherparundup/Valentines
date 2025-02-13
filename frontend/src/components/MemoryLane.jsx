import React, { useEffect, useRef } from "react";
import Mirrors from "../assets/Mirrorsmp3.mp3";
import bunny from "../assets/videos/VID_20250107_185022.mp4";
import veiwingScene from "../assets/videos/AhaTik_r.u.n.d.u.p_1738908904513.mp4";
import firstday from "../assets/videos/WhatsApp Video 2025-02-08 at 9.23.56 PM.mp4";
import gif1 from "../assets/Bear Wow Sticker.gif";
import LookWhatWeMade from "./LookWhatWeMade.jsx";
import LongDistance from "../assets/long distance/LongDistance.jpeg";
import GifForLongDistance from "../assets/long distance/Sad Cry Sticker by KwonKwonKyu.gif";
import Us from "./Us.jsx";
import WeHaveBeenTogetherFor from "./WeHaveBeenTogetherFor.jsx";

const MemoryLane = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0; // Start at 0 volume
    audio.play();

    let volume = 0;
    const fadeIn = setInterval(() => {
      if (volume < 1) {
        volume += 0.05; // Increase volume gradually
        audio.volume = Math.min(volume, 1);
      } else {
        clearInterval(fadeIn);
      }
    }, 2000); // Adjust speed of fade-in

    return () => clearInterval(fadeIn);
  }, []);

  return (
    <>
      <div className="bg-black flex-col">
        <audio ref={audioRef} src={Mirrors} loop hidden />

        <div className="text-4xl font-bold text-center mt-10 text-white">
          Memory Lane
        </div>

        <div className="ml-[20px] flex items-center flex-col md:flex-row">
          <div className="pt-[200px] ml-[20px]">
            <video
              src={firstday}
              autoPlay
              muted
              loop
              className="w-[90%] md:w-[400px] rounded-2xl"
            ></video>
          </div>

          <div className="mt-[-180px] text-6xl flex-col h-auto ml-[20px] z-1 text-center md:text-left">
            <div className="text-white pb-[40px]">Feb 14 the day we first met</div>
            <div className="text-white">
              <p className="text-[24px] leading-snug">
                I got ready for my very first date with a very sweet girl Smriti 🤍.
                <br />
                Meeting you for the first time not knowing how you'd look,
                <br />
                I was blown away by how you looked. It was love at first sight.
                <br />
              </p>
              <div className="pt-[10px] text-3xl">2024,02,14</div>
            </div>
          </div>

          <div className="flex justify-center mt-4 md:mt-0">
            <img src={gif1} alt="gif" className="w-[200px] md:w-[300px]" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-[40px]">
          <div className="w-full md:w-[400px]">
            <video
              src={veiwingScene}
              autoPlay
              muted
              loop
              className="w-[90%] md:w-[400px] rounded-2xl shadow-xl"
            ></video>
          </div>

          <div className="mt-[-110px] md:mt-0 ml-[20px] text-6xl flex-col h-auto text-center md:text-left">
            <div className="text-white pb-[40px]">I had no money at the time</div>
            <div className="text-white">
              <p className="text-[24px] leading-snug z-1">
                So taking you out on dates was really difficult 🤍.
                <br />
                Looking back, I don't know how I managed the money to
                <br />
                take you out. I didn't have a ride, so I couldn't pick you up.
                <br />
                I really wanted to spoil you, but I couldn't.
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-[40px]">
          <div className="ml-[20px]">
            <video
              src={bunny}
              autoPlay
              muted
              loop
              className="w-[90%] md:w-[400px] rounded-2xl"
            ></video>
          </div>

          <div className="mt-[-80px] text-6xl flex-col h-auto ml-[20px] z-1 text-center md:text-left">
            <div className="text-white pb-[50px]">Cutieeeeee</div>
            <div className="text-white">
              <p className="text-[24px] leading-snug">
                Look at her, she's so cute and beautiful and smart and caring 🤍.
                <br />
                She looks like a bunny here.
                <br />
                I get butterflies every time I see her, I'm so lucky.
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="pt-[100px] flex-col">
          <div className="flex justify-center text-7xl text-white">
            <div>Look what we made</div>
            <div className="flex items-end pl-[10px]">(left me / right sana)</div>
            <div className="flex items-end text-sm">(I won)</div>
          </div>
          <div>
            <LookWhatWeMade />
          </div>
        </div>

        <div className="flex-col mt-[100px]">
          <div className="text-white flex justify-center items-center text-7xl">
            <div className="flex pt-[150px]">But Then</div>
            <div className="flex justify-center">
              <img src={GifForLongDistance} alt="" className="w-[150px] md:w-[200px]" />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <img src={LongDistance} alt="" className="w-[90%] md:w-[500px]" />

            <div className="text-red-900 w-full text-4xl flex-col items-center justify-center">
              <div className="flex justify-center items-center pb-[100px]">We had to say good bye</div>
              <div className="flex justify-center p-[20px] text-white text-1xl">
                <div className="flex w-3/4 justify-center bg-black items-center">
                  Damn, 111 days felt like forever. I don’t think I’ve ever missed someone this much before...
                  <br />
                  (long text about missing someone...)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col pt-[100px]">
          <div className="flex justify-center text-emerald-700 text-7xl">We so fuckingggggg back</div>
          <div>
            <Us />
          </div>
        </div>

        <div>
          <WeHaveBeenTogetherFor />
        </div>
      </div>
    </>
  );
};

export default MemoryLane;
