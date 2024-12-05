/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['firebasestorage.googleapis.com'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: require.resolve('crypto-browserify'),
    };
    return config;
  },
}

module.exports = nextConfig 