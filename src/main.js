import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

// Bootstrap
import '@/assets/scss/_main.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
