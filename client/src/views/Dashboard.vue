<template>
  <div class="container mx-auto px-4 py-6">
    <div class="text-xl">Welcome to your Dashboard</div>
  </div>
</template>

<script>
const API_URL = 'http://localhost:5000/api/';
export default {

  data: () => ({
    user: {},
  }),

  mounted() {
    fetch(API_URL, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    }).then(response => response.json())
      .then((result) => {
        if (result.user) {
          this.user = result.user;
        } else {
          localStorage.removeItem('token');
          this.$router.push('/');
        }
      });
  },
};
</script>
