/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vuejs.org'
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      }
    ]
  }
}

module.exports = nextConfig
