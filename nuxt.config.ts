// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/',
    head: {
      title: "Leo Miranda",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Fullstack Developer",
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
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],

  build: {
    transpile: [],
  },

  compatibilityDate: "2024-12-16",
});