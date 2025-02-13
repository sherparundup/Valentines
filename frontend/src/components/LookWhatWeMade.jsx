import React from "react";
import { Carousel  } from "../components/ui/Carousel.jsx";
import first from "../assets/ArtsAndCraft/1.jpeg";
import second from "../assets/ArtsAndCraft/2.jpeg";
import third from "../assets/ArtsAndCraft/3.jpeg";
import fourth from "../assets/ArtsAndCraft/4.jpeg";
import fifth from "../assets/ArtsAndCraft/5.jpeg";
const LookWhatWeMade = () => {
  const slideData = [
    {
      title: " Mushroom ",

      src:  first 
    },
    {
      title: "piggies",

      src:  second,
    },
    {
      title: "Gang",

      src:  third 
    },
    {
      title: "octopus",

      src:  fourth,
    },
    {
      title: "Birdies",

      src:  fifth 
    },
   
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};
export default LookWhatWeMade;
