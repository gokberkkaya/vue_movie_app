<template>
  <div>
    <div class="h-96 grid grid-cols-1 sm:grid-cols-5 d:cols-4 lg:cols-4">
      <MovieItem :key="movie.id" v-for="movie in movies" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieItem from "../items/MovieItem";

export default {
  components: {
    MovieItem,
  },
  data: function () {
    return {
      movies: [],
    };
  },
  async mounted() {
    try {
      const response = await window.$http.get("/tv/top_rated");

      this.movies = response.data.results.slice(0, 5);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
