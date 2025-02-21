// nuxt.config.ts
export default defineNuxtConfig({
  image: {
    providers: {
      vercel: {}
    },
    // Optionally define screen sizes for responsive images:
    screens: {
      // Example: define custom widths for your images
      logo: 90,
      logo2x: 180,
      banner: 1600,
      banner2x: 3200
    }
  },
  app: {
    baseURL: '/portfolio/',
    head: {
      title: "Giovana Miranda",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
            content: "Dra. Giovana Miranda",
        },
      ],
    },
  },
  css: [
    '@/assets/main.css',
    'swiper/css', // CSS base do Swiper
    'swiper/css/navigation',
    'swiper/css/pagination'
  ],
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge"
  ],

  build: {
    transpile: [],
  },

  compatibilityDate: "2024-12-16",
});