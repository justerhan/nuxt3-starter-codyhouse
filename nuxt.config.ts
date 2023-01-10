// import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({

  app: {
    head: {
      script: [
        { src: "/js/codyhouse/pe.js", async: true }, // Codyhouse framework progressive enhancement
        { src: "/js/codyhouse/util.js", body: true, async: true }, // Codyhouse framework util
      ],
    }
  },

  css: ['@/assets/scss/style.scss'],

  // Global page headers: https://go.nuxtjs.dev/config-head
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {},
        }
      }
    },
  }
})
