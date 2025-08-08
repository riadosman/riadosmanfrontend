"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();
    if (data.error) {
      setError(data.error);
      return;
    }

    localStorage.setItem("token", data.token);
    if (data.token) {
      alert("Login successful!");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard/projects");
    }
  }, []);
  return (
    <div className="my-20 flex items-center justify-center">
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
            className="cursor-pointer w-full p-3 rounded-xl font-semibold transition"
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
