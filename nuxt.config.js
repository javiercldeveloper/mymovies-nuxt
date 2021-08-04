export default {
  target: 'static',
  head: {
    title: 'My Movies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A web to choose the best available movies' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    VUE_APP_IMG_BASE_URL: 'https://image.tmdb.org/t/p/w500',
    VUE_APP_FETCH_API_KEY: '7e0c8765bef4506101da512abcbd8830',
    VUE_APP_API_URL: 'https://api.themoviedb.org/3/'
  },
  loading: false,
  plugins: [{
    src: '~/plugins/vue-infinite-loading.js',
    ssr: false
  }],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios']
}
