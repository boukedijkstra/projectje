// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@vite-pwa/nuxt'
      ],
      pwa: {
        /* PWA options */
      },
      app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          title: 'it Waar',
          meta: [
              { name: 'description', content: 'Moarn mar wer even yn it waar sjen' }
            ],
            link: [
                { rel: 'icon', href: '/assets/waar.ico' },
                { rel: 'apple-touch-icon', href: '/assets/waar64.png' },
            ]
        },
      }

})
