// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss", 
    "@nuxt/image-edge", 
    "@nuxt/image", 
    "@vueuse/nuxt",
    "@nuxtjs/supabase"]
})