<template>
  <div id="sidebar">
    <Logo id="logo" />
    <nav class="nav-sidebar">
      <ul class="sidebar-top-level-items">
        <router-link tag="li" :to="route.to" v-for="route of this.menuLinks" :key="route.text">
          <a>
            <font-awesome-icon :icon="route.icon" class="icon" />
            <span>{{ route.text }}</span>
          </a>
          <ul v-if="route.sub" class="sidebar-sub-level-items">
            <router-link tag="li" :to="sub.to" v-for="sub of route.sub" :key="sub.text">
              <a>
                <font-awesome-icon :icon="sub.icon" class="icon" />
                <span>{{ sub.text }}</span>
              </a>
            </router-link>
          </ul>
        </router-link>

        <!-- static/conditional menu elements -->
        <li v-if="isCurrentUserRegistered === true">
          <a @click="logout">
            <font-awesome-icon icon="sign-out-alt" class="icon" />
            <span>log out</span>
          </a>
        </li>
        <li class="sidebar-nav-subhead">project</li>
        <li>
          <a
            href="https://github.com/vassbence/bookstore"
            target="_blank"
            rel="noopener noreferrer"
            class="sidebar-nav-element"
          >
            <font-awesome-icon :icon="['fab', 'github']" class="icon" />
            <span>on github</span>
          </a>
        </li>
        <!-- end -->
      </ul>
    </nav>
  </div>
</template>

<script>
import Logo from './Logo'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    Logo,
  },
  computed: {
    ...mapGetters(['isCurrentUserRegistered']),
    menuLinks() {
      const array = [
        {
          to: '/search',
          icon: 'search',
          text: 'search',
          sub: [
            {
              to: '/search?q=subject:juvenile',
              icon: 'child',
              text: 'for kids',
            },
            {
              to: '/search?q=subject:sport',
              icon: 'futbol',
              text: 'sports',
            },
            {
              to: '/search?q=inpublisher:manning+publications',
              icon: 'ellipsis-h',
              text: 'others',
            },
          ],
        },
        { to: '/favorites', icon: 'heart', text: 'favorites' },
        {
          to: '/cart',
          icon: 'shopping-cart',
          text: 'cart',
          sub: [{ to: '/cart/checkout', icon: 'coins', text: 'checkout' }],
        },
      ]

      if (this.isCurrentUserRegistered === true) {
        array.push({ to: '/account', icon: 'user', text: 'account' })
      } else {
        array.push({ to: '/login', icon: 'sign-in-alt', text: 'log in' })
      }

      return array
    },
  },
  methods: mapActions(['logout']),
}
</script>

<style scoped lang="scss">
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

#sidebar {
  display: block;
  user-select: none;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-sidebar li a {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: var(--gray);
}

.nav-sidebar li.router-link-active {
  box-shadow: inset 4px 0 0 var(--black);
}

.sidebar-top-level-items {
  margin-top: 1.75rem;
}

.sidebar-top-level-items > li.router-link-active {
  background: rgba(0, 0, 0, 0.04);
}

.sidebar-top-level-items > li.router-link-active > a {
  color: var(--black);
}

.sidebar-top-level-items > li.router-link-active .sidebar-sub-level-items {
  display: block;
}

.sidebar-sub-level-items {
  display: none;
  padding-bottom: 8px;
}

.sidebar-sub-level-items > li a {
  padding-left: 40px;
}

.sidebar-sub-level-items > li.router-link-exact-active a {
  color: var(--black);
  background: rgba(0, 0, 0, 0.04);
}

.sidebar-nav-subhead {
  display: flex;
  align-items: center;
  margin-top: 1.75rem;
  padding: 0 15px;
  color: var(--black);
}

.icon {
  margin-right: 8px;
}

#logo {
  display: none;
  @media (min-width: 768px) {
    display: block;
    padding: 0 15px;
  }
}
</style>
