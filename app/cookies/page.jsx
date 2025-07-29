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
        سياسة ملفات تعريف الارتباط (الكوكيز)
      </h1>

      <p style={{ marginBottom: 16 }}>
        نستخدم الكوكيز لتحسين تجربة المستخدم على موقع{" "}
        <strong>رياض عثمان</strong>. الكوكيز هي ملفات صغيرة تُخزن على جهازك
        وتساعدنا في:
      </p>

      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        <li>تذكر تفضيلاتك وإعداداتك.</li>
        <li>تحليل استخدام الموقع لتحسينه.</li>
        <li>تقديم إعلانات مخصصة.</li>
      </ul>

      <p style={{ marginBottom: 16 }}>
        يمكنك التحكم في الكوكيز أو حذفها من خلال إعدادات المتصفح الخاص بك.
      </p>

      <p>
        لمزيد من المعلومات عن كيفية استخدام بياناتك، يرجى مراجعة{" "}
        <a
          href="/privacy"
          style={{
            color: "var(--color-main-secondary-color)",
            textDecoration: "underline",
          }}
        >
          سياسة الخصوصية
        </a>{" "}
        الخاصة بنا.
      </p>

      <p
        style={{
          marginTop: 32,
          fontSize: 12,
          color: "var(--color-light-gray)",
        }}
      >
        تاريخ آخر تحديث: 28/07/2025
      </p>
    </div>
  );
}
