/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/terminal-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/terminal-portfolio' : '',
}

module.exports = nextConfig

// update repo name