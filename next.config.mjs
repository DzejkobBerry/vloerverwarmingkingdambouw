/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
        source: '/poczta',
        destination: 'https://zimbra1.mail.ovh.net',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
