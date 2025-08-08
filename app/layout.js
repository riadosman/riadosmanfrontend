import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
});
export const metadata = {
  title: "Riad Othman | Software Engineer & Web Developer",
  description:
    "Official profile of Riad Othman – Software Engineer, Web Developer, and lifelong learner based in Istanbul.",
  keywords: [
    "Riad Othman",
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
  authors: [{ name: "Riad Othman", url: "http://riadosman.180d.site/" }],
  creator: "Riad Othman",
  openGraph: {
    title: "Riad Othman | Software Engineer & Web Developer",
    description:
      "Official profile of Riad Othman – Software Engineer, Web Developer, and lifelong learner based in Istanbul.",
    url: "http://riadosman.180d.site/",
    siteName: "Riad Othman Portfolio",
    images: [
      {
        url: "http://riadosman.180d.site/profile.png",
        width: 1200,
        height: 630,
        alt: "Riad Othman Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riad Othman | Software Engineer & Web Developer",
    description:
      "Official profile of Riad Othman – Software Engineer, Web Developer, and lifelong learner based in Istanbul.",
    site: "@Rmagic19649744",
    creator: "@Rmagic19649744",
    images: ["http://riadosman.180d.site/profile.jpg"],
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
