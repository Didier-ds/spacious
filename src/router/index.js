import { createRouter, createWebHistory } from "vue-router";
import Planets from "../views/Planets.vue";
import Character from "../views/Character.vue";

const routes = [
  {
    path: "/",
    name: "Planets",
    component: Planets,
  },
  {
    path: "/characters",
    name: "Character",
    component: Character,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
