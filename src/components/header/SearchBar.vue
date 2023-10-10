<template>
  <div class="flex justify-center">
    <div
      class="w-9/12 bg-cover bg-[url('https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png')]"
    >
      <div
        class="h-96 backdrop-brightness-50 p-9 flex flex-col justify-end items-start"
      >
        <div class="text-5xl font-bold mb-2">Welcome.</div>
        <div class="mb-9 text-3xl">
          Millions of movies, TV shows and people to discover. Explore now.
        </div>
        <div class="relative w-full mb-9">
          <input
            type="text"
            class="rounded-full w-full h-12 p-5 text-black focus:outline-none focus:outline-shawod"
            placeholder="Search for a movie, tv show, person......"
          />
          <button
            class="absolute right-0 rounded-full font-medium p-3 bg-rose-700 h-12 w-28"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
