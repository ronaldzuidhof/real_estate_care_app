// Import vue3-touch events and use with vue app

import { createApp } from 'vue'
import Vue3TouchEvents from "vue3-touch-events";
import App from './App.vue'

const app = createApp(App);
app.use(Vue3TouchEvents);
app.mount("#app");
