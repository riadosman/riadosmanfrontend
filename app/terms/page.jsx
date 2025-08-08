import React from "react";

export default function TermsOfService() {
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
        Terms of Service
      </h1>
      <p style={{ marginBottom: 16 }}>
        Please read these terms carefully before using{" "}
        <strong>Riyad Othman’s</strong> website.
      </p>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          1. Acceptance:
        </h2>
        <p>By using this site, you agree to comply with these terms.</p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          2. Permitted Use:
        </h2>
        <p>
          You are responsible for your use of the site and must not use it for
          illegal or unethical purposes.
        </p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          3. Intellectual Property:
        </h2>
        <p>
          All content (texts, images, logos) belongs to Riyad Othman and may not
          be copied or republished without permission.
        </p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          4. Disclaimer:
        </h2>
        <p>
          The site is provided "as is" without warranties, and we are not liable
          for any damages resulting from its use.
        </p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          5. Termination:
        </h2>
        <p>
          We reserve the right to suspend or terminate your account if you
          violate these terms.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          6. Governing Law:
        </h2>
        <p>These terms are governed by the laws of Turkey.</p>
      </section>

      <p
        style={{
          marginTop: 32,
          fontSize: 12,
          color: "var(--color-light-gray)",
        }}
      >
        If you do not agree with these terms, please do not use the site.
      </p>

      <p
        style={{
          marginTop: 12,
          fontSize: 12,
          color: "var(--color-light-gray)",
        }}
      >
        Last updated: 28/07/2025
      </p>
    </div>
  );
}
