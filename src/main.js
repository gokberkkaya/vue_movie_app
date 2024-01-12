import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // Import the Vuex store
import "@/assets/css/styles.css";
import api from "./services/api";

window.$http = api;

createApp(App).use(router).use(store).mount("#app");
