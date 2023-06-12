import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className='text-lg font-bold'>OpenQuickJS Docs</span>,
  project: {
    link: 'https://github.com/OpenQuickJS/docs'
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='OpenQuickJS Docs' />
      <meta
        property='og:description'
        content='A community-driven QuickJS fork. Issues and Pull Requests are welcome.'
      />
      <link rel='icon' type='image/png' href='/favicon.svg' />
    </>
  ),
  footer: {}
}

export default config
