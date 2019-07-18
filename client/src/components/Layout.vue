<template>
    <div>
        <div id="layout">
            <div id="mobile-bar">
                <span style="display: flex; flex:auto;justify-content: center;">
                    <Button
                        number
                        icon="bars"
                        @click.native.stop="toggleNavbar"
                    />
                </span>
                <span style="display: flex; flex:auto;justify-content: center;">
                    <Logo />
                </span>
                <span style="display: flex; flex:auto"></span>
            </div>
            <div class="navbar" ref="navbar" :class="{ open: isNavbarOpen }">
                <Navbar />
            </div>
            <div class="page">
                <slot name="page" />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
import { mapGetters } from 'vuex'
import Logo from './Logo'
import Button from './Button'

export default {
    name: 'layout',
    components: {
        Navbar,
        Logo,
        Button,
    },
    data() {
        return {
            isNavbarOpen: false,
        }
    },
    created() {
        window.addEventListener('touchstart', this.close)
        window.addEventListener('click', this.close)
    },
    destroyed() {
        window.removeEventListener('touchstart', this.close)
        window.removeEventListener('click', this.close)
    },
    computed: {
        ...mapGetters(['isResponseGood', 'isLoading']),
    },
    methods: {
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen
        },
        close(e) {
            if (this.isNavbarOpen && !this.$refs.navbar.contains(e.target)) {
                this.isNavbarOpen = false
            }
        },
    },
}
</script>

<style scoped lang="scss">
#layout {
    display: block;
    padding: calc(44px + 0.5rem) 1rem 2rem;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        min-height: 100vh;
        max-width: 1440px;
        grid-template-columns: 0.2fr 1fr;
        grid-gap: 1.75rem;
        padding: 2rem;
    }
}

.navbar {
    padding: 1rem 1rem 1rem 2rem;
    background-color: var(--white);
    position: fixed;
    height: 100%;
    width: 70%;
    z-index: 9999999;
    top: 0;
    left: 0;
    display: block;
    transform: translate(-650px, 0);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);

    &.open {
        transform: translate(0, 0);
    }

    @media (min-width: 768px) {
        background-color: var(--accents-1);
        position: relative;
        width: 100%;
        padding: 0;
        grid-area: 1/1;
        display: block;
        transform: translate(0, 0);
        transition: all 0s;
        box-shadow: none;
    }
}

.page {
    @media (min-width: 768px) {
        grid-area: 1/2;
    }
}

#mobile-bar {
    background-color: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    z-index: 9999999;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px;
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
        display: none;
    }
}
</style>
