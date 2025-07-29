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
        شروط الخدمة
      </h1>
      <p style={{ marginBottom: 16 }}>
        يرجى قراءة هذه الشروط بعناية قبل استخدام موقع{" "}
        <strong>رياض عثمان</strong>.
      </p>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          1. القبول:
        </h2>
        <p>باستخدامك الموقع، فإنك توافق على الالتزام بهذه الشروط.</p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          2. الاستخدام المسموح:
        </h2>
        <p>
          أنت مسؤول عن استخدامك للموقع ولا يجوز استخدامه لأغراض غير قانونية أو
          مخالفة للأخلاق.
        </p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          3. الملكية الفكرية:
        </h2>
        <p>
          جميع المحتويات (النصوص، الصور، الشعارات) ملك لـرياض عثمان ولا يجوز
          نسخها أو إعادة نشرها بدون إذن.
        </p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          4. الإخلاء من المسؤولية:
        </h2>
        <p>
          الموقع يُقدم "كما هو" دون ضمانات، ولا نتحمل أي مسؤولية عن أي أضرار
          تنجم عن استخدام الموقع.
        </p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          5. إنهاء الخدمة:
        </h2>
        <p>نحتفظ بحقنا في تعليق أو إنهاء حسابك إذا انتهكت الشروط.</p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          6. القوانين الحاكمة:
        </h2>
        <p>تخضع هذه الشروط لقوانين تركيا.</p>
      </section>

      <p
        style={{
          marginTop: 32,
          fontSize: 12,
          color: "var(--color-light-gray)",
        }}
      >
        إذا لم توافق على هذه الشروط، يرجى عدم استخدام الموقع.
      </p>

      <p
        style={{
          marginTop: 12,
          fontSize: 12,
          color: "var(--color-light-gray)",
        }}
      >
        تاريخ آخر تحديث: 28/07/2025
      </p>
    </div>
  );
}
