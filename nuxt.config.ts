import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  experimental: { reactivityTransform: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/svg"],

  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
  },
});
