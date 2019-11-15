<template>
<!-- eslint-disable max-len -->
  <div class="container mx-auto px-4 py-6">
    <form>
      <label for="username"
        class="block uppercase tracking-wide text-gray-700 text-xs
        font-bold mb-1">Username
      </label>
      <input type="text" name="username" id="username"
        class="w-1/3 appearance-none block bg-gray-200 text-gray-700 border
        border-gray-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white" />
      <label for="password"
        class="block uppercase tracking-wide text-gray-700 text-xs
        font-bold mb-1">Password
      </label>
      <input type="text" name="password" id="passsword"
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
// @ is an alias to /src


export default {
  name: 'home',
};
</script>
