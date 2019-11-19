<template>
  <div>
    <HeaderLogged :user="user"></HeaderLogged>
    <div class="container mx-auto px-4 py-6">
      <div class="text-xl">Welcome to your Dashboard</div>
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
          // this.$route.push('/');
        }
      });
  },
};
</script>
