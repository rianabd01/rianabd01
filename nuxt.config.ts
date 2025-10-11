// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: "Rian's Portfolio",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: "Portfolio of a Full Stack Developer showcasing skills, experience, projects, and blog." },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:title', content: "Rian's Portfolio" },
        { property: 'og:description', content: "Portfolio of a Full Stack Developer showcasing skills, experience, projects, and blog." },
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: "Rian's Portfolio" },
        { name: 'twitter:description', content: "Portfolio of a Full Stack Developer showcasing skills, experience, projects, and blog." },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: [
    './app/assets/css/main.css'
  ],
  routeRules: {
    '/': { prerender: true },
    '/blogs': { prerender: true },
    '/projects': { prerender: true },
    '/blog/**': { prerender: true },
    '/api/**': { cors: true }
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  }
})