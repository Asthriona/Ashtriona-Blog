
export default {
  server: {
    port: 1101, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Asthriona - Blog" || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Hi! I'm Asthriona, and I dont have name. people call me weeb. I'm Friendly, Everyone like me... I dont know why. I love anime (That's maybe why ppl call me weeb.) Playing Video Games, Mainly WoW. I'm part of The Wall, The best WoW EU Guild." || '' },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary" },
      { hid: 'twitter:site', name: 'twitter:site', content: "Asthriona" },
      { hid: 'twitter:site', name: 'twitter:creator', content: "@Asthriona" },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Asthriona - Blog"
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: "https://blog.asthriona.com/"
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Hi! I'm Asthriona, and I dont have name. people call me weeb. I'm Friendly, Everyone like me... I dont know why. I love anime (That's maybe why ppl call me weeb.) Playing Video Games, Mainly WoW. I'm part of The Wall, The best WoW EU Guild."
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: "https://cdn.asthriona.com/chrome_BqyTEO9jr3.png"
      },
      { hid: 'og:site_name', name: 'og:site_name', content: "Asthriona - Blog" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['storyblok-nuxt', 
    { accessToken: 'lYar768BRdj2pxA3zZEpJAtt', cacheProvider: 'memory' }
    ],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
