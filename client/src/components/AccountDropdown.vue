<template>
  <div class="relative">
    <!-- eslint-disable max-len -->
    <button @click="isOpen = !isOpen" type="button" class="relative z-10 block focus:outline-none p-1 btn">
      <div class="flex items-center">
        <div
          class="flex justify-center items-center h-10 w-10 rounded-full border border-gray-700 bg-white"
        >
          <span class="text-xl text-blue-brand font-bold uppercase">
            {{ user.initial }}
          </span>
        </div>
        <div class="ml-3">
          <div class="text-sm text-white text-left name">
            {{ user.firstname }} {{ user.lastname }}
          </div>
          <div class="text-xs text-white uppercase tracking-wide name">
            {{ user.company }}
          </div>
        </div>
        <div class="ml-3">
          <svg
            class="fill-current text-white h-5 w-5 name"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 h-full w-full bg-black opacity-25 cursor-default"
      tabindex="-1"
      ></button>
    <div v-if="isOpen" class="absolute mt-2 bg-white rounded-lg py-2 shadow-md w-64 right-0">
      <a
        class="block px-4 py-2 text-gray-800 hover:bg-blue-brand hover:text-white"
        href="javascript:void(0)" @click="logout()">
        Logout
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data: () => ({
    isOpen: false,
  }),
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    },
  },
  created() {
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false;
      }
    };
    document.addEventListener('keydown', handleEscape);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape);
    });
  },


};
</script>

<style lang="scss">
.btn {
  border: 2px solid #4987ea;
  border-radius: 0.5rem;

  &:hover {
    padding: 4px 4px;
    border: 2px solid #e2e8f0;
    border-radius: 0.5rem;
  }
}
</style>
