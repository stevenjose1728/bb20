/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL_BASE: process.env.API_URL_BASE,
  },
}

module.exports = nextConfig
