/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true
    }
  },
  compiler: {
    styledComponents: { ssr: true, displayName: true }
  }
}

module.exports = nextConfig
