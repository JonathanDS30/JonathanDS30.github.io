// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],

  // Configuration du mode couleur (dark mode)
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  // Configuration de l'app
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Jonathan DELLA SANTINA - Portfolio',
      meta: [
        { name: 'description', content: 'IT Enthusiast | MSc Student | DevSecOps Learner | Étudiant à l\'EPSI et Technicien Informatique chez Ordisys.' },
        { property: 'og:title', content: 'Jonathan DELLA SANTINA - Portfolio DevSecOps' },
        { property: 'og:description', content: 'DevSecOps Learner | MSc EPSI | Technicien Informatique chez Ordisys.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://JonathanDS30.github.io/portfolio/' },
        { property: 'og:image', content: 'https://JonathanDS30.github.io/portfolio/assets/img/cover.png' },
      ],
      link: [
        { rel: 'icon', href: '/img/jds_icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Font chargée en non-render-blocking via preload + onload swap
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap', media: 'print', onload: 'this.media=\'all\'' },
      ],
    },
  },

  // CSS global
  css: ['~/assets/css/main.css'],

  // SSG : pré-rendu HTML au build pour un FCP rapide
  ssr: true,

  nitro: {
    preset: 'github-pages',
    compressPublicAssets: true,
  },

  // Configuration Tailwind
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },

  // Optimisations Vite
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
            'icons': ['lucide-vue-next'],
          },
        },
      },
    },
  },

  // Configuration @vueuse/motion
  motion: {
    directives: {
      'slide-left': {
        initial: { opacity: 0, x: -80 },
        visibleOnce: { opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut' } },
      },
      'slide-right': {
        initial: { opacity: 0, x: 80 },
        visibleOnce: { opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut' } },
      },
      'fade-up': {
        initial: { opacity: 0, y: 40 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 500, ease: 'easeOut' } },
      },
      'scale-in': {
        initial: { opacity: 0, scale: 0.9 },
        visibleOnce: { opacity: 1, scale: 1, transition: { duration: 400, ease: 'easeOut' } },
      },
    },
  },
})
