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
        سياسة الخصوصية
      </h1>
      <p style={{ marginBottom: 16 }}>
        نحن في <strong> موقع رياض عثمان</strong> نحترم خصوصيتك ونلتزم بحماية
        بياناتك الشخصية. تشرح هذه السياسة كيف نقوم بجمع واستخدام وحماية معلوماتك
        عند استخدام موقعنا.
      </p>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          1. البيانات التي نجمعها:
        </h2>
        <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
          <li>
            المعلومات التي تقدمها لنا مباشرة (كالاسم، الإيميل، رقم الهاتف).
          </li>
          <li>بيانات التصفح (IP، نوع المتصفح، الصفحات التي تزورها).</li>
        </ul>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          2. كيف نستخدم البيانات:
        </h2>
        <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
          <li>لتحسين خدماتنا وتجربة المستخدم.</li>
          <li>لإرسال تحديثات وعروض ترويجية (بعد موافقتك).</li>
          <li>لتحليل الاستخدام وتحسين الموقع.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          3. مشاركة البيانات:
        </h2>
        <p>
          لا نشارك بياناتك مع أطراف ثالثة إلا إذا كان ذلك ضرورياً للخدمة أو
          بموافقتك.
        </p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          4. حماية البيانات:
        </h2>
        <p>نستخدم تقنيات أمنية لحماية معلوماتك من الوصول غير المصرح به.</p>
      </section>

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          5. حقوقك:
        </h2>
        <p>
          يمكنك طلب تعديل أو حذف بياناتك الشخصية في أي وقت عبر التواصل معنا على{" "}
          <a
            href="riyados973@gmail.com"
            style={{
              color: "var(--color-main-secondary-color)",
              textDecoration: "underline",
            }}
          >
            [بريد التواصل]
          </a>
          .
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
          6. ملفات تعريف الارتباط:
        </h2>
        <p>
          نستخدم الكوكيز لتحسين تجربتك، يمكنك التحكم بها من خلال إعدادات
          المتصفح.
        </p>
      </section>

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
