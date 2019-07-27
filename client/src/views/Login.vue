<template>
  <div id="page">
    <UserForm v-model="user" @input="onInput">
      <template v-slot:header>
        <h2>
          <font-awesome-icon style="margin-right: 1rem" icon="sign-in-alt" />
          <span>Log in</span>
        </h2>
      </template>
      <template v-slot:button>
        <Button :is-loading="isLoading" submit type="submit">Log in</Button>
      </template>
      <template v-slot:bottom-link>
        <router-link to="/register">Register a new account</router-link>
      </template>
    </UserForm>
  </div>
</template>

<script>
import UserForm from '../components/UserForm'
import Button from '../components/Button'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  components: {
    UserForm,
    Button
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['login']),
    async onInput() {
      this.isLoading = true;
      await this.login(this.user)
      this.isLoading = false;
    }
  },
}
</script>

<style scoped lang="scss">
#page {
  background-color: var(--white);
  min-height: 100vh;
  padding: 20vh 1rem 0;
  margin: 0 auto;

  @media (min-width: 768px) {
    background-color: var(--accents-1);
  }
}
</style>
