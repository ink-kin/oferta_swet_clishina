import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Оферта",
  description: "Оферта на заключение договора оказания архитектурных и проектных услуг",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Оферта', link: '/oferta' },
      { text: 'Приложение', link: '/part-example' }
    ],

    sidebar: [
      {
        text: 'Документы',
        items: [
          { text: 'Оферта', link: '/oferta' },
          { text: 'Приложение', link: '/part-example' },
          { text: 'Письмо', link: '/letter' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
