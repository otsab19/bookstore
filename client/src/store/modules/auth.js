import firebase from "firebase";
import {router} from '../../router'

const state = {
    isCurrentUserRegistered: false,
};

const getters = {
    isCurrentUserRegistered: state => state.isCurrentUserRegistered,
};

const actions = {
    async register({commit}, user) {
        try {
            let credential = await firebase.auth.EmailAuthProvider.credential(user.email, user.password);
            await firebase.auth().currentUser.linkWithCredential(credential)
            commit('setCurrentUserRegistered', true)
            router.push('/')
        } catch (e) {
            console.log(e)
        }
    },
    async login({commit},user) {
        try {
            await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            commit('setCurrentUserRegistered', true)
            router.push('/')
        } catch (e) {
            console.log(e)
        }
    },
    async logout({commit}) {
        try {
            await firebase.auth().signOut()
            commit('setCurrentUserRegistered', false)
            router.push('/')
        } catch (e) {
            console.log(e)
        }
    }
};

const mutations = {
    setCurrentUserRegistered: (state, payload) => state.isCurrentUserRegistered = payload,
};

export default {
    state,
    getters,
    actions,
    mutations
};