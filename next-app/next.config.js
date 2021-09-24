/** @type {import('next').NextConfig} */
module.exports = {
  compress: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['hooli-drive.sfo2.digitaloceanspaces.com']
  },
  reactStrictMode: true,
}
