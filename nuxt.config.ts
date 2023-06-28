// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
   generate: {
    dir: 'public'
   },
  /*
  ** Customize the base url
  */
  appp: {
    baseURL: '/iisc-bengaluru/', //this is whatever the project is named
  }/** END BLOCK **/,
  target: 'static'
})
