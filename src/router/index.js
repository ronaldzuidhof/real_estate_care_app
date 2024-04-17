
// imports
import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import store from "../store/index";

// create routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        // Lazzy loading
        component: () => import(/* webpackChunkName: "LoginView" */ '@/views/LoginView.vue')
    },
    {
        path: '/scheduled',
        name: 'scheduled',
        // Lazzy loading
        component: () => import(/* webpackChunkName: "ScheduledView" */ '@/views/ScheduledView.vue')
    },
    {
        path: '/completed',
        name: 'completed',
        // Lazzy loading
        component: () => import(/* webpackChunkName: "CompletedView" */ '@/views/CompletedView.vue')
    },
    {
        path: '/details',
        name: 'details',
        // Lazzy loading
        component: () => import(/* webpackChunkName: "DetailsView" */ '@/views/DetailsView.vue')
    },
    {
        path: '/documentation',
        name: 'documentation',
        // Lazzy loading
        component: () => import(/* webpackChunkName: "KnowledgeBaseView" */ '@/views/DocumentationView.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        // Lazzy loading
        component: () => import(/* webpackChunkName: "SettingsView" */ '@/views/SettingsView.vue')
    },
    {
        path: '/notifications',
        name: 'notifications',
        // Lazzy loading
        component: () => import(/* webpackChunkName: "SettingsView" */ '@/views/NotificationsView.vue')
    }
]

// create the router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// function to check is the user is logged in (authenticated)
router.beforeEach((to) => {
    if (
        // check is the user is not already logged in
        !store.state.user.userLoggedIn &&
        // avoid a infinite redirect
        to.name !== 'login'
    ) {
        // redirect the user to the login page
        return {name: 'login'}
    }
})



export default router;