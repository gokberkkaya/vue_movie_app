import { createStore } from "vuex";

export default createStore({
  state: {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  mutations: {
    toggleFavorite(state, movie) {
      const index = state.favorites.findIndex(
        (favorite) => favorite.id === movie.id
      );

      if (index === -1) {
        state.favorites.push(movie);
      } else {
        state.favorites.splice(index, 1);
      }

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  actions: {
    // Gerekirse API istekleri buraya eklenebilir
  },
  getters: {
    isFavorited: (state) => (movie) => {
      return state.favorites.some((favorite) => favorite.id === movie.id);
    },
  },
});
