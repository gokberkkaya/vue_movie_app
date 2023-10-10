import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/styles.css";
import api from "./services/api";

window.$http = api;

createApp(App).use(router).mount("#app");
