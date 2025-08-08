import React from "react";

export default function CookiePolicy() {
  return (
    <div
      style={{
        color: "var(--color-main-primary-color)",
        maxWidth: 720,
        margin: "2rem auto",
        padding: "2rem",
        borderRadius: 8,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          color: "var(--color-main-color)",
          fontSize: "2.25rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Cookie Policy
      </h1>

      <p style={{ marginBottom: 16 }}>
        We use cookies to enhance the user experience on{" "}
        <strong>Riyad Othman’s</strong> website. Cookies are small files stored
        on your device that help us to:
      </p>

      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        <li>Remember your preferences and settings.</li>
        <li>Analyze site usage to improve it.</li>
        <li>Deliver personalized advertisements.</li>
      </ul>

      <p style={{ marginBottom: 16 }}>
        You can control or delete cookies through your browser settings.
      </p>

      <p>
        For more information on how we use your data, please review our{" "}
        <a
          href="/privacy"
          style={{
            color: "var(--color-main-secondary-color)",
            textDecoration: "underline",
          }}
        >
          Privacy Policy
        </a>
        .
      </p>

      <p
        style={{
          marginTop: 32,
          fontSize: 12,
          color: "var(--color-light-gray)",
        }}
      >
        Last updated: 28/07/2025
      </p>
    </div>
  );
}
