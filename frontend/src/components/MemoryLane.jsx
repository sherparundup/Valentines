import React, { useEffect, useRef } from "react";
import Mirrors from "../assets/Mirrorsmp3.mp3";
// import firstDay from "../assets/videos/Snapchat-531986.mp4"
import bunny from "../assets/videos/VID_20250107_185022.mp4";
import veiwingScene from "../assets/videos/AhaTik_r.u.n.d.u.p_1738908904513.mp4";
import firstday from "../assets/videos/WhatsApp Video 2025-02-08 at 9.23.56 PM.mp4";
import gif1 from "../assets/Bear Wow Sticker.gif";
import LookWhatWeMade from "./LookWhatWeMade.jsx";
import LongDistance from "../assets/long distance/LongDistance.jpeg";
import GifForLongDistance from "../assets/long distance/Sad Cry Sticker by KwonKwonKyu.gif";
import Us from "./Us.jsx"
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
      <div className="bg-black flex-col  ">
        <audio ref={audioRef} src={Mirrors} loop hidden />

        <div className="text-4xl font-bold text-center mt-10  text-white">
          Memory Lane
        </div>
        <div className=" ml-[100px] flex  items-center  ">
          <div className=" pt-[200px] ml-[20px]">
            <video
              src={firstday}
              autoPlay
              muted
              loop
              className=" w-[400px] rounded-2xl "
            ></video>
          </div>
          <div className="  mt-[-180px] auto text-6xl flex-col  h-auto ml-[100px] z-1  ">
            <div className="text-white pb-[40px]">
              Feb 14 the day we first met
            </div>
            <div className="text-white  ">
              <p className="text-[24px] leading-snug">
                I got ready for my very first date with a very sweet girl Smriti
                🤍.<br></br>
                Meeting you for the first time not knowing how you'd look <br />
                I was blown away how you looked , it was love at first sight.{" "}
                <br />
              </p>
              <div className=" pt-[10px]   text-3xl   ">2024,02,14</div>
            </div>
          </div>
          <div className="flex bg-black justify-center">
            <img src={gif1} alt="" />
          </div>
        </div>
        <div className="flex  h-full items-center justify-end">
          <div className="mt-[100px] rotate-270 ">
            <video
              src={veiwingScene}
              autoPlay
              muted
              loop
              className="w-[400px] rounded-2xl shadow-xl"
            ></video>
          </div>

          <div className="mt-[-110px] ml-[100px] pr-[30px] z-1 text-6xl flex-col  h-auto">
            <div className="text-white pb-[40px]">
              I had no money at the time
            </div>
            <div className="text-white">
              <p className="text-[24px] leading-snug z-1">
                So taking you out on dates was really difficult 🤍.
                <br />
                Looking back i dont know how did i managed the money to
                <br />
                take you out .I didnt have a ride so i coudnt pick you up.
                <br />
                I really wanted to spoil you but i couldnt.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className=" flex  items-center  ">
          <div className="ml-[20px]">
            <video
              src={bunny}
              autoPlay
              muted
              loop
              className=" w-[400px] rounded-2xl "
            ></video>
          </div>
          <div className=" mt-[-80px]  auto text-6xl flex-col   h-[500px]  ml-[100px] z-1  ">
            <div className="text-white pb-[50px]">Cutieeeeee</div>
            <div className="text-white  ">
              <p className="text-[24px] leading-snug">
               Look at her she so cutee and beaitiful and smart and caring
                🤍.<br></br>
                She looks like a bunny here <br />
                I get butterflies everytime i see her  ,im so lucky .{" "}
                <br />
              </p>
              <div className=" pt-[10px]   text-3xl   "></div>
            </div>
          </div>
        </div>
        <div className=" pt-[100px] flex-col">
          <div className="flex justify-center text-7xl text-white">
            <div>Look what we made</div>
            <div className="flex items-end pl-[10px] ">
              (left me / right sana)
            </div>
            <div className="flex items-end text-sm">(I won)</div>
          </div>
          <div>
            <LookWhatWeMade />
          </div>
        </div>

        <div className="flex-col">
          <div className=" text-white  flex ml-[380px] text-7xl pt-[100px] ">
            {" "}
            <div className=" flex justify-center items-center ">
              {" "}
              <div className="flex pt-[150px] ">
              But Then 

              </div>
              <div className=" flex ">

              <img src={GifForLongDistance} alt="" />
              </div>
            </div>
          </div>

          <div className=" flex ml-[150px] justify-center">
            <img src={LongDistance} alt="" />

            <div className=" text-red-900 w-full text-4xl flex-col items-center justify-center">
              <div className="flex justify-center items-center pb-[100px]">
                We had to say good bye{" "}
              </div>
              <div className="flex justify-center p-[20px]  text-white text-1xl ">
                <div className="flex w-3/4 justify-center bg-black items-center">
                  Damn, 111 days felt like forever. I don’t think I’ve ever
                  missed someone this much before. Ever since we got together,
                  we’ve seen each other almost every day, so being apart like
                  that? It was actual hell. I missed everything—your hugs, your
                  kisses, just *you* being there. It felt so weird not having
                  you around, like something was constantly missing. But
                  honestly, it made me appreciate us even more. The little
                  things, the way you laugh, how you always know exactly what to
                  say, even just sitting next to you doing nothing—it all means
                  so much more now. Being away from you just made me realize how
                  lucky I am to have you and how much I don’t ever want to take
                  this for granted.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className="flex-col pt-[100px]">
          <div className="flex justify-center text-emerald-700 text-7xl "> We so fuckingggggg back</div>
          
          <div className="">
            <Us/></div>
            </div>
            <div className="">
            </div>
            <div className="">
              <WeHaveBeenTogetherFor/>

            </div>
      </div>
    </>
  );
};

export default MemoryLane;