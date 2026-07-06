import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/impressum-and-datenschutz',
        destination: '/impressum-datenschutz',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
