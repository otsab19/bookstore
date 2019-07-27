import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faHeart,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  faChild,
  faFutbol,
  faEllipsisH,
  faCartPlus,
  faHandHoldingHeart,
  faTrash,
  faCoins,
  faPlus,
  faMinus,
  faLock,
  faUser,
  faUserPlus,
  faBars,
  faEnvelope,
  faKey,
    faSync
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { rtdbPlugin } from 'vuefire'
import firebase from 'firebase'
import store from './store'

//font-awesome-icon
library.add(
  faGithub,
  faSearch,
  faHeart,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  faChild,
  faFutbol,
  faEllipsisH,
  faCartPlus,
  faHandHoldingHeart,
  faTrash,
  faCoins,
  faPlus,
  faMinus,
  faLock,
  faUser,
  faUserPlus,
  faBars,
  faEnvelope,
  faKey,
    faSync
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
}

firebase.initializeApp(firebaseConfig)
Vue.use(rtdbPlugin)

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    if (user.isAnonymous === false) {
      store.commit('setCurrentUserRegistered', true)
    }
  } else {
    firebase.auth().signInAnonymously()
    store.commit('setCurrentUserRegistered', false)
  }
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
})
