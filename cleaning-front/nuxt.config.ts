// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', 'nuxt-simple-sitemap', '@nuxtjs/robots'],
  site: {
    url: 'https://cleaning-plum.vercel.app/',
  },
  sitemap: {
    xsl: false
  },
  css: ['~/assets/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'yandex-verification', content: 'c56d4eaf719b065c' }
      ],
    }
  },
})
