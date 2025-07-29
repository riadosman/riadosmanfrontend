"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/profile.png";

export default function Hero() {
  const texts = ["Software Engineer", "Web Developer", "Lifelong Learner"];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prev) =>
          prev + 1 >= texts.length ? 0 : prev + 1
        );
        setDisplayedText("");
        setCharIndex(0);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentTextIndex]);

  const words = displayedText.split(" ");

  return (
    <div className="md:flex items-center justify-between">
      <div className="relative z-10 p-8 max-w-3xl">
        <p className="text-4xl">
          <span className="text-main-secondary-color font-bold">Hi,</span> I'm
          Riad Osman
        </p>
        <p className="text-7xl md:text-9xl h-32 md:leading-40 leading-20 md:h-72 my-12">
          {words.map((word, index) => (
            <span
              key={index}
              className={
                index === 1 ? "text-main-secondary-color font-bold" : ""
              }
            >
              {word}{" "}
            </span>
          ))}
        </p>
        <p className="text-xl md:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          incidunt autem aliquam a, iure distinctio? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Veritatis incidunt autem aliquam a, iure
          distinctio?
        </p>
        <button className="md:hidden mt-10 z-10 px-10 py-2 border-4 border-main-color bg-main-color text-white rounded-md cursor-pointer transition-all duration-300 active:scale-85">
          My CV
        </button>
      </div>
      <div className="hidden md:block">
        <Image
          src={logo}
          alt="Riad Osman Profile Picture"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
