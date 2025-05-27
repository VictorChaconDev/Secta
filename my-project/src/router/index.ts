import { createRouter, createWebHistory } from "vue-router";
import MainView from "../components/main/MainView.vue";
import PerfilsView from "../components/perfils/perfilsView.vue";
import ReclutatsView from "../components/perfils/reclutatsView.vue";
import TopSecretView from "../components/topSecret/topSecretView.vue";
import InvestigacioView from "../components/investigacio/investigacioView.vue";
import LidersView from "../components/perfils/lidersView.vue";
import InformacioView from "../components/topSecret/informacioView.vue"
import CreditsView from "../components/topSecret/creditsView.vue";
import BehindTheScenesView from "../components/topSecret/behindTheScenesView.vue";

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
    },{
    path: "/investigacio",
      name: "Investigacio",
      component: InvestigacioView
    },{
    path: "/liders",
      name: "Liders",
      component: LidersView
    },{
    path: "/informacio",
      name: "Informacio",
      component: InformacioView
    },{
    path: "/credits",
      name: "Credits",
      component: CreditsView
    },{
    path: "/behind-the-scenes",
      name: "Behind The Scenes",
      component: BehindTheScenesView
    }
  ],
});

router.afterEach((to) => {
  if (to.path === "/top-secret") {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});

export default router;
