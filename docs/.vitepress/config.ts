import { defineConfig } from 'vitepress'
import { devDependencies } from '../../package.json'

export default defineConfig({
  lang: 'ru-RU',
  title: 'Оферта',
  description: 'Оферта на заключение договора оказания архитектурных и проектных услуг',
  sitemap: {
    hostname: 'https://xn--80aj0ajkj.xn--80apagfo9e.xn--p1ai/'
  },

  lastUpdated: true,
  appearance: true,

  // https://vitepress.dev/reference/site-config#base
  // base: '/subpath/',
  // cleanUrls: true,

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/ink-kin/oferta_swet_clishina/edit/master/docs/:path',
      text: 'Редактировать эту страницу',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ink-kin/oferta_swet_clishina.git' },
      { icon: 'github', link: 'https://github.com/ink-kin/oferta_swet_clishina_html.git' }
    ],

    footer: {
      message: 'Оферта. MIT License.',
      copyright: 'Copyright © 2025',
    },
  },
})

function nav() {
  return [
      { text: 'Оферта', link: '/oferta' },
      { text: 'Приложение', link: '/part-example' }]
}

function sidebarGuide() {
  return [
    {text: 'Документы',
        items: [
          { text: 'Оферта', link: '/oferta' },
          { text: 'Приложение', link: '/part-example' },
          { text: 'Письмо', link: '/letter' }
        ]
      }
  ]
}
