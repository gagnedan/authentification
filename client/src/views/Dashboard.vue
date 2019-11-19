<template>
  <!-- eslint-disable max-len -->
  <div>
    <HeaderLogged :user="user"></HeaderLogged>
    <div class="container mx-auto px-4 py-6">
      <div class="text-xl">Welcome to your Dashboard</div>
      <button
        @click.prevent="logout()"
        class="w-1/3 bg-blue-brand text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit" id="form-submit-button">Logout
      </button>
    </div>
  </div>
</template>
<script>
import HeaderLogged from '../components/HeaderLogged.vue';

const API_URL = 'http://localhost:5000/api/';

export default {
  components: {
    HeaderLogged,
  },
  data: () => ({
    user: {

    },
  }),
  mounted() {
    fetch(API_URL, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    }).then(res => res.json())
      .then((result) => {
        if (result.user) {
          console.log(result.user);
          this.user = result.user;
        } else {
          localStorage.removeItem('token');
          this.$router.push('/');
        }
      });
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    },
  },
};
</script>
