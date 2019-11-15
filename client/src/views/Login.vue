<template>
<!-- eslint-disable max-len -->
  <div class="container mx-auto px-4 py-6">
    {{errorMessage}}
    <form @submit.prevent="login()">
      <label for="username"
        class="block uppercase tracking-wide text-gray-700 text-xs
        font-bold mb-1">Nom d'utilisateur
      </label>
      <input
        v-model="user.username"
        type="text" name="username" id="username"
        class="w-1/3 appearance-none block bg-gray-200 text-gray-700 border
        border-gray-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white" />
      <label for="password"
        class="block uppercase tracking-wide text-gray-700 text-xs
        font-bold mb-1">Mot de passe
      </label>
      <input
        v-model="user.password"
        type="text" name="password" id="passsword"
        class="w-1/3 appearance-none block bg-gray-200 text-gray-700 border
        border-gray-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white" />
      <button
        class="w-1/3 bg-blue-brand text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit" id="form-submit-button">
        <i class="fa fa-check push-5-r"></i> Login
      </button>
    </form>
  </div>
</template>

<script>

const LOGIN_URL = 'http://localhost:5000/api/auth/login';

export default {
  data: () => ({
    errorMessage: '',
    user: {
      username: '',
      password: '',
    },
  }),
  methods: {
    login() {
      this.errorMessage = '';
      if (this.validUser()) {
        const body = {
          username: this.user.username,
          password: this.user.password,
        };

        fetch(LOGIN_URL,
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(body),
          }).then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }).then((result) => {
          this.$router.push('/dashboard');
        }).catch((error) => {
          this.errorMessage = error.message;
        });
      }
    },
    validUser() {
      if (this.user.username && this.user.password) {
        return true;
      }
      this.errorMessage = 'Invalid login';
      return false;
    },
  },
};
</script>
