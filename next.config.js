/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // sirve pero es más genérico
    // domains: ["fakestoreapi.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        // opcionales pero con mayor seguridad
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
