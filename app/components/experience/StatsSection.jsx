"use client";
import { useEffect } from "react";
import useCountUp from "./useCountUp";
export default function StatsSection() {
  const stats = [
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Happy Clients", value: 30, suffix: "+" },
    { label: "Code Commits", value: 1000, suffix: "+" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const [count, startCount] = useCountUp(stat.value);

        useEffect(() => {
          const timer = setTimeout(() => startCount(), index * 200);
          return () => clearTimeout(timer);
        }, [startCount, index]);

        return (
          <div
            key={index}
            className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#e8c899] mb-2">
              {count}
              {stat.suffix}
            </div>
            <div className="text-gray-400 text-sm font-medium">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
