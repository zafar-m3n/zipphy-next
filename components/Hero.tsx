"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { MdAllInclusive } from "react-icons/md";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";

const Hero = () => {
  const titlesWithDescriptions = [
    {
      title: "Trade Smarter, Not Harder",
      description: "Join millions of traders leveraging cutting-edge tools for maximum returns.",
    },
    {
      title: "Analyze the Market with Precision",
      description: "Stay ahead with real-time data and expert insights at your fingertips.",
    },
    {
      title: "Your Journey to Financial Freedom",
      description: "Achieve your goals with a platform designed for traders of all levels.",
    },
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titlesWithDescriptions.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [titlesWithDescriptions.length]);

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-40 left-full h-[80vh] w-[50vw]" fill="#0bf40a" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#eff00f" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative z-10 my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-green-100 flex items-center space-x-2 max-w-lg">
            <span>Our Capital, Your</span>
            <span className="flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-1 shadow-md">
              <MdAllInclusive size={16} color="#0bf40a" />
              <p className="text-white font-medium">Success</p>
            </span>
          </h2>
          <TextGenerateEffect
            key={currentTitleIndex}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={titlesWithDescriptions[currentTitleIndex].title}
          />
          <TypewriterEffectSmooth
            key={`desc-${currentTitleIndex}`}
            words={[
              {
                text: titlesWithDescriptions[currentTitleIndex].description,
                className: "text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl",
              },
            ]}
          />
          <a href="#">
            <MagicButton title="Get Started" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
