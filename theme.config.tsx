import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>Retalk</strong>,
  project: {
    link: 'https://github.com/retalkgo/retalk',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Retalk'
    }
  },
  docsRepositoryBase: 'https://github.com/retalkgo/retalk-site',
  footer: {
    text: 'Copyright by @retalkgo'
  }
}

export default config
