<template>
  <!-- eslint-disable max-len -->
  <div>
    <HeaderLogged :user="user"></HeaderLogged>
    <div class="container mx-auto px-4 py-6">
      <div class="text-3xl pb-6 text-gray-800 uppercase tracking-wide">Tableau de bord</div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-4 py-4">
        <div class="font-bold text-normal text-gray-700 uppercase tracking-wide">Éditeur de revue de presse</div>
      </div>
      <div class="px-4 mb-4">
        <a href="javascript:void(0)" class="block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mb-2">Catégories</a>
        <a href="javascript:void(0)" class="block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mb-2">Mots-Clés</a>
        <a href="javascript:void(0)" class="block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mb-2">Adresses de courriel</a>
      </div>
    </div>
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
          this.user = result.user;
        } else {
          this.logout();
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
