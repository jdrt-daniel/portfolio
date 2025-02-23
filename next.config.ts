import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // i18n: {
  //   locales: ["en", "es"],
  //   defaultLocale: "en",
  // },
};

export default nextConfig;
