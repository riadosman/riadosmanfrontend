/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    localeDetection: true,
  },
  react: {
    useSuspense: false,
  },
  // Optional: Configure loading path for translations
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  // Optional: Configure translation loading
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
