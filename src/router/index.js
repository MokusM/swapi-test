import Vue from "vue";
import VueRouter from "vue-router";
import Films from "../views/Films";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Films",
    component: Films
  },
  {
    path: "/films/:id/",
    props: true,
    name: "FilmsPage",
    component: () => import("../views/Films/FilmsPage")
  },
  {
    path: "/actors",
    name: "Actors",
    component: () => import("../views/Actors")
  },
  {
    path: "/ships",
    name: "Ships",
    component: () => import("../views/Ships")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
