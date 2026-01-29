// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // <- Disable built-in image optimization for static export
    },
  }
  
  module.exports = nextConfig
  