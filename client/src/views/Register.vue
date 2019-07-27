<template>
  <div id="page">
    <UserForm v-model="user" @input="onInput">
      <template v-slot:header>
        <h2>
          <font-awesome-icon style="margin-right: 1rem" icon="user-plus" />
          <span>Register</span>
        </h2>
      </template>
      <template v-slot:button>
        <Button :is-loading="isLoading" submit type="submit">register</Button>
      </template>
      <template v-slot:bottom-link>
        <router-link id="form-link" to="/login">Already have an account? Log in! </router-link>
      </template>
    </UserForm>
  </div>
</template>

<script>
import UserForm from '../components/UserForm'
import Button from '../components/Button'
import { mapActions } from 'vuex'

export default {
  name: 'register',
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
    ...mapActions(['register']),
    async onInput() {
      this.isLoading = true;
      await this.register(this.user)
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
