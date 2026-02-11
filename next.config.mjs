/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images-website-bloompixel.s3.eu-north-1.amazonaws.com',
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
