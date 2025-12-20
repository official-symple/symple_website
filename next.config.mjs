/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export for S3 hosting
  output: "export",
  // Use trailing slashes to improve S3 website compatibility
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
