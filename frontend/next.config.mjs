/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  exportTrailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
