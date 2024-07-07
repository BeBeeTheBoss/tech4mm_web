import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path : "/about_us",
        name : "AboutUs",
        component : () => import("../views/AboutUs.vue")
    },
    {
        path : "/web_services",
        name : "Services",
        component : () => import("../views/WebServices.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router