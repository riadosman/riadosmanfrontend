import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
});
export const metadata = {
  title: "Riad Osman | Software Engineer & Web Developer",
  description:
    "Official profile of Riad Osman – Software Engineer, Web Developer, and lifelong learner based in Istanbul.",
  keywords: [
    "Riad Osman",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Istanbul Developer",
    "Tech Portfolio",
    "Developer Profile",
    "JavaScript Developer",
    "Frontend Backend Developer",
    "Tech Blog",
  ],
  authors: [{ name: "Riad Osman", url: "https://your-website.com" }],
  creator: "Riad Osman",
  openGraph: {
    title: "Riad Osman | Software Engineer & Web Developer",
    description:
      "Official profile of Riad Osman – Software Engineer, Web Developer, and lifelong learner based in Istanbul.",
    url: "https://your-website.com",
    siteName: "Riad Osman Portfolio",
    images: [
      {
        url: "https://your-website.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Riad Osman Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riad Osman | Software Engineer & Web Developer",
    description:
      "Official profile of Riad Osman – Software Engineer, Web Developer, and lifelong learner based in Istanbul.",
    site: "@Rmagic19649744",
    creator: "@Rmagic19649744",
    images: ["https://your-website.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
