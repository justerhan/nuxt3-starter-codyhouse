import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({

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
