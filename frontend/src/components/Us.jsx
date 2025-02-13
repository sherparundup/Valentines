import AnimatedTestimonials from "./ui/animated-testimonials.jsx";
import React from "react";

import image1 from "../assets/smriti and me/busma.jpeg";
import image2 from "../assets/smriti and me/papari.jpeg";
import image3 from "../assets/smriti and me/pink.jpeg";
import image4 from "../assets/smriti and me/sunkissedkissingjpeg.jpeg";
import image5 from "../assets/smriti and me/yeye.jpeg";
import image6 from "../assets/smriti and me/uno.jpeg";
import image7 from "../assets/smriti and me/ok.jpeg";
export default function Us() {
  const testimonials = [
    {
      quote:
        "Played Uno with my wife and her family. Cutie patutie",

      src:  image6 ,
      designation: "UNO",
    },
    {
      quote:
        "We cooked and ate and had dessert after .",

      src:  image7 ,
      designation: "Sana and Rundup cooking fire ",
    },
    {
      quote:
        "This was just 3 days after i returned and my wife and i look so cute together.",
      src:  image2 ,
      designation: "Outside Gcafe",
    },
    {
      quote:
        "",
     

      src:  image3 ,
      designation: "mirror selfieee",
    },
    {
      quote:
        "We went to hike this day and we were kissed by the sun.",
      src:  image4 ,
      designation: "Sun Kissed",
    }, {
      quote:
        "We went to buy A brand new scooter this day. My moneyyyyy :(.",
      name: "Bus to scooter",

      src:  image1 ,
      designation: "Bus to scooterrrr",
    }, {
      quote:
        "Mon, Mar 25, 2024 Sana and I we did something"
,

      src:  image5 ,
      designation: "Yeye",
    }, {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",

      src:  image7 ,
      designation: "Product Manager at TechFlow",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
