/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"], // Added Turkish since you're in Istanbul
    localeDetection: true, // Automatically detect user's locale
  },
  
  output: 'standalone',
};

export default nextConfig;
