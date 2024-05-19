import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "./App.vue";
import Landing from "./view/Landing.vue";
import Home from "./view/Home.vue";
import "./style.css";

const routes = [
  { path: "/", component: Home },
  { path: "/landing", component: Landing },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

const app = createApp(App).use(router).use(pinia).mount("#app");
