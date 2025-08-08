import React from "react";

export default function PrivacyPolicy() {
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
        Privacy Policy
      </h1>
      <p style={{ marginBottom: 16 }}>
        At <strong>Riyad Othman’s website</strong>, we respect your privacy and
        are committed to protecting your personal data. This policy explains how
        we collect, use, and safeguard your information when you use our site.
      </p>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          1. Data We Collect:
        </h2>
        <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
          <li>
            Information you provide directly (such as name, email, phone
            number).
          </li>
          <li>Browsing data (IP address, browser type, pages you visit).</li>
        </ul>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          2. How We Use Data:
        </h2>
        <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
          <li>To improve our services and user experience.</li>
          <li>To send updates and promotional offers (with your consent).</li>
          <li>To analyze usage and enhance the website.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          3. Data Sharing:
        </h2>
        <p>
          We do not share your data with third parties unless necessary for the
          service or with your consent.
        </p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          4. Data Protection:
        </h2>
        <p>
          We use security technologies to protect your information from
          unauthorized access.
        </p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          5. Your Rights:
        </h2>
        <p>
          You can request to modify or delete your personal data at any time by
          contacting us at{" "}
          <a
            href="mailto:riyados973@gmail.com"
            style={{
              color: "var(--color-main-secondary-color)",
              textDecoration: "underline",
            }}
          >
            [Contact Email]
          </a>
          .
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          6. Cookies:
        </h2>
        <p>
          We use cookies to improve your experience. You can control them
          through your browser settings.
        </p>
      </section>

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
