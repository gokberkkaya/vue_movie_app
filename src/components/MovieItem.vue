<template>
  <div class="p-5">
    <img :src="posterPath" class="bg-cover rounded-lg" />
    <div class="flex justify-between mt-2 mb-2 pb-1 border-b border-inherit">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="orange"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <div class="text-s ml-1">{{ movie.vote_average.toFixed(1) }}</div>
      </div>
      <button @click="toggleFavorite" class="favorite-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          :fill="isFavorited ? 'red' : 'white'"
          height="18"
          width="18"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M372.87,33.391c-46.903,0-90.88,23.598-116.87,62.152c-25.99-38.555-69.967-62.152-116.87-62.152    C62.413,33.391,0,95.804,0,172.522c0,37.935,14.164,73.011,39.88,98.76l200.38,200.804c4.207,4.207,9.794,6.522,15.74,6.522    s11.532-2.315,15.74-6.521l200.314-200.772C497.815,245.522,512,210.435,512,172.522C512,95.804,449.587,33.391,372.87,33.391z"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
    <h3 class="font-bold mr-2">{{ movie.title || movie.name }}</h3>
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
    isFavorited() {
      return this.$store.getters.isFavorited(this.movie);
    },
  },
  methods: {
    toggleFavorite() {
      this.$store.commit("toggleFavorite", this.movie);
    },
  },
};
</script>

<style></style>
