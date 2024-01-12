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
            <button v-on:click="getCategory('PopularTVShows')">
              On TV Show
            </button>
            <button v-on:click="getCategory('TopRatedMovies')">
              Top Rated Movies
            </button>
            <button v-on:click="getCategory('TopRatedTVShows')">
              Top Rated TV Shows
            </button>
          </div>
        </div>
        <ItemCategories
          :key="selectedCategory"
          :categoryConfig="categoryConfigs[selectedCategory]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./header/NavbarSide";
import Searchbar from "./header/SearchBar";
import ItemCategories from "./ItemCategories.vue";

export default {
  data() {
    return {
      selectedCategory: "PopularMovies",
      categoryConfigs: {
        PopularMovies: { endpoint: "/movie/popular" },
        PopularTVShows: { endpoint: "/tv/popular" },
        TopRatedMovies: { endpoint: "/movie/top_rated" },
        TopRatedTVShows: { endpoint: "/tv/top_rated" },
      },
    };
  },
  methods: {
    getCategory(category) {
      this.selectedCategory = category;
    },
  },
  computed: {},
  watch: {},
  components: {
    Navbar,
    Searchbar,
    ItemCategories,
  },
};
</script>

<style></style>
