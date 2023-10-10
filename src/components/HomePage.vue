<template>
  <div class="text-white">
    <Navbar />
    <Searchbar />
    <div class="flex justify-center">
      <div class="w-9/12 mt-8">
        <div class="flex items-center mb-3">
          <div class="ml-5 text-2xl">What's Popular</div>
          <div
            class="rounded-full border-solid border border-neutral-50 flex gap-9 ml-12 pl-4 pr-4 pt-1 pb-1"
          >
            <button v-on:click="getCategory('.PopularTVShows')">
              On TV Show
            </button>
            <button v-on:click="getCategory('.TopRatedMovies')">
              Top Rated Movies
            </button>
            <button v-on:click="getCategory('.TopRatedTVShows')">
              Top Rated TV Shows
            </button>
          </div>
        </div>
        <PopularMovies class="category PopularMovies" />
        <PopularTVShows class="category PopularTVShows hidden" />
        <TopRatedMovies class="category TopRatedMovies hidden" />
        <TopRatedTVShows class="category TopRatedTVShows hidden" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./header/NavbarSide";
import Searchbar from "./header/SearchBar";
import PopularMovies from "./itemCategories/PopularMovies";
import PopularTVShows from "./itemCategories/PopularTVShows";
import TopRatedMovies from "./itemCategories/TopRatedMovies";
import TopRatedTVShows from "./itemCategories/TopRatedTVShows";

export default {
  methods: {
    getCategory(categorySelector) {
      const $category = document.querySelector(categorySelector);

      document.querySelectorAll(".category").forEach((category) => {
        category.classList.add("hidden");
      });

      $category.classList.remove("hidden");
    },
  },
  computed: {},
  watch: {},
  components: {
    Navbar,
    Searchbar,
    PopularMovies,
    PopularTVShows,
    TopRatedMovies,
    TopRatedTVShows,
  },
};
</script>

<style></style>
