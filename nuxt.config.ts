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
  generate: {
    dir: 'public'
  },
  
  /*
  ** Customize the base url
  */
  router: {
    base: '/personal-nuxtjs/' //this is whatever the project is named
  }/** END BLOCK **/
})
