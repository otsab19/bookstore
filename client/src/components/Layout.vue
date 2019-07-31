<template>
  <div>
    <div id="mobile-bar">
      <div class="mobile-button" @click.stop="toggleNavbar"/>
      <Logo style="margin: 0 auto"/>
    </div>
    <div class="navbar" ref="navbar" :class="{ open: isNavbarOpen }">
      <div class="navbar-scroll">
        <Navbar/>
      </div>
    </div>
    <div class="page">
      <div class="page-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import {mapGetters, mapActions} from 'vuex'
  import Logo from './Logo'

  export default {
    name: 'layout',
    components: {
      Navbar,
      Logo,
    },
    computed: {
      ...mapGetters(['isNavbarOpen']),
    },
    methods: {
      ...mapActions(['openNavbar', 'closeNavbar']),
      toggleNavbar() {
        if (this.isNavbarOpen) {
          this.closeNavbar()
        } else {
          this.openNavbar()
        }
      },
      close(e) {
        if (this.isNavbarOpen) {
          this.$nextTick(function () {
            let el = this.$refs.navbar
            let target = e.target
            if ((el !== target) && !el.contains(target)) {
              this.closeNavbar()
            }
          })
        }
      },
    },
    created() {
      document.addEventListener('click', this.close)
      document.addEventListener('touchstart', this.close)
    },
    destroyed() {
      document.removeEventListener('click', this.close)
      document.removeEventListener('touchstart', this.close)
    },
  }
</script>

<style scoped lang="scss">
  .navbar {
    transition: all .25s ease-in-out;
    position: fixed;
    z-index: 11;
    width: 220px;
    top: 0;
    bottom: 0;
    left: -231px;
    background-color: var(--accents-1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media(min-width: 768px) {
      box-shadow: inset -1px 0 0 var(--accents-2);
    }

    &.open {
      left: 0;
    }

    @media (min-width: 768px) {
      left: 0;
      z-index: 1;
      padding-top: 1rem;
    }
  }

  .navbar-scroll {
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  .page {
    @media (min-width: 768px) {
      padding-left: 220px;
    }
  }

  .page-content {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding: calc(40px + 0.5rem) 1rem 2rem;
    @media (min-width: 768px) {
      padding: 1rem 1.75rem;
    }
  }

  #mobile-bar {
    background-color: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    z-index: 10;
    box-shadow: #fff 0 -15px, rgba(0,0,0,0.1) 0 0 15px;
    display: flex;
    align-items: center;
    text-align: center;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .mobile-button {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 8px;
    left: 12px;
    background: url('../assets/img/menu.png') center center no-repeat;
    background-size: 24px;
  }
</style>
