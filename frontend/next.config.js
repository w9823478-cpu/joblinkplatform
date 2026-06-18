/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    domains: [
      'i.pravatar.cc',
      'picsum.photos',
      'logo.clearbit.com',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
