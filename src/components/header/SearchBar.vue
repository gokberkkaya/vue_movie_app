<template>
  <div class="relative flex justify-center">
    <div
      class="w-9/12 bg-cover relative"
      :style="{
        'background-image':
          'url(https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png)',
      }"
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
            v-model="searchQuery"
            @input="handleSearch"
            type="text"
            class="rounded-full w-full h-12 p-5 text-black focus:outline-none focus:outline-shadow"
            placeholder="Search for a movie, tv show, person......"
          />
          <button
            class="absolute right-0 rounded-full font-medium p-3 bg-rose-500 h-12 w-28"
            @click="searchMovies"
          >
            Search
          </button>
        </div>
        <div
          v-if="searchResults.length > 0 || searchResultsFetched"
          class="search-results absolute left-0 bg-white text-slate-800 border-t border-inherit shadow-2xl"
        >
          <ul>
            <li
              v-for="result in searchResults"
              :key="result.id"
              class="border-b border-inherit p-2 pl-3 cursor-pointer hover:bg-gray-200"
            >
              {{ result.title }}
            </li>
          </ul>
          <div
            v-if="!searchResults.length && searchResultsFetched"
            class="p-2 pl-3"
          >
            <p>No results found</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [],
      searchResultsFetched: false,
    };
  },
  watch: {
    searchQuery: debounce(function (newQuery) {
      if (newQuery.length >= 3) {
        this.fetchSearchResults(newQuery);
      } else {
        this.searchResults = [];
      }
    }, 500),
  },
  methods: {
    async fetchSearchResults(query) {
      try {
        const response = await window.$http.get("/search/movie", {
          params: {
            query,
          },
        });

        this.searchResults = response.data.results.slice(0, 10);
      } catch (error) {
        console.error("Error fetching search results:", error);
        this.searchResults = [];
      }
    },
    handleSearch() {
      this.searchResultsFetched = false;
      if (this.searchQuery.length >= 3) {
        this.fetchSearchResults(this.searchQuery);
      } else {
        this.searchResults = [];
      }
    },
    searchMovies() {
      if (!this.searchResults.length) {
        this.searchResultsFetched = true;
      }

      this.fetchSearchResults(this.searchQuery);
    },
  },
};
</script>

<style>
.search-results {
  top: 19.5rem;
  width: 79.5%;
  left: 3.75rem !important;
}
</style>
