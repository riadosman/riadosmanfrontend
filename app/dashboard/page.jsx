"use client";

import React, { useState } from "react";
import isAuth from "../components/isAuth";

function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const validEmail = process.env.NEXT_PUBLIC_AUTH_EMAIL;
    const validPassword = process.env.NEXT_PUBLIC_AUTH_PASSWORD;

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("auth_token", "secure_token_here");
      alert("Logged in successfully!");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--color-secondary-primary-color)" }}
    >
      <div
        className="p-8 rounded-2xl shadow-lg w-full max-w-md"
        style={{
          backgroundColor: "var(--color-secondary-secondary-color)",
          color: "var(--color-light-gray)",
        }}
      >
        <h1
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "var(--color-main-secondary-color)" }}
        >
          Hello 👋
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl focus:outline-none"
            style={{
              backgroundColor: "var(--color-secondary-primary-color)",
              border: "1px solid var(--color-light-gray)",
              color: "var(--color-light-gray)",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl focus:outline-none"
            style={{
              backgroundColor: "var(--color-secondary-primary-color)",
              border: "1px solid var(--color-light-gray)",
              color: "var(--color-light-gray)",
            }}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full p-3 rounded-xl font-semibold transition"
            style={{
              backgroundColor: "var(--color-main-color)",
              color: "var(--color-main-primary-color)",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
