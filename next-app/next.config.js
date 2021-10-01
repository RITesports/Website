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
  // https://github.com/vercel/next.js/pull/1931
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      poll: true,
    }

    return config
  },
}
