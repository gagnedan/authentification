<template>
  <!-- eslint-disable max-len -->
  <div>
    <HeaderLogged :user="user"></HeaderLogged>
    <div class="flex px-4 py-6">
      <div class="w-full">
        <div class="text-3xl text-gray-800 uppercase tracking-wide">Tableau de bord</div>
      </div>
    </div>
    <div class="flex mb-4 px-4">
      <div class="w-1/3">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-4 py-4">
            <div class="font-bold text-normal text-gray-700 uppercase tracking-wide">Éditeur de revue de presse</div>
          </div>
          <div class="px-4 mb-4">
            <a
              @click="getCompanies()"
              href="javascript:void(0)"
              class="block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mb-2">
              Catégories</a>
            <a href="javascript:void(0)" class="block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mb-2">Mots-Clés</a>
            <a href="javascript:void(0)" class="block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mb-2">Adresses de courriel</a>
          </div>
        </div>
      </div>
      <div class="w-2/3">
      <div v-if="companies.length > 0" class="absolute">
        <select
          class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="" selected disabled>Veuillez choisir une entreprise</option>
          <option
            v-for="company in companies"
            :key="company.value"
            :value="company.value">
            {{company.text}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderLogged from '../components/HeaderLogged.vue';

const API_URL = 'http://localhost:5000/api/';
const COMPANY_URL = 'http://localhost:5000/api/company';

export default {
  components: {
    HeaderLogged,
  },
  data: () => ({
    user: {},
    companies: {},
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
    getCompanies() {
      fetch(COMPANY_URL, {

      }).then(res => res.json())
        .then((result) => {
          this.companies = result.company;
        });
    },
  },
};
</script>
