<template>
  <div>
    <HeaderLogged></HeaderLogged>
    <div class="container mx-auto px-4 py-6">
      <div class="text-xl">Welcome to your Dashboard</div>
    </div>
  </div>
</template>

<script>
import HeaderLogged from '../components/HeaderLogged.vue';

export default {
  components: {
    HeaderLogged,
  },
};
</script>
