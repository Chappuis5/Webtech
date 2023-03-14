/** @type {import('next').NextConfig} */

const removeImports = require('next-remove-imports')();
module.exports = removeImports({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        pathname: '/avatar/**'
      }
    ]
  }
})