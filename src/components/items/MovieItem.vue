<template>
  <div class="p-5">
    <img :src="posterPath" class="bg-cover h-full w-full rounded-lg" />
    <div class="flex mt-2">
      <h3 class="font-bold mr-2">{{ movie.title || movie.name }}</h3>
      |
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="orange"
        viewBox="0 0 24 24"
        class="w-6 h-6 ml-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
      <div class="text-s ml-1">{{ movie.vote_average * 10 }}%</div>
    </div>
    <div class="text-sm mt-1">
      {{ movie.release_date || movie.first_air_date }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
    },
  },
  computed: {
    posterPath() {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
    },
  },
};
</script>

<style></style>
