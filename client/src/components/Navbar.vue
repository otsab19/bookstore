<template>
    <div id="sidebar">
        <div>
            <Logo id="logo"/>
            <nav id="sidebar-nav">
                <ul>
                    <li class="sidebar-nav-subhead">menu</li>
                    <li v-for="route of this.menuLinks" :key="route.text">
                        <router-link :to="route.to" class="sidebar-nav-element">
                            <font-awesome-icon
                                    :icon="route.icon"
                                    class="icon"
                            />
                            <span>{{ route.text }}</span>
                        </router-link>
                    </li>
                    <li v-if="currentUserEmail !== null">
                        <span class="sidebar-nav-element">
                            <font-awesome-icon icon="user" class="icon"/>
                            {{currentUserEmail}}
                        </span>
                    </li>
                    <li v-if="isCurrentUserRegistered === false">
                        <span @click="$router.push('/login')" class="sidebar-nav-element">
                            <font-awesome-icon
                                    icon="sign-in-alt"
                                    class="icon"
                            />
                            <span>log in</span>
                        </span>
                    </li>
                    <li v-else>
                        <span @click="logout" class="sidebar-nav-element">
                            <font-awesome-icon
                                    icon="sign-out-alt"
                                    class="icon"
                            />
                            <span>log out</span>
                        </span>
                    </li>
                    <li class="sidebar-nav-subhead">categories</li>
                    <li v-for="route of this.categoriesLinks" :key="route.text">
                        <router-link :to="route.to" class="sidebar-nav-element">
                            <font-awesome-icon
                                    :icon="route.icon"
                                    class="icon"
                            />
                            <span>{{ route.text }}</span>
                        </router-link>
                    </li>

                    <li class="sidebar-nav-subhead">project</li>
                    <li>
                        <a
                                href="https://github.com/vassbence/bookstore"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="sidebar-nav-element"
                        >
                            <font-awesome-icon
                                    :icon="['fab', 'github']"
                                    class="icon"
                            />
                            <span>on github</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import Logo from './Logo'
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: 'Navbar',
        data() {
            return {
                menuLinks: [
                    {to: '/search', icon: 'search', text: 'search'},
                    {to: '/favorites', icon: 'heart', text: 'favorites'},
                    {to: '/cart', icon: 'shopping-cart', text: 'cart'},
                ],
                categoriesLinks: [
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
            }
        },
        components: {
            Logo,
        },
        computed: mapGetters(['isCurrentUserRegistered', 'currentUserEmail']),
        methods: mapActions(['logout'])
    }
</script>

<style scoped lang="scss">
    #sidebar {
        display: block;
        user-select: none;
        font-size: 0.875rem;
        font-weight: 700;
        text-transform: uppercase;

        @media (min-width: 768px) {
            position: sticky;
            top: 2rem;
            display: flex;
            height: calc(100vh - 4rem);
            justify-content: flex-end;
            padding-right: 1.75rem;
            box-shadow: inset -1px 0 0 var(--accents-2);
        }
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li:nth-child(1) {
        margin-top: 0;
    }

    .sidebar-nav-element {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        color: var(--gray);
        text-decoration: none;
        padding: 8px 0;

        &.router-link-exact-active {
            color: var(--black);
        }

        &:active {
            opacity: 0.5;
        }
    }

    .sidebar-nav-subhead {
        display: inline-flex;
        align-items: center;
        margin-top: 2rem;
        color: var(--black);
    }

    .icon {
        margin-right: 8px;
    }

    #logo {
        display: none;
        @media (min-width: 768px) {
            display: block;
        }
    }
</style>
