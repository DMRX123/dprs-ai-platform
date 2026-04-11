/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dprs.in'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
}

module.exports = nextConfig