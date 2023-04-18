// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  // plugins: ["~/plugins/axios"],

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.DEFAULT_API,
  //   },
  // },
  app: {
    head: {
      title: "Khanh Son - Cv",
    },
  },
});
