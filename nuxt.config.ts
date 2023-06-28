// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins:{
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  css:[
    '@/assets/style.css'
  ],
  /** ADD THIS BLOCK **/  /*
   ** Customize the generated output folder
   */
  /*
  ** Customize the base url
  */
  router: {
    base: '/iisc-bengaluru/' //this is whatever the project is named
  }/** END BLOCK **/,
  target: 'static'
})
