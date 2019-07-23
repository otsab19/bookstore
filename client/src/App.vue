<template>
    <router-view ontouchstart=""/>
</template>

<script>
    import firebase from "firebase"

    export default {
        name: 'app',
        created() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    if (user.isAnonymous === false) {
                        this.$store.commit('setCurrentUserRegistered', true)
                    }
                } else {
                    firebase.auth().signInAnonymously()
                    this.$store.commit('setCurrentUserRegistered', false)
                }
            })
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        background: var(--accents-1);
        -webkit-tap-highlight-color: transparent;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 16px;
        color: var(--black);
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        outline: 0;
    }

    :root {
        --white: #ffffff;
        --accents-1: #fafafa;
        --accents-2: #e5e5e5;
        --gray: #707070;
        --black: #2e2e2e;
    }

    ::selection {
        background-color: #79ffe1;
        color: #000;
    }
</style>
