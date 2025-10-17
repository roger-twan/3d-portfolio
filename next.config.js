/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/3d-portfolio',
  assetPrefix: '/3d-portfolio/',
  output: 'export',
  reactStrictMode: false,
  eslint: {
    dirs: ['components', 'pages', 'utils'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}

module.exports = nextConfig
