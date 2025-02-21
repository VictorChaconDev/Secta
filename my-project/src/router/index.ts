import { createRouter, createWebHistory } from "vue-router";
import MainView from "../components/main/MainView.vue";
import PerfilsView from "../components/perfils/perfilsView.vue";
import ReclutatsView from "../components/perfils/reclutatsView.vue";
import TopSecretView from "../components/topSecret/topSecretView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
    },{
    path: "/perfils",
      name: "perfils",
      component: PerfilsView,
    },{
    path: "/reclutats",
      name: "reclutats",
      component: ReclutatsView,
    },{
    path: "/top-secret",
      name: "Top Secret",
      component: TopSecretView
    }
  ],
});

export default router;
