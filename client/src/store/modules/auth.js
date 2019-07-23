import firebase from "firebase";
import {router} from '../../router'

const state = {
    isCurrentUserRegistered: false,
    currentUserEmail: null
};

const getters = {
    isCurrentUserRegistered: state => state.isCurrentUserRegistered,
    currentUserEmail: state => state.currentUserEmail
};

const actions = {
    async register({commit}, user) {
        try {
            let credential = await firebase.auth.EmailAuthProvider.credential(user.email, user.password);
            await firebase.auth().currentUser.linkWithCredential(credential)
            let email = await firebase.auth().currentUser.email
            commit('setCurrentUserRegistered', true)
            commit('setCurrentUserEmail', email)
            router.push('/')
        } catch (e) {
            console.log(e)
        }
    },
    async login({commit},user) {
        try {
            await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            let email = await firebase.auth().currentUser.email
            commit('setCurrentUserRegistered', true)
            commit('setCurrentUserEmail', email)
            router.push('/')
        } catch (e) {
            console.log(e)
        }
    },
    async logout({commit}) {
        try {
            await firebase.auth().signOut()
            commit('setCurrentUserRegistered', false)
            commit('setCurrentUserEmail', null)
            router.push('/')
        } catch (e) {
            console.log(e)
        }
    }
};

const mutations = {
    setCurrentUserRegistered: (state, payload) => state.isCurrentUserRegistered = payload,
    setCurrentUserEmail: (state, payload) => state.currentUserEmail = payload
};

export default {
    state,
    getters,
    actions,
    mutations
};