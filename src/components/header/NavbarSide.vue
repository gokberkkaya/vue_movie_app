<template>
  <div class="w-full justify-center flex bg-black border-b border-gray-800">
    <div class="w-9/12">
      <ul class="flex items-center w-full h-24">
        <li class="ml-8 mr-8 text-4xl w-44">
          <router-link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            />
          </router-link>
        </li>
        <li class="ml-9 mr-8 text-xl">
          <router-link to="/movies"> Movies </router-link>
        </li>
        <li class="mr-8 text-xl">
          <router-link to="/tv-shows"> TV Shows </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
