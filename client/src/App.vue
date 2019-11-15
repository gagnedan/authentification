<template>
<!-- eslint-disable max-len -->
<div>
  <Header></Header>
  <router-view />
</div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style></style>
