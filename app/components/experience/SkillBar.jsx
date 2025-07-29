"use client";
import React, { useState, useEffect } from "react";
import useCountUp from "./useCountUp";
export default function SkillBar({ skill, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, startProgress] = useCountUp(skill.level);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      startProgress();
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index, startProgress]);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          {skill.icon && <span className="text-lg">{skill.icon}</span>}
          <span className="font-semibold text-white group-hover:text-[#e8c899] transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <span className="text-sm text-gray-400 font-mono">{progress}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#8e1616] to-[#e8c899] h-3 rounded-full transition-all duration-1000 ease-out relative"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            boxShadow: isVisible ? "0 0 10px rgba(142, 22, 22, 0.5)" : "none",
          }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
