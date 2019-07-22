<template>
    <div id="page">
        <UserForm v-model="user" @input="login">
            <template v-slot:header>
                <h2>
                    <font-awesome-icon
                            style="margin-right: 1rem"
                            icon="sign-in-alt"
                    />
                    <span>Log in</span>
                </h2>
            </template>
            <template v-slot:button-text
            >Log in
            </template>
            <template v-slot:bottom-link>
                <router-link to="/register">Register a new account</router-link>
            </template>
        </UserForm>
    </div>
</template>

<script>
    import UserForm from '../components/UserForm'
    import firebase from "firebase"

    export default {
        name: 'login',
        components: {
            UserForm,
        },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                },
            }
        },
        methods: {
            async login() {
                try {
                    await firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
                    this.$router.push('/')
                } catch (e) {
                    alert(e)
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    #page {
        min-height: 100vh;
        padding: 20vh 1rem 0;
        margin: 0 auto;
    }
</style>
