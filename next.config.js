const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  title: 'Retalk',
  i18n: {
    locales: ['zh'],
    defaultLocale: 'zh'
  }
})

module.exports = withNextra()
