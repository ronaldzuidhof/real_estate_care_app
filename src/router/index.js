
// imports
import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import store from "../store/index";

// create routes
const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            requiresAuth: true,
        },
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
        meta: {
            requiresAuth: true,
        },
        // Lazzy loading
        component: () => import(/* webpackChunkName: "ScheduledView" */ '@/views/ScheduledView.vue')
    },
    {
        path: '/completed',
        name: 'completed',
        meta: {
            requiresAuth: true,
        },
        // Lazzy loading
        component: () => import(/* webpackChunkName: "CompletedView" */ '@/views/CompletedView.vue')
    },
    {
        path: '/details',
        name: 'details',
        meta: {
            requiresAuth: true,
        },
        // Lazzy loading
        component: () => import(/* webpackChunkName: "DetailsView" */ '@/views/DetailsView.vue')
    },
    {
        path: '/documentation',
        name: 'documentation',
        meta: {
            requiresAuth: true,
        },
        // Lazzy loading
        component: () => import(/* webpackChunkName: "KnowledgeBaseView" */ '@/views/DocumentationView.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        meta: {
            requiresAuth: true,
        },
        // Lazzy loading
        component: () => import(/* webpackChunkName: "SettingsView" */ '@/views/SettingsView.vue')
    },
    {
        path: '/notifications',
        name: 'notifications',
        meta: {
            requiresAuth: true,
        },
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
router.beforeEach((to, from, next) => {
    // check if a user has to be logged in
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // if the user is logged in follow the link
        if (store.state.user.loggedIn){
            next()
        // user is not logged in, redirect to login page
        } else {
            next('login')
        }
    // user does nog have to be logged in
    } else {
    
       next()
    }
})


export default router;