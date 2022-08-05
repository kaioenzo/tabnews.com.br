module.exports = {
  pageExtensions: ['public.js'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    nftTracing: true,
  },
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
  },
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/api/v1/rss',
      },
    ];
  },
};
