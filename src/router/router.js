import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/smart-trading',
    name: 'smart-trading',
    component: () => import(/* webpackChunkName: "smart-trading" */ '../views/SmartTradingView.vue')
  }, {
    path: '/operational-diversification',
    name: 'operational-diversification',
    component: () => import(/* webpackChunkName: "operational-diversification" */ '../views/OperationalDiversificationView.vue')
  }, {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  setTimeout(() => {
    if (appLoading) {
      appLoading.style.display = "none";
    }
  }, 1000);
})

export default router
