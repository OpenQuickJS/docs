import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className='text-lg font-bold'>OpenQuickJS Docs</span>,
  project: {
    link: 'https://github.com/OpenQuickJS/quickjs'
  },
  docsRepositoryBase: 'https://github.com/OpenQuickJS/docs',
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='OpenQuickJS Docs' />
      <meta
        property='og:description'
        content='A community-driven QuickJS fork. Issues and Pull Requests are welcome.'
      />
      <title>OpenQuickJS Docs</title>
      <link rel='icon' type='image/png' href='/favicon.svg' />
    </>
  ),
  nextThemes: {
    defaultTheme: 'light'
  },
  footer: {
    component: null
  },
  editLink: {
    text: 'https://github.com/OpenQuickJS/docs',
    component({ children: _children, className, filePath }) {
      return (
        <a
          className='nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50'
          href={`https://github.com/OpenQuickJS/docs/edit/main/${filePath}`}
          target='_blank'
        >
          Edit this page
        </a>
      )
    }
  }
}

export default config
