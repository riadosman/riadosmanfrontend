"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
function SubsNews() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      console.log("User IP:", data.ip);

      const getinfo = await fetch(`https://ipinfo.io/${data.ip}/json`);
      const info = await getinfo.json();
      console.log("User info:", info);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/subscribers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, ...info }),
        }
      );

      if (response.ok) {
        setMessage(
          "Successfully subscribed! We'll keep you up to date with the latest news and updates."
        );
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative w-[90%]  mx-auto h-[500px] md:h-[600px] overflow-hidden rounded-3xl">
      {/* Glowing background effects */}
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] blur-[150px] md:blur-[200px] bg-main-color -z-20"></div>
      <div className="absolute bottom-0 right-2 w-[120px] md:w-[200px] h-[120px] md:h-[200px] blur-[80px] md:blur-[100px] bg-main-secondary-color -z-20"></div>

      {/* Background image */}
      <Image
        src="/newsletter.png"
        alt="subscribe"
        fill
        className="object-cover opacity-20 -z-10"
        priority
      />

      {/* Text content over the image */}
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-6 md:gap-10 px-4 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center z-10">
          Subscribe to My Newsletter
        </h1>
        <p className="max-w-full sm:max-w-xl md:max-w-2xl text-center text-white/90 px-2">
          Reach out to me and get updates about new projects and blog posts or
          new technologies by subscribing to my newsletter. You can unsubscribe
          at any time.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="outline-none border-2 border-main-color text-lg md:text-xl w-full max-w-md p-3 md:p-4 rounded-3xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-main-color text-white py-3 md:py-4 px-6 md:px-8 rounded-3xl cursor-pointer w-full max-w-md disabled:opacity-50"
        >
          Subscribe
        </button>
      </div>
      {message && (
        <div
          className={`mt-4 p-3 rounded-lg max-w-md mx-auto text-center ${
            message.includes("Successfully")
              ? "bg-green-500/20 text-green-300 border border-green-500"
              : "bg-red-500/20 text-red-300 border border-red-500"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default SubsNews;
