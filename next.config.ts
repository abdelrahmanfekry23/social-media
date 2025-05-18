/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 // swcMinify: true, // استخدم SWC بدل Babel للتصغير
    eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
