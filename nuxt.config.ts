import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({

  css: ['~/assets/css/codyhouse/main/style.scss'],

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
