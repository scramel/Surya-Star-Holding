import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import VueI18n from 'vue-i18n'
import VueCarousel from 'vue-carousel';
import messages from './i18n'
import { BootstrapVue } from 'bootstrap-vue'

// Bootstrap
import '@/assets/scss/_main.scss'
Vue.use(BootstrapVue)

// Carousel
Vue.use(VueCarousel)

// Internationalization
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
  // If you need to specify other options, you can set other options
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
