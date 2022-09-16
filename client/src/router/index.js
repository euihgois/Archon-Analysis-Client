import { createRouter, createWebHistory } from "vue-router";
import { useCredentialStore } from "../stores/credential";
import HomeView from "../views/HomeView.vue";
import MatchPlayersDetail from "../components/MatchPlayersDetail.vue";
import DetailAnalysis from "../components/DetailAnalysis.vue";
import HeroList from "../components/HeroList.vue";
import HeroBenchmark from "../components/HeroBenchmark.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import Swal from "sweetalert2";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/match/detail/",
          name: "match",
          component: MatchPlayersDetail,
          children: [
            {
              path: ":match_id",
              name: "detail",
              component: MatchPlayersDetail,
            },
            {
              path: ":match_id/:hero_id",
              name: "player",
              component: DetailAnalysis,
            },
          ],
        },
        {
          path: "heroes",
          name: "heroes",
          component: HeroList,
          children: [
            {
              path: ":hero_id",
              name: "benchmark",
              component: HeroBenchmark,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter: async () => {
        const store = useCredentialStore();
        if (store.isLogin) {
          await Swal.fire({
            icon: "error",
            title: "Forbidden",
            text: "You are already logged in!",
          });
          return { name: "home" };
        }
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      beforeEnter: async () => {
        const store = useCredentialStore();
        if (store.isLogin) {
          await Swal.fire({
            icon: "error",
            title: "Forbidden",
            text: "You are already logged in!",
          });
          return { name: "home" };
        }
      },
    },
    { path: "/:pathMatch(.*)*", name: "notfound", component: NotFoundView },
  ],
});

router.beforeEach(() => {
  const store = useCredentialStore();
  if (localStorage.getItem("access_token")) store.isLogin = true;
  else store.isLogin = false;
});

export default router;
