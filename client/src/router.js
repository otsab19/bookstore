import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/Layout'
import store from './store'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'landing',
          component: () => import('./views/Landing.vue'),
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue'),
          props: route => ({ query: route.query.q }),
        },
        {
          path: 'favorites',
          name: 'favorites',
          component: () => import('./views/Favorites.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'cart*',
          name: 'cart',
          component: () => import('./views/Cart.vue'),
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    { path: '*', redirect: '/' },
  ],
})

router.beforeEach((to, from, next) => {
  const authenticated = store.getters.isCurrentUserRegistered
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !authenticated) next('/login')
  else if (authenticated && (to.path === '/register' || to.path === '/login')) next('/')
  else next()
})
