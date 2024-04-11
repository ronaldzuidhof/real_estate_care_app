
// imports
import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
    // routes
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

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// function to check if the user is logged in
//router.beforeEach(async (to, from) => {
    //if (!this.$store.state.user.loggedIn && to.name !== 'login'){
    //if (true && to.name !== 'login'){
    //    console.log(from)
    //    return {name: 'login'}
    //} 
//})

// https://medium.com/@brightikhide/how-to-guard-routes-in-vue-js-c5e85129aa4c


export default router;