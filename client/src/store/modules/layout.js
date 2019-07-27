import firebase from 'firebase'
import { router } from '../../router'

const state = {
  isNavbarOpen: false
}

const getters = {
  isNavbarOpen: (state) => state.isNavbarOpen
}

const actions = {
  openNavbar({commit}) {
    commit('setNavbarState', true)
  },
  closeNavbar({commit}) {
    commit('setNavbarState', false)
  }
}

const mutations = {
  setNavbarState: (state, payload) => state.isNavbarOpen = payload
}

export default {
  state,
  getters,
  actions,
  mutations,
}
