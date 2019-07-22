<template>
    <div id="page">
        <UserForm v-model="user" @input="register">
            <template v-slot:header>
                <h2>
                    <font-awesome-icon
                            style="margin-right: 1rem"
                            icon="user-plus"
                    />
                    <span>Register</span>
                </h2>
            </template>
            <template v-slot:button-text
            >register
            </template>
            <template v-slot:bottom-link>
                <router-link id="form-link" to="/login"
                >Already have an account? Log in!
                </router-link>
            </template>
        </UserForm>
    </div>
</template>

<script>
    import UserForm from '../components/UserForm'
    import firebase from "firebase"

    export default {
        name: 'register',
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
            async register() {
                try {
                    await firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
                    this.$router.push('/')
                } catch (e) {
                    alert(e)
                }
            }
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
