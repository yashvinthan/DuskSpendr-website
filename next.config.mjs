/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['duskspendr.in', 'www.duskspendr.in'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'duskspendr.in',
      },
      {
        protocol: 'https',
        hostname: 'www.duskspendr.in',
      },
    ],
  },
};

export default nextConfig;
